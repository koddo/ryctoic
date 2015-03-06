-module(ws_handler).

-export([init/2]).
-export([websocket_handle/3]).
-export([websocket_info/3]).
-export([terminate/3]).


-define(WSKey, {pubsub, wsbroadcast}).
-define(WSTimeout, 60000).

init(Req, Opts) ->
	erlang:start_timer(1000, self(), <<"Hello!">>),
    self() ! post_init,
	{cowboy_websocket, Req, Opts, ?WSTimeout, hibernate}.

websocket_info(post_init, Req, State) ->    % it is not recommended to wait too long inside the init/2 function: http://ninenines.eu/docs/en/cowboy/HEAD/guide/ws_handlers/#initialization
    gproc:reg({p, l, ?WSKey}),
    lager:info("websocket_info post_init", []),
    {ok, Req, State, hibernate};



websocket_info({timeout, _Ref, Msg}, Req, State) ->
	erlang:start_timer(5000, self(), <<"How' you doing?">>),
	{reply, {text, Msg}, Req, State, hibernate};
websocket_info({_PID, ?WSKey, Msg }, Req, State) ->
    {reply, {text, Msg}, Req, State, hibernate};
websocket_info(_Info, Req, State) ->
	{ok, Req, State, hibernate}.



websocket_handle({text, Msg}, Req, State) ->
	{reply, {text, << "That's what she said! ", Msg/binary >>}, Req, State, hibernate};
websocket_handle(_Data, Req, State) ->
	{ok, Req, State, hibernate}.



terminate(_Reason, _Req, _State) ->
    lager:info("websocket_terminate"),
    ok.

