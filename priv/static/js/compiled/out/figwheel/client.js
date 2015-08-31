// Compiled by ClojureScript 1.7.48 {}
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
var G__28196__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28197__i = 0, G__28197__a = new Array(arguments.length -  0);
while (G__28197__i < G__28197__a.length) {G__28197__a[G__28197__i] = arguments[G__28197__i + 0]; ++G__28197__i;}
  args = new cljs.core.IndexedSeq(G__28197__a,0);
} 
return G__28196__delegate.call(this,args);};
G__28196.cljs$lang$maxFixedArity = 0;
G__28196.cljs$lang$applyTo = (function (arglist__28198){
var args = cljs.core.seq(arglist__28198);
return G__28196__delegate(args);
});
G__28196.cljs$core$IFn$_invoke$arity$variadic = G__28196__delegate;
return G__28196;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28199){
var map__28202 = p__28199;
var map__28202__$1 = ((((!((map__28202 == null)))?((((map__28202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28202):map__28202);
var message = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28202__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16472__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16460__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16460__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16460__auto__;
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
var c__19733__auto___28332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___28332,ch){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___28332,ch){
return (function (state_28306){
var state_val_28307 = (state_28306[(1)]);
if((state_val_28307 === (7))){
var inst_28302 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28308_28333 = state_28306__$1;
(statearr_28308_28333[(2)] = inst_28302);

(statearr_28308_28333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (1))){
var state_28306__$1 = state_28306;
var statearr_28309_28334 = state_28306__$1;
(statearr_28309_28334[(2)] = null);

(statearr_28309_28334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (4))){
var inst_28270 = (state_28306[(7)]);
var inst_28270__$1 = (state_28306[(2)]);
var state_28306__$1 = (function (){var statearr_28310 = state_28306;
(statearr_28310[(7)] = inst_28270__$1);

return statearr_28310;
})();
if(cljs.core.truth_(inst_28270__$1)){
var statearr_28311_28335 = state_28306__$1;
(statearr_28311_28335[(1)] = (5));

} else {
var statearr_28312_28336 = state_28306__$1;
(statearr_28312_28336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (13))){
var state_28306__$1 = state_28306;
var statearr_28313_28337 = state_28306__$1;
(statearr_28313_28337[(2)] = null);

(statearr_28313_28337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (6))){
var state_28306__$1 = state_28306;
var statearr_28314_28338 = state_28306__$1;
(statearr_28314_28338[(2)] = null);

(statearr_28314_28338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (3))){
var inst_28304 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28306__$1,inst_28304);
} else {
if((state_val_28307 === (12))){
var inst_28277 = (state_28306[(8)]);
var inst_28290 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28277);
var inst_28291 = cljs.core.first.call(null,inst_28290);
var inst_28292 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28291);
var inst_28293 = console.warn("Figwheel: Not loading code with warnings - ",inst_28292);
var state_28306__$1 = state_28306;
var statearr_28315_28339 = state_28306__$1;
(statearr_28315_28339[(2)] = inst_28293);

(statearr_28315_28339[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (2))){
var state_28306__$1 = state_28306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28306__$1,(4),ch);
} else {
if((state_val_28307 === (11))){
var inst_28286 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28316_28340 = state_28306__$1;
(statearr_28316_28340[(2)] = inst_28286);

(statearr_28316_28340[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (9))){
var inst_28276 = (state_28306[(9)]);
var inst_28288 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28276,opts);
var state_28306__$1 = state_28306;
if(cljs.core.truth_(inst_28288)){
var statearr_28317_28341 = state_28306__$1;
(statearr_28317_28341[(1)] = (12));

} else {
var statearr_28318_28342 = state_28306__$1;
(statearr_28318_28342[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (5))){
var inst_28276 = (state_28306[(9)]);
var inst_28270 = (state_28306[(7)]);
var inst_28272 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28273 = (new cljs.core.PersistentArrayMap(null,2,inst_28272,null));
var inst_28274 = (new cljs.core.PersistentHashSet(null,inst_28273,null));
var inst_28275 = figwheel.client.focus_msgs.call(null,inst_28274,inst_28270);
var inst_28276__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28275);
var inst_28277 = cljs.core.first.call(null,inst_28275);
var inst_28278 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28276__$1,opts);
var state_28306__$1 = (function (){var statearr_28319 = state_28306;
(statearr_28319[(9)] = inst_28276__$1);

(statearr_28319[(8)] = inst_28277);

return statearr_28319;
})();
if(cljs.core.truth_(inst_28278)){
var statearr_28320_28343 = state_28306__$1;
(statearr_28320_28343[(1)] = (8));

} else {
var statearr_28321_28344 = state_28306__$1;
(statearr_28321_28344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (14))){
var inst_28296 = (state_28306[(2)]);
var state_28306__$1 = state_28306;
var statearr_28322_28345 = state_28306__$1;
(statearr_28322_28345[(2)] = inst_28296);

(statearr_28322_28345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (10))){
var inst_28298 = (state_28306[(2)]);
var state_28306__$1 = (function (){var statearr_28323 = state_28306;
(statearr_28323[(10)] = inst_28298);

return statearr_28323;
})();
var statearr_28324_28346 = state_28306__$1;
(statearr_28324_28346[(2)] = null);

(statearr_28324_28346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28307 === (8))){
var inst_28277 = (state_28306[(8)]);
var inst_28280 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28281 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28277);
var inst_28282 = cljs.core.async.timeout.call(null,(1000));
var inst_28283 = [inst_28281,inst_28282];
var inst_28284 = (new cljs.core.PersistentVector(null,2,(5),inst_28280,inst_28283,null));
var state_28306__$1 = state_28306;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28306__$1,(11),inst_28284);
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
});})(c__19733__auto___28332,ch))
;
return ((function (switch__19668__auto__,c__19733__auto___28332,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19669__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19669__auto____0 = (function (){
var statearr_28328 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28328[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19669__auto__);

(statearr_28328[(1)] = (1));

return statearr_28328;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19669__auto____1 = (function (state_28306){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_28306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e28329){if((e28329 instanceof Object)){
var ex__19672__auto__ = e28329;
var statearr_28330_28347 = state_28306;
(statearr_28330_28347[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28348 = state_28306;
state_28306 = G__28348;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19669__auto__ = function(state_28306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19669__auto____1.call(this,state_28306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19669__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19669__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___28332,ch))
})();
var state__19735__auto__ = (function (){var statearr_28331 = f__19734__auto__.call(null);
(statearr_28331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___28332);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___28332,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28349_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28349_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_28356 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28356){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28354 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28355 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_28354,_STAR_print_newline_STAR_28355,base_path_28356){
return (function() { 
var G__28357__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__28357 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28358__i = 0, G__28358__a = new Array(arguments.length -  0);
while (G__28358__i < G__28358__a.length) {G__28358__a[G__28358__i] = arguments[G__28358__i + 0]; ++G__28358__i;}
  args = new cljs.core.IndexedSeq(G__28358__a,0);
} 
return G__28357__delegate.call(this,args);};
G__28357.cljs$lang$maxFixedArity = 0;
G__28357.cljs$lang$applyTo = (function (arglist__28359){
var args = cljs.core.seq(arglist__28359);
return G__28357__delegate(args);
});
G__28357.cljs$core$IFn$_invoke$arity$variadic = G__28357__delegate;
return G__28357;
})()
;})(_STAR_print_fn_STAR_28354,_STAR_print_newline_STAR_28355,base_path_28356))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28355;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28354;
}}catch (e28353){if((e28353 instanceof Error)){
var e = e28353;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28356], null));
} else {
var e = e28353;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28356))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28360){
var map__28367 = p__28360;
var map__28367__$1 = ((((!((map__28367 == null)))?((((map__28367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28367):map__28367);
var opts = map__28367__$1;
var build_id = cljs.core.get.call(null,map__28367__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28367,map__28367__$1,opts,build_id){
return (function (p__28369){
var vec__28370 = p__28369;
var map__28371 = cljs.core.nth.call(null,vec__28370,(0),null);
var map__28371__$1 = ((((!((map__28371 == null)))?((((map__28371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28371):map__28371);
var msg = map__28371__$1;
var msg_name = cljs.core.get.call(null,map__28371__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28370,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28370,map__28371,map__28371__$1,msg,msg_name,_,map__28367,map__28367__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28370,map__28371,map__28371__$1,msg,msg_name,_,map__28367,map__28367__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28367,map__28367__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28377){
var vec__28378 = p__28377;
var map__28379 = cljs.core.nth.call(null,vec__28378,(0),null);
var map__28379__$1 = ((((!((map__28379 == null)))?((((map__28379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28379):map__28379);
var msg = map__28379__$1;
var msg_name = cljs.core.get.call(null,map__28379__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28378,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28381){
var map__28391 = p__28381;
var map__28391__$1 = ((((!((map__28391 == null)))?((((map__28391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28391):map__28391);
var on_compile_warning = cljs.core.get.call(null,map__28391__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28391__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28391,map__28391__$1,on_compile_warning,on_compile_fail){
return (function (p__28393){
var vec__28394 = p__28393;
var map__28395 = cljs.core.nth.call(null,vec__28394,(0),null);
var map__28395__$1 = ((((!((map__28395 == null)))?((((map__28395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28395):map__28395);
var msg = map__28395__$1;
var msg_name = cljs.core.get.call(null,map__28395__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28394,(1));
var pred__28397 = cljs.core._EQ_;
var expr__28398 = msg_name;
if(cljs.core.truth_(pred__28397.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28398))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28397.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28398))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28391,map__28391__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__,msg_hist,msg_names,msg){
return (function (state_28599){
var state_val_28600 = (state_28599[(1)]);
if((state_val_28600 === (7))){
var inst_28533 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28601_28642 = state_28599__$1;
(statearr_28601_28642[(2)] = inst_28533);

(statearr_28601_28642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (20))){
var inst_28561 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28561)){
var statearr_28602_28643 = state_28599__$1;
(statearr_28602_28643[(1)] = (22));

} else {
var statearr_28603_28644 = state_28599__$1;
(statearr_28603_28644[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (27))){
var inst_28573 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28574 = figwheel.client.heads_up.display_warning.call(null,inst_28573);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(30),inst_28574);
} else {
if((state_val_28600 === (1))){
var inst_28521 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28521)){
var statearr_28604_28645 = state_28599__$1;
(statearr_28604_28645[(1)] = (2));

} else {
var statearr_28605_28646 = state_28599__$1;
(statearr_28605_28646[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (24))){
var inst_28589 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28606_28647 = state_28599__$1;
(statearr_28606_28647[(2)] = inst_28589);

(statearr_28606_28647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (4))){
var inst_28597 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28599__$1,inst_28597);
} else {
if((state_val_28600 === (15))){
var inst_28549 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28550 = figwheel.client.format_messages.call(null,inst_28549);
var inst_28551 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28552 = figwheel.client.heads_up.display_error.call(null,inst_28550,inst_28551);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(18),inst_28552);
} else {
if((state_val_28600 === (21))){
var inst_28591 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28607_28648 = state_28599__$1;
(statearr_28607_28648[(2)] = inst_28591);

(statearr_28607_28648[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (31))){
var inst_28580 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(34),inst_28580);
} else {
if((state_val_28600 === (32))){
var state_28599__$1 = state_28599;
var statearr_28608_28649 = state_28599__$1;
(statearr_28608_28649[(2)] = null);

(statearr_28608_28649[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (33))){
var inst_28585 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28609_28650 = state_28599__$1;
(statearr_28609_28650[(2)] = inst_28585);

(statearr_28609_28650[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (13))){
var inst_28539 = (state_28599[(2)]);
var inst_28540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28541 = figwheel.client.format_messages.call(null,inst_28540);
var inst_28542 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28543 = figwheel.client.heads_up.display_error.call(null,inst_28541,inst_28542);
var state_28599__$1 = (function (){var statearr_28610 = state_28599;
(statearr_28610[(7)] = inst_28539);

return statearr_28610;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(14),inst_28543);
} else {
if((state_val_28600 === (22))){
var inst_28563 = figwheel.client.heads_up.clear.call(null);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(25),inst_28563);
} else {
if((state_val_28600 === (29))){
var inst_28587 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28611_28651 = state_28599__$1;
(statearr_28611_28651[(2)] = inst_28587);

(statearr_28611_28651[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (6))){
var inst_28529 = figwheel.client.heads_up.clear.call(null);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(9),inst_28529);
} else {
if((state_val_28600 === (28))){
var inst_28578 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28578)){
var statearr_28612_28652 = state_28599__$1;
(statearr_28612_28652[(1)] = (31));

} else {
var statearr_28613_28653 = state_28599__$1;
(statearr_28613_28653[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (25))){
var inst_28565 = (state_28599[(2)]);
var inst_28566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28567 = figwheel.client.heads_up.display_warning.call(null,inst_28566);
var state_28599__$1 = (function (){var statearr_28614 = state_28599;
(statearr_28614[(8)] = inst_28565);

return statearr_28614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(26),inst_28567);
} else {
if((state_val_28600 === (34))){
var inst_28582 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28615_28654 = state_28599__$1;
(statearr_28615_28654[(2)] = inst_28582);

(statearr_28615_28654[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (17))){
var inst_28593 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28616_28655 = state_28599__$1;
(statearr_28616_28655[(2)] = inst_28593);

(statearr_28616_28655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (3))){
var inst_28535 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28535)){
var statearr_28617_28656 = state_28599__$1;
(statearr_28617_28656[(1)] = (10));

} else {
var statearr_28618_28657 = state_28599__$1;
(statearr_28618_28657[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (12))){
var inst_28595 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28619_28658 = state_28599__$1;
(statearr_28619_28658[(2)] = inst_28595);

(statearr_28619_28658[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (2))){
var inst_28523 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28523)){
var statearr_28620_28659 = state_28599__$1;
(statearr_28620_28659[(1)] = (5));

} else {
var statearr_28621_28660 = state_28599__$1;
(statearr_28621_28660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (23))){
var inst_28571 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28571)){
var statearr_28622_28661 = state_28599__$1;
(statearr_28622_28661[(1)] = (27));

} else {
var statearr_28623_28662 = state_28599__$1;
(statearr_28623_28662[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (19))){
var inst_28558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28559 = figwheel.client.heads_up.append_message.call(null,inst_28558);
var state_28599__$1 = state_28599;
var statearr_28624_28663 = state_28599__$1;
(statearr_28624_28663[(2)] = inst_28559);

(statearr_28624_28663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (11))){
var inst_28547 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28547)){
var statearr_28625_28664 = state_28599__$1;
(statearr_28625_28664[(1)] = (15));

} else {
var statearr_28626_28665 = state_28599__$1;
(statearr_28626_28665[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (9))){
var inst_28531 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28627_28666 = state_28599__$1;
(statearr_28627_28666[(2)] = inst_28531);

(statearr_28627_28666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (5))){
var inst_28525 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(8),inst_28525);
} else {
if((state_val_28600 === (14))){
var inst_28545 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28628_28667 = state_28599__$1;
(statearr_28628_28667[(2)] = inst_28545);

(statearr_28628_28667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (26))){
var inst_28569 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28629_28668 = state_28599__$1;
(statearr_28629_28668[(2)] = inst_28569);

(statearr_28629_28668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (16))){
var inst_28556 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28599__$1 = state_28599;
if(cljs.core.truth_(inst_28556)){
var statearr_28630_28669 = state_28599__$1;
(statearr_28630_28669[(1)] = (19));

} else {
var statearr_28631_28670 = state_28599__$1;
(statearr_28631_28670[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (30))){
var inst_28576 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28632_28671 = state_28599__$1;
(statearr_28632_28671[(2)] = inst_28576);

(statearr_28632_28671[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (10))){
var inst_28537 = figwheel.client.heads_up.clear.call(null);
var state_28599__$1 = state_28599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28599__$1,(13),inst_28537);
} else {
if((state_val_28600 === (18))){
var inst_28554 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28633_28672 = state_28599__$1;
(statearr_28633_28672[(2)] = inst_28554);

(statearr_28633_28672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28600 === (8))){
var inst_28527 = (state_28599[(2)]);
var state_28599__$1 = state_28599;
var statearr_28634_28673 = state_28599__$1;
(statearr_28634_28673[(2)] = inst_28527);

(statearr_28634_28673[(1)] = (7));


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
});})(c__19733__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19668__auto__,c__19733__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto____0 = (function (){
var statearr_28638 = [null,null,null,null,null,null,null,null,null];
(statearr_28638[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto__);

(statearr_28638[(1)] = (1));

return statearr_28638;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto____1 = (function (state_28599){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_28599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e28639){if((e28639 instanceof Object)){
var ex__19672__auto__ = e28639;
var statearr_28640_28674 = state_28599;
(statearr_28640_28674[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28675 = state_28599;
state_28599 = G__28675;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto__ = function(state_28599){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto____1.call(this,state_28599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__,msg_hist,msg_names,msg))
})();
var state__19735__auto__ = (function (){var statearr_28641 = f__19734__auto__.call(null);
(statearr_28641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_28641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__,msg_hist,msg_names,msg))
);

return c__19733__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19733__auto___28738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___28738,ch){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___28738,ch){
return (function (state_28721){
var state_val_28722 = (state_28721[(1)]);
if((state_val_28722 === (1))){
var state_28721__$1 = state_28721;
var statearr_28723_28739 = state_28721__$1;
(statearr_28723_28739[(2)] = null);

(statearr_28723_28739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (2))){
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28721__$1,(4),ch);
} else {
if((state_val_28722 === (3))){
var inst_28719 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28721__$1,inst_28719);
} else {
if((state_val_28722 === (4))){
var inst_28709 = (state_28721[(7)]);
var inst_28709__$1 = (state_28721[(2)]);
var state_28721__$1 = (function (){var statearr_28724 = state_28721;
(statearr_28724[(7)] = inst_28709__$1);

return statearr_28724;
})();
if(cljs.core.truth_(inst_28709__$1)){
var statearr_28725_28740 = state_28721__$1;
(statearr_28725_28740[(1)] = (5));

} else {
var statearr_28726_28741 = state_28721__$1;
(statearr_28726_28741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (5))){
var inst_28709 = (state_28721[(7)]);
var inst_28711 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28709);
var state_28721__$1 = state_28721;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28721__$1,(8),inst_28711);
} else {
if((state_val_28722 === (6))){
var state_28721__$1 = state_28721;
var statearr_28727_28742 = state_28721__$1;
(statearr_28727_28742[(2)] = null);

(statearr_28727_28742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (7))){
var inst_28717 = (state_28721[(2)]);
var state_28721__$1 = state_28721;
var statearr_28728_28743 = state_28721__$1;
(statearr_28728_28743[(2)] = inst_28717);

(statearr_28728_28743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28722 === (8))){
var inst_28713 = (state_28721[(2)]);
var state_28721__$1 = (function (){var statearr_28729 = state_28721;
(statearr_28729[(8)] = inst_28713);

return statearr_28729;
})();
var statearr_28730_28744 = state_28721__$1;
(statearr_28730_28744[(2)] = null);

(statearr_28730_28744[(1)] = (2));


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
});})(c__19733__auto___28738,ch))
;
return ((function (switch__19668__auto__,c__19733__auto___28738,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19669__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19669__auto____0 = (function (){
var statearr_28734 = [null,null,null,null,null,null,null,null,null];
(statearr_28734[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19669__auto__);

(statearr_28734[(1)] = (1));

return statearr_28734;
});
var figwheel$client$heads_up_plugin_$_state_machine__19669__auto____1 = (function (state_28721){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_28721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e28735){if((e28735 instanceof Object)){
var ex__19672__auto__ = e28735;
var statearr_28736_28745 = state_28721;
(statearr_28736_28745[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28746 = state_28721;
state_28721 = G__28746;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19669__auto__ = function(state_28721){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19669__auto____1.call(this,state_28721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19669__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19669__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___28738,ch))
})();
var state__19735__auto__ = (function (){var statearr_28737 = f__19734__auto__.call(null);
(statearr_28737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___28738);

return statearr_28737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___28738,ch))
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
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_28767){
var state_val_28768 = (state_28767[(1)]);
if((state_val_28768 === (1))){
var inst_28762 = cljs.core.async.timeout.call(null,(3000));
var state_28767__$1 = state_28767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28767__$1,(2),inst_28762);
} else {
if((state_val_28768 === (2))){
var inst_28764 = (state_28767[(2)]);
var inst_28765 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28767__$1 = (function (){var statearr_28769 = state_28767;
(statearr_28769[(7)] = inst_28764);

return statearr_28769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28767__$1,inst_28765);
} else {
return null;
}
}
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19669__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19669__auto____0 = (function (){
var statearr_28773 = [null,null,null,null,null,null,null,null];
(statearr_28773[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19669__auto__);

(statearr_28773[(1)] = (1));

return statearr_28773;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19669__auto____1 = (function (state_28767){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_28767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e28774){if((e28774 instanceof Object)){
var ex__19672__auto__ = e28774;
var statearr_28775_28777 = state_28767;
(statearr_28775_28777[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28778 = state_28767;
state_28767 = G__28778;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19669__auto__ = function(state_28767){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19669__auto____1.call(this,state_28767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19669__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19669__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_28776 = f__19734__auto__.call(null);
(statearr_28776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_28776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28779){
var map__28786 = p__28779;
var map__28786__$1 = ((((!((map__28786 == null)))?((((map__28786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28786):map__28786);
var ed = map__28786__$1;
var formatted_exception = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28786__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28788_28792 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28789_28793 = null;
var count__28790_28794 = (0);
var i__28791_28795 = (0);
while(true){
if((i__28791_28795 < count__28790_28794)){
var msg_28796 = cljs.core._nth.call(null,chunk__28789_28793,i__28791_28795);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28796);

var G__28797 = seq__28788_28792;
var G__28798 = chunk__28789_28793;
var G__28799 = count__28790_28794;
var G__28800 = (i__28791_28795 + (1));
seq__28788_28792 = G__28797;
chunk__28789_28793 = G__28798;
count__28790_28794 = G__28799;
i__28791_28795 = G__28800;
continue;
} else {
var temp__4425__auto___28801 = cljs.core.seq.call(null,seq__28788_28792);
if(temp__4425__auto___28801){
var seq__28788_28802__$1 = temp__4425__auto___28801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28788_28802__$1)){
var c__17256__auto___28803 = cljs.core.chunk_first.call(null,seq__28788_28802__$1);
var G__28804 = cljs.core.chunk_rest.call(null,seq__28788_28802__$1);
var G__28805 = c__17256__auto___28803;
var G__28806 = cljs.core.count.call(null,c__17256__auto___28803);
var G__28807 = (0);
seq__28788_28792 = G__28804;
chunk__28789_28793 = G__28805;
count__28790_28794 = G__28806;
i__28791_28795 = G__28807;
continue;
} else {
var msg_28808 = cljs.core.first.call(null,seq__28788_28802__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28808);

var G__28809 = cljs.core.next.call(null,seq__28788_28802__$1);
var G__28810 = null;
var G__28811 = (0);
var G__28812 = (0);
seq__28788_28792 = G__28809;
chunk__28789_28793 = G__28810;
count__28790_28794 = G__28811;
i__28791_28795 = G__28812;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28813){
var map__28816 = p__28813;
var map__28816__$1 = ((((!((map__28816 == null)))?((((map__28816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28816):map__28816);
var w = map__28816__$1;
var message = cljs.core.get.call(null,map__28816__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
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
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16460__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16460__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16460__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28824 = cljs.core.seq.call(null,plugins);
var chunk__28825 = null;
var count__28826 = (0);
var i__28827 = (0);
while(true){
if((i__28827 < count__28826)){
var vec__28828 = cljs.core._nth.call(null,chunk__28825,i__28827);
var k = cljs.core.nth.call(null,vec__28828,(0),null);
var plugin = cljs.core.nth.call(null,vec__28828,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28830 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28824,chunk__28825,count__28826,i__28827,pl_28830,vec__28828,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28830.call(null,msg_hist);
});})(seq__28824,chunk__28825,count__28826,i__28827,pl_28830,vec__28828,k,plugin))
);
} else {
}

var G__28831 = seq__28824;
var G__28832 = chunk__28825;
var G__28833 = count__28826;
var G__28834 = (i__28827 + (1));
seq__28824 = G__28831;
chunk__28825 = G__28832;
count__28826 = G__28833;
i__28827 = G__28834;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28824);
if(temp__4425__auto__){
var seq__28824__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28824__$1)){
var c__17256__auto__ = cljs.core.chunk_first.call(null,seq__28824__$1);
var G__28835 = cljs.core.chunk_rest.call(null,seq__28824__$1);
var G__28836 = c__17256__auto__;
var G__28837 = cljs.core.count.call(null,c__17256__auto__);
var G__28838 = (0);
seq__28824 = G__28835;
chunk__28825 = G__28836;
count__28826 = G__28837;
i__28827 = G__28838;
continue;
} else {
var vec__28829 = cljs.core.first.call(null,seq__28824__$1);
var k = cljs.core.nth.call(null,vec__28829,(0),null);
var plugin = cljs.core.nth.call(null,vec__28829,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28839 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28824,chunk__28825,count__28826,i__28827,pl_28839,vec__28829,k,plugin,seq__28824__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28839.call(null,msg_hist);
});})(seq__28824,chunk__28825,count__28826,i__28827,pl_28839,vec__28829,k,plugin,seq__28824__$1,temp__4425__auto__))
);
} else {
}

var G__28840 = cljs.core.next.call(null,seq__28824__$1);
var G__28841 = null;
var G__28842 = (0);
var G__28843 = (0);
seq__28824 = G__28840;
chunk__28825 = G__28841;
count__28826 = G__28842;
i__28827 = G__28843;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var args28844 = [];
var len__17511__auto___28847 = arguments.length;
var i__17512__auto___28848 = (0);
while(true){
if((i__17512__auto___28848 < len__17511__auto___28847)){
args28844.push((arguments[i__17512__auto___28848]));

var G__28849 = (i__17512__auto___28848 + (1));
i__17512__auto___28848 = G__28849;
continue;
} else {
}
break;
}

var G__28846 = args28844.length;
switch (G__28846) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28844.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
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
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var args__17518__auto__ = [];
var len__17511__auto___28855 = arguments.length;
var i__17512__auto___28856 = (0);
while(true){
if((i__17512__auto___28856 < len__17511__auto___28855)){
args__17518__auto__.push((arguments[i__17512__auto___28856]));

var G__28857 = (i__17512__auto___28856 + (1));
i__17512__auto___28856 = G__28857;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28852){
var map__28853 = p__28852;
var map__28853__$1 = ((((!((map__28853 == null)))?((((map__28853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28853):map__28853);
var opts = map__28853__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28851){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28851));
});

//# sourceMappingURL=client.js.map?rel=1440504641109