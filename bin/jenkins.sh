#!/usr/bin/env bash

docker run --name jenkins --rm -p 8080:8080 \
    -v /home/alex/mnt/ryctoic.jenkins_home:/var/jenkins_home \
    -v /var/run/docker.sock:/var/run/docker.sock \
    jenkins


