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
if(typeof cljs.core.async.t25009 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25009 = (function (f,fn_handler,meta25010){
this.f = f;
this.fn_handler = fn_handler;
this.meta25010 = meta25010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25009.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25009.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t25009.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t25009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25011){
var self__ = this;
var _25011__$1 = this;
return self__.meta25010;
});

cljs.core.async.t25009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25011,meta25010__$1){
var self__ = this;
var _25011__$1 = this;
return (new cljs.core.async.t25009(self__.f,self__.fn_handler,meta25010__$1));
});

cljs.core.async.t25009.cljs$lang$type = true;

cljs.core.async.t25009.cljs$lang$ctorStr = "cljs.core.async/t25009";

cljs.core.async.t25009.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t25009");
});

cljs.core.async.__GT_t25009 = (function cljs$core$async$fn_handler_$___GT_t25009(f__$1,fn_handler__$1,meta25010){
return (new cljs.core.async.t25009(f__$1,fn_handler__$1,meta25010));
});

}

return (new cljs.core.async.t25009(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__25013 = buff;
if(G__25013){
var bit__18461__auto__ = null;
if(cljs.core.truth_((function (){var or__17787__auto__ = bit__18461__auto__;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return G__25013.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__25013.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25013);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__25013);
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
var val_25014 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25014);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25014,ret){
return (function (){
return fn1.call(null,val_25014);
});})(val_25014,ret))
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
var n__18672__auto___25015 = n;
var x_25016 = (0);
while(true){
if((x_25016 < n__18672__auto___25015)){
(a[x_25016] = (0));

var G__25017 = (x_25016 + (1));
x_25016 = G__25017;
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

var G__25018 = (i + (1));
i = G__25018;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t25022 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25022 = (function (flag,alt_flag,meta25023){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta25023 = meta25023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25022.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25022.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t25022.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t25022.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25024){
var self__ = this;
var _25024__$1 = this;
return self__.meta25023;
});})(flag))
;

cljs.core.async.t25022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25024,meta25023__$1){
var self__ = this;
var _25024__$1 = this;
return (new cljs.core.async.t25022(self__.flag,self__.alt_flag,meta25023__$1));
});})(flag))
;

cljs.core.async.t25022.cljs$lang$type = true;

cljs.core.async.t25022.cljs$lang$ctorStr = "cljs.core.async/t25022";

cljs.core.async.t25022.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t25022");
});})(flag))
;

cljs.core.async.__GT_t25022 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t25022(flag__$1,alt_flag__$1,meta25023){
return (new cljs.core.async.t25022(flag__$1,alt_flag__$1,meta25023));
});})(flag))
;

}

return (new cljs.core.async.t25022(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t25028 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25028 = (function (cb,flag,alt_handler,meta25029){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta25029 = meta25029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t25028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t25028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t25028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25030){
var self__ = this;
var _25030__$1 = this;
return self__.meta25029;
});

cljs.core.async.t25028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25030,meta25029__$1){
var self__ = this;
var _25030__$1 = this;
return (new cljs.core.async.t25028(self__.cb,self__.flag,self__.alt_handler,meta25029__$1));
});

cljs.core.async.t25028.cljs$lang$type = true;

cljs.core.async.t25028.cljs$lang$ctorStr = "cljs.core.async/t25028";

cljs.core.async.t25028.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t25028");
});

cljs.core.async.__GT_t25028 = (function cljs$core$async$alt_handler_$___GT_t25028(cb__$1,flag__$1,alt_handler__$1,meta25029){
return (new cljs.core.async.t25028(cb__$1,flag__$1,alt_handler__$1,meta25029));
});

}

return (new cljs.core.async.t25028(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__25031_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25031_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25032_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25032_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17787__auto__ = wport;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25033 = (i + (1));
i = G__25033;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17787__auto__ = ret;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__17775__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17775__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17775__auto__;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__25034){
var map__25036 = p__25034;
var map__25036__$1 = ((cljs.core.seq_QMARK_.call(null,map__25036))?cljs.core.apply.call(null,cljs.core.hash_map,map__25036):map__25036);
var opts = map__25036__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__25034 = null;
if (arguments.length > 1) {
var G__25037__i = 0, G__25037__a = new Array(arguments.length -  1);
while (G__25037__i < G__25037__a.length) {G__25037__a[G__25037__i] = arguments[G__25037__i + 1]; ++G__25037__i;}
  p__25034 = new cljs.core.IndexedSeq(G__25037__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__25034);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__25038){
var ports = cljs.core.first(arglist__25038);
var p__25034 = cljs.core.rest(arglist__25038);
return cljs$core$async$alts_BANG___delegate(ports,p__25034);
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
var c__20093__auto___25133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___25133){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___25133){
return (function (state_25109){
var state_val_25110 = (state_25109[(1)]);
if((state_val_25110 === (7))){
var inst_25105 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25111_25134 = state_25109__$1;
(statearr_25111_25134[(2)] = inst_25105);

(statearr_25111_25134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (1))){
var state_25109__$1 = state_25109;
var statearr_25112_25135 = state_25109__$1;
(statearr_25112_25135[(2)] = null);

(statearr_25112_25135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (4))){
var inst_25088 = (state_25109[(7)]);
var inst_25088__$1 = (state_25109[(2)]);
var inst_25089 = (inst_25088__$1 == null);
var state_25109__$1 = (function (){var statearr_25113 = state_25109;
(statearr_25113[(7)] = inst_25088__$1);

return statearr_25113;
})();
if(cljs.core.truth_(inst_25089)){
var statearr_25114_25136 = state_25109__$1;
(statearr_25114_25136[(1)] = (5));

} else {
var statearr_25115_25137 = state_25109__$1;
(statearr_25115_25137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (13))){
var state_25109__$1 = state_25109;
var statearr_25116_25138 = state_25109__$1;
(statearr_25116_25138[(2)] = null);

(statearr_25116_25138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (6))){
var inst_25088 = (state_25109[(7)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25109__$1,(11),to,inst_25088);
} else {
if((state_val_25110 === (3))){
var inst_25107 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25109__$1,inst_25107);
} else {
if((state_val_25110 === (12))){
var state_25109__$1 = state_25109;
var statearr_25117_25139 = state_25109__$1;
(statearr_25117_25139[(2)] = null);

(statearr_25117_25139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (2))){
var state_25109__$1 = state_25109;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25109__$1,(4),from);
} else {
if((state_val_25110 === (11))){
var inst_25098 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
if(cljs.core.truth_(inst_25098)){
var statearr_25118_25140 = state_25109__$1;
(statearr_25118_25140[(1)] = (12));

} else {
var statearr_25119_25141 = state_25109__$1;
(statearr_25119_25141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (9))){
var state_25109__$1 = state_25109;
var statearr_25120_25142 = state_25109__$1;
(statearr_25120_25142[(2)] = null);

(statearr_25120_25142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (5))){
var state_25109__$1 = state_25109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25121_25143 = state_25109__$1;
(statearr_25121_25143[(1)] = (8));

} else {
var statearr_25122_25144 = state_25109__$1;
(statearr_25122_25144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (14))){
var inst_25103 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25123_25145 = state_25109__$1;
(statearr_25123_25145[(2)] = inst_25103);

(statearr_25123_25145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (10))){
var inst_25095 = (state_25109[(2)]);
var state_25109__$1 = state_25109;
var statearr_25124_25146 = state_25109__$1;
(statearr_25124_25146[(2)] = inst_25095);

(statearr_25124_25146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25110 === (8))){
var inst_25092 = cljs.core.async.close_BANG_.call(null,to);
var state_25109__$1 = state_25109;
var statearr_25125_25147 = state_25109__$1;
(statearr_25125_25147[(2)] = inst_25092);

(statearr_25125_25147[(1)] = (10));


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
});})(c__20093__auto___25133))
;
return ((function (switch__20037__auto__,c__20093__auto___25133){
return (function() {
var cljs$core$async$pipe_$_state_machine__20038__auto__ = null;
var cljs$core$async$pipe_$_state_machine__20038__auto____0 = (function (){
var statearr_25129 = [null,null,null,null,null,null,null,null];
(statearr_25129[(0)] = cljs$core$async$pipe_$_state_machine__20038__auto__);

(statearr_25129[(1)] = (1));

return statearr_25129;
});
var cljs$core$async$pipe_$_state_machine__20038__auto____1 = (function (state_25109){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25130){if((e25130 instanceof Object)){
var ex__20041__auto__ = e25130;
var statearr_25131_25148 = state_25109;
(statearr_25131_25148[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25149 = state_25109;
state_25109 = G__25149;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__20038__auto__ = function(state_25109){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__20038__auto____1.call(this,state_25109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__20038__auto____0;
cljs$core$async$pipe_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__20038__auto____1;
return cljs$core$async$pipe_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___25133))
})();
var state__20095__auto__ = (function (){var statearr_25132 = f__20094__auto__.call(null);
(statearr_25132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___25133);

return statearr_25132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___25133))
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
return (function (p__25333){
var vec__25334 = p__25333;
var v = cljs.core.nth.call(null,vec__25334,(0),null);
var p = cljs.core.nth.call(null,vec__25334,(1),null);
var job = vec__25334;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20093__auto___25516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___25516,res,vec__25334,v,p,job,jobs,results){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___25516,res,vec__25334,v,p,job,jobs,results){
return (function (state_25339){
var state_val_25340 = (state_25339[(1)]);
if((state_val_25340 === (2))){
var inst_25336 = (state_25339[(2)]);
var inst_25337 = cljs.core.async.close_BANG_.call(null,res);
var state_25339__$1 = (function (){var statearr_25341 = state_25339;
(statearr_25341[(7)] = inst_25336);

return statearr_25341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25339__$1,inst_25337);
} else {
if((state_val_25340 === (1))){
var state_25339__$1 = state_25339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25339__$1,(2),res,v);
} else {
return null;
}
}
});})(c__20093__auto___25516,res,vec__25334,v,p,job,jobs,results))
;
return ((function (switch__20037__auto__,c__20093__auto___25516,res,vec__25334,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0 = (function (){
var statearr_25345 = [null,null,null,null,null,null,null,null];
(statearr_25345[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__);

(statearr_25345[(1)] = (1));

return statearr_25345;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1 = (function (state_25339){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25346){if((e25346 instanceof Object)){
var ex__20041__auto__ = e25346;
var statearr_25347_25517 = state_25339;
(statearr_25347_25517[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25518 = state_25339;
state_25339 = G__25518;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = function(state_25339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1.call(this,state_25339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___25516,res,vec__25334,v,p,job,jobs,results))
})();
var state__20095__auto__ = (function (){var statearr_25348 = f__20094__auto__.call(null);
(statearr_25348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___25516);

return statearr_25348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___25516,res,vec__25334,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25349){
var vec__25350 = p__25349;
var v = cljs.core.nth.call(null,vec__25350,(0),null);
var p = cljs.core.nth.call(null,vec__25350,(1),null);
var job = vec__25350;
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
var n__18672__auto___25519 = n;
var __25520 = (0);
while(true){
if((__25520 < n__18672__auto___25519)){
var G__25351_25521 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25351_25521) {
case "async":
var c__20093__auto___25523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25520,c__20093__auto___25523,G__25351_25521,n__18672__auto___25519,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (__25520,c__20093__auto___25523,G__25351_25521,n__18672__auto___25519,jobs,results,process,async){
return (function (state_25364){
var state_val_25365 = (state_25364[(1)]);
if((state_val_25365 === (7))){
var inst_25360 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
var statearr_25366_25524 = state_25364__$1;
(statearr_25366_25524[(2)] = inst_25360);

(statearr_25366_25524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (6))){
var state_25364__$1 = state_25364;
var statearr_25367_25525 = state_25364__$1;
(statearr_25367_25525[(2)] = null);

(statearr_25367_25525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (5))){
var state_25364__$1 = state_25364;
var statearr_25368_25526 = state_25364__$1;
(statearr_25368_25526[(2)] = null);

(statearr_25368_25526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (4))){
var inst_25354 = (state_25364[(2)]);
var inst_25355 = async.call(null,inst_25354);
var state_25364__$1 = state_25364;
if(cljs.core.truth_(inst_25355)){
var statearr_25369_25527 = state_25364__$1;
(statearr_25369_25527[(1)] = (5));

} else {
var statearr_25370_25528 = state_25364__$1;
(statearr_25370_25528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25365 === (3))){
var inst_25362 = (state_25364[(2)]);
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25364__$1,inst_25362);
} else {
if((state_val_25365 === (2))){
var state_25364__$1 = state_25364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25364__$1,(4),jobs);
} else {
if((state_val_25365 === (1))){
var state_25364__$1 = state_25364;
var statearr_25371_25529 = state_25364__$1;
(statearr_25371_25529[(2)] = null);

(statearr_25371_25529[(1)] = (2));


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
});})(__25520,c__20093__auto___25523,G__25351_25521,n__18672__auto___25519,jobs,results,process,async))
;
return ((function (__25520,switch__20037__auto__,c__20093__auto___25523,G__25351_25521,n__18672__auto___25519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0 = (function (){
var statearr_25375 = [null,null,null,null,null,null,null];
(statearr_25375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__);

(statearr_25375[(1)] = (1));

return statearr_25375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1 = (function (state_25364){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25376){if((e25376 instanceof Object)){
var ex__20041__auto__ = e25376;
var statearr_25377_25530 = state_25364;
(statearr_25377_25530[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25531 = state_25364;
state_25364 = G__25531;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = function(state_25364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1.call(this,state_25364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__;
})()
;})(__25520,switch__20037__auto__,c__20093__auto___25523,G__25351_25521,n__18672__auto___25519,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_25378 = f__20094__auto__.call(null);
(statearr_25378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___25523);

return statearr_25378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(__25520,c__20093__auto___25523,G__25351_25521,n__18672__auto___25519,jobs,results,process,async))
);


break;
case "compute":
var c__20093__auto___25532 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25520,c__20093__auto___25532,G__25351_25521,n__18672__auto___25519,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (__25520,c__20093__auto___25532,G__25351_25521,n__18672__auto___25519,jobs,results,process,async){
return (function (state_25391){
var state_val_25392 = (state_25391[(1)]);
if((state_val_25392 === (7))){
var inst_25387 = (state_25391[(2)]);
var state_25391__$1 = state_25391;
var statearr_25393_25533 = state_25391__$1;
(statearr_25393_25533[(2)] = inst_25387);

(statearr_25393_25533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25392 === (6))){
var state_25391__$1 = state_25391;
var statearr_25394_25534 = state_25391__$1;
(statearr_25394_25534[(2)] = null);

(statearr_25394_25534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25392 === (5))){
var state_25391__$1 = state_25391;
var statearr_25395_25535 = state_25391__$1;
(statearr_25395_25535[(2)] = null);

(statearr_25395_25535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25392 === (4))){
var inst_25381 = (state_25391[(2)]);
var inst_25382 = process.call(null,inst_25381);
var state_25391__$1 = state_25391;
if(cljs.core.truth_(inst_25382)){
var statearr_25396_25536 = state_25391__$1;
(statearr_25396_25536[(1)] = (5));

} else {
var statearr_25397_25537 = state_25391__$1;
(statearr_25397_25537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25392 === (3))){
var inst_25389 = (state_25391[(2)]);
var state_25391__$1 = state_25391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25391__$1,inst_25389);
} else {
if((state_val_25392 === (2))){
var state_25391__$1 = state_25391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25391__$1,(4),jobs);
} else {
if((state_val_25392 === (1))){
var state_25391__$1 = state_25391;
var statearr_25398_25538 = state_25391__$1;
(statearr_25398_25538[(2)] = null);

(statearr_25398_25538[(1)] = (2));


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
});})(__25520,c__20093__auto___25532,G__25351_25521,n__18672__auto___25519,jobs,results,process,async))
;
return ((function (__25520,switch__20037__auto__,c__20093__auto___25532,G__25351_25521,n__18672__auto___25519,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0 = (function (){
var statearr_25402 = [null,null,null,null,null,null,null];
(statearr_25402[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__);

(statearr_25402[(1)] = (1));

return statearr_25402;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1 = (function (state_25391){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25403){if((e25403 instanceof Object)){
var ex__20041__auto__ = e25403;
var statearr_25404_25539 = state_25391;
(statearr_25404_25539[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25540 = state_25391;
state_25391 = G__25540;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = function(state_25391){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1.call(this,state_25391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__;
})()
;})(__25520,switch__20037__auto__,c__20093__auto___25532,G__25351_25521,n__18672__auto___25519,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_25405 = f__20094__auto__.call(null);
(statearr_25405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___25532);

return statearr_25405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(__25520,c__20093__auto___25532,G__25351_25521,n__18672__auto___25519,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25541 = (__25520 + (1));
__25520 = G__25541;
continue;
} else {
}
break;
}

var c__20093__auto___25542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___25542,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___25542,jobs,results,process,async){
return (function (state_25427){
var state_val_25428 = (state_25427[(1)]);
if((state_val_25428 === (9))){
var inst_25420 = (state_25427[(2)]);
var state_25427__$1 = (function (){var statearr_25429 = state_25427;
(statearr_25429[(7)] = inst_25420);

return statearr_25429;
})();
var statearr_25430_25543 = state_25427__$1;
(statearr_25430_25543[(2)] = null);

(statearr_25430_25543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (8))){
var inst_25413 = (state_25427[(8)]);
var inst_25418 = (state_25427[(2)]);
var state_25427__$1 = (function (){var statearr_25431 = state_25427;
(statearr_25431[(9)] = inst_25418);

return statearr_25431;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25427__$1,(9),results,inst_25413);
} else {
if((state_val_25428 === (7))){
var inst_25423 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25432_25544 = state_25427__$1;
(statearr_25432_25544[(2)] = inst_25423);

(statearr_25432_25544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (6))){
var inst_25408 = (state_25427[(10)]);
var inst_25413 = (state_25427[(8)]);
var inst_25413__$1 = cljs.core.async.chan.call(null,(1));
var inst_25414 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25415 = [inst_25408,inst_25413__$1];
var inst_25416 = (new cljs.core.PersistentVector(null,2,(5),inst_25414,inst_25415,null));
var state_25427__$1 = (function (){var statearr_25433 = state_25427;
(statearr_25433[(8)] = inst_25413__$1);

return statearr_25433;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25427__$1,(8),jobs,inst_25416);
} else {
if((state_val_25428 === (5))){
var inst_25411 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25427__$1 = state_25427;
var statearr_25434_25545 = state_25427__$1;
(statearr_25434_25545[(2)] = inst_25411);

(statearr_25434_25545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (4))){
var inst_25408 = (state_25427[(10)]);
var inst_25408__$1 = (state_25427[(2)]);
var inst_25409 = (inst_25408__$1 == null);
var state_25427__$1 = (function (){var statearr_25435 = state_25427;
(statearr_25435[(10)] = inst_25408__$1);

return statearr_25435;
})();
if(cljs.core.truth_(inst_25409)){
var statearr_25436_25546 = state_25427__$1;
(statearr_25436_25546[(1)] = (5));

} else {
var statearr_25437_25547 = state_25427__$1;
(statearr_25437_25547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (3))){
var inst_25425 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25427__$1,inst_25425);
} else {
if((state_val_25428 === (2))){
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25427__$1,(4),from);
} else {
if((state_val_25428 === (1))){
var state_25427__$1 = state_25427;
var statearr_25438_25548 = state_25427__$1;
(statearr_25438_25548[(2)] = null);

(statearr_25438_25548[(1)] = (2));


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
});})(c__20093__auto___25542,jobs,results,process,async))
;
return ((function (switch__20037__auto__,c__20093__auto___25542,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0 = (function (){
var statearr_25442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25442[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__);

(statearr_25442[(1)] = (1));

return statearr_25442;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1 = (function (state_25427){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25443){if((e25443 instanceof Object)){
var ex__20041__auto__ = e25443;
var statearr_25444_25549 = state_25427;
(statearr_25444_25549[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25550 = state_25427;
state_25427 = G__25550;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = function(state_25427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1.call(this,state_25427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___25542,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_25445 = f__20094__auto__.call(null);
(statearr_25445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___25542);

return statearr_25445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___25542,jobs,results,process,async))
);


var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__,jobs,results,process,async){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__,jobs,results,process,async){
return (function (state_25483){
var state_val_25484 = (state_25483[(1)]);
if((state_val_25484 === (7))){
var inst_25479 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25485_25551 = state_25483__$1;
(statearr_25485_25551[(2)] = inst_25479);

(statearr_25485_25551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (20))){
var state_25483__$1 = state_25483;
var statearr_25486_25552 = state_25483__$1;
(statearr_25486_25552[(2)] = null);

(statearr_25486_25552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (1))){
var state_25483__$1 = state_25483;
var statearr_25487_25553 = state_25483__$1;
(statearr_25487_25553[(2)] = null);

(statearr_25487_25553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (4))){
var inst_25448 = (state_25483[(7)]);
var inst_25448__$1 = (state_25483[(2)]);
var inst_25449 = (inst_25448__$1 == null);
var state_25483__$1 = (function (){var statearr_25488 = state_25483;
(statearr_25488[(7)] = inst_25448__$1);

return statearr_25488;
})();
if(cljs.core.truth_(inst_25449)){
var statearr_25489_25554 = state_25483__$1;
(statearr_25489_25554[(1)] = (5));

} else {
var statearr_25490_25555 = state_25483__$1;
(statearr_25490_25555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (15))){
var inst_25461 = (state_25483[(8)]);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25483__$1,(18),to,inst_25461);
} else {
if((state_val_25484 === (21))){
var inst_25474 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25491_25556 = state_25483__$1;
(statearr_25491_25556[(2)] = inst_25474);

(statearr_25491_25556[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (13))){
var inst_25476 = (state_25483[(2)]);
var state_25483__$1 = (function (){var statearr_25492 = state_25483;
(statearr_25492[(9)] = inst_25476);

return statearr_25492;
})();
var statearr_25493_25557 = state_25483__$1;
(statearr_25493_25557[(2)] = null);

(statearr_25493_25557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (6))){
var inst_25448 = (state_25483[(7)]);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25483__$1,(11),inst_25448);
} else {
if((state_val_25484 === (17))){
var inst_25469 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
if(cljs.core.truth_(inst_25469)){
var statearr_25494_25558 = state_25483__$1;
(statearr_25494_25558[(1)] = (19));

} else {
var statearr_25495_25559 = state_25483__$1;
(statearr_25495_25559[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (3))){
var inst_25481 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25483__$1,inst_25481);
} else {
if((state_val_25484 === (12))){
var inst_25458 = (state_25483[(10)]);
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25483__$1,(14),inst_25458);
} else {
if((state_val_25484 === (2))){
var state_25483__$1 = state_25483;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25483__$1,(4),results);
} else {
if((state_val_25484 === (19))){
var state_25483__$1 = state_25483;
var statearr_25496_25560 = state_25483__$1;
(statearr_25496_25560[(2)] = null);

(statearr_25496_25560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (11))){
var inst_25458 = (state_25483[(2)]);
var state_25483__$1 = (function (){var statearr_25497 = state_25483;
(statearr_25497[(10)] = inst_25458);

return statearr_25497;
})();
var statearr_25498_25561 = state_25483__$1;
(statearr_25498_25561[(2)] = null);

(statearr_25498_25561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (9))){
var state_25483__$1 = state_25483;
var statearr_25499_25562 = state_25483__$1;
(statearr_25499_25562[(2)] = null);

(statearr_25499_25562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (5))){
var state_25483__$1 = state_25483;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25500_25563 = state_25483__$1;
(statearr_25500_25563[(1)] = (8));

} else {
var statearr_25501_25564 = state_25483__$1;
(statearr_25501_25564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (14))){
var inst_25461 = (state_25483[(8)]);
var inst_25463 = (state_25483[(11)]);
var inst_25461__$1 = (state_25483[(2)]);
var inst_25462 = (inst_25461__$1 == null);
var inst_25463__$1 = cljs.core.not.call(null,inst_25462);
var state_25483__$1 = (function (){var statearr_25502 = state_25483;
(statearr_25502[(8)] = inst_25461__$1);

(statearr_25502[(11)] = inst_25463__$1);

return statearr_25502;
})();
if(inst_25463__$1){
var statearr_25503_25565 = state_25483__$1;
(statearr_25503_25565[(1)] = (15));

} else {
var statearr_25504_25566 = state_25483__$1;
(statearr_25504_25566[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (16))){
var inst_25463 = (state_25483[(11)]);
var state_25483__$1 = state_25483;
var statearr_25505_25567 = state_25483__$1;
(statearr_25505_25567[(2)] = inst_25463);

(statearr_25505_25567[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (10))){
var inst_25455 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25506_25568 = state_25483__$1;
(statearr_25506_25568[(2)] = inst_25455);

(statearr_25506_25568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (18))){
var inst_25466 = (state_25483[(2)]);
var state_25483__$1 = state_25483;
var statearr_25507_25569 = state_25483__$1;
(statearr_25507_25569[(2)] = inst_25466);

(statearr_25507_25569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25484 === (8))){
var inst_25452 = cljs.core.async.close_BANG_.call(null,to);
var state_25483__$1 = state_25483;
var statearr_25508_25570 = state_25483__$1;
(statearr_25508_25570[(2)] = inst_25452);

(statearr_25508_25570[(1)] = (10));


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
});})(c__20093__auto__,jobs,results,process,async))
;
return ((function (switch__20037__auto__,c__20093__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0 = (function (){
var statearr_25512 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__);

(statearr_25512[(1)] = (1));

return statearr_25512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1 = (function (state_25483){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25483);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object)){
var ex__20041__auto__ = e25513;
var statearr_25514_25571 = state_25483;
(statearr_25514_25571[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25483);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25572 = state_25483;
state_25483 = G__25572;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__ = function(state_25483){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1.call(this,state_25483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20038__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__,jobs,results,process,async))
})();
var state__20095__auto__ = (function (){var statearr_25515 = f__20094__auto__.call(null);
(statearr_25515[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_25515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__,jobs,results,process,async))
);

return c__20093__auto__;
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
var c__20093__auto___25673 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___25673,tc,fc){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___25673,tc,fc){
return (function (state_25648){
var state_val_25649 = (state_25648[(1)]);
if((state_val_25649 === (7))){
var inst_25644 = (state_25648[(2)]);
var state_25648__$1 = state_25648;
var statearr_25650_25674 = state_25648__$1;
(statearr_25650_25674[(2)] = inst_25644);

(statearr_25650_25674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (1))){
var state_25648__$1 = state_25648;
var statearr_25651_25675 = state_25648__$1;
(statearr_25651_25675[(2)] = null);

(statearr_25651_25675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (4))){
var inst_25625 = (state_25648[(7)]);
var inst_25625__$1 = (state_25648[(2)]);
var inst_25626 = (inst_25625__$1 == null);
var state_25648__$1 = (function (){var statearr_25652 = state_25648;
(statearr_25652[(7)] = inst_25625__$1);

return statearr_25652;
})();
if(cljs.core.truth_(inst_25626)){
var statearr_25653_25676 = state_25648__$1;
(statearr_25653_25676[(1)] = (5));

} else {
var statearr_25654_25677 = state_25648__$1;
(statearr_25654_25677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (13))){
var state_25648__$1 = state_25648;
var statearr_25655_25678 = state_25648__$1;
(statearr_25655_25678[(2)] = null);

(statearr_25655_25678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (6))){
var inst_25625 = (state_25648[(7)]);
var inst_25631 = p.call(null,inst_25625);
var state_25648__$1 = state_25648;
if(cljs.core.truth_(inst_25631)){
var statearr_25656_25679 = state_25648__$1;
(statearr_25656_25679[(1)] = (9));

} else {
var statearr_25657_25680 = state_25648__$1;
(statearr_25657_25680[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (3))){
var inst_25646 = (state_25648[(2)]);
var state_25648__$1 = state_25648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25648__$1,inst_25646);
} else {
if((state_val_25649 === (12))){
var state_25648__$1 = state_25648;
var statearr_25658_25681 = state_25648__$1;
(statearr_25658_25681[(2)] = null);

(statearr_25658_25681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (2))){
var state_25648__$1 = state_25648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25648__$1,(4),ch);
} else {
if((state_val_25649 === (11))){
var inst_25625 = (state_25648[(7)]);
var inst_25635 = (state_25648[(2)]);
var state_25648__$1 = state_25648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25648__$1,(8),inst_25635,inst_25625);
} else {
if((state_val_25649 === (9))){
var state_25648__$1 = state_25648;
var statearr_25659_25682 = state_25648__$1;
(statearr_25659_25682[(2)] = tc);

(statearr_25659_25682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (5))){
var inst_25628 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25629 = cljs.core.async.close_BANG_.call(null,fc);
var state_25648__$1 = (function (){var statearr_25660 = state_25648;
(statearr_25660[(8)] = inst_25628);

return statearr_25660;
})();
var statearr_25661_25683 = state_25648__$1;
(statearr_25661_25683[(2)] = inst_25629);

(statearr_25661_25683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (14))){
var inst_25642 = (state_25648[(2)]);
var state_25648__$1 = state_25648;
var statearr_25662_25684 = state_25648__$1;
(statearr_25662_25684[(2)] = inst_25642);

(statearr_25662_25684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (10))){
var state_25648__$1 = state_25648;
var statearr_25663_25685 = state_25648__$1;
(statearr_25663_25685[(2)] = fc);

(statearr_25663_25685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25649 === (8))){
var inst_25637 = (state_25648[(2)]);
var state_25648__$1 = state_25648;
if(cljs.core.truth_(inst_25637)){
var statearr_25664_25686 = state_25648__$1;
(statearr_25664_25686[(1)] = (12));

} else {
var statearr_25665_25687 = state_25648__$1;
(statearr_25665_25687[(1)] = (13));

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
});})(c__20093__auto___25673,tc,fc))
;
return ((function (switch__20037__auto__,c__20093__auto___25673,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__20038__auto__ = null;
var cljs$core$async$split_$_state_machine__20038__auto____0 = (function (){
var statearr_25669 = [null,null,null,null,null,null,null,null,null];
(statearr_25669[(0)] = cljs$core$async$split_$_state_machine__20038__auto__);

(statearr_25669[(1)] = (1));

return statearr_25669;
});
var cljs$core$async$split_$_state_machine__20038__auto____1 = (function (state_25648){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25670){if((e25670 instanceof Object)){
var ex__20041__auto__ = e25670;
var statearr_25671_25688 = state_25648;
(statearr_25671_25688[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25689 = state_25648;
state_25648 = G__25689;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__20038__auto__ = function(state_25648){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__20038__auto____1.call(this,state_25648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__20038__auto____0;
cljs$core$async$split_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__20038__auto____1;
return cljs$core$async$split_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___25673,tc,fc))
})();
var state__20095__auto__ = (function (){var statearr_25672 = f__20094__auto__.call(null);
(statearr_25672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___25673);

return statearr_25672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___25673,tc,fc))
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
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_25736){
var state_val_25737 = (state_25736[(1)]);
if((state_val_25737 === (7))){
var inst_25732 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
var statearr_25738_25754 = state_25736__$1;
(statearr_25738_25754[(2)] = inst_25732);

(statearr_25738_25754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (6))){
var inst_25725 = (state_25736[(7)]);
var inst_25722 = (state_25736[(8)]);
var inst_25729 = f.call(null,inst_25722,inst_25725);
var inst_25722__$1 = inst_25729;
var state_25736__$1 = (function (){var statearr_25739 = state_25736;
(statearr_25739[(8)] = inst_25722__$1);

return statearr_25739;
})();
var statearr_25740_25755 = state_25736__$1;
(statearr_25740_25755[(2)] = null);

(statearr_25740_25755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (5))){
var inst_25722 = (state_25736[(8)]);
var state_25736__$1 = state_25736;
var statearr_25741_25756 = state_25736__$1;
(statearr_25741_25756[(2)] = inst_25722);

(statearr_25741_25756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (4))){
var inst_25725 = (state_25736[(7)]);
var inst_25725__$1 = (state_25736[(2)]);
var inst_25726 = (inst_25725__$1 == null);
var state_25736__$1 = (function (){var statearr_25742 = state_25736;
(statearr_25742[(7)] = inst_25725__$1);

return statearr_25742;
})();
if(cljs.core.truth_(inst_25726)){
var statearr_25743_25757 = state_25736__$1;
(statearr_25743_25757[(1)] = (5));

} else {
var statearr_25744_25758 = state_25736__$1;
(statearr_25744_25758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25737 === (3))){
var inst_25734 = (state_25736[(2)]);
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25736__$1,inst_25734);
} else {
if((state_val_25737 === (2))){
var state_25736__$1 = state_25736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25736__$1,(4),ch);
} else {
if((state_val_25737 === (1))){
var inst_25722 = init;
var state_25736__$1 = (function (){var statearr_25745 = state_25736;
(statearr_25745[(8)] = inst_25722);

return statearr_25745;
})();
var statearr_25746_25759 = state_25736__$1;
(statearr_25746_25759[(2)] = null);

(statearr_25746_25759[(1)] = (2));


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
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20038__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20038__auto____0 = (function (){
var statearr_25750 = [null,null,null,null,null,null,null,null,null];
(statearr_25750[(0)] = cljs$core$async$reduce_$_state_machine__20038__auto__);

(statearr_25750[(1)] = (1));

return statearr_25750;
});
var cljs$core$async$reduce_$_state_machine__20038__auto____1 = (function (state_25736){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25751){if((e25751 instanceof Object)){
var ex__20041__auto__ = e25751;
var statearr_25752_25760 = state_25736;
(statearr_25752_25760[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25761 = state_25736;
state_25736 = G__25761;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20038__auto__ = function(state_25736){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20038__auto____1.call(this,state_25736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20038__auto____0;
cljs$core$async$reduce_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20038__auto____1;
return cljs$core$async$reduce_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_25753 = f__20094__auto__.call(null);
(statearr_25753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_25753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
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
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_25835){
var state_val_25836 = (state_25835[(1)]);
if((state_val_25836 === (7))){
var inst_25817 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
var statearr_25837_25860 = state_25835__$1;
(statearr_25837_25860[(2)] = inst_25817);

(statearr_25837_25860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (1))){
var inst_25811 = cljs.core.seq.call(null,coll);
var inst_25812 = inst_25811;
var state_25835__$1 = (function (){var statearr_25838 = state_25835;
(statearr_25838[(7)] = inst_25812);

return statearr_25838;
})();
var statearr_25839_25861 = state_25835__$1;
(statearr_25839_25861[(2)] = null);

(statearr_25839_25861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (4))){
var inst_25812 = (state_25835[(7)]);
var inst_25815 = cljs.core.first.call(null,inst_25812);
var state_25835__$1 = state_25835;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25835__$1,(7),ch,inst_25815);
} else {
if((state_val_25836 === (13))){
var inst_25829 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
var statearr_25840_25862 = state_25835__$1;
(statearr_25840_25862[(2)] = inst_25829);

(statearr_25840_25862[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (6))){
var inst_25820 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
if(cljs.core.truth_(inst_25820)){
var statearr_25841_25863 = state_25835__$1;
(statearr_25841_25863[(1)] = (8));

} else {
var statearr_25842_25864 = state_25835__$1;
(statearr_25842_25864[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (3))){
var inst_25833 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25835__$1,inst_25833);
} else {
if((state_val_25836 === (12))){
var state_25835__$1 = state_25835;
var statearr_25843_25865 = state_25835__$1;
(statearr_25843_25865[(2)] = null);

(statearr_25843_25865[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (2))){
var inst_25812 = (state_25835[(7)]);
var state_25835__$1 = state_25835;
if(cljs.core.truth_(inst_25812)){
var statearr_25844_25866 = state_25835__$1;
(statearr_25844_25866[(1)] = (4));

} else {
var statearr_25845_25867 = state_25835__$1;
(statearr_25845_25867[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (11))){
var inst_25826 = cljs.core.async.close_BANG_.call(null,ch);
var state_25835__$1 = state_25835;
var statearr_25846_25868 = state_25835__$1;
(statearr_25846_25868[(2)] = inst_25826);

(statearr_25846_25868[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (9))){
var state_25835__$1 = state_25835;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25847_25869 = state_25835__$1;
(statearr_25847_25869[(1)] = (11));

} else {
var statearr_25848_25870 = state_25835__$1;
(statearr_25848_25870[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (5))){
var inst_25812 = (state_25835[(7)]);
var state_25835__$1 = state_25835;
var statearr_25849_25871 = state_25835__$1;
(statearr_25849_25871[(2)] = inst_25812);

(statearr_25849_25871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (10))){
var inst_25831 = (state_25835[(2)]);
var state_25835__$1 = state_25835;
var statearr_25850_25872 = state_25835__$1;
(statearr_25850_25872[(2)] = inst_25831);

(statearr_25850_25872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25836 === (8))){
var inst_25812 = (state_25835[(7)]);
var inst_25822 = cljs.core.next.call(null,inst_25812);
var inst_25812__$1 = inst_25822;
var state_25835__$1 = (function (){var statearr_25851 = state_25835;
(statearr_25851[(7)] = inst_25812__$1);

return statearr_25851;
})();
var statearr_25852_25873 = state_25835__$1;
(statearr_25852_25873[(2)] = null);

(statearr_25852_25873[(1)] = (2));


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
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__20038__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__20038__auto____0 = (function (){
var statearr_25856 = [null,null,null,null,null,null,null,null];
(statearr_25856[(0)] = cljs$core$async$onto_chan_$_state_machine__20038__auto__);

(statearr_25856[(1)] = (1));

return statearr_25856;
});
var cljs$core$async$onto_chan_$_state_machine__20038__auto____1 = (function (state_25835){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_25835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object)){
var ex__20041__auto__ = e25857;
var statearr_25858_25874 = state_25835;
(statearr_25858_25874[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25875 = state_25835;
state_25835 = G__25875;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__20038__auto__ = function(state_25835){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__20038__auto____1.call(this,state_25835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__20038__auto____0;
cljs$core$async$onto_chan_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__20038__auto____1;
return cljs$core$async$onto_chan_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_25859 = f__20094__auto__.call(null);
(statearr_25859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_25859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
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

cljs.core.async.Mux = (function (){var obj25877 = {};
return obj25877;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__17775__auto__ = _;
if(and__17775__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__17775__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18423__auto__ = (((_ == null))?null:_);
return (function (){var or__17787__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25879 = {};
return obj25879;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
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
if(typeof cljs.core.async.t26101 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26101 = (function (cs,ch,mult,meta26102){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta26102 = meta26102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26101.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26101.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26101.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26101.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26101.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26103){
var self__ = this;
var _26103__$1 = this;
return self__.meta26102;
});})(cs))
;

cljs.core.async.t26101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26103,meta26102__$1){
var self__ = this;
var _26103__$1 = this;
return (new cljs.core.async.t26101(self__.cs,self__.ch,self__.mult,meta26102__$1));
});})(cs))
;

cljs.core.async.t26101.cljs$lang$type = true;

cljs.core.async.t26101.cljs$lang$ctorStr = "cljs.core.async/t26101";

cljs.core.async.t26101.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t26101");
});})(cs))
;

cljs.core.async.__GT_t26101 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26101(cs__$1,ch__$1,mult__$1,meta26102){
return (new cljs.core.async.t26101(cs__$1,ch__$1,mult__$1,meta26102));
});})(cs))
;

}

return (new cljs.core.async.t26101(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20093__auto___26322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___26322,cs,m,dchan,dctr,done){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___26322,cs,m,dchan,dctr,done){
return (function (state_26234){
var state_val_26235 = (state_26234[(1)]);
if((state_val_26235 === (7))){
var inst_26230 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26236_26323 = state_26234__$1;
(statearr_26236_26323[(2)] = inst_26230);

(statearr_26236_26323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (20))){
var inst_26135 = (state_26234[(7)]);
var inst_26145 = cljs.core.first.call(null,inst_26135);
var inst_26146 = cljs.core.nth.call(null,inst_26145,(0),null);
var inst_26147 = cljs.core.nth.call(null,inst_26145,(1),null);
var state_26234__$1 = (function (){var statearr_26237 = state_26234;
(statearr_26237[(8)] = inst_26146);

return statearr_26237;
})();
if(cljs.core.truth_(inst_26147)){
var statearr_26238_26324 = state_26234__$1;
(statearr_26238_26324[(1)] = (22));

} else {
var statearr_26239_26325 = state_26234__$1;
(statearr_26239_26325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (27))){
var inst_26177 = (state_26234[(9)]);
var inst_26106 = (state_26234[(10)]);
var inst_26182 = (state_26234[(11)]);
var inst_26175 = (state_26234[(12)]);
var inst_26182__$1 = cljs.core._nth.call(null,inst_26175,inst_26177);
var inst_26183 = cljs.core.async.put_BANG_.call(null,inst_26182__$1,inst_26106,done);
var state_26234__$1 = (function (){var statearr_26240 = state_26234;
(statearr_26240[(11)] = inst_26182__$1);

return statearr_26240;
})();
if(cljs.core.truth_(inst_26183)){
var statearr_26241_26326 = state_26234__$1;
(statearr_26241_26326[(1)] = (30));

} else {
var statearr_26242_26327 = state_26234__$1;
(statearr_26242_26327[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (1))){
var state_26234__$1 = state_26234;
var statearr_26243_26328 = state_26234__$1;
(statearr_26243_26328[(2)] = null);

(statearr_26243_26328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (24))){
var inst_26135 = (state_26234[(7)]);
var inst_26152 = (state_26234[(2)]);
var inst_26153 = cljs.core.next.call(null,inst_26135);
var inst_26115 = inst_26153;
var inst_26116 = null;
var inst_26117 = (0);
var inst_26118 = (0);
var state_26234__$1 = (function (){var statearr_26244 = state_26234;
(statearr_26244[(13)] = inst_26115);

(statearr_26244[(14)] = inst_26152);

(statearr_26244[(15)] = inst_26118);

(statearr_26244[(16)] = inst_26116);

(statearr_26244[(17)] = inst_26117);

return statearr_26244;
})();
var statearr_26245_26329 = state_26234__$1;
(statearr_26245_26329[(2)] = null);

(statearr_26245_26329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (39))){
var state_26234__$1 = state_26234;
var statearr_26249_26330 = state_26234__$1;
(statearr_26249_26330[(2)] = null);

(statearr_26249_26330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (4))){
var inst_26106 = (state_26234[(10)]);
var inst_26106__$1 = (state_26234[(2)]);
var inst_26107 = (inst_26106__$1 == null);
var state_26234__$1 = (function (){var statearr_26250 = state_26234;
(statearr_26250[(10)] = inst_26106__$1);

return statearr_26250;
})();
if(cljs.core.truth_(inst_26107)){
var statearr_26251_26331 = state_26234__$1;
(statearr_26251_26331[(1)] = (5));

} else {
var statearr_26252_26332 = state_26234__$1;
(statearr_26252_26332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (15))){
var inst_26115 = (state_26234[(13)]);
var inst_26118 = (state_26234[(15)]);
var inst_26116 = (state_26234[(16)]);
var inst_26117 = (state_26234[(17)]);
var inst_26131 = (state_26234[(2)]);
var inst_26132 = (inst_26118 + (1));
var tmp26246 = inst_26115;
var tmp26247 = inst_26116;
var tmp26248 = inst_26117;
var inst_26115__$1 = tmp26246;
var inst_26116__$1 = tmp26247;
var inst_26117__$1 = tmp26248;
var inst_26118__$1 = inst_26132;
var state_26234__$1 = (function (){var statearr_26253 = state_26234;
(statearr_26253[(13)] = inst_26115__$1);

(statearr_26253[(18)] = inst_26131);

(statearr_26253[(15)] = inst_26118__$1);

(statearr_26253[(16)] = inst_26116__$1);

(statearr_26253[(17)] = inst_26117__$1);

return statearr_26253;
})();
var statearr_26254_26333 = state_26234__$1;
(statearr_26254_26333[(2)] = null);

(statearr_26254_26333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (21))){
var inst_26156 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26258_26334 = state_26234__$1;
(statearr_26258_26334[(2)] = inst_26156);

(statearr_26258_26334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (31))){
var inst_26182 = (state_26234[(11)]);
var inst_26186 = done.call(null,null);
var inst_26187 = cljs.core.async.untap_STAR_.call(null,m,inst_26182);
var state_26234__$1 = (function (){var statearr_26259 = state_26234;
(statearr_26259[(19)] = inst_26186);

return statearr_26259;
})();
var statearr_26260_26335 = state_26234__$1;
(statearr_26260_26335[(2)] = inst_26187);

(statearr_26260_26335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (32))){
var inst_26174 = (state_26234[(20)]);
var inst_26177 = (state_26234[(9)]);
var inst_26176 = (state_26234[(21)]);
var inst_26175 = (state_26234[(12)]);
var inst_26189 = (state_26234[(2)]);
var inst_26190 = (inst_26177 + (1));
var tmp26255 = inst_26174;
var tmp26256 = inst_26176;
var tmp26257 = inst_26175;
var inst_26174__$1 = tmp26255;
var inst_26175__$1 = tmp26257;
var inst_26176__$1 = tmp26256;
var inst_26177__$1 = inst_26190;
var state_26234__$1 = (function (){var statearr_26261 = state_26234;
(statearr_26261[(20)] = inst_26174__$1);

(statearr_26261[(9)] = inst_26177__$1);

(statearr_26261[(22)] = inst_26189);

(statearr_26261[(21)] = inst_26176__$1);

(statearr_26261[(12)] = inst_26175__$1);

return statearr_26261;
})();
var statearr_26262_26336 = state_26234__$1;
(statearr_26262_26336[(2)] = null);

(statearr_26262_26336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (40))){
var inst_26202 = (state_26234[(23)]);
var inst_26206 = done.call(null,null);
var inst_26207 = cljs.core.async.untap_STAR_.call(null,m,inst_26202);
var state_26234__$1 = (function (){var statearr_26263 = state_26234;
(statearr_26263[(24)] = inst_26206);

return statearr_26263;
})();
var statearr_26264_26337 = state_26234__$1;
(statearr_26264_26337[(2)] = inst_26207);

(statearr_26264_26337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (33))){
var inst_26193 = (state_26234[(25)]);
var inst_26195 = cljs.core.chunked_seq_QMARK_.call(null,inst_26193);
var state_26234__$1 = state_26234;
if(inst_26195){
var statearr_26265_26338 = state_26234__$1;
(statearr_26265_26338[(1)] = (36));

} else {
var statearr_26266_26339 = state_26234__$1;
(statearr_26266_26339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (13))){
var inst_26125 = (state_26234[(26)]);
var inst_26128 = cljs.core.async.close_BANG_.call(null,inst_26125);
var state_26234__$1 = state_26234;
var statearr_26267_26340 = state_26234__$1;
(statearr_26267_26340[(2)] = inst_26128);

(statearr_26267_26340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (22))){
var inst_26146 = (state_26234[(8)]);
var inst_26149 = cljs.core.async.close_BANG_.call(null,inst_26146);
var state_26234__$1 = state_26234;
var statearr_26268_26341 = state_26234__$1;
(statearr_26268_26341[(2)] = inst_26149);

(statearr_26268_26341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (36))){
var inst_26193 = (state_26234[(25)]);
var inst_26197 = cljs.core.chunk_first.call(null,inst_26193);
var inst_26198 = cljs.core.chunk_rest.call(null,inst_26193);
var inst_26199 = cljs.core.count.call(null,inst_26197);
var inst_26174 = inst_26198;
var inst_26175 = inst_26197;
var inst_26176 = inst_26199;
var inst_26177 = (0);
var state_26234__$1 = (function (){var statearr_26269 = state_26234;
(statearr_26269[(20)] = inst_26174);

(statearr_26269[(9)] = inst_26177);

(statearr_26269[(21)] = inst_26176);

(statearr_26269[(12)] = inst_26175);

return statearr_26269;
})();
var statearr_26270_26342 = state_26234__$1;
(statearr_26270_26342[(2)] = null);

(statearr_26270_26342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (41))){
var inst_26193 = (state_26234[(25)]);
var inst_26209 = (state_26234[(2)]);
var inst_26210 = cljs.core.next.call(null,inst_26193);
var inst_26174 = inst_26210;
var inst_26175 = null;
var inst_26176 = (0);
var inst_26177 = (0);
var state_26234__$1 = (function (){var statearr_26271 = state_26234;
(statearr_26271[(20)] = inst_26174);

(statearr_26271[(9)] = inst_26177);

(statearr_26271[(27)] = inst_26209);

(statearr_26271[(21)] = inst_26176);

(statearr_26271[(12)] = inst_26175);

return statearr_26271;
})();
var statearr_26272_26343 = state_26234__$1;
(statearr_26272_26343[(2)] = null);

(statearr_26272_26343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (43))){
var state_26234__$1 = state_26234;
var statearr_26273_26344 = state_26234__$1;
(statearr_26273_26344[(2)] = null);

(statearr_26273_26344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (29))){
var inst_26218 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26274_26345 = state_26234__$1;
(statearr_26274_26345[(2)] = inst_26218);

(statearr_26274_26345[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (44))){
var inst_26227 = (state_26234[(2)]);
var state_26234__$1 = (function (){var statearr_26275 = state_26234;
(statearr_26275[(28)] = inst_26227);

return statearr_26275;
})();
var statearr_26276_26346 = state_26234__$1;
(statearr_26276_26346[(2)] = null);

(statearr_26276_26346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (6))){
var inst_26166 = (state_26234[(29)]);
var inst_26165 = cljs.core.deref.call(null,cs);
var inst_26166__$1 = cljs.core.keys.call(null,inst_26165);
var inst_26167 = cljs.core.count.call(null,inst_26166__$1);
var inst_26168 = cljs.core.reset_BANG_.call(null,dctr,inst_26167);
var inst_26173 = cljs.core.seq.call(null,inst_26166__$1);
var inst_26174 = inst_26173;
var inst_26175 = null;
var inst_26176 = (0);
var inst_26177 = (0);
var state_26234__$1 = (function (){var statearr_26277 = state_26234;
(statearr_26277[(30)] = inst_26168);

(statearr_26277[(29)] = inst_26166__$1);

(statearr_26277[(20)] = inst_26174);

(statearr_26277[(9)] = inst_26177);

(statearr_26277[(21)] = inst_26176);

(statearr_26277[(12)] = inst_26175);

return statearr_26277;
})();
var statearr_26278_26347 = state_26234__$1;
(statearr_26278_26347[(2)] = null);

(statearr_26278_26347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (28))){
var inst_26174 = (state_26234[(20)]);
var inst_26193 = (state_26234[(25)]);
var inst_26193__$1 = cljs.core.seq.call(null,inst_26174);
var state_26234__$1 = (function (){var statearr_26279 = state_26234;
(statearr_26279[(25)] = inst_26193__$1);

return statearr_26279;
})();
if(inst_26193__$1){
var statearr_26280_26348 = state_26234__$1;
(statearr_26280_26348[(1)] = (33));

} else {
var statearr_26281_26349 = state_26234__$1;
(statearr_26281_26349[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (25))){
var inst_26177 = (state_26234[(9)]);
var inst_26176 = (state_26234[(21)]);
var inst_26179 = (inst_26177 < inst_26176);
var inst_26180 = inst_26179;
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26180)){
var statearr_26282_26350 = state_26234__$1;
(statearr_26282_26350[(1)] = (27));

} else {
var statearr_26283_26351 = state_26234__$1;
(statearr_26283_26351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (34))){
var state_26234__$1 = state_26234;
var statearr_26284_26352 = state_26234__$1;
(statearr_26284_26352[(2)] = null);

(statearr_26284_26352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (17))){
var state_26234__$1 = state_26234;
var statearr_26285_26353 = state_26234__$1;
(statearr_26285_26353[(2)] = null);

(statearr_26285_26353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (3))){
var inst_26232 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26234__$1,inst_26232);
} else {
if((state_val_26235 === (12))){
var inst_26161 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26286_26354 = state_26234__$1;
(statearr_26286_26354[(2)] = inst_26161);

(statearr_26286_26354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (2))){
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26234__$1,(4),ch);
} else {
if((state_val_26235 === (23))){
var state_26234__$1 = state_26234;
var statearr_26287_26355 = state_26234__$1;
(statearr_26287_26355[(2)] = null);

(statearr_26287_26355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (35))){
var inst_26216 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26288_26356 = state_26234__$1;
(statearr_26288_26356[(2)] = inst_26216);

(statearr_26288_26356[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (19))){
var inst_26135 = (state_26234[(7)]);
var inst_26139 = cljs.core.chunk_first.call(null,inst_26135);
var inst_26140 = cljs.core.chunk_rest.call(null,inst_26135);
var inst_26141 = cljs.core.count.call(null,inst_26139);
var inst_26115 = inst_26140;
var inst_26116 = inst_26139;
var inst_26117 = inst_26141;
var inst_26118 = (0);
var state_26234__$1 = (function (){var statearr_26289 = state_26234;
(statearr_26289[(13)] = inst_26115);

(statearr_26289[(15)] = inst_26118);

(statearr_26289[(16)] = inst_26116);

(statearr_26289[(17)] = inst_26117);

return statearr_26289;
})();
var statearr_26290_26357 = state_26234__$1;
(statearr_26290_26357[(2)] = null);

(statearr_26290_26357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (11))){
var inst_26115 = (state_26234[(13)]);
var inst_26135 = (state_26234[(7)]);
var inst_26135__$1 = cljs.core.seq.call(null,inst_26115);
var state_26234__$1 = (function (){var statearr_26291 = state_26234;
(statearr_26291[(7)] = inst_26135__$1);

return statearr_26291;
})();
if(inst_26135__$1){
var statearr_26292_26358 = state_26234__$1;
(statearr_26292_26358[(1)] = (16));

} else {
var statearr_26293_26359 = state_26234__$1;
(statearr_26293_26359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (9))){
var inst_26163 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26294_26360 = state_26234__$1;
(statearr_26294_26360[(2)] = inst_26163);

(statearr_26294_26360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (5))){
var inst_26113 = cljs.core.deref.call(null,cs);
var inst_26114 = cljs.core.seq.call(null,inst_26113);
var inst_26115 = inst_26114;
var inst_26116 = null;
var inst_26117 = (0);
var inst_26118 = (0);
var state_26234__$1 = (function (){var statearr_26295 = state_26234;
(statearr_26295[(13)] = inst_26115);

(statearr_26295[(15)] = inst_26118);

(statearr_26295[(16)] = inst_26116);

(statearr_26295[(17)] = inst_26117);

return statearr_26295;
})();
var statearr_26296_26361 = state_26234__$1;
(statearr_26296_26361[(2)] = null);

(statearr_26296_26361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (14))){
var state_26234__$1 = state_26234;
var statearr_26297_26362 = state_26234__$1;
(statearr_26297_26362[(2)] = null);

(statearr_26297_26362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (45))){
var inst_26224 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26298_26363 = state_26234__$1;
(statearr_26298_26363[(2)] = inst_26224);

(statearr_26298_26363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (26))){
var inst_26166 = (state_26234[(29)]);
var inst_26220 = (state_26234[(2)]);
var inst_26221 = cljs.core.seq.call(null,inst_26166);
var state_26234__$1 = (function (){var statearr_26299 = state_26234;
(statearr_26299[(31)] = inst_26220);

return statearr_26299;
})();
if(inst_26221){
var statearr_26300_26364 = state_26234__$1;
(statearr_26300_26364[(1)] = (42));

} else {
var statearr_26301_26365 = state_26234__$1;
(statearr_26301_26365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (16))){
var inst_26135 = (state_26234[(7)]);
var inst_26137 = cljs.core.chunked_seq_QMARK_.call(null,inst_26135);
var state_26234__$1 = state_26234;
if(inst_26137){
var statearr_26302_26366 = state_26234__$1;
(statearr_26302_26366[(1)] = (19));

} else {
var statearr_26303_26367 = state_26234__$1;
(statearr_26303_26367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (38))){
var inst_26213 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26304_26368 = state_26234__$1;
(statearr_26304_26368[(2)] = inst_26213);

(statearr_26304_26368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (30))){
var state_26234__$1 = state_26234;
var statearr_26305_26369 = state_26234__$1;
(statearr_26305_26369[(2)] = null);

(statearr_26305_26369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (10))){
var inst_26118 = (state_26234[(15)]);
var inst_26116 = (state_26234[(16)]);
var inst_26124 = cljs.core._nth.call(null,inst_26116,inst_26118);
var inst_26125 = cljs.core.nth.call(null,inst_26124,(0),null);
var inst_26126 = cljs.core.nth.call(null,inst_26124,(1),null);
var state_26234__$1 = (function (){var statearr_26306 = state_26234;
(statearr_26306[(26)] = inst_26125);

return statearr_26306;
})();
if(cljs.core.truth_(inst_26126)){
var statearr_26307_26370 = state_26234__$1;
(statearr_26307_26370[(1)] = (13));

} else {
var statearr_26308_26371 = state_26234__$1;
(statearr_26308_26371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (18))){
var inst_26159 = (state_26234[(2)]);
var state_26234__$1 = state_26234;
var statearr_26309_26372 = state_26234__$1;
(statearr_26309_26372[(2)] = inst_26159);

(statearr_26309_26372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (42))){
var state_26234__$1 = state_26234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26234__$1,(45),dchan);
} else {
if((state_val_26235 === (37))){
var inst_26202 = (state_26234[(23)]);
var inst_26106 = (state_26234[(10)]);
var inst_26193 = (state_26234[(25)]);
var inst_26202__$1 = cljs.core.first.call(null,inst_26193);
var inst_26203 = cljs.core.async.put_BANG_.call(null,inst_26202__$1,inst_26106,done);
var state_26234__$1 = (function (){var statearr_26310 = state_26234;
(statearr_26310[(23)] = inst_26202__$1);

return statearr_26310;
})();
if(cljs.core.truth_(inst_26203)){
var statearr_26311_26373 = state_26234__$1;
(statearr_26311_26373[(1)] = (39));

} else {
var statearr_26312_26374 = state_26234__$1;
(statearr_26312_26374[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26235 === (8))){
var inst_26118 = (state_26234[(15)]);
var inst_26117 = (state_26234[(17)]);
var inst_26120 = (inst_26118 < inst_26117);
var inst_26121 = inst_26120;
var state_26234__$1 = state_26234;
if(cljs.core.truth_(inst_26121)){
var statearr_26313_26375 = state_26234__$1;
(statearr_26313_26375[(1)] = (10));

} else {
var statearr_26314_26376 = state_26234__$1;
(statearr_26314_26376[(1)] = (11));

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
});})(c__20093__auto___26322,cs,m,dchan,dctr,done))
;
return ((function (switch__20037__auto__,c__20093__auto___26322,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20038__auto__ = null;
var cljs$core$async$mult_$_state_machine__20038__auto____0 = (function (){
var statearr_26318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26318[(0)] = cljs$core$async$mult_$_state_machine__20038__auto__);

(statearr_26318[(1)] = (1));

return statearr_26318;
});
var cljs$core$async$mult_$_state_machine__20038__auto____1 = (function (state_26234){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_26234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e26319){if((e26319 instanceof Object)){
var ex__20041__auto__ = e26319;
var statearr_26320_26377 = state_26234;
(statearr_26320_26377[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26378 = state_26234;
state_26234 = G__26378;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20038__auto__ = function(state_26234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20038__auto____1.call(this,state_26234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20038__auto____0;
cljs$core$async$mult_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20038__auto____1;
return cljs$core$async$mult_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___26322,cs,m,dchan,dctr,done))
})();
var state__20095__auto__ = (function (){var statearr_26321 = f__20094__auto__.call(null);
(statearr_26321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___26322);

return statearr_26321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___26322,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj26380 = {};
return obj26380;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__17775__auto__ = m;
if(and__17775__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18423__auto__ = (((m == null))?null:m);
return (function (){var or__17787__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26381){
var map__26386 = p__26381;
var map__26386__$1 = ((cljs.core.seq_QMARK_.call(null,map__26386))?cljs.core.apply.call(null,cljs.core.hash_map,map__26386):map__26386);
var opts = map__26386__$1;
var statearr_26387_26390 = state;
(statearr_26387_26390[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26386,map__26386__$1,opts){
return (function (val){
var statearr_26388_26391 = state;
(statearr_26388_26391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26386,map__26386__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26389_26392 = state;
(statearr_26389_26392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26381 = null;
if (arguments.length > 3) {
var G__26393__i = 0, G__26393__a = new Array(arguments.length -  3);
while (G__26393__i < G__26393__a.length) {G__26393__a[G__26393__i] = arguments[G__26393__i + 3]; ++G__26393__i;}
  p__26381 = new cljs.core.IndexedSeq(G__26393__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26381);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26394){
var state = cljs.core.first(arglist__26394);
arglist__26394 = cljs.core.next(arglist__26394);
var cont_block = cljs.core.first(arglist__26394);
arglist__26394 = cljs.core.next(arglist__26394);
var ports = cljs.core.first(arglist__26394);
var p__26381 = cljs.core.rest(arglist__26394);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__26381);
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
if(typeof cljs.core.async.t26514 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26514 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26515){
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
this.meta26515 = meta26515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26514.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26514.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t26514.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26516){
var self__ = this;
var _26516__$1 = this;
return self__.meta26515;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26516,meta26515__$1){
var self__ = this;
var _26516__$1 = this;
return (new cljs.core.async.t26514(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26515__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26514.cljs$lang$type = true;

cljs.core.async.t26514.cljs$lang$ctorStr = "cljs.core.async/t26514";

cljs.core.async.t26514.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t26514");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26514 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t26514(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26515){
return (new cljs.core.async.t26514(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26515));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26514(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20093__auto___26633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___26633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___26633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26586){
var state_val_26587 = (state_26586[(1)]);
if((state_val_26587 === (7))){
var inst_26530 = (state_26586[(7)]);
var inst_26535 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26530);
var state_26586__$1 = state_26586;
var statearr_26588_26634 = state_26586__$1;
(statearr_26588_26634[(2)] = inst_26535);

(statearr_26588_26634[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (20))){
var inst_26545 = (state_26586[(8)]);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26586__$1,(23),out,inst_26545);
} else {
if((state_val_26587 === (1))){
var inst_26520 = (state_26586[(9)]);
var inst_26520__$1 = calc_state.call(null);
var inst_26521 = cljs.core.seq_QMARK_.call(null,inst_26520__$1);
var state_26586__$1 = (function (){var statearr_26589 = state_26586;
(statearr_26589[(9)] = inst_26520__$1);

return statearr_26589;
})();
if(inst_26521){
var statearr_26590_26635 = state_26586__$1;
(statearr_26590_26635[(1)] = (2));

} else {
var statearr_26591_26636 = state_26586__$1;
(statearr_26591_26636[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (24))){
var inst_26538 = (state_26586[(10)]);
var inst_26530 = inst_26538;
var state_26586__$1 = (function (){var statearr_26592 = state_26586;
(statearr_26592[(7)] = inst_26530);

return statearr_26592;
})();
var statearr_26593_26637 = state_26586__$1;
(statearr_26593_26637[(2)] = null);

(statearr_26593_26637[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (4))){
var inst_26520 = (state_26586[(9)]);
var inst_26526 = (state_26586[(2)]);
var inst_26527 = cljs.core.get.call(null,inst_26526,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26528 = cljs.core.get.call(null,inst_26526,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26529 = cljs.core.get.call(null,inst_26526,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26530 = inst_26520;
var state_26586__$1 = (function (){var statearr_26594 = state_26586;
(statearr_26594[(11)] = inst_26527);

(statearr_26594[(7)] = inst_26530);

(statearr_26594[(12)] = inst_26528);

(statearr_26594[(13)] = inst_26529);

return statearr_26594;
})();
var statearr_26595_26638 = state_26586__$1;
(statearr_26595_26638[(2)] = null);

(statearr_26595_26638[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (15))){
var state_26586__$1 = state_26586;
var statearr_26596_26639 = state_26586__$1;
(statearr_26596_26639[(2)] = null);

(statearr_26596_26639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (21))){
var inst_26538 = (state_26586[(10)]);
var inst_26530 = inst_26538;
var state_26586__$1 = (function (){var statearr_26597 = state_26586;
(statearr_26597[(7)] = inst_26530);

return statearr_26597;
})();
var statearr_26598_26640 = state_26586__$1;
(statearr_26598_26640[(2)] = null);

(statearr_26598_26640[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (13))){
var inst_26582 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26599_26641 = state_26586__$1;
(statearr_26599_26641[(2)] = inst_26582);

(statearr_26599_26641[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (22))){
var inst_26580 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26600_26642 = state_26586__$1;
(statearr_26600_26642[(2)] = inst_26580);

(statearr_26600_26642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (6))){
var inst_26584 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26586__$1,inst_26584);
} else {
if((state_val_26587 === (25))){
var state_26586__$1 = state_26586;
var statearr_26601_26643 = state_26586__$1;
(statearr_26601_26643[(2)] = null);

(statearr_26601_26643[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (17))){
var inst_26560 = (state_26586[(14)]);
var state_26586__$1 = state_26586;
var statearr_26602_26644 = state_26586__$1;
(statearr_26602_26644[(2)] = inst_26560);

(statearr_26602_26644[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (3))){
var inst_26520 = (state_26586[(9)]);
var state_26586__$1 = state_26586;
var statearr_26603_26645 = state_26586__$1;
(statearr_26603_26645[(2)] = inst_26520);

(statearr_26603_26645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (12))){
var inst_26560 = (state_26586[(14)]);
var inst_26541 = (state_26586[(15)]);
var inst_26546 = (state_26586[(16)]);
var inst_26560__$1 = inst_26541.call(null,inst_26546);
var state_26586__$1 = (function (){var statearr_26604 = state_26586;
(statearr_26604[(14)] = inst_26560__$1);

return statearr_26604;
})();
if(cljs.core.truth_(inst_26560__$1)){
var statearr_26605_26646 = state_26586__$1;
(statearr_26605_26646[(1)] = (17));

} else {
var statearr_26606_26647 = state_26586__$1;
(statearr_26606_26647[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (2))){
var inst_26520 = (state_26586[(9)]);
var inst_26523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26520);
var state_26586__$1 = state_26586;
var statearr_26607_26648 = state_26586__$1;
(statearr_26607_26648[(2)] = inst_26523);

(statearr_26607_26648[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (23))){
var inst_26571 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26571)){
var statearr_26608_26649 = state_26586__$1;
(statearr_26608_26649[(1)] = (24));

} else {
var statearr_26609_26650 = state_26586__$1;
(statearr_26609_26650[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (19))){
var inst_26568 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26568)){
var statearr_26610_26651 = state_26586__$1;
(statearr_26610_26651[(1)] = (20));

} else {
var statearr_26611_26652 = state_26586__$1;
(statearr_26611_26652[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (11))){
var inst_26545 = (state_26586[(8)]);
var inst_26551 = (inst_26545 == null);
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26551)){
var statearr_26612_26653 = state_26586__$1;
(statearr_26612_26653[(1)] = (14));

} else {
var statearr_26613_26654 = state_26586__$1;
(statearr_26613_26654[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (9))){
var inst_26538 = (state_26586[(10)]);
var inst_26538__$1 = (state_26586[(2)]);
var inst_26539 = cljs.core.get.call(null,inst_26538__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26540 = cljs.core.get.call(null,inst_26538__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26541 = cljs.core.get.call(null,inst_26538__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26586__$1 = (function (){var statearr_26614 = state_26586;
(statearr_26614[(10)] = inst_26538__$1);

(statearr_26614[(17)] = inst_26540);

(statearr_26614[(15)] = inst_26541);

return statearr_26614;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26586__$1,(10),inst_26539);
} else {
if((state_val_26587 === (5))){
var inst_26530 = (state_26586[(7)]);
var inst_26533 = cljs.core.seq_QMARK_.call(null,inst_26530);
var state_26586__$1 = state_26586;
if(inst_26533){
var statearr_26615_26655 = state_26586__$1;
(statearr_26615_26655[(1)] = (7));

} else {
var statearr_26616_26656 = state_26586__$1;
(statearr_26616_26656[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (14))){
var inst_26546 = (state_26586[(16)]);
var inst_26553 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26546);
var state_26586__$1 = state_26586;
var statearr_26617_26657 = state_26586__$1;
(statearr_26617_26657[(2)] = inst_26553);

(statearr_26617_26657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (26))){
var inst_26576 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26618_26658 = state_26586__$1;
(statearr_26618_26658[(2)] = inst_26576);

(statearr_26618_26658[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (16))){
var inst_26556 = (state_26586[(2)]);
var inst_26557 = calc_state.call(null);
var inst_26530 = inst_26557;
var state_26586__$1 = (function (){var statearr_26619 = state_26586;
(statearr_26619[(18)] = inst_26556);

(statearr_26619[(7)] = inst_26530);

return statearr_26619;
})();
var statearr_26620_26659 = state_26586__$1;
(statearr_26620_26659[(2)] = null);

(statearr_26620_26659[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (10))){
var inst_26545 = (state_26586[(8)]);
var inst_26546 = (state_26586[(16)]);
var inst_26544 = (state_26586[(2)]);
var inst_26545__$1 = cljs.core.nth.call(null,inst_26544,(0),null);
var inst_26546__$1 = cljs.core.nth.call(null,inst_26544,(1),null);
var inst_26547 = (inst_26545__$1 == null);
var inst_26548 = cljs.core._EQ_.call(null,inst_26546__$1,change);
var inst_26549 = (inst_26547) || (inst_26548);
var state_26586__$1 = (function (){var statearr_26621 = state_26586;
(statearr_26621[(8)] = inst_26545__$1);

(statearr_26621[(16)] = inst_26546__$1);

return statearr_26621;
})();
if(cljs.core.truth_(inst_26549)){
var statearr_26622_26660 = state_26586__$1;
(statearr_26622_26660[(1)] = (11));

} else {
var statearr_26623_26661 = state_26586__$1;
(statearr_26623_26661[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (18))){
var inst_26540 = (state_26586[(17)]);
var inst_26541 = (state_26586[(15)]);
var inst_26546 = (state_26586[(16)]);
var inst_26563 = cljs.core.empty_QMARK_.call(null,inst_26541);
var inst_26564 = inst_26540.call(null,inst_26546);
var inst_26565 = cljs.core.not.call(null,inst_26564);
var inst_26566 = (inst_26563) && (inst_26565);
var state_26586__$1 = state_26586;
var statearr_26624_26662 = state_26586__$1;
(statearr_26624_26662[(2)] = inst_26566);

(statearr_26624_26662[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (8))){
var inst_26530 = (state_26586[(7)]);
var state_26586__$1 = state_26586;
var statearr_26625_26663 = state_26586__$1;
(statearr_26625_26663[(2)] = inst_26530);

(statearr_26625_26663[(1)] = (9));


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
});})(c__20093__auto___26633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20037__auto__,c__20093__auto___26633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20038__auto__ = null;
var cljs$core$async$mix_$_state_machine__20038__auto____0 = (function (){
var statearr_26629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26629[(0)] = cljs$core$async$mix_$_state_machine__20038__auto__);

(statearr_26629[(1)] = (1));

return statearr_26629;
});
var cljs$core$async$mix_$_state_machine__20038__auto____1 = (function (state_26586){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_26586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e26630){if((e26630 instanceof Object)){
var ex__20041__auto__ = e26630;
var statearr_26631_26664 = state_26586;
(statearr_26631_26664[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26665 = state_26586;
state_26586 = G__26665;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20038__auto__ = function(state_26586){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20038__auto____1.call(this,state_26586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20038__auto____0;
cljs$core$async$mix_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20038__auto____1;
return cljs$core$async$mix_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___26633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20095__auto__ = (function (){var statearr_26632 = f__20094__auto__.call(null);
(statearr_26632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___26633);

return statearr_26632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___26633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj26667 = {};
return obj26667;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__17775__auto__ = p;
if(and__17775__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__17775__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18423__auto__ = (((p == null))?null:p);
return (function (){var or__17787__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__17775__auto__ = p;
if(and__17775__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__17775__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18423__auto__ = (((p == null))?null:p);
return (function (){var or__17787__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
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
if((function (){var and__17775__auto__ = p;
if(and__17775__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__17775__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18423__auto__ = (((p == null))?null:p);
return (function (){var or__17787__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__17775__auto__ = p;
if(and__17775__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18423__auto__ = (((p == null))?null:p);
return (function (){var or__17787__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
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
var or__17787__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17787__auto__,mults){
return (function (p1__26668_SHARP_){
if(cljs.core.truth_(p1__26668_SHARP_.call(null,topic))){
return p1__26668_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26668_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17787__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26791 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26791 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26792){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26792 = meta26792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26791.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26791.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26791.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t26791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26791.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26793){
var self__ = this;
var _26793__$1 = this;
return self__.meta26792;
});})(mults,ensure_mult))
;

cljs.core.async.t26791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26793,meta26792__$1){
var self__ = this;
var _26793__$1 = this;
return (new cljs.core.async.t26791(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26792__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26791.cljs$lang$type = true;

cljs.core.async.t26791.cljs$lang$ctorStr = "cljs.core.async/t26791";

cljs.core.async.t26791.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t26791");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26791 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t26791(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26792){
return (new cljs.core.async.t26791(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26792));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26791(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20093__auto___26913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___26913,mults,ensure_mult,p){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___26913,mults,ensure_mult,p){
return (function (state_26865){
var state_val_26866 = (state_26865[(1)]);
if((state_val_26866 === (7))){
var inst_26861 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26867_26914 = state_26865__$1;
(statearr_26867_26914[(2)] = inst_26861);

(statearr_26867_26914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (20))){
var state_26865__$1 = state_26865;
var statearr_26868_26915 = state_26865__$1;
(statearr_26868_26915[(2)] = null);

(statearr_26868_26915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (1))){
var state_26865__$1 = state_26865;
var statearr_26869_26916 = state_26865__$1;
(statearr_26869_26916[(2)] = null);

(statearr_26869_26916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (24))){
var inst_26844 = (state_26865[(7)]);
var inst_26853 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26844);
var state_26865__$1 = state_26865;
var statearr_26870_26917 = state_26865__$1;
(statearr_26870_26917[(2)] = inst_26853);

(statearr_26870_26917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (4))){
var inst_26796 = (state_26865[(8)]);
var inst_26796__$1 = (state_26865[(2)]);
var inst_26797 = (inst_26796__$1 == null);
var state_26865__$1 = (function (){var statearr_26871 = state_26865;
(statearr_26871[(8)] = inst_26796__$1);

return statearr_26871;
})();
if(cljs.core.truth_(inst_26797)){
var statearr_26872_26918 = state_26865__$1;
(statearr_26872_26918[(1)] = (5));

} else {
var statearr_26873_26919 = state_26865__$1;
(statearr_26873_26919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (15))){
var inst_26838 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26874_26920 = state_26865__$1;
(statearr_26874_26920[(2)] = inst_26838);

(statearr_26874_26920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (21))){
var inst_26858 = (state_26865[(2)]);
var state_26865__$1 = (function (){var statearr_26875 = state_26865;
(statearr_26875[(9)] = inst_26858);

return statearr_26875;
})();
var statearr_26876_26921 = state_26865__$1;
(statearr_26876_26921[(2)] = null);

(statearr_26876_26921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (13))){
var inst_26820 = (state_26865[(10)]);
var inst_26822 = cljs.core.chunked_seq_QMARK_.call(null,inst_26820);
var state_26865__$1 = state_26865;
if(inst_26822){
var statearr_26877_26922 = state_26865__$1;
(statearr_26877_26922[(1)] = (16));

} else {
var statearr_26878_26923 = state_26865__$1;
(statearr_26878_26923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (22))){
var inst_26850 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
if(cljs.core.truth_(inst_26850)){
var statearr_26879_26924 = state_26865__$1;
(statearr_26879_26924[(1)] = (23));

} else {
var statearr_26880_26925 = state_26865__$1;
(statearr_26880_26925[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (6))){
var inst_26844 = (state_26865[(7)]);
var inst_26796 = (state_26865[(8)]);
var inst_26846 = (state_26865[(11)]);
var inst_26844__$1 = topic_fn.call(null,inst_26796);
var inst_26845 = cljs.core.deref.call(null,mults);
var inst_26846__$1 = cljs.core.get.call(null,inst_26845,inst_26844__$1);
var state_26865__$1 = (function (){var statearr_26881 = state_26865;
(statearr_26881[(7)] = inst_26844__$1);

(statearr_26881[(11)] = inst_26846__$1);

return statearr_26881;
})();
if(cljs.core.truth_(inst_26846__$1)){
var statearr_26882_26926 = state_26865__$1;
(statearr_26882_26926[(1)] = (19));

} else {
var statearr_26883_26927 = state_26865__$1;
(statearr_26883_26927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (25))){
var inst_26855 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26884_26928 = state_26865__$1;
(statearr_26884_26928[(2)] = inst_26855);

(statearr_26884_26928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (17))){
var inst_26820 = (state_26865[(10)]);
var inst_26829 = cljs.core.first.call(null,inst_26820);
var inst_26830 = cljs.core.async.muxch_STAR_.call(null,inst_26829);
var inst_26831 = cljs.core.async.close_BANG_.call(null,inst_26830);
var inst_26832 = cljs.core.next.call(null,inst_26820);
var inst_26806 = inst_26832;
var inst_26807 = null;
var inst_26808 = (0);
var inst_26809 = (0);
var state_26865__$1 = (function (){var statearr_26885 = state_26865;
(statearr_26885[(12)] = inst_26831);

(statearr_26885[(13)] = inst_26807);

(statearr_26885[(14)] = inst_26806);

(statearr_26885[(15)] = inst_26808);

(statearr_26885[(16)] = inst_26809);

return statearr_26885;
})();
var statearr_26886_26929 = state_26865__$1;
(statearr_26886_26929[(2)] = null);

(statearr_26886_26929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (3))){
var inst_26863 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26865__$1,inst_26863);
} else {
if((state_val_26866 === (12))){
var inst_26840 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26887_26930 = state_26865__$1;
(statearr_26887_26930[(2)] = inst_26840);

(statearr_26887_26930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (2))){
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26865__$1,(4),ch);
} else {
if((state_val_26866 === (23))){
var state_26865__$1 = state_26865;
var statearr_26888_26931 = state_26865__$1;
(statearr_26888_26931[(2)] = null);

(statearr_26888_26931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (19))){
var inst_26796 = (state_26865[(8)]);
var inst_26846 = (state_26865[(11)]);
var inst_26848 = cljs.core.async.muxch_STAR_.call(null,inst_26846);
var state_26865__$1 = state_26865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26865__$1,(22),inst_26848,inst_26796);
} else {
if((state_val_26866 === (11))){
var inst_26820 = (state_26865[(10)]);
var inst_26806 = (state_26865[(14)]);
var inst_26820__$1 = cljs.core.seq.call(null,inst_26806);
var state_26865__$1 = (function (){var statearr_26889 = state_26865;
(statearr_26889[(10)] = inst_26820__$1);

return statearr_26889;
})();
if(inst_26820__$1){
var statearr_26890_26932 = state_26865__$1;
(statearr_26890_26932[(1)] = (13));

} else {
var statearr_26891_26933 = state_26865__$1;
(statearr_26891_26933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (9))){
var inst_26842 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26892_26934 = state_26865__$1;
(statearr_26892_26934[(2)] = inst_26842);

(statearr_26892_26934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (5))){
var inst_26803 = cljs.core.deref.call(null,mults);
var inst_26804 = cljs.core.vals.call(null,inst_26803);
var inst_26805 = cljs.core.seq.call(null,inst_26804);
var inst_26806 = inst_26805;
var inst_26807 = null;
var inst_26808 = (0);
var inst_26809 = (0);
var state_26865__$1 = (function (){var statearr_26893 = state_26865;
(statearr_26893[(13)] = inst_26807);

(statearr_26893[(14)] = inst_26806);

(statearr_26893[(15)] = inst_26808);

(statearr_26893[(16)] = inst_26809);

return statearr_26893;
})();
var statearr_26894_26935 = state_26865__$1;
(statearr_26894_26935[(2)] = null);

(statearr_26894_26935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (14))){
var state_26865__$1 = state_26865;
var statearr_26898_26936 = state_26865__$1;
(statearr_26898_26936[(2)] = null);

(statearr_26898_26936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (16))){
var inst_26820 = (state_26865[(10)]);
var inst_26824 = cljs.core.chunk_first.call(null,inst_26820);
var inst_26825 = cljs.core.chunk_rest.call(null,inst_26820);
var inst_26826 = cljs.core.count.call(null,inst_26824);
var inst_26806 = inst_26825;
var inst_26807 = inst_26824;
var inst_26808 = inst_26826;
var inst_26809 = (0);
var state_26865__$1 = (function (){var statearr_26899 = state_26865;
(statearr_26899[(13)] = inst_26807);

(statearr_26899[(14)] = inst_26806);

(statearr_26899[(15)] = inst_26808);

(statearr_26899[(16)] = inst_26809);

return statearr_26899;
})();
var statearr_26900_26937 = state_26865__$1;
(statearr_26900_26937[(2)] = null);

(statearr_26900_26937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (10))){
var inst_26807 = (state_26865[(13)]);
var inst_26806 = (state_26865[(14)]);
var inst_26808 = (state_26865[(15)]);
var inst_26809 = (state_26865[(16)]);
var inst_26814 = cljs.core._nth.call(null,inst_26807,inst_26809);
var inst_26815 = cljs.core.async.muxch_STAR_.call(null,inst_26814);
var inst_26816 = cljs.core.async.close_BANG_.call(null,inst_26815);
var inst_26817 = (inst_26809 + (1));
var tmp26895 = inst_26807;
var tmp26896 = inst_26806;
var tmp26897 = inst_26808;
var inst_26806__$1 = tmp26896;
var inst_26807__$1 = tmp26895;
var inst_26808__$1 = tmp26897;
var inst_26809__$1 = inst_26817;
var state_26865__$1 = (function (){var statearr_26901 = state_26865;
(statearr_26901[(13)] = inst_26807__$1);

(statearr_26901[(17)] = inst_26816);

(statearr_26901[(14)] = inst_26806__$1);

(statearr_26901[(15)] = inst_26808__$1);

(statearr_26901[(16)] = inst_26809__$1);

return statearr_26901;
})();
var statearr_26902_26938 = state_26865__$1;
(statearr_26902_26938[(2)] = null);

(statearr_26902_26938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (18))){
var inst_26835 = (state_26865[(2)]);
var state_26865__$1 = state_26865;
var statearr_26903_26939 = state_26865__$1;
(statearr_26903_26939[(2)] = inst_26835);

(statearr_26903_26939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26866 === (8))){
var inst_26808 = (state_26865[(15)]);
var inst_26809 = (state_26865[(16)]);
var inst_26811 = (inst_26809 < inst_26808);
var inst_26812 = inst_26811;
var state_26865__$1 = state_26865;
if(cljs.core.truth_(inst_26812)){
var statearr_26904_26940 = state_26865__$1;
(statearr_26904_26940[(1)] = (10));

} else {
var statearr_26905_26941 = state_26865__$1;
(statearr_26905_26941[(1)] = (11));

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
});})(c__20093__auto___26913,mults,ensure_mult,p))
;
return ((function (switch__20037__auto__,c__20093__auto___26913,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__20038__auto__ = null;
var cljs$core$async$pub_$_state_machine__20038__auto____0 = (function (){
var statearr_26909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26909[(0)] = cljs$core$async$pub_$_state_machine__20038__auto__);

(statearr_26909[(1)] = (1));

return statearr_26909;
});
var cljs$core$async$pub_$_state_machine__20038__auto____1 = (function (state_26865){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_26865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e26910){if((e26910 instanceof Object)){
var ex__20041__auto__ = e26910;
var statearr_26911_26942 = state_26865;
(statearr_26911_26942[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26943 = state_26865;
state_26865 = G__26943;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__20038__auto__ = function(state_26865){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__20038__auto____1.call(this,state_26865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__20038__auto____0;
cljs$core$async$pub_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__20038__auto____1;
return cljs$core$async$pub_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___26913,mults,ensure_mult,p))
})();
var state__20095__auto__ = (function (){var statearr_26912 = f__20094__auto__.call(null);
(statearr_26912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___26913);

return statearr_26912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___26913,mults,ensure_mult,p))
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
var c__20093__auto___27080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___27080,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___27080,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27050){
var state_val_27051 = (state_27050[(1)]);
if((state_val_27051 === (7))){
var state_27050__$1 = state_27050;
var statearr_27052_27081 = state_27050__$1;
(statearr_27052_27081[(2)] = null);

(statearr_27052_27081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (1))){
var state_27050__$1 = state_27050;
var statearr_27053_27082 = state_27050__$1;
(statearr_27053_27082[(2)] = null);

(statearr_27053_27082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (4))){
var inst_27014 = (state_27050[(7)]);
var inst_27016 = (inst_27014 < cnt);
var state_27050__$1 = state_27050;
if(cljs.core.truth_(inst_27016)){
var statearr_27054_27083 = state_27050__$1;
(statearr_27054_27083[(1)] = (6));

} else {
var statearr_27055_27084 = state_27050__$1;
(statearr_27055_27084[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (15))){
var inst_27046 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
var statearr_27056_27085 = state_27050__$1;
(statearr_27056_27085[(2)] = inst_27046);

(statearr_27056_27085[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (13))){
var inst_27039 = cljs.core.async.close_BANG_.call(null,out);
var state_27050__$1 = state_27050;
var statearr_27057_27086 = state_27050__$1;
(statearr_27057_27086[(2)] = inst_27039);

(statearr_27057_27086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (6))){
var state_27050__$1 = state_27050;
var statearr_27058_27087 = state_27050__$1;
(statearr_27058_27087[(2)] = null);

(statearr_27058_27087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (3))){
var inst_27048 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27050__$1,inst_27048);
} else {
if((state_val_27051 === (12))){
var inst_27036 = (state_27050[(8)]);
var inst_27036__$1 = (state_27050[(2)]);
var inst_27037 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27036__$1);
var state_27050__$1 = (function (){var statearr_27059 = state_27050;
(statearr_27059[(8)] = inst_27036__$1);

return statearr_27059;
})();
if(cljs.core.truth_(inst_27037)){
var statearr_27060_27088 = state_27050__$1;
(statearr_27060_27088[(1)] = (13));

} else {
var statearr_27061_27089 = state_27050__$1;
(statearr_27061_27089[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (2))){
var inst_27013 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27014 = (0);
var state_27050__$1 = (function (){var statearr_27062 = state_27050;
(statearr_27062[(9)] = inst_27013);

(statearr_27062[(7)] = inst_27014);

return statearr_27062;
})();
var statearr_27063_27090 = state_27050__$1;
(statearr_27063_27090[(2)] = null);

(statearr_27063_27090[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (11))){
var inst_27014 = (state_27050[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27050,(10),Object,null,(9));
var inst_27023 = chs__$1.call(null,inst_27014);
var inst_27024 = done.call(null,inst_27014);
var inst_27025 = cljs.core.async.take_BANG_.call(null,inst_27023,inst_27024);
var state_27050__$1 = state_27050;
var statearr_27064_27091 = state_27050__$1;
(statearr_27064_27091[(2)] = inst_27025);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27050__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (9))){
var inst_27014 = (state_27050[(7)]);
var inst_27027 = (state_27050[(2)]);
var inst_27028 = (inst_27014 + (1));
var inst_27014__$1 = inst_27028;
var state_27050__$1 = (function (){var statearr_27065 = state_27050;
(statearr_27065[(7)] = inst_27014__$1);

(statearr_27065[(10)] = inst_27027);

return statearr_27065;
})();
var statearr_27066_27092 = state_27050__$1;
(statearr_27066_27092[(2)] = null);

(statearr_27066_27092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (5))){
var inst_27034 = (state_27050[(2)]);
var state_27050__$1 = (function (){var statearr_27067 = state_27050;
(statearr_27067[(11)] = inst_27034);

return statearr_27067;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27050__$1,(12),dchan);
} else {
if((state_val_27051 === (14))){
var inst_27036 = (state_27050[(8)]);
var inst_27041 = cljs.core.apply.call(null,f,inst_27036);
var state_27050__$1 = state_27050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27050__$1,(16),out,inst_27041);
} else {
if((state_val_27051 === (16))){
var inst_27043 = (state_27050[(2)]);
var state_27050__$1 = (function (){var statearr_27068 = state_27050;
(statearr_27068[(12)] = inst_27043);

return statearr_27068;
})();
var statearr_27069_27093 = state_27050__$1;
(statearr_27069_27093[(2)] = null);

(statearr_27069_27093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (10))){
var inst_27018 = (state_27050[(2)]);
var inst_27019 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27050__$1 = (function (){var statearr_27070 = state_27050;
(statearr_27070[(13)] = inst_27018);

return statearr_27070;
})();
var statearr_27071_27094 = state_27050__$1;
(statearr_27071_27094[(2)] = inst_27019);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27050__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (8))){
var inst_27032 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
var statearr_27072_27095 = state_27050__$1;
(statearr_27072_27095[(2)] = inst_27032);

(statearr_27072_27095[(1)] = (5));


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
});})(c__20093__auto___27080,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20037__auto__,c__20093__auto___27080,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__20038__auto__ = null;
var cljs$core$async$map_$_state_machine__20038__auto____0 = (function (){
var statearr_27076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27076[(0)] = cljs$core$async$map_$_state_machine__20038__auto__);

(statearr_27076[(1)] = (1));

return statearr_27076;
});
var cljs$core$async$map_$_state_machine__20038__auto____1 = (function (state_27050){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27077){if((e27077 instanceof Object)){
var ex__20041__auto__ = e27077;
var statearr_27078_27096 = state_27050;
(statearr_27078_27096[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27097 = state_27050;
state_27050 = G__27097;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__20038__auto__ = function(state_27050){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__20038__auto____1.call(this,state_27050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__20038__auto____0;
cljs$core$async$map_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__20038__auto____1;
return cljs$core$async$map_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___27080,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20095__auto__ = (function (){var statearr_27079 = f__20094__auto__.call(null);
(statearr_27079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___27080);

return statearr_27079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___27080,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__20093__auto___27205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___27205,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___27205,out){
return (function (state_27181){
var state_val_27182 = (state_27181[(1)]);
if((state_val_27182 === (7))){
var inst_27160 = (state_27181[(7)]);
var inst_27161 = (state_27181[(8)]);
var inst_27160__$1 = (state_27181[(2)]);
var inst_27161__$1 = cljs.core.nth.call(null,inst_27160__$1,(0),null);
var inst_27162 = cljs.core.nth.call(null,inst_27160__$1,(1),null);
var inst_27163 = (inst_27161__$1 == null);
var state_27181__$1 = (function (){var statearr_27183 = state_27181;
(statearr_27183[(7)] = inst_27160__$1);

(statearr_27183[(9)] = inst_27162);

(statearr_27183[(8)] = inst_27161__$1);

return statearr_27183;
})();
if(cljs.core.truth_(inst_27163)){
var statearr_27184_27206 = state_27181__$1;
(statearr_27184_27206[(1)] = (8));

} else {
var statearr_27185_27207 = state_27181__$1;
(statearr_27185_27207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (1))){
var inst_27152 = cljs.core.vec.call(null,chs);
var inst_27153 = inst_27152;
var state_27181__$1 = (function (){var statearr_27186 = state_27181;
(statearr_27186[(10)] = inst_27153);

return statearr_27186;
})();
var statearr_27187_27208 = state_27181__$1;
(statearr_27187_27208[(2)] = null);

(statearr_27187_27208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (4))){
var inst_27153 = (state_27181[(10)]);
var state_27181__$1 = state_27181;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27181__$1,(7),inst_27153);
} else {
if((state_val_27182 === (6))){
var inst_27177 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27188_27209 = state_27181__$1;
(statearr_27188_27209[(2)] = inst_27177);

(statearr_27188_27209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (3))){
var inst_27179 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27181__$1,inst_27179);
} else {
if((state_val_27182 === (2))){
var inst_27153 = (state_27181[(10)]);
var inst_27155 = cljs.core.count.call(null,inst_27153);
var inst_27156 = (inst_27155 > (0));
var state_27181__$1 = state_27181;
if(cljs.core.truth_(inst_27156)){
var statearr_27190_27210 = state_27181__$1;
(statearr_27190_27210[(1)] = (4));

} else {
var statearr_27191_27211 = state_27181__$1;
(statearr_27191_27211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (11))){
var inst_27153 = (state_27181[(10)]);
var inst_27170 = (state_27181[(2)]);
var tmp27189 = inst_27153;
var inst_27153__$1 = tmp27189;
var state_27181__$1 = (function (){var statearr_27192 = state_27181;
(statearr_27192[(11)] = inst_27170);

(statearr_27192[(10)] = inst_27153__$1);

return statearr_27192;
})();
var statearr_27193_27212 = state_27181__$1;
(statearr_27193_27212[(2)] = null);

(statearr_27193_27212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (9))){
var inst_27161 = (state_27181[(8)]);
var state_27181__$1 = state_27181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27181__$1,(11),out,inst_27161);
} else {
if((state_val_27182 === (5))){
var inst_27175 = cljs.core.async.close_BANG_.call(null,out);
var state_27181__$1 = state_27181;
var statearr_27194_27213 = state_27181__$1;
(statearr_27194_27213[(2)] = inst_27175);

(statearr_27194_27213[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (10))){
var inst_27173 = (state_27181[(2)]);
var state_27181__$1 = state_27181;
var statearr_27195_27214 = state_27181__$1;
(statearr_27195_27214[(2)] = inst_27173);

(statearr_27195_27214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27182 === (8))){
var inst_27160 = (state_27181[(7)]);
var inst_27162 = (state_27181[(9)]);
var inst_27161 = (state_27181[(8)]);
var inst_27153 = (state_27181[(10)]);
var inst_27165 = (function (){var c = inst_27162;
var v = inst_27161;
var vec__27158 = inst_27160;
var cs = inst_27153;
return ((function (c,v,vec__27158,cs,inst_27160,inst_27162,inst_27161,inst_27153,state_val_27182,c__20093__auto___27205,out){
return (function (p1__27098_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27098_SHARP_);
});
;})(c,v,vec__27158,cs,inst_27160,inst_27162,inst_27161,inst_27153,state_val_27182,c__20093__auto___27205,out))
})();
var inst_27166 = cljs.core.filterv.call(null,inst_27165,inst_27153);
var inst_27153__$1 = inst_27166;
var state_27181__$1 = (function (){var statearr_27196 = state_27181;
(statearr_27196[(10)] = inst_27153__$1);

return statearr_27196;
})();
var statearr_27197_27215 = state_27181__$1;
(statearr_27197_27215[(2)] = null);

(statearr_27197_27215[(1)] = (2));


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
});})(c__20093__auto___27205,out))
;
return ((function (switch__20037__auto__,c__20093__auto___27205,out){
return (function() {
var cljs$core$async$merge_$_state_machine__20038__auto__ = null;
var cljs$core$async$merge_$_state_machine__20038__auto____0 = (function (){
var statearr_27201 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27201[(0)] = cljs$core$async$merge_$_state_machine__20038__auto__);

(statearr_27201[(1)] = (1));

return statearr_27201;
});
var cljs$core$async$merge_$_state_machine__20038__auto____1 = (function (state_27181){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27202){if((e27202 instanceof Object)){
var ex__20041__auto__ = e27202;
var statearr_27203_27216 = state_27181;
(statearr_27203_27216[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27217 = state_27181;
state_27181 = G__27217;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__20038__auto__ = function(state_27181){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__20038__auto____1.call(this,state_27181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__20038__auto____0;
cljs$core$async$merge_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__20038__auto____1;
return cljs$core$async$merge_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___27205,out))
})();
var state__20095__auto__ = (function (){var statearr_27204 = f__20094__auto__.call(null);
(statearr_27204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___27205);

return statearr_27204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___27205,out))
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
var c__20093__auto___27310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___27310,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___27310,out){
return (function (state_27287){
var state_val_27288 = (state_27287[(1)]);
if((state_val_27288 === (7))){
var inst_27269 = (state_27287[(7)]);
var inst_27269__$1 = (state_27287[(2)]);
var inst_27270 = (inst_27269__$1 == null);
var inst_27271 = cljs.core.not.call(null,inst_27270);
var state_27287__$1 = (function (){var statearr_27289 = state_27287;
(statearr_27289[(7)] = inst_27269__$1);

return statearr_27289;
})();
if(inst_27271){
var statearr_27290_27311 = state_27287__$1;
(statearr_27290_27311[(1)] = (8));

} else {
var statearr_27291_27312 = state_27287__$1;
(statearr_27291_27312[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (1))){
var inst_27264 = (0);
var state_27287__$1 = (function (){var statearr_27292 = state_27287;
(statearr_27292[(8)] = inst_27264);

return statearr_27292;
})();
var statearr_27293_27313 = state_27287__$1;
(statearr_27293_27313[(2)] = null);

(statearr_27293_27313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (4))){
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27287__$1,(7),ch);
} else {
if((state_val_27288 === (6))){
var inst_27282 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27294_27314 = state_27287__$1;
(statearr_27294_27314[(2)] = inst_27282);

(statearr_27294_27314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (3))){
var inst_27284 = (state_27287[(2)]);
var inst_27285 = cljs.core.async.close_BANG_.call(null,out);
var state_27287__$1 = (function (){var statearr_27295 = state_27287;
(statearr_27295[(9)] = inst_27284);

return statearr_27295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27287__$1,inst_27285);
} else {
if((state_val_27288 === (2))){
var inst_27264 = (state_27287[(8)]);
var inst_27266 = (inst_27264 < n);
var state_27287__$1 = state_27287;
if(cljs.core.truth_(inst_27266)){
var statearr_27296_27315 = state_27287__$1;
(statearr_27296_27315[(1)] = (4));

} else {
var statearr_27297_27316 = state_27287__$1;
(statearr_27297_27316[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (11))){
var inst_27264 = (state_27287[(8)]);
var inst_27274 = (state_27287[(2)]);
var inst_27275 = (inst_27264 + (1));
var inst_27264__$1 = inst_27275;
var state_27287__$1 = (function (){var statearr_27298 = state_27287;
(statearr_27298[(8)] = inst_27264__$1);

(statearr_27298[(10)] = inst_27274);

return statearr_27298;
})();
var statearr_27299_27317 = state_27287__$1;
(statearr_27299_27317[(2)] = null);

(statearr_27299_27317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (9))){
var state_27287__$1 = state_27287;
var statearr_27300_27318 = state_27287__$1;
(statearr_27300_27318[(2)] = null);

(statearr_27300_27318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (5))){
var state_27287__$1 = state_27287;
var statearr_27301_27319 = state_27287__$1;
(statearr_27301_27319[(2)] = null);

(statearr_27301_27319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (10))){
var inst_27279 = (state_27287[(2)]);
var state_27287__$1 = state_27287;
var statearr_27302_27320 = state_27287__$1;
(statearr_27302_27320[(2)] = inst_27279);

(statearr_27302_27320[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27288 === (8))){
var inst_27269 = (state_27287[(7)]);
var state_27287__$1 = state_27287;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27287__$1,(11),out,inst_27269);
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
});})(c__20093__auto___27310,out))
;
return ((function (switch__20037__auto__,c__20093__auto___27310,out){
return (function() {
var cljs$core$async$take_$_state_machine__20038__auto__ = null;
var cljs$core$async$take_$_state_machine__20038__auto____0 = (function (){
var statearr_27306 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27306[(0)] = cljs$core$async$take_$_state_machine__20038__auto__);

(statearr_27306[(1)] = (1));

return statearr_27306;
});
var cljs$core$async$take_$_state_machine__20038__auto____1 = (function (state_27287){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27307){if((e27307 instanceof Object)){
var ex__20041__auto__ = e27307;
var statearr_27308_27321 = state_27287;
(statearr_27308_27321[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27322 = state_27287;
state_27287 = G__27322;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__20038__auto__ = function(state_27287){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__20038__auto____1.call(this,state_27287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__20038__auto____0;
cljs$core$async$take_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__20038__auto____1;
return cljs$core$async$take_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___27310,out))
})();
var state__20095__auto__ = (function (){var statearr_27309 = f__20094__auto__.call(null);
(statearr_27309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___27310);

return statearr_27309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___27310,out))
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
if(typeof cljs.core.async.t27330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27330 = (function (ch,f,map_LT_,meta27331){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27331 = meta27331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27333 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27333 = (function (fn1,_,meta27331,map_LT_,f,ch,meta27334){
this.fn1 = fn1;
this._ = _;
this.meta27331 = meta27331;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27334 = meta27334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27333.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27323_SHARP_){
return f1.call(null,(((p1__27323_SHARP_ == null))?null:self__.f.call(null,p1__27323_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27335){
var self__ = this;
var _27335__$1 = this;
return self__.meta27334;
});})(___$1))
;

cljs.core.async.t27333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27335,meta27334__$1){
var self__ = this;
var _27335__$1 = this;
return (new cljs.core.async.t27333(self__.fn1,self__._,self__.meta27331,self__.map_LT_,self__.f,self__.ch,meta27334__$1));
});})(___$1))
;

cljs.core.async.t27333.cljs$lang$type = true;

cljs.core.async.t27333.cljs$lang$ctorStr = "cljs.core.async/t27333";

cljs.core.async.t27333.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t27333");
});})(___$1))
;

cljs.core.async.__GT_t27333 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27333(fn1__$1,___$2,meta27331__$1,map_LT___$1,f__$1,ch__$1,meta27334){
return (new cljs.core.async.t27333(fn1__$1,___$2,meta27331__$1,map_LT___$1,f__$1,ch__$1,meta27334));
});})(___$1))
;

}

return (new cljs.core.async.t27333(fn1,___$1,self__.meta27331,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17775__auto__ = ret;
if(cljs.core.truth_(and__17775__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17775__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27330.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27332){
var self__ = this;
var _27332__$1 = this;
return self__.meta27331;
});

cljs.core.async.t27330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27332,meta27331__$1){
var self__ = this;
var _27332__$1 = this;
return (new cljs.core.async.t27330(self__.ch,self__.f,self__.map_LT_,meta27331__$1));
});

cljs.core.async.t27330.cljs$lang$type = true;

cljs.core.async.t27330.cljs$lang$ctorStr = "cljs.core.async/t27330";

cljs.core.async.t27330.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t27330");
});

cljs.core.async.__GT_t27330 = (function cljs$core$async$map_LT__$___GT_t27330(ch__$1,f__$1,map_LT___$1,meta27331){
return (new cljs.core.async.t27330(ch__$1,f__$1,map_LT___$1,meta27331));
});

}

return (new cljs.core.async.t27330(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27339 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27339 = (function (ch,f,map_GT_,meta27340){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27340 = meta27340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27339.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27339.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27339.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27341){
var self__ = this;
var _27341__$1 = this;
return self__.meta27340;
});

cljs.core.async.t27339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27341,meta27340__$1){
var self__ = this;
var _27341__$1 = this;
return (new cljs.core.async.t27339(self__.ch,self__.f,self__.map_GT_,meta27340__$1));
});

cljs.core.async.t27339.cljs$lang$type = true;

cljs.core.async.t27339.cljs$lang$ctorStr = "cljs.core.async/t27339";

cljs.core.async.t27339.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t27339");
});

cljs.core.async.__GT_t27339 = (function cljs$core$async$map_GT__$___GT_t27339(ch__$1,f__$1,map_GT___$1,meta27340){
return (new cljs.core.async.t27339(ch__$1,f__$1,map_GT___$1,meta27340));
});

}

return (new cljs.core.async.t27339(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27345 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27345 = (function (ch,p,filter_GT_,meta27346){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27346 = meta27346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27345.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27347){
var self__ = this;
var _27347__$1 = this;
return self__.meta27346;
});

cljs.core.async.t27345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27347,meta27346__$1){
var self__ = this;
var _27347__$1 = this;
return (new cljs.core.async.t27345(self__.ch,self__.p,self__.filter_GT_,meta27346__$1));
});

cljs.core.async.t27345.cljs$lang$type = true;

cljs.core.async.t27345.cljs$lang$ctorStr = "cljs.core.async/t27345";

cljs.core.async.t27345.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t27345");
});

cljs.core.async.__GT_t27345 = (function cljs$core$async$filter_GT__$___GT_t27345(ch__$1,p__$1,filter_GT___$1,meta27346){
return (new cljs.core.async.t27345(ch__$1,p__$1,filter_GT___$1,meta27346));
});

}

return (new cljs.core.async.t27345(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20093__auto___27430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___27430,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___27430,out){
return (function (state_27409){
var state_val_27410 = (state_27409[(1)]);
if((state_val_27410 === (7))){
var inst_27405 = (state_27409[(2)]);
var state_27409__$1 = state_27409;
var statearr_27411_27431 = state_27409__$1;
(statearr_27411_27431[(2)] = inst_27405);

(statearr_27411_27431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (1))){
var state_27409__$1 = state_27409;
var statearr_27412_27432 = state_27409__$1;
(statearr_27412_27432[(2)] = null);

(statearr_27412_27432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (4))){
var inst_27391 = (state_27409[(7)]);
var inst_27391__$1 = (state_27409[(2)]);
var inst_27392 = (inst_27391__$1 == null);
var state_27409__$1 = (function (){var statearr_27413 = state_27409;
(statearr_27413[(7)] = inst_27391__$1);

return statearr_27413;
})();
if(cljs.core.truth_(inst_27392)){
var statearr_27414_27433 = state_27409__$1;
(statearr_27414_27433[(1)] = (5));

} else {
var statearr_27415_27434 = state_27409__$1;
(statearr_27415_27434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (6))){
var inst_27391 = (state_27409[(7)]);
var inst_27396 = p.call(null,inst_27391);
var state_27409__$1 = state_27409;
if(cljs.core.truth_(inst_27396)){
var statearr_27416_27435 = state_27409__$1;
(statearr_27416_27435[(1)] = (8));

} else {
var statearr_27417_27436 = state_27409__$1;
(statearr_27417_27436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (3))){
var inst_27407 = (state_27409[(2)]);
var state_27409__$1 = state_27409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27409__$1,inst_27407);
} else {
if((state_val_27410 === (2))){
var state_27409__$1 = state_27409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27409__$1,(4),ch);
} else {
if((state_val_27410 === (11))){
var inst_27399 = (state_27409[(2)]);
var state_27409__$1 = state_27409;
var statearr_27418_27437 = state_27409__$1;
(statearr_27418_27437[(2)] = inst_27399);

(statearr_27418_27437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (9))){
var state_27409__$1 = state_27409;
var statearr_27419_27438 = state_27409__$1;
(statearr_27419_27438[(2)] = null);

(statearr_27419_27438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (5))){
var inst_27394 = cljs.core.async.close_BANG_.call(null,out);
var state_27409__$1 = state_27409;
var statearr_27420_27439 = state_27409__$1;
(statearr_27420_27439[(2)] = inst_27394);

(statearr_27420_27439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (10))){
var inst_27402 = (state_27409[(2)]);
var state_27409__$1 = (function (){var statearr_27421 = state_27409;
(statearr_27421[(8)] = inst_27402);

return statearr_27421;
})();
var statearr_27422_27440 = state_27409__$1;
(statearr_27422_27440[(2)] = null);

(statearr_27422_27440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27410 === (8))){
var inst_27391 = (state_27409[(7)]);
var state_27409__$1 = state_27409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27409__$1,(11),out,inst_27391);
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
});})(c__20093__auto___27430,out))
;
return ((function (switch__20037__auto__,c__20093__auto___27430,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__20038__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__20038__auto____0 = (function (){
var statearr_27426 = [null,null,null,null,null,null,null,null,null];
(statearr_27426[(0)] = cljs$core$async$filter_LT__$_state_machine__20038__auto__);

(statearr_27426[(1)] = (1));

return statearr_27426;
});
var cljs$core$async$filter_LT__$_state_machine__20038__auto____1 = (function (state_27409){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27427){if((e27427 instanceof Object)){
var ex__20041__auto__ = e27427;
var statearr_27428_27441 = state_27409;
(statearr_27428_27441[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27442 = state_27409;
state_27409 = G__27442;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__20038__auto__ = function(state_27409){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__20038__auto____1.call(this,state_27409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__20038__auto____0;
cljs$core$async$filter_LT__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__20038__auto____1;
return cljs$core$async$filter_LT__$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___27430,out))
})();
var state__20095__auto__ = (function (){var statearr_27429 = f__20094__auto__.call(null);
(statearr_27429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___27430);

return statearr_27429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___27430,out))
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
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_27608){
var state_val_27609 = (state_27608[(1)]);
if((state_val_27609 === (7))){
var inst_27604 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27610_27651 = state_27608__$1;
(statearr_27610_27651[(2)] = inst_27604);

(statearr_27610_27651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (20))){
var inst_27574 = (state_27608[(7)]);
var inst_27585 = (state_27608[(2)]);
var inst_27586 = cljs.core.next.call(null,inst_27574);
var inst_27560 = inst_27586;
var inst_27561 = null;
var inst_27562 = (0);
var inst_27563 = (0);
var state_27608__$1 = (function (){var statearr_27611 = state_27608;
(statearr_27611[(8)] = inst_27563);

(statearr_27611[(9)] = inst_27560);

(statearr_27611[(10)] = inst_27561);

(statearr_27611[(11)] = inst_27585);

(statearr_27611[(12)] = inst_27562);

return statearr_27611;
})();
var statearr_27612_27652 = state_27608__$1;
(statearr_27612_27652[(2)] = null);

(statearr_27612_27652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (1))){
var state_27608__$1 = state_27608;
var statearr_27613_27653 = state_27608__$1;
(statearr_27613_27653[(2)] = null);

(statearr_27613_27653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (4))){
var inst_27549 = (state_27608[(13)]);
var inst_27549__$1 = (state_27608[(2)]);
var inst_27550 = (inst_27549__$1 == null);
var state_27608__$1 = (function (){var statearr_27614 = state_27608;
(statearr_27614[(13)] = inst_27549__$1);

return statearr_27614;
})();
if(cljs.core.truth_(inst_27550)){
var statearr_27615_27654 = state_27608__$1;
(statearr_27615_27654[(1)] = (5));

} else {
var statearr_27616_27655 = state_27608__$1;
(statearr_27616_27655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (15))){
var state_27608__$1 = state_27608;
var statearr_27620_27656 = state_27608__$1;
(statearr_27620_27656[(2)] = null);

(statearr_27620_27656[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (21))){
var state_27608__$1 = state_27608;
var statearr_27621_27657 = state_27608__$1;
(statearr_27621_27657[(2)] = null);

(statearr_27621_27657[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (13))){
var inst_27563 = (state_27608[(8)]);
var inst_27560 = (state_27608[(9)]);
var inst_27561 = (state_27608[(10)]);
var inst_27562 = (state_27608[(12)]);
var inst_27570 = (state_27608[(2)]);
var inst_27571 = (inst_27563 + (1));
var tmp27617 = inst_27560;
var tmp27618 = inst_27561;
var tmp27619 = inst_27562;
var inst_27560__$1 = tmp27617;
var inst_27561__$1 = tmp27618;
var inst_27562__$1 = tmp27619;
var inst_27563__$1 = inst_27571;
var state_27608__$1 = (function (){var statearr_27622 = state_27608;
(statearr_27622[(8)] = inst_27563__$1);

(statearr_27622[(14)] = inst_27570);

(statearr_27622[(9)] = inst_27560__$1);

(statearr_27622[(10)] = inst_27561__$1);

(statearr_27622[(12)] = inst_27562__$1);

return statearr_27622;
})();
var statearr_27623_27658 = state_27608__$1;
(statearr_27623_27658[(2)] = null);

(statearr_27623_27658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (22))){
var state_27608__$1 = state_27608;
var statearr_27624_27659 = state_27608__$1;
(statearr_27624_27659[(2)] = null);

(statearr_27624_27659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (6))){
var inst_27549 = (state_27608[(13)]);
var inst_27558 = f.call(null,inst_27549);
var inst_27559 = cljs.core.seq.call(null,inst_27558);
var inst_27560 = inst_27559;
var inst_27561 = null;
var inst_27562 = (0);
var inst_27563 = (0);
var state_27608__$1 = (function (){var statearr_27625 = state_27608;
(statearr_27625[(8)] = inst_27563);

(statearr_27625[(9)] = inst_27560);

(statearr_27625[(10)] = inst_27561);

(statearr_27625[(12)] = inst_27562);

return statearr_27625;
})();
var statearr_27626_27660 = state_27608__$1;
(statearr_27626_27660[(2)] = null);

(statearr_27626_27660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (17))){
var inst_27574 = (state_27608[(7)]);
var inst_27578 = cljs.core.chunk_first.call(null,inst_27574);
var inst_27579 = cljs.core.chunk_rest.call(null,inst_27574);
var inst_27580 = cljs.core.count.call(null,inst_27578);
var inst_27560 = inst_27579;
var inst_27561 = inst_27578;
var inst_27562 = inst_27580;
var inst_27563 = (0);
var state_27608__$1 = (function (){var statearr_27627 = state_27608;
(statearr_27627[(8)] = inst_27563);

(statearr_27627[(9)] = inst_27560);

(statearr_27627[(10)] = inst_27561);

(statearr_27627[(12)] = inst_27562);

return statearr_27627;
})();
var statearr_27628_27661 = state_27608__$1;
(statearr_27628_27661[(2)] = null);

(statearr_27628_27661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (3))){
var inst_27606 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27608__$1,inst_27606);
} else {
if((state_val_27609 === (12))){
var inst_27594 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27629_27662 = state_27608__$1;
(statearr_27629_27662[(2)] = inst_27594);

(statearr_27629_27662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (2))){
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27608__$1,(4),in$);
} else {
if((state_val_27609 === (23))){
var inst_27602 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27630_27663 = state_27608__$1;
(statearr_27630_27663[(2)] = inst_27602);

(statearr_27630_27663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (19))){
var inst_27589 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27631_27664 = state_27608__$1;
(statearr_27631_27664[(2)] = inst_27589);

(statearr_27631_27664[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (11))){
var inst_27574 = (state_27608[(7)]);
var inst_27560 = (state_27608[(9)]);
var inst_27574__$1 = cljs.core.seq.call(null,inst_27560);
var state_27608__$1 = (function (){var statearr_27632 = state_27608;
(statearr_27632[(7)] = inst_27574__$1);

return statearr_27632;
})();
if(inst_27574__$1){
var statearr_27633_27665 = state_27608__$1;
(statearr_27633_27665[(1)] = (14));

} else {
var statearr_27634_27666 = state_27608__$1;
(statearr_27634_27666[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (9))){
var inst_27596 = (state_27608[(2)]);
var inst_27597 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27608__$1 = (function (){var statearr_27635 = state_27608;
(statearr_27635[(15)] = inst_27596);

return statearr_27635;
})();
if(cljs.core.truth_(inst_27597)){
var statearr_27636_27667 = state_27608__$1;
(statearr_27636_27667[(1)] = (21));

} else {
var statearr_27637_27668 = state_27608__$1;
(statearr_27637_27668[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (5))){
var inst_27552 = cljs.core.async.close_BANG_.call(null,out);
var state_27608__$1 = state_27608;
var statearr_27638_27669 = state_27608__$1;
(statearr_27638_27669[(2)] = inst_27552);

(statearr_27638_27669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (14))){
var inst_27574 = (state_27608[(7)]);
var inst_27576 = cljs.core.chunked_seq_QMARK_.call(null,inst_27574);
var state_27608__$1 = state_27608;
if(inst_27576){
var statearr_27639_27670 = state_27608__$1;
(statearr_27639_27670[(1)] = (17));

} else {
var statearr_27640_27671 = state_27608__$1;
(statearr_27640_27671[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (16))){
var inst_27592 = (state_27608[(2)]);
var state_27608__$1 = state_27608;
var statearr_27641_27672 = state_27608__$1;
(statearr_27641_27672[(2)] = inst_27592);

(statearr_27641_27672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27609 === (10))){
var inst_27563 = (state_27608[(8)]);
var inst_27561 = (state_27608[(10)]);
var inst_27568 = cljs.core._nth.call(null,inst_27561,inst_27563);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27608__$1,(13),out,inst_27568);
} else {
if((state_val_27609 === (18))){
var inst_27574 = (state_27608[(7)]);
var inst_27583 = cljs.core.first.call(null,inst_27574);
var state_27608__$1 = state_27608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27608__$1,(20),out,inst_27583);
} else {
if((state_val_27609 === (8))){
var inst_27563 = (state_27608[(8)]);
var inst_27562 = (state_27608[(12)]);
var inst_27565 = (inst_27563 < inst_27562);
var inst_27566 = inst_27565;
var state_27608__$1 = state_27608;
if(cljs.core.truth_(inst_27566)){
var statearr_27642_27673 = state_27608__$1;
(statearr_27642_27673[(1)] = (10));

} else {
var statearr_27643_27674 = state_27608__$1;
(statearr_27643_27674[(1)] = (11));

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
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20038__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20038__auto____0 = (function (){
var statearr_27647 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27647[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20038__auto__);

(statearr_27647[(1)] = (1));

return statearr_27647;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20038__auto____1 = (function (state_27608){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27648){if((e27648 instanceof Object)){
var ex__20041__auto__ = e27648;
var statearr_27649_27675 = state_27608;
(statearr_27649_27675[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27676 = state_27608;
state_27608 = G__27676;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20038__auto__ = function(state_27608){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20038__auto____1.call(this,state_27608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20038__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20038__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_27650 = f__20094__auto__.call(null);
(statearr_27650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_27650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
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
var c__20093__auto___27773 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___27773,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___27773,out){
return (function (state_27748){
var state_val_27749 = (state_27748[(1)]);
if((state_val_27749 === (7))){
var inst_27743 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27750_27774 = state_27748__$1;
(statearr_27750_27774[(2)] = inst_27743);

(statearr_27750_27774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (1))){
var inst_27725 = null;
var state_27748__$1 = (function (){var statearr_27751 = state_27748;
(statearr_27751[(7)] = inst_27725);

return statearr_27751;
})();
var statearr_27752_27775 = state_27748__$1;
(statearr_27752_27775[(2)] = null);

(statearr_27752_27775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (4))){
var inst_27728 = (state_27748[(8)]);
var inst_27728__$1 = (state_27748[(2)]);
var inst_27729 = (inst_27728__$1 == null);
var inst_27730 = cljs.core.not.call(null,inst_27729);
var state_27748__$1 = (function (){var statearr_27753 = state_27748;
(statearr_27753[(8)] = inst_27728__$1);

return statearr_27753;
})();
if(inst_27730){
var statearr_27754_27776 = state_27748__$1;
(statearr_27754_27776[(1)] = (5));

} else {
var statearr_27755_27777 = state_27748__$1;
(statearr_27755_27777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (6))){
var state_27748__$1 = state_27748;
var statearr_27756_27778 = state_27748__$1;
(statearr_27756_27778[(2)] = null);

(statearr_27756_27778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (3))){
var inst_27745 = (state_27748[(2)]);
var inst_27746 = cljs.core.async.close_BANG_.call(null,out);
var state_27748__$1 = (function (){var statearr_27757 = state_27748;
(statearr_27757[(9)] = inst_27745);

return statearr_27757;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27748__$1,inst_27746);
} else {
if((state_val_27749 === (2))){
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27748__$1,(4),ch);
} else {
if((state_val_27749 === (11))){
var inst_27728 = (state_27748[(8)]);
var inst_27737 = (state_27748[(2)]);
var inst_27725 = inst_27728;
var state_27748__$1 = (function (){var statearr_27758 = state_27748;
(statearr_27758[(7)] = inst_27725);

(statearr_27758[(10)] = inst_27737);

return statearr_27758;
})();
var statearr_27759_27779 = state_27748__$1;
(statearr_27759_27779[(2)] = null);

(statearr_27759_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (9))){
var inst_27728 = (state_27748[(8)]);
var state_27748__$1 = state_27748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27748__$1,(11),out,inst_27728);
} else {
if((state_val_27749 === (5))){
var inst_27725 = (state_27748[(7)]);
var inst_27728 = (state_27748[(8)]);
var inst_27732 = cljs.core._EQ_.call(null,inst_27728,inst_27725);
var state_27748__$1 = state_27748;
if(inst_27732){
var statearr_27761_27780 = state_27748__$1;
(statearr_27761_27780[(1)] = (8));

} else {
var statearr_27762_27781 = state_27748__$1;
(statearr_27762_27781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (10))){
var inst_27740 = (state_27748[(2)]);
var state_27748__$1 = state_27748;
var statearr_27763_27782 = state_27748__$1;
(statearr_27763_27782[(2)] = inst_27740);

(statearr_27763_27782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27749 === (8))){
var inst_27725 = (state_27748[(7)]);
var tmp27760 = inst_27725;
var inst_27725__$1 = tmp27760;
var state_27748__$1 = (function (){var statearr_27764 = state_27748;
(statearr_27764[(7)] = inst_27725__$1);

return statearr_27764;
})();
var statearr_27765_27783 = state_27748__$1;
(statearr_27765_27783[(2)] = null);

(statearr_27765_27783[(1)] = (2));


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
});})(c__20093__auto___27773,out))
;
return ((function (switch__20037__auto__,c__20093__auto___27773,out){
return (function() {
var cljs$core$async$unique_$_state_machine__20038__auto__ = null;
var cljs$core$async$unique_$_state_machine__20038__auto____0 = (function (){
var statearr_27769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27769[(0)] = cljs$core$async$unique_$_state_machine__20038__auto__);

(statearr_27769[(1)] = (1));

return statearr_27769;
});
var cljs$core$async$unique_$_state_machine__20038__auto____1 = (function (state_27748){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27770){if((e27770 instanceof Object)){
var ex__20041__auto__ = e27770;
var statearr_27771_27784 = state_27748;
(statearr_27771_27784[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27785 = state_27748;
state_27748 = G__27785;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__20038__auto__ = function(state_27748){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__20038__auto____1.call(this,state_27748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__20038__auto____0;
cljs$core$async$unique_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__20038__auto____1;
return cljs$core$async$unique_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___27773,out))
})();
var state__20095__auto__ = (function (){var statearr_27772 = f__20094__auto__.call(null);
(statearr_27772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___27773);

return statearr_27772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___27773,out))
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
var c__20093__auto___27920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___27920,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___27920,out){
return (function (state_27890){
var state_val_27891 = (state_27890[(1)]);
if((state_val_27891 === (7))){
var inst_27886 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27892_27921 = state_27890__$1;
(statearr_27892_27921[(2)] = inst_27886);

(statearr_27892_27921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (1))){
var inst_27853 = (new Array(n));
var inst_27854 = inst_27853;
var inst_27855 = (0);
var state_27890__$1 = (function (){var statearr_27893 = state_27890;
(statearr_27893[(7)] = inst_27854);

(statearr_27893[(8)] = inst_27855);

return statearr_27893;
})();
var statearr_27894_27922 = state_27890__$1;
(statearr_27894_27922[(2)] = null);

(statearr_27894_27922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (4))){
var inst_27858 = (state_27890[(9)]);
var inst_27858__$1 = (state_27890[(2)]);
var inst_27859 = (inst_27858__$1 == null);
var inst_27860 = cljs.core.not.call(null,inst_27859);
var state_27890__$1 = (function (){var statearr_27895 = state_27890;
(statearr_27895[(9)] = inst_27858__$1);

return statearr_27895;
})();
if(inst_27860){
var statearr_27896_27923 = state_27890__$1;
(statearr_27896_27923[(1)] = (5));

} else {
var statearr_27897_27924 = state_27890__$1;
(statearr_27897_27924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (15))){
var inst_27880 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27898_27925 = state_27890__$1;
(statearr_27898_27925[(2)] = inst_27880);

(statearr_27898_27925[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (13))){
var state_27890__$1 = state_27890;
var statearr_27899_27926 = state_27890__$1;
(statearr_27899_27926[(2)] = null);

(statearr_27899_27926[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (6))){
var inst_27855 = (state_27890[(8)]);
var inst_27876 = (inst_27855 > (0));
var state_27890__$1 = state_27890;
if(cljs.core.truth_(inst_27876)){
var statearr_27900_27927 = state_27890__$1;
(statearr_27900_27927[(1)] = (12));

} else {
var statearr_27901_27928 = state_27890__$1;
(statearr_27901_27928[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (3))){
var inst_27888 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27890__$1,inst_27888);
} else {
if((state_val_27891 === (12))){
var inst_27854 = (state_27890[(7)]);
var inst_27878 = cljs.core.vec.call(null,inst_27854);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27890__$1,(15),out,inst_27878);
} else {
if((state_val_27891 === (2))){
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27890__$1,(4),ch);
} else {
if((state_val_27891 === (11))){
var inst_27870 = (state_27890[(2)]);
var inst_27871 = (new Array(n));
var inst_27854 = inst_27871;
var inst_27855 = (0);
var state_27890__$1 = (function (){var statearr_27902 = state_27890;
(statearr_27902[(10)] = inst_27870);

(statearr_27902[(7)] = inst_27854);

(statearr_27902[(8)] = inst_27855);

return statearr_27902;
})();
var statearr_27903_27929 = state_27890__$1;
(statearr_27903_27929[(2)] = null);

(statearr_27903_27929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (9))){
var inst_27854 = (state_27890[(7)]);
var inst_27868 = cljs.core.vec.call(null,inst_27854);
var state_27890__$1 = state_27890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27890__$1,(11),out,inst_27868);
} else {
if((state_val_27891 === (5))){
var inst_27858 = (state_27890[(9)]);
var inst_27863 = (state_27890[(11)]);
var inst_27854 = (state_27890[(7)]);
var inst_27855 = (state_27890[(8)]);
var inst_27862 = (inst_27854[inst_27855] = inst_27858);
var inst_27863__$1 = (inst_27855 + (1));
var inst_27864 = (inst_27863__$1 < n);
var state_27890__$1 = (function (){var statearr_27904 = state_27890;
(statearr_27904[(11)] = inst_27863__$1);

(statearr_27904[(12)] = inst_27862);

return statearr_27904;
})();
if(cljs.core.truth_(inst_27864)){
var statearr_27905_27930 = state_27890__$1;
(statearr_27905_27930[(1)] = (8));

} else {
var statearr_27906_27931 = state_27890__$1;
(statearr_27906_27931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (14))){
var inst_27883 = (state_27890[(2)]);
var inst_27884 = cljs.core.async.close_BANG_.call(null,out);
var state_27890__$1 = (function (){var statearr_27908 = state_27890;
(statearr_27908[(13)] = inst_27883);

return statearr_27908;
})();
var statearr_27909_27932 = state_27890__$1;
(statearr_27909_27932[(2)] = inst_27884);

(statearr_27909_27932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (10))){
var inst_27874 = (state_27890[(2)]);
var state_27890__$1 = state_27890;
var statearr_27910_27933 = state_27890__$1;
(statearr_27910_27933[(2)] = inst_27874);

(statearr_27910_27933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27891 === (8))){
var inst_27863 = (state_27890[(11)]);
var inst_27854 = (state_27890[(7)]);
var tmp27907 = inst_27854;
var inst_27854__$1 = tmp27907;
var inst_27855 = inst_27863;
var state_27890__$1 = (function (){var statearr_27911 = state_27890;
(statearr_27911[(7)] = inst_27854__$1);

(statearr_27911[(8)] = inst_27855);

return statearr_27911;
})();
var statearr_27912_27934 = state_27890__$1;
(statearr_27912_27934[(2)] = null);

(statearr_27912_27934[(1)] = (2));


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
});})(c__20093__auto___27920,out))
;
return ((function (switch__20037__auto__,c__20093__auto___27920,out){
return (function() {
var cljs$core$async$partition_$_state_machine__20038__auto__ = null;
var cljs$core$async$partition_$_state_machine__20038__auto____0 = (function (){
var statearr_27916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27916[(0)] = cljs$core$async$partition_$_state_machine__20038__auto__);

(statearr_27916[(1)] = (1));

return statearr_27916;
});
var cljs$core$async$partition_$_state_machine__20038__auto____1 = (function (state_27890){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_27890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e27917){if((e27917 instanceof Object)){
var ex__20041__auto__ = e27917;
var statearr_27918_27935 = state_27890;
(statearr_27918_27935[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27936 = state_27890;
state_27890 = G__27936;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__20038__auto__ = function(state_27890){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__20038__auto____1.call(this,state_27890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__20038__auto____0;
cljs$core$async$partition_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__20038__auto____1;
return cljs$core$async$partition_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___27920,out))
})();
var state__20095__auto__ = (function (){var statearr_27919 = f__20094__auto__.call(null);
(statearr_27919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___27920);

return statearr_27919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___27920,out))
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
var c__20093__auto___28079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___28079,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___28079,out){
return (function (state_28049){
var state_val_28050 = (state_28049[(1)]);
if((state_val_28050 === (7))){
var inst_28045 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28051_28080 = state_28049__$1;
(statearr_28051_28080[(2)] = inst_28045);

(statearr_28051_28080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (1))){
var inst_28008 = [];
var inst_28009 = inst_28008;
var inst_28010 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28049__$1 = (function (){var statearr_28052 = state_28049;
(statearr_28052[(7)] = inst_28010);

(statearr_28052[(8)] = inst_28009);

return statearr_28052;
})();
var statearr_28053_28081 = state_28049__$1;
(statearr_28053_28081[(2)] = null);

(statearr_28053_28081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (4))){
var inst_28013 = (state_28049[(9)]);
var inst_28013__$1 = (state_28049[(2)]);
var inst_28014 = (inst_28013__$1 == null);
var inst_28015 = cljs.core.not.call(null,inst_28014);
var state_28049__$1 = (function (){var statearr_28054 = state_28049;
(statearr_28054[(9)] = inst_28013__$1);

return statearr_28054;
})();
if(inst_28015){
var statearr_28055_28082 = state_28049__$1;
(statearr_28055_28082[(1)] = (5));

} else {
var statearr_28056_28083 = state_28049__$1;
(statearr_28056_28083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (15))){
var inst_28039 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28057_28084 = state_28049__$1;
(statearr_28057_28084[(2)] = inst_28039);

(statearr_28057_28084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (13))){
var state_28049__$1 = state_28049;
var statearr_28058_28085 = state_28049__$1;
(statearr_28058_28085[(2)] = null);

(statearr_28058_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (6))){
var inst_28009 = (state_28049[(8)]);
var inst_28034 = inst_28009.length;
var inst_28035 = (inst_28034 > (0));
var state_28049__$1 = state_28049;
if(cljs.core.truth_(inst_28035)){
var statearr_28059_28086 = state_28049__$1;
(statearr_28059_28086[(1)] = (12));

} else {
var statearr_28060_28087 = state_28049__$1;
(statearr_28060_28087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (3))){
var inst_28047 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28049__$1,inst_28047);
} else {
if((state_val_28050 === (12))){
var inst_28009 = (state_28049[(8)]);
var inst_28037 = cljs.core.vec.call(null,inst_28009);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28049__$1,(15),out,inst_28037);
} else {
if((state_val_28050 === (2))){
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28049__$1,(4),ch);
} else {
if((state_val_28050 === (11))){
var inst_28017 = (state_28049[(10)]);
var inst_28013 = (state_28049[(9)]);
var inst_28027 = (state_28049[(2)]);
var inst_28028 = [];
var inst_28029 = inst_28028.push(inst_28013);
var inst_28009 = inst_28028;
var inst_28010 = inst_28017;
var state_28049__$1 = (function (){var statearr_28061 = state_28049;
(statearr_28061[(11)] = inst_28027);

(statearr_28061[(7)] = inst_28010);

(statearr_28061[(8)] = inst_28009);

(statearr_28061[(12)] = inst_28029);

return statearr_28061;
})();
var statearr_28062_28088 = state_28049__$1;
(statearr_28062_28088[(2)] = null);

(statearr_28062_28088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (9))){
var inst_28009 = (state_28049[(8)]);
var inst_28025 = cljs.core.vec.call(null,inst_28009);
var state_28049__$1 = state_28049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28049__$1,(11),out,inst_28025);
} else {
if((state_val_28050 === (5))){
var inst_28017 = (state_28049[(10)]);
var inst_28010 = (state_28049[(7)]);
var inst_28013 = (state_28049[(9)]);
var inst_28017__$1 = f.call(null,inst_28013);
var inst_28018 = cljs.core._EQ_.call(null,inst_28017__$1,inst_28010);
var inst_28019 = cljs.core.keyword_identical_QMARK_.call(null,inst_28010,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28020 = (inst_28018) || (inst_28019);
var state_28049__$1 = (function (){var statearr_28063 = state_28049;
(statearr_28063[(10)] = inst_28017__$1);

return statearr_28063;
})();
if(cljs.core.truth_(inst_28020)){
var statearr_28064_28089 = state_28049__$1;
(statearr_28064_28089[(1)] = (8));

} else {
var statearr_28065_28090 = state_28049__$1;
(statearr_28065_28090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (14))){
var inst_28042 = (state_28049[(2)]);
var inst_28043 = cljs.core.async.close_BANG_.call(null,out);
var state_28049__$1 = (function (){var statearr_28067 = state_28049;
(statearr_28067[(13)] = inst_28042);

return statearr_28067;
})();
var statearr_28068_28091 = state_28049__$1;
(statearr_28068_28091[(2)] = inst_28043);

(statearr_28068_28091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (10))){
var inst_28032 = (state_28049[(2)]);
var state_28049__$1 = state_28049;
var statearr_28069_28092 = state_28049__$1;
(statearr_28069_28092[(2)] = inst_28032);

(statearr_28069_28092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28050 === (8))){
var inst_28017 = (state_28049[(10)]);
var inst_28009 = (state_28049[(8)]);
var inst_28013 = (state_28049[(9)]);
var inst_28022 = inst_28009.push(inst_28013);
var tmp28066 = inst_28009;
var inst_28009__$1 = tmp28066;
var inst_28010 = inst_28017;
var state_28049__$1 = (function (){var statearr_28070 = state_28049;
(statearr_28070[(14)] = inst_28022);

(statearr_28070[(7)] = inst_28010);

(statearr_28070[(8)] = inst_28009__$1);

return statearr_28070;
})();
var statearr_28071_28093 = state_28049__$1;
(statearr_28071_28093[(2)] = null);

(statearr_28071_28093[(1)] = (2));


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
});})(c__20093__auto___28079,out))
;
return ((function (switch__20037__auto__,c__20093__auto___28079,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__20038__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__20038__auto____0 = (function (){
var statearr_28075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28075[(0)] = cljs$core$async$partition_by_$_state_machine__20038__auto__);

(statearr_28075[(1)] = (1));

return statearr_28075;
});
var cljs$core$async$partition_by_$_state_machine__20038__auto____1 = (function (state_28049){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_28049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e28076){if((e28076 instanceof Object)){
var ex__20041__auto__ = e28076;
var statearr_28077_28094 = state_28049;
(statearr_28077_28094[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28095 = state_28049;
state_28049 = G__28095;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__20038__auto__ = function(state_28049){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__20038__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__20038__auto____1.call(this,state_28049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__20038__auto____0;
cljs$core$async$partition_by_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__20038__auto____1;
return cljs$core$async$partition_by_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___28079,out))
})();
var state__20095__auto__ = (function (){var statearr_28078 = f__20094__auto__.call(null);
(statearr_28078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___28079);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___28079,out))
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

//# sourceMappingURL=async.js.map?rel=1435073930615