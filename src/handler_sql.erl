%% @doc Hello world handler.
-module(handler_sql).

-export([init/2]).
-export([content_types_provided/2]).
-export([hello_to_text/2]).

%% -include_lib("../deps/epgsql/include/epgsql.hrl").


init(Req, Opts) ->
	{cowboy_rest, Req, Opts}.

content_types_provided(Req, State) ->
	{[
      %% {<<"text/html">>, hello_to_html},
      {<<"text/plain">>, hello_to_text}
      
      %% {<<"application/json">>, hello_to_json},

     ], Req, State}.


hello_to_text(Req, State) ->
    % TODO: write a connection pool using poolboy
    error_logger:info_msg("--- handler_sql~n", []),
    
    R = epgsql:connect("postgres.dev.skydock", "root", "mysecretpassword3", [{database, "world"}]),   % TODO: CRITICAL move to secrets file
    error_logger:info_msg("--- SQL connect: ~p~n", [R]),
    {ok, C} = R,
    {ok, _, Rows} = epgsql:equery(C, "select name from country limit 5"),
    ok = epgsql:close(C),

    error_logger:info_msg("--- SQL Rows: ~p~n", [Rows]),

	{<<"REST Hello World as text!">>, Req, State}.

