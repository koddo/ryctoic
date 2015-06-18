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
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__){
return (function (state_12246){
var state_val_12247 = (state_12246[(1)]);
if((state_val_12247 === (7))){
var inst_12231 = (state_12246[(2)]);
var state_12246__$1 = (function (){var statearr_12248 = state_12246;
(statearr_12248[(7)] = inst_12231);

return statearr_12248;
})();
var statearr_12249_12269 = state_12246__$1;
(statearr_12249_12269[(2)] = null);

(statearr_12249_12269[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (1))){
var state_12246__$1 = state_12246;
var statearr_12250_12270 = state_12246__$1;
(statearr_12250_12270[(2)] = null);

(statearr_12250_12270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (4))){
var inst_12218 = (state_12246[(8)]);
var inst_12218__$1 = (state_12246[(2)]);
var inst_12219 = cljs.core.meta.call(null,inst_12218__$1);
var inst_12220 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_12219);
var state_12246__$1 = (function (){var statearr_12251 = state_12246;
(statearr_12251[(8)] = inst_12218__$1);

return statearr_12251;
})();
if(cljs.core.truth_(inst_12220)){
var statearr_12252_12271 = state_12246__$1;
(statearr_12252_12271[(1)] = (5));

} else {
var statearr_12253_12272 = state_12246__$1;
(statearr_12253_12272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (6))){
var inst_12227 = cljs.core.async.timeout.call(null,(0));
var state_12246__$1 = state_12246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,(9),inst_12227);
} else {
if((state_val_12247 === (3))){
var inst_12244 = (state_12246[(2)]);
var state_12246__$1 = state_12246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12246__$1,inst_12244);
} else {
if((state_val_12247 === (12))){
var inst_12218 = (state_12246[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12246,(11),Object,null,(10));
var inst_12239 = re_frame.handlers.handle.call(null,inst_12218);
var state_12246__$1 = state_12246;
var statearr_12254_12273 = state_12246__$1;
(statearr_12254_12273[(2)] = inst_12239);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (2))){
var state_12246__$1 = state_12246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_12247 === (11))){
var inst_12232 = (state_12246[(2)]);
var inst_12233 = re_frame.router.purge_chan.call(null);
var inst_12234 = re_frame$router$router_loop.call(null);
var inst_12235 = (function(){throw inst_12232})();
var state_12246__$1 = (function (){var statearr_12255 = state_12246;
(statearr_12255[(9)] = inst_12233);

(statearr_12255[(10)] = inst_12234);

return statearr_12255;
})();
var statearr_12256_12274 = state_12246__$1;
(statearr_12256_12274[(2)] = inst_12235);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (9))){
var inst_12229 = (state_12246[(2)]);
var state_12246__$1 = state_12246;
var statearr_12257_12275 = state_12246__$1;
(statearr_12257_12275[(2)] = inst_12229);

(statearr_12257_12275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (5))){
var inst_12222 = reagent.core.flush.call(null);
var inst_12223 = cljs.core.async.timeout.call(null,(20));
var state_12246__$1 = (function (){var statearr_12258 = state_12246;
(statearr_12258[(11)] = inst_12222);

return statearr_12258;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12246__$1,(8),inst_12223);
} else {
if((state_val_12247 === (10))){
var inst_12241 = (state_12246[(2)]);
var state_12246__$1 = (function (){var statearr_12259 = state_12246;
(statearr_12259[(12)] = inst_12241);

return statearr_12259;
})();
var statearr_12260_12276 = state_12246__$1;
(statearr_12260_12276[(2)] = null);

(statearr_12260_12276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12247 === (8))){
var inst_12225 = (state_12246[(2)]);
var state_12246__$1 = state_12246;
var statearr_12261_12277 = state_12246__$1;
(statearr_12261_12277[(2)] = inst_12225);

(statearr_12261_12277[(1)] = (7));


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
});})(c__6760__auto__))
;
return ((function (switch__6704__auto__,c__6760__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__6705__auto__ = null;
var re_frame$router$router_loop_$_state_machine__6705__auto____0 = (function (){
var statearr_12265 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12265[(0)] = re_frame$router$router_loop_$_state_machine__6705__auto__);

(statearr_12265[(1)] = (1));

return statearr_12265;
});
var re_frame$router$router_loop_$_state_machine__6705__auto____1 = (function (state_12246){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12266){if((e12266 instanceof Object)){
var ex__6708__auto__ = e12266;
var statearr_12267_12278 = state_12246;
(statearr_12267_12278[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12279 = state_12246;
state_12246 = G__12279;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__6705__auto__ = function(state_12246){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__6705__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__6705__auto____1.call(this,state_12246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__6705__auto____0;
re_frame$router$router_loop_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__6705__auto____1;
return re_frame$router$router_loop_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__))
})();
var state__6762__auto__ = (function (){var statearr_12268 = f__6761__auto__.call(null);
(statearr_12268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_12268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__))
);

return c__6760__auto__;
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

//# sourceMappingURL=router.js.map?rel=1434562322762