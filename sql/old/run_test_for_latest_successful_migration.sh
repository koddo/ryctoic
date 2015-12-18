#!/usr/bin/env bash

LATEST_MIGRATION_VERSION=$( \
    $(dirname $0)/../bin/docker-compose.sh run --rm --no-deps --entrypoint "bin/entrypoint-flyway.sh" \
    flyway secrets/flyway.pgtest.conf info | \
    grep Success | tail -1 | cut -d'|' -f2 | \
    sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//' \
    )                

LATEST_TEST=$(find sql/ -name "V$LATEST_MIGRATION_VERSION*.test")

echo "$LATEST_TEST" 

