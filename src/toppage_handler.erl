%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(toppage_handler).

-include_lib("../deps/epgsql/include/pgsql.hrl").

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
    % TODO: put connection handler to State, this is for tests
    {ok, C} = pgsql:connect("ryctoicpab_db_1", "postgres", "postgres", [{database, "world"}]),
    {ok, _, Rows} = pgsql:equery(C, "select name from country limit 5"),
    %% Rows,
    ok = pgsql:close(C),
    io:format("---~p~n", [Rows]),
	Body = <<"{\"rest\": \"Hello World!\"}">>,
	%% Body = jiffy:encode({Rows}),
	{Body, Req, State}.





