RELX_CONFIG = relx-dev.config
PROJECT = hello_world

DEPS = cowboy sync epgsql lager   # sockjs jiffy
# dep_sockjs = git https://github.com/sockjs/sockjs-erlang master
# dep_jiffy = git https://github.com/davisp/jiffy master
dep_cowboy = git https://github.com/ninenines/cowboy master
dep_sync = git https://github.com/rustyio/sync master
dep_epgsql = git https://github.com/epgsql/epgsql master
dep_lager = git https://github.com/basho/lager master

ERLC_OPTS = +debug_debug +'{parse_transform,lager_transform}'


## TODO: makefile
# .PHONY: release clean-release

# release: clean-release all
# 	relx -o rel/$(PROJECT)

# clean-release: 
# 	rm -rf rel/$(PROJECT)


include erlang.mk

