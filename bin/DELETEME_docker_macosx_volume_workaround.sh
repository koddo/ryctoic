#!/usr/bin/env bash

# there is a bug:
# in mac os x
# this directory is mounted to the docker container via volume
# and when I run cowboy and change files in priv dir on the fly, I get them corrupted via web browser

# so for now I copy the priv dir to the container itself


if [[ -z "$*" ]]; then
    echo "creating workaround"
    cp -R ~/ryctoic/priv ~/
    rm -fr ~/ryctoic/_rel/hello_world/lib/hello_world-1/priv/
    ln -sf ~/priv ~/ryctoic/_rel/hello_world/lib/hello_world-1/
elif [[ "$*" == "copy" ]]; then
    echo "copying the priv dir"
    cp -R ~/ryctoic/priv ~/
else
    echo "usage: $0 [copy]"
fi




