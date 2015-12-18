#!/usr/bin/env bash

route -n add 172.17.0.0/16 192.168.15.132
perl -pi -e "print \"$1\n\" if $. == 1" /etc/hosts
# echo "$1" >> /etc/hosts


