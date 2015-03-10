%% @doc Hello world handler.
-module(comments_json).

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

    %% lager:info("mochijson2: ~p", [
    %%                          mochijson2:decode(<<"{\"job\": {\"id\": \"1\"}}">>)
    %%                         ]),

    %% lager:error("Rows: ~p", [Rows]),
    %% lager:critical("Rows critical: ~p", [Rows]),
    %% lager:debug("Rows debug: ~p", [Rows]),

    %% Body = io_lib:format("Rows: ~p", [Rows]),
    %% lager:info("Rows: ~p", [Rows]),

	{Body, Req, State}.











