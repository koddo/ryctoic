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
var G__15615__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__15615 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15616__i = 0, G__15616__a = new Array(arguments.length -  0);
while (G__15616__i < G__15616__a.length) {G__15616__a[G__15616__i] = arguments[G__15616__i + 0]; ++G__15616__i;}
  args = new cljs.core.IndexedSeq(G__15616__a,0);
} 
return G__15615__delegate.call(this,args);};
G__15615.cljs$lang$maxFixedArity = 0;
G__15615.cljs$lang$applyTo = (function (arglist__15617){
var args = cljs.core.seq(arglist__15617);
return G__15615__delegate(args);
});
G__15615.cljs$core$IFn$_invoke$arity$variadic = G__15615__delegate;
return G__15615;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__15618){
var map__15620 = p__15618;
var map__15620__$1 = ((cljs.core.seq_QMARK_.call(null,map__15620))?cljs.core.apply.call(null,cljs.core.hash_map,map__15620):map__15620);
var class$ = cljs.core.get.call(null,map__15620__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__15620__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4149__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4137__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4137__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4137__auto__;
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
var c__6760__auto___15749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___15749,ch){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___15749,ch){
return (function (state_15723){
var state_val_15724 = (state_15723[(1)]);
if((state_val_15724 === (7))){
var inst_15719 = (state_15723[(2)]);
var state_15723__$1 = state_15723;
var statearr_15725_15750 = state_15723__$1;
(statearr_15725_15750[(2)] = inst_15719);

(statearr_15725_15750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (1))){
var state_15723__$1 = state_15723;
var statearr_15726_15751 = state_15723__$1;
(statearr_15726_15751[(2)] = null);

(statearr_15726_15751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (4))){
var inst_15687 = (state_15723[(7)]);
var inst_15687__$1 = (state_15723[(2)]);
var state_15723__$1 = (function (){var statearr_15727 = state_15723;
(statearr_15727[(7)] = inst_15687__$1);

return statearr_15727;
})();
if(cljs.core.truth_(inst_15687__$1)){
var statearr_15728_15752 = state_15723__$1;
(statearr_15728_15752[(1)] = (5));

} else {
var statearr_15729_15753 = state_15723__$1;
(statearr_15729_15753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (13))){
var state_15723__$1 = state_15723;
var statearr_15730_15754 = state_15723__$1;
(statearr_15730_15754[(2)] = null);

(statearr_15730_15754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (6))){
var state_15723__$1 = state_15723;
var statearr_15731_15755 = state_15723__$1;
(statearr_15731_15755[(2)] = null);

(statearr_15731_15755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (3))){
var inst_15721 = (state_15723[(2)]);
var state_15723__$1 = state_15723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15723__$1,inst_15721);
} else {
if((state_val_15724 === (12))){
var inst_15694 = (state_15723[(8)]);
var inst_15707 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_15694);
var inst_15708 = cljs.core.first.call(null,inst_15707);
var inst_15709 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_15708);
var inst_15710 = console.warn("Figwheel: Not loading code with warnings - ",inst_15709);
var state_15723__$1 = state_15723;
var statearr_15732_15756 = state_15723__$1;
(statearr_15732_15756[(2)] = inst_15710);

(statearr_15732_15756[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (2))){
var state_15723__$1 = state_15723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15723__$1,(4),ch);
} else {
if((state_val_15724 === (11))){
var inst_15703 = (state_15723[(2)]);
var state_15723__$1 = state_15723;
var statearr_15733_15757 = state_15723__$1;
(statearr_15733_15757[(2)] = inst_15703);

(statearr_15733_15757[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (9))){
var inst_15693 = (state_15723[(9)]);
var inst_15705 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_15693,opts);
var state_15723__$1 = state_15723;
if(inst_15705){
var statearr_15734_15758 = state_15723__$1;
(statearr_15734_15758[(1)] = (12));

} else {
var statearr_15735_15759 = state_15723__$1;
(statearr_15735_15759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (5))){
var inst_15693 = (state_15723[(9)]);
var inst_15687 = (state_15723[(7)]);
var inst_15689 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_15690 = (new cljs.core.PersistentArrayMap(null,2,inst_15689,null));
var inst_15691 = (new cljs.core.PersistentHashSet(null,inst_15690,null));
var inst_15692 = figwheel.client.focus_msgs.call(null,inst_15691,inst_15687);
var inst_15693__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_15692);
var inst_15694 = cljs.core.first.call(null,inst_15692);
var inst_15695 = figwheel.client.reload_file_state_QMARK_.call(null,inst_15693__$1,opts);
var state_15723__$1 = (function (){var statearr_15736 = state_15723;
(statearr_15736[(8)] = inst_15694);

(statearr_15736[(9)] = inst_15693__$1);

return statearr_15736;
})();
if(cljs.core.truth_(inst_15695)){
var statearr_15737_15760 = state_15723__$1;
(statearr_15737_15760[(1)] = (8));

} else {
var statearr_15738_15761 = state_15723__$1;
(statearr_15738_15761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (14))){
var inst_15713 = (state_15723[(2)]);
var state_15723__$1 = state_15723;
var statearr_15739_15762 = state_15723__$1;
(statearr_15739_15762[(2)] = inst_15713);

(statearr_15739_15762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (10))){
var inst_15715 = (state_15723[(2)]);
var state_15723__$1 = (function (){var statearr_15740 = state_15723;
(statearr_15740[(10)] = inst_15715);

return statearr_15740;
})();
var statearr_15741_15763 = state_15723__$1;
(statearr_15741_15763[(2)] = null);

(statearr_15741_15763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15724 === (8))){
var inst_15694 = (state_15723[(8)]);
var inst_15697 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15698 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_15694);
var inst_15699 = cljs.core.async.timeout.call(null,(1000));
var inst_15700 = [inst_15698,inst_15699];
var inst_15701 = (new cljs.core.PersistentVector(null,2,(5),inst_15697,inst_15700,null));
var state_15723__$1 = state_15723;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15723__$1,(11),inst_15701);
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
});})(c__6760__auto___15749,ch))
;
return ((function (switch__6704__auto__,c__6760__auto___15749,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6705__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6705__auto____0 = (function (){
var statearr_15745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15745[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6705__auto__);

(statearr_15745[(1)] = (1));

return statearr_15745;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6705__auto____1 = (function (state_15723){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_15723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e15746){if((e15746 instanceof Object)){
var ex__6708__auto__ = e15746;
var statearr_15747_15764 = state_15723;
(statearr_15747_15764[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15765 = state_15723;
state_15723 = G__15765;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6705__auto__ = function(state_15723){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6705__auto____1.call(this,state_15723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6705__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6705__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___15749,ch))
})();
var state__6762__auto__ = (function (){var statearr_15748 = f__6761__auto__.call(null);
(statearr_15748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___15749);

return statearr_15748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___15749,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__15766_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__15766_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_15775 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__15768_SHARP_,p2__15767_SHARP_){
return [cljs.core.str(p2__15767_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_15775){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_15773 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_15774 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_15773,_STAR_print_newline_STAR_15774,base_path_15775){
return (function() { 
var G__15776__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__15776 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15777__i = 0, G__15777__a = new Array(arguments.length -  0);
while (G__15777__i < G__15777__a.length) {G__15777__a[G__15777__i] = arguments[G__15777__i + 0]; ++G__15777__i;}
  args = new cljs.core.IndexedSeq(G__15777__a,0);
} 
return G__15776__delegate.call(this,args);};
G__15776.cljs$lang$maxFixedArity = 0;
G__15776.cljs$lang$applyTo = (function (arglist__15778){
var args = cljs.core.seq(arglist__15778);
return G__15776__delegate(args);
});
G__15776.cljs$core$IFn$_invoke$arity$variadic = G__15776__delegate;
return G__15776;
})()
;})(_STAR_print_fn_STAR_15773,_STAR_print_newline_STAR_15774,base_path_15775))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15774;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15773;
}}catch (e15772){if((e15772 instanceof Error)){
var e = e15772;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_15775], null));
} else {
var e = e15772;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_15775))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__15779){
var map__15784 = p__15779;
var map__15784__$1 = ((cljs.core.seq_QMARK_.call(null,map__15784))?cljs.core.apply.call(null,cljs.core.hash_map,map__15784):map__15784);
var opts = map__15784__$1;
var build_id = cljs.core.get.call(null,map__15784__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__15784,map__15784__$1,opts,build_id){
return (function (p__15785){
var vec__15786 = p__15785;
var map__15787 = cljs.core.nth.call(null,vec__15786,(0),null);
var map__15787__$1 = ((cljs.core.seq_QMARK_.call(null,map__15787))?cljs.core.apply.call(null,cljs.core.hash_map,map__15787):map__15787);
var msg = map__15787__$1;
var msg_name = cljs.core.get.call(null,map__15787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__15786,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__15786,map__15787,map__15787__$1,msg,msg_name,_,map__15784,map__15784__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__15786,map__15787,map__15787__$1,msg,msg_name,_,map__15784,map__15784__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__15784,map__15784__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__15791){
var vec__15792 = p__15791;
var map__15793 = cljs.core.nth.call(null,vec__15792,(0),null);
var map__15793__$1 = ((cljs.core.seq_QMARK_.call(null,map__15793))?cljs.core.apply.call(null,cljs.core.hash_map,map__15793):map__15793);
var msg = map__15793__$1;
var msg_name = cljs.core.get.call(null,map__15793__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__15792,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__15794){
var map__15802 = p__15794;
var map__15802__$1 = ((cljs.core.seq_QMARK_.call(null,map__15802))?cljs.core.apply.call(null,cljs.core.hash_map,map__15802):map__15802);
var on_compile_fail = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__15802__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__15802,map__15802__$1,on_compile_fail,on_compile_warning){
return (function (p__15803){
var vec__15804 = p__15803;
var map__15805 = cljs.core.nth.call(null,vec__15804,(0),null);
var map__15805__$1 = ((cljs.core.seq_QMARK_.call(null,map__15805))?cljs.core.apply.call(null,cljs.core.hash_map,map__15805):map__15805);
var msg = map__15805__$1;
var msg_name = cljs.core.get.call(null,map__15805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__15804,(1));
var pred__15806 = cljs.core._EQ_;
var expr__15807 = msg_name;
if(cljs.core.truth_(pred__15806.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__15807))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__15806.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__15807))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__15802,map__15802__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__,msg_hist,msg_names,msg){
return (function (state_16008){
var state_val_16009 = (state_16008[(1)]);
if((state_val_16009 === (7))){
var inst_15942 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16010_16051 = state_16008__$1;
(statearr_16010_16051[(2)] = inst_15942);

(statearr_16010_16051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (20))){
var inst_15970 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_16008__$1 = state_16008;
if(inst_15970){
var statearr_16011_16052 = state_16008__$1;
(statearr_16011_16052[(1)] = (22));

} else {
var statearr_16012_16053 = state_16008__$1;
(statearr_16012_16053[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (27))){
var inst_15982 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15983 = figwheel.client.heads_up.display_warning.call(null,inst_15982);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(30),inst_15983);
} else {
if((state_val_16009 === (1))){
var inst_15930 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_16008__$1 = state_16008;
if(cljs.core.truth_(inst_15930)){
var statearr_16013_16054 = state_16008__$1;
(statearr_16013_16054[(1)] = (2));

} else {
var statearr_16014_16055 = state_16008__$1;
(statearr_16014_16055[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (24))){
var inst_15998 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16015_16056 = state_16008__$1;
(statearr_16015_16056[(2)] = inst_15998);

(statearr_16015_16056[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (4))){
var inst_16006 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16008__$1,inst_16006);
} else {
if((state_val_16009 === (15))){
var inst_15958 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15959 = figwheel.client.format_messages.call(null,inst_15958);
var inst_15960 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15961 = figwheel.client.heads_up.display_error.call(null,inst_15959,inst_15960);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(18),inst_15961);
} else {
if((state_val_16009 === (21))){
var inst_16000 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16016_16057 = state_16008__$1;
(statearr_16016_16057[(2)] = inst_16000);

(statearr_16016_16057[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (31))){
var inst_15989 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(34),inst_15989);
} else {
if((state_val_16009 === (32))){
var state_16008__$1 = state_16008;
var statearr_16017_16058 = state_16008__$1;
(statearr_16017_16058[(2)] = null);

(statearr_16017_16058[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (33))){
var inst_15994 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16018_16059 = state_16008__$1;
(statearr_16018_16059[(2)] = inst_15994);

(statearr_16018_16059[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (13))){
var inst_15948 = (state_16008[(2)]);
var inst_15949 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15950 = figwheel.client.format_messages.call(null,inst_15949);
var inst_15951 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15952 = figwheel.client.heads_up.display_error.call(null,inst_15950,inst_15951);
var state_16008__$1 = (function (){var statearr_16019 = state_16008;
(statearr_16019[(7)] = inst_15948);

return statearr_16019;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(14),inst_15952);
} else {
if((state_val_16009 === (22))){
var inst_15972 = figwheel.client.heads_up.clear.call(null);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(25),inst_15972);
} else {
if((state_val_16009 === (29))){
var inst_15996 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16020_16060 = state_16008__$1;
(statearr_16020_16060[(2)] = inst_15996);

(statearr_16020_16060[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (6))){
var inst_15938 = figwheel.client.heads_up.clear.call(null);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(9),inst_15938);
} else {
if((state_val_16009 === (28))){
var inst_15987 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_16008__$1 = state_16008;
if(inst_15987){
var statearr_16021_16061 = state_16008__$1;
(statearr_16021_16061[(1)] = (31));

} else {
var statearr_16022_16062 = state_16008__$1;
(statearr_16022_16062[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (25))){
var inst_15974 = (state_16008[(2)]);
var inst_15975 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15976 = figwheel.client.heads_up.display_warning.call(null,inst_15975);
var state_16008__$1 = (function (){var statearr_16023 = state_16008;
(statearr_16023[(8)] = inst_15974);

return statearr_16023;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(26),inst_15976);
} else {
if((state_val_16009 === (34))){
var inst_15991 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16024_16063 = state_16008__$1;
(statearr_16024_16063[(2)] = inst_15991);

(statearr_16024_16063[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (17))){
var inst_16002 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16025_16064 = state_16008__$1;
(statearr_16025_16064[(2)] = inst_16002);

(statearr_16025_16064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (3))){
var inst_15944 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_16008__$1 = state_16008;
if(inst_15944){
var statearr_16026_16065 = state_16008__$1;
(statearr_16026_16065[(1)] = (10));

} else {
var statearr_16027_16066 = state_16008__$1;
(statearr_16027_16066[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (12))){
var inst_16004 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16028_16067 = state_16008__$1;
(statearr_16028_16067[(2)] = inst_16004);

(statearr_16028_16067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (2))){
var inst_15932 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_16008__$1 = state_16008;
if(cljs.core.truth_(inst_15932)){
var statearr_16029_16068 = state_16008__$1;
(statearr_16029_16068[(1)] = (5));

} else {
var statearr_16030_16069 = state_16008__$1;
(statearr_16030_16069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (23))){
var inst_15980 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_16008__$1 = state_16008;
if(inst_15980){
var statearr_16031_16070 = state_16008__$1;
(statearr_16031_16070[(1)] = (27));

} else {
var statearr_16032_16071 = state_16008__$1;
(statearr_16032_16071[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (19))){
var inst_15967 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_15968 = figwheel.client.heads_up.append_message.call(null,inst_15967);
var state_16008__$1 = state_16008;
var statearr_16033_16072 = state_16008__$1;
(statearr_16033_16072[(2)] = inst_15968);

(statearr_16033_16072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (11))){
var inst_15956 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_16008__$1 = state_16008;
if(inst_15956){
var statearr_16034_16073 = state_16008__$1;
(statearr_16034_16073[(1)] = (15));

} else {
var statearr_16035_16074 = state_16008__$1;
(statearr_16035_16074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (9))){
var inst_15940 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16036_16075 = state_16008__$1;
(statearr_16036_16075[(2)] = inst_15940);

(statearr_16036_16075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (5))){
var inst_15934 = figwheel.client.heads_up.flash_loaded.call(null);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(8),inst_15934);
} else {
if((state_val_16009 === (14))){
var inst_15954 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16037_16076 = state_16008__$1;
(statearr_16037_16076[(2)] = inst_15954);

(statearr_16037_16076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (26))){
var inst_15978 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16038_16077 = state_16008__$1;
(statearr_16038_16077[(2)] = inst_15978);

(statearr_16038_16077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (16))){
var inst_15965 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_16008__$1 = state_16008;
if(inst_15965){
var statearr_16039_16078 = state_16008__$1;
(statearr_16039_16078[(1)] = (19));

} else {
var statearr_16040_16079 = state_16008__$1;
(statearr_16040_16079[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (30))){
var inst_15985 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16041_16080 = state_16008__$1;
(statearr_16041_16080[(2)] = inst_15985);

(statearr_16041_16080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (10))){
var inst_15946 = figwheel.client.heads_up.clear.call(null);
var state_16008__$1 = state_16008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16008__$1,(13),inst_15946);
} else {
if((state_val_16009 === (18))){
var inst_15963 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16042_16081 = state_16008__$1;
(statearr_16042_16081[(2)] = inst_15963);

(statearr_16042_16081[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16009 === (8))){
var inst_15936 = (state_16008[(2)]);
var state_16008__$1 = state_16008;
var statearr_16043_16082 = state_16008__$1;
(statearr_16043_16082[(2)] = inst_15936);

(statearr_16043_16082[(1)] = (7));


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
});})(c__6760__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6704__auto__,c__6760__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto____0 = (function (){
var statearr_16047 = [null,null,null,null,null,null,null,null,null];
(statearr_16047[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto__);

(statearr_16047[(1)] = (1));

return statearr_16047;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto____1 = (function (state_16008){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_16008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e16048){if((e16048 instanceof Object)){
var ex__6708__auto__ = e16048;
var statearr_16049_16083 = state_16008;
(statearr_16049_16083[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16084 = state_16008;
state_16008 = G__16084;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto__ = function(state_16008){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto____1.call(this,state_16008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__,msg_hist,msg_names,msg))
})();
var state__6762__auto__ = (function (){var statearr_16050 = f__6761__auto__.call(null);
(statearr_16050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_16050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__,msg_hist,msg_names,msg))
);

return c__6760__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6760__auto___16147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___16147,ch){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___16147,ch){
return (function (state_16130){
var state_val_16131 = (state_16130[(1)]);
if((state_val_16131 === (8))){
var inst_16122 = (state_16130[(2)]);
var state_16130__$1 = (function (){var statearr_16132 = state_16130;
(statearr_16132[(7)] = inst_16122);

return statearr_16132;
})();
var statearr_16133_16148 = state_16130__$1;
(statearr_16133_16148[(2)] = null);

(statearr_16133_16148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (7))){
var inst_16126 = (state_16130[(2)]);
var state_16130__$1 = state_16130;
var statearr_16134_16149 = state_16130__$1;
(statearr_16134_16149[(2)] = inst_16126);

(statearr_16134_16149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (6))){
var state_16130__$1 = state_16130;
var statearr_16135_16150 = state_16130__$1;
(statearr_16135_16150[(2)] = null);

(statearr_16135_16150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (5))){
var inst_16118 = (state_16130[(8)]);
var inst_16120 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_16118);
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16130__$1,(8),inst_16120);
} else {
if((state_val_16131 === (4))){
var inst_16118 = (state_16130[(8)]);
var inst_16118__$1 = (state_16130[(2)]);
var state_16130__$1 = (function (){var statearr_16136 = state_16130;
(statearr_16136[(8)] = inst_16118__$1);

return statearr_16136;
})();
if(cljs.core.truth_(inst_16118__$1)){
var statearr_16137_16151 = state_16130__$1;
(statearr_16137_16151[(1)] = (5));

} else {
var statearr_16138_16152 = state_16130__$1;
(statearr_16138_16152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16131 === (3))){
var inst_16128 = (state_16130[(2)]);
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16130__$1,inst_16128);
} else {
if((state_val_16131 === (2))){
var state_16130__$1 = state_16130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16130__$1,(4),ch);
} else {
if((state_val_16131 === (1))){
var state_16130__$1 = state_16130;
var statearr_16139_16153 = state_16130__$1;
(statearr_16139_16153[(2)] = null);

(statearr_16139_16153[(1)] = (2));


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
});})(c__6760__auto___16147,ch))
;
return ((function (switch__6704__auto__,c__6760__auto___16147,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6705__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6705__auto____0 = (function (){
var statearr_16143 = [null,null,null,null,null,null,null,null,null];
(statearr_16143[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6705__auto__);

(statearr_16143[(1)] = (1));

return statearr_16143;
});
var figwheel$client$heads_up_plugin_$_state_machine__6705__auto____1 = (function (state_16130){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_16130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e16144){if((e16144 instanceof Object)){
var ex__6708__auto__ = e16144;
var statearr_16145_16154 = state_16130;
(statearr_16145_16154[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16155 = state_16130;
state_16130 = G__16155;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6705__auto__ = function(state_16130){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6705__auto____1.call(this,state_16130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6705__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6705__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___16147,ch))
})();
var state__6762__auto__ = (function (){var statearr_16146 = f__6761__auto__.call(null);
(statearr_16146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___16147);

return statearr_16146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___16147,ch))
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
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__){
return (function (state_16176){
var state_val_16177 = (state_16176[(1)]);
if((state_val_16177 === (2))){
var inst_16173 = (state_16176[(2)]);
var inst_16174 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_16176__$1 = (function (){var statearr_16178 = state_16176;
(statearr_16178[(7)] = inst_16173);

return statearr_16178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16176__$1,inst_16174);
} else {
if((state_val_16177 === (1))){
var inst_16171 = cljs.core.async.timeout.call(null,(3000));
var state_16176__$1 = state_16176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16176__$1,(2),inst_16171);
} else {
return null;
}
}
});})(c__6760__auto__))
;
return ((function (switch__6704__auto__,c__6760__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6705__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6705__auto____0 = (function (){
var statearr_16182 = [null,null,null,null,null,null,null,null];
(statearr_16182[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6705__auto__);

(statearr_16182[(1)] = (1));

return statearr_16182;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6705__auto____1 = (function (state_16176){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_16176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e16183){if((e16183 instanceof Object)){
var ex__6708__auto__ = e16183;
var statearr_16184_16186 = state_16176;
(statearr_16184_16186[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16187 = state_16176;
state_16176 = G__16187;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6705__auto__ = function(state_16176){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6705__auto____1.call(this,state_16176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6705__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6705__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__))
})();
var state__6762__auto__ = (function (){var statearr_16185 = f__6761__auto__.call(null);
(statearr_16185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_16185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__))
);

return c__6760__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4137__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4137__auto__)){
return ("CustomEvent" in window);
} else {
return and__4137__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj16191 = {"detail":url};
return obj16191;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__16192){
var map__16198 = p__16192;
var map__16198__$1 = ((cljs.core.seq_QMARK_.call(null,map__16198))?cljs.core.apply.call(null,cljs.core.hash_map,map__16198):map__16198);
var ed = map__16198__$1;
var cause = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__16198__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__16199_16203 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__16200_16204 = null;
var count__16201_16205 = (0);
var i__16202_16206 = (0);
while(true){
if((i__16202_16206 < count__16201_16205)){
var msg_16207 = cljs.core._nth.call(null,chunk__16200_16204,i__16202_16206);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_16207);

var G__16208 = seq__16199_16203;
var G__16209 = chunk__16200_16204;
var G__16210 = count__16201_16205;
var G__16211 = (i__16202_16206 + (1));
seq__16199_16203 = G__16208;
chunk__16200_16204 = G__16209;
count__16201_16205 = G__16210;
i__16202_16206 = G__16211;
continue;
} else {
var temp__4126__auto___16212 = cljs.core.seq.call(null,seq__16199_16203);
if(temp__4126__auto___16212){
var seq__16199_16213__$1 = temp__4126__auto___16212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16199_16213__$1)){
var c__4934__auto___16214 = cljs.core.chunk_first.call(null,seq__16199_16213__$1);
var G__16215 = cljs.core.chunk_rest.call(null,seq__16199_16213__$1);
var G__16216 = c__4934__auto___16214;
var G__16217 = cljs.core.count.call(null,c__4934__auto___16214);
var G__16218 = (0);
seq__16199_16203 = G__16215;
chunk__16200_16204 = G__16216;
count__16201_16205 = G__16217;
i__16202_16206 = G__16218;
continue;
} else {
var msg_16219 = cljs.core.first.call(null,seq__16199_16213__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_16219);

var G__16220 = cljs.core.next.call(null,seq__16199_16213__$1);
var G__16221 = null;
var G__16222 = (0);
var G__16223 = (0);
seq__16199_16203 = G__16220;
chunk__16200_16204 = G__16221;
count__16201_16205 = G__16222;
i__16202_16206 = G__16223;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__16224){
var map__16226 = p__16224;
var map__16226__$1 = ((cljs.core.seq_QMARK_.call(null,map__16226))?cljs.core.apply.call(null,cljs.core.hash_map,map__16226):map__16226);
var w = map__16226__$1;
var message = cljs.core.get.call(null,map__16226__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__4137__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4137__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4137__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__16233 = cljs.core.seq.call(null,plugins);
var chunk__16234 = null;
var count__16235 = (0);
var i__16236 = (0);
while(true){
if((i__16236 < count__16235)){
var vec__16237 = cljs.core._nth.call(null,chunk__16234,i__16236);
var k = cljs.core.nth.call(null,vec__16237,(0),null);
var plugin = cljs.core.nth.call(null,vec__16237,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16239 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16233,chunk__16234,count__16235,i__16236,pl_16239,vec__16237,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_16239.call(null,msg_hist);
});})(seq__16233,chunk__16234,count__16235,i__16236,pl_16239,vec__16237,k,plugin))
);
} else {
}

var G__16240 = seq__16233;
var G__16241 = chunk__16234;
var G__16242 = count__16235;
var G__16243 = (i__16236 + (1));
seq__16233 = G__16240;
chunk__16234 = G__16241;
count__16235 = G__16242;
i__16236 = G__16243;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16233);
if(temp__4126__auto__){
var seq__16233__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16233__$1)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,seq__16233__$1);
var G__16244 = cljs.core.chunk_rest.call(null,seq__16233__$1);
var G__16245 = c__4934__auto__;
var G__16246 = cljs.core.count.call(null,c__4934__auto__);
var G__16247 = (0);
seq__16233 = G__16244;
chunk__16234 = G__16245;
count__16235 = G__16246;
i__16236 = G__16247;
continue;
} else {
var vec__16238 = cljs.core.first.call(null,seq__16233__$1);
var k = cljs.core.nth.call(null,vec__16238,(0),null);
var plugin = cljs.core.nth.call(null,vec__16238,(1),null);
if(cljs.core.truth_(plugin)){
var pl_16248 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__16233,chunk__16234,count__16235,i__16236,pl_16248,vec__16238,k,plugin,seq__16233__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_16248.call(null,msg_hist);
});})(seq__16233,chunk__16234,count__16235,i__16236,pl_16248,vec__16238,k,plugin,seq__16233__$1,temp__4126__auto__))
);
} else {
}

var G__16249 = cljs.core.next.call(null,seq__16233__$1);
var G__16250 = null;
var G__16251 = (0);
var G__16252 = (0);
seq__16233 = G__16249;
chunk__16234 = G__16250;
count__16235 = G__16251;
i__16236 = G__16252;
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
var figwheel$client$watch_and_reload__delegate = function (p__16253){
var map__16255 = p__16253;
var map__16255__$1 = ((cljs.core.seq_QMARK_.call(null,map__16255))?cljs.core.apply.call(null,cljs.core.hash_map,map__16255):map__16255);
var opts = map__16255__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__16253 = null;
if (arguments.length > 0) {
var G__16256__i = 0, G__16256__a = new Array(arguments.length -  0);
while (G__16256__i < G__16256__a.length) {G__16256__a[G__16256__i] = arguments[G__16256__i + 0]; ++G__16256__i;}
  p__16253 = new cljs.core.IndexedSeq(G__16256__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__16253);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__16257){
var p__16253 = cljs.core.seq(arglist__16257);
return figwheel$client$watch_and_reload__delegate(p__16253);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1434562328816