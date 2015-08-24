%% @doc Hello world handler.
-module(handler_form).

-export([init/2]).
-export([content_types_provided/2]).
-export([content_types_accepted/2]).
-export([allowed_methods/2]).

-export([hello_to_html/2]).
-export([hello_post/2]).


init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_provided(Req, State) ->
	{[{<<"application/json">>, hello_to_html}], Req, State}.
content_types_accepted(Req, State) ->
	{[{{<<"application">>, <<"x-www-form-urlencoded">>, []}, hello_post}], Req, State}.
allowed_methods(Req, State) ->
	{[<<"HEAD">>, <<"GET">>, <<"POST">>], Req, State}.

hello_to_html(Req, State) ->
    error_logger:info_msg("--- handler_form~n", []),
    {ok, Body} = form_dtl:render([]),
	{Body, Req, State}.


hello_post(Req, State) ->
    {ok, FormData, Req2} = cowboy_req:body_qs(Req),
    error_logger:info_msg("--- handler_form post~p~n", [FormData]),
    %% Req2 = cowboy_req:set_resp_body(<<"{1:2}">>, Req),
	{true, Req2, State}.
