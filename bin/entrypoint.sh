#!/usr/bin/env bash

echo --- entrypoins.sh

if [[ -z "$*" ]]; then
    # nodename is used to let us connect to it using remote shell, see vm.args

    # RELX_REPLACE_OS_VARS=true NODENAME=ryctoic@$(hostname --ip-address) \
    #     ~/ryctoic/_rel/hello_world/bin/hello_world console

    # make app rel && \
    RELX_REPLACE_OS_VARS=true NODENAME=ryctoic@$(hostname --ip-address) SECRETS_FILE=/home/theuser/secrets/secrets.conf     ~/ryctoic/_rel/hello_world/bin/hello_world foreground
else
    "$*"
fi

