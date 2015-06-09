%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(opener).

-include("my-mnesia-records.hlr").

-export([init/2,
         create_session/2
        ]).


-define(MAXAGE, 1*10).   % seconds
%% TODO: set shorter max-age in cookie than in db record, to ensure expired cookies won't be sent, to track attacks

rnd() ->
    N = 16,   % TODO: enough id length?
    try crypto:strong_rand_bytes(N)   % TODO: CRITICAL handle low_entropy exception of crypto:strong_rand_bytes(N)
    catch
        error:low_entropy ->
            error_logger:error_msg("crypto:strong_rand_bytes() says low_entropy! falling back to crypto:rand_bytes()~n"),
            crypto:rand_bytes(N)
    end.

unixtime() ->
    {MegaSec, Sec, _Micro} = os:timestamp(),
    MegaSec*1000000 + Sec.

init(Req, Opts) ->
    Cookies = cowboy_req:parse_cookies(Req),
    Req2 = case lists:keyfind(<<"sessionid">>, 1, Cookies) of
               false ->
                   create_anonymous_user_and_session(Req);
               {_, SessionID} ->   % TODO: validate user input
                   {atomic, SessionList} = mnesia:transaction(fun() ->
                                                                  mnesia:read(ryctoic_session, SessionID)
                                                          end),
                   case SessionList of
                       [] ->   % TODO: handle incorrect session. It maybe a malformed sessionid, or an expiresd one which should have been removed already
                           create_anonymous_user_and_session(Req);
                       [Session] ->
                           {ryctoic_session, SessionID, SessionCSRF, UserID, Expires, Fuck} = Session,
                           T = unixtime(),
                           if T > Expires 
                              -> error_logger:info_msg("expired !!!! Session: ~p~n", [Session]),
                                 create_anonymous_user_and_session(Req);
                              true ->
                                   {ok, MaxAge} = application:get_env(?MYAPP, maxage),
                                   TR =  mnesia:transaction(fun() ->
                                                                    mnesia:write(#ryctoic_session{
                                                                                    sessionid = SessionID,
                                                                                    sessioncsrf = SessionCSRF,
                                                                                    userid = UserID,
                                                                                    expires = T + MaxAge,
                                                                                    fuck = Fuck
                                                                                   })
                                                            end),
                                   error_logger:info_msg("transaction: ~p~n", [TR]),                                   
                                   error_logger:info_msg("Session: ~p~n", [Session]),
                                   update_cookie(Req, SessionID)
                                   %% Req
                           end
                   end
           end,
    {ok, Body} = opener_dtl:render([]),
	Req3 = cowboy_req:reply(200, [{<<"content-type">>, <<"text/html">>}], Body, Req2),
	{ok, Req3, Opts}.


create_session(Req, #ryctoic_user{ id = UserID, from = From }) ->
    SessionID = base64url:encode(rnd()),
    SessionCSRF = base64url:encode(rnd()),
    {ok, MaxAge} = application:get_env(?MYAPP, maxage),
    Expires = unixtime() + MaxAge,
    Fuck = 0,
    TR =  mnesia:transaction(fun() ->
                                     mnesia:write(#ryctoic_user{
                                                     id = UserID,
                                                     from = From
                                                    }),
                                     mnesia:write(#ryctoic_session{
                                                     sessionid = SessionID,
                                                     sessioncsrf = SessionCSRF,
                                                     userid = UserID,
                                                     expires = Expires,
                                                     fuck = Fuck
                                                    })
                             end),
    error_logger:info_msg("transaction: ~p~n", [TR]),
    error_logger:info_msg("update_cookie: ~p~n", [SessionID]),
    Req2 = update_cookie(Req, SessionID),
    Req2.

create_anonymous_user_and_session(Req) ->
    UserID = base64url:encode(rnd()),    % TODO: generate again if exists
    From = nowhere,   % can be google, facebook, etc
    R = create_session(Req, #ryctoic_user{ id = UserID, from = From }),
    R.

%% create_anonymous_user_and_session(Req) ->
%%     UserID = base64url:encode(rnd()),    % TODO: generate again if exists
%%     SessionID = base64url:encode(rnd()),
%%     SessionCSRF = base64url:encode(rnd()),
%%     {ok, MaxAge} = application:get_env(?MYAPP, maxage),
%%     Expires = unixtime() + MaxAge,
%%     Fuck = 0,
%%     TR =  mnesia:transaction(fun() ->
%%                                      mnesia:write(#ryctoic_user{
%%                                                      id = UserID,
%%                                                      from = nowhere   % can be google, facebook, etc
%%                                                     }),
%%                                      mnesia:write(#ryctoic_session{
%%                                                      sessionid = SessionID,
%%                                                      sessioncsrf = SessionCSRF,
%%                                                      userid = UserID,
%%                                                      expires = Expires,
%%                                                      fuck = Fuck
%%                                                     })
%%                              end),
%%     error_logger:info_msg("transaction: ~p~n", [TR]),
%%     Req2 = update_cookie(Req, SessionID),
%%     Req2.



update_cookie(Req, SessionID) ->
    {ok, MaxAge} = application:get_env(?MYAPP, maxage),
    R = cowboy_req:set_resp_cookie(<<"sessionid">>, SessionID, [
                                                                {domain, "localhost.ryctoic.com"},
                                                                {path, "/"},    % TODO: maybe restrict this, but i'm not sure right now
                                                                {max_age, MaxAge},   % TODO: maybe add an expires cookie preference
                                                                {secure, true},
                                                                {http_only, true}
                                                               ], Req),
    R.






