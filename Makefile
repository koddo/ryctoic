RELX_CONFIG = relx-dev.config
PROJECT = hello_world

DEPS = cowboy sync epgsql lager pal_google_oauth2 erlydtl base64url # gproc sockjs jiffy
# dep_sockjs = git https://github.com/sockjs/sockjs-erlang master
# dep_jiffy = git https://github.com/davisp/jiffy master
# dep_gproc = git https://github.com/uwiger/gproc
dep_cowboy = git https://github.com/ninenines/cowboy master
dep_sync = git https://github.com/rustyio/sync master
dep_epgsql = git https://github.com/epgsql/epgsql master
dep_lager = git https://github.com/basho/lager master
dep_pal_google_oauth2 = git git://github.com/manifest/pal-google-oauth2.git v0.2.1
dep_erlydtl = git https://github.com/erlydtl/erlydtl master
dep_base64url = git https://github.com/dvv/base64url master

ERLC_OPTS = +debug_debug +'{parse_transform,lager_transform}'


## TODO: makefile
# .PHONY: release clean-release

# release: clean-release all
# 	relx --dev-mode -o _rel/$(PROJECT)

# clean-release: 
# 	rm -rf _rel/$(PROJECT)


include erlang.mk


# rel::
# 	rm -r ../ryctoic-rel
# 	mv _rel ../ryctoic-rel

