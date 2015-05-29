%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(callback_handler).


-export([
         init/2,
         is_authorized/2,
         content_types_provided/2,
         to_json/2,
         to_html/2
        ]).

-define(CONTENT_TYPE_JSON, {<<"content-type">>, <<"application/json">>}).

-record(state, {
          authw :: pal:workflow(),
          authm :: map()
         }).

init(Req, [ PalWorkflow ] = _Opts) ->
    {cowboy_rest, Req, #state{ authw = PalWorkflow, authm = #{}}}.



is_authorized(Req, #state{ authw = PalWorkflow } = State) ->
	%% retrieving "code", "state" and "error" from Req when they exist
    %% Data looks like #{code => <<"...">>, ...}
	Data =
		lists:foldl(
          fun({Key, Val}, M) ->
                  maps:put(binary_to_existing_atom(Key, utf8), Val, M)
          end,
          #{},
          pt_kvlist:with([<<"code">>, <<"state">>, <<"error">>],
                         cowboy_req:parse_qs(Req))),

	case pal:authenticate(Data, PalWorkflow) of
		{ok, M} ->
            %% M looks like
            %% #{access_token => <<"...">>,
            %%   code => <<"...">>,
            %%   expires_in => 3599,
            %%   id_token => <<"...">>,
            %%   token_type => <<"Bearer">>}
            {true, Req, #state{ authw = PalWorkflow, authm = M}};
		{stop, Resp} ->
            %% Resp looks like 
            %% {resp,
            %%  303,
            %%  [{<<"location">>,
            %%    <<"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=...&redirect_uri=...&scope=openid+email">>}],
            %%  <<>>}
            %% so we basicaly immediately stop and redirect to the oauth2 provider
            HandleResult = pal_http:reply(Resp, fun(Status, Headers, Body) ->
                                                        cowboy_req:reply(Status, Headers, Body, Req)
                                                end),
            {stop, HandleResult, State}
	end.

content_types_provided(Req, State) ->
	{[
      {{<<"text">>,  <<"html">>, '*'}, to_html},
      {{<<"application">>,  <<"json">>, '*'}, to_json}
     ], Req, State}.



%% TODO: erlydtl
to_html(Req, #state{ authm = M } = State) ->
    IdToken = maps:get(id_token, M),
    [_, PayloadBase64, _] = binary:split(IdToken, <<".">>, [global]),
    PayloadMap = jsx:decode(decode_paddingless_base64(PayloadBase64), [return_maps]),
    %% TODO: maybe verify the jwt properly -- but google says this is an optional step if jwt is received through a secure channel
    Id =             maps:get(<<"sub">>, PayloadMap),
    Email =          maps:get(<<"email">>, PayloadMap, <<"">>),   % TODO: can it absent?
    EmailVerified =  maps:get(<<"email_verified">>, PayloadMap, <<"">>),   % TODO: if email is not verified, do not use it
    {ok, Body} = popup_dtl:render([{id, Id}, {email, Email}, {email_verified, EmailVerified}]),
	{Body, Req, State}.

to_json(Req, #state{authm = M} = State) ->
	{jsx:prettify(jsx:encode(M)), Req, State}.




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





