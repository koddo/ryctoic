RELX_CONFIG = relx-dev.config
PROJECT = hello_world
DEPS = cowboy sync sockjs
dep_cowboy = git https://github.com/ninenines/cowboy master
dep_sync = git https://github.com/rustyio/sync master
dep_sockjs = git https://github.com/sockjs/sockjs-erlang master
include erlang.mk
