// Compiled by ClojureScript 0.0-3165 {}
goog.provide('reagent.ratom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
if(typeof reagent.ratom.debug !== 'undefined'){
} else {
reagent.ratom.debug = false;
}
if(typeof reagent.ratom._running !== 'undefined'){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.capture_derefed = (function reagent$ratom$capture_derefed(f,obj){
obj.cljsCaptured = null;

var _STAR_ratom_context_STAR_15498 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return f.call(null);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_15498;
}});
reagent.ratom.captured = (function reagent$ratom$captured(obj){
var c = obj.cljsCaptured;
obj.cljsCaptured = null;

return c;
});
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefable){
var obj = reagent.ratom._STAR_ratom_context_STAR_;
if((obj == null)){
return null;
} else {
var captured = obj.cljsCaptured;
return obj.cljsCaptured = cljs.core.conj.call(null,(((captured == null))?cljs.core.PersistentHashSet.EMPTY:captured),derefable);
}
});

reagent.ratom.IReactiveAtom = (function (){var obj15500 = {};
return obj15500;
})();


/**
* @constructor
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,"#<Atom: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"new-value","new-value",-1567397401,null))))].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,a__$1,old_value,new_value);
}

return new_value;
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
});

reagent.ratom.RAtom.cljs$lang$type = true;

reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom";

reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"reagent.ratom/RAtom");
});

reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * @param {...*} var_args
 */
reagent.ratom.atom = (function() {
var reagent$ratom$atom = null;
var reagent$ratom$atom__1 = (function (x){
return (new reagent.ratom.RAtom(x,null,null,null));
});
var reagent$ratom$atom__2 = (function() { 
var G__15504__delegate = function (x,p__15501){
var map__15503 = p__15501;
var map__15503__$1 = ((cljs.core.seq_QMARK_.call(null,map__15503))?cljs.core.apply.call(null,cljs.core.hash_map,map__15503):map__15503);
var validator = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var meta = cljs.core.get.call(null,map__15503__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (new reagent.ratom.RAtom(x,meta,validator,null));
};
var G__15504 = function (x,var_args){
var p__15501 = null;
if (arguments.length > 1) {
var G__15505__i = 0, G__15505__a = new Array(arguments.length -  1);
while (G__15505__i < G__15505__a.length) {G__15505__a[G__15505__i] = arguments[G__15505__i + 1]; ++G__15505__i;}
  p__15501 = new cljs.core.IndexedSeq(G__15505__a,0);
} 
return G__15504__delegate.call(this,x,p__15501);};
G__15504.cljs$lang$maxFixedArity = 1;
G__15504.cljs$lang$applyTo = (function (arglist__15506){
var x = cljs.core.first(arglist__15506);
var p__15501 = cljs.core.rest(arglist__15506);
return G__15504__delegate(x,p__15501);
});
G__15504.cljs$core$IFn$_invoke$arity$variadic = G__15504__delegate;
return G__15504;
})()
;
reagent$ratom$atom = function(x,var_args){
var p__15501 = var_args;
switch(arguments.length){
case 1:
return reagent$ratom$atom__1.call(this,x);
default:
var G__15507 = null;
if (arguments.length > 1) {
var G__15508__i = 0, G__15508__a = new Array(arguments.length -  1);
while (G__15508__i < G__15508__a.length) {G__15508__a[G__15508__i] = arguments[G__15508__i + 1]; ++G__15508__i;}
G__15507 = new cljs.core.IndexedSeq(G__15508__a,0);
}
return reagent$ratom$atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__15507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$ratom$atom.cljs$lang$maxFixedArity = 1;
reagent$ratom$atom.cljs$lang$applyTo = reagent$ratom$atom__2.cljs$lang$applyTo;
reagent$ratom$atom.cljs$core$IFn$_invoke$arity$1 = reagent$ratom$atom__1;
reagent$ratom$atom.cljs$core$IFn$_invoke$arity$variadic = reagent$ratom$atom__2.cljs$core$IFn$_invoke$arity$variadic;
return reagent$ratom$atom;
})()
;

/**
* @constructor
*/
reagent.ratom.RCursor = (function (ratom,path,reaction){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.RCursor.prototype._reaction = (function (){
var self__ = this;
var this$ = this;
if((self__.reaction == null)){
return self__.reaction = (((function (){var G__15515 = self__.ratom;
if(G__15515){
var bit__4823__auto__ = (G__15515.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4823__auto__) || (G__15515.cljs$core$IDeref$)){
return true;
} else {
if((!G__15515.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__15515);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__15515);
}
})())?reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY))?((function (this$){
return (function (p1__15510_SHARP_,p2__15509_SHARP_){
return cljs.core.reset_BANG_.call(null,self__.ratom,p2__15509_SHARP_);
});})(this$))
:((function (this$){
return (function (p1__15512_SHARP_,p2__15511_SHARP_){
return cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,p2__15511_SHARP_);
});})(this$))
)):reagent.ratom.make_reaction.call(null,((function (this$){
return (function (){
return self__.ratom.call(null,self__.path);
});})(this$))
,new cljs.core.Keyword(null,"on-set","on-set",-140953470),((function (this$){
return (function (p1__15514_SHARP_,p2__15513_SHARP_){
return self__.ratom.call(null,self__.path,p2__15513_SHARP_);
});})(this$))
));
} else {
return self__.reaction;
}
});

reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_15516 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$._reaction());
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_15516;
}});

reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
var a__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Cursor: "),cljs.core.str(self__.path),cljs.core.str(" ")].join(''));

cljs.core.pr_writer.call(null,a__$1._peek(),writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return ((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom));
});

reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1._reaction(),new_value);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y);
});

reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._swap_BANG_.call(null,a__$1._reaction(),f,x,y,more);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core._notify_watches.call(null,this$__$1._reaction(),oldval,newval);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._add_watch.call(null,this$__$1._reaction(),key,f);
});

reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return cljs.core._remove_watch.call(null,this$__$1._reaction(),key);
});

reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core._deref.call(null,this$__$1._reaction());
});

reagent.ratom.RCursor.cljs$lang$type = true;

reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor";

reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"reagent.ratom/RCursor");
});

reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction){
return (new reagent.ratom.RCursor(ratom,path,reaction));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var G__15521 = path;
if(G__15521){
var bit__4823__auto__ = (G__15521.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4823__auto__) || (G__15521.cljs$core$IDeref$)){
return true;
} else {
if((!G__15521.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__15521);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__15521);
}
})()){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("Calling cursor with an atom as the second arg is "),cljs.core.str("deprecated, in (cursor "),cljs.core.str(src),cljs.core.str(" "),cljs.core.str(cljs.core.pr_str.call(null,path)),cljs.core.str(")")].join(''));
} else {
}

if((function (){var G__15522 = path;
if(G__15522){
var bit__4823__auto__ = null;
if(cljs.core.truth_((function (){var or__4149__auto__ = bit__4823__auto__;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return G__15522.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__15522.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__15522);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__15522);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom, not "),cljs.core.str(cljs.core.pr_str.call(null,path))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return (new reagent.ratom.RCursor(path,src,null));
} else {
if((function (){var or__4149__auto__ = (function (){var G__15524 = src;
if(G__15524){
var bit__4823__auto__ = null;
if(cljs.core.truth_((function (){var or__4149__auto__ = bit__4823__auto__;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return G__15524.reagent$ratom$IReactiveAtom$;
}
})())){
return true;
} else {
if((!G__15524.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__15524);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,G__15524);
}
})();
if(or__4149__auto__){
return or__4149__auto__;
} else {
return (cljs.core.ifn_QMARK_.call(null,src)) && (!(cljs.core.vector_QMARK_.call(null,src)));
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("src must be a reactive atom or a function, not "),cljs.core.str(cljs.core.pr_str.call(null,src))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IReactiveAtom","IReactiveAtom",-991158427,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"src","src",-10544524,null)),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"src","src",-10544524,null)))))))].join('')));
}

return (new reagent.ratom.RCursor(src,path,null));
}
});

reagent.ratom.IDisposable = (function (){var obj15526 = {};
return obj15526;
})();

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((function (){var and__4137__auto__ = this$;
if(and__4137__auto__){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1;
} else {
return and__4137__auto__;
}
})()){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4785__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4149__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (reagent.ratom.dispose_BANG_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IRunnable = (function (){var obj15528 = {};
return obj15528;
})();

reagent.ratom.run = (function reagent$ratom$run(this$){
if((function (){var and__4137__auto__ = this$;
if(and__4137__auto__){
return this$.reagent$ratom$IRunnable$run$arity$1;
} else {
return and__4137__auto__;
}
})()){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4785__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4149__auto__ = (reagent.ratom.run[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (reagent.ratom.run["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});


reagent.ratom.IComputedImpl = (function (){var obj15530 = {};
return obj15530;
})();

reagent.ratom._update_watching = (function reagent$ratom$_update_watching(this$,derefed){
if((function (){var and__4137__auto__ = this$;
if(and__4137__auto__){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2;
} else {
return and__4137__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else {
var x__4785__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4149__auto__ = (reagent.ratom._update_watching[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (reagent.ratom._update_watching["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});

reagent.ratom._handle_change = (function reagent$ratom$_handle_change(k,sender,oldval,newval){
if((function (){var and__4137__auto__ = k;
if(and__4137__auto__){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4;
} else {
return and__4137__auto__;
}
})()){
return k.reagent$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else {
var x__4785__auto__ = (((k == null))?null:k);
return (function (){var or__4149__auto__ = (reagent.ratom._handle_change[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (reagent.ratom._handle_change["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});

reagent.ratom._peek_at = (function reagent$ratom$_peek_at(this$){
if((function (){var and__4137__auto__ = this$;
if(and__4137__auto__){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1;
} else {
return and__4137__auto__;
}
})()){
return this$.reagent$ratom$IComputedImpl$_peek_at$arity$1(this$);
} else {
var x__4785__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4149__auto__ = (reagent.ratom._peek_at[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (reagent.ratom._peek_at["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IComputedImpl.-peek-at",this$);
}
}
})().call(null,this$);
}
});


/**
* @constructor
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4137__auto__ = self__.active_QMARK_;
if(cljs.core.truth_(and__4137__auto__)){
return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else {
return and__4137__auto__;
}
})())){
self__.dirty_QMARK_ = true;

return (function (){var or__4149__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return reagent.ratom.run;
}
})().call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){
var self__ = this;
var this$__$1 = this;
var seq__15531_15544 = cljs.core.seq.call(null,derefed);
var chunk__15532_15545 = null;
var count__15533_15546 = (0);
var i__15534_15547 = (0);
while(true){
if((i__15534_15547 < count__15533_15546)){
var w_15548 = cljs.core._nth.call(null,chunk__15532_15545,i__15534_15547);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_15548)){
} else {
cljs.core.add_watch.call(null,w_15548,this$__$1,reagent.ratom._handle_change);
}

var G__15549 = seq__15531_15544;
var G__15550 = chunk__15532_15545;
var G__15551 = count__15533_15546;
var G__15552 = (i__15534_15547 + (1));
seq__15531_15544 = G__15549;
chunk__15532_15545 = G__15550;
count__15533_15546 = G__15551;
i__15534_15547 = G__15552;
continue;
} else {
var temp__4126__auto___15553 = cljs.core.seq.call(null,seq__15531_15544);
if(temp__4126__auto___15553){
var seq__15531_15554__$1 = temp__4126__auto___15553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15531_15554__$1)){
var c__4934__auto___15555 = cljs.core.chunk_first.call(null,seq__15531_15554__$1);
var G__15556 = cljs.core.chunk_rest.call(null,seq__15531_15554__$1);
var G__15557 = c__4934__auto___15555;
var G__15558 = cljs.core.count.call(null,c__4934__auto___15555);
var G__15559 = (0);
seq__15531_15544 = G__15556;
chunk__15532_15545 = G__15557;
count__15533_15546 = G__15558;
i__15534_15547 = G__15559;
continue;
} else {
var w_15560 = cljs.core.first.call(null,seq__15531_15554__$1);
if(cljs.core.contains_QMARK_.call(null,self__.watching,w_15560)){
} else {
cljs.core.add_watch.call(null,w_15560,this$__$1,reagent.ratom._handle_change);
}

var G__15561 = cljs.core.next.call(null,seq__15531_15554__$1);
var G__15562 = null;
var G__15563 = (0);
var G__15564 = (0);
seq__15531_15544 = G__15561;
chunk__15532_15545 = G__15562;
count__15533_15546 = G__15563;
i__15534_15547 = G__15564;
continue;
}
} else {
}
}
break;
}

var seq__15535_15565 = cljs.core.seq.call(null,self__.watching);
var chunk__15536_15566 = null;
var count__15537_15567 = (0);
var i__15538_15568 = (0);
while(true){
if((i__15538_15568 < count__15537_15567)){
var w_15569 = cljs.core._nth.call(null,chunk__15536_15566,i__15538_15568);
if(cljs.core.contains_QMARK_.call(null,derefed,w_15569)){
} else {
cljs.core.remove_watch.call(null,w_15569,this$__$1);
}

var G__15570 = seq__15535_15565;
var G__15571 = chunk__15536_15566;
var G__15572 = count__15537_15567;
var G__15573 = (i__15538_15568 + (1));
seq__15535_15565 = G__15570;
chunk__15536_15566 = G__15571;
count__15537_15567 = G__15572;
i__15538_15568 = G__15573;
continue;
} else {
var temp__4126__auto___15574 = cljs.core.seq.call(null,seq__15535_15565);
if(temp__4126__auto___15574){
var seq__15535_15575__$1 = temp__4126__auto___15574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15535_15575__$1)){
var c__4934__auto___15576 = cljs.core.chunk_first.call(null,seq__15535_15575__$1);
var G__15577 = cljs.core.chunk_rest.call(null,seq__15535_15575__$1);
var G__15578 = c__4934__auto___15576;
var G__15579 = cljs.core.count.call(null,c__4934__auto___15576);
var G__15580 = (0);
seq__15535_15565 = G__15577;
chunk__15536_15566 = G__15578;
count__15537_15567 = G__15579;
i__15538_15568 = G__15580;
continue;
} else {
var w_15581 = cljs.core.first.call(null,seq__15535_15575__$1);
if(cljs.core.contains_QMARK_.call(null,derefed,w_15581)){
} else {
cljs.core.remove_watch.call(null,w_15581,this$__$1);
}

var G__15582 = cljs.core.next.call(null,seq__15535_15575__$1);
var G__15583 = null;
var G__15584 = (0);
var G__15585 = (0);
seq__15535_15565 = G__15582;
chunk__15536_15566 = G__15583;
count__15537_15567 = G__15584;
i__15538_15568 = G__15585;
continue;
}
} else {
}
}
break;
}

return self__.watching = derefed;
});

reagent.ratom.Reaction.prototype.reagent$ratom$IComputedImpl$_peek_at$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.not.call(null,self__.dirty_QMARK_)){
return self__.state;
} else {
var _STAR_ratom_context_STAR_15539 = reagent.ratom._STAR_ratom_context_STAR_;
reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref.call(null,this$__$1);
}finally {reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_15539;
}}
});

reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = true;

reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__15540_15586 = cljs.core.seq.call(null,self__.watching);
var chunk__15541_15587 = null;
var count__15542_15588 = (0);
var i__15543_15589 = (0);
while(true){
if((i__15543_15589 < count__15542_15588)){
var w_15590 = cljs.core._nth.call(null,chunk__15541_15587,i__15543_15589);
cljs.core.remove_watch.call(null,w_15590,this$__$1);

var G__15591 = seq__15540_15586;
var G__15592 = chunk__15541_15587;
var G__15593 = count__15542_15588;
var G__15594 = (i__15543_15589 + (1));
seq__15540_15586 = G__15591;
chunk__15541_15587 = G__15592;
count__15542_15588 = G__15593;
i__15543_15589 = G__15594;
continue;
} else {
var temp__4126__auto___15595 = cljs.core.seq.call(null,seq__15540_15586);
if(temp__4126__auto___15595){
var seq__15540_15596__$1 = temp__4126__auto___15595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15540_15596__$1)){
var c__4934__auto___15597 = cljs.core.chunk_first.call(null,seq__15540_15596__$1);
var G__15598 = cljs.core.chunk_rest.call(null,seq__15540_15596__$1);
var G__15599 = c__4934__auto___15597;
var G__15600 = cljs.core.count.call(null,c__4934__auto___15597);
var G__15601 = (0);
seq__15540_15586 = G__15598;
chunk__15541_15587 = G__15599;
count__15542_15588 = G__15600;
i__15543_15589 = G__15601;
continue;
} else {
var w_15602 = cljs.core.first.call(null,seq__15540_15596__$1);
cljs.core.remove_watch.call(null,w_15602,this$__$1);

var G__15603 = cljs.core.next.call(null,seq__15540_15596__$1);
var G__15604 = null;
var G__15605 = (0);
var G__15606 = (0);
seq__15540_15586 = G__15603;
chunk__15541_15587 = G__15604;
count__15542_15588 = G__15605;
i__15543_15589 = G__15606;
continue;
}
} else {
}
}
break;
}

self__.watching = null;

self__.state = null;

self__.dirty_QMARK_ = true;

if(cljs.core.truth_(self__.active_QMARK_)){
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

self__.active_QMARK_ = false;
} else {
}

if(cljs.core.truth_(self__.on_dispose)){
return self__.on_dispose.call(null);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
var oldval = self__.state;
self__.state = newval;

if(cljs.core.truth_(self__.on_set)){
self__.dirty_QMARK_ = true;

self__.on_set.call(null,oldval,newval);
} else {
}

cljs.core._notify_watches.call(null,a__$1,oldval,newval);

return newval;
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1)));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,reagent.ratom._peek_at.call(null,a__$1),x,y));
});

reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,reagent.ratom._peek_at.call(null,a__$1),x,y,more));
});

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = true;

reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var res = reagent.ratom.capture_derefed.call(null,self__.f,this$__$1);
var derefed = reagent.ratom.captured.call(null,this$__$1);
if(cljs.core.not_EQ_.call(null,derefed,self__.watching)){
reagent.ratom._update_watching.call(null,this$__$1,derefed);
} else {
}

if(cljs.core.truth_(self__.active_QMARK_)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

self__.active_QMARK_ = true;
}

self__.dirty_QMARK_ = false;

self__.state = res;

cljs.core._notify_watches.call(null,this$__$1,oldstate,self__.state);

return res;
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f__$1){
f__$1.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});

reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
self__.watches = cljs.core.dissoc.call(null,self__.watches,k);

if((cljs.core.empty_QMARK_.call(null,self__.watches)) && (cljs.core.not.call(null,self__.auto_run))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
});

reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var or__4149__auto__ = self__.auto_run;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
}
})())){
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(cljs.core.truth_(self__.dirty_QMARK_)){
return reagent.ratom.run.call(null,this$__$1);
} else {
return self__.state;
}
} else {
if(cljs.core.truth_(self__.dirty_QMARK_)){
var oldstate_15607 = self__.state;
self__.state = self__.f.call(null);

if((oldstate_15607 === self__.state)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldstate_15607,self__.state);
}
} else {
}

return self__.state;
}
});

reagent.ratom.Reaction.cljs$lang$type = true;

reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction";

reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"reagent.ratom/Reaction");
});

reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});

/**
 * @param {...*} var_args
 */
reagent.ratom.make_reaction = (function() { 
var reagent$ratom$make_reaction__delegate = function (f,p__15608){
var map__15610 = p__15608;
var map__15610__$1 = ((cljs.core.seq_QMARK_.call(null,map__15610))?cljs.core.apply.call(null,cljs.core.hash_map,map__15610):map__15610);
var derefed = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"derefed","derefed",590684583));
var on_dispose = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var on_set = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var auto_run = cljs.core.get.call(null,map__15610__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var runner = ((cljs.core._EQ_.call(null,auto_run,true))?reagent.ratom.run:auto_run);
var active = !((derefed == null));
var dirty = !(active);
var reaction = (new reagent.ratom.Reaction(f,null,dirty,active,null,null,runner,on_set,on_dispose));
if((derefed == null)){
} else {
if(cljs.core.truth_(reagent.ratom.debug)){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

reagent.ratom._update_watching.call(null,reaction,derefed);
}

return reaction;
};
var reagent$ratom$make_reaction = function (f,var_args){
var p__15608 = null;
if (arguments.length > 1) {
var G__15611__i = 0, G__15611__a = new Array(arguments.length -  1);
while (G__15611__i < G__15611__a.length) {G__15611__a[G__15611__i] = arguments[G__15611__i + 1]; ++G__15611__i;}
  p__15608 = new cljs.core.IndexedSeq(G__15611__a,0);
} 
return reagent$ratom$make_reaction__delegate.call(this,f,p__15608);};
reagent$ratom$make_reaction.cljs$lang$maxFixedArity = 1;
reagent$ratom$make_reaction.cljs$lang$applyTo = (function (arglist__15612){
var f = cljs.core.first(arglist__15612);
var p__15608 = cljs.core.rest(arglist__15612);
return reagent$ratom$make_reaction__delegate(f,p__15608);
});
reagent$ratom$make_reaction.cljs$core$IFn$_invoke$arity$variadic = reagent$ratom$make_reaction__delegate;
return reagent$ratom$make_reaction;
})()
;

/**
* @constructor
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
cljs.core._write.call(null,writer,"#<wrap: ");

cljs.core.pr_writer.call(null,self__.state,writer,opts);

return cljs.core._write.call(null,writer,">");
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
return cljs.core.reduce_kv.call(null,((function (this$__$1){
return (function (_,key,f){
f.call(null,key,this$__$1,oldval,newval);

return null;
});})(this$__$1))
,null,self__.watches);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});

reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return self__.watches = cljs.core.dissoc.call(null,self__.watches,key);
});

reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return ((other instanceof reagent.ratom.Wrapper)) && (cljs.core.not.call(null,self__.changed)) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
});

reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
});

reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((self__.watches == null)){
} else {
cljs.core._notify_watches.call(null,this$__$1,oldval,newval);
}

self__.callback.call(null,newval);

return newval;
});

reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__4137__auto__ = self__.changed;
if(cljs.core.truth_(and__4137__auto__)){
return cljs.core.some_QMARK_.call(null,reagent.ratom._STAR_ratom_context_STAR_);
} else {
return and__4137__auto__;
}
})())){
if(typeof console !== 'undefined'){
console.warn([cljs.core.str("Warning: "),cljs.core.str("derefing stale wrap: "),cljs.core.str(cljs.core.pr_str.call(null,this$__$1))].join(''));
} else {
}
} else {
}


return self__.state;
});

reagent.ratom.Wrapper.cljs$lang$type = true;

reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper";

reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"reagent.ratom/Wrapper");
});

reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return (new reagent.ratom.Wrapper(value,(new reagent.impl.util.partial_ifn(callback_fn,args,null)),false,null));
});

//# sourceMappingURL=ratom.js.map?rel=1434562327563