#!/usr/bin/env bash

cp /sql/postgresql.conf    $PGDATA
cp /sql/pg_hba.conf        $PGDATA
cp /sql/pg_ident.conf      $PGDATA

cp /sql/certs_dev/cacert.pem                   $PGDATA
cp /sql/certs_dev/pg-server.crt                $PGDATA
cp /sql/certs_dev/pg-server.nopassword.key     $PGDATA
chown postgres:postgres $PGDATA/pg-server.nopassword.key
chmod 400 $PGDATA/pg-server.nopassword.key


# TODO: security --- ownership of these files: root, postgres, theuser?


