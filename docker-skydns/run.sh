#!/usr/bin/env bash

CMD=$1
PRJNAME=sky
SCRIPT_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
DOCKER_COMPOSE_FILE=$SCRIPT_PATH/docker-compose.yml


if [[ $CMD == "stop" ]]; then
    docker-compose --file $DOCKER_COMPOSE_FILE --project-name $PRJNAME stop
else
    docker-compose --file $DOCKER_COMPOSE_FILE --project-name $PRJNAME up -d # --no-recreate
fi




# lost patience while trying to recreate containers without docker-compose
# maybe try one more time later
# docker run -d -p 172.17.42.1:53:53/udp --name skydns crosbymichael/skydns -nameserver 8.8.8.8:53 -domain docker
# docker run -d -v /var/run/docker.sock:/docker.sock --name skydock crosbymichael/skydock -ttl 30 -environment dev -s /docker.sock -domain docker -name skydns
# docker stop skydns
# docker stop skydock
# FATA[0000] Error response from daemon: Conflict. The name "skydns" is already in use by container c94bc3c44c17. You have to delete (or rename) that container to be able to reuse that name. 
# FATA[0000] Error response from daemon: Conflict. The name "skydock" is already in use by container 34620cf7ad74. You have to delete (or rename) that container to be able to reuse that name. 

