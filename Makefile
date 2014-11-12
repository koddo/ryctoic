RELX_CONFIG = relx-dev.config
PROJECT = hello_world
DEPS = cowboy sync
dep_cowboy = git https://github.com/ninenines/cowboy master
dep_sync = git https://github.com/rustyio/sync master
include erlang.mk
