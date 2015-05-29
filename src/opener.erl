%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(opener).

-export([init/2]).

init(Req, Opts) ->
    {ok, Body} = opener_dtl:render([{name, "Johnny"}]),
	Req2 = cowboy_req:reply(200, [{<<"content-type">>, <<"text/html">>}], Body, Req),
	{ok, Req2, Opts}.



