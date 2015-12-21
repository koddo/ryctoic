%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(handler_cordova_browser_console_logger).

-export([init/2]).
-export([content_types_accepted/2]).
-export([allowed_methods/2]).
-export([log_body/2]).

init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_accepted(Req, State) ->
	{[{{<<"text">>, <<"plain">>, '*'}, log_body}],
     Req, State}.

allowed_methods(Req, State) ->
	{[<<"POST">>], Req, State}.

log_body(Req, State) ->
    {ok, Body, Req2} = cowboy_req:body(Req),
    error_logger:info_msg("--- browser_console_log: ~p~n", [Body]),
	{true, Req2, State}.

