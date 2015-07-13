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
return (function (state_24970){
var state_val_24971 = (state_24970[(1)]);
if((state_val_24971 === (7))){
var inst_24955 = (state_24970[(2)]);
var state_24970__$1 = (function (){var statearr_24972 = state_24970;
(statearr_24972[(7)] = inst_24955);

return statearr_24972;
})();
var statearr_24973_24993 = state_24970__$1;
(statearr_24973_24993[(2)] = null);

(statearr_24973_24993[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (1))){
var state_24970__$1 = state_24970;
var statearr_24974_24994 = state_24970__$1;
(statearr_24974_24994[(2)] = null);

(statearr_24974_24994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (4))){
var inst_24942 = (state_24970[(8)]);
var inst_24942__$1 = (state_24970[(2)]);
var inst_24943 = cljs.core.meta.call(null,inst_24942__$1);
var inst_24944 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_24943);
var state_24970__$1 = (function (){var statearr_24975 = state_24970;
(statearr_24975[(8)] = inst_24942__$1);

return statearr_24975;
})();
if(cljs.core.truth_(inst_24944)){
var statearr_24976_24995 = state_24970__$1;
(statearr_24976_24995[(1)] = (5));

} else {
var statearr_24977_24996 = state_24970__$1;
(statearr_24977_24996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (6))){
var inst_24951 = cljs.core.async.timeout.call(null,(0));
var state_24970__$1 = state_24970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(9),inst_24951);
} else {
if((state_val_24971 === (3))){
var inst_24968 = (state_24970[(2)]);
var state_24970__$1 = state_24970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24970__$1,inst_24968);
} else {
if((state_val_24971 === (12))){
var inst_24942 = (state_24970[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24970,(11),Object,null,(10));
var inst_24963 = re_frame.handlers.handle.call(null,inst_24942);
var state_24970__$1 = state_24970;
var statearr_24978_24997 = state_24970__$1;
(statearr_24978_24997[(2)] = inst_24963);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (2))){
var state_24970__$1 = state_24970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_24971 === (11))){
var inst_24956 = (state_24970[(2)]);
var inst_24957 = re_frame.router.purge_chan.call(null);
var inst_24958 = re_frame$router$router_loop.call(null);
var inst_24959 = (function(){throw inst_24956})();
var state_24970__$1 = (function (){var statearr_24979 = state_24970;
(statearr_24979[(9)] = inst_24957);

(statearr_24979[(10)] = inst_24958);

return statearr_24979;
})();
var statearr_24980_24998 = state_24970__$1;
(statearr_24980_24998[(2)] = inst_24959);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24970__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (9))){
var inst_24953 = (state_24970[(2)]);
var state_24970__$1 = state_24970;
var statearr_24981_24999 = state_24970__$1;
(statearr_24981_24999[(2)] = inst_24953);

(statearr_24981_24999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (5))){
var inst_24946 = reagent.core.flush.call(null);
var inst_24947 = cljs.core.async.timeout.call(null,(20));
var state_24970__$1 = (function (){var statearr_24982 = state_24970;
(statearr_24982[(11)] = inst_24946);

return statearr_24982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24970__$1,(8),inst_24947);
} else {
if((state_val_24971 === (10))){
var inst_24965 = (state_24970[(2)]);
var state_24970__$1 = (function (){var statearr_24983 = state_24970;
(statearr_24983[(12)] = inst_24965);

return statearr_24983;
})();
var statearr_24984_25000 = state_24970__$1;
(statearr_24984_25000[(2)] = null);

(statearr_24984_25000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24971 === (8))){
var inst_24949 = (state_24970[(2)]);
var state_24970__$1 = state_24970;
var statearr_24985_25001 = state_24970__$1;
(statearr_24985_25001[(2)] = inst_24949);

(statearr_24985_25001[(1)] = (7));


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
var statearr_24989 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24989[(0)] = re_frame$router$router_loop_$_state_machine__20038__auto__);

(statearr_24989[(1)] = (1));

return statearr_24989;
});
var re_frame$router$router_loop_$_state_machine__20038__auto____1 = (function (state_24970){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_24970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e24990){if((e24990 instanceof Object)){
var ex__20041__auto__ = e24990;
var statearr_24991_25002 = state_24970;
(statearr_24991_25002[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25003 = state_24970;
state_24970 = G__25003;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__20038__auto__ = function(state_24970){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__20038__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__20038__auto____1.call(this,state_24970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__20038__auto____0;
re_frame$router$router_loop_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__20038__auto____1;
return re_frame$router$router_loop_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_24992 = f__20094__auto__.call(null);
(statearr_24992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_24992;
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

//# sourceMappingURL=router.js.map?rel=1435073925917