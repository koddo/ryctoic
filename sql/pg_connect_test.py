import psycopg2
 
conn = psycopg2.connect("host=172.17.0.3 port=5432 dbname=ryctoicdb user=administrator sslrootcert=certs_dev/cacert.pem sslcert=certs_dev/pg-user-administrator.crt sslkey=certs_dev/pg-user-administrator.nopassword.key sslmode=verify-ca")
cur = conn.cursor()
cur.execute("SELECT * FROM pg_tables;")
for i in cur.fetchall():
    print(i)
