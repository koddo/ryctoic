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
    error_logger:info_msg("fuck you~n", []),
    
                                                % TODO: CRITICAL move to secrets file
    R = epgsql:connect("ryctoic_postgres.dev.dnsdock", 
                       "administrator", 
                       no_password, 
                       [{database, "ryctoicdb"}, 
                        {ssl, true}, 
                        {cacertfile, "/home/theuser/ryctoic/sql/certs_dev/cacert.pem"},
                        {certfile,   "/home/theuser/ryctoic/sql/certs_dev/pg-user-administrator.crt"},
                        {keyfile,    "/home/theuser/ryctoic/sql/certs_dev/pg-user-administrator.nopassword.key"},
                        {verify, verify_peer},
                        {fail_if_no_peer_cert, true}   % this is for server-side, not sure if this works for client-side, but won't hurt
                       ]),
    error_logger:info_msg("--- SQL connect: ~p~n", [R]),
    {ok, C} = R,
    {ok, _, Rows} = epgsql:equery(C, "select * from pg_user limit 5;"),
    ok = epgsql:close(C),

    error_logger:info_msg("--- SQL Rows: ~p~n", [Rows]),

	{<<"REST Hello World as text!">>, Req, State}.


%% epgsql:connect("example.com", 
%%                "user", 
%%                "secret", 
%%                [{database, "whatever", 
%%                  {ssl, true}, 
%%                  {cacertfile, "cacert.crt"},
%%                  {certfile,   "user.crt"},
%%                  {keyfile,    "user.nopassword.key"},
%%                  {verify, verify_peer},
%%                  {fail_if_no_peer_cert, true}
%%                 ])
