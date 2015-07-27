%% Feel free to use, reuse and abuse the code in this file.

%% @doc Hello world handler.
-module(handler_index).

-include("my-mnesia-records.hlr").

-export([init/2,
         create_session/2
        ]).


-define(MAXAGE, 1*10).   % seconds
%% TODO: maybe set shorter max-age in cookie than in db record, to ensure expired cookies won't be sent --- to track attacks?


init(Req, Opts) ->
    Cookies = cowboy_req:parse_cookies(Req),
    Req_cookies = case lists:keyfind(<<"sessionid">>, 1, Cookies) of
                      false ->
                          error_logger:info_msg("--- no sessionid cookie --- creating anonymous user and cookies~n", []),
                          create_anonymous_user_and_session(Req);
                      {_, SessionID} ->   % TODO: validate user input
                          {atomic, SessionList} = mnesia:transaction(fun() ->
                                                                             mnesia:read(ryctoic_session, SessionID)
                                                                     end),
                          case SessionList of
                              [] ->   % TODO: handle incorrect session. It maybe a malformed sessionid, or an expired one which should have been removed already in the browser
                                  error_logger:info_msg("--- sessionid cookie is not in the db, the invalid SessionID: ~p --- creating anonymous user and cookies~n", [SessionID]),
                                  create_anonymous_user_and_session(Req);
                              [Session] ->
                                  {ryctoic_session, SessionID, SessionCSRF, UserID, Expires, Fuck} = Session,
                                  T = unixtime(),
                                  if T > Expires 
                                     -> error_logger:info_msg("--- sessionid cookie is expired in the db, the whole Session: ~p --- creating anonymous user and cookies~n", [Session]),
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
                                          error_logger:info_msg("--- sessionid cookie is valid, the whole Session: ~p --- updating expire datetime in db and updating cookie, transaction: ~p~n", [Session, TR]),
                                          update_cookie(Req, SessionID)
                                  end
                          end
                  end,
    {ok, Body} = index_dtl:render([{sessioncsrf, <<"123">>}, {somedata, <<"321">>}]),
	Req_body = cowboy_req:reply(200, [{<<"content-type">>, <<"text/html">>}], Body, Req_cookies),
	{ok, Req_body, Opts}.

%% ----------------------------------------------------------


%% TODO: mark old session as used
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
    error_logger:info_msg("--- creating session in db, setting cookie, SessionId: ~p, transaction: ~p~n", [SessionID, TR]),
    Req2 = update_cookie(Req, SessionID),
    Req2.

create_anonymous_user_and_session(Req) ->
    NewID = base64url:encode(rnd()),    % TODO: generate again if exists
    R = create_session(Req, #ryctoic_user{ id = { NewID, anonymous}, from = 0 }),
    R.

update_cookie(Req, SessionID) ->
    {ok, MaxAge} = application:get_env(?MYAPP, maxage),
    R = cowboy_req:set_resp_cookie(<<"sessionid">>, SessionID, [
                                                                     {domain, "localhost.ryctoic.com"},
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

unixtime() ->
    {MegaSec, Sec, _Micro} = os:timestamp(),
    MegaSec*1000000 + Sec.





