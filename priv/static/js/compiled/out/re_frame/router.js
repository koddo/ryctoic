// Compiled by ClojureScript 1.7.48 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_25179){
var state_val_25180 = (state_25179[(1)]);
if((state_val_25180 === (7))){
var inst_25164 = (state_25179[(2)]);
var state_25179__$1 = (function (){var statearr_25181 = state_25179;
(statearr_25181[(7)] = inst_25164);

return statearr_25181;
})();
var statearr_25182_25202 = state_25179__$1;
(statearr_25182_25202[(2)] = null);

(statearr_25182_25202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (1))){
var state_25179__$1 = state_25179;
var statearr_25183_25203 = state_25179__$1;
(statearr_25183_25203[(2)] = null);

(statearr_25183_25203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (4))){
var inst_25151 = (state_25179[(8)]);
var inst_25151__$1 = (state_25179[(2)]);
var inst_25152 = cljs.core.meta.call(null,inst_25151__$1);
var inst_25153 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_25152);
var state_25179__$1 = (function (){var statearr_25184 = state_25179;
(statearr_25184[(8)] = inst_25151__$1);

return statearr_25184;
})();
if(cljs.core.truth_(inst_25153)){
var statearr_25185_25204 = state_25179__$1;
(statearr_25185_25204[(1)] = (5));

} else {
var statearr_25186_25205 = state_25179__$1;
(statearr_25186_25205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (6))){
var inst_25160 = cljs.core.async.timeout.call(null,(0));
var state_25179__$1 = state_25179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25179__$1,(9),inst_25160);
} else {
if((state_val_25180 === (3))){
var inst_25177 = (state_25179[(2)]);
var state_25179__$1 = state_25179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25179__$1,inst_25177);
} else {
if((state_val_25180 === (12))){
var inst_25151 = (state_25179[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25179,(11),Object,null,(10));
var inst_25172 = re_frame.handlers.handle.call(null,inst_25151);
var state_25179__$1 = state_25179;
var statearr_25187_25206 = state_25179__$1;
(statearr_25187_25206[(2)] = inst_25172);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (2))){
var state_25179__$1 = state_25179;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25179__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_25180 === (11))){
var inst_25165 = (state_25179[(2)]);
var inst_25166 = re_frame.router.purge_chan.call(null);
var inst_25167 = re_frame$router$router_loop.call(null);
var inst_25168 = (function(){throw inst_25165})();
var state_25179__$1 = (function (){var statearr_25188 = state_25179;
(statearr_25188[(9)] = inst_25166);

(statearr_25188[(10)] = inst_25167);

return statearr_25188;
})();
var statearr_25189_25207 = state_25179__$1;
(statearr_25189_25207[(2)] = inst_25168);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25179__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (9))){
var inst_25162 = (state_25179[(2)]);
var state_25179__$1 = state_25179;
var statearr_25190_25208 = state_25179__$1;
(statearr_25190_25208[(2)] = inst_25162);

(statearr_25190_25208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (5))){
var inst_25155 = reagent.core.flush.call(null);
var inst_25156 = cljs.core.async.timeout.call(null,(20));
var state_25179__$1 = (function (){var statearr_25191 = state_25179;
(statearr_25191[(11)] = inst_25155);

return statearr_25191;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25179__$1,(8),inst_25156);
} else {
if((state_val_25180 === (10))){
var inst_25174 = (state_25179[(2)]);
var state_25179__$1 = (function (){var statearr_25192 = state_25179;
(statearr_25192[(12)] = inst_25174);

return statearr_25192;
})();
var statearr_25193_25209 = state_25179__$1;
(statearr_25193_25209[(2)] = null);

(statearr_25193_25209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25180 === (8))){
var inst_25158 = (state_25179[(2)]);
var state_25179__$1 = state_25179;
var statearr_25194_25210 = state_25179__$1;
(statearr_25194_25210[(2)] = inst_25158);

(statearr_25194_25210[(1)] = (7));


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
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__19669__auto__ = null;
var re_frame$router$router_loop_$_state_machine__19669__auto____0 = (function (){
var statearr_25198 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25198[(0)] = re_frame$router$router_loop_$_state_machine__19669__auto__);

(statearr_25198[(1)] = (1));

return statearr_25198;
});
var re_frame$router$router_loop_$_state_machine__19669__auto____1 = (function (state_25179){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25199){if((e25199 instanceof Object)){
var ex__19672__auto__ = e25199;
var statearr_25200_25211 = state_25179;
(statearr_25200_25211[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25212 = state_25179;
state_25179 = G__25212;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__19669__auto__ = function(state_25179){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__19669__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__19669__auto____1.call(this,state_25179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__19669__auto____0;
re_frame$router$router_loop_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__19669__auto____1;
return re_frame$router$router_loop_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_25201 = f__19734__auto__.call(null);
(statearr_25201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_25201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
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

//# sourceMappingURL=router.js.map?rel=1440504632194