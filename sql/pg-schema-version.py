import hashlib
import click
import psycopg2
import glob
import distutils.version

def md5(fname):   # http://stackoverflow.com/questions/3431825/generating-a-md5-checksum-of-a-file
    hash = hashlib.md5()
    with open(fname, "rb") as f:
        for chunk in iter(lambda: f.read(4096), b""):
            hash.update(chunk)
            return hash.hexdigest()

# print(md5("docker-compose.yml"))

def table_exists():
    cur.execute("select to_regclass('myschema.pypg_schema_version');")     # http://stackoverflow.com/questions/20582500/how-to-check-if-a-table-exists-in-a-given-schema
    return cur.fetchone()[0]

def show_migrations():
    pass


@click.group()
@click.option('--conf-file', required=True)
def cli(conf_file):
    click.echo('conf-file = ' + conf_file)

@cli.command()
def info():
    click.echo('command = info')
    if not table_exists():
        print( "the myschema.pypg_schema_version table doesn't exist, please baseline it")
        show_migrations()
    else:
        cur.execute("select * from myschema.pypg_schema_version;")
        print( cur.fetchall() )
        # arr2 = [(x[0][1:], x[1]) for x in (y.split("__") for y in glob.glob("V*__*.sql"))]
        arr2 = [ (y.split("__")[0][1:], y) for y in glob.glob("V*__*.sql") ]
        # print( arr2 )
        # print( sorted(arr2, key=lambda x: distutils.version.LooseVersion(x[0])) )   # http://stackoverflow.com/questions/11887762/how-to-compare-version-style-strings
        arr3 = sorted(arr2, key=lambda x: distutils.version.LooseVersion(x[0]))
        for i in arr3:
            print(i)
        
        
    

@cli.command()
@click.argument('version')
def baseline(version):
    click.echo('command = baseline')
    click.echo('version = ' + version)
    if table_exists():
        click.echo('the myschema.pypg_schema_version table already exists, won\'t baseline it')
    else:
        cur.execute("create table myschema.pypg_schema_version (installed_rank serial primary key, filename text, md5 text, installed_by text, installed_date timestamptz, execution_time integer, success boolean);")
        cur.execute("insert into myschema.pypg_schema_version (filename, md5, installed_by, installed_date, execution_time, success) values (%s, %s, %s, now(), %s, %s);", ("V0__baseline", None, "Administrator", 0, True))
        conn.commit()
    # print(cur.fetchone())


@cli.command()
@click.argument('target')
def migrate(target):
    click.echo('command = migrate')
    click.echo('target = ' + target)

# TODO: maybe add a validate command that would fail on any differences in checksums or names


if __name__ == '__main__':
    global conn   # I know what you think,
    global cur    # but no, this is perfectly fine, because this simplifyes the code here --- instead of passing as args everywhere
    conn = psycopg2.connect("host='172.17.0.3' port='5432' dbname='ryctoicdb' user='administrator' password='secret'")
    cur = conn.cursor()
    cli()





# http://stackoverflow.com/questions/14021998/using-psql-to-connect-to-postgresql-in-ssl-mode
# TODO: CRITICAL: use sslmode=verify-full, because sslmode=require trusts the network will connect to the server we want, which is insecure, allows mitm
# psql "service=myservice sslmode=require"
# psql postgresql://dbmaster:5433/mydb?sslmode=require
# psql "sslmode=require host=localhost dbname=test"







# http://stackoverflow.com/questions/17261061/execute-sql-schema-in-psycopg2-in-python


