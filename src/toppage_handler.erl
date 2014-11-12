%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(toppage_handler).

-export([init/2]).

-spec init(cowboy_req:req(),_) -> {'ok',cowboy_req:req(),_}.
init(Req, Opts) ->
	Req2 = cowboy_req:reply(200, [
		{<<"content-type">>, <<"text/plain">>}
	], <<"Hello, motherfucking world!">>, Req),
	{ok, Req2, Opts}.
