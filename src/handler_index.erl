%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(handler_index).

-include("my_mnesia_records.hlr").

-export([init/2]).


init(Req, Opts) ->
    {Req_cookies, UserID} = authentication_code:manage_session(Req),   % TODO: refactor
    {ok, Body} = index_dtl:render([{sessioncsrf, <<"123">>}, {userinfo, UserID}]),
	Req_body = cowboy_req:reply(200, [{<<"content-type">>, <<"text/html">>}], Body, Req_cookies),
	{ok, Req_body, Opts}.



