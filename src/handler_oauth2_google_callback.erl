%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(handler_oauth2_google_callback).

-include("my_mnesia_records.hlr").

-export([
         init/2,
         is_authorized/2,
         content_types_provided/2,
         to_html/2
        ]).

-define(CONTENT_TYPE_JSON, {<<"content-type">>, <<"application/json">>}).
-define(CONTENT_TYPE_HTML, {<<"content-type">>, <<"text/html">>}).

-record(state, {
          authw :: pal:workflow(),
          authm :: map()
         }).

init(Req, [ PalWorkflow ] = _Opts) ->
    {cowboy_rest, Req, #state{ authw = PalWorkflow, authm = #{}}}.



is_authorized(Req, #state{ authw = PalWorkflow } = State) ->
	%% retrieving "code", "state" and "error" from Req when they exist
    %% Data looks like #{code => <<"...">>, ...}

    %% TODO: do nothing when already logged in

    Data =
		lists:foldl(
          fun({Key, Val}, M) ->
                  maps:put(binary_to_existing_atom(Key, utf8), Val, M)
          end,
          #{},
          pt_kvlist:with([<<"code">>, <<"state">>, <<"error">>],
                         cowboy_req:parse_qs(Req))),
    %% TODO: CRITICAL there is anti-csrf token in oauth2 called state --- generate it and check it --- is it a session csrf token we already have in mnesia?
    %% Data2 = Data#{ state => <<"123">> },
	case pal:authenticate(Data, PalWorkflow) of
		{stop, Resp} ->
            %% Resp looks like 
            %% {resp,
            %%  303,
            %%  [{<<"location">>,
            %%    <<"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=...&redirect_uri=...&scope=openid+email">>}],
            %%  <<>>}
            %% so we basicaly immediately stop and redirect to the oauth2 provider
            Resp2 = add_prompt_consent_param_to_resp(Resp),
            HandleResult = pal_http:reply(Resp2, fun(Status, Headers, Body) ->
                                                         cowboy_req:reply(Status, Headers, Body, Req)
                                                 end),
            {stop, HandleResult, State};
		{ok, M} ->
            %% M looks like
            %% #{access_token => <<"...">>,
            %%   code => <<"...">>,
            %%   expires_in => 3599,
            %%   id_token => <<"...">>,
            %%   token_type => <<"Bearer">>}
            {true, Req, #state{ authw = PalWorkflow, authm = M}};
        {error, Reason} ->
            %% Reason looks like {oauth2,#{error => access_denied}}
            error_logger:info_msg("--- oauth2_google_callback --- pal:authenticate() got an error: ~p~n", [Reason]),
            {ok, Body} = popup_error_dtl:render([{reason, Reason}]),
            HandleResult = cowboy_req:reply(422, [?CONTENT_TYPE_HTML], Body, Req),   % TODO: confirt 422 is the right error here
            {stop, HandleResult, State}
	end.

%% PAL is not flexible enough
add_prompt_consent_param_to_resp(Resp) ->
    {resp, 303, [{<<"location">>, Url}], <<>>} = Resp,
    Param = <<"&prompt=consent">>,
    Resp2 = {resp, 303, [{<<"location">>, <<Url/bitstring, Param/bitstring>>}], <<>>},
    Resp2.



content_types_provided(Req, State) ->
	{[
      {{<<"text">>,  <<"html">>, '*'}, to_html}
     ], Req, State}.



to_html(Req, #state{ authm = M } = State) ->
    error_logger:info_msg("--- oauth2_google_callback --- logged in~n", []),


    IdToken = maps:get(id_token, M),
    [_, PayloadBase64, _] = binary:split(IdToken, <<".">>, [global]),
    PayloadMap = jsx:decode(decode_paddingless_base64(PayloadBase64), [return_maps]),
    %% TODO: maybe verify the jwt properly -- but google says this is an optional step if jwt is received through a secure channel --- http://blog.differentpla.net/blog/2015/04/19/jwt-rs256-erlang/
    Id =             maps:get(<<"sub">>, PayloadMap),
    %% Email =          maps:get(<<"email">>, PayloadMap, <<"">>),   % TODO: can it absent?
    %% EmailVerified =  maps:get(<<"email_verified">>, PayloadMap, <<"">>),   % TODO: if email is not verified, do not use it
    %% Iat =            maps:get(<<"iat">>, PayloadMap),
    %% Exp =            maps:get(<<"exp">>, PayloadMap),
    {ok, Body} = popup_dtl:render([
                                   {id, {Id, google}} 
                                   %% {email, Email}, 
                                   %% {email_verified, EmailVerified}
                                  ]),

    %% TODO: should we allow relogin after we are logged in already? or maybe just do nothing when this happens?
    Req2 = authentication_code:create_session(Req, #ryctoic_user{ id = { Id, google }, from = 0 }),

	{Body, Req2, State}.



%% openid connect and facebook connect skip padding in jwt
%% decode_base64_without_padding(Base64) when is_list(Base64) -> decode_base64_without_padding(list_to_binary(Base64));
decode_paddingless_base64(Base64) when byte_size(Base64) rem 4 == 3 -> base64:decode(<<Base64/bytes, "=">>);
decode_paddingless_base64(Base64) when byte_size(Base64) rem 4 == 2 -> base64:decode(<<Base64/bytes, "==">>);
decode_paddingless_base64(Base64) -> base64:decode(Base64).


%% options(Req, State) ->
%% 	Req2 = cowboy_req:set_resp_header(<<"access-control-allow-headers">>, <<"x-requested-with, content-type">>, Req),
%% 	Req3 = cowboy_req:set_resp_header(<<"access-control-allow-methods">>, <<"GET, OPTIONS">>, Req2),
%% 	Req4 = cowboy_req:set_resp_header(<<"access-control-max-age">>, <<"1728000">>, Req3),
%% 	{ok, Req4, State}.





%% handle_result({stop, Resp}, Req) ->
%% 	pal_http:reply(Resp, fun(Status, Headers, Body) ->
%%                                  cowboy_req:reply(Status, Headers, Body, Req)
%%                          end);
%% handle_result({error, {_Type, Data}}, Req) ->
%% 	cowboy_req:reply(
%%       422,
%%       [?CONTENT_TYPE_JSON],
%%       error_to_json(Data),
%%       Req).

%% error_to_json(M) when is_map(M)  -> jsxn:encode(M);
%% error_to_json(L) when is_list(L) -> jsx:encode(L);
%% error_to_json(T)                 -> jsx:encode([{error, T}]).





