%% @doc Hello world handler.
-module(handler_mongo).

-export([init/2]).
-export([content_types_provided/2]).
-export([content_types_accepted/2]).
-export([allowed_methods/2]).

-export([hello_to_json/2]).
-export([hello_from_json/2]).



init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_provided(Req, State) ->
	{[{<<"application/json">>, hello_to_json}], Req, State}.
%% content_types_accepted(Req, State) ->
%%     {[{<<"application/json">>, hello_from_json}], Req, State}.
content_types_accepted(Req, State) ->
	{[{{<<"application">>, <<"json">>, '*'}, hello_from_json}],
     Req, State}.
allowed_methods(Req, State) ->
	{[<<"HEAD">>, <<"GET">>, <<"POST">>], Req, State}.

hello_to_json(Req, State) ->
    error_logger:info_msg("--- handler_mongo~n", []),

    F = emongo:find(emongo, "collection", [{"field1", "value1"}]),
    error_logger:info_msg("--- handler_mongo find: ~p~n", [hd(F)]),

    FF = get_rid_of_mongo_object_id(hd(F)),

    Body = jsx:encode(FF),
    error_logger:info_msg("--- handler_mongo Body: ~p~n", [Body]),
	{Body, Req, State}.

hello_from_json(Req, State) ->
    error_logger:info_msg("--- handler_mongo post~p~n", [Req]),
    
    %% Req2 = cowboy_req:set_resp_body(<<"{1:2}">>, Req),
	{true, Req, State}.





get_rid_of_mongo_object_id(Lst) ->
    [T || {K, _} = T <- Lst, K =/= <<"_id">>].


