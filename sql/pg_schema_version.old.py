import sys
import hashlib
import click
import psycopg2.extras
import glob
from distutils.version import LooseVersion
from prettytable import PrettyTable


def two():
    return 2
    
# TODO: docker image with python and psql only (apt-get install postgresql-client)
# TODO: replace print() with click.echo() ???

BASELINE_STR = "---baseline---"

CREATE_TABLE_STATEMENT = """
create table myschema.pypg_schema_version (
  filename          text      primary key,
  md5               text,
  installed_rank    serial,
  installed_by      text,
  installed_date    timestamptz,
  execution_time    integer,
  success           boolean
);"""

def pretty_table(baseline, applied_migrations, files):
    ms = { m['filename']    for m in applied_migrations }
    fs = [ f   for f in files   if f['filename'] not in ms ]

    pt = PrettyTable()
    tbl = sorted( applied_migrations + fs + [baseline],   # sorting is stable, showing baseline after a migration with same version
                  key = lambda x: LooseVersion(x["version"]))   # http://stackoverflow.com/questions/11887762/how-to-compare-version-style-strings
    for i in tbl:
        pt.add_row([
            i.get('filename', ''),    
            i.get('md5', ''),    
            i.get('installed_rank', ''),    
            i.get('installed_by', ''),    
            i.get('installed_date', ''),    
            i.get('execution_time', ''),    
            i.get('success', '')])
    pt.align = 'l'
    pt.header = False   # TODO: add header programmatically
    print(pt)

INSERT_STATEMENT = """
insert into myschema.pypg_schema_version (
  filename,
  md5,
  installed_by,
  installed_date,
  execution_time,
  success
)
values (%s, %s, %s,
        now(),
        %s, %s);"""

SELECT_STATEMENT = """select * from myschema.pypg_schema_version;"""

def table_exists():
    cur.execute( "select          to_regclass('myschema.pypg_schema_version');" )     # http://stackoverflow.com/questions/20582500/how-to-check-if-a-table-exists-in-a-given-schema
    return bool(  cur.fetchone()["to_regclass"]  )

############################################################

# TODO: absolute filenames only, maybe when loading the configuration
def md5(fname):   # http://stackoverflow.com/questions/3431825/generating-a-md5-checksum-of-a-file
    hash = hashlib.md5()
    with open(fname, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash.update(chunk)
            return hash.hexdigest()

def version_from_filename(f):   # TODO: customization for prefix and delimiter
    return f.split("__")[0][1:]
            
def check_there_are_no_files_with_same_versions(files):
    seen = set()
    duplicated_versions = []
    for f in files:
        v = f["version"]
        if v not in seen:
            seen.add(v)
        else:
            duplicated_versions.append(v)
    if duplicated_versions:
        print("there are files with same version: ") # TODO: good message
        print(duplicated_versions)
        sys.exit(1)

def check_version_table_exists():
    if not table_exists():
        print("the myschema.pypg_schema_version table doesn't exist, please baseline it")
        sys.exit(1)

def check_there_is_no_version_table():
    if table_exists():
        print("the myschema.pypg_schema_version table exist, won't baseline it")
        sys.exit(1)

def create_table_and_insert_baseline(version):
    cur.execute(CREATE_TABLE_STATEMENT)
    cur.execute(INSERT_STATEMENT, ("V" + version + "__" + BASELINE_STR, None, "Administrator", 0, True))
    conn.commit()

        
def is_baseline(migration):
    return migration["filename"].split("__")[1] == BASELINE_STR \
        and migration["md5"] is None

def fetch_baseline_and_migrations_then_check_baseline():
    cur.execute(SELECT_STATEMENT)
    applied_migrations_with_baseline = cur.fetchall()   # yes, i know, we use [baseline] + applied_migrations later, maybe fix this later if performance goes down because of this

    baseline = None
    baselines = []
    applied_migrations = []
    for m in applied_migrations_with_baseline:
        if is_baseline(m):
            baselines.append(m)
        else:
            applied_migrations.append(m)
    if len(baselines) == 0:
        print("there is no baseline, must be exactly one")
        sys.exit(1)
    if len(baselines) > 1:
        print("there are more than one baselines, must be exactly one")
        sys.exit(1)
    baseline = baselines[0]

    baseline["version"] = version_from_filename(baseline["filename"])
    for m in applied_migrations:
        m["version"] = version_from_filename(m["filename"])

    return baseline, applied_migrations

def check_migrations_hashes_against_files(applied_migrations, files):
    filenames_set = { f["filename"]    for f in files }
    file_md5_map = {  f["filename"]: md5(f["filename"])      for f in files  }
    mismatched_migrations = [m    for m in applied_migrations
                             if m["filename"] not in filenames_set  or  m["md5"] != file_md5_map[ m["filename"] ]]
    if mismatched_migrations:
        print("applied migration filename or md5 mismatch")
        print(mismatched_migrations)
        sys.exit(1)


def check_migrations_were_applied_in_order(applied_migrations):
    # TODO: check if there are migrations applied out of order
    M = sorted(applied_migrations,
               key = lambda x: LooseVersion(x["version"]))
    migrations_applied_out_of_order = any( M[i]['installed_rank'] > M[i+1]['installed_rank']
                                           for i in range(len(M)-1))
    if migrations_applied_out_of_order:
        print("there are migrations which were applied out of order")
        sys.exit(1)

def check_all_pending_files_are_after_last_applied_migration(baseline, applied_migrations, files):
    last_applied_migration = max( [baseline] + applied_migrations,
                                  key = lambda x: LooseVersion(x['version']) )
    last_applied_version = last_applied_migration['version']
    ms = { m['filename']    for m in applied_migrations }   # duplicate from pretty_table
    files_before_last_version = [ f   for f in files
                                  if f['filename'] not in ms and (LooseVersion(baseline['version']) < LooseVersion(f['version']) < LooseVersion(last_applied_version))]
    if files_before_last_version:
        print("files_before_last_version:")
        print(files_before_last_version)
        sys.exit(1)

    return last_applied_version

def connect_to_db():
    global conn   # I know what you think,
    global cur    # but no, this is perfectly fine, because this simplifyes the code here
    conn = psycopg2.connect("host='172.17.0.3' port='5432' dbname='ryctoicdb' user='administrator' password='secret'")
    cur = conn.cursor(cursor_factory = psycopg2.extras.RealDictCursor)

def get_sql_migration_files():
    files = [ { "filename": f, "md5": md5(f), "version": version_from_filename(f)}
              for f in glob.glob("V*__*.sql") ]
    sorted_files = sorted(files,
                          key = lambda x: LooseVersion(x["version"]))
    return sorted_files

def check_version_looks_like_a_version(version):
    try:
        LooseVersion(version) > LooseVersion("0")
    except TypeError:
        print("version doesn't look like a version, must start with a number")
        sys.exit(1)

@click.group()
@click.option('--conf-file', required=True)
def cli(conf_file):
    connect_to_db()

@cli.command()
@click.argument('version')
def baseline(version):
    check_there_is_no_version_table()
    check_version_looks_like_a_version(version)
    create_table_and_insert_baseline(version)
    
@cli.command()
def info():
    check_everything( print_info = True )

@cli.command()
def validate():
    check_everything( print_info = False )

@cli.command()
@click.option('--target', required=True)
def migrate(target):
    baseline, applied_migrations, files, last_applied_version = check_everything( print_info = False )

    # check_target_exists()
    pending_files = [ f   for f in files    if LooseVersion(f['version']) > LooseVersion(last_applied_version)]
    if not any( target == f['filename']   for f in files ):
        print("target doesn't exist")
        sys.exit(1)
    if not any( target == f['filename']   for f in pending_files ):
        print("target is must be after the last applied migration")
        sys.exit(1)
    
    # migrate_up_to_target()
    files_to_apply = [ f   for f in pending_files   if LooseVersion(f['version']) <= LooseVersion(version_from_filename(target))]

    for f in files_to_apply:
        print(f)
        cur.execute(INSERT_STATEMENT, (f['filename'], f['md5'], "Administrator", 0, True))
        conn.commit()


    
def check_everything( print_info ):
    check_version_table_exists()
    files = get_sql_migration_files()
    check_there_are_no_files_with_same_versions(files)
    baseline, applied_migrations = fetch_baseline_and_migrations_then_check_baseline()
    check_migrations_hashes_against_files(applied_migrations, files)   # applied migrations are subset of existing files
    if print_info:
        pretty_table(baseline, applied_migrations, files)
    check_migrations_were_applied_in_order(applied_migrations)
    last_applied_version = check_all_pending_files_are_after_last_applied_migration(baseline, applied_migrations, files)   # we don't care about files before baseline
    return baseline, applied_migrations, files, last_applied_version


        
if __name__ == '__main__':
    cli()
    if error:
        sys.exit(1)




# http://stackoverflow.com/questions/14021998/using-psql-to-connect-to-postgresql-in-ssl-mode
# TODO: CRITICAL: use sslmode=verify-full, because sslmode=require trusts the network will connect to the server we want, which is insecure, allows mitm
# psql "service=myservice sslmode=require"
# psql postgresql://dbmaster:5433/mydb?sslmode=require
# psql "sslmode=require host=localhost dbname=test"


# http://stackoverflow.com/questions/17261061/execute-sql-schema-in-psycopg2-in-python


# psql -f scriptname.sql 2>&1 | tee logname.txt
# \set VERBOSITY verbose

            
