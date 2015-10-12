#!/usr/bin/env bash

# postgres init
sleep 3

cd ~
flyway-3.2.1/flyway -configFile=secrets/flyway.conf -locations=filesystem:sql "$*"


