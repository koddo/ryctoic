#!/usr/bin/env bash

HBA=/var/lib/postgresql/data/pg_hba.conf

# yes, clear the file
echo -n > $HBA


# TODO: fine tune in postgres what interfaces are welcome, even for ssl I guess
# TODO: read only file system, so the root can't make postgres trust herself

cat >> $HBA <<EOF
local   all   all               md5
host    all   all   0.0.0.0/0   md5
host    all   all   ::0/0       md5
EOF


