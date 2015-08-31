#!/usr/bin/env bash

# for uncluttering the command line a bit
PRJ=$(head -n 1 ./docker-compose-project-name)

docker-compose --project-name "$PRJ" "$@"
