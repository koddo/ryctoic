-module(comments_json).

-export([init/2]).
-export([content_types_provided/2]).
-export([comments_json/2]).

init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_provided(Req, State) ->
	{[
      {{<<"application">>,  <<"json">>, '*'}, comments_json}
     ], Req, State}.

comments_json(Req, [PrivDir] = State) ->
    lager:info("nothing"),
    {ok, Body} = file:read_file(filename:join([PrivDir, <<"static/comments.json">>])),
	{Body, Req, State}.








