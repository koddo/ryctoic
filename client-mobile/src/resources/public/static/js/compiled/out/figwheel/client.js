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
var G__24101__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24101 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24102__i = 0, G__24102__a = new Array(arguments.length -  0);
while (G__24102__i < G__24102__a.length) {G__24102__a[G__24102__i] = arguments[G__24102__i + 0]; ++G__24102__i;}
  args = new cljs.core.IndexedSeq(G__24102__a,0);
} 
return G__24101__delegate.call(this,args);};
G__24101.cljs$lang$maxFixedArity = 0;
G__24101.cljs$lang$applyTo = (function (arglist__24103){
var args = cljs.core.seq(arglist__24103);
return G__24101__delegate(args);
});
G__24101.cljs$core$IFn$_invoke$arity$variadic = G__24101__delegate;
return G__24101;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24104){
var map__24106 = p__24104;
var map__24106__$1 = ((cljs.core.seq_QMARK_.call(null,map__24106))?cljs.core.apply.call(null,cljs.core.hash_map,map__24106):map__24106);
var class$ = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__24106__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var c__19777__auto___24235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___24235,ch){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___24235,ch){
return (function (state_24209){
var state_val_24210 = (state_24209[(1)]);
if((state_val_24210 === (7))){
var inst_24205 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24211_24236 = state_24209__$1;
(statearr_24211_24236[(2)] = inst_24205);

(statearr_24211_24236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (1))){
var state_24209__$1 = state_24209;
var statearr_24212_24237 = state_24209__$1;
(statearr_24212_24237[(2)] = null);

(statearr_24212_24237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (4))){
var inst_24173 = (state_24209[(7)]);
var inst_24173__$1 = (state_24209[(2)]);
var state_24209__$1 = (function (){var statearr_24213 = state_24209;
(statearr_24213[(7)] = inst_24173__$1);

return statearr_24213;
})();
if(cljs.core.truth_(inst_24173__$1)){
var statearr_24214_24238 = state_24209__$1;
(statearr_24214_24238[(1)] = (5));

} else {
var statearr_24215_24239 = state_24209__$1;
(statearr_24215_24239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (13))){
var state_24209__$1 = state_24209;
var statearr_24216_24240 = state_24209__$1;
(statearr_24216_24240[(2)] = null);

(statearr_24216_24240[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (6))){
var state_24209__$1 = state_24209;
var statearr_24217_24241 = state_24209__$1;
(statearr_24217_24241[(2)] = null);

(statearr_24217_24241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (3))){
var inst_24207 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24209__$1,inst_24207);
} else {
if((state_val_24210 === (12))){
var inst_24180 = (state_24209[(8)]);
var inst_24193 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24180);
var inst_24194 = cljs.core.first.call(null,inst_24193);
var inst_24195 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24194);
var inst_24196 = console.warn("Figwheel: Not loading code with warnings - ",inst_24195);
var state_24209__$1 = state_24209;
var statearr_24218_24242 = state_24209__$1;
(statearr_24218_24242[(2)] = inst_24196);

(statearr_24218_24242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (2))){
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(4),ch);
} else {
if((state_val_24210 === (11))){
var inst_24189 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24219_24243 = state_24209__$1;
(statearr_24219_24243[(2)] = inst_24189);

(statearr_24219_24243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (9))){
var inst_24179 = (state_24209[(9)]);
var inst_24191 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24179,opts);
var state_24209__$1 = state_24209;
if(inst_24191){
var statearr_24220_24244 = state_24209__$1;
(statearr_24220_24244[(1)] = (12));

} else {
var statearr_24221_24245 = state_24209__$1;
(statearr_24221_24245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (5))){
var inst_24173 = (state_24209[(7)]);
var inst_24179 = (state_24209[(9)]);
var inst_24175 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24176 = (new cljs.core.PersistentArrayMap(null,2,inst_24175,null));
var inst_24177 = (new cljs.core.PersistentHashSet(null,inst_24176,null));
var inst_24178 = figwheel.client.focus_msgs.call(null,inst_24177,inst_24173);
var inst_24179__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24178);
var inst_24180 = cljs.core.first.call(null,inst_24178);
var inst_24181 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24179__$1,opts);
var state_24209__$1 = (function (){var statearr_24222 = state_24209;
(statearr_24222[(8)] = inst_24180);

(statearr_24222[(9)] = inst_24179__$1);

return statearr_24222;
})();
if(cljs.core.truth_(inst_24181)){
var statearr_24223_24246 = state_24209__$1;
(statearr_24223_24246[(1)] = (8));

} else {
var statearr_24224_24247 = state_24209__$1;
(statearr_24224_24247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (14))){
var inst_24199 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24225_24248 = state_24209__$1;
(statearr_24225_24248[(2)] = inst_24199);

(statearr_24225_24248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (10))){
var inst_24201 = (state_24209[(2)]);
var state_24209__$1 = (function (){var statearr_24226 = state_24209;
(statearr_24226[(10)] = inst_24201);

return statearr_24226;
})();
var statearr_24227_24249 = state_24209__$1;
(statearr_24227_24249[(2)] = null);

(statearr_24227_24249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (8))){
var inst_24180 = (state_24209[(8)]);
var inst_24183 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24184 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24180);
var inst_24185 = cljs.core.async.timeout.call(null,(1000));
var inst_24186 = [inst_24184,inst_24185];
var inst_24187 = (new cljs.core.PersistentVector(null,2,(5),inst_24183,inst_24186,null));
var state_24209__$1 = state_24209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24209__$1,(11),inst_24187);
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
});})(c__19777__auto___24235,ch))
;
return ((function (switch__19721__auto__,c__19777__auto___24235,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19722__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19722__auto____0 = (function (){
var statearr_24231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24231[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19722__auto__);

(statearr_24231[(1)] = (1));

return statearr_24231;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19722__auto____1 = (function (state_24209){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_24209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e24232){if((e24232 instanceof Object)){
var ex__19725__auto__ = e24232;
var statearr_24233_24250 = state_24209;
(statearr_24233_24250[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24251 = state_24209;
state_24209 = G__24251;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19722__auto__ = function(state_24209){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19722__auto____1.call(this,state_24209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19722__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19722__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___24235,ch))
})();
var state__19779__auto__ = (function (){var statearr_24234 = f__19778__auto__.call(null);
(statearr_24234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___24235);

return statearr_24234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___24235,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24252_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24252_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24261 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__24254_SHARP_,p2__24253_SHARP_){
return [cljs.core.str(p2__24253_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24261){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_24259 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24260 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24259,_STAR_print_newline_STAR_24260,base_path_24261){
return (function() { 
var G__24262__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24263__i = 0, G__24263__a = new Array(arguments.length -  0);
while (G__24263__i < G__24263__a.length) {G__24263__a[G__24263__i] = arguments[G__24263__i + 0]; ++G__24263__i;}
  args = new cljs.core.IndexedSeq(G__24263__a,0);
} 
return G__24262__delegate.call(this,args);};
G__24262.cljs$lang$maxFixedArity = 0;
G__24262.cljs$lang$applyTo = (function (arglist__24264){
var args = cljs.core.seq(arglist__24264);
return G__24262__delegate(args);
});
G__24262.cljs$core$IFn$_invoke$arity$variadic = G__24262__delegate;
return G__24262;
})()
;})(_STAR_print_fn_STAR_24259,_STAR_print_newline_STAR_24260,base_path_24261))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24260;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24259;
}}catch (e24258){if((e24258 instanceof Error)){
var e = e24258;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24261], null));
} else {
var e = e24258;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24261))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24265){
var map__24270 = p__24265;
var map__24270__$1 = ((cljs.core.seq_QMARK_.call(null,map__24270))?cljs.core.apply.call(null,cljs.core.hash_map,map__24270):map__24270);
var opts = map__24270__$1;
var build_id = cljs.core.get.call(null,map__24270__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24270,map__24270__$1,opts,build_id){
return (function (p__24271){
var vec__24272 = p__24271;
var map__24273 = cljs.core.nth.call(null,vec__24272,(0),null);
var map__24273__$1 = ((cljs.core.seq_QMARK_.call(null,map__24273))?cljs.core.apply.call(null,cljs.core.hash_map,map__24273):map__24273);
var msg = map__24273__$1;
var msg_name = cljs.core.get.call(null,map__24273__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24272,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__24272,map__24273,map__24273__$1,msg,msg_name,_,map__24270,map__24270__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24272,map__24273,map__24273__$1,msg,msg_name,_,map__24270,map__24270__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24270,map__24270__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24277){
var vec__24278 = p__24277;
var map__24279 = cljs.core.nth.call(null,vec__24278,(0),null);
var map__24279__$1 = ((cljs.core.seq_QMARK_.call(null,map__24279))?cljs.core.apply.call(null,cljs.core.hash_map,map__24279):map__24279);
var msg = map__24279__$1;
var msg_name = cljs.core.get.call(null,map__24279__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24278,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24280){
var map__24288 = p__24280;
var map__24288__$1 = ((cljs.core.seq_QMARK_.call(null,map__24288))?cljs.core.apply.call(null,cljs.core.hash_map,map__24288):map__24288);
var on_compile_fail = cljs.core.get.call(null,map__24288__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__24288__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__24288,map__24288__$1,on_compile_fail,on_compile_warning){
return (function (p__24289){
var vec__24290 = p__24289;
var map__24291 = cljs.core.nth.call(null,vec__24290,(0),null);
var map__24291__$1 = ((cljs.core.seq_QMARK_.call(null,map__24291))?cljs.core.apply.call(null,cljs.core.hash_map,map__24291):map__24291);
var msg = map__24291__$1;
var msg_name = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24290,(1));
var pred__24292 = cljs.core._EQ_;
var expr__24293 = msg_name;
if(cljs.core.truth_(pred__24292.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24293))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24292.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24293))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24288,map__24288__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__,msg_hist,msg_names,msg){
return (function (state_24494){
var state_val_24495 = (state_24494[(1)]);
if((state_val_24495 === (7))){
var inst_24428 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24496_24537 = state_24494__$1;
(statearr_24496_24537[(2)] = inst_24428);

(statearr_24496_24537[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (20))){
var inst_24456 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(inst_24456){
var statearr_24497_24538 = state_24494__$1;
(statearr_24497_24538[(1)] = (22));

} else {
var statearr_24498_24539 = state_24494__$1;
(statearr_24498_24539[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (27))){
var inst_24468 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24469 = figwheel.client.heads_up.display_warning.call(null,inst_24468);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(30),inst_24469);
} else {
if((state_val_24495 === (1))){
var inst_24416 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24416)){
var statearr_24499_24540 = state_24494__$1;
(statearr_24499_24540[(1)] = (2));

} else {
var statearr_24500_24541 = state_24494__$1;
(statearr_24500_24541[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (24))){
var inst_24484 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24501_24542 = state_24494__$1;
(statearr_24501_24542[(2)] = inst_24484);

(statearr_24501_24542[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (4))){
var inst_24492 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24494__$1,inst_24492);
} else {
if((state_val_24495 === (15))){
var inst_24444 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24445 = figwheel.client.format_messages.call(null,inst_24444);
var inst_24446 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24447 = figwheel.client.heads_up.display_error.call(null,inst_24445,inst_24446);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(18),inst_24447);
} else {
if((state_val_24495 === (21))){
var inst_24486 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24502_24543 = state_24494__$1;
(statearr_24502_24543[(2)] = inst_24486);

(statearr_24502_24543[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (31))){
var inst_24475 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(34),inst_24475);
} else {
if((state_val_24495 === (32))){
var state_24494__$1 = state_24494;
var statearr_24503_24544 = state_24494__$1;
(statearr_24503_24544[(2)] = null);

(statearr_24503_24544[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (33))){
var inst_24480 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24504_24545 = state_24494__$1;
(statearr_24504_24545[(2)] = inst_24480);

(statearr_24504_24545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (13))){
var inst_24434 = (state_24494[(2)]);
var inst_24435 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24436 = figwheel.client.format_messages.call(null,inst_24435);
var inst_24437 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24438 = figwheel.client.heads_up.display_error.call(null,inst_24436,inst_24437);
var state_24494__$1 = (function (){var statearr_24505 = state_24494;
(statearr_24505[(7)] = inst_24434);

return statearr_24505;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(14),inst_24438);
} else {
if((state_val_24495 === (22))){
var inst_24458 = figwheel.client.heads_up.clear.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(25),inst_24458);
} else {
if((state_val_24495 === (29))){
var inst_24482 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24506_24546 = state_24494__$1;
(statearr_24506_24546[(2)] = inst_24482);

(statearr_24506_24546[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (6))){
var inst_24424 = figwheel.client.heads_up.clear.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(9),inst_24424);
} else {
if((state_val_24495 === (28))){
var inst_24473 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(inst_24473){
var statearr_24507_24547 = state_24494__$1;
(statearr_24507_24547[(1)] = (31));

} else {
var statearr_24508_24548 = state_24494__$1;
(statearr_24508_24548[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (25))){
var inst_24460 = (state_24494[(2)]);
var inst_24461 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24462 = figwheel.client.heads_up.display_warning.call(null,inst_24461);
var state_24494__$1 = (function (){var statearr_24509 = state_24494;
(statearr_24509[(8)] = inst_24460);

return statearr_24509;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(26),inst_24462);
} else {
if((state_val_24495 === (34))){
var inst_24477 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24510_24549 = state_24494__$1;
(statearr_24510_24549[(2)] = inst_24477);

(statearr_24510_24549[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (17))){
var inst_24488 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24511_24550 = state_24494__$1;
(statearr_24511_24550[(2)] = inst_24488);

(statearr_24511_24550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (3))){
var inst_24430 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(inst_24430){
var statearr_24512_24551 = state_24494__$1;
(statearr_24512_24551[(1)] = (10));

} else {
var statearr_24513_24552 = state_24494__$1;
(statearr_24513_24552[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (12))){
var inst_24490 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24514_24553 = state_24494__$1;
(statearr_24514_24553[(2)] = inst_24490);

(statearr_24514_24553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (2))){
var inst_24418 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24494__$1 = state_24494;
if(cljs.core.truth_(inst_24418)){
var statearr_24515_24554 = state_24494__$1;
(statearr_24515_24554[(1)] = (5));

} else {
var statearr_24516_24555 = state_24494__$1;
(statearr_24516_24555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (23))){
var inst_24466 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(inst_24466){
var statearr_24517_24556 = state_24494__$1;
(statearr_24517_24556[(1)] = (27));

} else {
var statearr_24518_24557 = state_24494__$1;
(statearr_24518_24557[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (19))){
var inst_24453 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24454 = figwheel.client.heads_up.append_message.call(null,inst_24453);
var state_24494__$1 = state_24494;
var statearr_24519_24558 = state_24494__$1;
(statearr_24519_24558[(2)] = inst_24454);

(statearr_24519_24558[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (11))){
var inst_24442 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(inst_24442){
var statearr_24520_24559 = state_24494__$1;
(statearr_24520_24559[(1)] = (15));

} else {
var statearr_24521_24560 = state_24494__$1;
(statearr_24521_24560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (9))){
var inst_24426 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24522_24561 = state_24494__$1;
(statearr_24522_24561[(2)] = inst_24426);

(statearr_24522_24561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (5))){
var inst_24420 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(8),inst_24420);
} else {
if((state_val_24495 === (14))){
var inst_24440 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24523_24562 = state_24494__$1;
(statearr_24523_24562[(2)] = inst_24440);

(statearr_24523_24562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (26))){
var inst_24464 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24524_24563 = state_24494__$1;
(statearr_24524_24563[(2)] = inst_24464);

(statearr_24524_24563[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (16))){
var inst_24451 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24494__$1 = state_24494;
if(inst_24451){
var statearr_24525_24564 = state_24494__$1;
(statearr_24525_24564[(1)] = (19));

} else {
var statearr_24526_24565 = state_24494__$1;
(statearr_24526_24565[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (30))){
var inst_24471 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24527_24566 = state_24494__$1;
(statearr_24527_24566[(2)] = inst_24471);

(statearr_24527_24566[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (10))){
var inst_24432 = figwheel.client.heads_up.clear.call(null);
var state_24494__$1 = state_24494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24494__$1,(13),inst_24432);
} else {
if((state_val_24495 === (18))){
var inst_24449 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24528_24567 = state_24494__$1;
(statearr_24528_24567[(2)] = inst_24449);

(statearr_24528_24567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24495 === (8))){
var inst_24422 = (state_24494[(2)]);
var state_24494__$1 = state_24494;
var statearr_24529_24568 = state_24494__$1;
(statearr_24529_24568[(2)] = inst_24422);

(statearr_24529_24568[(1)] = (7));


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
});})(c__19777__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19721__auto__,c__19777__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto____0 = (function (){
var statearr_24533 = [null,null,null,null,null,null,null,null,null];
(statearr_24533[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto__);

(statearr_24533[(1)] = (1));

return statearr_24533;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto____1 = (function (state_24494){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_24494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e24534){if((e24534 instanceof Object)){
var ex__19725__auto__ = e24534;
var statearr_24535_24569 = state_24494;
(statearr_24535_24569[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24570 = state_24494;
state_24494 = G__24570;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto__ = function(state_24494){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto____1.call(this,state_24494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__,msg_hist,msg_names,msg))
})();
var state__19779__auto__ = (function (){var statearr_24536 = f__19778__auto__.call(null);
(statearr_24536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_24536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__,msg_hist,msg_names,msg))
);

return c__19777__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19777__auto___24633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___24633,ch){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___24633,ch){
return (function (state_24616){
var state_val_24617 = (state_24616[(1)]);
if((state_val_24617 === (8))){
var inst_24608 = (state_24616[(2)]);
var state_24616__$1 = (function (){var statearr_24618 = state_24616;
(statearr_24618[(7)] = inst_24608);

return statearr_24618;
})();
var statearr_24619_24634 = state_24616__$1;
(statearr_24619_24634[(2)] = null);

(statearr_24619_24634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (7))){
var inst_24612 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
var statearr_24620_24635 = state_24616__$1;
(statearr_24620_24635[(2)] = inst_24612);

(statearr_24620_24635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (6))){
var state_24616__$1 = state_24616;
var statearr_24621_24636 = state_24616__$1;
(statearr_24621_24636[(2)] = null);

(statearr_24621_24636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (5))){
var inst_24604 = (state_24616[(8)]);
var inst_24606 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24604);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24616__$1,(8),inst_24606);
} else {
if((state_val_24617 === (4))){
var inst_24604 = (state_24616[(8)]);
var inst_24604__$1 = (state_24616[(2)]);
var state_24616__$1 = (function (){var statearr_24622 = state_24616;
(statearr_24622[(8)] = inst_24604__$1);

return statearr_24622;
})();
if(cljs.core.truth_(inst_24604__$1)){
var statearr_24623_24637 = state_24616__$1;
(statearr_24623_24637[(1)] = (5));

} else {
var statearr_24624_24638 = state_24616__$1;
(statearr_24624_24638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24617 === (3))){
var inst_24614 = (state_24616[(2)]);
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24616__$1,inst_24614);
} else {
if((state_val_24617 === (2))){
var state_24616__$1 = state_24616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24616__$1,(4),ch);
} else {
if((state_val_24617 === (1))){
var state_24616__$1 = state_24616;
var statearr_24625_24639 = state_24616__$1;
(statearr_24625_24639[(2)] = null);

(statearr_24625_24639[(1)] = (2));


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
});})(c__19777__auto___24633,ch))
;
return ((function (switch__19721__auto__,c__19777__auto___24633,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19722__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19722__auto____0 = (function (){
var statearr_24629 = [null,null,null,null,null,null,null,null,null];
(statearr_24629[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19722__auto__);

(statearr_24629[(1)] = (1));

return statearr_24629;
});
var figwheel$client$heads_up_plugin_$_state_machine__19722__auto____1 = (function (state_24616){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_24616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e24630){if((e24630 instanceof Object)){
var ex__19725__auto__ = e24630;
var statearr_24631_24640 = state_24616;
(statearr_24631_24640[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24641 = state_24616;
state_24616 = G__24641;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19722__auto__ = function(state_24616){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19722__auto____1.call(this,state_24616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19722__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19722__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___24633,ch))
})();
var state__19779__auto__ = (function (){var statearr_24632 = f__19778__auto__.call(null);
(statearr_24632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___24633);

return statearr_24632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___24633,ch))
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
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_24662){
var state_val_24663 = (state_24662[(1)]);
if((state_val_24663 === (2))){
var inst_24659 = (state_24662[(2)]);
var inst_24660 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24662__$1 = (function (){var statearr_24664 = state_24662;
(statearr_24664[(7)] = inst_24659);

return statearr_24664;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24662__$1,inst_24660);
} else {
if((state_val_24663 === (1))){
var inst_24657 = cljs.core.async.timeout.call(null,(3000));
var state_24662__$1 = state_24662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24662__$1,(2),inst_24657);
} else {
return null;
}
}
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19722__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19722__auto____0 = (function (){
var statearr_24668 = [null,null,null,null,null,null,null,null];
(statearr_24668[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19722__auto__);

(statearr_24668[(1)] = (1));

return statearr_24668;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19722__auto____1 = (function (state_24662){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_24662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e24669){if((e24669 instanceof Object)){
var ex__19725__auto__ = e24669;
var statearr_24670_24672 = state_24662;
(statearr_24670_24672[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24673 = state_24662;
state_24662 = G__24673;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19722__auto__ = function(state_24662){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19722__auto____1.call(this,state_24662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19722__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19722__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_24671 = f__19778__auto__.call(null);
(statearr_24671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_24671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
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
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24677 = {"detail":url};
return obj24677;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24678){
var map__24684 = p__24678;
var map__24684__$1 = ((cljs.core.seq_QMARK_.call(null,map__24684))?cljs.core.apply.call(null,cljs.core.hash_map,map__24684):map__24684);
var ed = map__24684__$1;
var cause = cljs.core.get.call(null,map__24684__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__24684__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__24684__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24685_24689 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24686_24690 = null;
var count__24687_24691 = (0);
var i__24688_24692 = (0);
while(true){
if((i__24688_24692 < count__24687_24691)){
var msg_24693 = cljs.core._nth.call(null,chunk__24686_24690,i__24688_24692);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24693);

var G__24694 = seq__24685_24689;
var G__24695 = chunk__24686_24690;
var G__24696 = count__24687_24691;
var G__24697 = (i__24688_24692 + (1));
seq__24685_24689 = G__24694;
chunk__24686_24690 = G__24695;
count__24687_24691 = G__24696;
i__24688_24692 = G__24697;
continue;
} else {
var temp__4126__auto___24698 = cljs.core.seq.call(null,seq__24685_24689);
if(temp__4126__auto___24698){
var seq__24685_24699__$1 = temp__4126__auto___24698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24685_24699__$1)){
var c__18572__auto___24700 = cljs.core.chunk_first.call(null,seq__24685_24699__$1);
var G__24701 = cljs.core.chunk_rest.call(null,seq__24685_24699__$1);
var G__24702 = c__18572__auto___24700;
var G__24703 = cljs.core.count.call(null,c__18572__auto___24700);
var G__24704 = (0);
seq__24685_24689 = G__24701;
chunk__24686_24690 = G__24702;
count__24687_24691 = G__24703;
i__24688_24692 = G__24704;
continue;
} else {
var msg_24705 = cljs.core.first.call(null,seq__24685_24699__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24705);

var G__24706 = cljs.core.next.call(null,seq__24685_24699__$1);
var G__24707 = null;
var G__24708 = (0);
var G__24709 = (0);
seq__24685_24689 = G__24706;
chunk__24686_24690 = G__24707;
count__24687_24691 = G__24708;
i__24688_24692 = G__24709;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24710){
var map__24712 = p__24710;
var map__24712__$1 = ((cljs.core.seq_QMARK_.call(null,map__24712))?cljs.core.apply.call(null,cljs.core.hash_map,map__24712):map__24712);
var w = map__24712__$1;
var message = cljs.core.get.call(null,map__24712__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__24719 = cljs.core.seq.call(null,plugins);
var chunk__24720 = null;
var count__24721 = (0);
var i__24722 = (0);
while(true){
if((i__24722 < count__24721)){
var vec__24723 = cljs.core._nth.call(null,chunk__24720,i__24722);
var k = cljs.core.nth.call(null,vec__24723,(0),null);
var plugin = cljs.core.nth.call(null,vec__24723,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24725 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24719,chunk__24720,count__24721,i__24722,pl_24725,vec__24723,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24725.call(null,msg_hist);
});})(seq__24719,chunk__24720,count__24721,i__24722,pl_24725,vec__24723,k,plugin))
);
} else {
}

var G__24726 = seq__24719;
var G__24727 = chunk__24720;
var G__24728 = count__24721;
var G__24729 = (i__24722 + (1));
seq__24719 = G__24726;
chunk__24720 = G__24727;
count__24721 = G__24728;
i__24722 = G__24729;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__24719);
if(temp__4126__auto__){
var seq__24719__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24719__$1)){
var c__18572__auto__ = cljs.core.chunk_first.call(null,seq__24719__$1);
var G__24730 = cljs.core.chunk_rest.call(null,seq__24719__$1);
var G__24731 = c__18572__auto__;
var G__24732 = cljs.core.count.call(null,c__18572__auto__);
var G__24733 = (0);
seq__24719 = G__24730;
chunk__24720 = G__24731;
count__24721 = G__24732;
i__24722 = G__24733;
continue;
} else {
var vec__24724 = cljs.core.first.call(null,seq__24719__$1);
var k = cljs.core.nth.call(null,vec__24724,(0),null);
var plugin = cljs.core.nth.call(null,vec__24724,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24734 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24719,chunk__24720,count__24721,i__24722,pl_24734,vec__24724,k,plugin,seq__24719__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24734.call(null,msg_hist);
});})(seq__24719,chunk__24720,count__24721,i__24722,pl_24734,vec__24724,k,plugin,seq__24719__$1,temp__4126__auto__))
);
} else {
}

var G__24735 = cljs.core.next.call(null,seq__24719__$1);
var G__24736 = null;
var G__24737 = (0);
var G__24738 = (0);
seq__24719 = G__24735;
chunk__24720 = G__24736;
count__24721 = G__24737;
i__24722 = G__24738;
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
var figwheel$client$watch_and_reload__delegate = function (p__24739){
var map__24741 = p__24739;
var map__24741__$1 = ((cljs.core.seq_QMARK_.call(null,map__24741))?cljs.core.apply.call(null,cljs.core.hash_map,map__24741):map__24741);
var opts = map__24741__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__24739 = null;
if (arguments.length > 0) {
var G__24742__i = 0, G__24742__a = new Array(arguments.length -  0);
while (G__24742__i < G__24742__a.length) {G__24742__a[G__24742__i] = arguments[G__24742__i + 0]; ++G__24742__i;}
  p__24739 = new cljs.core.IndexedSeq(G__24742__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__24739);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__24743){
var p__24739 = cljs.core.seq(arglist__24743);
return figwheel$client$watch_and_reload__delegate(p__24739);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1434650233455