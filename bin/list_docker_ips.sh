#!/usr/bin/env bash

docker inspect --format '{{ .Name }} - {{ .NetworkSettings.IPAddress }}' $(docker ps -q)

