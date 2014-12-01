#!/usr/bin/env bash

# just in case if I'm not in macosx, I just make it an empty string
BOOT2DOCKER_SSH_CMD="boot2docker ssh"

if [[ $1 == "get-ip" || $1 == "ip" ]]  &&  [[ $# -eq 2 ]] ; then
    docker inspect $2 | grep IPAddress


elif [[ $1 == "list-of-rules" || $1 == "list" ]]  &&  [[ $# -eq 1 ]] ; then
    $BOOT2DOCKER_SSH_CMD sudo iptables -t nat -L DOCKER --line-numbers

elif [[ $1 == "delete-rule" || $1 == "delete" ]]  &&  [[ $# -eq 2 ]] ; then
    $BOOT2DOCKER_SSH_CMD sudo iptables -t nat -D DOCKER $2
    

elif [[ $1 == "-A" || $1 == "-D" ]]  &&  [[ $# -eq 2 ]] ; then
    for port in 4369 {9100..9102}; do     # for erlang remote shell
        # http://stackoverflow.com/questions/19897743/exposing-a-port-on-a-live-docker-container
        # $ sudo iptables -t nat -D DOCKER -p tcp --dport 9102 -j DNAT --to-destination 172.17.0.88:9102
        $BOOT2DOCKER_SSH_CMD sudo iptables -t nat $1 DOCKER -p tcp --dport $port -j DNAT --to-destination $2:$port
    done


else
    echo "usage:"
    echo "   $(basename $0) get-ip container-name"
    echo "   $(basename $0) list-of-rules"
    echo "   $(basename $0) -A or -D ip-of-container"
fi
