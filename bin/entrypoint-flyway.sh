#!/usr/bin/env bash

CONF_FILE=$1
HOSTPORT=$(grep "flyway.url" "$CONF_FILE" | cut -d/ -f3)   # e.g., flyway.url=jdbc:postgresql://ryctoic_pgtest.dev.dnsdock:5432/ryctoicdb
HOST=$(echo "$HOSTPORT" | cut -d: -f1)
PORT=$(echo "$HOSTPORT" | cut -d: -f2)


trap "exit 1" SIGINT
while ! timeout 1 bash -c cat < /dev/null > "/dev/tcp/$HOST/$PORT" &> /dev/null
do
  echo "waiting for postgres..."
  sleep 1
done



flyway-3.2.1/flyway -locations=filesystem:sql -configFile="$CONF_FILE" \
    "${@:2}"   # e.g., info, migrate


