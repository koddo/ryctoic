%% @private
-module(hello_world_app).
-behaviour(application).

%% API.
-export([start/2]).
-export([stop/1]).

%% API.

-spec start(_,_) -> {'ok',pid()}.
start(_Type, _Args) ->
    io:format("node: ~w~n", [node()]),
    io:format("cookie: ~w~n", [erlang:get_cookie()]),

	Dispatch = cowboy_router:compile([{'_', [
                                             {"/asdf", toppage_handler, []},
                                             {"/[...]", cowboy_static, {priv_dir, hello_world, "", [{mimetypes, cow_mimetypes, all}]}}
                                            ]}]),
	{ok, _} = cowboy:start_http(http, 100, [{port, 8080}], [{env, [{dispatch, Dispatch}]} ]),
	hello_world_sup:start_link().

-spec stop(_) -> 'ok'.
stop(_State) ->
	ok.

