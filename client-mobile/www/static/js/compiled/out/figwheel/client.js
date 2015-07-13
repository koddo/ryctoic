// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__28339__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28340__i = 0, G__28340__a = new Array(arguments.length -  0);
while (G__28340__i < G__28340__a.length) {G__28340__a[G__28340__i] = arguments[G__28340__i + 0]; ++G__28340__i;}
  args = new cljs.core.IndexedSeq(G__28340__a,0);
} 
return G__28339__delegate.call(this,args);};
G__28339.cljs$lang$maxFixedArity = 0;
G__28339.cljs$lang$applyTo = (function (arglist__28341){
var args = cljs.core.seq(arglist__28341);
return G__28339__delegate(args);
});
G__28339.cljs$core$IFn$_invoke$arity$variadic = G__28339__delegate;
return G__28339;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28342){
var map__28344 = p__28342;
var map__28344__$1 = ((cljs.core.seq_QMARK_.call(null,map__28344))?cljs.core.apply.call(null,cljs.core.hash_map,map__28344):map__28344);
var class$ = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__28344__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17787__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17775__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17775__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17775__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20093__auto___28473 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___28473,ch){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___28473,ch){
return (function (state_28447){
var state_val_28448 = (state_28447[(1)]);
if((state_val_28448 === (7))){
var inst_28443 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28449_28474 = state_28447__$1;
(statearr_28449_28474[(2)] = inst_28443);

(statearr_28449_28474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (1))){
var state_28447__$1 = state_28447;
var statearr_28450_28475 = state_28447__$1;
(statearr_28450_28475[(2)] = null);

(statearr_28450_28475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (4))){
var inst_28411 = (state_28447[(7)]);
var inst_28411__$1 = (state_28447[(2)]);
var state_28447__$1 = (function (){var statearr_28451 = state_28447;
(statearr_28451[(7)] = inst_28411__$1);

return statearr_28451;
})();
if(cljs.core.truth_(inst_28411__$1)){
var statearr_28452_28476 = state_28447__$1;
(statearr_28452_28476[(1)] = (5));

} else {
var statearr_28453_28477 = state_28447__$1;
(statearr_28453_28477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (13))){
var state_28447__$1 = state_28447;
var statearr_28454_28478 = state_28447__$1;
(statearr_28454_28478[(2)] = null);

(statearr_28454_28478[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (6))){
var state_28447__$1 = state_28447;
var statearr_28455_28479 = state_28447__$1;
(statearr_28455_28479[(2)] = null);

(statearr_28455_28479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (3))){
var inst_28445 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28447__$1,inst_28445);
} else {
if((state_val_28448 === (12))){
var inst_28418 = (state_28447[(8)]);
var inst_28431 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28418);
var inst_28432 = cljs.core.first.call(null,inst_28431);
var inst_28433 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28432);
var inst_28434 = console.warn("Figwheel: Not loading code with warnings - ",inst_28433);
var state_28447__$1 = state_28447;
var statearr_28456_28480 = state_28447__$1;
(statearr_28456_28480[(2)] = inst_28434);

(statearr_28456_28480[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (2))){
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28447__$1,(4),ch);
} else {
if((state_val_28448 === (11))){
var inst_28427 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28457_28481 = state_28447__$1;
(statearr_28457_28481[(2)] = inst_28427);

(statearr_28457_28481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (9))){
var inst_28417 = (state_28447[(9)]);
var inst_28429 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28417,opts);
var state_28447__$1 = state_28447;
if(inst_28429){
var statearr_28458_28482 = state_28447__$1;
(statearr_28458_28482[(1)] = (12));

} else {
var statearr_28459_28483 = state_28447__$1;
(statearr_28459_28483[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (5))){
var inst_28417 = (state_28447[(9)]);
var inst_28411 = (state_28447[(7)]);
var inst_28413 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28414 = (new cljs.core.PersistentArrayMap(null,2,inst_28413,null));
var inst_28415 = (new cljs.core.PersistentHashSet(null,inst_28414,null));
var inst_28416 = figwheel.client.focus_msgs.call(null,inst_28415,inst_28411);
var inst_28417__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28416);
var inst_28418 = cljs.core.first.call(null,inst_28416);
var inst_28419 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28417__$1,opts);
var state_28447__$1 = (function (){var statearr_28460 = state_28447;
(statearr_28460[(8)] = inst_28418);

(statearr_28460[(9)] = inst_28417__$1);

return statearr_28460;
})();
if(cljs.core.truth_(inst_28419)){
var statearr_28461_28484 = state_28447__$1;
(statearr_28461_28484[(1)] = (8));

} else {
var statearr_28462_28485 = state_28447__$1;
(statearr_28462_28485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (14))){
var inst_28437 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28463_28486 = state_28447__$1;
(statearr_28463_28486[(2)] = inst_28437);

(statearr_28463_28486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (10))){
var inst_28439 = (state_28447[(2)]);
var state_28447__$1 = (function (){var statearr_28464 = state_28447;
(statearr_28464[(10)] = inst_28439);

return statearr_28464;
})();
var statearr_28465_28487 = state_28447__$1;
(statearr_28465_28487[(2)] = null);

(statearr_28465_28487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (8))){
var inst_28418 = (state_28447[(8)]);
var inst_28421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28422 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28418);
var inst_28423 = cljs.core.async.timeout.call(null,(1000));
var inst_28424 = [inst_28422,inst_28423];
var inst_28425 = (new cljs.core.PersistentVector(null,2,(5),inst_28421,inst_28424,null));
var state_28447__$1 = state_28447;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28447__$1,(11),inst_28425);
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
}
}
});})(c__20093__auto___28473,ch))
;
return ((function (switch__20037__auto__,c__20093__auto___28473,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20038__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20038__auto____0 = (function (){
var statearr_28469 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28469[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20038__auto__);

(statearr_28469[(1)] = (1));

return statearr_28469;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20038__auto____1 = (function (state_28447){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_28447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e28470){if((e28470 instanceof Object)){
var ex__20041__auto__ = e28470;
var statearr_28471_28488 = state_28447;
(statearr_28471_28488[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28489 = state_28447;
state_28447 = G__28489;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20038__auto__ = function(state_28447){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20038__auto____1.call(this,state_28447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20038__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20038__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___28473,ch))
})();
var state__20095__auto__ = (function (){var statearr_28472 = f__20094__auto__.call(null);
(statearr_28472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___28473);

return statearr_28472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___28473,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28490_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28490_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28499 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__28492_SHARP_,p2__28491_SHARP_){
return [cljs.core.str(p2__28491_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28499){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_28497 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28498 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28497,_STAR_print_newline_STAR_28498,base_path_28499){
return (function() { 
var G__28500__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28500 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28501__i = 0, G__28501__a = new Array(arguments.length -  0);
while (G__28501__i < G__28501__a.length) {G__28501__a[G__28501__i] = arguments[G__28501__i + 0]; ++G__28501__i;}
  args = new cljs.core.IndexedSeq(G__28501__a,0);
} 
return G__28500__delegate.call(this,args);};
G__28500.cljs$lang$maxFixedArity = 0;
G__28500.cljs$lang$applyTo = (function (arglist__28502){
var args = cljs.core.seq(arglist__28502);
return G__28500__delegate(args);
});
G__28500.cljs$core$IFn$_invoke$arity$variadic = G__28500__delegate;
return G__28500;
})()
;})(_STAR_print_fn_STAR_28497,_STAR_print_newline_STAR_28498,base_path_28499))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28498;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28497;
}}catch (e28496){if((e28496 instanceof Error)){
var e = e28496;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28499], null));
} else {
var e = e28496;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28499))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28503){
var map__28508 = p__28503;
var map__28508__$1 = ((cljs.core.seq_QMARK_.call(null,map__28508))?cljs.core.apply.call(null,cljs.core.hash_map,map__28508):map__28508);
var opts = map__28508__$1;
var build_id = cljs.core.get.call(null,map__28508__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28508,map__28508__$1,opts,build_id){
return (function (p__28509){
var vec__28510 = p__28509;
var map__28511 = cljs.core.nth.call(null,vec__28510,(0),null);
var map__28511__$1 = ((cljs.core.seq_QMARK_.call(null,map__28511))?cljs.core.apply.call(null,cljs.core.hash_map,map__28511):map__28511);
var msg = map__28511__$1;
var msg_name = cljs.core.get.call(null,map__28511__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28510,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__28510,map__28511,map__28511__$1,msg,msg_name,_,map__28508,map__28508__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28510,map__28511,map__28511__$1,msg,msg_name,_,map__28508,map__28508__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28508,map__28508__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28515){
var vec__28516 = p__28515;
var map__28517 = cljs.core.nth.call(null,vec__28516,(0),null);
var map__28517__$1 = ((cljs.core.seq_QMARK_.call(null,map__28517))?cljs.core.apply.call(null,cljs.core.hash_map,map__28517):map__28517);
var msg = map__28517__$1;
var msg_name = cljs.core.get.call(null,map__28517__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28516,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28518){
var map__28526 = p__28518;
var map__28526__$1 = ((cljs.core.seq_QMARK_.call(null,map__28526))?cljs.core.apply.call(null,cljs.core.hash_map,map__28526):map__28526);
var on_compile_fail = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__28526__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__28526,map__28526__$1,on_compile_fail,on_compile_warning){
return (function (p__28527){
var vec__28528 = p__28527;
var map__28529 = cljs.core.nth.call(null,vec__28528,(0),null);
var map__28529__$1 = ((cljs.core.seq_QMARK_.call(null,map__28529))?cljs.core.apply.call(null,cljs.core.hash_map,map__28529):map__28529);
var msg = map__28529__$1;
var msg_name = cljs.core.get.call(null,map__28529__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28528,(1));
var pred__28530 = cljs.core._EQ_;
var expr__28531 = msg_name;
if(cljs.core.truth_(pred__28530.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28531))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28530.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28531))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28526,map__28526__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__,msg_hist,msg_names,msg){
return (function (state_28732){
var state_val_28733 = (state_28732[(1)]);
if((state_val_28733 === (7))){
var inst_28666 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28734_28775 = state_28732__$1;
(statearr_28734_28775[(2)] = inst_28666);

(statearr_28734_28775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (20))){
var inst_28694 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28732__$1 = state_28732;
if(inst_28694){
var statearr_28735_28776 = state_28732__$1;
(statearr_28735_28776[(1)] = (22));

} else {
var statearr_28736_28777 = state_28732__$1;
(statearr_28736_28777[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (27))){
var inst_28706 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28707 = figwheel.client.heads_up.display_warning.call(null,inst_28706);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(30),inst_28707);
} else {
if((state_val_28733 === (1))){
var inst_28654 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28732__$1 = state_28732;
if(cljs.core.truth_(inst_28654)){
var statearr_28737_28778 = state_28732__$1;
(statearr_28737_28778[(1)] = (2));

} else {
var statearr_28738_28779 = state_28732__$1;
(statearr_28738_28779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (24))){
var inst_28722 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28739_28780 = state_28732__$1;
(statearr_28739_28780[(2)] = inst_28722);

(statearr_28739_28780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (4))){
var inst_28730 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28732__$1,inst_28730);
} else {
if((state_val_28733 === (15))){
var inst_28682 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28683 = figwheel.client.format_messages.call(null,inst_28682);
var inst_28684 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28685 = figwheel.client.heads_up.display_error.call(null,inst_28683,inst_28684);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(18),inst_28685);
} else {
if((state_val_28733 === (21))){
var inst_28724 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28740_28781 = state_28732__$1;
(statearr_28740_28781[(2)] = inst_28724);

(statearr_28740_28781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (31))){
var inst_28713 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(34),inst_28713);
} else {
if((state_val_28733 === (32))){
var state_28732__$1 = state_28732;
var statearr_28741_28782 = state_28732__$1;
(statearr_28741_28782[(2)] = null);

(statearr_28741_28782[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (33))){
var inst_28718 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28742_28783 = state_28732__$1;
(statearr_28742_28783[(2)] = inst_28718);

(statearr_28742_28783[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (13))){
var inst_28672 = (state_28732[(2)]);
var inst_28673 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28674 = figwheel.client.format_messages.call(null,inst_28673);
var inst_28675 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28676 = figwheel.client.heads_up.display_error.call(null,inst_28674,inst_28675);
var state_28732__$1 = (function (){var statearr_28743 = state_28732;
(statearr_28743[(7)] = inst_28672);

return statearr_28743;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(14),inst_28676);
} else {
if((state_val_28733 === (22))){
var inst_28696 = figwheel.client.heads_up.clear.call(null);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(25),inst_28696);
} else {
if((state_val_28733 === (29))){
var inst_28720 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28744_28784 = state_28732__$1;
(statearr_28744_28784[(2)] = inst_28720);

(statearr_28744_28784[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (6))){
var inst_28662 = figwheel.client.heads_up.clear.call(null);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(9),inst_28662);
} else {
if((state_val_28733 === (28))){
var inst_28711 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28732__$1 = state_28732;
if(inst_28711){
var statearr_28745_28785 = state_28732__$1;
(statearr_28745_28785[(1)] = (31));

} else {
var statearr_28746_28786 = state_28732__$1;
(statearr_28746_28786[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (25))){
var inst_28698 = (state_28732[(2)]);
var inst_28699 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28700 = figwheel.client.heads_up.display_warning.call(null,inst_28699);
var state_28732__$1 = (function (){var statearr_28747 = state_28732;
(statearr_28747[(8)] = inst_28698);

return statearr_28747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(26),inst_28700);
} else {
if((state_val_28733 === (34))){
var inst_28715 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28748_28787 = state_28732__$1;
(statearr_28748_28787[(2)] = inst_28715);

(statearr_28748_28787[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (17))){
var inst_28726 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28749_28788 = state_28732__$1;
(statearr_28749_28788[(2)] = inst_28726);

(statearr_28749_28788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (3))){
var inst_28668 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28732__$1 = state_28732;
if(inst_28668){
var statearr_28750_28789 = state_28732__$1;
(statearr_28750_28789[(1)] = (10));

} else {
var statearr_28751_28790 = state_28732__$1;
(statearr_28751_28790[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (12))){
var inst_28728 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28752_28791 = state_28732__$1;
(statearr_28752_28791[(2)] = inst_28728);

(statearr_28752_28791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (2))){
var inst_28656 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28732__$1 = state_28732;
if(cljs.core.truth_(inst_28656)){
var statearr_28753_28792 = state_28732__$1;
(statearr_28753_28792[(1)] = (5));

} else {
var statearr_28754_28793 = state_28732__$1;
(statearr_28754_28793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (23))){
var inst_28704 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28732__$1 = state_28732;
if(inst_28704){
var statearr_28755_28794 = state_28732__$1;
(statearr_28755_28794[(1)] = (27));

} else {
var statearr_28756_28795 = state_28732__$1;
(statearr_28756_28795[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (19))){
var inst_28691 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28692 = figwheel.client.heads_up.append_message.call(null,inst_28691);
var state_28732__$1 = state_28732;
var statearr_28757_28796 = state_28732__$1;
(statearr_28757_28796[(2)] = inst_28692);

(statearr_28757_28796[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (11))){
var inst_28680 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28732__$1 = state_28732;
if(inst_28680){
var statearr_28758_28797 = state_28732__$1;
(statearr_28758_28797[(1)] = (15));

} else {
var statearr_28759_28798 = state_28732__$1;
(statearr_28759_28798[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (9))){
var inst_28664 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28760_28799 = state_28732__$1;
(statearr_28760_28799[(2)] = inst_28664);

(statearr_28760_28799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (5))){
var inst_28658 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(8),inst_28658);
} else {
if((state_val_28733 === (14))){
var inst_28678 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28761_28800 = state_28732__$1;
(statearr_28761_28800[(2)] = inst_28678);

(statearr_28761_28800[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (26))){
var inst_28702 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28762_28801 = state_28732__$1;
(statearr_28762_28801[(2)] = inst_28702);

(statearr_28762_28801[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (16))){
var inst_28689 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28732__$1 = state_28732;
if(inst_28689){
var statearr_28763_28802 = state_28732__$1;
(statearr_28763_28802[(1)] = (19));

} else {
var statearr_28764_28803 = state_28732__$1;
(statearr_28764_28803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (30))){
var inst_28709 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28765_28804 = state_28732__$1;
(statearr_28765_28804[(2)] = inst_28709);

(statearr_28765_28804[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (10))){
var inst_28670 = figwheel.client.heads_up.clear.call(null);
var state_28732__$1 = state_28732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28732__$1,(13),inst_28670);
} else {
if((state_val_28733 === (18))){
var inst_28687 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28766_28805 = state_28732__$1;
(statearr_28766_28805[(2)] = inst_28687);

(statearr_28766_28805[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28733 === (8))){
var inst_28660 = (state_28732[(2)]);
var state_28732__$1 = state_28732;
var statearr_28767_28806 = state_28732__$1;
(statearr_28767_28806[(2)] = inst_28660);

(statearr_28767_28806[(1)] = (7));


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
});})(c__20093__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20037__auto__,c__20093__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto____0 = (function (){
var statearr_28771 = [null,null,null,null,null,null,null,null,null];
(statearr_28771[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto__);

(statearr_28771[(1)] = (1));

return statearr_28771;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto____1 = (function (state_28732){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_28732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e28772){if((e28772 instanceof Object)){
var ex__20041__auto__ = e28772;
var statearr_28773_28807 = state_28732;
(statearr_28773_28807[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28808 = state_28732;
state_28732 = G__28808;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto__ = function(state_28732){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto____1.call(this,state_28732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__,msg_hist,msg_names,msg))
})();
var state__20095__auto__ = (function (){var statearr_28774 = f__20094__auto__.call(null);
(statearr_28774[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_28774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__,msg_hist,msg_names,msg))
);

return c__20093__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20093__auto___28871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___28871,ch){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___28871,ch){
return (function (state_28854){
var state_val_28855 = (state_28854[(1)]);
if((state_val_28855 === (8))){
var inst_28846 = (state_28854[(2)]);
var state_28854__$1 = (function (){var statearr_28856 = state_28854;
(statearr_28856[(7)] = inst_28846);

return statearr_28856;
})();
var statearr_28857_28872 = state_28854__$1;
(statearr_28857_28872[(2)] = null);

(statearr_28857_28872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28855 === (7))){
var inst_28850 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
var statearr_28858_28873 = state_28854__$1;
(statearr_28858_28873[(2)] = inst_28850);

(statearr_28858_28873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28855 === (6))){
var state_28854__$1 = state_28854;
var statearr_28859_28874 = state_28854__$1;
(statearr_28859_28874[(2)] = null);

(statearr_28859_28874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28855 === (5))){
var inst_28842 = (state_28854[(8)]);
var inst_28844 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28842);
var state_28854__$1 = state_28854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28854__$1,(8),inst_28844);
} else {
if((state_val_28855 === (4))){
var inst_28842 = (state_28854[(8)]);
var inst_28842__$1 = (state_28854[(2)]);
var state_28854__$1 = (function (){var statearr_28860 = state_28854;
(statearr_28860[(8)] = inst_28842__$1);

return statearr_28860;
})();
if(cljs.core.truth_(inst_28842__$1)){
var statearr_28861_28875 = state_28854__$1;
(statearr_28861_28875[(1)] = (5));

} else {
var statearr_28862_28876 = state_28854__$1;
(statearr_28862_28876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28855 === (3))){
var inst_28852 = (state_28854[(2)]);
var state_28854__$1 = state_28854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28854__$1,inst_28852);
} else {
if((state_val_28855 === (2))){
var state_28854__$1 = state_28854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28854__$1,(4),ch);
} else {
if((state_val_28855 === (1))){
var state_28854__$1 = state_28854;
var statearr_28863_28877 = state_28854__$1;
(statearr_28863_28877[(2)] = null);

(statearr_28863_28877[(1)] = (2));


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
});})(c__20093__auto___28871,ch))
;
return ((function (switch__20037__auto__,c__20093__auto___28871,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20038__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20038__auto____0 = (function (){
var statearr_28867 = [null,null,null,null,null,null,null,null,null];
(statearr_28867[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20038__auto__);

(statearr_28867[(1)] = (1));

return statearr_28867;
});
var figwheel$client$heads_up_plugin_$_state_machine__20038__auto____1 = (function (state_28854){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_28854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e28868){if((e28868 instanceof Object)){
var ex__20041__auto__ = e28868;
var statearr_28869_28878 = state_28854;
(statearr_28869_28878[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28868;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28879 = state_28854;
state_28854 = G__28879;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20038__auto__ = function(state_28854){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20038__auto____1.call(this,state_28854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20038__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20038__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___28871,ch))
})();
var state__20095__auto__ = (function (){var statearr_28870 = f__20094__auto__.call(null);
(statearr_28870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___28871);

return statearr_28870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___28871,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_28900){
var state_val_28901 = (state_28900[(1)]);
if((state_val_28901 === (2))){
var inst_28897 = (state_28900[(2)]);
var inst_28898 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28900__$1 = (function (){var statearr_28902 = state_28900;
(statearr_28902[(7)] = inst_28897);

return statearr_28902;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28900__$1,inst_28898);
} else {
if((state_val_28901 === (1))){
var inst_28895 = cljs.core.async.timeout.call(null,(3000));
var state_28900__$1 = state_28900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28900__$1,(2),inst_28895);
} else {
return null;
}
}
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20038__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20038__auto____0 = (function (){
var statearr_28906 = [null,null,null,null,null,null,null,null];
(statearr_28906[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20038__auto__);

(statearr_28906[(1)] = (1));

return statearr_28906;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20038__auto____1 = (function (state_28900){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_28900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e28907){if((e28907 instanceof Object)){
var ex__20041__auto__ = e28907;
var statearr_28908_28910 = state_28900;
(statearr_28908_28910[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28911 = state_28900;
state_28900 = G__28911;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20038__auto__ = function(state_28900){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20038__auto____1.call(this,state_28900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20038__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20038__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_28909 = f__20094__auto__.call(null);
(statearr_28909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_28909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__17775__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__17775__auto__)){
return ("CustomEvent" in window);
} else {
return and__17775__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj28915 = {"detail":url};
return obj28915;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28916){
var map__28922 = p__28916;
var map__28922__$1 = ((cljs.core.seq_QMARK_.call(null,map__28922))?cljs.core.apply.call(null,cljs.core.hash_map,map__28922):map__28922);
var ed = map__28922__$1;
var cause = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__28922__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28923_28927 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28924_28928 = null;
var count__28925_28929 = (0);
var i__28926_28930 = (0);
while(true){
if((i__28926_28930 < count__28925_28929)){
var msg_28931 = cljs.core._nth.call(null,chunk__28924_28928,i__28926_28930);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28931);

var G__28932 = seq__28923_28927;
var G__28933 = chunk__28924_28928;
var G__28934 = count__28925_28929;
var G__28935 = (i__28926_28930 + (1));
seq__28923_28927 = G__28932;
chunk__28924_28928 = G__28933;
count__28925_28929 = G__28934;
i__28926_28930 = G__28935;
continue;
} else {
var temp__4126__auto___28936 = cljs.core.seq.call(null,seq__28923_28927);
if(temp__4126__auto___28936){
var seq__28923_28937__$1 = temp__4126__auto___28936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28923_28937__$1)){
var c__18572__auto___28938 = cljs.core.chunk_first.call(null,seq__28923_28937__$1);
var G__28939 = cljs.core.chunk_rest.call(null,seq__28923_28937__$1);
var G__28940 = c__18572__auto___28938;
var G__28941 = cljs.core.count.call(null,c__18572__auto___28938);
var G__28942 = (0);
seq__28923_28927 = G__28939;
chunk__28924_28928 = G__28940;
count__28925_28929 = G__28941;
i__28926_28930 = G__28942;
continue;
} else {
var msg_28943 = cljs.core.first.call(null,seq__28923_28937__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28943);

var G__28944 = cljs.core.next.call(null,seq__28923_28937__$1);
var G__28945 = null;
var G__28946 = (0);
var G__28947 = (0);
seq__28923_28927 = G__28944;
chunk__28924_28928 = G__28945;
count__28925_28929 = G__28946;
i__28926_28930 = G__28947;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28948){
var map__28950 = p__28948;
var map__28950__$1 = ((cljs.core.seq_QMARK_.call(null,map__28950))?cljs.core.apply.call(null,cljs.core.hash_map,map__28950):map__28950);
var w = map__28950__$1;
var message = cljs.core.get.call(null,map__28950__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__17775__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17775__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17775__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28957 = cljs.core.seq.call(null,plugins);
var chunk__28958 = null;
var count__28959 = (0);
var i__28960 = (0);
while(true){
if((i__28960 < count__28959)){
var vec__28961 = cljs.core._nth.call(null,chunk__28958,i__28960);
var k = cljs.core.nth.call(null,vec__28961,(0),null);
var plugin = cljs.core.nth.call(null,vec__28961,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28963 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28957,chunk__28958,count__28959,i__28960,pl_28963,vec__28961,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28963.call(null,msg_hist);
});})(seq__28957,chunk__28958,count__28959,i__28960,pl_28963,vec__28961,k,plugin))
);
} else {
}

var G__28964 = seq__28957;
var G__28965 = chunk__28958;
var G__28966 = count__28959;
var G__28967 = (i__28960 + (1));
seq__28957 = G__28964;
chunk__28958 = G__28965;
count__28959 = G__28966;
i__28960 = G__28967;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__28957);
if(temp__4126__auto__){
var seq__28957__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28957__$1)){
var c__18572__auto__ = cljs.core.chunk_first.call(null,seq__28957__$1);
var G__28968 = cljs.core.chunk_rest.call(null,seq__28957__$1);
var G__28969 = c__18572__auto__;
var G__28970 = cljs.core.count.call(null,c__18572__auto__);
var G__28971 = (0);
seq__28957 = G__28968;
chunk__28958 = G__28969;
count__28959 = G__28970;
i__28960 = G__28971;
continue;
} else {
var vec__28962 = cljs.core.first.call(null,seq__28957__$1);
var k = cljs.core.nth.call(null,vec__28962,(0),null);
var plugin = cljs.core.nth.call(null,vec__28962,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28972 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28957,chunk__28958,count__28959,i__28960,pl_28972,vec__28962,k,plugin,seq__28957__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28972.call(null,msg_hist);
});})(seq__28957,chunk__28958,count__28959,i__28960,pl_28972,vec__28962,k,plugin,seq__28957__$1,temp__4126__auto__))
);
} else {
}

var G__28973 = cljs.core.next.call(null,seq__28957__$1);
var G__28974 = null;
var G__28975 = (0);
var G__28976 = (0);
seq__28957 = G__28973;
chunk__28958 = G__28974;
count__28959 = G__28975;
i__28960 = G__28976;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__28977){
var map__28979 = p__28977;
var map__28979__$1 = ((cljs.core.seq_QMARK_.call(null,map__28979))?cljs.core.apply.call(null,cljs.core.hash_map,map__28979):map__28979);
var opts = map__28979__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__28977 = null;
if (arguments.length > 0) {
var G__28980__i = 0, G__28980__a = new Array(arguments.length -  0);
while (G__28980__i < G__28980__a.length) {G__28980__a[G__28980__i] = arguments[G__28980__i + 0]; ++G__28980__i;}
  p__28977 = new cljs.core.IndexedSeq(G__28980__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__28977);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__28981){
var p__28977 = cljs.core.seq(arglist__28981);
return figwheel$client$watch_and_reload__delegate(p__28977);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1435073933961