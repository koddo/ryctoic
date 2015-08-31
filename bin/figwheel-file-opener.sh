#!/usr/bin/env bash

## we are in a docker container now, can't run emacsclient directly
## let's send a post request to our host machine

## but first let's get a path of our file relative to root of our project
## the latter can be different in the container
## e.g., /Users/alex/workspace.ryctoic and /home/theuser/ryctoic



PWD=$(pwd)
FILE=$(realpath --relative-to="$PWD" "$1")
LINE="$2"
curl -X POST --data-urlencode "file=$FILE" --data-urlencode "line=$LINE" http://192.168.15.1:5000/emacsclient

