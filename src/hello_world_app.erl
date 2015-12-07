%% @private
-module(hello_world_app).
-behaviour(application).

-include("my-mnesia-records.hlr").

%% API.
-export([start/2]).
-export([stop/1]).

-export([router_live_update/0]).


%% API.

-spec start(_,_) -> {'ok',pid()}.
start(_Type, _Args) ->
    %% lager:set_loglevel(lager_console_backend, debug),
    %% lager:set_loglevel(lager_file_backend, "console.log", debug),
    lager:info("==================================================", []),
    lager:info("node: ~p", [node()]),
    lager:info("port: ~p", [env(http_port)]),
    lager:info("cookie: ~p", [erlang:get_cookie()]),
    
    %% mnesia:create_schema([node()]),  % for ram-only tables I don't have to create schema, right? http://www.erlang.org/doc/man/mnesia.html#create_schema-1
    mnesia:start(),
    mnesia:create_table(ryctoic_session, [
                                          {attributes, record_info(fields, ryctoic_session)}
                                          %% ,{ram_copies, [node()]}   % this is the default value
                                          %% ,{disc_copies, [node()]}
                                         ]),
    mnesia:create_table(ryctoic_user, [
                                       {attributes, record_info(fields, ryctoic_user)}
                                      ]),

    %% RM = emongo:add_pool(emongo, "mongo.dev.dnsdock", 27017, "test", 1),
    %% error_logger:info_msg("--- emongo: ~p~n", [RM]),
    


    %% PrivDir = code:priv_dir(?MYAPP),
	{ok, _} = cowboy:start_http(my_http_listener, 100,
                                [
                                 {port, list_to_integer(env(http_port))}
                                 %% {cacertfile, PrivDir ++ "/ssl/cowboy-ca.crt"},   % TODO: move certs out and add path to secrets file
                                 %% {certfile, PrivDir ++ "/ssl/server.crt"},
                                 %% {keyfile, PrivDir ++ "/ssl/server.key"}
                                ], 
                                [
                                 {env, [{dispatch, dispatch()}]} 
                                 %% ,{max_keepalive, 100}
                                ]),
	hello_world_sup:start_link().

-spec stop(_) -> 'ok'.
stop(_State) ->
	ok.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%% helpers

secrets_file() ->
    case os:getenv("SECRETS_FILE") of
        false ->
            error("you must provide SECRETS_FILE env var, absolute path");      % TODO: maybe a nicer way to inform about this
        Filename ->
            Filename
    end.

env(Param) ->
    case os:getenv(string:to_upper(erlang:atom_to_list(Param))) of
        false ->
            {ok, Value} = application:get_env(Param),
            Value;
        Other ->
            Other
    end.



palworkflow() ->
    {ok, Conf} = file:consult(secrets_file()),
    {_, PalOptions} = lists:keyfind(google_oauth, 1, Conf),

    error_logger:info_msg("Conf: ~p~n", [Conf]),
    error_logger:info_msg("PalOptions: ~p~n", [PalOptions]),

    PalWorkflow = pal:new(pal_google_oauth2_authcode, PalOptions),
    PalWorkflow.

dispatch() ->
    cowboy_router:compile([{'_', [{"/static/[...]", cowboy_static, {priv_dir, hello_world, "static", [{mimetypes, cow_mimetypes, all}]}}
                                  ,{"/", handler_index, []}   %% was {"/", cowboy_static, {priv_file, hello_world, "static/index.html", [{mimetypes, cow_mimetypes, all}]}}
                                  ,{"/sql", handler_sql, []}
                                  ,{"/form", handler_form, []}
                                  ,{"/oauth2/google/callback", handler_oauth2_google_callback, [palworkflow()]}
                                  ,{"/websocket", handler_ws, []}

                                  ,{"/api/v0/[:asdf]", handler_api_entrypoint, []}
                                 ]}]).



%% http://ninenines.eu/docs/en/cowboy/HEAD/guide/routing/#live_update
router_live_update() ->
    cowboy:set_env(my_http_listener, dispatch, dispatch()).
