// Compiled by ClojureScript 0.0-3165 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_24971){
var state_val_24972 = (state_24971[(1)]);
if((state_val_24972 === (7))){
var inst_24956 = (state_24971[(2)]);
var state_24971__$1 = (function (){var statearr_24973 = state_24971;
(statearr_24973[(7)] = inst_24956);

return statearr_24973;
})();
var statearr_24974_24994 = state_24971__$1;
(statearr_24974_24994[(2)] = null);

(statearr_24974_24994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (1))){
var state_24971__$1 = state_24971;
var statearr_24975_24995 = state_24971__$1;
(statearr_24975_24995[(2)] = null);

(statearr_24975_24995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (4))){
var inst_24943 = (state_24971[(8)]);
var inst_24943__$1 = (state_24971[(2)]);
var inst_24944 = cljs.core.meta.call(null,inst_24943__$1);
var inst_24945 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_24944);
var state_24971__$1 = (function (){var statearr_24976 = state_24971;
(statearr_24976[(8)] = inst_24943__$1);

return statearr_24976;
})();
if(cljs.core.truth_(inst_24945)){
var statearr_24977_24996 = state_24971__$1;
(statearr_24977_24996[(1)] = (5));

} else {
var statearr_24978_24997 = state_24971__$1;
(statearr_24978_24997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (6))){
var inst_24952 = cljs.core.async.timeout.call(null,(0));
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24971__$1,(9),inst_24952);
} else {
if((state_val_24972 === (3))){
var inst_24969 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24971__$1,inst_24969);
} else {
if((state_val_24972 === (12))){
var inst_24943 = (state_24971[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24971,(11),Object,null,(10));
var inst_24964 = re_frame.handlers.handle.call(null,inst_24943);
var state_24971__$1 = state_24971;
var statearr_24979_24998 = state_24971__$1;
(statearr_24979_24998[(2)] = inst_24964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24971__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (2))){
var state_24971__$1 = state_24971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24971__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_24972 === (11))){
var inst_24957 = (state_24971[(2)]);
var inst_24958 = re_frame.router.purge_chan.call(null);
var inst_24959 = re_frame$router$router_loop.call(null);
var inst_24960 = (function(){throw inst_24957})();
var state_24971__$1 = (function (){var statearr_24980 = state_24971;
(statearr_24980[(9)] = inst_24958);

(statearr_24980[(10)] = inst_24959);

return statearr_24980;
})();
var statearr_24981_24999 = state_24971__$1;
(statearr_24981_24999[(2)] = inst_24960);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24971__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (9))){
var inst_24954 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24982_25000 = state_24971__$1;
(statearr_24982_25000[(2)] = inst_24954);

(statearr_24982_25000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (5))){
var inst_24947 = reagent.core.flush.call(null);
var inst_24948 = cljs.core.async.timeout.call(null,(20));
var state_24971__$1 = (function (){var statearr_24983 = state_24971;
(statearr_24983[(11)] = inst_24947);

return statearr_24983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24971__$1,(8),inst_24948);
} else {
if((state_val_24972 === (10))){
var inst_24966 = (state_24971[(2)]);
var state_24971__$1 = (function (){var statearr_24984 = state_24971;
(statearr_24984[(12)] = inst_24966);

return statearr_24984;
})();
var statearr_24985_25001 = state_24971__$1;
(statearr_24985_25001[(2)] = null);

(statearr_24985_25001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24972 === (8))){
var inst_24950 = (state_24971[(2)]);
var state_24971__$1 = state_24971;
var statearr_24986_25002 = state_24971__$1;
(statearr_24986_25002[(2)] = inst_24950);

(statearr_24986_25002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__20038__auto__ = null;
var re_frame$router$router_loop_$_state_machine__20038__auto____0 = (function (){
var statearr_24990 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24990[(0)] = re_frame$router$router_loop_$_state_machine__20038__auto__);

(statearr_24990[(1)] = (1));

return statearr_24990;
});
var re_frame$router$router_loop_$_state_machine__20038__auto____1 = (function (state_24971){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_24971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e24991){if((e24991 instanceof Object)){
var ex__20041__auto__ = e24991;
var statearr_24992_25003 = state_24971;
(statearr_24992_25003[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25004 = state_24971;
state_24971 = G__25004;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__20038__auto__ = function(state_24971){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__20038__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__20038__auto____1.call(this,state_24971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__20038__auto____0;
re_frame$router$router_loop_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__20038__auto____1;
return re_frame$router$router_loop_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_24993 = f__20094__auto__.call(null);
(statearr_24993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_24993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1434650169521