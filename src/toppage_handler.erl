%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(toppage_handler).

-include_lib("deps/epgsql/include/pgsql.hrl").

-export([init/2]).
-export([content_types_provided/2]).
-export([hello_to_json/2]).

init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_provided(Req, State) ->
	{[
      {<<"application/json">>, hello_to_json}
     ], Req, State}.

hello_to_json(Req, State) ->
	Body = <<"{\"rest\": \"Hello World!\"}">>,
	{Body, Req, State}.
