RELX_CONFIG = relx-dev.config
PROJECT = hello_world
DEPS = cowboy sync epgsql jiffy    # sockjs
# dep_sockjs = git https://github.com/sockjs/sockjs-erlang master
dep_cowboy = git https://github.com/ninenines/cowboy master
dep_sync = git https://github.com/rustyio/sync master
dep_epgsql = git https://github.com/epgsql/epgsql master
dep_jiffy = git https://github.com/davisp/jiffy master
include erlang.mk
