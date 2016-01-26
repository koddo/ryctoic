%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello
-module(authentication_code).

-include("my_mnesia_records.hlr").

-export([manage_session/1,
         create_session/2
        ]).

%% TODO: maybe set shorter max-age in cookie than in db record, to ensure expired cookies won't be sent --- to track attacks?


%% TODO: create a hint cookie, which will help to track users --- map anonymous sessionid to a authenticated sessiond?
manage_session(Req) ->
    Cookies = cowboy_req:parse_cookies(Req),
    Req_cookies = case lists:keyfind(<<"sessionid">>, 1, Cookies) of
                      false ->
                          error_logger:info_msg("--- no sessionid cookie --- creating anonymous user and cookies~n", []),   % TODO: change to debug_msg()
                          {R, UserID} = create_anonymous_user_and_session(Req),
                          R;
                      {_, SessionID} ->   % TODO: validate user input
                          {atomic, SessionList} = mnesia:transaction(fun() ->
                                                                             mnesia:read(ryctoic_session, SessionID)
                                                                     end),
                          case SessionList of
                              [] ->   % TODO: handle incorrect session. It maybe a malformed sessionid, or an expired one which should have been removed already in the browser
                                  error_logger:info_msg("--- sessionid cookie is not in the db, the invalid SessionID: ~p --- creating anonymous user and cookies~n", [SessionID]),
                                  {R, UserID} = create_anonymous_user_and_session(Req),
                                  R;
                              [Session] ->
                                  {ryctoic_session, SessionID, SessionCSRF, UserID, Expires} = Session,
                                  T = unixtime(),
                                  if T > Expires 
                                     -> error_logger:info_msg("--- sessionid cookie is expired in the db, the whole Session: ~p --- creating anonymous user and cookies~n", [Session]),
                                        {R, UserID} = create_anonymous_user_and_session(Req),
                                        R;
                                     true ->
                                          {ok, MaxAge} = application:get_env(?MYAPP, maxage),
                                          TR =  mnesia:transaction(fun() ->
                                                                           mnesia:write(#ryctoic_session{
                                                                                           sessionid = SessionID,
                                                                                           sessioncsrf = SessionCSRF,
                                                                                           userid = UserID,
                                                                                           expires = T + MaxAge
                                                                                          })
                                                                   end),
                                          error_logger:info_msg("--- valid sessionid cookie, the whole Session: ~p --- updating expire datetime in db and updating cookie, transaction: ~p~n", [Session, TR]),
                                          update_cookie(Req, SessionID)
                                  end
                          end
                  end,
    {Req_cookies, UserID}.

%% ----------------------------------------------------------


%% TODO: mark old session as used
create_session(Req, #ryctoic_user{ id = UserID, whatever = Whatever }) ->
    SessionID = base64url:encode(rnd()),
    SessionCSRF = base64url:encode(rnd()),
    {ok, MaxAge} = application:get_env(?MYAPP, maxage),
    Expires = unixtime() + MaxAge,
    TR =  mnesia:transaction(fun() ->
                                     mnesia:write(#ryctoic_user{
                                                     id = UserID,
                                                     whatever = Whatever
                                                    }),
                                     mnesia:write(#ryctoic_session{
                                                     sessionid = SessionID,
                                                     sessioncsrf = SessionCSRF,
                                                     userid = UserID,
                                                     expires = Expires
                                                    })
                             end),
    {atomic, ok} = TR,
    error_logger:info_msg("--- creating session in db, setting cookie, SessionId: ~p, transaction: ~p~n", [SessionID, TR]),
    Req2 = update_cookie(Req, SessionID),
    Req2.

create_anonymous_user_and_session(Req) ->
    NewID = base64url:encode(rnd()),    % TODO: generate again if exists
    UserID = { NewID, anonymous },
    R = create_session(Req, #ryctoic_user{ id = UserID, whatever = 0 }),
    {R, UserID}.

update_cookie(Req, SessionID) ->
    {ok, MaxAge} = application:get_env(?MYAPP, maxage),
    R = cowboy_req:set_resp_cookie(<<"sessionid">>, SessionID, [
                                                                {domain, "local.ryctoic.com"},
                                                                {path, "/"},    % TODO: maybe restrict this
                                                                {max_age, MaxAge},   % TODO: maybe add an expires cookie preference
                                                                {secure, true},
                                                                {http_only, true}
                                                               ], Req),
    R.


%% ----------------------------------------------------------

rnd() ->
    N = 16,   % TODO: enough id length? make this configurable
    try crypto:strong_rand_bytes(N)   % TODO: CRITICAL handle low_entropy exception of crypto:strong_rand_bytes(N) --- http://stackoverflow.com/questions/30650842/how-to-handle-low-entropy-exception-of-cryptostrong-rand-bytesn
    catch
        error:low_entropy ->
            error_logger:error_msg("crypto:strong_rand_bytes() says low_entropy! falling back to crypto:rand_bytes()~n"),
            crypto:rand_bytes(N)
    end.

unixtime() ->   % TODO: ensure we don't manipulate timestamps in some wrong way
    {MegaSec, Sec, _Micro} = os:timestamp(),
    MegaSec*1000000 + Sec.





