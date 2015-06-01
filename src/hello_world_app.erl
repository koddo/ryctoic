%% @private
-module(hello_world_app).
-behaviour(application).

-include("my-mnesia-records.hlr").

%% API.
-export([start/2]).
-export([stop/1]).

%% API.

-spec start(_,_) -> {'ok',pid()}.
start(_Type, _Args) ->
    %% lager:set_loglevel(lager_console_backend, debug),
    %% lager:set_loglevel(lager_file_backend, "console.log", debug),
    lager:info("==================================================", []),
    lager:info("node: ~p", [node()]),
    lager:info("port: ~p", [env(https_port)]),
    lager:info("cookie: ~p", [erlang:get_cookie()]),

    {ok, Conf} = file:consult(secrets_file()),
    {_, PalOptions} = lists:keyfind(google_oauth, 1, Conf),
    PalWorkflow = pal:new(pal_google_oauth2_authcode, PalOptions),

    lager:info("Conf: ~p", [Conf]),
    lager:info("PalOptions: ~p", [PalOptions]),

    mnesia:create_schema([node()]),
    mnesia:start(),
    mnesia:create_table(asdftab, [
                                  {attributes, record_info(fields, asdf)},
                                  {ram_copies, [node()]}
                                 ]),


    mnesia:dirty_write(#asdf{id=1, value=1000}),

    {ok, Application} = application:get_application(),
    PrivDir = code:priv_dir(Application),
	Dispatch = cowboy_router:compile([{'_', [
                                             {"/static/[...]", cowboy_static, {priv_dir, hello_world, "static", [{mimetypes, cow_mimetypes, all}]}},
                                             {"/", cowboy_static, {priv_file, hello_world, "static/index.html", [{mimetypes, cow_mimetypes, all}]}},
                                             {"/oauth2/google/callback", callback_handler, [PalWorkflow]},
                                             {"/opener", opener, []},
                                             {"/websocket", ws_handler, []}
                                            ]}]),
	{ok, _} = cowboy:start_https(https, 100, 
                                 [
                                  {port, list_to_integer(env(https_port))},
                                  {cacertfile, PrivDir ++ "/ssl/cowboy-ca.crt"},   % TODO: move certs out and add path to secrets file
                                  {certfile, PrivDir ++ "/ssl/server.crt"},
                                  {keyfile, PrivDir ++ "/ssl/server.key"}
                                 ], 
                                 [
                                  {env, [{dispatch, Dispatch}]} 
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


