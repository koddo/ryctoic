%% @doc Hello world handler.
-module(handler_api_entrypoint).

-export([init/2]).
-export([content_types_provided/2]).
-export([allowed_methods/2]).

-export([to_json/2]).



init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.
allowed_methods(Req, State) -> {[<<"HEAD">>, <<"GET">>], Req, State}.
content_types_provided(Req, State) ->
	{[{<<"application/hal+json">>, to_json}], Req, State}.


to_json(Req, State) ->
    error_logger:info_msg("--- ~p~n", [?MODULE]),
    case cowboy_req:binding(asdf, Req) of
        undefined ->
            {ok, Body} = api_entrypoint_dtl:render([]),
            {Body, Req, State};
        _ ->
            {ok, Body} = test_dtl:render([]),
            {Body, Req, State}
    end.





