// Compiled by ClojureScript 1.7.48 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__25070_SHARP_){
return console.log(p1__25070_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__25071_SHARP_){
return console.warn(p1__25071_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__25072_SHARP_){
return console.error(p1__25072_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__25073_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__25073_SHARP_);
} else {
return console.log(p1__25073_SHARP_);
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
re_frame.utils.log = (function re_frame$utils$log(){
var args__17518__auto__ = [];
var len__17511__auto___25075 = arguments.length;
var i__17512__auto___25076 = (0);
while(true){
if((i__17512__auto___25076 < len__17511__auto___25075)){
args__17518__auto__.push((arguments[i__17512__auto___25076]));

var G__25077 = (i__17512__auto___25076 + (1));
i__17512__auto___25076 = G__25077;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq25074){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25074));
});
re_frame.utils.warn = (function re_frame$utils$warn(){
var args__17518__auto__ = [];
var len__17511__auto___25079 = arguments.length;
var i__17512__auto___25080 = (0);
while(true){
if((i__17512__auto___25080 < len__17511__auto___25079)){
args__17518__auto__.push((arguments[i__17512__auto___25080]));

var G__25081 = (i__17512__auto___25080 + (1));
i__17512__auto___25080 = G__25081;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq25078){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25078));
});
re_frame.utils.group = (function re_frame$utils$group(){
var args__17518__auto__ = [];
var len__17511__auto___25083 = arguments.length;
var i__17512__auto___25084 = (0);
while(true){
if((i__17512__auto___25084 < len__17511__auto___25083)){
args__17518__auto__.push((arguments[i__17512__auto___25084]));

var G__25085 = (i__17512__auto___25084 + (1));
i__17512__auto___25084 = G__25085;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq25082){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25082));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(){
var args__17518__auto__ = [];
var len__17511__auto___25087 = arguments.length;
var i__17512__auto___25088 = (0);
while(true){
if((i__17512__auto___25088 < len__17511__auto___25087)){
args__17518__auto__.push((arguments[i__17512__auto___25088]));

var G__25089 = (i__17512__auto___25088 + (1));
i__17512__auto___25088 = G__25089;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq25086){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25086));
});
re_frame.utils.error = (function re_frame$utils$error(){
var args__17518__auto__ = [];
var len__17511__auto___25091 = arguments.length;
var i__17512__auto___25092 = (0);
while(true){
if((i__17512__auto___25092 < len__17511__auto___25091)){
args__17518__auto__.push((arguments[i__17512__auto___25092]));

var G__25093 = (i__17512__auto___25092 + (1));
i__17512__auto___25092 = G__25093;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((0) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__17519__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq25090){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25090));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1440504631945