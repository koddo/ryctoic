import os
import sys
import hashlib
import click
import psycopg2.extras
import glob
import subprocess
import configparser
from distutils.version import LooseVersion
from prettytable import PrettyTable
from collections import namedtuple

# TODO: good messages
# TODO: command line command help
# TODO: stored function which returns latest applied migration
# TODO: command that prints latest applied migration
# TODO: all columns not null
# TODO: track sort_rank

DEFAULT_CONF_FILE = os.path.splitext( os.path.basename(__file__) )[0] + '.conf'   # script name - .py  + .conf
DEFAULT_SCHEMA = 'public'
DEFAULT_TABLE = 'pg_schema_version'

BASELINE_STR = "------------baseline------------"

CREATE_TABLE_STATEMENT = """
create table {}.{} (
  filename          text   primary key,
  checksum          text,
  sort_rank         integer,
  installed_rank    serial,
  installed_by      text,
  installed_date    timestamptz default now(),
  execution_time    integer,
  success           boolean
);"""

def pretty_table():
    unapplied_files = [ f   for f in files
                        if f.filename not in applied_migrations_filenames_set ]
    # pt = PrettyTable( list(MyAppliedMigrationTuple._fields) )
    pt = PrettyTable(['filename', 'installed_rank', 'installed_by', 'installed_date', 'execution_time', 'success', 'checksum'])
    tbl = sorted( applied_migrations + unapplied_files + [baseline],   # sorting is stable, showing baseline after a migration with same version
                  key = lambda x: LooseVersion(x.version))   # http://stackoverflow.com/questions/11887762/how-to-compare-version-style-strings
    for r in tbl:
        i = r._asdict()
        pt.add_row([
            i.get('filename', ''),    
            # i.get('sort_rank', ''),    # I decided to not track it, because it's not clear when to update this column. What if an error during a migration?
            i.get('installed_rank', ''),    
            i.get('installed_by', ''),    
            i.get('installed_date', ''),    
            i.get('execution_time', ''),    
            i.get('success', ''),
            # i.get('version', ''),
            i.get('checksum', ''),    
        ])
    pt.align = 'l'
    # pt.header = False   # TODO: add header programmatically
    print(pt)

INSERT_STATEMENT = """
insert into {}.{} (
  filename,
  checksum,
  sort_rank,
  installed_by,
  execution_time,
  success
)
values (%s, %s, %s, %s, %s, %s);"""

UPDATE_STATEMENT = """
update {}.{}
set success=%s
where filename=%s
"""

SELECT_STATEMENT = """select * from {}.{};"""

############################################################

def debug_print(message, lst=None):
    if DEBUG:
        print('--- debug: %s' % (message))
        if lst is None:
            pass
        else:
            if lst:   # non-empty
                for i in lst:
                    print(i)
            else:
                print('empty list')

def error_print(message, lst=[]):
    print('error: %s' % (message))
    for i in lst:
        print(i)

# TODO: absolute filenames only, maybe when loading the configuration
def md5sum(fname):   # http://stackoverflow.com/questions/3431825/generating-a-md5-checksum-of-a-file
    hash = hashlib.md5()
    with open(fname, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash.update(chunk)
            return hash.hexdigest()

def version_from_filename(f):   # TODO: conf
    return f.split("__")[0][1:]

def table_exists():
    cur.execute( "select         to_regclass('{}.{}');".format( cfg('misc', 'schema', default=DEFAULT_SCHEMA),
                                                                cfg('misc', 'table',  default=DEFAULT_TABLE)) )     # http://stackoverflow.com/questions/20582500/how-to-check-if-a-table-exists-in-a-given-schema
    return bool(  cur.fetchone().to_regclass  )

def version_looks_valid(version):
    try:
        LooseVersion(version) > LooseVersion("0")   # yes, we don't care what this returns
    except TypeError:
        return False
    return True

def is_baseline(migration):
    return migration.filename.split("__")[1] == BASELINE_STR \
        and migration.checksum is None

def print_files_sorted_by_looseversion():
    files = sorted(glob.glob("V*__*.sql"),
                   key = lambda x: LooseVersion(version_from_filename(x)))
    for f in files:
        print(f)

def cfg(section, option, default):
    if config.has_option(section, option):
        return config[section][option]
    else:
        return default

        
def read_conf_and_connect_to_db(conf):
    global config
    global conn_str
    global conn   # I know what you think, but no, this is perfectly fine, because this simplifyes the code here
    global cur    # instead of passing as an argument everywhere
    
    try:
        config = configparser.ConfigParser()
        config.read(conf)
    except Exception as e:
        error_print("%s" % (str(e)))
        sys.exit(1)

    try:
        conn_str = ""
        c = config['connection']
        for i in c:
            conn_str +=  "%s=%s " % (i, c[i])
        conn = psycopg2.connect(conn_str)
        cur = conn.cursor(cursor_factory = psycopg2.extras.NamedTupleCursor)
    except psycopg2.Error as e:
        error_print('%s' % (str(e)))
        sys.exit(1)

    debug_print(config)
    debug_print(conn_str)
    
def baseline_after_some_checks(version):
    if not version_looks_valid(version):
        error_print("version doesn't look like a version; probably starts with a letter instead of a number?")
        sys.exit(1)

    if table_exists():
        error_print("won't baseline, table already exists")
        sys.exit(1)

    try:
        cur.execute(CREATE_TABLE_STATEMENT.format( cfg('misc', 'schema', default=DEFAULT_SCHEMA),
                                                   cfg('misc', 'table', default=DEFAULT_TABLE)) )
        cur.execute(INSERT_STATEMENT.format( cfg('misc', 'schema', default=DEFAULT_SCHEMA),
                                             cfg('misc', 'table', default=DEFAULT_TABLE) ),
                    ("V" + version + "__" + BASELINE_STR, None, 0, "Administrator", 0, True))   # TODO: conf filename, user
        conn.commit()
    except psycopg2.Error as e:
        error_print('%s' % (str(e)))
        sys.exit(1)

def check_everything():
    global files
    global baseline
    global applied_migrations
    global applied_migrations_filenames_set
    global last_applied_version
    global MyAppliedMigrationTuple

    if not table_exists():
        error_print("the table doesn't exist, please baseline it")
        sys.exit(1)

    MyFileTuple = namedtuple('MyFileTuple', 'filename checksum version')
    unsorted_files = [ MyFileTuple(filename=f, checksum=md5sum(f), version=version_from_filename(f))
                       for f in glob.glob("V*__*.sql") ]
    files = sorted(unsorted_files,
                   key = lambda x: LooseVersion(x.version))
    debug_print("files:", files)

    # ---------- check there are no files with same version
    seen = set()
    duplicated_versions = []
    for f in files:
        v = f.version
        if v not in seen:
            seen.add(v)
        else:
            duplicated_versions.append(v)
    if duplicated_versions:
        error_print("there are multiple files for a single version:", duplicated_versions)
        sys.exit(1)
    debug_print("seen:", seen)
    debug_print("duplicated_versions:", duplicated_versions)

    # ---------- fetch migrations and check there is exactly one baseline
    cur.execute(SELECT_STATEMENT.format( cfg('misc', 'schema', DEFAULT_SCHEMA),
                                         cfg('misc', 'table', DEFAULT_TABLE)) )
    applied_migrations_raw = cur.fetchall()
    if applied_migrations_raw:
        MyAppliedMigrationTuple = namedtuple('MyAppliedMigrationTuple', applied_migrations_raw[0].__class__._fields + ('version',))   # add field to tuple
    
    baseline = None
    baselines = []
    applied_migrations_unsorted = []
    for m in applied_migrations_raw:
        n = MyAppliedMigrationTuple(*m, version=version_from_filename(m.filename))   # add field to tuple
        if is_baseline(n):
            baselines.append(n)
        else:
            applied_migrations_unsorted.append(n)
    debug_print("baselines:", baselines)
    debug_print("applied_migrations_unsorted:", applied_migrations_unsorted)
    if len(baselines) == 0:
        error_print("there is no baseline, must be exactly one")
        sys.exit(1)
    if len(baselines) > 1:
        error_print("there are more than one baselines, must be exactly one")
        sys.exit(1)
    baseline = baselines[0]
    applied_migrations = sorted(applied_migrations_unsorted,
                                key = lambda x: LooseVersion(x.version))

    # ---------- check applied migrations checksums match corresponding files
    file_checksum_map = {  f.filename: f.checksum      for f in files  }
    filenames_set = set( file_checksum_map.keys() )     # filenames_set = { f.filename    for f in files }
    mismatched_migrations = [m    for m in applied_migrations
                             if m.filename not in filenames_set  or
                             m.checksum != file_checksum_map[ m.filename ]]
    debug_print("file_checksum_map:", file_checksum_map)
    debug_print("filenames_set:", filenames_set)
    debug_print("mismatched_migrations:", mismatched_migrations)
    if mismatched_migrations:
        error_print("applied migration filename or md5 mismatch", mismatched_migrations)
        sys.exit(1)

    # ---------- check migrations were applied in order
    migrations_applied_sorted_wrongly = any( applied_migrations[i].sort_rank > applied_migrations[i+1].sort_rank
                                             for i in range(len(applied_migrations)-1))
    if migrations_applied_sorted_wrongly:
        error_print("error: hm, wrong sort order in applied migrations, order by LooseVersion doesn't match order by order_rank")
        sys.exit(1)

    migrations_applied_out_of_order = any( applied_migrations[i].installed_rank > applied_migrations[i+1].installed_rank
                                           for i in range(len(applied_migrations)-1))
    if migrations_applied_out_of_order:
        error_print("there are migrations which were applied out of order")   # TODO: conf force allow
        sys.exit(1)

    # ---------- make sure there are no unapplied files which and between baseline and last applied migration
    last_applied_migration = max(applied_migrations + [baseline],
                                 key = lambda x: LooseVersion(x.version))
    last_applied_version = last_applied_migration.version
    applied_migrations_filenames_set = { m.filename    for m in applied_migrations }
    unapplied_files_before_last_version = [ f   for f in files
                                            if f.filename not in applied_migrations_filenames_set and
                                            (LooseVersion(baseline.version) < LooseVersion(f.version) < LooseVersion(last_applied_version))]
    if unapplied_files_before_last_version:
        error_print("there are unapplied files which and between baseline and last applied migration", unapplied_files_before_last_version)
        sys.exit(1)

def migrate_up_to_target(target):
    global applied_files
    
    # check target exists
    pending_files = [ f   for f in files
                      if LooseVersion(f.version) > LooseVersion(last_applied_version)]
    if not any( target == f.filename   for f in files ):
        error_print("target doesn't exist")
        sys.exit(1)
    if not any( target == f.filename   for f in pending_files ):
        error_print("target is must be after the last applied migration")
        sys.exit(1)
            
    # migrate
    files_to_apply = [ f   for f in pending_files
                       if LooseVersion(f.version) <= LooseVersion(version_from_filename(target))]

    print('going to apply these files:')
    for f in files_to_apply:
        print(f.filename)
    print('-----')

    logs_dir = cfg('misc', 'logs_dir', default='logs')
    os.makedirs(logs_dir, exist_ok=True)
    
    for f in files_to_apply:
        cur.execute(INSERT_STATEMENT.format( cfg('misc', 'schema', default=DEFAULT_SCHEMA),
                                             cfg('misc', 'table',  default=DEFAULT_TABLE)),
                    (f.filename, f.checksum, 0, "Administrator", 0, False))
        conn.commit()
        with open( os.path.join(logs_dir, f.filename + '.log'), 'a' ) as log:        # TODO: conf this and below
            try:
                # http://petereisentraut.blogspot.ru/2010/03/running-sql-scripts-with-psql.html
                error_code = subprocess.check_call([cfg('misc', 'psql_path', default='psql'),
                                                    ## '--quiet',
                                                    '--echo-all',
                                                    '--no-psqlrc',
                                                    '--pset', 'pager=off',
                                                    '--no-password',
                                                    '-v', 'ON_ERROR_STOP=1',
                                                    '--file', f.filename,
                                                    conn_str
                                                ],
                                                   env={ 'PGOPTIONS'  : '--client-min-messages=warning' },
                                                   universal_newlines=True,
                                                   stdout=log, stderr=log)
            except subprocess.CalledProcessError as e:
                error_print('error while calling psql: %s' % (str(e)))
                sys.exit(1)
        print('done %s, psql cmd error code: %s' % (f.filename, error_code))
        
        if error_code == 0:
            cur.execute(UPDATE_STATEMENT.format( cfg('misc', 'schema', default=DEFAULT_SCHEMA),
                                                 cfg('misc', 'table', default=DEFAULT_TABLE)),
                        (True, f.filename))
        conn.commit()

############################################################
### the command line interface
############################################################

# tried this: http://click.pocoo.org/5/commands/#merging-multi-commands
# but options got lost and didn't work for me after merging, I didn't find a reason, maybe I'm missing something
# hence some copypaste here with --conf option
# but anyway I like the way this param can be passed at the very end, after any command and argument
# with a group I would have to pass it before anything
# example: $scriptname baseline 0 --conf dev.conf

@click.group()
@click.option('--debug/--no-debug', default=False)
def cli(debug):
    global DEBUG
    DEBUG = debug
    if DEBUG: click.echo('debug mode on')

@cli.command()
def local():
    """list files in LooseVersion order"""
    print_files_sorted_by_looseversion()
    
@cli.command()
@click.argument('version')
@click.option('--conf', default=DEFAULT_CONF_FILE)
def baseline(version, conf):   # TODO: pass version _or_ file here
    read_conf_and_connect_to_db(conf)
    baseline_after_some_checks(version)
    
@cli.command()
@click.option('--conf', default=DEFAULT_CONF_FILE)
def info(conf):
    read_conf_and_connect_to_db(conf)
    check_everything()
    pretty_table()
    
@cli.command()
@click.option('--conf', default=DEFAULT_CONF_FILE)
def validate(conf):
    read_conf_and_connect_to_db(conf)
    check_everything()
    
@cli.command()
@click.argument('target')
@click.option('--conf', default=DEFAULT_CONF_FILE)
def migrate(target, conf):
    read_conf_and_connect_to_db(conf)
    check_everything()
    migrate_up_to_target(target)

if __name__ == '__main__':
    cli()





