#!/usr/bin/env bash


if [[ -z "$*" ]]; then
    # nodename is used to let us connect to it using remote shell, see vm.args
    RELX_REPLACE_OS_VARS=true NODENAME=ryctoic@$(hostname --ip-address) \
        ~/ryctoic/_rel/hello_world_example/bin/hello_world_example console
else
    "$*"
fi

