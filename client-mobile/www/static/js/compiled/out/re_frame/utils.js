// Compiled by ClojureScript 0.0-3165 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__24871_SHARP_){
return console.log(p1__24871_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__24872_SHARP_){
return console.warn(p1__24872_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__24873_SHARP_){
return console.error(p1__24873_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__24874_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__24874_SHARP_);
} else {
return console.log(p1__24874_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd())){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 * 'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
/**
 * @param {...*} var_args
 */
re_frame.utils.log = (function() { 
var re_frame$utils$log__delegate = function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$log = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24875__i = 0, G__24875__a = new Array(arguments.length -  0);
while (G__24875__i < G__24875__a.length) {G__24875__a[G__24875__i] = arguments[G__24875__i + 0]; ++G__24875__i;}
  args = new cljs.core.IndexedSeq(G__24875__a,0);
} 
return re_frame$utils$log__delegate.call(this,args);};
re_frame$utils$log.cljs$lang$maxFixedArity = 0;
re_frame$utils$log.cljs$lang$applyTo = (function (arglist__24876){
var args = cljs.core.seq(arglist__24876);
return re_frame$utils$log__delegate(args);
});
re_frame$utils$log.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$log__delegate;
return re_frame$utils$log;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.warn = (function() { 
var re_frame$utils$warn__delegate = function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$warn = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24877__i = 0, G__24877__a = new Array(arguments.length -  0);
while (G__24877__i < G__24877__a.length) {G__24877__a[G__24877__i] = arguments[G__24877__i + 0]; ++G__24877__i;}
  args = new cljs.core.IndexedSeq(G__24877__a,0);
} 
return re_frame$utils$warn__delegate.call(this,args);};
re_frame$utils$warn.cljs$lang$maxFixedArity = 0;
re_frame$utils$warn.cljs$lang$applyTo = (function (arglist__24878){
var args = cljs.core.seq(arglist__24878);
return re_frame$utils$warn__delegate(args);
});
re_frame$utils$warn.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$warn__delegate;
return re_frame$utils$warn;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.group = (function() { 
var re_frame$utils$group__delegate = function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$group = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24879__i = 0, G__24879__a = new Array(arguments.length -  0);
while (G__24879__i < G__24879__a.length) {G__24879__a[G__24879__i] = arguments[G__24879__i + 0]; ++G__24879__i;}
  args = new cljs.core.IndexedSeq(G__24879__a,0);
} 
return re_frame$utils$group__delegate.call(this,args);};
re_frame$utils$group.cljs$lang$maxFixedArity = 0;
re_frame$utils$group.cljs$lang$applyTo = (function (arglist__24880){
var args = cljs.core.seq(arglist__24880);
return re_frame$utils$group__delegate(args);
});
re_frame$utils$group.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$group__delegate;
return re_frame$utils$group;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.groupEnd = (function() { 
var re_frame$utils$groupEnd__delegate = function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$groupEnd = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24881__i = 0, G__24881__a = new Array(arguments.length -  0);
while (G__24881__i < G__24881__a.length) {G__24881__a[G__24881__i] = arguments[G__24881__i + 0]; ++G__24881__i;}
  args = new cljs.core.IndexedSeq(G__24881__a,0);
} 
return re_frame$utils$groupEnd__delegate.call(this,args);};
re_frame$utils$groupEnd.cljs$lang$maxFixedArity = 0;
re_frame$utils$groupEnd.cljs$lang$applyTo = (function (arglist__24882){
var args = cljs.core.seq(arglist__24882);
return re_frame$utils$groupEnd__delegate(args);
});
re_frame$utils$groupEnd.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$groupEnd__delegate;
return re_frame$utils$groupEnd;
})()
;
/**
 * @param {...*} var_args
 */
re_frame.utils.error = (function() { 
var re_frame$utils$error__delegate = function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
};
var re_frame$utils$error = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24883__i = 0, G__24883__a = new Array(arguments.length -  0);
while (G__24883__i < G__24883__a.length) {G__24883__a[G__24883__i] = arguments[G__24883__i + 0]; ++G__24883__i;}
  args = new cljs.core.IndexedSeq(G__24883__a,0);
} 
return re_frame$utils$error__delegate.call(this,args);};
re_frame$utils$error.cljs$lang$maxFixedArity = 0;
re_frame$utils$error.cljs$lang$applyTo = (function (arglist__24884){
var args = cljs.core.seq(arglist__24884);
return re_frame$utils$error__delegate(args);
});
re_frame$utils$error.cljs$core$IFn$_invoke$arity$variadic = re_frame$utils$error__delegate;
return re_frame$utils$error;
})()
;
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1435073925595