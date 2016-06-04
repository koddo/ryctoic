#!/usr/bin/env bash

D=/docker-entrypoint-initdb.d


cp "$D"/conf/postgresql.conf    "$PGDATA"
cp "$D"/conf/pg_hba.conf        "$PGDATA"
cp "$D"/conf/pg_ident.conf      "$PGDATA"

cp "$D"/certs_dev__copies/cacert.pem                   "$PGDATA"
cp "$D"/certs_dev__copies/pg-server.crt                "$PGDATA"
cp "$D"/certs_dev__copies/pg-server.nopassword.key     "$PGDATA"

chown postgres:postgres "$PGDATA"/pg-server.nopassword.key
chmod 400 "$PGDATA"/pg-server.nopassword.key


# TODO: security --- ownership of these files: root, postgres, theuser?


