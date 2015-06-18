// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t12285 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12285 = (function (f,fn_handler,meta12286){
this.f = f;
this.fn_handler = fn_handler;
this.meta12286 = meta12286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12285.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t12285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t12285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12287){
var self__ = this;
var _12287__$1 = this;
return self__.meta12286;
});

cljs.core.async.t12285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12287,meta12286__$1){
var self__ = this;
var _12287__$1 = this;
return (new cljs.core.async.t12285(self__.f,self__.fn_handler,meta12286__$1));
});

cljs.core.async.t12285.cljs$lang$type = true;

cljs.core.async.t12285.cljs$lang$ctorStr = "cljs.core.async/t12285";

cljs.core.async.t12285.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t12285");
});

cljs.core.async.__GT_t12285 = (function cljs$core$async$fn_handler_$___GT_t12285(f__$1,fn_handler__$1,meta12286){
return (new cljs.core.async.t12285(f__$1,fn_handler__$1,meta12286));
});

}

return (new cljs.core.async.t12285(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__12289 = buff;
if(G__12289){
var bit__4823__auto__ = null;
if(cljs.core.truth_((function (){var or__4149__auto__ = bit__4823__auto__;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return G__12289.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__12289.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12289);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12289);
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
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
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
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
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
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12290 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12290);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12290,ret){
return (function (){
return fn1.call(null,val_12290);
});})(val_12290,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
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
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5034__auto___12291 = n;
var x_12292 = (0);
while(true){
if((x_12292 < n__5034__auto___12291)){
(a[x_12292] = (0));

var G__12293 = (x_12292 + (1));
x_12292 = G__12293;
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

var G__12294 = (i + (1));
i = G__12294;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t12298 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12298 = (function (flag,alt_flag,meta12299){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12299 = meta12299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12298.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12298.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t12298.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t12298.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12300){
var self__ = this;
var _12300__$1 = this;
return self__.meta12299;
});})(flag))
;

cljs.core.async.t12298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12300,meta12299__$1){
var self__ = this;
var _12300__$1 = this;
return (new cljs.core.async.t12298(self__.flag,self__.alt_flag,meta12299__$1));
});})(flag))
;

cljs.core.async.t12298.cljs$lang$type = true;

cljs.core.async.t12298.cljs$lang$ctorStr = "cljs.core.async/t12298";

cljs.core.async.t12298.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t12298");
});})(flag))
;

cljs.core.async.__GT_t12298 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t12298(flag__$1,alt_flag__$1,meta12299){
return (new cljs.core.async.t12298(flag__$1,alt_flag__$1,meta12299));
});})(flag))
;

}

return (new cljs.core.async.t12298(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t12304 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12304 = (function (cb,flag,alt_handler,meta12305){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12305 = meta12305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12304.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t12304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t12304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t12304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12306){
var self__ = this;
var _12306__$1 = this;
return self__.meta12305;
});

cljs.core.async.t12304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12306,meta12305__$1){
var self__ = this;
var _12306__$1 = this;
return (new cljs.core.async.t12304(self__.cb,self__.flag,self__.alt_handler,meta12305__$1));
});

cljs.core.async.t12304.cljs$lang$type = true;

cljs.core.async.t12304.cljs$lang$ctorStr = "cljs.core.async/t12304";

cljs.core.async.t12304.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t12304");
});

cljs.core.async.__GT_t12304 = (function cljs$core$async$alt_handler_$___GT_t12304(cb__$1,flag__$1,alt_handler__$1,meta12305){
return (new cljs.core.async.t12304(cb__$1,flag__$1,alt_handler__$1,meta12305));
});

}

return (new cljs.core.async.t12304(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12307_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12307_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12308_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12308_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4149__auto__ = wport;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12309 = (i + (1));
i = G__12309;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4149__auto__ = ret;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4137__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4137__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4137__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__12310){
var map__12312 = p__12310;
var map__12312__$1 = ((cljs.core.seq_QMARK_.call(null,map__12312))?cljs.core.apply.call(null,cljs.core.hash_map,map__12312):map__12312);
var opts = map__12312__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__12310 = null;
if (arguments.length > 1) {
var G__12313__i = 0, G__12313__a = new Array(arguments.length -  1);
while (G__12313__i < G__12313__a.length) {G__12313__a[G__12313__i] = arguments[G__12313__i + 1]; ++G__12313__i;}
  p__12310 = new cljs.core.IndexedSeq(G__12313__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__12310);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__12314){
var ports = cljs.core.first(arglist__12314);
var p__12310 = cljs.core.rest(arglist__12314);
return cljs$core$async$alts_BANG___delegate(ports,p__12310);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__6760__auto___12409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___12409){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___12409){
return (function (state_12385){
var state_val_12386 = (state_12385[(1)]);
if((state_val_12386 === (7))){
var inst_12381 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12387_12410 = state_12385__$1;
(statearr_12387_12410[(2)] = inst_12381);

(statearr_12387_12410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (1))){
var state_12385__$1 = state_12385;
var statearr_12388_12411 = state_12385__$1;
(statearr_12388_12411[(2)] = null);

(statearr_12388_12411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (4))){
var inst_12364 = (state_12385[(7)]);
var inst_12364__$1 = (state_12385[(2)]);
var inst_12365 = (inst_12364__$1 == null);
var state_12385__$1 = (function (){var statearr_12389 = state_12385;
(statearr_12389[(7)] = inst_12364__$1);

return statearr_12389;
})();
if(cljs.core.truth_(inst_12365)){
var statearr_12390_12412 = state_12385__$1;
(statearr_12390_12412[(1)] = (5));

} else {
var statearr_12391_12413 = state_12385__$1;
(statearr_12391_12413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (13))){
var state_12385__$1 = state_12385;
var statearr_12392_12414 = state_12385__$1;
(statearr_12392_12414[(2)] = null);

(statearr_12392_12414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (6))){
var inst_12364 = (state_12385[(7)]);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12385__$1,(11),to,inst_12364);
} else {
if((state_val_12386 === (3))){
var inst_12383 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12385__$1,inst_12383);
} else {
if((state_val_12386 === (12))){
var state_12385__$1 = state_12385;
var statearr_12393_12415 = state_12385__$1;
(statearr_12393_12415[(2)] = null);

(statearr_12393_12415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (2))){
var state_12385__$1 = state_12385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12385__$1,(4),from);
} else {
if((state_val_12386 === (11))){
var inst_12374 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
if(cljs.core.truth_(inst_12374)){
var statearr_12394_12416 = state_12385__$1;
(statearr_12394_12416[(1)] = (12));

} else {
var statearr_12395_12417 = state_12385__$1;
(statearr_12395_12417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (9))){
var state_12385__$1 = state_12385;
var statearr_12396_12418 = state_12385__$1;
(statearr_12396_12418[(2)] = null);

(statearr_12396_12418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (5))){
var state_12385__$1 = state_12385;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12397_12419 = state_12385__$1;
(statearr_12397_12419[(1)] = (8));

} else {
var statearr_12398_12420 = state_12385__$1;
(statearr_12398_12420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (14))){
var inst_12379 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12399_12421 = state_12385__$1;
(statearr_12399_12421[(2)] = inst_12379);

(statearr_12399_12421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (10))){
var inst_12371 = (state_12385[(2)]);
var state_12385__$1 = state_12385;
var statearr_12400_12422 = state_12385__$1;
(statearr_12400_12422[(2)] = inst_12371);

(statearr_12400_12422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12386 === (8))){
var inst_12368 = cljs.core.async.close_BANG_.call(null,to);
var state_12385__$1 = state_12385;
var statearr_12401_12423 = state_12385__$1;
(statearr_12401_12423[(2)] = inst_12368);

(statearr_12401_12423[(1)] = (10));


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
});})(c__6760__auto___12409))
;
return ((function (switch__6704__auto__,c__6760__auto___12409){
return (function() {
var cljs$core$async$pipe_$_state_machine__6705__auto__ = null;
var cljs$core$async$pipe_$_state_machine__6705__auto____0 = (function (){
var statearr_12405 = [null,null,null,null,null,null,null,null];
(statearr_12405[(0)] = cljs$core$async$pipe_$_state_machine__6705__auto__);

(statearr_12405[(1)] = (1));

return statearr_12405;
});
var cljs$core$async$pipe_$_state_machine__6705__auto____1 = (function (state_12385){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12406){if((e12406 instanceof Object)){
var ex__6708__auto__ = e12406;
var statearr_12407_12424 = state_12385;
(statearr_12407_12424[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12425 = state_12385;
state_12385 = G__12425;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__6705__auto__ = function(state_12385){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__6705__auto____1.call(this,state_12385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__6705__auto____0;
cljs$core$async$pipe_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__6705__auto____1;
return cljs$core$async$pipe_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___12409))
})();
var state__6762__auto__ = (function (){var statearr_12408 = f__6761__auto__.call(null);
(statearr_12408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___12409);

return statearr_12408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___12409))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12609){
var vec__12610 = p__12609;
var v = cljs.core.nth.call(null,vec__12610,(0),null);
var p = cljs.core.nth.call(null,vec__12610,(1),null);
var job = vec__12610;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6760__auto___12792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___12792,res,vec__12610,v,p,job,jobs,results){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___12792,res,vec__12610,v,p,job,jobs,results){
return (function (state_12615){
var state_val_12616 = (state_12615[(1)]);
if((state_val_12616 === (2))){
var inst_12612 = (state_12615[(2)]);
var inst_12613 = cljs.core.async.close_BANG_.call(null,res);
var state_12615__$1 = (function (){var statearr_12617 = state_12615;
(statearr_12617[(7)] = inst_12612);

return statearr_12617;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12615__$1,inst_12613);
} else {
if((state_val_12616 === (1))){
var state_12615__$1 = state_12615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12615__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6760__auto___12792,res,vec__12610,v,p,job,jobs,results))
;
return ((function (switch__6704__auto__,c__6760__auto___12792,res,vec__12610,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0 = (function (){
var statearr_12621 = [null,null,null,null,null,null,null,null];
(statearr_12621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__);

(statearr_12621[(1)] = (1));

return statearr_12621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1 = (function (state_12615){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12622){if((e12622 instanceof Object)){
var ex__6708__auto__ = e12622;
var statearr_12623_12793 = state_12615;
(statearr_12623_12793[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12794 = state_12615;
state_12615 = G__12794;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = function(state_12615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1.call(this,state_12615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___12792,res,vec__12610,v,p,job,jobs,results))
})();
var state__6762__auto__ = (function (){var statearr_12624 = f__6761__auto__.call(null);
(statearr_12624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___12792);

return statearr_12624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___12792,res,vec__12610,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12625){
var vec__12626 = p__12625;
var v = cljs.core.nth.call(null,vec__12626,(0),null);
var p = cljs.core.nth.call(null,vec__12626,(1),null);
var job = vec__12626;
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
var n__5034__auto___12795 = n;
var __12796 = (0);
while(true){
if((__12796 < n__5034__auto___12795)){
var G__12627_12797 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12627_12797) {
case "async":
var c__6760__auto___12799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12796,c__6760__auto___12799,G__12627_12797,n__5034__auto___12795,jobs,results,process,async){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (__12796,c__6760__auto___12799,G__12627_12797,n__5034__auto___12795,jobs,results,process,async){
return (function (state_12640){
var state_val_12641 = (state_12640[(1)]);
if((state_val_12641 === (7))){
var inst_12636 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
var statearr_12642_12800 = state_12640__$1;
(statearr_12642_12800[(2)] = inst_12636);

(statearr_12642_12800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (6))){
var state_12640__$1 = state_12640;
var statearr_12643_12801 = state_12640__$1;
(statearr_12643_12801[(2)] = null);

(statearr_12643_12801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (5))){
var state_12640__$1 = state_12640;
var statearr_12644_12802 = state_12640__$1;
(statearr_12644_12802[(2)] = null);

(statearr_12644_12802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (4))){
var inst_12630 = (state_12640[(2)]);
var inst_12631 = async.call(null,inst_12630);
var state_12640__$1 = state_12640;
if(cljs.core.truth_(inst_12631)){
var statearr_12645_12803 = state_12640__$1;
(statearr_12645_12803[(1)] = (5));

} else {
var statearr_12646_12804 = state_12640__$1;
(statearr_12646_12804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12641 === (3))){
var inst_12638 = (state_12640[(2)]);
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12640__$1,inst_12638);
} else {
if((state_val_12641 === (2))){
var state_12640__$1 = state_12640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12640__$1,(4),jobs);
} else {
if((state_val_12641 === (1))){
var state_12640__$1 = state_12640;
var statearr_12647_12805 = state_12640__$1;
(statearr_12647_12805[(2)] = null);

(statearr_12647_12805[(1)] = (2));


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
});})(__12796,c__6760__auto___12799,G__12627_12797,n__5034__auto___12795,jobs,results,process,async))
;
return ((function (__12796,switch__6704__auto__,c__6760__auto___12799,G__12627_12797,n__5034__auto___12795,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0 = (function (){
var statearr_12651 = [null,null,null,null,null,null,null];
(statearr_12651[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__);

(statearr_12651[(1)] = (1));

return statearr_12651;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1 = (function (state_12640){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12652){if((e12652 instanceof Object)){
var ex__6708__auto__ = e12652;
var statearr_12653_12806 = state_12640;
(statearr_12653_12806[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12807 = state_12640;
state_12640 = G__12807;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = function(state_12640){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1.call(this,state_12640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__;
})()
;})(__12796,switch__6704__auto__,c__6760__auto___12799,G__12627_12797,n__5034__auto___12795,jobs,results,process,async))
})();
var state__6762__auto__ = (function (){var statearr_12654 = f__6761__auto__.call(null);
(statearr_12654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___12799);

return statearr_12654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(__12796,c__6760__auto___12799,G__12627_12797,n__5034__auto___12795,jobs,results,process,async))
);


break;
case "compute":
var c__6760__auto___12808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12796,c__6760__auto___12808,G__12627_12797,n__5034__auto___12795,jobs,results,process,async){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (__12796,c__6760__auto___12808,G__12627_12797,n__5034__auto___12795,jobs,results,process,async){
return (function (state_12667){
var state_val_12668 = (state_12667[(1)]);
if((state_val_12668 === (7))){
var inst_12663 = (state_12667[(2)]);
var state_12667__$1 = state_12667;
var statearr_12669_12809 = state_12667__$1;
(statearr_12669_12809[(2)] = inst_12663);

(statearr_12669_12809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (6))){
var state_12667__$1 = state_12667;
var statearr_12670_12810 = state_12667__$1;
(statearr_12670_12810[(2)] = null);

(statearr_12670_12810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (5))){
var state_12667__$1 = state_12667;
var statearr_12671_12811 = state_12667__$1;
(statearr_12671_12811[(2)] = null);

(statearr_12671_12811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (4))){
var inst_12657 = (state_12667[(2)]);
var inst_12658 = process.call(null,inst_12657);
var state_12667__$1 = state_12667;
if(cljs.core.truth_(inst_12658)){
var statearr_12672_12812 = state_12667__$1;
(statearr_12672_12812[(1)] = (5));

} else {
var statearr_12673_12813 = state_12667__$1;
(statearr_12673_12813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12668 === (3))){
var inst_12665 = (state_12667[(2)]);
var state_12667__$1 = state_12667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12667__$1,inst_12665);
} else {
if((state_val_12668 === (2))){
var state_12667__$1 = state_12667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12667__$1,(4),jobs);
} else {
if((state_val_12668 === (1))){
var state_12667__$1 = state_12667;
var statearr_12674_12814 = state_12667__$1;
(statearr_12674_12814[(2)] = null);

(statearr_12674_12814[(1)] = (2));


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
});})(__12796,c__6760__auto___12808,G__12627_12797,n__5034__auto___12795,jobs,results,process,async))
;
return ((function (__12796,switch__6704__auto__,c__6760__auto___12808,G__12627_12797,n__5034__auto___12795,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0 = (function (){
var statearr_12678 = [null,null,null,null,null,null,null];
(statearr_12678[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__);

(statearr_12678[(1)] = (1));

return statearr_12678;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1 = (function (state_12667){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12679){if((e12679 instanceof Object)){
var ex__6708__auto__ = e12679;
var statearr_12680_12815 = state_12667;
(statearr_12680_12815[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12816 = state_12667;
state_12667 = G__12816;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = function(state_12667){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1.call(this,state_12667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__;
})()
;})(__12796,switch__6704__auto__,c__6760__auto___12808,G__12627_12797,n__5034__auto___12795,jobs,results,process,async))
})();
var state__6762__auto__ = (function (){var statearr_12681 = f__6761__auto__.call(null);
(statearr_12681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___12808);

return statearr_12681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(__12796,c__6760__auto___12808,G__12627_12797,n__5034__auto___12795,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12817 = (__12796 + (1));
__12796 = G__12817;
continue;
} else {
}
break;
}

var c__6760__auto___12818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___12818,jobs,results,process,async){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___12818,jobs,results,process,async){
return (function (state_12703){
var state_val_12704 = (state_12703[(1)]);
if((state_val_12704 === (9))){
var inst_12696 = (state_12703[(2)]);
var state_12703__$1 = (function (){var statearr_12705 = state_12703;
(statearr_12705[(7)] = inst_12696);

return statearr_12705;
})();
var statearr_12706_12819 = state_12703__$1;
(statearr_12706_12819[(2)] = null);

(statearr_12706_12819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (8))){
var inst_12689 = (state_12703[(8)]);
var inst_12694 = (state_12703[(2)]);
var state_12703__$1 = (function (){var statearr_12707 = state_12703;
(statearr_12707[(9)] = inst_12694);

return statearr_12707;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12703__$1,(9),results,inst_12689);
} else {
if((state_val_12704 === (7))){
var inst_12699 = (state_12703[(2)]);
var state_12703__$1 = state_12703;
var statearr_12708_12820 = state_12703__$1;
(statearr_12708_12820[(2)] = inst_12699);

(statearr_12708_12820[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (6))){
var inst_12689 = (state_12703[(8)]);
var inst_12684 = (state_12703[(10)]);
var inst_12689__$1 = cljs.core.async.chan.call(null,(1));
var inst_12690 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12691 = [inst_12684,inst_12689__$1];
var inst_12692 = (new cljs.core.PersistentVector(null,2,(5),inst_12690,inst_12691,null));
var state_12703__$1 = (function (){var statearr_12709 = state_12703;
(statearr_12709[(8)] = inst_12689__$1);

return statearr_12709;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12703__$1,(8),jobs,inst_12692);
} else {
if((state_val_12704 === (5))){
var inst_12687 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12703__$1 = state_12703;
var statearr_12710_12821 = state_12703__$1;
(statearr_12710_12821[(2)] = inst_12687);

(statearr_12710_12821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (4))){
var inst_12684 = (state_12703[(10)]);
var inst_12684__$1 = (state_12703[(2)]);
var inst_12685 = (inst_12684__$1 == null);
var state_12703__$1 = (function (){var statearr_12711 = state_12703;
(statearr_12711[(10)] = inst_12684__$1);

return statearr_12711;
})();
if(cljs.core.truth_(inst_12685)){
var statearr_12712_12822 = state_12703__$1;
(statearr_12712_12822[(1)] = (5));

} else {
var statearr_12713_12823 = state_12703__$1;
(statearr_12713_12823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12704 === (3))){
var inst_12701 = (state_12703[(2)]);
var state_12703__$1 = state_12703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12703__$1,inst_12701);
} else {
if((state_val_12704 === (2))){
var state_12703__$1 = state_12703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12703__$1,(4),from);
} else {
if((state_val_12704 === (1))){
var state_12703__$1 = state_12703;
var statearr_12714_12824 = state_12703__$1;
(statearr_12714_12824[(2)] = null);

(statearr_12714_12824[(1)] = (2));


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
});})(c__6760__auto___12818,jobs,results,process,async))
;
return ((function (switch__6704__auto__,c__6760__auto___12818,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0 = (function (){
var statearr_12718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12718[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__);

(statearr_12718[(1)] = (1));

return statearr_12718;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1 = (function (state_12703){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12719){if((e12719 instanceof Object)){
var ex__6708__auto__ = e12719;
var statearr_12720_12825 = state_12703;
(statearr_12720_12825[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12826 = state_12703;
state_12703 = G__12826;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = function(state_12703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1.call(this,state_12703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___12818,jobs,results,process,async))
})();
var state__6762__auto__ = (function (){var statearr_12721 = f__6761__auto__.call(null);
(statearr_12721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___12818);

return statearr_12721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___12818,jobs,results,process,async))
);


var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__,jobs,results,process,async){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__,jobs,results,process,async){
return (function (state_12759){
var state_val_12760 = (state_12759[(1)]);
if((state_val_12760 === (7))){
var inst_12755 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12761_12827 = state_12759__$1;
(statearr_12761_12827[(2)] = inst_12755);

(statearr_12761_12827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (20))){
var state_12759__$1 = state_12759;
var statearr_12762_12828 = state_12759__$1;
(statearr_12762_12828[(2)] = null);

(statearr_12762_12828[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (1))){
var state_12759__$1 = state_12759;
var statearr_12763_12829 = state_12759__$1;
(statearr_12763_12829[(2)] = null);

(statearr_12763_12829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (4))){
var inst_12724 = (state_12759[(7)]);
var inst_12724__$1 = (state_12759[(2)]);
var inst_12725 = (inst_12724__$1 == null);
var state_12759__$1 = (function (){var statearr_12764 = state_12759;
(statearr_12764[(7)] = inst_12724__$1);

return statearr_12764;
})();
if(cljs.core.truth_(inst_12725)){
var statearr_12765_12830 = state_12759__$1;
(statearr_12765_12830[(1)] = (5));

} else {
var statearr_12766_12831 = state_12759__$1;
(statearr_12766_12831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (15))){
var inst_12737 = (state_12759[(8)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12759__$1,(18),to,inst_12737);
} else {
if((state_val_12760 === (21))){
var inst_12750 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12767_12832 = state_12759__$1;
(statearr_12767_12832[(2)] = inst_12750);

(statearr_12767_12832[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (13))){
var inst_12752 = (state_12759[(2)]);
var state_12759__$1 = (function (){var statearr_12768 = state_12759;
(statearr_12768[(9)] = inst_12752);

return statearr_12768;
})();
var statearr_12769_12833 = state_12759__$1;
(statearr_12769_12833[(2)] = null);

(statearr_12769_12833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (6))){
var inst_12724 = (state_12759[(7)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12759__$1,(11),inst_12724);
} else {
if((state_val_12760 === (17))){
var inst_12745 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
if(cljs.core.truth_(inst_12745)){
var statearr_12770_12834 = state_12759__$1;
(statearr_12770_12834[(1)] = (19));

} else {
var statearr_12771_12835 = state_12759__$1;
(statearr_12771_12835[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (3))){
var inst_12757 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12759__$1,inst_12757);
} else {
if((state_val_12760 === (12))){
var inst_12734 = (state_12759[(10)]);
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12759__$1,(14),inst_12734);
} else {
if((state_val_12760 === (2))){
var state_12759__$1 = state_12759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12759__$1,(4),results);
} else {
if((state_val_12760 === (19))){
var state_12759__$1 = state_12759;
var statearr_12772_12836 = state_12759__$1;
(statearr_12772_12836[(2)] = null);

(statearr_12772_12836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (11))){
var inst_12734 = (state_12759[(2)]);
var state_12759__$1 = (function (){var statearr_12773 = state_12759;
(statearr_12773[(10)] = inst_12734);

return statearr_12773;
})();
var statearr_12774_12837 = state_12759__$1;
(statearr_12774_12837[(2)] = null);

(statearr_12774_12837[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (9))){
var state_12759__$1 = state_12759;
var statearr_12775_12838 = state_12759__$1;
(statearr_12775_12838[(2)] = null);

(statearr_12775_12838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (5))){
var state_12759__$1 = state_12759;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12776_12839 = state_12759__$1;
(statearr_12776_12839[(1)] = (8));

} else {
var statearr_12777_12840 = state_12759__$1;
(statearr_12777_12840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (14))){
var inst_12737 = (state_12759[(8)]);
var inst_12739 = (state_12759[(11)]);
var inst_12737__$1 = (state_12759[(2)]);
var inst_12738 = (inst_12737__$1 == null);
var inst_12739__$1 = cljs.core.not.call(null,inst_12738);
var state_12759__$1 = (function (){var statearr_12778 = state_12759;
(statearr_12778[(8)] = inst_12737__$1);

(statearr_12778[(11)] = inst_12739__$1);

return statearr_12778;
})();
if(inst_12739__$1){
var statearr_12779_12841 = state_12759__$1;
(statearr_12779_12841[(1)] = (15));

} else {
var statearr_12780_12842 = state_12759__$1;
(statearr_12780_12842[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (16))){
var inst_12739 = (state_12759[(11)]);
var state_12759__$1 = state_12759;
var statearr_12781_12843 = state_12759__$1;
(statearr_12781_12843[(2)] = inst_12739);

(statearr_12781_12843[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (10))){
var inst_12731 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12782_12844 = state_12759__$1;
(statearr_12782_12844[(2)] = inst_12731);

(statearr_12782_12844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (18))){
var inst_12742 = (state_12759[(2)]);
var state_12759__$1 = state_12759;
var statearr_12783_12845 = state_12759__$1;
(statearr_12783_12845[(2)] = inst_12742);

(statearr_12783_12845[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12760 === (8))){
var inst_12728 = cljs.core.async.close_BANG_.call(null,to);
var state_12759__$1 = state_12759;
var statearr_12784_12846 = state_12759__$1;
(statearr_12784_12846[(2)] = inst_12728);

(statearr_12784_12846[(1)] = (10));


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
});})(c__6760__auto__,jobs,results,process,async))
;
return ((function (switch__6704__auto__,c__6760__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0 = (function (){
var statearr_12788 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__);

(statearr_12788[(1)] = (1));

return statearr_12788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1 = (function (state_12759){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12789){if((e12789 instanceof Object)){
var ex__6708__auto__ = e12789;
var statearr_12790_12847 = state_12759;
(statearr_12790_12847[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12848 = state_12759;
state_12759 = G__12848;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__ = function(state_12759){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1.call(this,state_12759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6705__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__,jobs,results,process,async))
})();
var state__6762__auto__ = (function (){var statearr_12791 = f__6761__auto__.call(null);
(statearr_12791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_12791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__,jobs,results,process,async))
);

return c__6760__auto__;
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
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
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
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
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
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6760__auto___12949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___12949,tc,fc){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___12949,tc,fc){
return (function (state_12924){
var state_val_12925 = (state_12924[(1)]);
if((state_val_12925 === (7))){
var inst_12920 = (state_12924[(2)]);
var state_12924__$1 = state_12924;
var statearr_12926_12950 = state_12924__$1;
(statearr_12926_12950[(2)] = inst_12920);

(statearr_12926_12950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (1))){
var state_12924__$1 = state_12924;
var statearr_12927_12951 = state_12924__$1;
(statearr_12927_12951[(2)] = null);

(statearr_12927_12951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (4))){
var inst_12901 = (state_12924[(7)]);
var inst_12901__$1 = (state_12924[(2)]);
var inst_12902 = (inst_12901__$1 == null);
var state_12924__$1 = (function (){var statearr_12928 = state_12924;
(statearr_12928[(7)] = inst_12901__$1);

return statearr_12928;
})();
if(cljs.core.truth_(inst_12902)){
var statearr_12929_12952 = state_12924__$1;
(statearr_12929_12952[(1)] = (5));

} else {
var statearr_12930_12953 = state_12924__$1;
(statearr_12930_12953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (13))){
var state_12924__$1 = state_12924;
var statearr_12931_12954 = state_12924__$1;
(statearr_12931_12954[(2)] = null);

(statearr_12931_12954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (6))){
var inst_12901 = (state_12924[(7)]);
var inst_12907 = p.call(null,inst_12901);
var state_12924__$1 = state_12924;
if(cljs.core.truth_(inst_12907)){
var statearr_12932_12955 = state_12924__$1;
(statearr_12932_12955[(1)] = (9));

} else {
var statearr_12933_12956 = state_12924__$1;
(statearr_12933_12956[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (3))){
var inst_12922 = (state_12924[(2)]);
var state_12924__$1 = state_12924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12924__$1,inst_12922);
} else {
if((state_val_12925 === (12))){
var state_12924__$1 = state_12924;
var statearr_12934_12957 = state_12924__$1;
(statearr_12934_12957[(2)] = null);

(statearr_12934_12957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (2))){
var state_12924__$1 = state_12924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12924__$1,(4),ch);
} else {
if((state_val_12925 === (11))){
var inst_12901 = (state_12924[(7)]);
var inst_12911 = (state_12924[(2)]);
var state_12924__$1 = state_12924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12924__$1,(8),inst_12911,inst_12901);
} else {
if((state_val_12925 === (9))){
var state_12924__$1 = state_12924;
var statearr_12935_12958 = state_12924__$1;
(statearr_12935_12958[(2)] = tc);

(statearr_12935_12958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (5))){
var inst_12904 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12905 = cljs.core.async.close_BANG_.call(null,fc);
var state_12924__$1 = (function (){var statearr_12936 = state_12924;
(statearr_12936[(8)] = inst_12904);

return statearr_12936;
})();
var statearr_12937_12959 = state_12924__$1;
(statearr_12937_12959[(2)] = inst_12905);

(statearr_12937_12959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (14))){
var inst_12918 = (state_12924[(2)]);
var state_12924__$1 = state_12924;
var statearr_12938_12960 = state_12924__$1;
(statearr_12938_12960[(2)] = inst_12918);

(statearr_12938_12960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (10))){
var state_12924__$1 = state_12924;
var statearr_12939_12961 = state_12924__$1;
(statearr_12939_12961[(2)] = fc);

(statearr_12939_12961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12925 === (8))){
var inst_12913 = (state_12924[(2)]);
var state_12924__$1 = state_12924;
if(cljs.core.truth_(inst_12913)){
var statearr_12940_12962 = state_12924__$1;
(statearr_12940_12962[(1)] = (12));

} else {
var statearr_12941_12963 = state_12924__$1;
(statearr_12941_12963[(1)] = (13));

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
});})(c__6760__auto___12949,tc,fc))
;
return ((function (switch__6704__auto__,c__6760__auto___12949,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__6705__auto__ = null;
var cljs$core$async$split_$_state_machine__6705__auto____0 = (function (){
var statearr_12945 = [null,null,null,null,null,null,null,null,null];
(statearr_12945[(0)] = cljs$core$async$split_$_state_machine__6705__auto__);

(statearr_12945[(1)] = (1));

return statearr_12945;
});
var cljs$core$async$split_$_state_machine__6705__auto____1 = (function (state_12924){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_12924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e12946){if((e12946 instanceof Object)){
var ex__6708__auto__ = e12946;
var statearr_12947_12964 = state_12924;
(statearr_12947_12964[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12965 = state_12924;
state_12924 = G__12965;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__6705__auto__ = function(state_12924){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__6705__auto____1.call(this,state_12924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__6705__auto____0;
cljs$core$async$split_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__6705__auto____1;
return cljs$core$async$split_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___12949,tc,fc))
})();
var state__6762__auto__ = (function (){var statearr_12948 = f__6761__auto__.call(null);
(statearr_12948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___12949);

return statearr_12948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___12949,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__){
return (function (state_13012){
var state_val_13013 = (state_13012[(1)]);
if((state_val_13013 === (7))){
var inst_13008 = (state_13012[(2)]);
var state_13012__$1 = state_13012;
var statearr_13014_13030 = state_13012__$1;
(statearr_13014_13030[(2)] = inst_13008);

(statearr_13014_13030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (6))){
var inst_13001 = (state_13012[(7)]);
var inst_12998 = (state_13012[(8)]);
var inst_13005 = f.call(null,inst_12998,inst_13001);
var inst_12998__$1 = inst_13005;
var state_13012__$1 = (function (){var statearr_13015 = state_13012;
(statearr_13015[(8)] = inst_12998__$1);

return statearr_13015;
})();
var statearr_13016_13031 = state_13012__$1;
(statearr_13016_13031[(2)] = null);

(statearr_13016_13031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (5))){
var inst_12998 = (state_13012[(8)]);
var state_13012__$1 = state_13012;
var statearr_13017_13032 = state_13012__$1;
(statearr_13017_13032[(2)] = inst_12998);

(statearr_13017_13032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (4))){
var inst_13001 = (state_13012[(7)]);
var inst_13001__$1 = (state_13012[(2)]);
var inst_13002 = (inst_13001__$1 == null);
var state_13012__$1 = (function (){var statearr_13018 = state_13012;
(statearr_13018[(7)] = inst_13001__$1);

return statearr_13018;
})();
if(cljs.core.truth_(inst_13002)){
var statearr_13019_13033 = state_13012__$1;
(statearr_13019_13033[(1)] = (5));

} else {
var statearr_13020_13034 = state_13012__$1;
(statearr_13020_13034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13013 === (3))){
var inst_13010 = (state_13012[(2)]);
var state_13012__$1 = state_13012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13012__$1,inst_13010);
} else {
if((state_val_13013 === (2))){
var state_13012__$1 = state_13012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13012__$1,(4),ch);
} else {
if((state_val_13013 === (1))){
var inst_12998 = init;
var state_13012__$1 = (function (){var statearr_13021 = state_13012;
(statearr_13021[(8)] = inst_12998);

return statearr_13021;
})();
var statearr_13022_13035 = state_13012__$1;
(statearr_13022_13035[(2)] = null);

(statearr_13022_13035[(1)] = (2));


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
});})(c__6760__auto__))
;
return ((function (switch__6704__auto__,c__6760__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6705__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6705__auto____0 = (function (){
var statearr_13026 = [null,null,null,null,null,null,null,null,null];
(statearr_13026[(0)] = cljs$core$async$reduce_$_state_machine__6705__auto__);

(statearr_13026[(1)] = (1));

return statearr_13026;
});
var cljs$core$async$reduce_$_state_machine__6705__auto____1 = (function (state_13012){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_13012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e13027){if((e13027 instanceof Object)){
var ex__6708__auto__ = e13027;
var statearr_13028_13036 = state_13012;
(statearr_13028_13036[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13037 = state_13012;
state_13012 = G__13037;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6705__auto__ = function(state_13012){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6705__auto____1.call(this,state_13012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6705__auto____0;
cljs$core$async$reduce_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6705__auto____1;
return cljs$core$async$reduce_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__))
})();
var state__6762__auto__ = (function (){var statearr_13029 = f__6761__auto__.call(null);
(statearr_13029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_13029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__))
);

return c__6760__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__){
return (function (state_13111){
var state_val_13112 = (state_13111[(1)]);
if((state_val_13112 === (7))){
var inst_13093 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13113_13136 = state_13111__$1;
(statearr_13113_13136[(2)] = inst_13093);

(statearr_13113_13136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (1))){
var inst_13087 = cljs.core.seq.call(null,coll);
var inst_13088 = inst_13087;
var state_13111__$1 = (function (){var statearr_13114 = state_13111;
(statearr_13114[(7)] = inst_13088);

return statearr_13114;
})();
var statearr_13115_13137 = state_13111__$1;
(statearr_13115_13137[(2)] = null);

(statearr_13115_13137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (4))){
var inst_13088 = (state_13111[(7)]);
var inst_13091 = cljs.core.first.call(null,inst_13088);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13111__$1,(7),ch,inst_13091);
} else {
if((state_val_13112 === (13))){
var inst_13105 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13116_13138 = state_13111__$1;
(statearr_13116_13138[(2)] = inst_13105);

(statearr_13116_13138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (6))){
var inst_13096 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13096)){
var statearr_13117_13139 = state_13111__$1;
(statearr_13117_13139[(1)] = (8));

} else {
var statearr_13118_13140 = state_13111__$1;
(statearr_13118_13140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (3))){
var inst_13109 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13111__$1,inst_13109);
} else {
if((state_val_13112 === (12))){
var state_13111__$1 = state_13111;
var statearr_13119_13141 = state_13111__$1;
(statearr_13119_13141[(2)] = null);

(statearr_13119_13141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (2))){
var inst_13088 = (state_13111[(7)]);
var state_13111__$1 = state_13111;
if(cljs.core.truth_(inst_13088)){
var statearr_13120_13142 = state_13111__$1;
(statearr_13120_13142[(1)] = (4));

} else {
var statearr_13121_13143 = state_13111__$1;
(statearr_13121_13143[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (11))){
var inst_13102 = cljs.core.async.close_BANG_.call(null,ch);
var state_13111__$1 = state_13111;
var statearr_13122_13144 = state_13111__$1;
(statearr_13122_13144[(2)] = inst_13102);

(statearr_13122_13144[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (9))){
var state_13111__$1 = state_13111;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13123_13145 = state_13111__$1;
(statearr_13123_13145[(1)] = (11));

} else {
var statearr_13124_13146 = state_13111__$1;
(statearr_13124_13146[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (5))){
var inst_13088 = (state_13111[(7)]);
var state_13111__$1 = state_13111;
var statearr_13125_13147 = state_13111__$1;
(statearr_13125_13147[(2)] = inst_13088);

(statearr_13125_13147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (10))){
var inst_13107 = (state_13111[(2)]);
var state_13111__$1 = state_13111;
var statearr_13126_13148 = state_13111__$1;
(statearr_13126_13148[(2)] = inst_13107);

(statearr_13126_13148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13112 === (8))){
var inst_13088 = (state_13111[(7)]);
var inst_13098 = cljs.core.next.call(null,inst_13088);
var inst_13088__$1 = inst_13098;
var state_13111__$1 = (function (){var statearr_13127 = state_13111;
(statearr_13127[(7)] = inst_13088__$1);

return statearr_13127;
})();
var statearr_13128_13149 = state_13111__$1;
(statearr_13128_13149[(2)] = null);

(statearr_13128_13149[(1)] = (2));


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
});})(c__6760__auto__))
;
return ((function (switch__6704__auto__,c__6760__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__6705__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__6705__auto____0 = (function (){
var statearr_13132 = [null,null,null,null,null,null,null,null];
(statearr_13132[(0)] = cljs$core$async$onto_chan_$_state_machine__6705__auto__);

(statearr_13132[(1)] = (1));

return statearr_13132;
});
var cljs$core$async$onto_chan_$_state_machine__6705__auto____1 = (function (state_13111){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_13111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e13133){if((e13133 instanceof Object)){
var ex__6708__auto__ = e13133;
var statearr_13134_13150 = state_13111;
(statearr_13134_13150[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13151 = state_13111;
state_13111 = G__13151;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__6705__auto__ = function(state_13111){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__6705__auto____1.call(this,state_13111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__6705__auto____0;
cljs$core$async$onto_chan_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__6705__auto____1;
return cljs$core$async$onto_chan_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__))
})();
var state__6762__auto__ = (function (){var statearr_13135 = f__6761__auto__.call(null);
(statearr_13135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_13135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__))
);

return c__6760__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj13153 = {};
return obj13153;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4137__auto__ = _;
if(and__4137__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4137__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4785__auto__ = (((_ == null))?null:_);
return (function (){var or__4149__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj13155 = {};
return obj13155;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
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
if(typeof cljs.core.async.t13377 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13377 = (function (cs,ch,mult,meta13378){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13378 = meta13378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13377.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t13377.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t13377.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t13377.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t13377.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t13377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13379){
var self__ = this;
var _13379__$1 = this;
return self__.meta13378;
});})(cs))
;

cljs.core.async.t13377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13379,meta13378__$1){
var self__ = this;
var _13379__$1 = this;
return (new cljs.core.async.t13377(self__.cs,self__.ch,self__.mult,meta13378__$1));
});})(cs))
;

cljs.core.async.t13377.cljs$lang$type = true;

cljs.core.async.t13377.cljs$lang$ctorStr = "cljs.core.async/t13377";

cljs.core.async.t13377.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t13377");
});})(cs))
;

cljs.core.async.__GT_t13377 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t13377(cs__$1,ch__$1,mult__$1,meta13378){
return (new cljs.core.async.t13377(cs__$1,ch__$1,mult__$1,meta13378));
});})(cs))
;

}

return (new cljs.core.async.t13377(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__6760__auto___13598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___13598,cs,m,dchan,dctr,done){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___13598,cs,m,dchan,dctr,done){
return (function (state_13510){
var state_val_13511 = (state_13510[(1)]);
if((state_val_13511 === (7))){
var inst_13506 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13512_13599 = state_13510__$1;
(statearr_13512_13599[(2)] = inst_13506);

(statearr_13512_13599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (20))){
var inst_13411 = (state_13510[(7)]);
var inst_13421 = cljs.core.first.call(null,inst_13411);
var inst_13422 = cljs.core.nth.call(null,inst_13421,(0),null);
var inst_13423 = cljs.core.nth.call(null,inst_13421,(1),null);
var state_13510__$1 = (function (){var statearr_13513 = state_13510;
(statearr_13513[(8)] = inst_13422);

return statearr_13513;
})();
if(cljs.core.truth_(inst_13423)){
var statearr_13514_13600 = state_13510__$1;
(statearr_13514_13600[(1)] = (22));

} else {
var statearr_13515_13601 = state_13510__$1;
(statearr_13515_13601[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (27))){
var inst_13382 = (state_13510[(9)]);
var inst_13451 = (state_13510[(10)]);
var inst_13453 = (state_13510[(11)]);
var inst_13458 = (state_13510[(12)]);
var inst_13458__$1 = cljs.core._nth.call(null,inst_13451,inst_13453);
var inst_13459 = cljs.core.async.put_BANG_.call(null,inst_13458__$1,inst_13382,done);
var state_13510__$1 = (function (){var statearr_13516 = state_13510;
(statearr_13516[(12)] = inst_13458__$1);

return statearr_13516;
})();
if(cljs.core.truth_(inst_13459)){
var statearr_13517_13602 = state_13510__$1;
(statearr_13517_13602[(1)] = (30));

} else {
var statearr_13518_13603 = state_13510__$1;
(statearr_13518_13603[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (1))){
var state_13510__$1 = state_13510;
var statearr_13519_13604 = state_13510__$1;
(statearr_13519_13604[(2)] = null);

(statearr_13519_13604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (24))){
var inst_13411 = (state_13510[(7)]);
var inst_13428 = (state_13510[(2)]);
var inst_13429 = cljs.core.next.call(null,inst_13411);
var inst_13391 = inst_13429;
var inst_13392 = null;
var inst_13393 = (0);
var inst_13394 = (0);
var state_13510__$1 = (function (){var statearr_13520 = state_13510;
(statearr_13520[(13)] = inst_13394);

(statearr_13520[(14)] = inst_13393);

(statearr_13520[(15)] = inst_13391);

(statearr_13520[(16)] = inst_13428);

(statearr_13520[(17)] = inst_13392);

return statearr_13520;
})();
var statearr_13521_13605 = state_13510__$1;
(statearr_13521_13605[(2)] = null);

(statearr_13521_13605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (39))){
var state_13510__$1 = state_13510;
var statearr_13525_13606 = state_13510__$1;
(statearr_13525_13606[(2)] = null);

(statearr_13525_13606[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (4))){
var inst_13382 = (state_13510[(9)]);
var inst_13382__$1 = (state_13510[(2)]);
var inst_13383 = (inst_13382__$1 == null);
var state_13510__$1 = (function (){var statearr_13526 = state_13510;
(statearr_13526[(9)] = inst_13382__$1);

return statearr_13526;
})();
if(cljs.core.truth_(inst_13383)){
var statearr_13527_13607 = state_13510__$1;
(statearr_13527_13607[(1)] = (5));

} else {
var statearr_13528_13608 = state_13510__$1;
(statearr_13528_13608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (15))){
var inst_13394 = (state_13510[(13)]);
var inst_13393 = (state_13510[(14)]);
var inst_13391 = (state_13510[(15)]);
var inst_13392 = (state_13510[(17)]);
var inst_13407 = (state_13510[(2)]);
var inst_13408 = (inst_13394 + (1));
var tmp13522 = inst_13393;
var tmp13523 = inst_13391;
var tmp13524 = inst_13392;
var inst_13391__$1 = tmp13523;
var inst_13392__$1 = tmp13524;
var inst_13393__$1 = tmp13522;
var inst_13394__$1 = inst_13408;
var state_13510__$1 = (function (){var statearr_13529 = state_13510;
(statearr_13529[(18)] = inst_13407);

(statearr_13529[(13)] = inst_13394__$1);

(statearr_13529[(14)] = inst_13393__$1);

(statearr_13529[(15)] = inst_13391__$1);

(statearr_13529[(17)] = inst_13392__$1);

return statearr_13529;
})();
var statearr_13530_13609 = state_13510__$1;
(statearr_13530_13609[(2)] = null);

(statearr_13530_13609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (21))){
var inst_13432 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13534_13610 = state_13510__$1;
(statearr_13534_13610[(2)] = inst_13432);

(statearr_13534_13610[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (31))){
var inst_13458 = (state_13510[(12)]);
var inst_13462 = done.call(null,null);
var inst_13463 = cljs.core.async.untap_STAR_.call(null,m,inst_13458);
var state_13510__$1 = (function (){var statearr_13535 = state_13510;
(statearr_13535[(19)] = inst_13462);

return statearr_13535;
})();
var statearr_13536_13611 = state_13510__$1;
(statearr_13536_13611[(2)] = inst_13463);

(statearr_13536_13611[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (32))){
var inst_13451 = (state_13510[(10)]);
var inst_13450 = (state_13510[(20)]);
var inst_13453 = (state_13510[(11)]);
var inst_13452 = (state_13510[(21)]);
var inst_13465 = (state_13510[(2)]);
var inst_13466 = (inst_13453 + (1));
var tmp13531 = inst_13451;
var tmp13532 = inst_13450;
var tmp13533 = inst_13452;
var inst_13450__$1 = tmp13532;
var inst_13451__$1 = tmp13531;
var inst_13452__$1 = tmp13533;
var inst_13453__$1 = inst_13466;
var state_13510__$1 = (function (){var statearr_13537 = state_13510;
(statearr_13537[(22)] = inst_13465);

(statearr_13537[(10)] = inst_13451__$1);

(statearr_13537[(20)] = inst_13450__$1);

(statearr_13537[(11)] = inst_13453__$1);

(statearr_13537[(21)] = inst_13452__$1);

return statearr_13537;
})();
var statearr_13538_13612 = state_13510__$1;
(statearr_13538_13612[(2)] = null);

(statearr_13538_13612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (40))){
var inst_13478 = (state_13510[(23)]);
var inst_13482 = done.call(null,null);
var inst_13483 = cljs.core.async.untap_STAR_.call(null,m,inst_13478);
var state_13510__$1 = (function (){var statearr_13539 = state_13510;
(statearr_13539[(24)] = inst_13482);

return statearr_13539;
})();
var statearr_13540_13613 = state_13510__$1;
(statearr_13540_13613[(2)] = inst_13483);

(statearr_13540_13613[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (33))){
var inst_13469 = (state_13510[(25)]);
var inst_13471 = cljs.core.chunked_seq_QMARK_.call(null,inst_13469);
var state_13510__$1 = state_13510;
if(inst_13471){
var statearr_13541_13614 = state_13510__$1;
(statearr_13541_13614[(1)] = (36));

} else {
var statearr_13542_13615 = state_13510__$1;
(statearr_13542_13615[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (13))){
var inst_13401 = (state_13510[(26)]);
var inst_13404 = cljs.core.async.close_BANG_.call(null,inst_13401);
var state_13510__$1 = state_13510;
var statearr_13543_13616 = state_13510__$1;
(statearr_13543_13616[(2)] = inst_13404);

(statearr_13543_13616[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (22))){
var inst_13422 = (state_13510[(8)]);
var inst_13425 = cljs.core.async.close_BANG_.call(null,inst_13422);
var state_13510__$1 = state_13510;
var statearr_13544_13617 = state_13510__$1;
(statearr_13544_13617[(2)] = inst_13425);

(statearr_13544_13617[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (36))){
var inst_13469 = (state_13510[(25)]);
var inst_13473 = cljs.core.chunk_first.call(null,inst_13469);
var inst_13474 = cljs.core.chunk_rest.call(null,inst_13469);
var inst_13475 = cljs.core.count.call(null,inst_13473);
var inst_13450 = inst_13474;
var inst_13451 = inst_13473;
var inst_13452 = inst_13475;
var inst_13453 = (0);
var state_13510__$1 = (function (){var statearr_13545 = state_13510;
(statearr_13545[(10)] = inst_13451);

(statearr_13545[(20)] = inst_13450);

(statearr_13545[(11)] = inst_13453);

(statearr_13545[(21)] = inst_13452);

return statearr_13545;
})();
var statearr_13546_13618 = state_13510__$1;
(statearr_13546_13618[(2)] = null);

(statearr_13546_13618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (41))){
var inst_13469 = (state_13510[(25)]);
var inst_13485 = (state_13510[(2)]);
var inst_13486 = cljs.core.next.call(null,inst_13469);
var inst_13450 = inst_13486;
var inst_13451 = null;
var inst_13452 = (0);
var inst_13453 = (0);
var state_13510__$1 = (function (){var statearr_13547 = state_13510;
(statearr_13547[(10)] = inst_13451);

(statearr_13547[(20)] = inst_13450);

(statearr_13547[(11)] = inst_13453);

(statearr_13547[(21)] = inst_13452);

(statearr_13547[(27)] = inst_13485);

return statearr_13547;
})();
var statearr_13548_13619 = state_13510__$1;
(statearr_13548_13619[(2)] = null);

(statearr_13548_13619[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (43))){
var state_13510__$1 = state_13510;
var statearr_13549_13620 = state_13510__$1;
(statearr_13549_13620[(2)] = null);

(statearr_13549_13620[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (29))){
var inst_13494 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13550_13621 = state_13510__$1;
(statearr_13550_13621[(2)] = inst_13494);

(statearr_13550_13621[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (44))){
var inst_13503 = (state_13510[(2)]);
var state_13510__$1 = (function (){var statearr_13551 = state_13510;
(statearr_13551[(28)] = inst_13503);

return statearr_13551;
})();
var statearr_13552_13622 = state_13510__$1;
(statearr_13552_13622[(2)] = null);

(statearr_13552_13622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (6))){
var inst_13442 = (state_13510[(29)]);
var inst_13441 = cljs.core.deref.call(null,cs);
var inst_13442__$1 = cljs.core.keys.call(null,inst_13441);
var inst_13443 = cljs.core.count.call(null,inst_13442__$1);
var inst_13444 = cljs.core.reset_BANG_.call(null,dctr,inst_13443);
var inst_13449 = cljs.core.seq.call(null,inst_13442__$1);
var inst_13450 = inst_13449;
var inst_13451 = null;
var inst_13452 = (0);
var inst_13453 = (0);
var state_13510__$1 = (function (){var statearr_13553 = state_13510;
(statearr_13553[(10)] = inst_13451);

(statearr_13553[(20)] = inst_13450);

(statearr_13553[(30)] = inst_13444);

(statearr_13553[(11)] = inst_13453);

(statearr_13553[(21)] = inst_13452);

(statearr_13553[(29)] = inst_13442__$1);

return statearr_13553;
})();
var statearr_13554_13623 = state_13510__$1;
(statearr_13554_13623[(2)] = null);

(statearr_13554_13623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (28))){
var inst_13469 = (state_13510[(25)]);
var inst_13450 = (state_13510[(20)]);
var inst_13469__$1 = cljs.core.seq.call(null,inst_13450);
var state_13510__$1 = (function (){var statearr_13555 = state_13510;
(statearr_13555[(25)] = inst_13469__$1);

return statearr_13555;
})();
if(inst_13469__$1){
var statearr_13556_13624 = state_13510__$1;
(statearr_13556_13624[(1)] = (33));

} else {
var statearr_13557_13625 = state_13510__$1;
(statearr_13557_13625[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (25))){
var inst_13453 = (state_13510[(11)]);
var inst_13452 = (state_13510[(21)]);
var inst_13455 = (inst_13453 < inst_13452);
var inst_13456 = inst_13455;
var state_13510__$1 = state_13510;
if(cljs.core.truth_(inst_13456)){
var statearr_13558_13626 = state_13510__$1;
(statearr_13558_13626[(1)] = (27));

} else {
var statearr_13559_13627 = state_13510__$1;
(statearr_13559_13627[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (34))){
var state_13510__$1 = state_13510;
var statearr_13560_13628 = state_13510__$1;
(statearr_13560_13628[(2)] = null);

(statearr_13560_13628[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (17))){
var state_13510__$1 = state_13510;
var statearr_13561_13629 = state_13510__$1;
(statearr_13561_13629[(2)] = null);

(statearr_13561_13629[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (3))){
var inst_13508 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13510__$1,inst_13508);
} else {
if((state_val_13511 === (12))){
var inst_13437 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13562_13630 = state_13510__$1;
(statearr_13562_13630[(2)] = inst_13437);

(statearr_13562_13630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (2))){
var state_13510__$1 = state_13510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13510__$1,(4),ch);
} else {
if((state_val_13511 === (23))){
var state_13510__$1 = state_13510;
var statearr_13563_13631 = state_13510__$1;
(statearr_13563_13631[(2)] = null);

(statearr_13563_13631[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (35))){
var inst_13492 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13564_13632 = state_13510__$1;
(statearr_13564_13632[(2)] = inst_13492);

(statearr_13564_13632[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (19))){
var inst_13411 = (state_13510[(7)]);
var inst_13415 = cljs.core.chunk_first.call(null,inst_13411);
var inst_13416 = cljs.core.chunk_rest.call(null,inst_13411);
var inst_13417 = cljs.core.count.call(null,inst_13415);
var inst_13391 = inst_13416;
var inst_13392 = inst_13415;
var inst_13393 = inst_13417;
var inst_13394 = (0);
var state_13510__$1 = (function (){var statearr_13565 = state_13510;
(statearr_13565[(13)] = inst_13394);

(statearr_13565[(14)] = inst_13393);

(statearr_13565[(15)] = inst_13391);

(statearr_13565[(17)] = inst_13392);

return statearr_13565;
})();
var statearr_13566_13633 = state_13510__$1;
(statearr_13566_13633[(2)] = null);

(statearr_13566_13633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (11))){
var inst_13391 = (state_13510[(15)]);
var inst_13411 = (state_13510[(7)]);
var inst_13411__$1 = cljs.core.seq.call(null,inst_13391);
var state_13510__$1 = (function (){var statearr_13567 = state_13510;
(statearr_13567[(7)] = inst_13411__$1);

return statearr_13567;
})();
if(inst_13411__$1){
var statearr_13568_13634 = state_13510__$1;
(statearr_13568_13634[(1)] = (16));

} else {
var statearr_13569_13635 = state_13510__$1;
(statearr_13569_13635[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (9))){
var inst_13439 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13570_13636 = state_13510__$1;
(statearr_13570_13636[(2)] = inst_13439);

(statearr_13570_13636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (5))){
var inst_13389 = cljs.core.deref.call(null,cs);
var inst_13390 = cljs.core.seq.call(null,inst_13389);
var inst_13391 = inst_13390;
var inst_13392 = null;
var inst_13393 = (0);
var inst_13394 = (0);
var state_13510__$1 = (function (){var statearr_13571 = state_13510;
(statearr_13571[(13)] = inst_13394);

(statearr_13571[(14)] = inst_13393);

(statearr_13571[(15)] = inst_13391);

(statearr_13571[(17)] = inst_13392);

return statearr_13571;
})();
var statearr_13572_13637 = state_13510__$1;
(statearr_13572_13637[(2)] = null);

(statearr_13572_13637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (14))){
var state_13510__$1 = state_13510;
var statearr_13573_13638 = state_13510__$1;
(statearr_13573_13638[(2)] = null);

(statearr_13573_13638[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (45))){
var inst_13500 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13574_13639 = state_13510__$1;
(statearr_13574_13639[(2)] = inst_13500);

(statearr_13574_13639[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (26))){
var inst_13442 = (state_13510[(29)]);
var inst_13496 = (state_13510[(2)]);
var inst_13497 = cljs.core.seq.call(null,inst_13442);
var state_13510__$1 = (function (){var statearr_13575 = state_13510;
(statearr_13575[(31)] = inst_13496);

return statearr_13575;
})();
if(inst_13497){
var statearr_13576_13640 = state_13510__$1;
(statearr_13576_13640[(1)] = (42));

} else {
var statearr_13577_13641 = state_13510__$1;
(statearr_13577_13641[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (16))){
var inst_13411 = (state_13510[(7)]);
var inst_13413 = cljs.core.chunked_seq_QMARK_.call(null,inst_13411);
var state_13510__$1 = state_13510;
if(inst_13413){
var statearr_13578_13642 = state_13510__$1;
(statearr_13578_13642[(1)] = (19));

} else {
var statearr_13579_13643 = state_13510__$1;
(statearr_13579_13643[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (38))){
var inst_13489 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13580_13644 = state_13510__$1;
(statearr_13580_13644[(2)] = inst_13489);

(statearr_13580_13644[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (30))){
var state_13510__$1 = state_13510;
var statearr_13581_13645 = state_13510__$1;
(statearr_13581_13645[(2)] = null);

(statearr_13581_13645[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (10))){
var inst_13394 = (state_13510[(13)]);
var inst_13392 = (state_13510[(17)]);
var inst_13400 = cljs.core._nth.call(null,inst_13392,inst_13394);
var inst_13401 = cljs.core.nth.call(null,inst_13400,(0),null);
var inst_13402 = cljs.core.nth.call(null,inst_13400,(1),null);
var state_13510__$1 = (function (){var statearr_13582 = state_13510;
(statearr_13582[(26)] = inst_13401);

return statearr_13582;
})();
if(cljs.core.truth_(inst_13402)){
var statearr_13583_13646 = state_13510__$1;
(statearr_13583_13646[(1)] = (13));

} else {
var statearr_13584_13647 = state_13510__$1;
(statearr_13584_13647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (18))){
var inst_13435 = (state_13510[(2)]);
var state_13510__$1 = state_13510;
var statearr_13585_13648 = state_13510__$1;
(statearr_13585_13648[(2)] = inst_13435);

(statearr_13585_13648[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (42))){
var state_13510__$1 = state_13510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13510__$1,(45),dchan);
} else {
if((state_val_13511 === (37))){
var inst_13382 = (state_13510[(9)]);
var inst_13469 = (state_13510[(25)]);
var inst_13478 = (state_13510[(23)]);
var inst_13478__$1 = cljs.core.first.call(null,inst_13469);
var inst_13479 = cljs.core.async.put_BANG_.call(null,inst_13478__$1,inst_13382,done);
var state_13510__$1 = (function (){var statearr_13586 = state_13510;
(statearr_13586[(23)] = inst_13478__$1);

return statearr_13586;
})();
if(cljs.core.truth_(inst_13479)){
var statearr_13587_13649 = state_13510__$1;
(statearr_13587_13649[(1)] = (39));

} else {
var statearr_13588_13650 = state_13510__$1;
(statearr_13588_13650[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13511 === (8))){
var inst_13394 = (state_13510[(13)]);
var inst_13393 = (state_13510[(14)]);
var inst_13396 = (inst_13394 < inst_13393);
var inst_13397 = inst_13396;
var state_13510__$1 = state_13510;
if(cljs.core.truth_(inst_13397)){
var statearr_13589_13651 = state_13510__$1;
(statearr_13589_13651[(1)] = (10));

} else {
var statearr_13590_13652 = state_13510__$1;
(statearr_13590_13652[(1)] = (11));

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
});})(c__6760__auto___13598,cs,m,dchan,dctr,done))
;
return ((function (switch__6704__auto__,c__6760__auto___13598,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6705__auto__ = null;
var cljs$core$async$mult_$_state_machine__6705__auto____0 = (function (){
var statearr_13594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13594[(0)] = cljs$core$async$mult_$_state_machine__6705__auto__);

(statearr_13594[(1)] = (1));

return statearr_13594;
});
var cljs$core$async$mult_$_state_machine__6705__auto____1 = (function (state_13510){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_13510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e13595){if((e13595 instanceof Object)){
var ex__6708__auto__ = e13595;
var statearr_13596_13653 = state_13510;
(statearr_13596_13653[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13654 = state_13510;
state_13510 = G__13654;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6705__auto__ = function(state_13510){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6705__auto____1.call(this,state_13510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6705__auto____0;
cljs$core$async$mult_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6705__auto____1;
return cljs$core$async$mult_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___13598,cs,m,dchan,dctr,done))
})();
var state__6762__auto__ = (function (){var statearr_13597 = f__6761__auto__.call(null);
(statearr_13597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___13598);

return statearr_13597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___13598,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
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

cljs.core.async.Mix = (function (){var obj13656 = {};
return obj13656;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4137__auto__ = m;
if(and__4137__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4137__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4785__auto__ = (((m == null))?null:m);
return (function (){var or__4149__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13657){
var map__13662 = p__13657;
var map__13662__$1 = ((cljs.core.seq_QMARK_.call(null,map__13662))?cljs.core.apply.call(null,cljs.core.hash_map,map__13662):map__13662);
var opts = map__13662__$1;
var statearr_13663_13666 = state;
(statearr_13663_13666[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13662,map__13662__$1,opts){
return (function (val){
var statearr_13664_13667 = state;
(statearr_13664_13667[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13662,map__13662__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_13665_13668 = state;
(statearr_13665_13668[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13657 = null;
if (arguments.length > 3) {
var G__13669__i = 0, G__13669__a = new Array(arguments.length -  3);
while (G__13669__i < G__13669__a.length) {G__13669__a[G__13669__i] = arguments[G__13669__i + 3]; ++G__13669__i;}
  p__13657 = new cljs.core.IndexedSeq(G__13669__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13657);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13670){
var state = cljs.core.first(arglist__13670);
arglist__13670 = cljs.core.next(arglist__13670);
var cont_block = cljs.core.first(arglist__13670);
arglist__13670 = cljs.core.next(arglist__13670);
var ports = cljs.core.first(arglist__13670);
var p__13657 = cljs.core.rest(arglist__13670);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__13657);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
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
if(typeof cljs.core.async.t13790 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13790 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13791){
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
this.meta13791 = meta13791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13790.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t13790.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t13790.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t13790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13792){
var self__ = this;
var _13792__$1 = this;
return self__.meta13791;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13792,meta13791__$1){
var self__ = this;
var _13792__$1 = this;
return (new cljs.core.async.t13790(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13791__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t13790.cljs$lang$type = true;

cljs.core.async.t13790.cljs$lang$ctorStr = "cljs.core.async/t13790";

cljs.core.async.t13790.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t13790");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t13790 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t13790(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13791){
return (new cljs.core.async.t13790(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13791));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t13790(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6760__auto___13909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___13909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___13909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13862){
var state_val_13863 = (state_13862[(1)]);
if((state_val_13863 === (7))){
var inst_13806 = (state_13862[(7)]);
var inst_13811 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13806);
var state_13862__$1 = state_13862;
var statearr_13864_13910 = state_13862__$1;
(statearr_13864_13910[(2)] = inst_13811);

(statearr_13864_13910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (20))){
var inst_13821 = (state_13862[(8)]);
var state_13862__$1 = state_13862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13862__$1,(23),out,inst_13821);
} else {
if((state_val_13863 === (1))){
var inst_13796 = (state_13862[(9)]);
var inst_13796__$1 = calc_state.call(null);
var inst_13797 = cljs.core.seq_QMARK_.call(null,inst_13796__$1);
var state_13862__$1 = (function (){var statearr_13865 = state_13862;
(statearr_13865[(9)] = inst_13796__$1);

return statearr_13865;
})();
if(inst_13797){
var statearr_13866_13911 = state_13862__$1;
(statearr_13866_13911[(1)] = (2));

} else {
var statearr_13867_13912 = state_13862__$1;
(statearr_13867_13912[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (24))){
var inst_13814 = (state_13862[(10)]);
var inst_13806 = inst_13814;
var state_13862__$1 = (function (){var statearr_13868 = state_13862;
(statearr_13868[(7)] = inst_13806);

return statearr_13868;
})();
var statearr_13869_13913 = state_13862__$1;
(statearr_13869_13913[(2)] = null);

(statearr_13869_13913[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (4))){
var inst_13796 = (state_13862[(9)]);
var inst_13802 = (state_13862[(2)]);
var inst_13803 = cljs.core.get.call(null,inst_13802,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13804 = cljs.core.get.call(null,inst_13802,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13805 = cljs.core.get.call(null,inst_13802,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13806 = inst_13796;
var state_13862__$1 = (function (){var statearr_13870 = state_13862;
(statearr_13870[(11)] = inst_13805);

(statearr_13870[(12)] = inst_13803);

(statearr_13870[(13)] = inst_13804);

(statearr_13870[(7)] = inst_13806);

return statearr_13870;
})();
var statearr_13871_13914 = state_13862__$1;
(statearr_13871_13914[(2)] = null);

(statearr_13871_13914[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (15))){
var state_13862__$1 = state_13862;
var statearr_13872_13915 = state_13862__$1;
(statearr_13872_13915[(2)] = null);

(statearr_13872_13915[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (21))){
var inst_13814 = (state_13862[(10)]);
var inst_13806 = inst_13814;
var state_13862__$1 = (function (){var statearr_13873 = state_13862;
(statearr_13873[(7)] = inst_13806);

return statearr_13873;
})();
var statearr_13874_13916 = state_13862__$1;
(statearr_13874_13916[(2)] = null);

(statearr_13874_13916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (13))){
var inst_13858 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
var statearr_13875_13917 = state_13862__$1;
(statearr_13875_13917[(2)] = inst_13858);

(statearr_13875_13917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (22))){
var inst_13856 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
var statearr_13876_13918 = state_13862__$1;
(statearr_13876_13918[(2)] = inst_13856);

(statearr_13876_13918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (6))){
var inst_13860 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13862__$1,inst_13860);
} else {
if((state_val_13863 === (25))){
var state_13862__$1 = state_13862;
var statearr_13877_13919 = state_13862__$1;
(statearr_13877_13919[(2)] = null);

(statearr_13877_13919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (17))){
var inst_13836 = (state_13862[(14)]);
var state_13862__$1 = state_13862;
var statearr_13878_13920 = state_13862__$1;
(statearr_13878_13920[(2)] = inst_13836);

(statearr_13878_13920[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (3))){
var inst_13796 = (state_13862[(9)]);
var state_13862__$1 = state_13862;
var statearr_13879_13921 = state_13862__$1;
(statearr_13879_13921[(2)] = inst_13796);

(statearr_13879_13921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (12))){
var inst_13817 = (state_13862[(15)]);
var inst_13836 = (state_13862[(14)]);
var inst_13822 = (state_13862[(16)]);
var inst_13836__$1 = inst_13817.call(null,inst_13822);
var state_13862__$1 = (function (){var statearr_13880 = state_13862;
(statearr_13880[(14)] = inst_13836__$1);

return statearr_13880;
})();
if(cljs.core.truth_(inst_13836__$1)){
var statearr_13881_13922 = state_13862__$1;
(statearr_13881_13922[(1)] = (17));

} else {
var statearr_13882_13923 = state_13862__$1;
(statearr_13882_13923[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (2))){
var inst_13796 = (state_13862[(9)]);
var inst_13799 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13796);
var state_13862__$1 = state_13862;
var statearr_13883_13924 = state_13862__$1;
(statearr_13883_13924[(2)] = inst_13799);

(statearr_13883_13924[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (23))){
var inst_13847 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
if(cljs.core.truth_(inst_13847)){
var statearr_13884_13925 = state_13862__$1;
(statearr_13884_13925[(1)] = (24));

} else {
var statearr_13885_13926 = state_13862__$1;
(statearr_13885_13926[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (19))){
var inst_13844 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
if(cljs.core.truth_(inst_13844)){
var statearr_13886_13927 = state_13862__$1;
(statearr_13886_13927[(1)] = (20));

} else {
var statearr_13887_13928 = state_13862__$1;
(statearr_13887_13928[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (11))){
var inst_13821 = (state_13862[(8)]);
var inst_13827 = (inst_13821 == null);
var state_13862__$1 = state_13862;
if(cljs.core.truth_(inst_13827)){
var statearr_13888_13929 = state_13862__$1;
(statearr_13888_13929[(1)] = (14));

} else {
var statearr_13889_13930 = state_13862__$1;
(statearr_13889_13930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (9))){
var inst_13814 = (state_13862[(10)]);
var inst_13814__$1 = (state_13862[(2)]);
var inst_13815 = cljs.core.get.call(null,inst_13814__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13816 = cljs.core.get.call(null,inst_13814__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13817 = cljs.core.get.call(null,inst_13814__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_13862__$1 = (function (){var statearr_13890 = state_13862;
(statearr_13890[(15)] = inst_13817);

(statearr_13890[(10)] = inst_13814__$1);

(statearr_13890[(17)] = inst_13816);

return statearr_13890;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13862__$1,(10),inst_13815);
} else {
if((state_val_13863 === (5))){
var inst_13806 = (state_13862[(7)]);
var inst_13809 = cljs.core.seq_QMARK_.call(null,inst_13806);
var state_13862__$1 = state_13862;
if(inst_13809){
var statearr_13891_13931 = state_13862__$1;
(statearr_13891_13931[(1)] = (7));

} else {
var statearr_13892_13932 = state_13862__$1;
(statearr_13892_13932[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (14))){
var inst_13822 = (state_13862[(16)]);
var inst_13829 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13822);
var state_13862__$1 = state_13862;
var statearr_13893_13933 = state_13862__$1;
(statearr_13893_13933[(2)] = inst_13829);

(statearr_13893_13933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (26))){
var inst_13852 = (state_13862[(2)]);
var state_13862__$1 = state_13862;
var statearr_13894_13934 = state_13862__$1;
(statearr_13894_13934[(2)] = inst_13852);

(statearr_13894_13934[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (16))){
var inst_13832 = (state_13862[(2)]);
var inst_13833 = calc_state.call(null);
var inst_13806 = inst_13833;
var state_13862__$1 = (function (){var statearr_13895 = state_13862;
(statearr_13895[(18)] = inst_13832);

(statearr_13895[(7)] = inst_13806);

return statearr_13895;
})();
var statearr_13896_13935 = state_13862__$1;
(statearr_13896_13935[(2)] = null);

(statearr_13896_13935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (10))){
var inst_13821 = (state_13862[(8)]);
var inst_13822 = (state_13862[(16)]);
var inst_13820 = (state_13862[(2)]);
var inst_13821__$1 = cljs.core.nth.call(null,inst_13820,(0),null);
var inst_13822__$1 = cljs.core.nth.call(null,inst_13820,(1),null);
var inst_13823 = (inst_13821__$1 == null);
var inst_13824 = cljs.core._EQ_.call(null,inst_13822__$1,change);
var inst_13825 = (inst_13823) || (inst_13824);
var state_13862__$1 = (function (){var statearr_13897 = state_13862;
(statearr_13897[(8)] = inst_13821__$1);

(statearr_13897[(16)] = inst_13822__$1);

return statearr_13897;
})();
if(cljs.core.truth_(inst_13825)){
var statearr_13898_13936 = state_13862__$1;
(statearr_13898_13936[(1)] = (11));

} else {
var statearr_13899_13937 = state_13862__$1;
(statearr_13899_13937[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (18))){
var inst_13817 = (state_13862[(15)]);
var inst_13816 = (state_13862[(17)]);
var inst_13822 = (state_13862[(16)]);
var inst_13839 = cljs.core.empty_QMARK_.call(null,inst_13817);
var inst_13840 = inst_13816.call(null,inst_13822);
var inst_13841 = cljs.core.not.call(null,inst_13840);
var inst_13842 = (inst_13839) && (inst_13841);
var state_13862__$1 = state_13862;
var statearr_13900_13938 = state_13862__$1;
(statearr_13900_13938[(2)] = inst_13842);

(statearr_13900_13938[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13863 === (8))){
var inst_13806 = (state_13862[(7)]);
var state_13862__$1 = state_13862;
var statearr_13901_13939 = state_13862__$1;
(statearr_13901_13939[(2)] = inst_13806);

(statearr_13901_13939[(1)] = (9));


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
});})(c__6760__auto___13909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6704__auto__,c__6760__auto___13909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6705__auto__ = null;
var cljs$core$async$mix_$_state_machine__6705__auto____0 = (function (){
var statearr_13905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13905[(0)] = cljs$core$async$mix_$_state_machine__6705__auto__);

(statearr_13905[(1)] = (1));

return statearr_13905;
});
var cljs$core$async$mix_$_state_machine__6705__auto____1 = (function (state_13862){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_13862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e13906){if((e13906 instanceof Object)){
var ex__6708__auto__ = e13906;
var statearr_13907_13940 = state_13862;
(statearr_13907_13940[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13941 = state_13862;
state_13862 = G__13941;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6705__auto__ = function(state_13862){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6705__auto____1.call(this,state_13862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6705__auto____0;
cljs$core$async$mix_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6705__auto____1;
return cljs$core$async$mix_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___13909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6762__auto__ = (function (){var statearr_13908 = f__6761__auto__.call(null);
(statearr_13908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___13909);

return statearr_13908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___13909,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj13943 = {};
return obj13943;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4137__auto__ = p;
if(and__4137__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4137__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4785__auto__ = (((p == null))?null:p);
return (function (){var or__4149__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4137__auto__ = p;
if(and__4137__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4137__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4785__auto__ = (((p == null))?null:p);
return (function (){var or__4149__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__4137__auto__ = p;
if(and__4137__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4137__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4785__auto__ = (((p == null))?null:p);
return (function (){var or__4149__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__4137__auto__ = p;
if(and__4137__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4137__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4785__auto__ = (((p == null))?null:p);
return (function (){var or__4149__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4785__auto__)]);
if(or__4149__auto__){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4149__auto____$1){
return or__4149__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

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
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4149__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4149__auto__,mults){
return (function (p1__13944_SHARP_){
if(cljs.core.truth_(p1__13944_SHARP_.call(null,topic))){
return p1__13944_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13944_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4149__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t14067 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14067 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14068){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14068 = meta14068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14067.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t14067.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t14067.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t14067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t14067.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t14067.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14067.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t14067.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14069){
var self__ = this;
var _14069__$1 = this;
return self__.meta14068;
});})(mults,ensure_mult))
;

cljs.core.async.t14067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14069,meta14068__$1){
var self__ = this;
var _14069__$1 = this;
return (new cljs.core.async.t14067(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14068__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t14067.cljs$lang$type = true;

cljs.core.async.t14067.cljs$lang$ctorStr = "cljs.core.async/t14067";

cljs.core.async.t14067.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t14067");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t14067 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t14067(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14068){
return (new cljs.core.async.t14067(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14068));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t14067(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__6760__auto___14189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___14189,mults,ensure_mult,p){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___14189,mults,ensure_mult,p){
return (function (state_14141){
var state_val_14142 = (state_14141[(1)]);
if((state_val_14142 === (7))){
var inst_14137 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14143_14190 = state_14141__$1;
(statearr_14143_14190[(2)] = inst_14137);

(statearr_14143_14190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (20))){
var state_14141__$1 = state_14141;
var statearr_14144_14191 = state_14141__$1;
(statearr_14144_14191[(2)] = null);

(statearr_14144_14191[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (1))){
var state_14141__$1 = state_14141;
var statearr_14145_14192 = state_14141__$1;
(statearr_14145_14192[(2)] = null);

(statearr_14145_14192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (24))){
var inst_14120 = (state_14141[(7)]);
var inst_14129 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14120);
var state_14141__$1 = state_14141;
var statearr_14146_14193 = state_14141__$1;
(statearr_14146_14193[(2)] = inst_14129);

(statearr_14146_14193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (4))){
var inst_14072 = (state_14141[(8)]);
var inst_14072__$1 = (state_14141[(2)]);
var inst_14073 = (inst_14072__$1 == null);
var state_14141__$1 = (function (){var statearr_14147 = state_14141;
(statearr_14147[(8)] = inst_14072__$1);

return statearr_14147;
})();
if(cljs.core.truth_(inst_14073)){
var statearr_14148_14194 = state_14141__$1;
(statearr_14148_14194[(1)] = (5));

} else {
var statearr_14149_14195 = state_14141__$1;
(statearr_14149_14195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (15))){
var inst_14114 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14150_14196 = state_14141__$1;
(statearr_14150_14196[(2)] = inst_14114);

(statearr_14150_14196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (21))){
var inst_14134 = (state_14141[(2)]);
var state_14141__$1 = (function (){var statearr_14151 = state_14141;
(statearr_14151[(9)] = inst_14134);

return statearr_14151;
})();
var statearr_14152_14197 = state_14141__$1;
(statearr_14152_14197[(2)] = null);

(statearr_14152_14197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (13))){
var inst_14096 = (state_14141[(10)]);
var inst_14098 = cljs.core.chunked_seq_QMARK_.call(null,inst_14096);
var state_14141__$1 = state_14141;
if(inst_14098){
var statearr_14153_14198 = state_14141__$1;
(statearr_14153_14198[(1)] = (16));

} else {
var statearr_14154_14199 = state_14141__$1;
(statearr_14154_14199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (22))){
var inst_14126 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
if(cljs.core.truth_(inst_14126)){
var statearr_14155_14200 = state_14141__$1;
(statearr_14155_14200[(1)] = (23));

} else {
var statearr_14156_14201 = state_14141__$1;
(statearr_14156_14201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (6))){
var inst_14122 = (state_14141[(11)]);
var inst_14072 = (state_14141[(8)]);
var inst_14120 = (state_14141[(7)]);
var inst_14120__$1 = topic_fn.call(null,inst_14072);
var inst_14121 = cljs.core.deref.call(null,mults);
var inst_14122__$1 = cljs.core.get.call(null,inst_14121,inst_14120__$1);
var state_14141__$1 = (function (){var statearr_14157 = state_14141;
(statearr_14157[(11)] = inst_14122__$1);

(statearr_14157[(7)] = inst_14120__$1);

return statearr_14157;
})();
if(cljs.core.truth_(inst_14122__$1)){
var statearr_14158_14202 = state_14141__$1;
(statearr_14158_14202[(1)] = (19));

} else {
var statearr_14159_14203 = state_14141__$1;
(statearr_14159_14203[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (25))){
var inst_14131 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14160_14204 = state_14141__$1;
(statearr_14160_14204[(2)] = inst_14131);

(statearr_14160_14204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (17))){
var inst_14096 = (state_14141[(10)]);
var inst_14105 = cljs.core.first.call(null,inst_14096);
var inst_14106 = cljs.core.async.muxch_STAR_.call(null,inst_14105);
var inst_14107 = cljs.core.async.close_BANG_.call(null,inst_14106);
var inst_14108 = cljs.core.next.call(null,inst_14096);
var inst_14082 = inst_14108;
var inst_14083 = null;
var inst_14084 = (0);
var inst_14085 = (0);
var state_14141__$1 = (function (){var statearr_14161 = state_14141;
(statearr_14161[(12)] = inst_14085);

(statearr_14161[(13)] = inst_14082);

(statearr_14161[(14)] = inst_14083);

(statearr_14161[(15)] = inst_14084);

(statearr_14161[(16)] = inst_14107);

return statearr_14161;
})();
var statearr_14162_14205 = state_14141__$1;
(statearr_14162_14205[(2)] = null);

(statearr_14162_14205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (3))){
var inst_14139 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14141__$1,inst_14139);
} else {
if((state_val_14142 === (12))){
var inst_14116 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14163_14206 = state_14141__$1;
(statearr_14163_14206[(2)] = inst_14116);

(statearr_14163_14206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (2))){
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14141__$1,(4),ch);
} else {
if((state_val_14142 === (23))){
var state_14141__$1 = state_14141;
var statearr_14164_14207 = state_14141__$1;
(statearr_14164_14207[(2)] = null);

(statearr_14164_14207[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (19))){
var inst_14122 = (state_14141[(11)]);
var inst_14072 = (state_14141[(8)]);
var inst_14124 = cljs.core.async.muxch_STAR_.call(null,inst_14122);
var state_14141__$1 = state_14141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14141__$1,(22),inst_14124,inst_14072);
} else {
if((state_val_14142 === (11))){
var inst_14096 = (state_14141[(10)]);
var inst_14082 = (state_14141[(13)]);
var inst_14096__$1 = cljs.core.seq.call(null,inst_14082);
var state_14141__$1 = (function (){var statearr_14165 = state_14141;
(statearr_14165[(10)] = inst_14096__$1);

return statearr_14165;
})();
if(inst_14096__$1){
var statearr_14166_14208 = state_14141__$1;
(statearr_14166_14208[(1)] = (13));

} else {
var statearr_14167_14209 = state_14141__$1;
(statearr_14167_14209[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (9))){
var inst_14118 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14168_14210 = state_14141__$1;
(statearr_14168_14210[(2)] = inst_14118);

(statearr_14168_14210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (5))){
var inst_14079 = cljs.core.deref.call(null,mults);
var inst_14080 = cljs.core.vals.call(null,inst_14079);
var inst_14081 = cljs.core.seq.call(null,inst_14080);
var inst_14082 = inst_14081;
var inst_14083 = null;
var inst_14084 = (0);
var inst_14085 = (0);
var state_14141__$1 = (function (){var statearr_14169 = state_14141;
(statearr_14169[(12)] = inst_14085);

(statearr_14169[(13)] = inst_14082);

(statearr_14169[(14)] = inst_14083);

(statearr_14169[(15)] = inst_14084);

return statearr_14169;
})();
var statearr_14170_14211 = state_14141__$1;
(statearr_14170_14211[(2)] = null);

(statearr_14170_14211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (14))){
var state_14141__$1 = state_14141;
var statearr_14174_14212 = state_14141__$1;
(statearr_14174_14212[(2)] = null);

(statearr_14174_14212[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (16))){
var inst_14096 = (state_14141[(10)]);
var inst_14100 = cljs.core.chunk_first.call(null,inst_14096);
var inst_14101 = cljs.core.chunk_rest.call(null,inst_14096);
var inst_14102 = cljs.core.count.call(null,inst_14100);
var inst_14082 = inst_14101;
var inst_14083 = inst_14100;
var inst_14084 = inst_14102;
var inst_14085 = (0);
var state_14141__$1 = (function (){var statearr_14175 = state_14141;
(statearr_14175[(12)] = inst_14085);

(statearr_14175[(13)] = inst_14082);

(statearr_14175[(14)] = inst_14083);

(statearr_14175[(15)] = inst_14084);

return statearr_14175;
})();
var statearr_14176_14213 = state_14141__$1;
(statearr_14176_14213[(2)] = null);

(statearr_14176_14213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (10))){
var inst_14085 = (state_14141[(12)]);
var inst_14082 = (state_14141[(13)]);
var inst_14083 = (state_14141[(14)]);
var inst_14084 = (state_14141[(15)]);
var inst_14090 = cljs.core._nth.call(null,inst_14083,inst_14085);
var inst_14091 = cljs.core.async.muxch_STAR_.call(null,inst_14090);
var inst_14092 = cljs.core.async.close_BANG_.call(null,inst_14091);
var inst_14093 = (inst_14085 + (1));
var tmp14171 = inst_14082;
var tmp14172 = inst_14083;
var tmp14173 = inst_14084;
var inst_14082__$1 = tmp14171;
var inst_14083__$1 = tmp14172;
var inst_14084__$1 = tmp14173;
var inst_14085__$1 = inst_14093;
var state_14141__$1 = (function (){var statearr_14177 = state_14141;
(statearr_14177[(12)] = inst_14085__$1);

(statearr_14177[(13)] = inst_14082__$1);

(statearr_14177[(14)] = inst_14083__$1);

(statearr_14177[(15)] = inst_14084__$1);

(statearr_14177[(17)] = inst_14092);

return statearr_14177;
})();
var statearr_14178_14214 = state_14141__$1;
(statearr_14178_14214[(2)] = null);

(statearr_14178_14214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (18))){
var inst_14111 = (state_14141[(2)]);
var state_14141__$1 = state_14141;
var statearr_14179_14215 = state_14141__$1;
(statearr_14179_14215[(2)] = inst_14111);

(statearr_14179_14215[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14142 === (8))){
var inst_14085 = (state_14141[(12)]);
var inst_14084 = (state_14141[(15)]);
var inst_14087 = (inst_14085 < inst_14084);
var inst_14088 = inst_14087;
var state_14141__$1 = state_14141;
if(cljs.core.truth_(inst_14088)){
var statearr_14180_14216 = state_14141__$1;
(statearr_14180_14216[(1)] = (10));

} else {
var statearr_14181_14217 = state_14141__$1;
(statearr_14181_14217[(1)] = (11));

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
});})(c__6760__auto___14189,mults,ensure_mult,p))
;
return ((function (switch__6704__auto__,c__6760__auto___14189,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__6705__auto__ = null;
var cljs$core$async$pub_$_state_machine__6705__auto____0 = (function (){
var statearr_14185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14185[(0)] = cljs$core$async$pub_$_state_machine__6705__auto__);

(statearr_14185[(1)] = (1));

return statearr_14185;
});
var cljs$core$async$pub_$_state_machine__6705__auto____1 = (function (state_14141){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_14141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e14186){if((e14186 instanceof Object)){
var ex__6708__auto__ = e14186;
var statearr_14187_14218 = state_14141;
(statearr_14187_14218[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14219 = state_14141;
state_14141 = G__14219;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__6705__auto__ = function(state_14141){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__6705__auto____1.call(this,state_14141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__6705__auto____0;
cljs$core$async$pub_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__6705__auto____1;
return cljs$core$async$pub_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___14189,mults,ensure_mult,p))
})();
var state__6762__auto__ = (function (){var statearr_14188 = f__6761__auto__.call(null);
(statearr_14188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___14189);

return statearr_14188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___14189,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
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
var c__6760__auto___14356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___14356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___14356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14326){
var state_val_14327 = (state_14326[(1)]);
if((state_val_14327 === (7))){
var state_14326__$1 = state_14326;
var statearr_14328_14357 = state_14326__$1;
(statearr_14328_14357[(2)] = null);

(statearr_14328_14357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (1))){
var state_14326__$1 = state_14326;
var statearr_14329_14358 = state_14326__$1;
(statearr_14329_14358[(2)] = null);

(statearr_14329_14358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (4))){
var inst_14290 = (state_14326[(7)]);
var inst_14292 = (inst_14290 < cnt);
var state_14326__$1 = state_14326;
if(cljs.core.truth_(inst_14292)){
var statearr_14330_14359 = state_14326__$1;
(statearr_14330_14359[(1)] = (6));

} else {
var statearr_14331_14360 = state_14326__$1;
(statearr_14331_14360[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (15))){
var inst_14322 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14332_14361 = state_14326__$1;
(statearr_14332_14361[(2)] = inst_14322);

(statearr_14332_14361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (13))){
var inst_14315 = cljs.core.async.close_BANG_.call(null,out);
var state_14326__$1 = state_14326;
var statearr_14333_14362 = state_14326__$1;
(statearr_14333_14362[(2)] = inst_14315);

(statearr_14333_14362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (6))){
var state_14326__$1 = state_14326;
var statearr_14334_14363 = state_14326__$1;
(statearr_14334_14363[(2)] = null);

(statearr_14334_14363[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (3))){
var inst_14324 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14326__$1,inst_14324);
} else {
if((state_val_14327 === (12))){
var inst_14312 = (state_14326[(8)]);
var inst_14312__$1 = (state_14326[(2)]);
var inst_14313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14312__$1);
var state_14326__$1 = (function (){var statearr_14335 = state_14326;
(statearr_14335[(8)] = inst_14312__$1);

return statearr_14335;
})();
if(cljs.core.truth_(inst_14313)){
var statearr_14336_14364 = state_14326__$1;
(statearr_14336_14364[(1)] = (13));

} else {
var statearr_14337_14365 = state_14326__$1;
(statearr_14337_14365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (2))){
var inst_14289 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14290 = (0);
var state_14326__$1 = (function (){var statearr_14338 = state_14326;
(statearr_14338[(9)] = inst_14289);

(statearr_14338[(7)] = inst_14290);

return statearr_14338;
})();
var statearr_14339_14366 = state_14326__$1;
(statearr_14339_14366[(2)] = null);

(statearr_14339_14366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (11))){
var inst_14290 = (state_14326[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14326,(10),Object,null,(9));
var inst_14299 = chs__$1.call(null,inst_14290);
var inst_14300 = done.call(null,inst_14290);
var inst_14301 = cljs.core.async.take_BANG_.call(null,inst_14299,inst_14300);
var state_14326__$1 = state_14326;
var statearr_14340_14367 = state_14326__$1;
(statearr_14340_14367[(2)] = inst_14301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (9))){
var inst_14290 = (state_14326[(7)]);
var inst_14303 = (state_14326[(2)]);
var inst_14304 = (inst_14290 + (1));
var inst_14290__$1 = inst_14304;
var state_14326__$1 = (function (){var statearr_14341 = state_14326;
(statearr_14341[(10)] = inst_14303);

(statearr_14341[(7)] = inst_14290__$1);

return statearr_14341;
})();
var statearr_14342_14368 = state_14326__$1;
(statearr_14342_14368[(2)] = null);

(statearr_14342_14368[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (5))){
var inst_14310 = (state_14326[(2)]);
var state_14326__$1 = (function (){var statearr_14343 = state_14326;
(statearr_14343[(11)] = inst_14310);

return statearr_14343;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14326__$1,(12),dchan);
} else {
if((state_val_14327 === (14))){
var inst_14312 = (state_14326[(8)]);
var inst_14317 = cljs.core.apply.call(null,f,inst_14312);
var state_14326__$1 = state_14326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14326__$1,(16),out,inst_14317);
} else {
if((state_val_14327 === (16))){
var inst_14319 = (state_14326[(2)]);
var state_14326__$1 = (function (){var statearr_14344 = state_14326;
(statearr_14344[(12)] = inst_14319);

return statearr_14344;
})();
var statearr_14345_14369 = state_14326__$1;
(statearr_14345_14369[(2)] = null);

(statearr_14345_14369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (10))){
var inst_14294 = (state_14326[(2)]);
var inst_14295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14326__$1 = (function (){var statearr_14346 = state_14326;
(statearr_14346[(13)] = inst_14294);

return statearr_14346;
})();
var statearr_14347_14370 = state_14326__$1;
(statearr_14347_14370[(2)] = inst_14295);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14327 === (8))){
var inst_14308 = (state_14326[(2)]);
var state_14326__$1 = state_14326;
var statearr_14348_14371 = state_14326__$1;
(statearr_14348_14371[(2)] = inst_14308);

(statearr_14348_14371[(1)] = (5));


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
});})(c__6760__auto___14356,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6704__auto__,c__6760__auto___14356,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__6705__auto__ = null;
var cljs$core$async$map_$_state_machine__6705__auto____0 = (function (){
var statearr_14352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14352[(0)] = cljs$core$async$map_$_state_machine__6705__auto__);

(statearr_14352[(1)] = (1));

return statearr_14352;
});
var cljs$core$async$map_$_state_machine__6705__auto____1 = (function (state_14326){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_14326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e14353){if((e14353 instanceof Object)){
var ex__6708__auto__ = e14353;
var statearr_14354_14372 = state_14326;
(statearr_14354_14372[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14373 = state_14326;
state_14326 = G__14373;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__6705__auto__ = function(state_14326){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__6705__auto____1.call(this,state_14326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__6705__auto____0;
cljs$core$async$map_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__6705__auto____1;
return cljs$core$async$map_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___14356,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6762__auto__ = (function (){var statearr_14355 = f__6761__auto__.call(null);
(statearr_14355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___14356);

return statearr_14355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___14356,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6760__auto___14481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___14481,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___14481,out){
return (function (state_14457){
var state_val_14458 = (state_14457[(1)]);
if((state_val_14458 === (7))){
var inst_14436 = (state_14457[(7)]);
var inst_14437 = (state_14457[(8)]);
var inst_14436__$1 = (state_14457[(2)]);
var inst_14437__$1 = cljs.core.nth.call(null,inst_14436__$1,(0),null);
var inst_14438 = cljs.core.nth.call(null,inst_14436__$1,(1),null);
var inst_14439 = (inst_14437__$1 == null);
var state_14457__$1 = (function (){var statearr_14459 = state_14457;
(statearr_14459[(7)] = inst_14436__$1);

(statearr_14459[(8)] = inst_14437__$1);

(statearr_14459[(9)] = inst_14438);

return statearr_14459;
})();
if(cljs.core.truth_(inst_14439)){
var statearr_14460_14482 = state_14457__$1;
(statearr_14460_14482[(1)] = (8));

} else {
var statearr_14461_14483 = state_14457__$1;
(statearr_14461_14483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (1))){
var inst_14428 = cljs.core.vec.call(null,chs);
var inst_14429 = inst_14428;
var state_14457__$1 = (function (){var statearr_14462 = state_14457;
(statearr_14462[(10)] = inst_14429);

return statearr_14462;
})();
var statearr_14463_14484 = state_14457__$1;
(statearr_14463_14484[(2)] = null);

(statearr_14463_14484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (4))){
var inst_14429 = (state_14457[(10)]);
var state_14457__$1 = state_14457;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14457__$1,(7),inst_14429);
} else {
if((state_val_14458 === (6))){
var inst_14453 = (state_14457[(2)]);
var state_14457__$1 = state_14457;
var statearr_14464_14485 = state_14457__$1;
(statearr_14464_14485[(2)] = inst_14453);

(statearr_14464_14485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (3))){
var inst_14455 = (state_14457[(2)]);
var state_14457__$1 = state_14457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14457__$1,inst_14455);
} else {
if((state_val_14458 === (2))){
var inst_14429 = (state_14457[(10)]);
var inst_14431 = cljs.core.count.call(null,inst_14429);
var inst_14432 = (inst_14431 > (0));
var state_14457__$1 = state_14457;
if(cljs.core.truth_(inst_14432)){
var statearr_14466_14486 = state_14457__$1;
(statearr_14466_14486[(1)] = (4));

} else {
var statearr_14467_14487 = state_14457__$1;
(statearr_14467_14487[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (11))){
var inst_14429 = (state_14457[(10)]);
var inst_14446 = (state_14457[(2)]);
var tmp14465 = inst_14429;
var inst_14429__$1 = tmp14465;
var state_14457__$1 = (function (){var statearr_14468 = state_14457;
(statearr_14468[(10)] = inst_14429__$1);

(statearr_14468[(11)] = inst_14446);

return statearr_14468;
})();
var statearr_14469_14488 = state_14457__$1;
(statearr_14469_14488[(2)] = null);

(statearr_14469_14488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (9))){
var inst_14437 = (state_14457[(8)]);
var state_14457__$1 = state_14457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14457__$1,(11),out,inst_14437);
} else {
if((state_val_14458 === (5))){
var inst_14451 = cljs.core.async.close_BANG_.call(null,out);
var state_14457__$1 = state_14457;
var statearr_14470_14489 = state_14457__$1;
(statearr_14470_14489[(2)] = inst_14451);

(statearr_14470_14489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (10))){
var inst_14449 = (state_14457[(2)]);
var state_14457__$1 = state_14457;
var statearr_14471_14490 = state_14457__$1;
(statearr_14471_14490[(2)] = inst_14449);

(statearr_14471_14490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14458 === (8))){
var inst_14436 = (state_14457[(7)]);
var inst_14429 = (state_14457[(10)]);
var inst_14437 = (state_14457[(8)]);
var inst_14438 = (state_14457[(9)]);
var inst_14441 = (function (){var c = inst_14438;
var v = inst_14437;
var vec__14434 = inst_14436;
var cs = inst_14429;
return ((function (c,v,vec__14434,cs,inst_14436,inst_14429,inst_14437,inst_14438,state_val_14458,c__6760__auto___14481,out){
return (function (p1__14374_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14374_SHARP_);
});
;})(c,v,vec__14434,cs,inst_14436,inst_14429,inst_14437,inst_14438,state_val_14458,c__6760__auto___14481,out))
})();
var inst_14442 = cljs.core.filterv.call(null,inst_14441,inst_14429);
var inst_14429__$1 = inst_14442;
var state_14457__$1 = (function (){var statearr_14472 = state_14457;
(statearr_14472[(10)] = inst_14429__$1);

return statearr_14472;
})();
var statearr_14473_14491 = state_14457__$1;
(statearr_14473_14491[(2)] = null);

(statearr_14473_14491[(1)] = (2));


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
});})(c__6760__auto___14481,out))
;
return ((function (switch__6704__auto__,c__6760__auto___14481,out){
return (function() {
var cljs$core$async$merge_$_state_machine__6705__auto__ = null;
var cljs$core$async$merge_$_state_machine__6705__auto____0 = (function (){
var statearr_14477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14477[(0)] = cljs$core$async$merge_$_state_machine__6705__auto__);

(statearr_14477[(1)] = (1));

return statearr_14477;
});
var cljs$core$async$merge_$_state_machine__6705__auto____1 = (function (state_14457){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_14457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e14478){if((e14478 instanceof Object)){
var ex__6708__auto__ = e14478;
var statearr_14479_14492 = state_14457;
(statearr_14479_14492[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14493 = state_14457;
state_14457 = G__14493;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__6705__auto__ = function(state_14457){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__6705__auto____1.call(this,state_14457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__6705__auto____0;
cljs$core$async$merge_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__6705__auto____1;
return cljs$core$async$merge_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___14481,out))
})();
var state__6762__auto__ = (function (){var statearr_14480 = f__6761__auto__.call(null);
(statearr_14480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___14481);

return statearr_14480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___14481,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
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
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6760__auto___14586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___14586,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___14586,out){
return (function (state_14563){
var state_val_14564 = (state_14563[(1)]);
if((state_val_14564 === (7))){
var inst_14545 = (state_14563[(7)]);
var inst_14545__$1 = (state_14563[(2)]);
var inst_14546 = (inst_14545__$1 == null);
var inst_14547 = cljs.core.not.call(null,inst_14546);
var state_14563__$1 = (function (){var statearr_14565 = state_14563;
(statearr_14565[(7)] = inst_14545__$1);

return statearr_14565;
})();
if(inst_14547){
var statearr_14566_14587 = state_14563__$1;
(statearr_14566_14587[(1)] = (8));

} else {
var statearr_14567_14588 = state_14563__$1;
(statearr_14567_14588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (1))){
var inst_14540 = (0);
var state_14563__$1 = (function (){var statearr_14568 = state_14563;
(statearr_14568[(8)] = inst_14540);

return statearr_14568;
})();
var statearr_14569_14589 = state_14563__$1;
(statearr_14569_14589[(2)] = null);

(statearr_14569_14589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (4))){
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14563__$1,(7),ch);
} else {
if((state_val_14564 === (6))){
var inst_14558 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14570_14590 = state_14563__$1;
(statearr_14570_14590[(2)] = inst_14558);

(statearr_14570_14590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (3))){
var inst_14560 = (state_14563[(2)]);
var inst_14561 = cljs.core.async.close_BANG_.call(null,out);
var state_14563__$1 = (function (){var statearr_14571 = state_14563;
(statearr_14571[(9)] = inst_14560);

return statearr_14571;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14563__$1,inst_14561);
} else {
if((state_val_14564 === (2))){
var inst_14540 = (state_14563[(8)]);
var inst_14542 = (inst_14540 < n);
var state_14563__$1 = state_14563;
if(cljs.core.truth_(inst_14542)){
var statearr_14572_14591 = state_14563__$1;
(statearr_14572_14591[(1)] = (4));

} else {
var statearr_14573_14592 = state_14563__$1;
(statearr_14573_14592[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (11))){
var inst_14540 = (state_14563[(8)]);
var inst_14550 = (state_14563[(2)]);
var inst_14551 = (inst_14540 + (1));
var inst_14540__$1 = inst_14551;
var state_14563__$1 = (function (){var statearr_14574 = state_14563;
(statearr_14574[(8)] = inst_14540__$1);

(statearr_14574[(10)] = inst_14550);

return statearr_14574;
})();
var statearr_14575_14593 = state_14563__$1;
(statearr_14575_14593[(2)] = null);

(statearr_14575_14593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (9))){
var state_14563__$1 = state_14563;
var statearr_14576_14594 = state_14563__$1;
(statearr_14576_14594[(2)] = null);

(statearr_14576_14594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (5))){
var state_14563__$1 = state_14563;
var statearr_14577_14595 = state_14563__$1;
(statearr_14577_14595[(2)] = null);

(statearr_14577_14595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (10))){
var inst_14555 = (state_14563[(2)]);
var state_14563__$1 = state_14563;
var statearr_14578_14596 = state_14563__$1;
(statearr_14578_14596[(2)] = inst_14555);

(statearr_14578_14596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14564 === (8))){
var inst_14545 = (state_14563[(7)]);
var state_14563__$1 = state_14563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14563__$1,(11),out,inst_14545);
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
});})(c__6760__auto___14586,out))
;
return ((function (switch__6704__auto__,c__6760__auto___14586,out){
return (function() {
var cljs$core$async$take_$_state_machine__6705__auto__ = null;
var cljs$core$async$take_$_state_machine__6705__auto____0 = (function (){
var statearr_14582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14582[(0)] = cljs$core$async$take_$_state_machine__6705__auto__);

(statearr_14582[(1)] = (1));

return statearr_14582;
});
var cljs$core$async$take_$_state_machine__6705__auto____1 = (function (state_14563){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_14563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object)){
var ex__6708__auto__ = e14583;
var statearr_14584_14597 = state_14563;
(statearr_14584_14597[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14598 = state_14563;
state_14563 = G__14598;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__6705__auto__ = function(state_14563){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__6705__auto____1.call(this,state_14563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__6705__auto____0;
cljs$core$async$take_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__6705__auto____1;
return cljs$core$async$take_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___14586,out))
})();
var state__6762__auto__ = (function (){var statearr_14585 = f__6761__auto__.call(null);
(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___14586);

return statearr_14585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___14586,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t14606 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14606 = (function (ch,f,map_LT_,meta14607){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14607 = meta14607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t14609 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14609 = (function (fn1,_,meta14607,map_LT_,f,ch,meta14610){
this.fn1 = fn1;
this._ = _;
this.meta14607 = meta14607;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14610 = meta14610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14609.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t14609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t14609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14599_SHARP_){
return f1.call(null,(((p1__14599_SHARP_ == null))?null:self__.f.call(null,p1__14599_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t14609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14611){
var self__ = this;
var _14611__$1 = this;
return self__.meta14610;
});})(___$1))
;

cljs.core.async.t14609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14611,meta14610__$1){
var self__ = this;
var _14611__$1 = this;
return (new cljs.core.async.t14609(self__.fn1,self__._,self__.meta14607,self__.map_LT_,self__.f,self__.ch,meta14610__$1));
});})(___$1))
;

cljs.core.async.t14609.cljs$lang$type = true;

cljs.core.async.t14609.cljs$lang$ctorStr = "cljs.core.async/t14609";

cljs.core.async.t14609.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t14609");
});})(___$1))
;

cljs.core.async.__GT_t14609 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t14609(fn1__$1,___$2,meta14607__$1,map_LT___$1,f__$1,ch__$1,meta14610){
return (new cljs.core.async.t14609(fn1__$1,___$2,meta14607__$1,map_LT___$1,f__$1,ch__$1,meta14610));
});})(___$1))
;

}

return (new cljs.core.async.t14609(fn1,___$1,self__.meta14607,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4137__auto__ = ret;
if(cljs.core.truth_(and__4137__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4137__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14608){
var self__ = this;
var _14608__$1 = this;
return self__.meta14607;
});

cljs.core.async.t14606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14608,meta14607__$1){
var self__ = this;
var _14608__$1 = this;
return (new cljs.core.async.t14606(self__.ch,self__.f,self__.map_LT_,meta14607__$1));
});

cljs.core.async.t14606.cljs$lang$type = true;

cljs.core.async.t14606.cljs$lang$ctorStr = "cljs.core.async/t14606";

cljs.core.async.t14606.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t14606");
});

cljs.core.async.__GT_t14606 = (function cljs$core$async$map_LT__$___GT_t14606(ch__$1,f__$1,map_LT___$1,meta14607){
return (new cljs.core.async.t14606(ch__$1,f__$1,map_LT___$1,meta14607));
});

}

return (new cljs.core.async.t14606(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t14615 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14615 = (function (ch,f,map_GT_,meta14616){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14616 = meta14616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t14615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14615.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14617){
var self__ = this;
var _14617__$1 = this;
return self__.meta14616;
});

cljs.core.async.t14615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14617,meta14616__$1){
var self__ = this;
var _14617__$1 = this;
return (new cljs.core.async.t14615(self__.ch,self__.f,self__.map_GT_,meta14616__$1));
});

cljs.core.async.t14615.cljs$lang$type = true;

cljs.core.async.t14615.cljs$lang$ctorStr = "cljs.core.async/t14615";

cljs.core.async.t14615.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t14615");
});

cljs.core.async.__GT_t14615 = (function cljs$core$async$map_GT__$___GT_t14615(ch__$1,f__$1,map_GT___$1,meta14616){
return (new cljs.core.async.t14615(ch__$1,f__$1,map_GT___$1,meta14616));
});

}

return (new cljs.core.async.t14615(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t14621 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14621 = (function (ch,p,filter_GT_,meta14622){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14622 = meta14622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t14621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t14621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14623){
var self__ = this;
var _14623__$1 = this;
return self__.meta14622;
});

cljs.core.async.t14621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14623,meta14622__$1){
var self__ = this;
var _14623__$1 = this;
return (new cljs.core.async.t14621(self__.ch,self__.p,self__.filter_GT_,meta14622__$1));
});

cljs.core.async.t14621.cljs$lang$type = true;

cljs.core.async.t14621.cljs$lang$ctorStr = "cljs.core.async/t14621";

cljs.core.async.t14621.cljs$lang$ctorPrWriter = (function (this__4728__auto__,writer__4729__auto__,opt__4730__auto__){
return cljs.core._write.call(null,writer__4729__auto__,"cljs.core.async/t14621");
});

cljs.core.async.__GT_t14621 = (function cljs$core$async$filter_GT__$___GT_t14621(ch__$1,p__$1,filter_GT___$1,meta14622){
return (new cljs.core.async.t14621(ch__$1,p__$1,filter_GT___$1,meta14622));
});

}

return (new cljs.core.async.t14621(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6760__auto___14706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___14706,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___14706,out){
return (function (state_14685){
var state_val_14686 = (state_14685[(1)]);
if((state_val_14686 === (7))){
var inst_14681 = (state_14685[(2)]);
var state_14685__$1 = state_14685;
var statearr_14687_14707 = state_14685__$1;
(statearr_14687_14707[(2)] = inst_14681);

(statearr_14687_14707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (1))){
var state_14685__$1 = state_14685;
var statearr_14688_14708 = state_14685__$1;
(statearr_14688_14708[(2)] = null);

(statearr_14688_14708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (4))){
var inst_14667 = (state_14685[(7)]);
var inst_14667__$1 = (state_14685[(2)]);
var inst_14668 = (inst_14667__$1 == null);
var state_14685__$1 = (function (){var statearr_14689 = state_14685;
(statearr_14689[(7)] = inst_14667__$1);

return statearr_14689;
})();
if(cljs.core.truth_(inst_14668)){
var statearr_14690_14709 = state_14685__$1;
(statearr_14690_14709[(1)] = (5));

} else {
var statearr_14691_14710 = state_14685__$1;
(statearr_14691_14710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (6))){
var inst_14667 = (state_14685[(7)]);
var inst_14672 = p.call(null,inst_14667);
var state_14685__$1 = state_14685;
if(cljs.core.truth_(inst_14672)){
var statearr_14692_14711 = state_14685__$1;
(statearr_14692_14711[(1)] = (8));

} else {
var statearr_14693_14712 = state_14685__$1;
(statearr_14693_14712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (3))){
var inst_14683 = (state_14685[(2)]);
var state_14685__$1 = state_14685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14685__$1,inst_14683);
} else {
if((state_val_14686 === (2))){
var state_14685__$1 = state_14685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14685__$1,(4),ch);
} else {
if((state_val_14686 === (11))){
var inst_14675 = (state_14685[(2)]);
var state_14685__$1 = state_14685;
var statearr_14694_14713 = state_14685__$1;
(statearr_14694_14713[(2)] = inst_14675);

(statearr_14694_14713[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (9))){
var state_14685__$1 = state_14685;
var statearr_14695_14714 = state_14685__$1;
(statearr_14695_14714[(2)] = null);

(statearr_14695_14714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (5))){
var inst_14670 = cljs.core.async.close_BANG_.call(null,out);
var state_14685__$1 = state_14685;
var statearr_14696_14715 = state_14685__$1;
(statearr_14696_14715[(2)] = inst_14670);

(statearr_14696_14715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (10))){
var inst_14678 = (state_14685[(2)]);
var state_14685__$1 = (function (){var statearr_14697 = state_14685;
(statearr_14697[(8)] = inst_14678);

return statearr_14697;
})();
var statearr_14698_14716 = state_14685__$1;
(statearr_14698_14716[(2)] = null);

(statearr_14698_14716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14686 === (8))){
var inst_14667 = (state_14685[(7)]);
var state_14685__$1 = state_14685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14685__$1,(11),out,inst_14667);
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
});})(c__6760__auto___14706,out))
;
return ((function (switch__6704__auto__,c__6760__auto___14706,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__6705__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__6705__auto____0 = (function (){
var statearr_14702 = [null,null,null,null,null,null,null,null,null];
(statearr_14702[(0)] = cljs$core$async$filter_LT__$_state_machine__6705__auto__);

(statearr_14702[(1)] = (1));

return statearr_14702;
});
var cljs$core$async$filter_LT__$_state_machine__6705__auto____1 = (function (state_14685){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_14685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e14703){if((e14703 instanceof Object)){
var ex__6708__auto__ = e14703;
var statearr_14704_14717 = state_14685;
(statearr_14704_14717[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14718 = state_14685;
state_14685 = G__14718;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__6705__auto__ = function(state_14685){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__6705__auto____1.call(this,state_14685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__6705__auto____0;
cljs$core$async$filter_LT__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__6705__auto____1;
return cljs$core$async$filter_LT__$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___14706,out))
})();
var state__6762__auto__ = (function (){var statearr_14705 = f__6761__auto__.call(null);
(statearr_14705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___14706);

return statearr_14705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___14706,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__){
return (function (state_14884){
var state_val_14885 = (state_14884[(1)]);
if((state_val_14885 === (7))){
var inst_14880 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
var statearr_14886_14927 = state_14884__$1;
(statearr_14886_14927[(2)] = inst_14880);

(statearr_14886_14927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (20))){
var inst_14850 = (state_14884[(7)]);
var inst_14861 = (state_14884[(2)]);
var inst_14862 = cljs.core.next.call(null,inst_14850);
var inst_14836 = inst_14862;
var inst_14837 = null;
var inst_14838 = (0);
var inst_14839 = (0);
var state_14884__$1 = (function (){var statearr_14887 = state_14884;
(statearr_14887[(8)] = inst_14839);

(statearr_14887[(9)] = inst_14836);

(statearr_14887[(10)] = inst_14861);

(statearr_14887[(11)] = inst_14837);

(statearr_14887[(12)] = inst_14838);

return statearr_14887;
})();
var statearr_14888_14928 = state_14884__$1;
(statearr_14888_14928[(2)] = null);

(statearr_14888_14928[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (1))){
var state_14884__$1 = state_14884;
var statearr_14889_14929 = state_14884__$1;
(statearr_14889_14929[(2)] = null);

(statearr_14889_14929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (4))){
var inst_14825 = (state_14884[(13)]);
var inst_14825__$1 = (state_14884[(2)]);
var inst_14826 = (inst_14825__$1 == null);
var state_14884__$1 = (function (){var statearr_14890 = state_14884;
(statearr_14890[(13)] = inst_14825__$1);

return statearr_14890;
})();
if(cljs.core.truth_(inst_14826)){
var statearr_14891_14930 = state_14884__$1;
(statearr_14891_14930[(1)] = (5));

} else {
var statearr_14892_14931 = state_14884__$1;
(statearr_14892_14931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (15))){
var state_14884__$1 = state_14884;
var statearr_14896_14932 = state_14884__$1;
(statearr_14896_14932[(2)] = null);

(statearr_14896_14932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (21))){
var state_14884__$1 = state_14884;
var statearr_14897_14933 = state_14884__$1;
(statearr_14897_14933[(2)] = null);

(statearr_14897_14933[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (13))){
var inst_14839 = (state_14884[(8)]);
var inst_14836 = (state_14884[(9)]);
var inst_14837 = (state_14884[(11)]);
var inst_14838 = (state_14884[(12)]);
var inst_14846 = (state_14884[(2)]);
var inst_14847 = (inst_14839 + (1));
var tmp14893 = inst_14836;
var tmp14894 = inst_14837;
var tmp14895 = inst_14838;
var inst_14836__$1 = tmp14893;
var inst_14837__$1 = tmp14894;
var inst_14838__$1 = tmp14895;
var inst_14839__$1 = inst_14847;
var state_14884__$1 = (function (){var statearr_14898 = state_14884;
(statearr_14898[(8)] = inst_14839__$1);

(statearr_14898[(14)] = inst_14846);

(statearr_14898[(9)] = inst_14836__$1);

(statearr_14898[(11)] = inst_14837__$1);

(statearr_14898[(12)] = inst_14838__$1);

return statearr_14898;
})();
var statearr_14899_14934 = state_14884__$1;
(statearr_14899_14934[(2)] = null);

(statearr_14899_14934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (22))){
var state_14884__$1 = state_14884;
var statearr_14900_14935 = state_14884__$1;
(statearr_14900_14935[(2)] = null);

(statearr_14900_14935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (6))){
var inst_14825 = (state_14884[(13)]);
var inst_14834 = f.call(null,inst_14825);
var inst_14835 = cljs.core.seq.call(null,inst_14834);
var inst_14836 = inst_14835;
var inst_14837 = null;
var inst_14838 = (0);
var inst_14839 = (0);
var state_14884__$1 = (function (){var statearr_14901 = state_14884;
(statearr_14901[(8)] = inst_14839);

(statearr_14901[(9)] = inst_14836);

(statearr_14901[(11)] = inst_14837);

(statearr_14901[(12)] = inst_14838);

return statearr_14901;
})();
var statearr_14902_14936 = state_14884__$1;
(statearr_14902_14936[(2)] = null);

(statearr_14902_14936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (17))){
var inst_14850 = (state_14884[(7)]);
var inst_14854 = cljs.core.chunk_first.call(null,inst_14850);
var inst_14855 = cljs.core.chunk_rest.call(null,inst_14850);
var inst_14856 = cljs.core.count.call(null,inst_14854);
var inst_14836 = inst_14855;
var inst_14837 = inst_14854;
var inst_14838 = inst_14856;
var inst_14839 = (0);
var state_14884__$1 = (function (){var statearr_14903 = state_14884;
(statearr_14903[(8)] = inst_14839);

(statearr_14903[(9)] = inst_14836);

(statearr_14903[(11)] = inst_14837);

(statearr_14903[(12)] = inst_14838);

return statearr_14903;
})();
var statearr_14904_14937 = state_14884__$1;
(statearr_14904_14937[(2)] = null);

(statearr_14904_14937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (3))){
var inst_14882 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14884__$1,inst_14882);
} else {
if((state_val_14885 === (12))){
var inst_14870 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
var statearr_14905_14938 = state_14884__$1;
(statearr_14905_14938[(2)] = inst_14870);

(statearr_14905_14938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (2))){
var state_14884__$1 = state_14884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14884__$1,(4),in$);
} else {
if((state_val_14885 === (23))){
var inst_14878 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
var statearr_14906_14939 = state_14884__$1;
(statearr_14906_14939[(2)] = inst_14878);

(statearr_14906_14939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (19))){
var inst_14865 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
var statearr_14907_14940 = state_14884__$1;
(statearr_14907_14940[(2)] = inst_14865);

(statearr_14907_14940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (11))){
var inst_14836 = (state_14884[(9)]);
var inst_14850 = (state_14884[(7)]);
var inst_14850__$1 = cljs.core.seq.call(null,inst_14836);
var state_14884__$1 = (function (){var statearr_14908 = state_14884;
(statearr_14908[(7)] = inst_14850__$1);

return statearr_14908;
})();
if(inst_14850__$1){
var statearr_14909_14941 = state_14884__$1;
(statearr_14909_14941[(1)] = (14));

} else {
var statearr_14910_14942 = state_14884__$1;
(statearr_14910_14942[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (9))){
var inst_14872 = (state_14884[(2)]);
var inst_14873 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14884__$1 = (function (){var statearr_14911 = state_14884;
(statearr_14911[(15)] = inst_14872);

return statearr_14911;
})();
if(cljs.core.truth_(inst_14873)){
var statearr_14912_14943 = state_14884__$1;
(statearr_14912_14943[(1)] = (21));

} else {
var statearr_14913_14944 = state_14884__$1;
(statearr_14913_14944[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (5))){
var inst_14828 = cljs.core.async.close_BANG_.call(null,out);
var state_14884__$1 = state_14884;
var statearr_14914_14945 = state_14884__$1;
(statearr_14914_14945[(2)] = inst_14828);

(statearr_14914_14945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (14))){
var inst_14850 = (state_14884[(7)]);
var inst_14852 = cljs.core.chunked_seq_QMARK_.call(null,inst_14850);
var state_14884__$1 = state_14884;
if(inst_14852){
var statearr_14915_14946 = state_14884__$1;
(statearr_14915_14946[(1)] = (17));

} else {
var statearr_14916_14947 = state_14884__$1;
(statearr_14916_14947[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (16))){
var inst_14868 = (state_14884[(2)]);
var state_14884__$1 = state_14884;
var statearr_14917_14948 = state_14884__$1;
(statearr_14917_14948[(2)] = inst_14868);

(statearr_14917_14948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14885 === (10))){
var inst_14839 = (state_14884[(8)]);
var inst_14837 = (state_14884[(11)]);
var inst_14844 = cljs.core._nth.call(null,inst_14837,inst_14839);
var state_14884__$1 = state_14884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14884__$1,(13),out,inst_14844);
} else {
if((state_val_14885 === (18))){
var inst_14850 = (state_14884[(7)]);
var inst_14859 = cljs.core.first.call(null,inst_14850);
var state_14884__$1 = state_14884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14884__$1,(20),out,inst_14859);
} else {
if((state_val_14885 === (8))){
var inst_14839 = (state_14884[(8)]);
var inst_14838 = (state_14884[(12)]);
var inst_14841 = (inst_14839 < inst_14838);
var inst_14842 = inst_14841;
var state_14884__$1 = state_14884;
if(cljs.core.truth_(inst_14842)){
var statearr_14918_14949 = state_14884__$1;
(statearr_14918_14949[(1)] = (10));

} else {
var statearr_14919_14950 = state_14884__$1;
(statearr_14919_14950[(1)] = (11));

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
});})(c__6760__auto__))
;
return ((function (switch__6704__auto__,c__6760__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6705__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6705__auto____0 = (function (){
var statearr_14923 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14923[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6705__auto__);

(statearr_14923[(1)] = (1));

return statearr_14923;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6705__auto____1 = (function (state_14884){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_14884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e14924){if((e14924 instanceof Object)){
var ex__6708__auto__ = e14924;
var statearr_14925_14951 = state_14884;
(statearr_14925_14951[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14952 = state_14884;
state_14884 = G__14952;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6705__auto__ = function(state_14884){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6705__auto____1.call(this,state_14884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6705__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6705__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__))
})();
var state__6762__auto__ = (function (){var statearr_14926 = f__6761__auto__.call(null);
(statearr_14926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_14926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__))
);

return c__6760__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6760__auto___15049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___15049,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___15049,out){
return (function (state_15024){
var state_val_15025 = (state_15024[(1)]);
if((state_val_15025 === (7))){
var inst_15019 = (state_15024[(2)]);
var state_15024__$1 = state_15024;
var statearr_15026_15050 = state_15024__$1;
(statearr_15026_15050[(2)] = inst_15019);

(statearr_15026_15050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (1))){
var inst_15001 = null;
var state_15024__$1 = (function (){var statearr_15027 = state_15024;
(statearr_15027[(7)] = inst_15001);

return statearr_15027;
})();
var statearr_15028_15051 = state_15024__$1;
(statearr_15028_15051[(2)] = null);

(statearr_15028_15051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (4))){
var inst_15004 = (state_15024[(8)]);
var inst_15004__$1 = (state_15024[(2)]);
var inst_15005 = (inst_15004__$1 == null);
var inst_15006 = cljs.core.not.call(null,inst_15005);
var state_15024__$1 = (function (){var statearr_15029 = state_15024;
(statearr_15029[(8)] = inst_15004__$1);

return statearr_15029;
})();
if(inst_15006){
var statearr_15030_15052 = state_15024__$1;
(statearr_15030_15052[(1)] = (5));

} else {
var statearr_15031_15053 = state_15024__$1;
(statearr_15031_15053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (6))){
var state_15024__$1 = state_15024;
var statearr_15032_15054 = state_15024__$1;
(statearr_15032_15054[(2)] = null);

(statearr_15032_15054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (3))){
var inst_15021 = (state_15024[(2)]);
var inst_15022 = cljs.core.async.close_BANG_.call(null,out);
var state_15024__$1 = (function (){var statearr_15033 = state_15024;
(statearr_15033[(9)] = inst_15021);

return statearr_15033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15024__$1,inst_15022);
} else {
if((state_val_15025 === (2))){
var state_15024__$1 = state_15024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15024__$1,(4),ch);
} else {
if((state_val_15025 === (11))){
var inst_15004 = (state_15024[(8)]);
var inst_15013 = (state_15024[(2)]);
var inst_15001 = inst_15004;
var state_15024__$1 = (function (){var statearr_15034 = state_15024;
(statearr_15034[(10)] = inst_15013);

(statearr_15034[(7)] = inst_15001);

return statearr_15034;
})();
var statearr_15035_15055 = state_15024__$1;
(statearr_15035_15055[(2)] = null);

(statearr_15035_15055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (9))){
var inst_15004 = (state_15024[(8)]);
var state_15024__$1 = state_15024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15024__$1,(11),out,inst_15004);
} else {
if((state_val_15025 === (5))){
var inst_15004 = (state_15024[(8)]);
var inst_15001 = (state_15024[(7)]);
var inst_15008 = cljs.core._EQ_.call(null,inst_15004,inst_15001);
var state_15024__$1 = state_15024;
if(inst_15008){
var statearr_15037_15056 = state_15024__$1;
(statearr_15037_15056[(1)] = (8));

} else {
var statearr_15038_15057 = state_15024__$1;
(statearr_15038_15057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (10))){
var inst_15016 = (state_15024[(2)]);
var state_15024__$1 = state_15024;
var statearr_15039_15058 = state_15024__$1;
(statearr_15039_15058[(2)] = inst_15016);

(statearr_15039_15058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15025 === (8))){
var inst_15001 = (state_15024[(7)]);
var tmp15036 = inst_15001;
var inst_15001__$1 = tmp15036;
var state_15024__$1 = (function (){var statearr_15040 = state_15024;
(statearr_15040[(7)] = inst_15001__$1);

return statearr_15040;
})();
var statearr_15041_15059 = state_15024__$1;
(statearr_15041_15059[(2)] = null);

(statearr_15041_15059[(1)] = (2));


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
});})(c__6760__auto___15049,out))
;
return ((function (switch__6704__auto__,c__6760__auto___15049,out){
return (function() {
var cljs$core$async$unique_$_state_machine__6705__auto__ = null;
var cljs$core$async$unique_$_state_machine__6705__auto____0 = (function (){
var statearr_15045 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15045[(0)] = cljs$core$async$unique_$_state_machine__6705__auto__);

(statearr_15045[(1)] = (1));

return statearr_15045;
});
var cljs$core$async$unique_$_state_machine__6705__auto____1 = (function (state_15024){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_15024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e15046){if((e15046 instanceof Object)){
var ex__6708__auto__ = e15046;
var statearr_15047_15060 = state_15024;
(statearr_15047_15060[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15061 = state_15024;
state_15024 = G__15061;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__6705__auto__ = function(state_15024){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__6705__auto____1.call(this,state_15024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__6705__auto____0;
cljs$core$async$unique_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__6705__auto____1;
return cljs$core$async$unique_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___15049,out))
})();
var state__6762__auto__ = (function (){var statearr_15048 = f__6761__auto__.call(null);
(statearr_15048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___15049);

return statearr_15048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___15049,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6760__auto___15196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___15196,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___15196,out){
return (function (state_15166){
var state_val_15167 = (state_15166[(1)]);
if((state_val_15167 === (7))){
var inst_15162 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15168_15197 = state_15166__$1;
(statearr_15168_15197[(2)] = inst_15162);

(statearr_15168_15197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (1))){
var inst_15129 = (new Array(n));
var inst_15130 = inst_15129;
var inst_15131 = (0);
var state_15166__$1 = (function (){var statearr_15169 = state_15166;
(statearr_15169[(7)] = inst_15131);

(statearr_15169[(8)] = inst_15130);

return statearr_15169;
})();
var statearr_15170_15198 = state_15166__$1;
(statearr_15170_15198[(2)] = null);

(statearr_15170_15198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (4))){
var inst_15134 = (state_15166[(9)]);
var inst_15134__$1 = (state_15166[(2)]);
var inst_15135 = (inst_15134__$1 == null);
var inst_15136 = cljs.core.not.call(null,inst_15135);
var state_15166__$1 = (function (){var statearr_15171 = state_15166;
(statearr_15171[(9)] = inst_15134__$1);

return statearr_15171;
})();
if(inst_15136){
var statearr_15172_15199 = state_15166__$1;
(statearr_15172_15199[(1)] = (5));

} else {
var statearr_15173_15200 = state_15166__$1;
(statearr_15173_15200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (15))){
var inst_15156 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15174_15201 = state_15166__$1;
(statearr_15174_15201[(2)] = inst_15156);

(statearr_15174_15201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (13))){
var state_15166__$1 = state_15166;
var statearr_15175_15202 = state_15166__$1;
(statearr_15175_15202[(2)] = null);

(statearr_15175_15202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (6))){
var inst_15131 = (state_15166[(7)]);
var inst_15152 = (inst_15131 > (0));
var state_15166__$1 = state_15166;
if(cljs.core.truth_(inst_15152)){
var statearr_15176_15203 = state_15166__$1;
(statearr_15176_15203[(1)] = (12));

} else {
var statearr_15177_15204 = state_15166__$1;
(statearr_15177_15204[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (3))){
var inst_15164 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15166__$1,inst_15164);
} else {
if((state_val_15167 === (12))){
var inst_15130 = (state_15166[(8)]);
var inst_15154 = cljs.core.vec.call(null,inst_15130);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15166__$1,(15),out,inst_15154);
} else {
if((state_val_15167 === (2))){
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15166__$1,(4),ch);
} else {
if((state_val_15167 === (11))){
var inst_15146 = (state_15166[(2)]);
var inst_15147 = (new Array(n));
var inst_15130 = inst_15147;
var inst_15131 = (0);
var state_15166__$1 = (function (){var statearr_15178 = state_15166;
(statearr_15178[(10)] = inst_15146);

(statearr_15178[(7)] = inst_15131);

(statearr_15178[(8)] = inst_15130);

return statearr_15178;
})();
var statearr_15179_15205 = state_15166__$1;
(statearr_15179_15205[(2)] = null);

(statearr_15179_15205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (9))){
var inst_15130 = (state_15166[(8)]);
var inst_15144 = cljs.core.vec.call(null,inst_15130);
var state_15166__$1 = state_15166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15166__$1,(11),out,inst_15144);
} else {
if((state_val_15167 === (5))){
var inst_15139 = (state_15166[(11)]);
var inst_15131 = (state_15166[(7)]);
var inst_15134 = (state_15166[(9)]);
var inst_15130 = (state_15166[(8)]);
var inst_15138 = (inst_15130[inst_15131] = inst_15134);
var inst_15139__$1 = (inst_15131 + (1));
var inst_15140 = (inst_15139__$1 < n);
var state_15166__$1 = (function (){var statearr_15180 = state_15166;
(statearr_15180[(11)] = inst_15139__$1);

(statearr_15180[(12)] = inst_15138);

return statearr_15180;
})();
if(cljs.core.truth_(inst_15140)){
var statearr_15181_15206 = state_15166__$1;
(statearr_15181_15206[(1)] = (8));

} else {
var statearr_15182_15207 = state_15166__$1;
(statearr_15182_15207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (14))){
var inst_15159 = (state_15166[(2)]);
var inst_15160 = cljs.core.async.close_BANG_.call(null,out);
var state_15166__$1 = (function (){var statearr_15184 = state_15166;
(statearr_15184[(13)] = inst_15159);

return statearr_15184;
})();
var statearr_15185_15208 = state_15166__$1;
(statearr_15185_15208[(2)] = inst_15160);

(statearr_15185_15208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (10))){
var inst_15150 = (state_15166[(2)]);
var state_15166__$1 = state_15166;
var statearr_15186_15209 = state_15166__$1;
(statearr_15186_15209[(2)] = inst_15150);

(statearr_15186_15209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15167 === (8))){
var inst_15139 = (state_15166[(11)]);
var inst_15130 = (state_15166[(8)]);
var tmp15183 = inst_15130;
var inst_15130__$1 = tmp15183;
var inst_15131 = inst_15139;
var state_15166__$1 = (function (){var statearr_15187 = state_15166;
(statearr_15187[(7)] = inst_15131);

(statearr_15187[(8)] = inst_15130__$1);

return statearr_15187;
})();
var statearr_15188_15210 = state_15166__$1;
(statearr_15188_15210[(2)] = null);

(statearr_15188_15210[(1)] = (2));


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
});})(c__6760__auto___15196,out))
;
return ((function (switch__6704__auto__,c__6760__auto___15196,out){
return (function() {
var cljs$core$async$partition_$_state_machine__6705__auto__ = null;
var cljs$core$async$partition_$_state_machine__6705__auto____0 = (function (){
var statearr_15192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15192[(0)] = cljs$core$async$partition_$_state_machine__6705__auto__);

(statearr_15192[(1)] = (1));

return statearr_15192;
});
var cljs$core$async$partition_$_state_machine__6705__auto____1 = (function (state_15166){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_15166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e15193){if((e15193 instanceof Object)){
var ex__6708__auto__ = e15193;
var statearr_15194_15211 = state_15166;
(statearr_15194_15211[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15212 = state_15166;
state_15166 = G__15212;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__6705__auto__ = function(state_15166){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__6705__auto____1.call(this,state_15166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__6705__auto____0;
cljs$core$async$partition_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__6705__auto____1;
return cljs$core$async$partition_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___15196,out))
})();
var state__6762__auto__ = (function (){var statearr_15195 = f__6761__auto__.call(null);
(statearr_15195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___15196);

return statearr_15195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___15196,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6760__auto___15355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___15355,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___15355,out){
return (function (state_15325){
var state_val_15326 = (state_15325[(1)]);
if((state_val_15326 === (7))){
var inst_15321 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15327_15356 = state_15325__$1;
(statearr_15327_15356[(2)] = inst_15321);

(statearr_15327_15356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (1))){
var inst_15284 = [];
var inst_15285 = inst_15284;
var inst_15286 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15325__$1 = (function (){var statearr_15328 = state_15325;
(statearr_15328[(7)] = inst_15286);

(statearr_15328[(8)] = inst_15285);

return statearr_15328;
})();
var statearr_15329_15357 = state_15325__$1;
(statearr_15329_15357[(2)] = null);

(statearr_15329_15357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (4))){
var inst_15289 = (state_15325[(9)]);
var inst_15289__$1 = (state_15325[(2)]);
var inst_15290 = (inst_15289__$1 == null);
var inst_15291 = cljs.core.not.call(null,inst_15290);
var state_15325__$1 = (function (){var statearr_15330 = state_15325;
(statearr_15330[(9)] = inst_15289__$1);

return statearr_15330;
})();
if(inst_15291){
var statearr_15331_15358 = state_15325__$1;
(statearr_15331_15358[(1)] = (5));

} else {
var statearr_15332_15359 = state_15325__$1;
(statearr_15332_15359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (15))){
var inst_15315 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15333_15360 = state_15325__$1;
(statearr_15333_15360[(2)] = inst_15315);

(statearr_15333_15360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (13))){
var state_15325__$1 = state_15325;
var statearr_15334_15361 = state_15325__$1;
(statearr_15334_15361[(2)] = null);

(statearr_15334_15361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (6))){
var inst_15285 = (state_15325[(8)]);
var inst_15310 = inst_15285.length;
var inst_15311 = (inst_15310 > (0));
var state_15325__$1 = state_15325;
if(cljs.core.truth_(inst_15311)){
var statearr_15335_15362 = state_15325__$1;
(statearr_15335_15362[(1)] = (12));

} else {
var statearr_15336_15363 = state_15325__$1;
(statearr_15336_15363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (3))){
var inst_15323 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15325__$1,inst_15323);
} else {
if((state_val_15326 === (12))){
var inst_15285 = (state_15325[(8)]);
var inst_15313 = cljs.core.vec.call(null,inst_15285);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15325__$1,(15),out,inst_15313);
} else {
if((state_val_15326 === (2))){
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15325__$1,(4),ch);
} else {
if((state_val_15326 === (11))){
var inst_15289 = (state_15325[(9)]);
var inst_15293 = (state_15325[(10)]);
var inst_15303 = (state_15325[(2)]);
var inst_15304 = [];
var inst_15305 = inst_15304.push(inst_15289);
var inst_15285 = inst_15304;
var inst_15286 = inst_15293;
var state_15325__$1 = (function (){var statearr_15337 = state_15325;
(statearr_15337[(7)] = inst_15286);

(statearr_15337[(8)] = inst_15285);

(statearr_15337[(11)] = inst_15305);

(statearr_15337[(12)] = inst_15303);

return statearr_15337;
})();
var statearr_15338_15364 = state_15325__$1;
(statearr_15338_15364[(2)] = null);

(statearr_15338_15364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (9))){
var inst_15285 = (state_15325[(8)]);
var inst_15301 = cljs.core.vec.call(null,inst_15285);
var state_15325__$1 = state_15325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15325__$1,(11),out,inst_15301);
} else {
if((state_val_15326 === (5))){
var inst_15289 = (state_15325[(9)]);
var inst_15286 = (state_15325[(7)]);
var inst_15293 = (state_15325[(10)]);
var inst_15293__$1 = f.call(null,inst_15289);
var inst_15294 = cljs.core._EQ_.call(null,inst_15293__$1,inst_15286);
var inst_15295 = cljs.core.keyword_identical_QMARK_.call(null,inst_15286,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15296 = (inst_15294) || (inst_15295);
var state_15325__$1 = (function (){var statearr_15339 = state_15325;
(statearr_15339[(10)] = inst_15293__$1);

return statearr_15339;
})();
if(cljs.core.truth_(inst_15296)){
var statearr_15340_15365 = state_15325__$1;
(statearr_15340_15365[(1)] = (8));

} else {
var statearr_15341_15366 = state_15325__$1;
(statearr_15341_15366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (14))){
var inst_15318 = (state_15325[(2)]);
var inst_15319 = cljs.core.async.close_BANG_.call(null,out);
var state_15325__$1 = (function (){var statearr_15343 = state_15325;
(statearr_15343[(13)] = inst_15318);

return statearr_15343;
})();
var statearr_15344_15367 = state_15325__$1;
(statearr_15344_15367[(2)] = inst_15319);

(statearr_15344_15367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (10))){
var inst_15308 = (state_15325[(2)]);
var state_15325__$1 = state_15325;
var statearr_15345_15368 = state_15325__$1;
(statearr_15345_15368[(2)] = inst_15308);

(statearr_15345_15368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15326 === (8))){
var inst_15289 = (state_15325[(9)]);
var inst_15285 = (state_15325[(8)]);
var inst_15293 = (state_15325[(10)]);
var inst_15298 = inst_15285.push(inst_15289);
var tmp15342 = inst_15285;
var inst_15285__$1 = tmp15342;
var inst_15286 = inst_15293;
var state_15325__$1 = (function (){var statearr_15346 = state_15325;
(statearr_15346[(14)] = inst_15298);

(statearr_15346[(7)] = inst_15286);

(statearr_15346[(8)] = inst_15285__$1);

return statearr_15346;
})();
var statearr_15347_15369 = state_15325__$1;
(statearr_15347_15369[(2)] = null);

(statearr_15347_15369[(1)] = (2));


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
});})(c__6760__auto___15355,out))
;
return ((function (switch__6704__auto__,c__6760__auto___15355,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__6705__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__6705__auto____0 = (function (){
var statearr_15351 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15351[(0)] = cljs$core$async$partition_by_$_state_machine__6705__auto__);

(statearr_15351[(1)] = (1));

return statearr_15351;
});
var cljs$core$async$partition_by_$_state_machine__6705__auto____1 = (function (state_15325){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_15325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e15352){if((e15352 instanceof Object)){
var ex__6708__auto__ = e15352;
var statearr_15353_15370 = state_15325;
(statearr_15353_15370[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15371 = state_15325;
state_15325 = G__15371;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__6705__auto__ = function(state_15325){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__6705__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__6705__auto____1.call(this,state_15325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__6705__auto____0;
cljs$core$async$partition_by_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__6705__auto____1;
return cljs$core$async$partition_by_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___15355,out))
})();
var state__6762__auto__ = (function (){var statearr_15354 = f__6761__auto__.call(null);
(statearr_15354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___15355);

return statearr_15354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___15355,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1434562325993