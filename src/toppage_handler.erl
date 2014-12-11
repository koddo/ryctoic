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
    ok = pgsql:close(C),

	%% Body = <<"{\"rest\": \"Hello World!\"}">>,
    
    %% lager:info("mochijson2: ~p", [
    %%                          mochijson2:decode(<<"{\"job\": {\"id\": \"1\"}}">>)
    %%                         ]),

    %% lager:error("Rows: ~p", [Rows]),
    %% lager:critical("Rows critical: ~p", [Rows]),
    %% lager:debug("Rows debug: ~p", [Rows]),
 
    Body = io_lib:format("Rows: ~p", [Rows]),
    lager:info("Rows: ~p", [Rows]),

	{Body, Req, State}.





