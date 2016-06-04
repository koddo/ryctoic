#!/usr/bin/env bash

docker rm pgtest
bin/docker-compose.sh run --no-deps --name=pgtest --entrypoint "/docker-entrypoint.sh" pgtest postgres

CONTAINER_ID=$(docker inspect --format='{{.Id}}' pgtest)
docker commit "$CONTAINER_ID" "pgtest:$1"

docker rm pgtest

