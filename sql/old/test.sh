#!/usr/bin/env bash

PGTEST=$(bin/docker-compose.sh run -d --rm --entrypoint "/docker-entrypoint.sh" pgtest postgres)

bin/docker-compose.sh run --rm --no-deps --entrypoint "/home/theuser/bin/entrypoint-flyway.sh" flyway secrets/flyway.pgtest.conf info
docker logs $PGTEST
docker exec -it $PGTEST bash -c "PGPASSWORD='secret' psql --dbname ryctoicdb --user administrator --no-password --file /sql/init.test"


# docker stop $PGTEST



