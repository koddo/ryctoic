#!/usr/bin/env bash

while ! timeout 1 bash -c 'cat < /dev/null > /dev/tcp/postgres.dev.dnsdock/5432' &> /dev/null
do
  echo "waiting for postgres..."
  sleep 1
done


flyway-3.2.1/flyway -configFile=secrets/flyway.conf -locations=filesystem:sql "$*"



