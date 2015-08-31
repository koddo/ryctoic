// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t25343 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25343 = (function (fn_handler,f,meta25344){
this.fn_handler = fn_handler;
this.f = f;
this.meta25344 = meta25344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25345,meta25344__$1){
var self__ = this;
var _25345__$1 = this;
return (new cljs.core.async.t25343(self__.fn_handler,self__.f,meta25344__$1));
});

cljs.core.async.t25343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25345){
var self__ = this;
var _25345__$1 = this;
return self__.meta25344;
});

cljs.core.async.t25343.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25343.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25343.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta25344","meta25344",900865575,null)], null);
});

cljs.core.async.t25343.cljs$lang$type = true;

cljs.core.async.t25343.cljs$lang$ctorStr = "cljs.core.async/t25343";

cljs.core.async.t25343.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t25343");
});

cljs.core.async.__GT_t25343 = (function cljs$core$async$fn_handler_$___GT_t25343(fn_handler__$1,f__$1,meta25344){
return (new cljs.core.async.t25343(fn_handler__$1,f__$1,meta25344));
});

}

return (new cljs.core.async.t25343(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var args25348 = [];
var len__17511__auto___25351 = arguments.length;
var i__17512__auto___25352 = (0);
while(true){
if((i__17512__auto___25352 < len__17511__auto___25351)){
args25348.push((arguments[i__17512__auto___25352]));

var G__25353 = (i__17512__auto___25352 + (1));
i__17512__auto___25352 = G__25353;
continue;
} else {
}
break;
}

var G__25350 = args25348.length;
switch (G__25350) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25348.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var args25355 = [];
var len__17511__auto___25358 = arguments.length;
var i__17512__auto___25359 = (0);
while(true){
if((i__17512__auto___25359 < len__17511__auto___25358)){
args25355.push((arguments[i__17512__auto___25359]));

var G__25360 = (i__17512__auto___25359 + (1));
i__17512__auto___25359 = G__25360;
continue;
} else {
}
break;
}

var G__25357 = args25355.length;
switch (G__25357) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25355.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25362 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25362);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25362,ret){
return (function (){
return fn1.call(null,val_25362);
});})(val_25362,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var args25363 = [];
var len__17511__auto___25366 = arguments.length;
var i__17512__auto___25367 = (0);
while(true){
if((i__17512__auto___25367 < len__17511__auto___25366)){
args25363.push((arguments[i__17512__auto___25367]));

var G__25368 = (i__17512__auto___25367 + (1));
i__17512__auto___25367 = G__25368;
continue;
} else {
}
break;
}

var G__25365 = args25363.length;
switch (G__25365) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25363.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17356__auto___25370 = n;
var x_25371 = (0);
while(true){
if((x_25371 < n__17356__auto___25370)){
(a[x_25371] = (0));

var G__25372 = (x_25371 + (1));
x_25371 = G__25372;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25373 = (i + (1));
i = G__25373;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25377 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25377 = (function (alt_flag,flag,meta25378){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25378 = meta25378;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25379,meta25378__$1){
var self__ = this;
var _25379__$1 = this;
return (new cljs.core.async.t25377(self__.alt_flag,self__.flag,meta25378__$1));
});})(flag))
;

cljs.core.async.t25377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25379){
var self__ = this;
var _25379__$1 = this;
return self__.meta25378;
});})(flag))
;

cljs.core.async.t25377.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25377.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25377.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25377.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25378","meta25378",-1113961480,null)], null);
});})(flag))
;

cljs.core.async.t25377.cljs$lang$type = true;

cljs.core.async.t25377.cljs$lang$ctorStr = "cljs.core.async/t25377";

cljs.core.async.t25377.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t25377");
});})(flag))
;

cljs.core.async.__GT_t25377 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25377(alt_flag__$1,flag__$1,meta25378){
return (new cljs.core.async.t25377(alt_flag__$1,flag__$1,meta25378));
});})(flag))
;

}

return (new cljs.core.async.t25377(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25383 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25383 = (function (alt_handler,flag,cb,meta25384){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25384 = meta25384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t25383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25385,meta25384__$1){
var self__ = this;
var _25385__$1 = this;
return (new cljs.core.async.t25383(self__.alt_handler,self__.flag,self__.cb,meta25384__$1));
});

cljs.core.async.t25383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25385){
var self__ = this;
var _25385__$1 = this;
return self__.meta25384;
});

cljs.core.async.t25383.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25383.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25383.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25384","meta25384",-368864454,null)], null);
});

cljs.core.async.t25383.cljs$lang$type = true;

cljs.core.async.t25383.cljs$lang$ctorStr = "cljs.core.async/t25383";

cljs.core.async.t25383.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t25383");
});

cljs.core.async.__GT_t25383 = (function cljs$core$async$alt_handler_$___GT_t25383(alt_handler__$1,flag__$1,cb__$1,meta25384){
return (new cljs.core.async.t25383(alt_handler__$1,flag__$1,cb__$1,meta25384));
});

}

return (new cljs.core.async.t25383(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25386_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25386_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25387_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25387_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16472__auto__ = wport;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25388 = (i + (1));
i = G__25388;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16472__auto__ = ret;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16460__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16460__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var args__17518__auto__ = [];
var len__17511__auto___25394 = arguments.length;
var i__17512__auto___25395 = (0);
while(true){
if((i__17512__auto___25395 < len__17511__auto___25394)){
args__17518__auto__.push((arguments[i__17512__auto___25395]));

var G__25396 = (i__17512__auto___25395 + (1));
i__17512__auto___25395 = G__25396;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25391){
var map__25392 = p__25391;
var map__25392__$1 = ((((!((map__25392 == null)))?((((map__25392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25392):map__25392);
var opts = map__25392__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25389){
var G__25390 = cljs.core.first.call(null,seq25389);
var seq25389__$1 = cljs.core.next.call(null,seq25389);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25390,seq25389__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var args25397 = [];
var len__17511__auto___25447 = arguments.length;
var i__17512__auto___25448 = (0);
while(true){
if((i__17512__auto___25448 < len__17511__auto___25447)){
args25397.push((arguments[i__17512__auto___25448]));

var G__25449 = (i__17512__auto___25448 + (1));
i__17512__auto___25448 = G__25449;
continue;
} else {
}
break;
}

var G__25399 = args25397.length;
switch (G__25399) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25397.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19733__auto___25451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___25451){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___25451){
return (function (state_25423){
var state_val_25424 = (state_25423[(1)]);
if((state_val_25424 === (7))){
var inst_25419 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25425_25452 = state_25423__$1;
(statearr_25425_25452[(2)] = inst_25419);

(statearr_25425_25452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (1))){
var state_25423__$1 = state_25423;
var statearr_25426_25453 = state_25423__$1;
(statearr_25426_25453[(2)] = null);

(statearr_25426_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (4))){
var inst_25402 = (state_25423[(7)]);
var inst_25402__$1 = (state_25423[(2)]);
var inst_25403 = (inst_25402__$1 == null);
var state_25423__$1 = (function (){var statearr_25427 = state_25423;
(statearr_25427[(7)] = inst_25402__$1);

return statearr_25427;
})();
if(cljs.core.truth_(inst_25403)){
var statearr_25428_25454 = state_25423__$1;
(statearr_25428_25454[(1)] = (5));

} else {
var statearr_25429_25455 = state_25423__$1;
(statearr_25429_25455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (13))){
var state_25423__$1 = state_25423;
var statearr_25430_25456 = state_25423__$1;
(statearr_25430_25456[(2)] = null);

(statearr_25430_25456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (6))){
var inst_25402 = (state_25423[(7)]);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25423__$1,(11),to,inst_25402);
} else {
if((state_val_25424 === (3))){
var inst_25421 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25423__$1,inst_25421);
} else {
if((state_val_25424 === (12))){
var state_25423__$1 = state_25423;
var statearr_25431_25457 = state_25423__$1;
(statearr_25431_25457[(2)] = null);

(statearr_25431_25457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (2))){
var state_25423__$1 = state_25423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25423__$1,(4),from);
} else {
if((state_val_25424 === (11))){
var inst_25412 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
if(cljs.core.truth_(inst_25412)){
var statearr_25432_25458 = state_25423__$1;
(statearr_25432_25458[(1)] = (12));

} else {
var statearr_25433_25459 = state_25423__$1;
(statearr_25433_25459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (9))){
var state_25423__$1 = state_25423;
var statearr_25434_25460 = state_25423__$1;
(statearr_25434_25460[(2)] = null);

(statearr_25434_25460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (5))){
var state_25423__$1 = state_25423;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25435_25461 = state_25423__$1;
(statearr_25435_25461[(1)] = (8));

} else {
var statearr_25436_25462 = state_25423__$1;
(statearr_25436_25462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (14))){
var inst_25417 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25437_25463 = state_25423__$1;
(statearr_25437_25463[(2)] = inst_25417);

(statearr_25437_25463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (10))){
var inst_25409 = (state_25423[(2)]);
var state_25423__$1 = state_25423;
var statearr_25438_25464 = state_25423__$1;
(statearr_25438_25464[(2)] = inst_25409);

(statearr_25438_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25424 === (8))){
var inst_25406 = cljs.core.async.close_BANG_.call(null,to);
var state_25423__$1 = state_25423;
var statearr_25439_25465 = state_25423__$1;
(statearr_25439_25465[(2)] = inst_25406);

(statearr_25439_25465[(1)] = (10));


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
});})(c__19733__auto___25451))
;
return ((function (switch__19668__auto__,c__19733__auto___25451){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_25443 = [null,null,null,null,null,null,null,null];
(statearr_25443[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_25443[(1)] = (1));

return statearr_25443;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_25423){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25444){if((e25444 instanceof Object)){
var ex__19672__auto__ = e25444;
var statearr_25445_25466 = state_25423;
(statearr_25445_25466[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25467 = state_25423;
state_25423 = G__25467;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_25423){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_25423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___25451))
})();
var state__19735__auto__ = (function (){var statearr_25446 = f__19734__auto__.call(null);
(statearr_25446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___25451);

return statearr_25446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___25451))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25651){
var vec__25652 = p__25651;
var v = cljs.core.nth.call(null,vec__25652,(0),null);
var p = cljs.core.nth.call(null,vec__25652,(1),null);
var job = vec__25652;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19733__auto___25834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___25834,res,vec__25652,v,p,job,jobs,results){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___25834,res,vec__25652,v,p,job,jobs,results){
return (function (state_25657){
var state_val_25658 = (state_25657[(1)]);
if((state_val_25658 === (1))){
var state_25657__$1 = state_25657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25657__$1,(2),res,v);
} else {
if((state_val_25658 === (2))){
var inst_25654 = (state_25657[(2)]);
var inst_25655 = cljs.core.async.close_BANG_.call(null,res);
var state_25657__$1 = (function (){var statearr_25659 = state_25657;
(statearr_25659[(7)] = inst_25654);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25657__$1,inst_25655);
} else {
return null;
}
}
});})(c__19733__auto___25834,res,vec__25652,v,p,job,jobs,results))
;
return ((function (switch__19668__auto__,c__19733__auto___25834,res,vec__25652,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0 = (function (){
var statearr_25663 = [null,null,null,null,null,null,null,null];
(statearr_25663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__);

(statearr_25663[(1)] = (1));

return statearr_25663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1 = (function (state_25657){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25664){if((e25664 instanceof Object)){
var ex__19672__auto__ = e25664;
var statearr_25665_25835 = state_25657;
(statearr_25665_25835[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25836 = state_25657;
state_25657 = G__25836;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = function(state_25657){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1.call(this,state_25657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___25834,res,vec__25652,v,p,job,jobs,results))
})();
var state__19735__auto__ = (function (){var statearr_25666 = f__19734__auto__.call(null);
(statearr_25666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___25834);

return statearr_25666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___25834,res,vec__25652,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25667){
var vec__25668 = p__25667;
var v = cljs.core.nth.call(null,vec__25668,(0),null);
var p = cljs.core.nth.call(null,vec__25668,(1),null);
var job = vec__25668;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17356__auto___25837 = n;
var __25838 = (0);
while(true){
if((__25838 < n__17356__auto___25837)){
var G__25669_25839 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25669_25839) {
case "compute":
var c__19733__auto___25841 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25838,c__19733__auto___25841,G__25669_25839,n__17356__auto___25837,jobs,results,process,async){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (__25838,c__19733__auto___25841,G__25669_25839,n__17356__auto___25837,jobs,results,process,async){
return (function (state_25682){
var state_val_25683 = (state_25682[(1)]);
if((state_val_25683 === (1))){
var state_25682__$1 = state_25682;
var statearr_25684_25842 = state_25682__$1;
(statearr_25684_25842[(2)] = null);

(statearr_25684_25842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (2))){
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25682__$1,(4),jobs);
} else {
if((state_val_25683 === (3))){
var inst_25680 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25682__$1,inst_25680);
} else {
if((state_val_25683 === (4))){
var inst_25672 = (state_25682[(2)]);
var inst_25673 = process.call(null,inst_25672);
var state_25682__$1 = state_25682;
if(cljs.core.truth_(inst_25673)){
var statearr_25685_25843 = state_25682__$1;
(statearr_25685_25843[(1)] = (5));

} else {
var statearr_25686_25844 = state_25682__$1;
(statearr_25686_25844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (5))){
var state_25682__$1 = state_25682;
var statearr_25687_25845 = state_25682__$1;
(statearr_25687_25845[(2)] = null);

(statearr_25687_25845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (6))){
var state_25682__$1 = state_25682;
var statearr_25688_25846 = state_25682__$1;
(statearr_25688_25846[(2)] = null);

(statearr_25688_25846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25683 === (7))){
var inst_25678 = (state_25682[(2)]);
var state_25682__$1 = state_25682;
var statearr_25689_25847 = state_25682__$1;
(statearr_25689_25847[(2)] = inst_25678);

(statearr_25689_25847[(1)] = (3));


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
});})(__25838,c__19733__auto___25841,G__25669_25839,n__17356__auto___25837,jobs,results,process,async))
;
return ((function (__25838,switch__19668__auto__,c__19733__auto___25841,G__25669_25839,n__17356__auto___25837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0 = (function (){
var statearr_25693 = [null,null,null,null,null,null,null];
(statearr_25693[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__);

(statearr_25693[(1)] = (1));

return statearr_25693;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1 = (function (state_25682){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25694){if((e25694 instanceof Object)){
var ex__19672__auto__ = e25694;
var statearr_25695_25848 = state_25682;
(statearr_25695_25848[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25849 = state_25682;
state_25682 = G__25849;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = function(state_25682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1.call(this,state_25682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__;
})()
;})(__25838,switch__19668__auto__,c__19733__auto___25841,G__25669_25839,n__17356__auto___25837,jobs,results,process,async))
})();
var state__19735__auto__ = (function (){var statearr_25696 = f__19734__auto__.call(null);
(statearr_25696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___25841);

return statearr_25696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(__25838,c__19733__auto___25841,G__25669_25839,n__17356__auto___25837,jobs,results,process,async))
);


break;
case "async":
var c__19733__auto___25850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25838,c__19733__auto___25850,G__25669_25839,n__17356__auto___25837,jobs,results,process,async){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (__25838,c__19733__auto___25850,G__25669_25839,n__17356__auto___25837,jobs,results,process,async){
return (function (state_25709){
var state_val_25710 = (state_25709[(1)]);
if((state_val_25710 === (1))){
var state_25709__$1 = state_25709;
var statearr_25711_25851 = state_25709__$1;
(statearr_25711_25851[(2)] = null);

(statearr_25711_25851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (2))){
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25709__$1,(4),jobs);
} else {
if((state_val_25710 === (3))){
var inst_25707 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25709__$1,inst_25707);
} else {
if((state_val_25710 === (4))){
var inst_25699 = (state_25709[(2)]);
var inst_25700 = async.call(null,inst_25699);
var state_25709__$1 = state_25709;
if(cljs.core.truth_(inst_25700)){
var statearr_25712_25852 = state_25709__$1;
(statearr_25712_25852[(1)] = (5));

} else {
var statearr_25713_25853 = state_25709__$1;
(statearr_25713_25853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (5))){
var state_25709__$1 = state_25709;
var statearr_25714_25854 = state_25709__$1;
(statearr_25714_25854[(2)] = null);

(statearr_25714_25854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (6))){
var state_25709__$1 = state_25709;
var statearr_25715_25855 = state_25709__$1;
(statearr_25715_25855[(2)] = null);

(statearr_25715_25855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25710 === (7))){
var inst_25705 = (state_25709[(2)]);
var state_25709__$1 = state_25709;
var statearr_25716_25856 = state_25709__$1;
(statearr_25716_25856[(2)] = inst_25705);

(statearr_25716_25856[(1)] = (3));


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
});})(__25838,c__19733__auto___25850,G__25669_25839,n__17356__auto___25837,jobs,results,process,async))
;
return ((function (__25838,switch__19668__auto__,c__19733__auto___25850,G__25669_25839,n__17356__auto___25837,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0 = (function (){
var statearr_25720 = [null,null,null,null,null,null,null];
(statearr_25720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__);

(statearr_25720[(1)] = (1));

return statearr_25720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1 = (function (state_25709){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25721){if((e25721 instanceof Object)){
var ex__19672__auto__ = e25721;
var statearr_25722_25857 = state_25709;
(statearr_25722_25857[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25858 = state_25709;
state_25709 = G__25858;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = function(state_25709){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1.call(this,state_25709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__;
})()
;})(__25838,switch__19668__auto__,c__19733__auto___25850,G__25669_25839,n__17356__auto___25837,jobs,results,process,async))
})();
var state__19735__auto__ = (function (){var statearr_25723 = f__19734__auto__.call(null);
(statearr_25723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___25850);

return statearr_25723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(__25838,c__19733__auto___25850,G__25669_25839,n__17356__auto___25837,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25859 = (__25838 + (1));
__25838 = G__25859;
continue;
} else {
}
break;
}

var c__19733__auto___25860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___25860,jobs,results,process,async){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___25860,jobs,results,process,async){
return (function (state_25745){
var state_val_25746 = (state_25745[(1)]);
if((state_val_25746 === (1))){
var state_25745__$1 = state_25745;
var statearr_25747_25861 = state_25745__$1;
(statearr_25747_25861[(2)] = null);

(statearr_25747_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (2))){
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25745__$1,(4),from);
} else {
if((state_val_25746 === (3))){
var inst_25743 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25745__$1,inst_25743);
} else {
if((state_val_25746 === (4))){
var inst_25726 = (state_25745[(7)]);
var inst_25726__$1 = (state_25745[(2)]);
var inst_25727 = (inst_25726__$1 == null);
var state_25745__$1 = (function (){var statearr_25748 = state_25745;
(statearr_25748[(7)] = inst_25726__$1);

return statearr_25748;
})();
if(cljs.core.truth_(inst_25727)){
var statearr_25749_25862 = state_25745__$1;
(statearr_25749_25862[(1)] = (5));

} else {
var statearr_25750_25863 = state_25745__$1;
(statearr_25750_25863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (5))){
var inst_25729 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25745__$1 = state_25745;
var statearr_25751_25864 = state_25745__$1;
(statearr_25751_25864[(2)] = inst_25729);

(statearr_25751_25864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (6))){
var inst_25731 = (state_25745[(8)]);
var inst_25726 = (state_25745[(7)]);
var inst_25731__$1 = cljs.core.async.chan.call(null,(1));
var inst_25732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25733 = [inst_25726,inst_25731__$1];
var inst_25734 = (new cljs.core.PersistentVector(null,2,(5),inst_25732,inst_25733,null));
var state_25745__$1 = (function (){var statearr_25752 = state_25745;
(statearr_25752[(8)] = inst_25731__$1);

return statearr_25752;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25745__$1,(8),jobs,inst_25734);
} else {
if((state_val_25746 === (7))){
var inst_25741 = (state_25745[(2)]);
var state_25745__$1 = state_25745;
var statearr_25753_25865 = state_25745__$1;
(statearr_25753_25865[(2)] = inst_25741);

(statearr_25753_25865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25746 === (8))){
var inst_25731 = (state_25745[(8)]);
var inst_25736 = (state_25745[(2)]);
var state_25745__$1 = (function (){var statearr_25754 = state_25745;
(statearr_25754[(9)] = inst_25736);

return statearr_25754;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25745__$1,(9),results,inst_25731);
} else {
if((state_val_25746 === (9))){
var inst_25738 = (state_25745[(2)]);
var state_25745__$1 = (function (){var statearr_25755 = state_25745;
(statearr_25755[(10)] = inst_25738);

return statearr_25755;
})();
var statearr_25756_25866 = state_25745__$1;
(statearr_25756_25866[(2)] = null);

(statearr_25756_25866[(1)] = (2));


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
});})(c__19733__auto___25860,jobs,results,process,async))
;
return ((function (switch__19668__auto__,c__19733__auto___25860,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0 = (function (){
var statearr_25760 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__);

(statearr_25760[(1)] = (1));

return statearr_25760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1 = (function (state_25745){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25761){if((e25761 instanceof Object)){
var ex__19672__auto__ = e25761;
var statearr_25762_25867 = state_25745;
(statearr_25762_25867[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25868 = state_25745;
state_25745 = G__25868;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = function(state_25745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1.call(this,state_25745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___25860,jobs,results,process,async))
})();
var state__19735__auto__ = (function (){var statearr_25763 = f__19734__auto__.call(null);
(statearr_25763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___25860);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___25860,jobs,results,process,async))
);


var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__,jobs,results,process,async){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__,jobs,results,process,async){
return (function (state_25801){
var state_val_25802 = (state_25801[(1)]);
if((state_val_25802 === (7))){
var inst_25797 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25803_25869 = state_25801__$1;
(statearr_25803_25869[(2)] = inst_25797);

(statearr_25803_25869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (20))){
var state_25801__$1 = state_25801;
var statearr_25804_25870 = state_25801__$1;
(statearr_25804_25870[(2)] = null);

(statearr_25804_25870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (1))){
var state_25801__$1 = state_25801;
var statearr_25805_25871 = state_25801__$1;
(statearr_25805_25871[(2)] = null);

(statearr_25805_25871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (4))){
var inst_25766 = (state_25801[(7)]);
var inst_25766__$1 = (state_25801[(2)]);
var inst_25767 = (inst_25766__$1 == null);
var state_25801__$1 = (function (){var statearr_25806 = state_25801;
(statearr_25806[(7)] = inst_25766__$1);

return statearr_25806;
})();
if(cljs.core.truth_(inst_25767)){
var statearr_25807_25872 = state_25801__$1;
(statearr_25807_25872[(1)] = (5));

} else {
var statearr_25808_25873 = state_25801__$1;
(statearr_25808_25873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (15))){
var inst_25779 = (state_25801[(8)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25801__$1,(18),to,inst_25779);
} else {
if((state_val_25802 === (21))){
var inst_25792 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25809_25874 = state_25801__$1;
(statearr_25809_25874[(2)] = inst_25792);

(statearr_25809_25874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (13))){
var inst_25794 = (state_25801[(2)]);
var state_25801__$1 = (function (){var statearr_25810 = state_25801;
(statearr_25810[(9)] = inst_25794);

return statearr_25810;
})();
var statearr_25811_25875 = state_25801__$1;
(statearr_25811_25875[(2)] = null);

(statearr_25811_25875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (6))){
var inst_25766 = (state_25801[(7)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25801__$1,(11),inst_25766);
} else {
if((state_val_25802 === (17))){
var inst_25787 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
if(cljs.core.truth_(inst_25787)){
var statearr_25812_25876 = state_25801__$1;
(statearr_25812_25876[(1)] = (19));

} else {
var statearr_25813_25877 = state_25801__$1;
(statearr_25813_25877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (3))){
var inst_25799 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25801__$1,inst_25799);
} else {
if((state_val_25802 === (12))){
var inst_25776 = (state_25801[(10)]);
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25801__$1,(14),inst_25776);
} else {
if((state_val_25802 === (2))){
var state_25801__$1 = state_25801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25801__$1,(4),results);
} else {
if((state_val_25802 === (19))){
var state_25801__$1 = state_25801;
var statearr_25814_25878 = state_25801__$1;
(statearr_25814_25878[(2)] = null);

(statearr_25814_25878[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (11))){
var inst_25776 = (state_25801[(2)]);
var state_25801__$1 = (function (){var statearr_25815 = state_25801;
(statearr_25815[(10)] = inst_25776);

return statearr_25815;
})();
var statearr_25816_25879 = state_25801__$1;
(statearr_25816_25879[(2)] = null);

(statearr_25816_25879[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (9))){
var state_25801__$1 = state_25801;
var statearr_25817_25880 = state_25801__$1;
(statearr_25817_25880[(2)] = null);

(statearr_25817_25880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (5))){
var state_25801__$1 = state_25801;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25818_25881 = state_25801__$1;
(statearr_25818_25881[(1)] = (8));

} else {
var statearr_25819_25882 = state_25801__$1;
(statearr_25819_25882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (14))){
var inst_25781 = (state_25801[(11)]);
var inst_25779 = (state_25801[(8)]);
var inst_25779__$1 = (state_25801[(2)]);
var inst_25780 = (inst_25779__$1 == null);
var inst_25781__$1 = cljs.core.not.call(null,inst_25780);
var state_25801__$1 = (function (){var statearr_25820 = state_25801;
(statearr_25820[(11)] = inst_25781__$1);

(statearr_25820[(8)] = inst_25779__$1);

return statearr_25820;
})();
if(inst_25781__$1){
var statearr_25821_25883 = state_25801__$1;
(statearr_25821_25883[(1)] = (15));

} else {
var statearr_25822_25884 = state_25801__$1;
(statearr_25822_25884[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (16))){
var inst_25781 = (state_25801[(11)]);
var state_25801__$1 = state_25801;
var statearr_25823_25885 = state_25801__$1;
(statearr_25823_25885[(2)] = inst_25781);

(statearr_25823_25885[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (10))){
var inst_25773 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25824_25886 = state_25801__$1;
(statearr_25824_25886[(2)] = inst_25773);

(statearr_25824_25886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (18))){
var inst_25784 = (state_25801[(2)]);
var state_25801__$1 = state_25801;
var statearr_25825_25887 = state_25801__$1;
(statearr_25825_25887[(2)] = inst_25784);

(statearr_25825_25887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25802 === (8))){
var inst_25770 = cljs.core.async.close_BANG_.call(null,to);
var state_25801__$1 = state_25801;
var statearr_25826_25888 = state_25801__$1;
(statearr_25826_25888[(2)] = inst_25770);

(statearr_25826_25888[(1)] = (10));


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
});})(c__19733__auto__,jobs,results,process,async))
;
return ((function (switch__19668__auto__,c__19733__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0 = (function (){
var statearr_25830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__);

(statearr_25830[(1)] = (1));

return statearr_25830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1 = (function (state_25801){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25831){if((e25831 instanceof Object)){
var ex__19672__auto__ = e25831;
var statearr_25832_25889 = state_25801;
(statearr_25832_25889[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25890 = state_25801;
state_25801 = G__25890;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__ = function(state_25801){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1.call(this,state_25801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19669__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__,jobs,results,process,async))
})();
var state__19735__auto__ = (function (){var statearr_25833 = f__19734__auto__.call(null);
(statearr_25833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_25833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__,jobs,results,process,async))
);

return c__19733__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var args25891 = [];
var len__17511__auto___25894 = arguments.length;
var i__17512__auto___25895 = (0);
while(true){
if((i__17512__auto___25895 < len__17511__auto___25894)){
args25891.push((arguments[i__17512__auto___25895]));

var G__25896 = (i__17512__auto___25895 + (1));
i__17512__auto___25895 = G__25896;
continue;
} else {
}
break;
}

var G__25893 = args25891.length;
switch (G__25893) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25891.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var args25898 = [];
var len__17511__auto___25901 = arguments.length;
var i__17512__auto___25902 = (0);
while(true){
if((i__17512__auto___25902 < len__17511__auto___25901)){
args25898.push((arguments[i__17512__auto___25902]));

var G__25903 = (i__17512__auto___25902 + (1));
i__17512__auto___25902 = G__25903;
continue;
} else {
}
break;
}

var G__25900 = args25898.length;
switch (G__25900) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25898.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var args25905 = [];
var len__17511__auto___25958 = arguments.length;
var i__17512__auto___25959 = (0);
while(true){
if((i__17512__auto___25959 < len__17511__auto___25958)){
args25905.push((arguments[i__17512__auto___25959]));

var G__25960 = (i__17512__auto___25959 + (1));
i__17512__auto___25959 = G__25960;
continue;
} else {
}
break;
}

var G__25907 = args25905.length;
switch (G__25907) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25905.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19733__auto___25962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___25962,tc,fc){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___25962,tc,fc){
return (function (state_25933){
var state_val_25934 = (state_25933[(1)]);
if((state_val_25934 === (7))){
var inst_25929 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
var statearr_25935_25963 = state_25933__$1;
(statearr_25935_25963[(2)] = inst_25929);

(statearr_25935_25963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (1))){
var state_25933__$1 = state_25933;
var statearr_25936_25964 = state_25933__$1;
(statearr_25936_25964[(2)] = null);

(statearr_25936_25964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (4))){
var inst_25910 = (state_25933[(7)]);
var inst_25910__$1 = (state_25933[(2)]);
var inst_25911 = (inst_25910__$1 == null);
var state_25933__$1 = (function (){var statearr_25937 = state_25933;
(statearr_25937[(7)] = inst_25910__$1);

return statearr_25937;
})();
if(cljs.core.truth_(inst_25911)){
var statearr_25938_25965 = state_25933__$1;
(statearr_25938_25965[(1)] = (5));

} else {
var statearr_25939_25966 = state_25933__$1;
(statearr_25939_25966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (13))){
var state_25933__$1 = state_25933;
var statearr_25940_25967 = state_25933__$1;
(statearr_25940_25967[(2)] = null);

(statearr_25940_25967[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (6))){
var inst_25910 = (state_25933[(7)]);
var inst_25916 = p.call(null,inst_25910);
var state_25933__$1 = state_25933;
if(cljs.core.truth_(inst_25916)){
var statearr_25941_25968 = state_25933__$1;
(statearr_25941_25968[(1)] = (9));

} else {
var statearr_25942_25969 = state_25933__$1;
(statearr_25942_25969[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (3))){
var inst_25931 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25933__$1,inst_25931);
} else {
if((state_val_25934 === (12))){
var state_25933__$1 = state_25933;
var statearr_25943_25970 = state_25933__$1;
(statearr_25943_25970[(2)] = null);

(statearr_25943_25970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (2))){
var state_25933__$1 = state_25933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25933__$1,(4),ch);
} else {
if((state_val_25934 === (11))){
var inst_25910 = (state_25933[(7)]);
var inst_25920 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25933__$1,(8),inst_25920,inst_25910);
} else {
if((state_val_25934 === (9))){
var state_25933__$1 = state_25933;
var statearr_25944_25971 = state_25933__$1;
(statearr_25944_25971[(2)] = tc);

(statearr_25944_25971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (5))){
var inst_25913 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25914 = cljs.core.async.close_BANG_.call(null,fc);
var state_25933__$1 = (function (){var statearr_25945 = state_25933;
(statearr_25945[(8)] = inst_25913);

return statearr_25945;
})();
var statearr_25946_25972 = state_25933__$1;
(statearr_25946_25972[(2)] = inst_25914);

(statearr_25946_25972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (14))){
var inst_25927 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
var statearr_25947_25973 = state_25933__$1;
(statearr_25947_25973[(2)] = inst_25927);

(statearr_25947_25973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (10))){
var state_25933__$1 = state_25933;
var statearr_25948_25974 = state_25933__$1;
(statearr_25948_25974[(2)] = fc);

(statearr_25948_25974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25934 === (8))){
var inst_25922 = (state_25933[(2)]);
var state_25933__$1 = state_25933;
if(cljs.core.truth_(inst_25922)){
var statearr_25949_25975 = state_25933__$1;
(statearr_25949_25975[(1)] = (12));

} else {
var statearr_25950_25976 = state_25933__$1;
(statearr_25950_25976[(1)] = (13));

}

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
});})(c__19733__auto___25962,tc,fc))
;
return ((function (switch__19668__auto__,c__19733__auto___25962,tc,fc){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_25954 = [null,null,null,null,null,null,null,null,null];
(statearr_25954[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_25954[(1)] = (1));

return statearr_25954;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_25933){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_25933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e25955){if((e25955 instanceof Object)){
var ex__19672__auto__ = e25955;
var statearr_25956_25977 = state_25933;
(statearr_25956_25977[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25978 = state_25933;
state_25933 = G__25978;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_25933){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_25933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___25962,tc,fc))
})();
var state__19735__auto__ = (function (){var statearr_25957 = f__19734__auto__.call(null);
(statearr_25957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___25962);

return statearr_25957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___25962,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_26025){
var state_val_26026 = (state_26025[(1)]);
if((state_val_26026 === (1))){
var inst_26011 = init;
var state_26025__$1 = (function (){var statearr_26027 = state_26025;
(statearr_26027[(7)] = inst_26011);

return statearr_26027;
})();
var statearr_26028_26043 = state_26025__$1;
(statearr_26028_26043[(2)] = null);

(statearr_26028_26043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26026 === (2))){
var state_26025__$1 = state_26025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26025__$1,(4),ch);
} else {
if((state_val_26026 === (3))){
var inst_26023 = (state_26025[(2)]);
var state_26025__$1 = state_26025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26025__$1,inst_26023);
} else {
if((state_val_26026 === (4))){
var inst_26014 = (state_26025[(8)]);
var inst_26014__$1 = (state_26025[(2)]);
var inst_26015 = (inst_26014__$1 == null);
var state_26025__$1 = (function (){var statearr_26029 = state_26025;
(statearr_26029[(8)] = inst_26014__$1);

return statearr_26029;
})();
if(cljs.core.truth_(inst_26015)){
var statearr_26030_26044 = state_26025__$1;
(statearr_26030_26044[(1)] = (5));

} else {
var statearr_26031_26045 = state_26025__$1;
(statearr_26031_26045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26026 === (5))){
var inst_26011 = (state_26025[(7)]);
var state_26025__$1 = state_26025;
var statearr_26032_26046 = state_26025__$1;
(statearr_26032_26046[(2)] = inst_26011);

(statearr_26032_26046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26026 === (6))){
var inst_26014 = (state_26025[(8)]);
var inst_26011 = (state_26025[(7)]);
var inst_26018 = f.call(null,inst_26011,inst_26014);
var inst_26011__$1 = inst_26018;
var state_26025__$1 = (function (){var statearr_26033 = state_26025;
(statearr_26033[(7)] = inst_26011__$1);

return statearr_26033;
})();
var statearr_26034_26047 = state_26025__$1;
(statearr_26034_26047[(2)] = null);

(statearr_26034_26047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26026 === (7))){
var inst_26021 = (state_26025[(2)]);
var state_26025__$1 = state_26025;
var statearr_26035_26048 = state_26025__$1;
(statearr_26035_26048[(2)] = inst_26021);

(statearr_26035_26048[(1)] = (3));


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
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19669__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19669__auto____0 = (function (){
var statearr_26039 = [null,null,null,null,null,null,null,null,null];
(statearr_26039[(0)] = cljs$core$async$reduce_$_state_machine__19669__auto__);

(statearr_26039[(1)] = (1));

return statearr_26039;
});
var cljs$core$async$reduce_$_state_machine__19669__auto____1 = (function (state_26025){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_26025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e26040){if((e26040 instanceof Object)){
var ex__19672__auto__ = e26040;
var statearr_26041_26049 = state_26025;
(statearr_26041_26049[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26050 = state_26025;
state_26025 = G__26050;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19669__auto__ = function(state_26025){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19669__auto____1.call(this,state_26025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19669__auto____0;
cljs$core$async$reduce_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19669__auto____1;
return cljs$core$async$reduce_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_26042 = f__19734__auto__.call(null);
(statearr_26042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_26042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var args26051 = [];
var len__17511__auto___26103 = arguments.length;
var i__17512__auto___26104 = (0);
while(true){
if((i__17512__auto___26104 < len__17511__auto___26103)){
args26051.push((arguments[i__17512__auto___26104]));

var G__26105 = (i__17512__auto___26104 + (1));
i__17512__auto___26104 = G__26105;
continue;
} else {
}
break;
}

var G__26053 = args26051.length;
switch (G__26053) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26051.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (7))){
var inst_26060 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26080_26107 = state_26078__$1;
(statearr_26080_26107[(2)] = inst_26060);

(statearr_26080_26107[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (1))){
var inst_26054 = cljs.core.seq.call(null,coll);
var inst_26055 = inst_26054;
var state_26078__$1 = (function (){var statearr_26081 = state_26078;
(statearr_26081[(7)] = inst_26055);

return statearr_26081;
})();
var statearr_26082_26108 = state_26078__$1;
(statearr_26082_26108[(2)] = null);

(statearr_26082_26108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (4))){
var inst_26055 = (state_26078[(7)]);
var inst_26058 = cljs.core.first.call(null,inst_26055);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26078__$1,(7),ch,inst_26058);
} else {
if((state_val_26079 === (13))){
var inst_26072 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26083_26109 = state_26078__$1;
(statearr_26083_26109[(2)] = inst_26072);

(statearr_26083_26109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (6))){
var inst_26063 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26063)){
var statearr_26084_26110 = state_26078__$1;
(statearr_26084_26110[(1)] = (8));

} else {
var statearr_26085_26111 = state_26078__$1;
(statearr_26085_26111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (3))){
var inst_26076 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (12))){
var state_26078__$1 = state_26078;
var statearr_26086_26112 = state_26078__$1;
(statearr_26086_26112[(2)] = null);

(statearr_26086_26112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (2))){
var inst_26055 = (state_26078[(7)]);
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26055)){
var statearr_26087_26113 = state_26078__$1;
(statearr_26087_26113[(1)] = (4));

} else {
var statearr_26088_26114 = state_26078__$1;
(statearr_26088_26114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (11))){
var inst_26069 = cljs.core.async.close_BANG_.call(null,ch);
var state_26078__$1 = state_26078;
var statearr_26089_26115 = state_26078__$1;
(statearr_26089_26115[(2)] = inst_26069);

(statearr_26089_26115[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (9))){
var state_26078__$1 = state_26078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26090_26116 = state_26078__$1;
(statearr_26090_26116[(1)] = (11));

} else {
var statearr_26091_26117 = state_26078__$1;
(statearr_26091_26117[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (5))){
var inst_26055 = (state_26078[(7)]);
var state_26078__$1 = state_26078;
var statearr_26092_26118 = state_26078__$1;
(statearr_26092_26118[(2)] = inst_26055);

(statearr_26092_26118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (10))){
var inst_26074 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26093_26119 = state_26078__$1;
(statearr_26093_26119[(2)] = inst_26074);

(statearr_26093_26119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (8))){
var inst_26055 = (state_26078[(7)]);
var inst_26065 = cljs.core.next.call(null,inst_26055);
var inst_26055__$1 = inst_26065;
var state_26078__$1 = (function (){var statearr_26094 = state_26078;
(statearr_26094[(7)] = inst_26055__$1);

return statearr_26094;
})();
var statearr_26095_26120 = state_26078__$1;
(statearr_26095_26120[(2)] = null);

(statearr_26095_26120[(1)] = (2));


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
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_26099 = [null,null,null,null,null,null,null,null];
(statearr_26099[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_26099[(1)] = (1));

return statearr_26099;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_26078){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_26078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e26100){if((e26100 instanceof Object)){
var ex__19672__auto__ = e26100;
var statearr_26101_26121 = state_26078;
(statearr_26101_26121[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26122 = state_26078;
state_26078 = G__26122;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_26102 = f__19734__auto__.call(null);
(statearr_26102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_26102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = {};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17108__auto__ = (((_ == null))?null:_);
var m__17109__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,_);
} else {
var m__17109__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


cljs.core.async.Mult = {};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17109__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m);
} else {
var m__17109__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t26348 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26348 = (function (mult,ch,cs,meta26349){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26349 = meta26349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26350,meta26349__$1){
var self__ = this;
var _26350__$1 = this;
return (new cljs.core.async.t26348(self__.mult,self__.ch,self__.cs,meta26349__$1));
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26350){
var self__ = this;
var _26350__$1 = this;
return self__.meta26349;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26348.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26348.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26348.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26349","meta26349",-226815518,null)], null);
});})(cs))
;

cljs.core.async.t26348.cljs$lang$type = true;

cljs.core.async.t26348.cljs$lang$ctorStr = "cljs.core.async/t26348";

cljs.core.async.t26348.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t26348");
});})(cs))
;

cljs.core.async.__GT_t26348 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26348(mult__$1,ch__$1,cs__$1,meta26349){
return (new cljs.core.async.t26348(mult__$1,ch__$1,cs__$1,meta26349));
});})(cs))
;

}

return (new cljs.core.async.t26348(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19733__auto___26569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___26569,cs,m,dchan,dctr,done){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___26569,cs,m,dchan,dctr,done){
return (function (state_26481){
var state_val_26482 = (state_26481[(1)]);
if((state_val_26482 === (7))){
var inst_26477 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26483_26570 = state_26481__$1;
(statearr_26483_26570[(2)] = inst_26477);

(statearr_26483_26570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (20))){
var inst_26382 = (state_26481[(7)]);
var inst_26392 = cljs.core.first.call(null,inst_26382);
var inst_26393 = cljs.core.nth.call(null,inst_26392,(0),null);
var inst_26394 = cljs.core.nth.call(null,inst_26392,(1),null);
var state_26481__$1 = (function (){var statearr_26484 = state_26481;
(statearr_26484[(8)] = inst_26393);

return statearr_26484;
})();
if(cljs.core.truth_(inst_26394)){
var statearr_26485_26571 = state_26481__$1;
(statearr_26485_26571[(1)] = (22));

} else {
var statearr_26486_26572 = state_26481__$1;
(statearr_26486_26572[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (27))){
var inst_26353 = (state_26481[(9)]);
var inst_26424 = (state_26481[(10)]);
var inst_26422 = (state_26481[(11)]);
var inst_26429 = (state_26481[(12)]);
var inst_26429__$1 = cljs.core._nth.call(null,inst_26422,inst_26424);
var inst_26430 = cljs.core.async.put_BANG_.call(null,inst_26429__$1,inst_26353,done);
var state_26481__$1 = (function (){var statearr_26487 = state_26481;
(statearr_26487[(12)] = inst_26429__$1);

return statearr_26487;
})();
if(cljs.core.truth_(inst_26430)){
var statearr_26488_26573 = state_26481__$1;
(statearr_26488_26573[(1)] = (30));

} else {
var statearr_26489_26574 = state_26481__$1;
(statearr_26489_26574[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (1))){
var state_26481__$1 = state_26481;
var statearr_26490_26575 = state_26481__$1;
(statearr_26490_26575[(2)] = null);

(statearr_26490_26575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (24))){
var inst_26382 = (state_26481[(7)]);
var inst_26399 = (state_26481[(2)]);
var inst_26400 = cljs.core.next.call(null,inst_26382);
var inst_26362 = inst_26400;
var inst_26363 = null;
var inst_26364 = (0);
var inst_26365 = (0);
var state_26481__$1 = (function (){var statearr_26491 = state_26481;
(statearr_26491[(13)] = inst_26364);

(statearr_26491[(14)] = inst_26399);

(statearr_26491[(15)] = inst_26362);

(statearr_26491[(16)] = inst_26363);

(statearr_26491[(17)] = inst_26365);

return statearr_26491;
})();
var statearr_26492_26576 = state_26481__$1;
(statearr_26492_26576[(2)] = null);

(statearr_26492_26576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (39))){
var state_26481__$1 = state_26481;
var statearr_26496_26577 = state_26481__$1;
(statearr_26496_26577[(2)] = null);

(statearr_26496_26577[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (4))){
var inst_26353 = (state_26481[(9)]);
var inst_26353__$1 = (state_26481[(2)]);
var inst_26354 = (inst_26353__$1 == null);
var state_26481__$1 = (function (){var statearr_26497 = state_26481;
(statearr_26497[(9)] = inst_26353__$1);

return statearr_26497;
})();
if(cljs.core.truth_(inst_26354)){
var statearr_26498_26578 = state_26481__$1;
(statearr_26498_26578[(1)] = (5));

} else {
var statearr_26499_26579 = state_26481__$1;
(statearr_26499_26579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (15))){
var inst_26364 = (state_26481[(13)]);
var inst_26362 = (state_26481[(15)]);
var inst_26363 = (state_26481[(16)]);
var inst_26365 = (state_26481[(17)]);
var inst_26378 = (state_26481[(2)]);
var inst_26379 = (inst_26365 + (1));
var tmp26493 = inst_26364;
var tmp26494 = inst_26362;
var tmp26495 = inst_26363;
var inst_26362__$1 = tmp26494;
var inst_26363__$1 = tmp26495;
var inst_26364__$1 = tmp26493;
var inst_26365__$1 = inst_26379;
var state_26481__$1 = (function (){var statearr_26500 = state_26481;
(statearr_26500[(13)] = inst_26364__$1);

(statearr_26500[(18)] = inst_26378);

(statearr_26500[(15)] = inst_26362__$1);

(statearr_26500[(16)] = inst_26363__$1);

(statearr_26500[(17)] = inst_26365__$1);

return statearr_26500;
})();
var statearr_26501_26580 = state_26481__$1;
(statearr_26501_26580[(2)] = null);

(statearr_26501_26580[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (21))){
var inst_26403 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26505_26581 = state_26481__$1;
(statearr_26505_26581[(2)] = inst_26403);

(statearr_26505_26581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (31))){
var inst_26429 = (state_26481[(12)]);
var inst_26433 = done.call(null,null);
var inst_26434 = cljs.core.async.untap_STAR_.call(null,m,inst_26429);
var state_26481__$1 = (function (){var statearr_26506 = state_26481;
(statearr_26506[(19)] = inst_26433);

return statearr_26506;
})();
var statearr_26507_26582 = state_26481__$1;
(statearr_26507_26582[(2)] = inst_26434);

(statearr_26507_26582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (32))){
var inst_26423 = (state_26481[(20)]);
var inst_26424 = (state_26481[(10)]);
var inst_26421 = (state_26481[(21)]);
var inst_26422 = (state_26481[(11)]);
var inst_26436 = (state_26481[(2)]);
var inst_26437 = (inst_26424 + (1));
var tmp26502 = inst_26423;
var tmp26503 = inst_26421;
var tmp26504 = inst_26422;
var inst_26421__$1 = tmp26503;
var inst_26422__$1 = tmp26504;
var inst_26423__$1 = tmp26502;
var inst_26424__$1 = inst_26437;
var state_26481__$1 = (function (){var statearr_26508 = state_26481;
(statearr_26508[(20)] = inst_26423__$1);

(statearr_26508[(10)] = inst_26424__$1);

(statearr_26508[(21)] = inst_26421__$1);

(statearr_26508[(11)] = inst_26422__$1);

(statearr_26508[(22)] = inst_26436);

return statearr_26508;
})();
var statearr_26509_26583 = state_26481__$1;
(statearr_26509_26583[(2)] = null);

(statearr_26509_26583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (40))){
var inst_26449 = (state_26481[(23)]);
var inst_26453 = done.call(null,null);
var inst_26454 = cljs.core.async.untap_STAR_.call(null,m,inst_26449);
var state_26481__$1 = (function (){var statearr_26510 = state_26481;
(statearr_26510[(24)] = inst_26453);

return statearr_26510;
})();
var statearr_26511_26584 = state_26481__$1;
(statearr_26511_26584[(2)] = inst_26454);

(statearr_26511_26584[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (33))){
var inst_26440 = (state_26481[(25)]);
var inst_26442 = cljs.core.chunked_seq_QMARK_.call(null,inst_26440);
var state_26481__$1 = state_26481;
if(inst_26442){
var statearr_26512_26585 = state_26481__$1;
(statearr_26512_26585[(1)] = (36));

} else {
var statearr_26513_26586 = state_26481__$1;
(statearr_26513_26586[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (13))){
var inst_26372 = (state_26481[(26)]);
var inst_26375 = cljs.core.async.close_BANG_.call(null,inst_26372);
var state_26481__$1 = state_26481;
var statearr_26514_26587 = state_26481__$1;
(statearr_26514_26587[(2)] = inst_26375);

(statearr_26514_26587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (22))){
var inst_26393 = (state_26481[(8)]);
var inst_26396 = cljs.core.async.close_BANG_.call(null,inst_26393);
var state_26481__$1 = state_26481;
var statearr_26515_26588 = state_26481__$1;
(statearr_26515_26588[(2)] = inst_26396);

(statearr_26515_26588[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (36))){
var inst_26440 = (state_26481[(25)]);
var inst_26444 = cljs.core.chunk_first.call(null,inst_26440);
var inst_26445 = cljs.core.chunk_rest.call(null,inst_26440);
var inst_26446 = cljs.core.count.call(null,inst_26444);
var inst_26421 = inst_26445;
var inst_26422 = inst_26444;
var inst_26423 = inst_26446;
var inst_26424 = (0);
var state_26481__$1 = (function (){var statearr_26516 = state_26481;
(statearr_26516[(20)] = inst_26423);

(statearr_26516[(10)] = inst_26424);

(statearr_26516[(21)] = inst_26421);

(statearr_26516[(11)] = inst_26422);

return statearr_26516;
})();
var statearr_26517_26589 = state_26481__$1;
(statearr_26517_26589[(2)] = null);

(statearr_26517_26589[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (41))){
var inst_26440 = (state_26481[(25)]);
var inst_26456 = (state_26481[(2)]);
var inst_26457 = cljs.core.next.call(null,inst_26440);
var inst_26421 = inst_26457;
var inst_26422 = null;
var inst_26423 = (0);
var inst_26424 = (0);
var state_26481__$1 = (function (){var statearr_26518 = state_26481;
(statearr_26518[(20)] = inst_26423);

(statearr_26518[(10)] = inst_26424);

(statearr_26518[(21)] = inst_26421);

(statearr_26518[(11)] = inst_26422);

(statearr_26518[(27)] = inst_26456);

return statearr_26518;
})();
var statearr_26519_26590 = state_26481__$1;
(statearr_26519_26590[(2)] = null);

(statearr_26519_26590[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (43))){
var state_26481__$1 = state_26481;
var statearr_26520_26591 = state_26481__$1;
(statearr_26520_26591[(2)] = null);

(statearr_26520_26591[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (29))){
var inst_26465 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26521_26592 = state_26481__$1;
(statearr_26521_26592[(2)] = inst_26465);

(statearr_26521_26592[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (44))){
var inst_26474 = (state_26481[(2)]);
var state_26481__$1 = (function (){var statearr_26522 = state_26481;
(statearr_26522[(28)] = inst_26474);

return statearr_26522;
})();
var statearr_26523_26593 = state_26481__$1;
(statearr_26523_26593[(2)] = null);

(statearr_26523_26593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (6))){
var inst_26413 = (state_26481[(29)]);
var inst_26412 = cljs.core.deref.call(null,cs);
var inst_26413__$1 = cljs.core.keys.call(null,inst_26412);
var inst_26414 = cljs.core.count.call(null,inst_26413__$1);
var inst_26415 = cljs.core.reset_BANG_.call(null,dctr,inst_26414);
var inst_26420 = cljs.core.seq.call(null,inst_26413__$1);
var inst_26421 = inst_26420;
var inst_26422 = null;
var inst_26423 = (0);
var inst_26424 = (0);
var state_26481__$1 = (function (){var statearr_26524 = state_26481;
(statearr_26524[(20)] = inst_26423);

(statearr_26524[(10)] = inst_26424);

(statearr_26524[(21)] = inst_26421);

(statearr_26524[(29)] = inst_26413__$1);

(statearr_26524[(11)] = inst_26422);

(statearr_26524[(30)] = inst_26415);

return statearr_26524;
})();
var statearr_26525_26594 = state_26481__$1;
(statearr_26525_26594[(2)] = null);

(statearr_26525_26594[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (28))){
var inst_26440 = (state_26481[(25)]);
var inst_26421 = (state_26481[(21)]);
var inst_26440__$1 = cljs.core.seq.call(null,inst_26421);
var state_26481__$1 = (function (){var statearr_26526 = state_26481;
(statearr_26526[(25)] = inst_26440__$1);

return statearr_26526;
})();
if(inst_26440__$1){
var statearr_26527_26595 = state_26481__$1;
(statearr_26527_26595[(1)] = (33));

} else {
var statearr_26528_26596 = state_26481__$1;
(statearr_26528_26596[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (25))){
var inst_26423 = (state_26481[(20)]);
var inst_26424 = (state_26481[(10)]);
var inst_26426 = (inst_26424 < inst_26423);
var inst_26427 = inst_26426;
var state_26481__$1 = state_26481;
if(cljs.core.truth_(inst_26427)){
var statearr_26529_26597 = state_26481__$1;
(statearr_26529_26597[(1)] = (27));

} else {
var statearr_26530_26598 = state_26481__$1;
(statearr_26530_26598[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (34))){
var state_26481__$1 = state_26481;
var statearr_26531_26599 = state_26481__$1;
(statearr_26531_26599[(2)] = null);

(statearr_26531_26599[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (17))){
var state_26481__$1 = state_26481;
var statearr_26532_26600 = state_26481__$1;
(statearr_26532_26600[(2)] = null);

(statearr_26532_26600[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (3))){
var inst_26479 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26481__$1,inst_26479);
} else {
if((state_val_26482 === (12))){
var inst_26408 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26533_26601 = state_26481__$1;
(statearr_26533_26601[(2)] = inst_26408);

(statearr_26533_26601[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (2))){
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26481__$1,(4),ch);
} else {
if((state_val_26482 === (23))){
var state_26481__$1 = state_26481;
var statearr_26534_26602 = state_26481__$1;
(statearr_26534_26602[(2)] = null);

(statearr_26534_26602[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (35))){
var inst_26463 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26535_26603 = state_26481__$1;
(statearr_26535_26603[(2)] = inst_26463);

(statearr_26535_26603[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (19))){
var inst_26382 = (state_26481[(7)]);
var inst_26386 = cljs.core.chunk_first.call(null,inst_26382);
var inst_26387 = cljs.core.chunk_rest.call(null,inst_26382);
var inst_26388 = cljs.core.count.call(null,inst_26386);
var inst_26362 = inst_26387;
var inst_26363 = inst_26386;
var inst_26364 = inst_26388;
var inst_26365 = (0);
var state_26481__$1 = (function (){var statearr_26536 = state_26481;
(statearr_26536[(13)] = inst_26364);

(statearr_26536[(15)] = inst_26362);

(statearr_26536[(16)] = inst_26363);

(statearr_26536[(17)] = inst_26365);

return statearr_26536;
})();
var statearr_26537_26604 = state_26481__$1;
(statearr_26537_26604[(2)] = null);

(statearr_26537_26604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (11))){
var inst_26382 = (state_26481[(7)]);
var inst_26362 = (state_26481[(15)]);
var inst_26382__$1 = cljs.core.seq.call(null,inst_26362);
var state_26481__$1 = (function (){var statearr_26538 = state_26481;
(statearr_26538[(7)] = inst_26382__$1);

return statearr_26538;
})();
if(inst_26382__$1){
var statearr_26539_26605 = state_26481__$1;
(statearr_26539_26605[(1)] = (16));

} else {
var statearr_26540_26606 = state_26481__$1;
(statearr_26540_26606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (9))){
var inst_26410 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26541_26607 = state_26481__$1;
(statearr_26541_26607[(2)] = inst_26410);

(statearr_26541_26607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (5))){
var inst_26360 = cljs.core.deref.call(null,cs);
var inst_26361 = cljs.core.seq.call(null,inst_26360);
var inst_26362 = inst_26361;
var inst_26363 = null;
var inst_26364 = (0);
var inst_26365 = (0);
var state_26481__$1 = (function (){var statearr_26542 = state_26481;
(statearr_26542[(13)] = inst_26364);

(statearr_26542[(15)] = inst_26362);

(statearr_26542[(16)] = inst_26363);

(statearr_26542[(17)] = inst_26365);

return statearr_26542;
})();
var statearr_26543_26608 = state_26481__$1;
(statearr_26543_26608[(2)] = null);

(statearr_26543_26608[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (14))){
var state_26481__$1 = state_26481;
var statearr_26544_26609 = state_26481__$1;
(statearr_26544_26609[(2)] = null);

(statearr_26544_26609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (45))){
var inst_26471 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26545_26610 = state_26481__$1;
(statearr_26545_26610[(2)] = inst_26471);

(statearr_26545_26610[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (26))){
var inst_26413 = (state_26481[(29)]);
var inst_26467 = (state_26481[(2)]);
var inst_26468 = cljs.core.seq.call(null,inst_26413);
var state_26481__$1 = (function (){var statearr_26546 = state_26481;
(statearr_26546[(31)] = inst_26467);

return statearr_26546;
})();
if(inst_26468){
var statearr_26547_26611 = state_26481__$1;
(statearr_26547_26611[(1)] = (42));

} else {
var statearr_26548_26612 = state_26481__$1;
(statearr_26548_26612[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (16))){
var inst_26382 = (state_26481[(7)]);
var inst_26384 = cljs.core.chunked_seq_QMARK_.call(null,inst_26382);
var state_26481__$1 = state_26481;
if(inst_26384){
var statearr_26549_26613 = state_26481__$1;
(statearr_26549_26613[(1)] = (19));

} else {
var statearr_26550_26614 = state_26481__$1;
(statearr_26550_26614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (38))){
var inst_26460 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26551_26615 = state_26481__$1;
(statearr_26551_26615[(2)] = inst_26460);

(statearr_26551_26615[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (30))){
var state_26481__$1 = state_26481;
var statearr_26552_26616 = state_26481__$1;
(statearr_26552_26616[(2)] = null);

(statearr_26552_26616[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (10))){
var inst_26363 = (state_26481[(16)]);
var inst_26365 = (state_26481[(17)]);
var inst_26371 = cljs.core._nth.call(null,inst_26363,inst_26365);
var inst_26372 = cljs.core.nth.call(null,inst_26371,(0),null);
var inst_26373 = cljs.core.nth.call(null,inst_26371,(1),null);
var state_26481__$1 = (function (){var statearr_26553 = state_26481;
(statearr_26553[(26)] = inst_26372);

return statearr_26553;
})();
if(cljs.core.truth_(inst_26373)){
var statearr_26554_26617 = state_26481__$1;
(statearr_26554_26617[(1)] = (13));

} else {
var statearr_26555_26618 = state_26481__$1;
(statearr_26555_26618[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (18))){
var inst_26406 = (state_26481[(2)]);
var state_26481__$1 = state_26481;
var statearr_26556_26619 = state_26481__$1;
(statearr_26556_26619[(2)] = inst_26406);

(statearr_26556_26619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (42))){
var state_26481__$1 = state_26481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26481__$1,(45),dchan);
} else {
if((state_val_26482 === (37))){
var inst_26440 = (state_26481[(25)]);
var inst_26353 = (state_26481[(9)]);
var inst_26449 = (state_26481[(23)]);
var inst_26449__$1 = cljs.core.first.call(null,inst_26440);
var inst_26450 = cljs.core.async.put_BANG_.call(null,inst_26449__$1,inst_26353,done);
var state_26481__$1 = (function (){var statearr_26557 = state_26481;
(statearr_26557[(23)] = inst_26449__$1);

return statearr_26557;
})();
if(cljs.core.truth_(inst_26450)){
var statearr_26558_26620 = state_26481__$1;
(statearr_26558_26620[(1)] = (39));

} else {
var statearr_26559_26621 = state_26481__$1;
(statearr_26559_26621[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26482 === (8))){
var inst_26364 = (state_26481[(13)]);
var inst_26365 = (state_26481[(17)]);
var inst_26367 = (inst_26365 < inst_26364);
var inst_26368 = inst_26367;
var state_26481__$1 = state_26481;
if(cljs.core.truth_(inst_26368)){
var statearr_26560_26622 = state_26481__$1;
(statearr_26560_26622[(1)] = (10));

} else {
var statearr_26561_26623 = state_26481__$1;
(statearr_26561_26623[(1)] = (11));

}

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
});})(c__19733__auto___26569,cs,m,dchan,dctr,done))
;
return ((function (switch__19668__auto__,c__19733__auto___26569,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19669__auto__ = null;
var cljs$core$async$mult_$_state_machine__19669__auto____0 = (function (){
var statearr_26565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26565[(0)] = cljs$core$async$mult_$_state_machine__19669__auto__);

(statearr_26565[(1)] = (1));

return statearr_26565;
});
var cljs$core$async$mult_$_state_machine__19669__auto____1 = (function (state_26481){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_26481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e26566){if((e26566 instanceof Object)){
var ex__19672__auto__ = e26566;
var statearr_26567_26624 = state_26481;
(statearr_26567_26624[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26625 = state_26481;
state_26481 = G__26625;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19669__auto__ = function(state_26481){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19669__auto____1.call(this,state_26481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19669__auto____0;
cljs$core$async$mult_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19669__auto____1;
return cljs$core$async$mult_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___26569,cs,m,dchan,dctr,done))
})();
var state__19735__auto__ = (function (){var statearr_26568 = f__19734__auto__.call(null);
(statearr_26568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___26569);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___26569,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var args26626 = [];
var len__17511__auto___26629 = arguments.length;
var i__17512__auto___26630 = (0);
while(true){
if((i__17512__auto___26630 < len__17511__auto___26629)){
args26626.push((arguments[i__17512__auto___26630]));

var G__26631 = (i__17512__auto___26630 + (1));
i__17512__auto___26630 = G__26631;
continue;
} else {
}
break;
}

var G__26628 = args26626.length;
switch (G__26628) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26626.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = {};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m);
} else {
var m__17109__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,state_map);
} else {
var m__17109__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17108__auto__ = (((m == null))?null:m);
var m__17109__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,m,mode);
} else {
var m__17109__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var args__17518__auto__ = [];
var len__17511__auto___26645 = arguments.length;
var i__17512__auto___26646 = (0);
while(true){
if((i__17512__auto___26646 < len__17511__auto___26645)){
args__17518__auto__.push((arguments[i__17512__auto___26646]));

var G__26647 = (i__17512__auto___26646 + (1));
i__17512__auto___26646 = G__26647;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((3) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17519__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26639){
var map__26640 = p__26639;
var map__26640__$1 = ((((!((map__26640 == null)))?((((map__26640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26640):map__26640);
var opts = map__26640__$1;
var statearr_26642_26648 = state;
(statearr_26642_26648[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26640,map__26640__$1,opts){
return (function (val){
var statearr_26643_26649 = state;
(statearr_26643_26649[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26640,map__26640__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26644_26650 = state;
(statearr_26644_26650[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26635){
var G__26636 = cljs.core.first.call(null,seq26635);
var seq26635__$1 = cljs.core.next.call(null,seq26635);
var G__26637 = cljs.core.first.call(null,seq26635__$1);
var seq26635__$2 = cljs.core.next.call(null,seq26635__$1);
var G__26638 = cljs.core.first.call(null,seq26635__$2);
var seq26635__$3 = cljs.core.next.call(null,seq26635__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26636,G__26637,G__26638,seq26635__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26814 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26814 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26815){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26815 = meta26815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26816,meta26815__$1){
var self__ = this;
var _26816__$1 = this;
return (new cljs.core.async.t26814(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26815__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26816){
var self__ = this;
var _26816__$1 = this;
return self__.meta26815;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26814.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26815","meta26815",-401211573,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26814.cljs$lang$type = true;

cljs.core.async.t26814.cljs$lang$ctorStr = "cljs.core.async/t26814";

cljs.core.async.t26814.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t26814");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26814 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26814(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26815){
return (new cljs.core.async.t26814(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26815));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26814(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19733__auto___26977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___26977,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___26977,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26914){
var state_val_26915 = (state_26914[(1)]);
if((state_val_26915 === (7))){
var inst_26832 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26916_26978 = state_26914__$1;
(statearr_26916_26978[(2)] = inst_26832);

(statearr_26916_26978[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (20))){
var inst_26844 = (state_26914[(7)]);
var state_26914__$1 = state_26914;
var statearr_26917_26979 = state_26914__$1;
(statearr_26917_26979[(2)] = inst_26844);

(statearr_26917_26979[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (27))){
var state_26914__$1 = state_26914;
var statearr_26918_26980 = state_26914__$1;
(statearr_26918_26980[(2)] = null);

(statearr_26918_26980[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (1))){
var inst_26820 = (state_26914[(8)]);
var inst_26820__$1 = calc_state.call(null);
var inst_26822 = (inst_26820__$1 == null);
var inst_26823 = cljs.core.not.call(null,inst_26822);
var state_26914__$1 = (function (){var statearr_26919 = state_26914;
(statearr_26919[(8)] = inst_26820__$1);

return statearr_26919;
})();
if(inst_26823){
var statearr_26920_26981 = state_26914__$1;
(statearr_26920_26981[(1)] = (2));

} else {
var statearr_26921_26982 = state_26914__$1;
(statearr_26921_26982[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (24))){
var inst_26888 = (state_26914[(9)]);
var inst_26874 = (state_26914[(10)]);
var inst_26867 = (state_26914[(11)]);
var inst_26888__$1 = inst_26867.call(null,inst_26874);
var state_26914__$1 = (function (){var statearr_26922 = state_26914;
(statearr_26922[(9)] = inst_26888__$1);

return statearr_26922;
})();
if(cljs.core.truth_(inst_26888__$1)){
var statearr_26923_26983 = state_26914__$1;
(statearr_26923_26983[(1)] = (29));

} else {
var statearr_26924_26984 = state_26914__$1;
(statearr_26924_26984[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (4))){
var inst_26835 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26835)){
var statearr_26925_26985 = state_26914__$1;
(statearr_26925_26985[(1)] = (8));

} else {
var statearr_26926_26986 = state_26914__$1;
(statearr_26926_26986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (15))){
var inst_26861 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26861)){
var statearr_26927_26987 = state_26914__$1;
(statearr_26927_26987[(1)] = (19));

} else {
var statearr_26928_26988 = state_26914__$1;
(statearr_26928_26988[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (21))){
var inst_26866 = (state_26914[(12)]);
var inst_26866__$1 = (state_26914[(2)]);
var inst_26867 = cljs.core.get.call(null,inst_26866__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26868 = cljs.core.get.call(null,inst_26866__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26869 = cljs.core.get.call(null,inst_26866__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26914__$1 = (function (){var statearr_26929 = state_26914;
(statearr_26929[(13)] = inst_26868);

(statearr_26929[(12)] = inst_26866__$1);

(statearr_26929[(11)] = inst_26867);

return statearr_26929;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26914__$1,(22),inst_26869);
} else {
if((state_val_26915 === (31))){
var inst_26896 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26896)){
var statearr_26930_26989 = state_26914__$1;
(statearr_26930_26989[(1)] = (32));

} else {
var statearr_26931_26990 = state_26914__$1;
(statearr_26931_26990[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (32))){
var inst_26873 = (state_26914[(14)]);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26914__$1,(35),out,inst_26873);
} else {
if((state_val_26915 === (33))){
var inst_26866 = (state_26914[(12)]);
var inst_26844 = inst_26866;
var state_26914__$1 = (function (){var statearr_26932 = state_26914;
(statearr_26932[(7)] = inst_26844);

return statearr_26932;
})();
var statearr_26933_26991 = state_26914__$1;
(statearr_26933_26991[(2)] = null);

(statearr_26933_26991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (13))){
var inst_26844 = (state_26914[(7)]);
var inst_26851 = inst_26844.cljs$lang$protocol_mask$partition0$;
var inst_26852 = (inst_26851 & (64));
var inst_26853 = inst_26844.cljs$core$ISeq$;
var inst_26854 = (inst_26852) || (inst_26853);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26854)){
var statearr_26934_26992 = state_26914__$1;
(statearr_26934_26992[(1)] = (16));

} else {
var statearr_26935_26993 = state_26914__$1;
(statearr_26935_26993[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (22))){
var inst_26873 = (state_26914[(14)]);
var inst_26874 = (state_26914[(10)]);
var inst_26872 = (state_26914[(2)]);
var inst_26873__$1 = cljs.core.nth.call(null,inst_26872,(0),null);
var inst_26874__$1 = cljs.core.nth.call(null,inst_26872,(1),null);
var inst_26875 = (inst_26873__$1 == null);
var inst_26876 = cljs.core._EQ_.call(null,inst_26874__$1,change);
var inst_26877 = (inst_26875) || (inst_26876);
var state_26914__$1 = (function (){var statearr_26936 = state_26914;
(statearr_26936[(14)] = inst_26873__$1);

(statearr_26936[(10)] = inst_26874__$1);

return statearr_26936;
})();
if(cljs.core.truth_(inst_26877)){
var statearr_26937_26994 = state_26914__$1;
(statearr_26937_26994[(1)] = (23));

} else {
var statearr_26938_26995 = state_26914__$1;
(statearr_26938_26995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (36))){
var inst_26866 = (state_26914[(12)]);
var inst_26844 = inst_26866;
var state_26914__$1 = (function (){var statearr_26939 = state_26914;
(statearr_26939[(7)] = inst_26844);

return statearr_26939;
})();
var statearr_26940_26996 = state_26914__$1;
(statearr_26940_26996[(2)] = null);

(statearr_26940_26996[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (29))){
var inst_26888 = (state_26914[(9)]);
var state_26914__$1 = state_26914;
var statearr_26941_26997 = state_26914__$1;
(statearr_26941_26997[(2)] = inst_26888);

(statearr_26941_26997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (6))){
var state_26914__$1 = state_26914;
var statearr_26942_26998 = state_26914__$1;
(statearr_26942_26998[(2)] = false);

(statearr_26942_26998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (28))){
var inst_26884 = (state_26914[(2)]);
var inst_26885 = calc_state.call(null);
var inst_26844 = inst_26885;
var state_26914__$1 = (function (){var statearr_26943 = state_26914;
(statearr_26943[(7)] = inst_26844);

(statearr_26943[(15)] = inst_26884);

return statearr_26943;
})();
var statearr_26944_26999 = state_26914__$1;
(statearr_26944_26999[(2)] = null);

(statearr_26944_26999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (25))){
var inst_26910 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26945_27000 = state_26914__$1;
(statearr_26945_27000[(2)] = inst_26910);

(statearr_26945_27000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (34))){
var inst_26908 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26946_27001 = state_26914__$1;
(statearr_26946_27001[(2)] = inst_26908);

(statearr_26946_27001[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (17))){
var state_26914__$1 = state_26914;
var statearr_26947_27002 = state_26914__$1;
(statearr_26947_27002[(2)] = false);

(statearr_26947_27002[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (3))){
var state_26914__$1 = state_26914;
var statearr_26948_27003 = state_26914__$1;
(statearr_26948_27003[(2)] = false);

(statearr_26948_27003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (12))){
var inst_26912 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26914__$1,inst_26912);
} else {
if((state_val_26915 === (2))){
var inst_26820 = (state_26914[(8)]);
var inst_26825 = inst_26820.cljs$lang$protocol_mask$partition0$;
var inst_26826 = (inst_26825 & (64));
var inst_26827 = inst_26820.cljs$core$ISeq$;
var inst_26828 = (inst_26826) || (inst_26827);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26828)){
var statearr_26949_27004 = state_26914__$1;
(statearr_26949_27004[(1)] = (5));

} else {
var statearr_26950_27005 = state_26914__$1;
(statearr_26950_27005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (23))){
var inst_26873 = (state_26914[(14)]);
var inst_26879 = (inst_26873 == null);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26879)){
var statearr_26951_27006 = state_26914__$1;
(statearr_26951_27006[(1)] = (26));

} else {
var statearr_26952_27007 = state_26914__$1;
(statearr_26952_27007[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (35))){
var inst_26899 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26899)){
var statearr_26953_27008 = state_26914__$1;
(statearr_26953_27008[(1)] = (36));

} else {
var statearr_26954_27009 = state_26914__$1;
(statearr_26954_27009[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (19))){
var inst_26844 = (state_26914[(7)]);
var inst_26863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26844);
var state_26914__$1 = state_26914;
var statearr_26955_27010 = state_26914__$1;
(statearr_26955_27010[(2)] = inst_26863);

(statearr_26955_27010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (11))){
var inst_26844 = (state_26914[(7)]);
var inst_26848 = (inst_26844 == null);
var inst_26849 = cljs.core.not.call(null,inst_26848);
var state_26914__$1 = state_26914;
if(inst_26849){
var statearr_26956_27011 = state_26914__$1;
(statearr_26956_27011[(1)] = (13));

} else {
var statearr_26957_27012 = state_26914__$1;
(statearr_26957_27012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (9))){
var inst_26820 = (state_26914[(8)]);
var state_26914__$1 = state_26914;
var statearr_26958_27013 = state_26914__$1;
(statearr_26958_27013[(2)] = inst_26820);

(statearr_26958_27013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (5))){
var state_26914__$1 = state_26914;
var statearr_26959_27014 = state_26914__$1;
(statearr_26959_27014[(2)] = true);

(statearr_26959_27014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (14))){
var state_26914__$1 = state_26914;
var statearr_26960_27015 = state_26914__$1;
(statearr_26960_27015[(2)] = false);

(statearr_26960_27015[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (26))){
var inst_26874 = (state_26914[(10)]);
var inst_26881 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26874);
var state_26914__$1 = state_26914;
var statearr_26961_27016 = state_26914__$1;
(statearr_26961_27016[(2)] = inst_26881);

(statearr_26961_27016[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (16))){
var state_26914__$1 = state_26914;
var statearr_26962_27017 = state_26914__$1;
(statearr_26962_27017[(2)] = true);

(statearr_26962_27017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (38))){
var inst_26904 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26963_27018 = state_26914__$1;
(statearr_26963_27018[(2)] = inst_26904);

(statearr_26963_27018[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (30))){
var inst_26868 = (state_26914[(13)]);
var inst_26874 = (state_26914[(10)]);
var inst_26867 = (state_26914[(11)]);
var inst_26891 = cljs.core.empty_QMARK_.call(null,inst_26867);
var inst_26892 = inst_26868.call(null,inst_26874);
var inst_26893 = cljs.core.not.call(null,inst_26892);
var inst_26894 = (inst_26891) && (inst_26893);
var state_26914__$1 = state_26914;
var statearr_26964_27019 = state_26914__$1;
(statearr_26964_27019[(2)] = inst_26894);

(statearr_26964_27019[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (10))){
var inst_26820 = (state_26914[(8)]);
var inst_26840 = (state_26914[(2)]);
var inst_26841 = cljs.core.get.call(null,inst_26840,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26842 = cljs.core.get.call(null,inst_26840,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26843 = cljs.core.get.call(null,inst_26840,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26844 = inst_26820;
var state_26914__$1 = (function (){var statearr_26965 = state_26914;
(statearr_26965[(16)] = inst_26843);

(statearr_26965[(7)] = inst_26844);

(statearr_26965[(17)] = inst_26842);

(statearr_26965[(18)] = inst_26841);

return statearr_26965;
})();
var statearr_26966_27020 = state_26914__$1;
(statearr_26966_27020[(2)] = null);

(statearr_26966_27020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (18))){
var inst_26858 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26967_27021 = state_26914__$1;
(statearr_26967_27021[(2)] = inst_26858);

(statearr_26967_27021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (37))){
var state_26914__$1 = state_26914;
var statearr_26968_27022 = state_26914__$1;
(statearr_26968_27022[(2)] = null);

(statearr_26968_27022[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (8))){
var inst_26820 = (state_26914[(8)]);
var inst_26837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26820);
var state_26914__$1 = state_26914;
var statearr_26969_27023 = state_26914__$1;
(statearr_26969_27023[(2)] = inst_26837);

(statearr_26969_27023[(1)] = (10));


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
}
}
}
}
});})(c__19733__auto___26977,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19668__auto__,c__19733__auto___26977,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19669__auto__ = null;
var cljs$core$async$mix_$_state_machine__19669__auto____0 = (function (){
var statearr_26973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26973[(0)] = cljs$core$async$mix_$_state_machine__19669__auto__);

(statearr_26973[(1)] = (1));

return statearr_26973;
});
var cljs$core$async$mix_$_state_machine__19669__auto____1 = (function (state_26914){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_26914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e26974){if((e26974 instanceof Object)){
var ex__19672__auto__ = e26974;
var statearr_26975_27024 = state_26914;
(statearr_26975_27024[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27025 = state_26914;
state_26914 = G__27025;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19669__auto__ = function(state_26914){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19669__auto____1.call(this,state_26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19669__auto____0;
cljs$core$async$mix_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19669__auto____1;
return cljs$core$async$mix_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___26977,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19735__auto__ = (function (){var statearr_26976 = f__19734__auto__.call(null);
(statearr_26976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___26977);

return statearr_26976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___26977,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = {};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17109__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p,v,ch);
} else {
var m__17109__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var args27028 = [];
var len__17511__auto___27031 = arguments.length;
var i__17512__auto___27032 = (0);
while(true){
if((i__17512__auto___27032 < len__17511__auto___27031)){
args27028.push((arguments[i__17512__auto___27032]));

var G__27033 = (i__17512__auto___27032 + (1));
i__17512__auto___27032 = G__27033;
continue;
} else {
}
break;
}

var G__27030 = args27028.length;
switch (G__27030) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27028.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p);
} else {
var m__17109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17108__auto__ = (((p == null))?null:p);
var m__17109__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,p,v);
} else {
var m__17109__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var args27036 = [];
var len__17511__auto___27161 = arguments.length;
var i__17512__auto___27162 = (0);
while(true){
if((i__17512__auto___27162 < len__17511__auto___27161)){
args27036.push((arguments[i__17512__auto___27162]));

var G__27163 = (i__17512__auto___27162 + (1));
i__17512__auto___27162 = G__27163;
continue;
} else {
}
break;
}

var G__27038 = args27036.length;
switch (G__27038) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27036.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16472__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16472__auto__,mults){
return (function (p1__27035_SHARP_){
if(cljs.core.truth_(p1__27035_SHARP_.call(null,topic))){
return p1__27035_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27035_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16472__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27039 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27039 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27040){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27040 = meta27040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27041,meta27040__$1){
var self__ = this;
var _27041__$1 = this;
return (new cljs.core.async.t27039(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27040__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27041){
var self__ = this;
var _27041__$1 = this;
return self__.meta27040;
});})(mults,ensure_mult))
;

cljs.core.async.t27039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27039.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27039.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27039.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t27039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27039.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27039.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27040","meta27040",1996721353,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27039.cljs$lang$type = true;

cljs.core.async.t27039.cljs$lang$ctorStr = "cljs.core.async/t27039";

cljs.core.async.t27039.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27039");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27039 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27039(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27040){
return (new cljs.core.async.t27039(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27040));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27039(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19733__auto___27165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27165,mults,ensure_mult,p){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27165,mults,ensure_mult,p){
return (function (state_27113){
var state_val_27114 = (state_27113[(1)]);
if((state_val_27114 === (7))){
var inst_27109 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27115_27166 = state_27113__$1;
(statearr_27115_27166[(2)] = inst_27109);

(statearr_27115_27166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (20))){
var state_27113__$1 = state_27113;
var statearr_27116_27167 = state_27113__$1;
(statearr_27116_27167[(2)] = null);

(statearr_27116_27167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (1))){
var state_27113__$1 = state_27113;
var statearr_27117_27168 = state_27113__$1;
(statearr_27117_27168[(2)] = null);

(statearr_27117_27168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (24))){
var inst_27092 = (state_27113[(7)]);
var inst_27101 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27092);
var state_27113__$1 = state_27113;
var statearr_27118_27169 = state_27113__$1;
(statearr_27118_27169[(2)] = inst_27101);

(statearr_27118_27169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (4))){
var inst_27044 = (state_27113[(8)]);
var inst_27044__$1 = (state_27113[(2)]);
var inst_27045 = (inst_27044__$1 == null);
var state_27113__$1 = (function (){var statearr_27119 = state_27113;
(statearr_27119[(8)] = inst_27044__$1);

return statearr_27119;
})();
if(cljs.core.truth_(inst_27045)){
var statearr_27120_27170 = state_27113__$1;
(statearr_27120_27170[(1)] = (5));

} else {
var statearr_27121_27171 = state_27113__$1;
(statearr_27121_27171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (15))){
var inst_27086 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27122_27172 = state_27113__$1;
(statearr_27122_27172[(2)] = inst_27086);

(statearr_27122_27172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (21))){
var inst_27106 = (state_27113[(2)]);
var state_27113__$1 = (function (){var statearr_27123 = state_27113;
(statearr_27123[(9)] = inst_27106);

return statearr_27123;
})();
var statearr_27124_27173 = state_27113__$1;
(statearr_27124_27173[(2)] = null);

(statearr_27124_27173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (13))){
var inst_27068 = (state_27113[(10)]);
var inst_27070 = cljs.core.chunked_seq_QMARK_.call(null,inst_27068);
var state_27113__$1 = state_27113;
if(inst_27070){
var statearr_27125_27174 = state_27113__$1;
(statearr_27125_27174[(1)] = (16));

} else {
var statearr_27126_27175 = state_27113__$1;
(statearr_27126_27175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (22))){
var inst_27098 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27098)){
var statearr_27127_27176 = state_27113__$1;
(statearr_27127_27176[(1)] = (23));

} else {
var statearr_27128_27177 = state_27113__$1;
(statearr_27128_27177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (6))){
var inst_27094 = (state_27113[(11)]);
var inst_27092 = (state_27113[(7)]);
var inst_27044 = (state_27113[(8)]);
var inst_27092__$1 = topic_fn.call(null,inst_27044);
var inst_27093 = cljs.core.deref.call(null,mults);
var inst_27094__$1 = cljs.core.get.call(null,inst_27093,inst_27092__$1);
var state_27113__$1 = (function (){var statearr_27129 = state_27113;
(statearr_27129[(11)] = inst_27094__$1);

(statearr_27129[(7)] = inst_27092__$1);

return statearr_27129;
})();
if(cljs.core.truth_(inst_27094__$1)){
var statearr_27130_27178 = state_27113__$1;
(statearr_27130_27178[(1)] = (19));

} else {
var statearr_27131_27179 = state_27113__$1;
(statearr_27131_27179[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (25))){
var inst_27103 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27132_27180 = state_27113__$1;
(statearr_27132_27180[(2)] = inst_27103);

(statearr_27132_27180[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (17))){
var inst_27068 = (state_27113[(10)]);
var inst_27077 = cljs.core.first.call(null,inst_27068);
var inst_27078 = cljs.core.async.muxch_STAR_.call(null,inst_27077);
var inst_27079 = cljs.core.async.close_BANG_.call(null,inst_27078);
var inst_27080 = cljs.core.next.call(null,inst_27068);
var inst_27054 = inst_27080;
var inst_27055 = null;
var inst_27056 = (0);
var inst_27057 = (0);
var state_27113__$1 = (function (){var statearr_27133 = state_27113;
(statearr_27133[(12)] = inst_27055);

(statearr_27133[(13)] = inst_27056);

(statearr_27133[(14)] = inst_27057);

(statearr_27133[(15)] = inst_27079);

(statearr_27133[(16)] = inst_27054);

return statearr_27133;
})();
var statearr_27134_27181 = state_27113__$1;
(statearr_27134_27181[(2)] = null);

(statearr_27134_27181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (3))){
var inst_27111 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else {
if((state_val_27114 === (12))){
var inst_27088 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27135_27182 = state_27113__$1;
(statearr_27135_27182[(2)] = inst_27088);

(statearr_27135_27182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (2))){
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,(4),ch);
} else {
if((state_val_27114 === (23))){
var state_27113__$1 = state_27113;
var statearr_27136_27183 = state_27113__$1;
(statearr_27136_27183[(2)] = null);

(statearr_27136_27183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (19))){
var inst_27094 = (state_27113[(11)]);
var inst_27044 = (state_27113[(8)]);
var inst_27096 = cljs.core.async.muxch_STAR_.call(null,inst_27094);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(22),inst_27096,inst_27044);
} else {
if((state_val_27114 === (11))){
var inst_27068 = (state_27113[(10)]);
var inst_27054 = (state_27113[(16)]);
var inst_27068__$1 = cljs.core.seq.call(null,inst_27054);
var state_27113__$1 = (function (){var statearr_27137 = state_27113;
(statearr_27137[(10)] = inst_27068__$1);

return statearr_27137;
})();
if(inst_27068__$1){
var statearr_27138_27184 = state_27113__$1;
(statearr_27138_27184[(1)] = (13));

} else {
var statearr_27139_27185 = state_27113__$1;
(statearr_27139_27185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (9))){
var inst_27090 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27140_27186 = state_27113__$1;
(statearr_27140_27186[(2)] = inst_27090);

(statearr_27140_27186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (5))){
var inst_27051 = cljs.core.deref.call(null,mults);
var inst_27052 = cljs.core.vals.call(null,inst_27051);
var inst_27053 = cljs.core.seq.call(null,inst_27052);
var inst_27054 = inst_27053;
var inst_27055 = null;
var inst_27056 = (0);
var inst_27057 = (0);
var state_27113__$1 = (function (){var statearr_27141 = state_27113;
(statearr_27141[(12)] = inst_27055);

(statearr_27141[(13)] = inst_27056);

(statearr_27141[(14)] = inst_27057);

(statearr_27141[(16)] = inst_27054);

return statearr_27141;
})();
var statearr_27142_27187 = state_27113__$1;
(statearr_27142_27187[(2)] = null);

(statearr_27142_27187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (14))){
var state_27113__$1 = state_27113;
var statearr_27146_27188 = state_27113__$1;
(statearr_27146_27188[(2)] = null);

(statearr_27146_27188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (16))){
var inst_27068 = (state_27113[(10)]);
var inst_27072 = cljs.core.chunk_first.call(null,inst_27068);
var inst_27073 = cljs.core.chunk_rest.call(null,inst_27068);
var inst_27074 = cljs.core.count.call(null,inst_27072);
var inst_27054 = inst_27073;
var inst_27055 = inst_27072;
var inst_27056 = inst_27074;
var inst_27057 = (0);
var state_27113__$1 = (function (){var statearr_27147 = state_27113;
(statearr_27147[(12)] = inst_27055);

(statearr_27147[(13)] = inst_27056);

(statearr_27147[(14)] = inst_27057);

(statearr_27147[(16)] = inst_27054);

return statearr_27147;
})();
var statearr_27148_27189 = state_27113__$1;
(statearr_27148_27189[(2)] = null);

(statearr_27148_27189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (10))){
var inst_27055 = (state_27113[(12)]);
var inst_27056 = (state_27113[(13)]);
var inst_27057 = (state_27113[(14)]);
var inst_27054 = (state_27113[(16)]);
var inst_27062 = cljs.core._nth.call(null,inst_27055,inst_27057);
var inst_27063 = cljs.core.async.muxch_STAR_.call(null,inst_27062);
var inst_27064 = cljs.core.async.close_BANG_.call(null,inst_27063);
var inst_27065 = (inst_27057 + (1));
var tmp27143 = inst_27055;
var tmp27144 = inst_27056;
var tmp27145 = inst_27054;
var inst_27054__$1 = tmp27145;
var inst_27055__$1 = tmp27143;
var inst_27056__$1 = tmp27144;
var inst_27057__$1 = inst_27065;
var state_27113__$1 = (function (){var statearr_27149 = state_27113;
(statearr_27149[(12)] = inst_27055__$1);

(statearr_27149[(17)] = inst_27064);

(statearr_27149[(13)] = inst_27056__$1);

(statearr_27149[(14)] = inst_27057__$1);

(statearr_27149[(16)] = inst_27054__$1);

return statearr_27149;
})();
var statearr_27150_27190 = state_27113__$1;
(statearr_27150_27190[(2)] = null);

(statearr_27150_27190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (18))){
var inst_27083 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27151_27191 = state_27113__$1;
(statearr_27151_27191[(2)] = inst_27083);

(statearr_27151_27191[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (8))){
var inst_27056 = (state_27113[(13)]);
var inst_27057 = (state_27113[(14)]);
var inst_27059 = (inst_27057 < inst_27056);
var inst_27060 = inst_27059;
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27060)){
var statearr_27152_27192 = state_27113__$1;
(statearr_27152_27192[(1)] = (10));

} else {
var statearr_27153_27193 = state_27113__$1;
(statearr_27153_27193[(1)] = (11));

}

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
});})(c__19733__auto___27165,mults,ensure_mult,p))
;
return ((function (switch__19668__auto__,c__19733__auto___27165,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27157[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27157[(1)] = (1));

return statearr_27157;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27113){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27158){if((e27158 instanceof Object)){
var ex__19672__auto__ = e27158;
var statearr_27159_27194 = state_27113;
(statearr_27159_27194[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27195 = state_27113;
state_27113 = G__27195;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27165,mults,ensure_mult,p))
})();
var state__19735__auto__ = (function (){var statearr_27160 = f__19734__auto__.call(null);
(statearr_27160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27165);

return statearr_27160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27165,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var args27196 = [];
var len__17511__auto___27199 = arguments.length;
var i__17512__auto___27200 = (0);
while(true){
if((i__17512__auto___27200 < len__17511__auto___27199)){
args27196.push((arguments[i__17512__auto___27200]));

var G__27201 = (i__17512__auto___27200 + (1));
i__17512__auto___27200 = G__27201;
continue;
} else {
}
break;
}

var G__27198 = args27196.length;
switch (G__27198) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27196.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var args27203 = [];
var len__17511__auto___27206 = arguments.length;
var i__17512__auto___27207 = (0);
while(true){
if((i__17512__auto___27207 < len__17511__auto___27206)){
args27203.push((arguments[i__17512__auto___27207]));

var G__27208 = (i__17512__auto___27207 + (1));
i__17512__auto___27207 = G__27208;
continue;
} else {
}
break;
}

var G__27205 = args27203.length;
switch (G__27205) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27203.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var args27210 = [];
var len__17511__auto___27281 = arguments.length;
var i__17512__auto___27282 = (0);
while(true){
if((i__17512__auto___27282 < len__17511__auto___27281)){
args27210.push((arguments[i__17512__auto___27282]));

var G__27283 = (i__17512__auto___27282 + (1));
i__17512__auto___27282 = G__27283;
continue;
} else {
}
break;
}

var G__27212 = args27210.length;
switch (G__27212) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27210.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19733__auto___27285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27251){
var state_val_27252 = (state_27251[(1)]);
if((state_val_27252 === (7))){
var state_27251__$1 = state_27251;
var statearr_27253_27286 = state_27251__$1;
(statearr_27253_27286[(2)] = null);

(statearr_27253_27286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (1))){
var state_27251__$1 = state_27251;
var statearr_27254_27287 = state_27251__$1;
(statearr_27254_27287[(2)] = null);

(statearr_27254_27287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (4))){
var inst_27215 = (state_27251[(7)]);
var inst_27217 = (inst_27215 < cnt);
var state_27251__$1 = state_27251;
if(cljs.core.truth_(inst_27217)){
var statearr_27255_27288 = state_27251__$1;
(statearr_27255_27288[(1)] = (6));

} else {
var statearr_27256_27289 = state_27251__$1;
(statearr_27256_27289[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (15))){
var inst_27247 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27257_27290 = state_27251__$1;
(statearr_27257_27290[(2)] = inst_27247);

(statearr_27257_27290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (13))){
var inst_27240 = cljs.core.async.close_BANG_.call(null,out);
var state_27251__$1 = state_27251;
var statearr_27258_27291 = state_27251__$1;
(statearr_27258_27291[(2)] = inst_27240);

(statearr_27258_27291[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (6))){
var state_27251__$1 = state_27251;
var statearr_27259_27292 = state_27251__$1;
(statearr_27259_27292[(2)] = null);

(statearr_27259_27292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (3))){
var inst_27249 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27251__$1,inst_27249);
} else {
if((state_val_27252 === (12))){
var inst_27237 = (state_27251[(8)]);
var inst_27237__$1 = (state_27251[(2)]);
var inst_27238 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27237__$1);
var state_27251__$1 = (function (){var statearr_27260 = state_27251;
(statearr_27260[(8)] = inst_27237__$1);

return statearr_27260;
})();
if(cljs.core.truth_(inst_27238)){
var statearr_27261_27293 = state_27251__$1;
(statearr_27261_27293[(1)] = (13));

} else {
var statearr_27262_27294 = state_27251__$1;
(statearr_27262_27294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (2))){
var inst_27214 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27215 = (0);
var state_27251__$1 = (function (){var statearr_27263 = state_27251;
(statearr_27263[(9)] = inst_27214);

(statearr_27263[(7)] = inst_27215);

return statearr_27263;
})();
var statearr_27264_27295 = state_27251__$1;
(statearr_27264_27295[(2)] = null);

(statearr_27264_27295[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (11))){
var inst_27215 = (state_27251[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27251,(10),Object,null,(9));
var inst_27224 = chs__$1.call(null,inst_27215);
var inst_27225 = done.call(null,inst_27215);
var inst_27226 = cljs.core.async.take_BANG_.call(null,inst_27224,inst_27225);
var state_27251__$1 = state_27251;
var statearr_27265_27296 = state_27251__$1;
(statearr_27265_27296[(2)] = inst_27226);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (9))){
var inst_27215 = (state_27251[(7)]);
var inst_27228 = (state_27251[(2)]);
var inst_27229 = (inst_27215 + (1));
var inst_27215__$1 = inst_27229;
var state_27251__$1 = (function (){var statearr_27266 = state_27251;
(statearr_27266[(7)] = inst_27215__$1);

(statearr_27266[(10)] = inst_27228);

return statearr_27266;
})();
var statearr_27267_27297 = state_27251__$1;
(statearr_27267_27297[(2)] = null);

(statearr_27267_27297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (5))){
var inst_27235 = (state_27251[(2)]);
var state_27251__$1 = (function (){var statearr_27268 = state_27251;
(statearr_27268[(11)] = inst_27235);

return statearr_27268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27251__$1,(12),dchan);
} else {
if((state_val_27252 === (14))){
var inst_27237 = (state_27251[(8)]);
var inst_27242 = cljs.core.apply.call(null,f,inst_27237);
var state_27251__$1 = state_27251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27251__$1,(16),out,inst_27242);
} else {
if((state_val_27252 === (16))){
var inst_27244 = (state_27251[(2)]);
var state_27251__$1 = (function (){var statearr_27269 = state_27251;
(statearr_27269[(12)] = inst_27244);

return statearr_27269;
})();
var statearr_27270_27298 = state_27251__$1;
(statearr_27270_27298[(2)] = null);

(statearr_27270_27298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (10))){
var inst_27219 = (state_27251[(2)]);
var inst_27220 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27251__$1 = (function (){var statearr_27271 = state_27251;
(statearr_27271[(13)] = inst_27219);

return statearr_27271;
})();
var statearr_27272_27299 = state_27251__$1;
(statearr_27272_27299[(2)] = inst_27220);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27252 === (8))){
var inst_27233 = (state_27251[(2)]);
var state_27251__$1 = state_27251;
var statearr_27273_27300 = state_27251__$1;
(statearr_27273_27300[(2)] = inst_27233);

(statearr_27273_27300[(1)] = (5));


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
});})(c__19733__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19668__auto__,c__19733__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27277[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27277[(1)] = (1));

return statearr_27277;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27251){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27278){if((e27278 instanceof Object)){
var ex__19672__auto__ = e27278;
var statearr_27279_27301 = state_27251;
(statearr_27279_27301[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27302 = state_27251;
state_27251 = G__27302;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19735__auto__ = (function (){var statearr_27280 = f__19734__auto__.call(null);
(statearr_27280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27285);

return statearr_27280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27285,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var args27304 = [];
var len__17511__auto___27360 = arguments.length;
var i__17512__auto___27361 = (0);
while(true){
if((i__17512__auto___27361 < len__17511__auto___27360)){
args27304.push((arguments[i__17512__auto___27361]));

var G__27362 = (i__17512__auto___27361 + (1));
i__17512__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var G__27306 = args27304.length;
switch (G__27306) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27304.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19733__auto___27364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27364,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27364,out){
return (function (state_27336){
var state_val_27337 = (state_27336[(1)]);
if((state_val_27337 === (7))){
var inst_27316 = (state_27336[(7)]);
var inst_27315 = (state_27336[(8)]);
var inst_27315__$1 = (state_27336[(2)]);
var inst_27316__$1 = cljs.core.nth.call(null,inst_27315__$1,(0),null);
var inst_27317 = cljs.core.nth.call(null,inst_27315__$1,(1),null);
var inst_27318 = (inst_27316__$1 == null);
var state_27336__$1 = (function (){var statearr_27338 = state_27336;
(statearr_27338[(7)] = inst_27316__$1);

(statearr_27338[(9)] = inst_27317);

(statearr_27338[(8)] = inst_27315__$1);

return statearr_27338;
})();
if(cljs.core.truth_(inst_27318)){
var statearr_27339_27365 = state_27336__$1;
(statearr_27339_27365[(1)] = (8));

} else {
var statearr_27340_27366 = state_27336__$1;
(statearr_27340_27366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (1))){
var inst_27307 = cljs.core.vec.call(null,chs);
var inst_27308 = inst_27307;
var state_27336__$1 = (function (){var statearr_27341 = state_27336;
(statearr_27341[(10)] = inst_27308);

return statearr_27341;
})();
var statearr_27342_27367 = state_27336__$1;
(statearr_27342_27367[(2)] = null);

(statearr_27342_27367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (4))){
var inst_27308 = (state_27336[(10)]);
var state_27336__$1 = state_27336;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27336__$1,(7),inst_27308);
} else {
if((state_val_27337 === (6))){
var inst_27332 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
var statearr_27343_27368 = state_27336__$1;
(statearr_27343_27368[(2)] = inst_27332);

(statearr_27343_27368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (3))){
var inst_27334 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27336__$1,inst_27334);
} else {
if((state_val_27337 === (2))){
var inst_27308 = (state_27336[(10)]);
var inst_27310 = cljs.core.count.call(null,inst_27308);
var inst_27311 = (inst_27310 > (0));
var state_27336__$1 = state_27336;
if(cljs.core.truth_(inst_27311)){
var statearr_27345_27369 = state_27336__$1;
(statearr_27345_27369[(1)] = (4));

} else {
var statearr_27346_27370 = state_27336__$1;
(statearr_27346_27370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (11))){
var inst_27308 = (state_27336[(10)]);
var inst_27325 = (state_27336[(2)]);
var tmp27344 = inst_27308;
var inst_27308__$1 = tmp27344;
var state_27336__$1 = (function (){var statearr_27347 = state_27336;
(statearr_27347[(10)] = inst_27308__$1);

(statearr_27347[(11)] = inst_27325);

return statearr_27347;
})();
var statearr_27348_27371 = state_27336__$1;
(statearr_27348_27371[(2)] = null);

(statearr_27348_27371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (9))){
var inst_27316 = (state_27336[(7)]);
var state_27336__$1 = state_27336;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27336__$1,(11),out,inst_27316);
} else {
if((state_val_27337 === (5))){
var inst_27330 = cljs.core.async.close_BANG_.call(null,out);
var state_27336__$1 = state_27336;
var statearr_27349_27372 = state_27336__$1;
(statearr_27349_27372[(2)] = inst_27330);

(statearr_27349_27372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (10))){
var inst_27328 = (state_27336[(2)]);
var state_27336__$1 = state_27336;
var statearr_27350_27373 = state_27336__$1;
(statearr_27350_27373[(2)] = inst_27328);

(statearr_27350_27373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27337 === (8))){
var inst_27308 = (state_27336[(10)]);
var inst_27316 = (state_27336[(7)]);
var inst_27317 = (state_27336[(9)]);
var inst_27315 = (state_27336[(8)]);
var inst_27320 = (function (){var cs = inst_27308;
var vec__27313 = inst_27315;
var v = inst_27316;
var c = inst_27317;
return ((function (cs,vec__27313,v,c,inst_27308,inst_27316,inst_27317,inst_27315,state_val_27337,c__19733__auto___27364,out){
return (function (p1__27303_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27303_SHARP_);
});
;})(cs,vec__27313,v,c,inst_27308,inst_27316,inst_27317,inst_27315,state_val_27337,c__19733__auto___27364,out))
})();
var inst_27321 = cljs.core.filterv.call(null,inst_27320,inst_27308);
var inst_27308__$1 = inst_27321;
var state_27336__$1 = (function (){var statearr_27351 = state_27336;
(statearr_27351[(10)] = inst_27308__$1);

return statearr_27351;
})();
var statearr_27352_27374 = state_27336__$1;
(statearr_27352_27374[(2)] = null);

(statearr_27352_27374[(1)] = (2));


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
});})(c__19733__auto___27364,out))
;
return ((function (switch__19668__auto__,c__19733__auto___27364,out){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27356 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27356[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27356[(1)] = (1));

return statearr_27356;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27336){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27357){if((e27357 instanceof Object)){
var ex__19672__auto__ = e27357;
var statearr_27358_27375 = state_27336;
(statearr_27358_27375[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27376 = state_27336;
state_27336 = G__27376;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27364,out))
})();
var state__19735__auto__ = (function (){var statearr_27359 = f__19734__auto__.call(null);
(statearr_27359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27364);

return statearr_27359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27364,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var args27377 = [];
var len__17511__auto___27426 = arguments.length;
var i__17512__auto___27427 = (0);
while(true){
if((i__17512__auto___27427 < len__17511__auto___27426)){
args27377.push((arguments[i__17512__auto___27427]));

var G__27428 = (i__17512__auto___27427 + (1));
i__17512__auto___27427 = G__27428;
continue;
} else {
}
break;
}

var G__27379 = args27377.length;
switch (G__27379) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27377.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19733__auto___27430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27430,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27430,out){
return (function (state_27403){
var state_val_27404 = (state_27403[(1)]);
if((state_val_27404 === (7))){
var inst_27385 = (state_27403[(7)]);
var inst_27385__$1 = (state_27403[(2)]);
var inst_27386 = (inst_27385__$1 == null);
var inst_27387 = cljs.core.not.call(null,inst_27386);
var state_27403__$1 = (function (){var statearr_27405 = state_27403;
(statearr_27405[(7)] = inst_27385__$1);

return statearr_27405;
})();
if(inst_27387){
var statearr_27406_27431 = state_27403__$1;
(statearr_27406_27431[(1)] = (8));

} else {
var statearr_27407_27432 = state_27403__$1;
(statearr_27407_27432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (1))){
var inst_27380 = (0);
var state_27403__$1 = (function (){var statearr_27408 = state_27403;
(statearr_27408[(8)] = inst_27380);

return statearr_27408;
})();
var statearr_27409_27433 = state_27403__$1;
(statearr_27409_27433[(2)] = null);

(statearr_27409_27433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (4))){
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27403__$1,(7),ch);
} else {
if((state_val_27404 === (6))){
var inst_27398 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
var statearr_27410_27434 = state_27403__$1;
(statearr_27410_27434[(2)] = inst_27398);

(statearr_27410_27434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (3))){
var inst_27400 = (state_27403[(2)]);
var inst_27401 = cljs.core.async.close_BANG_.call(null,out);
var state_27403__$1 = (function (){var statearr_27411 = state_27403;
(statearr_27411[(9)] = inst_27400);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27403__$1,inst_27401);
} else {
if((state_val_27404 === (2))){
var inst_27380 = (state_27403[(8)]);
var inst_27382 = (inst_27380 < n);
var state_27403__$1 = state_27403;
if(cljs.core.truth_(inst_27382)){
var statearr_27412_27435 = state_27403__$1;
(statearr_27412_27435[(1)] = (4));

} else {
var statearr_27413_27436 = state_27403__$1;
(statearr_27413_27436[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (11))){
var inst_27380 = (state_27403[(8)]);
var inst_27390 = (state_27403[(2)]);
var inst_27391 = (inst_27380 + (1));
var inst_27380__$1 = inst_27391;
var state_27403__$1 = (function (){var statearr_27414 = state_27403;
(statearr_27414[(8)] = inst_27380__$1);

(statearr_27414[(10)] = inst_27390);

return statearr_27414;
})();
var statearr_27415_27437 = state_27403__$1;
(statearr_27415_27437[(2)] = null);

(statearr_27415_27437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (9))){
var state_27403__$1 = state_27403;
var statearr_27416_27438 = state_27403__$1;
(statearr_27416_27438[(2)] = null);

(statearr_27416_27438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (5))){
var state_27403__$1 = state_27403;
var statearr_27417_27439 = state_27403__$1;
(statearr_27417_27439[(2)] = null);

(statearr_27417_27439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (10))){
var inst_27395 = (state_27403[(2)]);
var state_27403__$1 = state_27403;
var statearr_27418_27440 = state_27403__$1;
(statearr_27418_27440[(2)] = inst_27395);

(statearr_27418_27440[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27404 === (8))){
var inst_27385 = (state_27403[(7)]);
var state_27403__$1 = state_27403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27403__$1,(11),out,inst_27385);
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
});})(c__19733__auto___27430,out))
;
return ((function (switch__19668__auto__,c__19733__auto___27430,out){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27422 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27422[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27422[(1)] = (1));

return statearr_27422;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27403){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27423){if((e27423 instanceof Object)){
var ex__19672__auto__ = e27423;
var statearr_27424_27441 = state_27403;
(statearr_27424_27441[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27442 = state_27403;
state_27403 = G__27442;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27430,out))
})();
var state__19735__auto__ = (function (){var statearr_27425 = f__19734__auto__.call(null);
(statearr_27425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27430);

return statearr_27425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27430,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27450 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27450 = (function (map_LT_,f,ch,meta27451){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27451 = meta27451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27452,meta27451__$1){
var self__ = this;
var _27452__$1 = this;
return (new cljs.core.async.t27450(self__.map_LT_,self__.f,self__.ch,meta27451__$1));
});

cljs.core.async.t27450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27452){
var self__ = this;
var _27452__$1 = this;
return self__.meta27451;
});

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27453 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27453 = (function (map_LT_,f,ch,meta27451,_,fn1,meta27454){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27451 = meta27451;
this._ = _;
this.fn1 = fn1;
this.meta27454 = meta27454;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27455,meta27454__$1){
var self__ = this;
var _27455__$1 = this;
return (new cljs.core.async.t27453(self__.map_LT_,self__.f,self__.ch,self__.meta27451,self__._,self__.fn1,meta27454__$1));
});})(___$1))
;

cljs.core.async.t27453.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27455){
var self__ = this;
var _27455__$1 = this;
return self__.meta27454;
});})(___$1))
;

cljs.core.async.t27453.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27453.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27453.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27443_SHARP_){
return f1.call(null,(((p1__27443_SHARP_ == null))?null:self__.f.call(null,p1__27443_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27453.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27451","meta27451",-1409433139,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t27450","cljs.core.async/t27450",325413995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27454","meta27454",-74939021,null)], null);
});})(___$1))
;

cljs.core.async.t27453.cljs$lang$type = true;

cljs.core.async.t27453.cljs$lang$ctorStr = "cljs.core.async/t27453";

cljs.core.async.t27453.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27453");
});})(___$1))
;

cljs.core.async.__GT_t27453 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27453(map_LT___$1,f__$1,ch__$1,meta27451__$1,___$2,fn1__$1,meta27454){
return (new cljs.core.async.t27453(map_LT___$1,f__$1,ch__$1,meta27451__$1,___$2,fn1__$1,meta27454));
});})(___$1))
;

}

return (new cljs.core.async.t27453(self__.map_LT_,self__.f,self__.ch,self__.meta27451,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16460__auto__ = ret;
if(cljs.core.truth_(and__16460__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16460__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27451","meta27451",-1409433139,null)], null);
});

cljs.core.async.t27450.cljs$lang$type = true;

cljs.core.async.t27450.cljs$lang$ctorStr = "cljs.core.async/t27450";

cljs.core.async.t27450.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27450");
});

cljs.core.async.__GT_t27450 = (function cljs$core$async$map_LT__$___GT_t27450(map_LT___$1,f__$1,ch__$1,meta27451){
return (new cljs.core.async.t27450(map_LT___$1,f__$1,ch__$1,meta27451));
});

}

return (new cljs.core.async.t27450(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27459 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27459 = (function (map_GT_,f,ch,meta27460){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27460 = meta27460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27461,meta27460__$1){
var self__ = this;
var _27461__$1 = this;
return (new cljs.core.async.t27459(self__.map_GT_,self__.f,self__.ch,meta27460__$1));
});

cljs.core.async.t27459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27461){
var self__ = this;
var _27461__$1 = this;
return self__.meta27460;
});

cljs.core.async.t27459.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27459.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27459.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27459.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27459.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27459.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27460","meta27460",-1150554092,null)], null);
});

cljs.core.async.t27459.cljs$lang$type = true;

cljs.core.async.t27459.cljs$lang$ctorStr = "cljs.core.async/t27459";

cljs.core.async.t27459.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27459");
});

cljs.core.async.__GT_t27459 = (function cljs$core$async$map_GT__$___GT_t27459(map_GT___$1,f__$1,ch__$1,meta27460){
return (new cljs.core.async.t27459(map_GT___$1,f__$1,ch__$1,meta27460));
});

}

return (new cljs.core.async.t27459(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27465 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27465 = (function (filter_GT_,p,ch,meta27466){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27466 = meta27466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27467,meta27466__$1){
var self__ = this;
var _27467__$1 = this;
return (new cljs.core.async.t27465(self__.filter_GT_,self__.p,self__.ch,meta27466__$1));
});

cljs.core.async.t27465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27467){
var self__ = this;
var _27467__$1 = this;
return self__.meta27466;
});

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27465.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27466","meta27466",1432802410,null)], null);
});

cljs.core.async.t27465.cljs$lang$type = true;

cljs.core.async.t27465.cljs$lang$ctorStr = "cljs.core.async/t27465";

cljs.core.async.t27465.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cljs.core.async/t27465");
});

cljs.core.async.__GT_t27465 = (function cljs$core$async$filter_GT__$___GT_t27465(filter_GT___$1,p__$1,ch__$1,meta27466){
return (new cljs.core.async.t27465(filter_GT___$1,p__$1,ch__$1,meta27466));
});

}

return (new cljs.core.async.t27465(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var args27468 = [];
var len__17511__auto___27512 = arguments.length;
var i__17512__auto___27513 = (0);
while(true){
if((i__17512__auto___27513 < len__17511__auto___27512)){
args27468.push((arguments[i__17512__auto___27513]));

var G__27514 = (i__17512__auto___27513 + (1));
i__17512__auto___27513 = G__27514;
continue;
} else {
}
break;
}

var G__27470 = args27468.length;
switch (G__27470) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27468.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19733__auto___27516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27516,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27516,out){
return (function (state_27491){
var state_val_27492 = (state_27491[(1)]);
if((state_val_27492 === (7))){
var inst_27487 = (state_27491[(2)]);
var state_27491__$1 = state_27491;
var statearr_27493_27517 = state_27491__$1;
(statearr_27493_27517[(2)] = inst_27487);

(statearr_27493_27517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (1))){
var state_27491__$1 = state_27491;
var statearr_27494_27518 = state_27491__$1;
(statearr_27494_27518[(2)] = null);

(statearr_27494_27518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (4))){
var inst_27473 = (state_27491[(7)]);
var inst_27473__$1 = (state_27491[(2)]);
var inst_27474 = (inst_27473__$1 == null);
var state_27491__$1 = (function (){var statearr_27495 = state_27491;
(statearr_27495[(7)] = inst_27473__$1);

return statearr_27495;
})();
if(cljs.core.truth_(inst_27474)){
var statearr_27496_27519 = state_27491__$1;
(statearr_27496_27519[(1)] = (5));

} else {
var statearr_27497_27520 = state_27491__$1;
(statearr_27497_27520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (6))){
var inst_27473 = (state_27491[(7)]);
var inst_27478 = p.call(null,inst_27473);
var state_27491__$1 = state_27491;
if(cljs.core.truth_(inst_27478)){
var statearr_27498_27521 = state_27491__$1;
(statearr_27498_27521[(1)] = (8));

} else {
var statearr_27499_27522 = state_27491__$1;
(statearr_27499_27522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (3))){
var inst_27489 = (state_27491[(2)]);
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27491__$1,inst_27489);
} else {
if((state_val_27492 === (2))){
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27491__$1,(4),ch);
} else {
if((state_val_27492 === (11))){
var inst_27481 = (state_27491[(2)]);
var state_27491__$1 = state_27491;
var statearr_27500_27523 = state_27491__$1;
(statearr_27500_27523[(2)] = inst_27481);

(statearr_27500_27523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (9))){
var state_27491__$1 = state_27491;
var statearr_27501_27524 = state_27491__$1;
(statearr_27501_27524[(2)] = null);

(statearr_27501_27524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (5))){
var inst_27476 = cljs.core.async.close_BANG_.call(null,out);
var state_27491__$1 = state_27491;
var statearr_27502_27525 = state_27491__$1;
(statearr_27502_27525[(2)] = inst_27476);

(statearr_27502_27525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (10))){
var inst_27484 = (state_27491[(2)]);
var state_27491__$1 = (function (){var statearr_27503 = state_27491;
(statearr_27503[(8)] = inst_27484);

return statearr_27503;
})();
var statearr_27504_27526 = state_27491__$1;
(statearr_27504_27526[(2)] = null);

(statearr_27504_27526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27492 === (8))){
var inst_27473 = (state_27491[(7)]);
var state_27491__$1 = state_27491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27491__$1,(11),out,inst_27473);
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
});})(c__19733__auto___27516,out))
;
return ((function (switch__19668__auto__,c__19733__auto___27516,out){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27508 = [null,null,null,null,null,null,null,null,null];
(statearr_27508[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27508[(1)] = (1));

return statearr_27508;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27491){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27509){if((e27509 instanceof Object)){
var ex__19672__auto__ = e27509;
var statearr_27510_27527 = state_27491;
(statearr_27510_27527[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27528 = state_27491;
state_27491 = G__27528;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27516,out))
})();
var state__19735__auto__ = (function (){var statearr_27511 = f__19734__auto__.call(null);
(statearr_27511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27516);

return statearr_27511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27516,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var args27529 = [];
var len__17511__auto___27532 = arguments.length;
var i__17512__auto___27533 = (0);
while(true){
if((i__17512__auto___27533 < len__17511__auto___27532)){
args27529.push((arguments[i__17512__auto___27533]));

var G__27534 = (i__17512__auto___27533 + (1));
i__17512__auto___27533 = G__27534;
continue;
} else {
}
break;
}

var G__27531 = args27529.length;
switch (G__27531) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27529.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_27701){
var state_val_27702 = (state_27701[(1)]);
if((state_val_27702 === (7))){
var inst_27697 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27703_27744 = state_27701__$1;
(statearr_27703_27744[(2)] = inst_27697);

(statearr_27703_27744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (20))){
var inst_27667 = (state_27701[(7)]);
var inst_27678 = (state_27701[(2)]);
var inst_27679 = cljs.core.next.call(null,inst_27667);
var inst_27653 = inst_27679;
var inst_27654 = null;
var inst_27655 = (0);
var inst_27656 = (0);
var state_27701__$1 = (function (){var statearr_27704 = state_27701;
(statearr_27704[(8)] = inst_27656);

(statearr_27704[(9)] = inst_27678);

(statearr_27704[(10)] = inst_27655);

(statearr_27704[(11)] = inst_27653);

(statearr_27704[(12)] = inst_27654);

return statearr_27704;
})();
var statearr_27705_27745 = state_27701__$1;
(statearr_27705_27745[(2)] = null);

(statearr_27705_27745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (1))){
var state_27701__$1 = state_27701;
var statearr_27706_27746 = state_27701__$1;
(statearr_27706_27746[(2)] = null);

(statearr_27706_27746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (4))){
var inst_27642 = (state_27701[(13)]);
var inst_27642__$1 = (state_27701[(2)]);
var inst_27643 = (inst_27642__$1 == null);
var state_27701__$1 = (function (){var statearr_27707 = state_27701;
(statearr_27707[(13)] = inst_27642__$1);

return statearr_27707;
})();
if(cljs.core.truth_(inst_27643)){
var statearr_27708_27747 = state_27701__$1;
(statearr_27708_27747[(1)] = (5));

} else {
var statearr_27709_27748 = state_27701__$1;
(statearr_27709_27748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (15))){
var state_27701__$1 = state_27701;
var statearr_27713_27749 = state_27701__$1;
(statearr_27713_27749[(2)] = null);

(statearr_27713_27749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (21))){
var state_27701__$1 = state_27701;
var statearr_27714_27750 = state_27701__$1;
(statearr_27714_27750[(2)] = null);

(statearr_27714_27750[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (13))){
var inst_27656 = (state_27701[(8)]);
var inst_27655 = (state_27701[(10)]);
var inst_27653 = (state_27701[(11)]);
var inst_27654 = (state_27701[(12)]);
var inst_27663 = (state_27701[(2)]);
var inst_27664 = (inst_27656 + (1));
var tmp27710 = inst_27655;
var tmp27711 = inst_27653;
var tmp27712 = inst_27654;
var inst_27653__$1 = tmp27711;
var inst_27654__$1 = tmp27712;
var inst_27655__$1 = tmp27710;
var inst_27656__$1 = inst_27664;
var state_27701__$1 = (function (){var statearr_27715 = state_27701;
(statearr_27715[(14)] = inst_27663);

(statearr_27715[(8)] = inst_27656__$1);

(statearr_27715[(10)] = inst_27655__$1);

(statearr_27715[(11)] = inst_27653__$1);

(statearr_27715[(12)] = inst_27654__$1);

return statearr_27715;
})();
var statearr_27716_27751 = state_27701__$1;
(statearr_27716_27751[(2)] = null);

(statearr_27716_27751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (22))){
var state_27701__$1 = state_27701;
var statearr_27717_27752 = state_27701__$1;
(statearr_27717_27752[(2)] = null);

(statearr_27717_27752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (6))){
var inst_27642 = (state_27701[(13)]);
var inst_27651 = f.call(null,inst_27642);
var inst_27652 = cljs.core.seq.call(null,inst_27651);
var inst_27653 = inst_27652;
var inst_27654 = null;
var inst_27655 = (0);
var inst_27656 = (0);
var state_27701__$1 = (function (){var statearr_27718 = state_27701;
(statearr_27718[(8)] = inst_27656);

(statearr_27718[(10)] = inst_27655);

(statearr_27718[(11)] = inst_27653);

(statearr_27718[(12)] = inst_27654);

return statearr_27718;
})();
var statearr_27719_27753 = state_27701__$1;
(statearr_27719_27753[(2)] = null);

(statearr_27719_27753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (17))){
var inst_27667 = (state_27701[(7)]);
var inst_27671 = cljs.core.chunk_first.call(null,inst_27667);
var inst_27672 = cljs.core.chunk_rest.call(null,inst_27667);
var inst_27673 = cljs.core.count.call(null,inst_27671);
var inst_27653 = inst_27672;
var inst_27654 = inst_27671;
var inst_27655 = inst_27673;
var inst_27656 = (0);
var state_27701__$1 = (function (){var statearr_27720 = state_27701;
(statearr_27720[(8)] = inst_27656);

(statearr_27720[(10)] = inst_27655);

(statearr_27720[(11)] = inst_27653);

(statearr_27720[(12)] = inst_27654);

return statearr_27720;
})();
var statearr_27721_27754 = state_27701__$1;
(statearr_27721_27754[(2)] = null);

(statearr_27721_27754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (3))){
var inst_27699 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27701__$1,inst_27699);
} else {
if((state_val_27702 === (12))){
var inst_27687 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27722_27755 = state_27701__$1;
(statearr_27722_27755[(2)] = inst_27687);

(statearr_27722_27755[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (2))){
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27701__$1,(4),in$);
} else {
if((state_val_27702 === (23))){
var inst_27695 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27723_27756 = state_27701__$1;
(statearr_27723_27756[(2)] = inst_27695);

(statearr_27723_27756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (19))){
var inst_27682 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27724_27757 = state_27701__$1;
(statearr_27724_27757[(2)] = inst_27682);

(statearr_27724_27757[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (11))){
var inst_27667 = (state_27701[(7)]);
var inst_27653 = (state_27701[(11)]);
var inst_27667__$1 = cljs.core.seq.call(null,inst_27653);
var state_27701__$1 = (function (){var statearr_27725 = state_27701;
(statearr_27725[(7)] = inst_27667__$1);

return statearr_27725;
})();
if(inst_27667__$1){
var statearr_27726_27758 = state_27701__$1;
(statearr_27726_27758[(1)] = (14));

} else {
var statearr_27727_27759 = state_27701__$1;
(statearr_27727_27759[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (9))){
var inst_27689 = (state_27701[(2)]);
var inst_27690 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27701__$1 = (function (){var statearr_27728 = state_27701;
(statearr_27728[(15)] = inst_27689);

return statearr_27728;
})();
if(cljs.core.truth_(inst_27690)){
var statearr_27729_27760 = state_27701__$1;
(statearr_27729_27760[(1)] = (21));

} else {
var statearr_27730_27761 = state_27701__$1;
(statearr_27730_27761[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (5))){
var inst_27645 = cljs.core.async.close_BANG_.call(null,out);
var state_27701__$1 = state_27701;
var statearr_27731_27762 = state_27701__$1;
(statearr_27731_27762[(2)] = inst_27645);

(statearr_27731_27762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (14))){
var inst_27667 = (state_27701[(7)]);
var inst_27669 = cljs.core.chunked_seq_QMARK_.call(null,inst_27667);
var state_27701__$1 = state_27701;
if(inst_27669){
var statearr_27732_27763 = state_27701__$1;
(statearr_27732_27763[(1)] = (17));

} else {
var statearr_27733_27764 = state_27701__$1;
(statearr_27733_27764[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (16))){
var inst_27685 = (state_27701[(2)]);
var state_27701__$1 = state_27701;
var statearr_27734_27765 = state_27701__$1;
(statearr_27734_27765[(2)] = inst_27685);

(statearr_27734_27765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27702 === (10))){
var inst_27656 = (state_27701[(8)]);
var inst_27654 = (state_27701[(12)]);
var inst_27661 = cljs.core._nth.call(null,inst_27654,inst_27656);
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27701__$1,(13),out,inst_27661);
} else {
if((state_val_27702 === (18))){
var inst_27667 = (state_27701[(7)]);
var inst_27676 = cljs.core.first.call(null,inst_27667);
var state_27701__$1 = state_27701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27701__$1,(20),out,inst_27676);
} else {
if((state_val_27702 === (8))){
var inst_27656 = (state_27701[(8)]);
var inst_27655 = (state_27701[(10)]);
var inst_27658 = (inst_27656 < inst_27655);
var inst_27659 = inst_27658;
var state_27701__$1 = state_27701;
if(cljs.core.truth_(inst_27659)){
var statearr_27735_27766 = state_27701__$1;
(statearr_27735_27766[(1)] = (10));

} else {
var statearr_27736_27767 = state_27701__$1;
(statearr_27736_27767[(1)] = (11));

}

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
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19669__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19669__auto____0 = (function (){
var statearr_27740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27740[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19669__auto__);

(statearr_27740[(1)] = (1));

return statearr_27740;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19669__auto____1 = (function (state_27701){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27741){if((e27741 instanceof Object)){
var ex__19672__auto__ = e27741;
var statearr_27742_27768 = state_27701;
(statearr_27742_27768[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27769 = state_27701;
state_27701 = G__27769;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19669__auto__ = function(state_27701){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19669__auto____1.call(this,state_27701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19669__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19669__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_27743 = f__19734__auto__.call(null);
(statearr_27743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_27743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var args27770 = [];
var len__17511__auto___27773 = arguments.length;
var i__17512__auto___27774 = (0);
while(true){
if((i__17512__auto___27774 < len__17511__auto___27773)){
args27770.push((arguments[i__17512__auto___27774]));

var G__27775 = (i__17512__auto___27774 + (1));
i__17512__auto___27774 = G__27775;
continue;
} else {
}
break;
}

var G__27772 = args27770.length;
switch (G__27772) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27770.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var args27777 = [];
var len__17511__auto___27780 = arguments.length;
var i__17512__auto___27781 = (0);
while(true){
if((i__17512__auto___27781 < len__17511__auto___27780)){
args27777.push((arguments[i__17512__auto___27781]));

var G__27782 = (i__17512__auto___27781 + (1));
i__17512__auto___27781 = G__27782;
continue;
} else {
}
break;
}

var G__27779 = args27777.length;
switch (G__27779) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27777.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var args27784 = [];
var len__17511__auto___27835 = arguments.length;
var i__17512__auto___27836 = (0);
while(true){
if((i__17512__auto___27836 < len__17511__auto___27835)){
args27784.push((arguments[i__17512__auto___27836]));

var G__27837 = (i__17512__auto___27836 + (1));
i__17512__auto___27836 = G__27837;
continue;
} else {
}
break;
}

var G__27786 = args27784.length;
switch (G__27786) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27784.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19733__auto___27839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27839,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27839,out){
return (function (state_27810){
var state_val_27811 = (state_27810[(1)]);
if((state_val_27811 === (7))){
var inst_27805 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
var statearr_27812_27840 = state_27810__$1;
(statearr_27812_27840[(2)] = inst_27805);

(statearr_27812_27840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (1))){
var inst_27787 = null;
var state_27810__$1 = (function (){var statearr_27813 = state_27810;
(statearr_27813[(7)] = inst_27787);

return statearr_27813;
})();
var statearr_27814_27841 = state_27810__$1;
(statearr_27814_27841[(2)] = null);

(statearr_27814_27841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (4))){
var inst_27790 = (state_27810[(8)]);
var inst_27790__$1 = (state_27810[(2)]);
var inst_27791 = (inst_27790__$1 == null);
var inst_27792 = cljs.core.not.call(null,inst_27791);
var state_27810__$1 = (function (){var statearr_27815 = state_27810;
(statearr_27815[(8)] = inst_27790__$1);

return statearr_27815;
})();
if(inst_27792){
var statearr_27816_27842 = state_27810__$1;
(statearr_27816_27842[(1)] = (5));

} else {
var statearr_27817_27843 = state_27810__$1;
(statearr_27817_27843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (6))){
var state_27810__$1 = state_27810;
var statearr_27818_27844 = state_27810__$1;
(statearr_27818_27844[(2)] = null);

(statearr_27818_27844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (3))){
var inst_27807 = (state_27810[(2)]);
var inst_27808 = cljs.core.async.close_BANG_.call(null,out);
var state_27810__$1 = (function (){var statearr_27819 = state_27810;
(statearr_27819[(9)] = inst_27807);

return statearr_27819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27810__$1,inst_27808);
} else {
if((state_val_27811 === (2))){
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27810__$1,(4),ch);
} else {
if((state_val_27811 === (11))){
var inst_27790 = (state_27810[(8)]);
var inst_27799 = (state_27810[(2)]);
var inst_27787 = inst_27790;
var state_27810__$1 = (function (){var statearr_27820 = state_27810;
(statearr_27820[(7)] = inst_27787);

(statearr_27820[(10)] = inst_27799);

return statearr_27820;
})();
var statearr_27821_27845 = state_27810__$1;
(statearr_27821_27845[(2)] = null);

(statearr_27821_27845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (9))){
var inst_27790 = (state_27810[(8)]);
var state_27810__$1 = state_27810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27810__$1,(11),out,inst_27790);
} else {
if((state_val_27811 === (5))){
var inst_27787 = (state_27810[(7)]);
var inst_27790 = (state_27810[(8)]);
var inst_27794 = cljs.core._EQ_.call(null,inst_27790,inst_27787);
var state_27810__$1 = state_27810;
if(inst_27794){
var statearr_27823_27846 = state_27810__$1;
(statearr_27823_27846[(1)] = (8));

} else {
var statearr_27824_27847 = state_27810__$1;
(statearr_27824_27847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (10))){
var inst_27802 = (state_27810[(2)]);
var state_27810__$1 = state_27810;
var statearr_27825_27848 = state_27810__$1;
(statearr_27825_27848[(2)] = inst_27802);

(statearr_27825_27848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27811 === (8))){
var inst_27787 = (state_27810[(7)]);
var tmp27822 = inst_27787;
var inst_27787__$1 = tmp27822;
var state_27810__$1 = (function (){var statearr_27826 = state_27810;
(statearr_27826[(7)] = inst_27787__$1);

return statearr_27826;
})();
var statearr_27827_27849 = state_27810__$1;
(statearr_27827_27849[(2)] = null);

(statearr_27827_27849[(1)] = (2));


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
});})(c__19733__auto___27839,out))
;
return ((function (switch__19668__auto__,c__19733__auto___27839,out){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27831 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27831[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27831[(1)] = (1));

return statearr_27831;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27810){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27832){if((e27832 instanceof Object)){
var ex__19672__auto__ = e27832;
var statearr_27833_27850 = state_27810;
(statearr_27833_27850[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27851 = state_27810;
state_27810 = G__27851;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27839,out))
})();
var state__19735__auto__ = (function (){var statearr_27834 = f__19734__auto__.call(null);
(statearr_27834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27839);

return statearr_27834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27839,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var args27852 = [];
var len__17511__auto___27922 = arguments.length;
var i__17512__auto___27923 = (0);
while(true){
if((i__17512__auto___27923 < len__17511__auto___27922)){
args27852.push((arguments[i__17512__auto___27923]));

var G__27924 = (i__17512__auto___27923 + (1));
i__17512__auto___27923 = G__27924;
continue;
} else {
}
break;
}

var G__27854 = args27852.length;
switch (G__27854) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27852.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19733__auto___27926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___27926,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___27926,out){
return (function (state_27892){
var state_val_27893 = (state_27892[(1)]);
if((state_val_27893 === (7))){
var inst_27888 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27894_27927 = state_27892__$1;
(statearr_27894_27927[(2)] = inst_27888);

(statearr_27894_27927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (1))){
var inst_27855 = (new Array(n));
var inst_27856 = inst_27855;
var inst_27857 = (0);
var state_27892__$1 = (function (){var statearr_27895 = state_27892;
(statearr_27895[(7)] = inst_27856);

(statearr_27895[(8)] = inst_27857);

return statearr_27895;
})();
var statearr_27896_27928 = state_27892__$1;
(statearr_27896_27928[(2)] = null);

(statearr_27896_27928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (4))){
var inst_27860 = (state_27892[(9)]);
var inst_27860__$1 = (state_27892[(2)]);
var inst_27861 = (inst_27860__$1 == null);
var inst_27862 = cljs.core.not.call(null,inst_27861);
var state_27892__$1 = (function (){var statearr_27897 = state_27892;
(statearr_27897[(9)] = inst_27860__$1);

return statearr_27897;
})();
if(inst_27862){
var statearr_27898_27929 = state_27892__$1;
(statearr_27898_27929[(1)] = (5));

} else {
var statearr_27899_27930 = state_27892__$1;
(statearr_27899_27930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (15))){
var inst_27882 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27900_27931 = state_27892__$1;
(statearr_27900_27931[(2)] = inst_27882);

(statearr_27900_27931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (13))){
var state_27892__$1 = state_27892;
var statearr_27901_27932 = state_27892__$1;
(statearr_27901_27932[(2)] = null);

(statearr_27901_27932[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (6))){
var inst_27857 = (state_27892[(8)]);
var inst_27878 = (inst_27857 > (0));
var state_27892__$1 = state_27892;
if(cljs.core.truth_(inst_27878)){
var statearr_27902_27933 = state_27892__$1;
(statearr_27902_27933[(1)] = (12));

} else {
var statearr_27903_27934 = state_27892__$1;
(statearr_27903_27934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (3))){
var inst_27890 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27892__$1,inst_27890);
} else {
if((state_val_27893 === (12))){
var inst_27856 = (state_27892[(7)]);
var inst_27880 = cljs.core.vec.call(null,inst_27856);
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27892__$1,(15),out,inst_27880);
} else {
if((state_val_27893 === (2))){
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27892__$1,(4),ch);
} else {
if((state_val_27893 === (11))){
var inst_27872 = (state_27892[(2)]);
var inst_27873 = (new Array(n));
var inst_27856 = inst_27873;
var inst_27857 = (0);
var state_27892__$1 = (function (){var statearr_27904 = state_27892;
(statearr_27904[(7)] = inst_27856);

(statearr_27904[(8)] = inst_27857);

(statearr_27904[(10)] = inst_27872);

return statearr_27904;
})();
var statearr_27905_27935 = state_27892__$1;
(statearr_27905_27935[(2)] = null);

(statearr_27905_27935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (9))){
var inst_27856 = (state_27892[(7)]);
var inst_27870 = cljs.core.vec.call(null,inst_27856);
var state_27892__$1 = state_27892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27892__$1,(11),out,inst_27870);
} else {
if((state_val_27893 === (5))){
var inst_27860 = (state_27892[(9)]);
var inst_27856 = (state_27892[(7)]);
var inst_27857 = (state_27892[(8)]);
var inst_27865 = (state_27892[(11)]);
var inst_27864 = (inst_27856[inst_27857] = inst_27860);
var inst_27865__$1 = (inst_27857 + (1));
var inst_27866 = (inst_27865__$1 < n);
var state_27892__$1 = (function (){var statearr_27906 = state_27892;
(statearr_27906[(12)] = inst_27864);

(statearr_27906[(11)] = inst_27865__$1);

return statearr_27906;
})();
if(cljs.core.truth_(inst_27866)){
var statearr_27907_27936 = state_27892__$1;
(statearr_27907_27936[(1)] = (8));

} else {
var statearr_27908_27937 = state_27892__$1;
(statearr_27908_27937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (14))){
var inst_27885 = (state_27892[(2)]);
var inst_27886 = cljs.core.async.close_BANG_.call(null,out);
var state_27892__$1 = (function (){var statearr_27910 = state_27892;
(statearr_27910[(13)] = inst_27885);

return statearr_27910;
})();
var statearr_27911_27938 = state_27892__$1;
(statearr_27911_27938[(2)] = inst_27886);

(statearr_27911_27938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (10))){
var inst_27876 = (state_27892[(2)]);
var state_27892__$1 = state_27892;
var statearr_27912_27939 = state_27892__$1;
(statearr_27912_27939[(2)] = inst_27876);

(statearr_27912_27939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27893 === (8))){
var inst_27856 = (state_27892[(7)]);
var inst_27865 = (state_27892[(11)]);
var tmp27909 = inst_27856;
var inst_27856__$1 = tmp27909;
var inst_27857 = inst_27865;
var state_27892__$1 = (function (){var statearr_27913 = state_27892;
(statearr_27913[(7)] = inst_27856__$1);

(statearr_27913[(8)] = inst_27857);

return statearr_27913;
})();
var statearr_27914_27940 = state_27892__$1;
(statearr_27914_27940[(2)] = null);

(statearr_27914_27940[(1)] = (2));


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
});})(c__19733__auto___27926,out))
;
return ((function (switch__19668__auto__,c__19733__auto___27926,out){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_27918 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27918[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_27918[(1)] = (1));

return statearr_27918;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27892){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e27919){if((e27919 instanceof Object)){
var ex__19672__auto__ = e27919;
var statearr_27920_27941 = state_27892;
(statearr_27920_27941[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27942 = state_27892;
state_27892 = G__27942;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___27926,out))
})();
var state__19735__auto__ = (function (){var statearr_27921 = f__19734__auto__.call(null);
(statearr_27921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___27926);

return statearr_27921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___27926,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var args27943 = [];
var len__17511__auto___28017 = arguments.length;
var i__17512__auto___28018 = (0);
while(true){
if((i__17512__auto___28018 < len__17511__auto___28017)){
args27943.push((arguments[i__17512__auto___28018]));

var G__28019 = (i__17512__auto___28018 + (1));
i__17512__auto___28018 = G__28019;
continue;
} else {
}
break;
}

var G__27945 = args27943.length;
switch (G__27945) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27943.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19733__auto___28021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___28021,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___28021,out){
return (function (state_27987){
var state_val_27988 = (state_27987[(1)]);
if((state_val_27988 === (7))){
var inst_27983 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27989_28022 = state_27987__$1;
(statearr_27989_28022[(2)] = inst_27983);

(statearr_27989_28022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (1))){
var inst_27946 = [];
var inst_27947 = inst_27946;
var inst_27948 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27987__$1 = (function (){var statearr_27990 = state_27987;
(statearr_27990[(7)] = inst_27948);

(statearr_27990[(8)] = inst_27947);

return statearr_27990;
})();
var statearr_27991_28023 = state_27987__$1;
(statearr_27991_28023[(2)] = null);

(statearr_27991_28023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (4))){
var inst_27951 = (state_27987[(9)]);
var inst_27951__$1 = (state_27987[(2)]);
var inst_27952 = (inst_27951__$1 == null);
var inst_27953 = cljs.core.not.call(null,inst_27952);
var state_27987__$1 = (function (){var statearr_27992 = state_27987;
(statearr_27992[(9)] = inst_27951__$1);

return statearr_27992;
})();
if(inst_27953){
var statearr_27993_28024 = state_27987__$1;
(statearr_27993_28024[(1)] = (5));

} else {
var statearr_27994_28025 = state_27987__$1;
(statearr_27994_28025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (15))){
var inst_27977 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27995_28026 = state_27987__$1;
(statearr_27995_28026[(2)] = inst_27977);

(statearr_27995_28026[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (13))){
var state_27987__$1 = state_27987;
var statearr_27996_28027 = state_27987__$1;
(statearr_27996_28027[(2)] = null);

(statearr_27996_28027[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (6))){
var inst_27947 = (state_27987[(8)]);
var inst_27972 = inst_27947.length;
var inst_27973 = (inst_27972 > (0));
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27973)){
var statearr_27997_28028 = state_27987__$1;
(statearr_27997_28028[(1)] = (12));

} else {
var statearr_27998_28029 = state_27987__$1;
(statearr_27998_28029[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (3))){
var inst_27985 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27987__$1,inst_27985);
} else {
if((state_val_27988 === (12))){
var inst_27947 = (state_27987[(8)]);
var inst_27975 = cljs.core.vec.call(null,inst_27947);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27987__$1,(15),out,inst_27975);
} else {
if((state_val_27988 === (2))){
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27987__$1,(4),ch);
} else {
if((state_val_27988 === (11))){
var inst_27955 = (state_27987[(10)]);
var inst_27951 = (state_27987[(9)]);
var inst_27965 = (state_27987[(2)]);
var inst_27966 = [];
var inst_27967 = inst_27966.push(inst_27951);
var inst_27947 = inst_27966;
var inst_27948 = inst_27955;
var state_27987__$1 = (function (){var statearr_27999 = state_27987;
(statearr_27999[(11)] = inst_27965);

(statearr_27999[(7)] = inst_27948);

(statearr_27999[(12)] = inst_27967);

(statearr_27999[(8)] = inst_27947);

return statearr_27999;
})();
var statearr_28000_28030 = state_27987__$1;
(statearr_28000_28030[(2)] = null);

(statearr_28000_28030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (9))){
var inst_27947 = (state_27987[(8)]);
var inst_27963 = cljs.core.vec.call(null,inst_27947);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27987__$1,(11),out,inst_27963);
} else {
if((state_val_27988 === (5))){
var inst_27955 = (state_27987[(10)]);
var inst_27951 = (state_27987[(9)]);
var inst_27948 = (state_27987[(7)]);
var inst_27955__$1 = f.call(null,inst_27951);
var inst_27956 = cljs.core._EQ_.call(null,inst_27955__$1,inst_27948);
var inst_27957 = cljs.core.keyword_identical_QMARK_.call(null,inst_27948,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27958 = (inst_27956) || (inst_27957);
var state_27987__$1 = (function (){var statearr_28001 = state_27987;
(statearr_28001[(10)] = inst_27955__$1);

return statearr_28001;
})();
if(cljs.core.truth_(inst_27958)){
var statearr_28002_28031 = state_27987__$1;
(statearr_28002_28031[(1)] = (8));

} else {
var statearr_28003_28032 = state_27987__$1;
(statearr_28003_28032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (14))){
var inst_27980 = (state_27987[(2)]);
var inst_27981 = cljs.core.async.close_BANG_.call(null,out);
var state_27987__$1 = (function (){var statearr_28005 = state_27987;
(statearr_28005[(13)] = inst_27980);

return statearr_28005;
})();
var statearr_28006_28033 = state_27987__$1;
(statearr_28006_28033[(2)] = inst_27981);

(statearr_28006_28033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (10))){
var inst_27970 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28007_28034 = state_27987__$1;
(statearr_28007_28034[(2)] = inst_27970);

(statearr_28007_28034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (8))){
var inst_27955 = (state_27987[(10)]);
var inst_27951 = (state_27987[(9)]);
var inst_27947 = (state_27987[(8)]);
var inst_27960 = inst_27947.push(inst_27951);
var tmp28004 = inst_27947;
var inst_27947__$1 = tmp28004;
var inst_27948 = inst_27955;
var state_27987__$1 = (function (){var statearr_28008 = state_27987;
(statearr_28008[(7)] = inst_27948);

(statearr_28008[(14)] = inst_27960);

(statearr_28008[(8)] = inst_27947__$1);

return statearr_28008;
})();
var statearr_28009_28035 = state_27987__$1;
(statearr_28009_28035[(2)] = null);

(statearr_28009_28035[(1)] = (2));


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
});})(c__19733__auto___28021,out))
;
return ((function (switch__19668__auto__,c__19733__auto___28021,out){
return (function() {
var cljs$core$async$state_machine__19669__auto__ = null;
var cljs$core$async$state_machine__19669__auto____0 = (function (){
var statearr_28013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28013[(0)] = cljs$core$async$state_machine__19669__auto__);

(statearr_28013[(1)] = (1));

return statearr_28013;
});
var cljs$core$async$state_machine__19669__auto____1 = (function (state_27987){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_27987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e28014){if((e28014 instanceof Object)){
var ex__19672__auto__ = e28014;
var statearr_28015_28036 = state_27987;
(statearr_28015_28036[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28037 = state_27987;
state_27987 = G__28037;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
cljs$core$async$state_machine__19669__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19669__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19669__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19669__auto____0;
cljs$core$async$state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19669__auto____1;
return cljs$core$async$state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___28021,out))
})();
var state__19735__auto__ = (function (){var statearr_28016 = f__19734__auto__.call(null);
(statearr_28016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___28021);

return statearr_28016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___28021,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440504637748