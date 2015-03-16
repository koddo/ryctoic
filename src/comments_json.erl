-module(comments_json).

-export([init/2]).
-export([content_types_provided/2]).
-export([comments_json/2]).

init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_provided(Req, State) ->
	{[
      {<<"application/json">>, comments_json}
     ], Req, State}.

comments_json(Req, State) ->
    {ok, Application} = application:get_application(),
    file:read_file(filename:join([code:priv_dir(Application), <<"the_file.txt">>])),
    {ok, Body} = file:read_file(filename:join([code:priv_dir(get_app()), <<"comments.json">>])),
	{Body, Req, State}.








