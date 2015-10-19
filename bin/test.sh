#!/usr/bin/env bash

## or maybe http://flywaydb.org/documentation/commandline/clean.html


PGTEST=$(bin/docker-compose.sh run -d --rm --entrypoint "/docker-entrypoint.sh" pgtest postgres)
IP=$(docker inspect --format '{{ .NetworkSettings.IPAddress }}' $PGTEST)
echo PGTEST $PGTEST, IP $IP


while ! timeout 1 bash -c "cat < /dev/null > /dev/tcp/$IP/5432" &> /dev/null
do
  echo "waiting for postgres..."
  sleep 1
done


bin/docker-compose.sh run --rm --no-deps --entrypoint sh flyway -c \
    "flyway-3.2.1/flyway -user=postgres -password=secret -url=jdbc:postgresql://$PGTEST.postgres.dev.dnsdock:5432/postgres -locations=filesystem:sql migrate info"

docker stop "$PGTEST" &> /dev/null

