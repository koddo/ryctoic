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
if(typeof cljs.core.async.t19825 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19825 = (function (f,fn_handler,meta19826){
this.f = f;
this.fn_handler = fn_handler;
this.meta19826 = meta19826;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19825.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19825.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19825.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19827){
var self__ = this;
var _19827__$1 = this;
return self__.meta19826;
});

cljs.core.async.t19825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19827,meta19826__$1){
var self__ = this;
var _19827__$1 = this;
return (new cljs.core.async.t19825(self__.f,self__.fn_handler,meta19826__$1));
});

cljs.core.async.t19825.cljs$lang$type = true;

cljs.core.async.t19825.cljs$lang$ctorStr = "cljs.core.async/t19825";

cljs.core.async.t19825.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t19825");
});

cljs.core.async.__GT_t19825 = (function cljs$core$async$fn_handler_$___GT_t19825(f__$1,fn_handler__$1,meta19826){
return (new cljs.core.async.t19825(f__$1,fn_handler__$1,meta19826));
});

}

return (new cljs.core.async.t19825(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19829 = buff;
if(G__19829){
var bit__18461__auto__ = null;
if(cljs.core.truth_((function (){var or__17787__auto__ = bit__18461__auto__;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return G__19829.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19829.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19829);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19829);
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
var val_19830 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19830);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19830,ret){
return (function (){
return fn1.call(null,val_19830);
});})(val_19830,ret))
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
var n__18672__auto___19831 = n;
var x_19832 = (0);
while(true){
if((x_19832 < n__18672__auto___19831)){
(a[x_19832] = (0));

var G__19833 = (x_19832 + (1));
x_19832 = G__19833;
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

var G__19834 = (i + (1));
i = G__19834;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19838 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19838 = (function (flag,alt_flag,meta19839){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19839 = meta19839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19838.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19840){
var self__ = this;
var _19840__$1 = this;
return self__.meta19839;
});})(flag))
;

cljs.core.async.t19838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19840,meta19839__$1){
var self__ = this;
var _19840__$1 = this;
return (new cljs.core.async.t19838(self__.flag,self__.alt_flag,meta19839__$1));
});})(flag))
;

cljs.core.async.t19838.cljs$lang$type = true;

cljs.core.async.t19838.cljs$lang$ctorStr = "cljs.core.async/t19838";

cljs.core.async.t19838.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t19838");
});})(flag))
;

cljs.core.async.__GT_t19838 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t19838(flag__$1,alt_flag__$1,meta19839){
return (new cljs.core.async.t19838(flag__$1,alt_flag__$1,meta19839));
});})(flag))
;

}

return (new cljs.core.async.t19838(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t19844 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19844 = (function (cb,flag,alt_handler,meta19845){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19845 = meta19845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19844.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19846){
var self__ = this;
var _19846__$1 = this;
return self__.meta19845;
});

cljs.core.async.t19844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19846,meta19845__$1){
var self__ = this;
var _19846__$1 = this;
return (new cljs.core.async.t19844(self__.cb,self__.flag,self__.alt_handler,meta19845__$1));
});

cljs.core.async.t19844.cljs$lang$type = true;

cljs.core.async.t19844.cljs$lang$ctorStr = "cljs.core.async/t19844";

cljs.core.async.t19844.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t19844");
});

cljs.core.async.__GT_t19844 = (function cljs$core$async$alt_handler_$___GT_t19844(cb__$1,flag__$1,alt_handler__$1,meta19845){
return (new cljs.core.async.t19844(cb__$1,flag__$1,alt_handler__$1,meta19845));
});

}

return (new cljs.core.async.t19844(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__19847_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19847_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19848_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19848_SHARP_,port], null));
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
var G__19849 = (i + (1));
i = G__19849;
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
var cljs$core$async$alts_BANG___delegate = function (ports,p__19850){
var map__19852 = p__19850;
var map__19852__$1 = ((cljs.core.seq_QMARK_.call(null,map__19852))?cljs.core.apply.call(null,cljs.core.hash_map,map__19852):map__19852);
var opts = map__19852__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__19850 = null;
if (arguments.length > 1) {
var G__19853__i = 0, G__19853__a = new Array(arguments.length -  1);
while (G__19853__i < G__19853__a.length) {G__19853__a[G__19853__i] = arguments[G__19853__i + 1]; ++G__19853__i;}
  p__19850 = new cljs.core.IndexedSeq(G__19853__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__19850);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__19854){
var ports = cljs.core.first(arglist__19854);
var p__19850 = cljs.core.rest(arglist__19854);
return cljs$core$async$alts_BANG___delegate(ports,p__19850);
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
var c__19777__auto___19949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___19949){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___19949){
return (function (state_19925){
var state_val_19926 = (state_19925[(1)]);
if((state_val_19926 === (7))){
var inst_19921 = (state_19925[(2)]);
var state_19925__$1 = state_19925;
var statearr_19927_19950 = state_19925__$1;
(statearr_19927_19950[(2)] = inst_19921);

(statearr_19927_19950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (1))){
var state_19925__$1 = state_19925;
var statearr_19928_19951 = state_19925__$1;
(statearr_19928_19951[(2)] = null);

(statearr_19928_19951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (4))){
var inst_19904 = (state_19925[(7)]);
var inst_19904__$1 = (state_19925[(2)]);
var inst_19905 = (inst_19904__$1 == null);
var state_19925__$1 = (function (){var statearr_19929 = state_19925;
(statearr_19929[(7)] = inst_19904__$1);

return statearr_19929;
})();
if(cljs.core.truth_(inst_19905)){
var statearr_19930_19952 = state_19925__$1;
(statearr_19930_19952[(1)] = (5));

} else {
var statearr_19931_19953 = state_19925__$1;
(statearr_19931_19953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (13))){
var state_19925__$1 = state_19925;
var statearr_19932_19954 = state_19925__$1;
(statearr_19932_19954[(2)] = null);

(statearr_19932_19954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (6))){
var inst_19904 = (state_19925[(7)]);
var state_19925__$1 = state_19925;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19925__$1,(11),to,inst_19904);
} else {
if((state_val_19926 === (3))){
var inst_19923 = (state_19925[(2)]);
var state_19925__$1 = state_19925;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19925__$1,inst_19923);
} else {
if((state_val_19926 === (12))){
var state_19925__$1 = state_19925;
var statearr_19933_19955 = state_19925__$1;
(statearr_19933_19955[(2)] = null);

(statearr_19933_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (2))){
var state_19925__$1 = state_19925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19925__$1,(4),from);
} else {
if((state_val_19926 === (11))){
var inst_19914 = (state_19925[(2)]);
var state_19925__$1 = state_19925;
if(cljs.core.truth_(inst_19914)){
var statearr_19934_19956 = state_19925__$1;
(statearr_19934_19956[(1)] = (12));

} else {
var statearr_19935_19957 = state_19925__$1;
(statearr_19935_19957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (9))){
var state_19925__$1 = state_19925;
var statearr_19936_19958 = state_19925__$1;
(statearr_19936_19958[(2)] = null);

(statearr_19936_19958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (5))){
var state_19925__$1 = state_19925;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19937_19959 = state_19925__$1;
(statearr_19937_19959[(1)] = (8));

} else {
var statearr_19938_19960 = state_19925__$1;
(statearr_19938_19960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (14))){
var inst_19919 = (state_19925[(2)]);
var state_19925__$1 = state_19925;
var statearr_19939_19961 = state_19925__$1;
(statearr_19939_19961[(2)] = inst_19919);

(statearr_19939_19961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (10))){
var inst_19911 = (state_19925[(2)]);
var state_19925__$1 = state_19925;
var statearr_19940_19962 = state_19925__$1;
(statearr_19940_19962[(2)] = inst_19911);

(statearr_19940_19962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19926 === (8))){
var inst_19908 = cljs.core.async.close_BANG_.call(null,to);
var state_19925__$1 = state_19925;
var statearr_19941_19963 = state_19925__$1;
(statearr_19941_19963[(2)] = inst_19908);

(statearr_19941_19963[(1)] = (10));


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
});})(c__19777__auto___19949))
;
return ((function (switch__19721__auto__,c__19777__auto___19949){
return (function() {
var cljs$core$async$pipe_$_state_machine__19722__auto__ = null;
var cljs$core$async$pipe_$_state_machine__19722__auto____0 = (function (){
var statearr_19945 = [null,null,null,null,null,null,null,null];
(statearr_19945[(0)] = cljs$core$async$pipe_$_state_machine__19722__auto__);

(statearr_19945[(1)] = (1));

return statearr_19945;
});
var cljs$core$async$pipe_$_state_machine__19722__auto____1 = (function (state_19925){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_19925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e19946){if((e19946 instanceof Object)){
var ex__19725__auto__ = e19946;
var statearr_19947_19964 = state_19925;
(statearr_19947_19964[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19965 = state_19925;
state_19925 = G__19965;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__19722__auto__ = function(state_19925){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__19722__auto____1.call(this,state_19925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__19722__auto____0;
cljs$core$async$pipe_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__19722__auto____1;
return cljs$core$async$pipe_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___19949))
})();
var state__19779__auto__ = (function (){var statearr_19948 = f__19778__auto__.call(null);
(statearr_19948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___19949);

return statearr_19948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___19949))
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
return (function (p__20149){
var vec__20150 = p__20149;
var v = cljs.core.nth.call(null,vec__20150,(0),null);
var p = cljs.core.nth.call(null,vec__20150,(1),null);
var job = vec__20150;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19777__auto___20332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___20332,res,vec__20150,v,p,job,jobs,results){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___20332,res,vec__20150,v,p,job,jobs,results){
return (function (state_20155){
var state_val_20156 = (state_20155[(1)]);
if((state_val_20156 === (2))){
var inst_20152 = (state_20155[(2)]);
var inst_20153 = cljs.core.async.close_BANG_.call(null,res);
var state_20155__$1 = (function (){var statearr_20157 = state_20155;
(statearr_20157[(7)] = inst_20152);

return statearr_20157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20155__$1,inst_20153);
} else {
if((state_val_20156 === (1))){
var state_20155__$1 = state_20155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20155__$1,(2),res,v);
} else {
return null;
}
}
});})(c__19777__auto___20332,res,vec__20150,v,p,job,jobs,results))
;
return ((function (switch__19721__auto__,c__19777__auto___20332,res,vec__20150,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0 = (function (){
var statearr_20161 = [null,null,null,null,null,null,null,null];
(statearr_20161[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__);

(statearr_20161[(1)] = (1));

return statearr_20161;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1 = (function (state_20155){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20162){if((e20162 instanceof Object)){
var ex__19725__auto__ = e20162;
var statearr_20163_20333 = state_20155;
(statearr_20163_20333[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20334 = state_20155;
state_20155 = G__20334;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = function(state_20155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1.call(this,state_20155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___20332,res,vec__20150,v,p,job,jobs,results))
})();
var state__19779__auto__ = (function (){var statearr_20164 = f__19778__auto__.call(null);
(statearr_20164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___20332);

return statearr_20164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___20332,res,vec__20150,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20165){
var vec__20166 = p__20165;
var v = cljs.core.nth.call(null,vec__20166,(0),null);
var p = cljs.core.nth.call(null,vec__20166,(1),null);
var job = vec__20166;
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
var n__18672__auto___20335 = n;
var __20336 = (0);
while(true){
if((__20336 < n__18672__auto___20335)){
var G__20167_20337 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20167_20337) {
case "async":
var c__19777__auto___20339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20336,c__19777__auto___20339,G__20167_20337,n__18672__auto___20335,jobs,results,process,async){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (__20336,c__19777__auto___20339,G__20167_20337,n__18672__auto___20335,jobs,results,process,async){
return (function (state_20180){
var state_val_20181 = (state_20180[(1)]);
if((state_val_20181 === (7))){
var inst_20176 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
var statearr_20182_20340 = state_20180__$1;
(statearr_20182_20340[(2)] = inst_20176);

(statearr_20182_20340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (6))){
var state_20180__$1 = state_20180;
var statearr_20183_20341 = state_20180__$1;
(statearr_20183_20341[(2)] = null);

(statearr_20183_20341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (5))){
var state_20180__$1 = state_20180;
var statearr_20184_20342 = state_20180__$1;
(statearr_20184_20342[(2)] = null);

(statearr_20184_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (4))){
var inst_20170 = (state_20180[(2)]);
var inst_20171 = async.call(null,inst_20170);
var state_20180__$1 = state_20180;
if(cljs.core.truth_(inst_20171)){
var statearr_20185_20343 = state_20180__$1;
(statearr_20185_20343[(1)] = (5));

} else {
var statearr_20186_20344 = state_20180__$1;
(statearr_20186_20344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20181 === (3))){
var inst_20178 = (state_20180[(2)]);
var state_20180__$1 = state_20180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20180__$1,inst_20178);
} else {
if((state_val_20181 === (2))){
var state_20180__$1 = state_20180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20180__$1,(4),jobs);
} else {
if((state_val_20181 === (1))){
var state_20180__$1 = state_20180;
var statearr_20187_20345 = state_20180__$1;
(statearr_20187_20345[(2)] = null);

(statearr_20187_20345[(1)] = (2));


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
});})(__20336,c__19777__auto___20339,G__20167_20337,n__18672__auto___20335,jobs,results,process,async))
;
return ((function (__20336,switch__19721__auto__,c__19777__auto___20339,G__20167_20337,n__18672__auto___20335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0 = (function (){
var statearr_20191 = [null,null,null,null,null,null,null];
(statearr_20191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__);

(statearr_20191[(1)] = (1));

return statearr_20191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1 = (function (state_20180){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20192){if((e20192 instanceof Object)){
var ex__19725__auto__ = e20192;
var statearr_20193_20346 = state_20180;
(statearr_20193_20346[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20347 = state_20180;
state_20180 = G__20347;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = function(state_20180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1.call(this,state_20180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__;
})()
;})(__20336,switch__19721__auto__,c__19777__auto___20339,G__20167_20337,n__18672__auto___20335,jobs,results,process,async))
})();
var state__19779__auto__ = (function (){var statearr_20194 = f__19778__auto__.call(null);
(statearr_20194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___20339);

return statearr_20194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(__20336,c__19777__auto___20339,G__20167_20337,n__18672__auto___20335,jobs,results,process,async))
);


break;
case "compute":
var c__19777__auto___20348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20336,c__19777__auto___20348,G__20167_20337,n__18672__auto___20335,jobs,results,process,async){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (__20336,c__19777__auto___20348,G__20167_20337,n__18672__auto___20335,jobs,results,process,async){
return (function (state_20207){
var state_val_20208 = (state_20207[(1)]);
if((state_val_20208 === (7))){
var inst_20203 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
var statearr_20209_20349 = state_20207__$1;
(statearr_20209_20349[(2)] = inst_20203);

(statearr_20209_20349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (6))){
var state_20207__$1 = state_20207;
var statearr_20210_20350 = state_20207__$1;
(statearr_20210_20350[(2)] = null);

(statearr_20210_20350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (5))){
var state_20207__$1 = state_20207;
var statearr_20211_20351 = state_20207__$1;
(statearr_20211_20351[(2)] = null);

(statearr_20211_20351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (4))){
var inst_20197 = (state_20207[(2)]);
var inst_20198 = process.call(null,inst_20197);
var state_20207__$1 = state_20207;
if(cljs.core.truth_(inst_20198)){
var statearr_20212_20352 = state_20207__$1;
(statearr_20212_20352[(1)] = (5));

} else {
var statearr_20213_20353 = state_20207__$1;
(statearr_20213_20353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20208 === (3))){
var inst_20205 = (state_20207[(2)]);
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20207__$1,inst_20205);
} else {
if((state_val_20208 === (2))){
var state_20207__$1 = state_20207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20207__$1,(4),jobs);
} else {
if((state_val_20208 === (1))){
var state_20207__$1 = state_20207;
var statearr_20214_20354 = state_20207__$1;
(statearr_20214_20354[(2)] = null);

(statearr_20214_20354[(1)] = (2));


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
});})(__20336,c__19777__auto___20348,G__20167_20337,n__18672__auto___20335,jobs,results,process,async))
;
return ((function (__20336,switch__19721__auto__,c__19777__auto___20348,G__20167_20337,n__18672__auto___20335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0 = (function (){
var statearr_20218 = [null,null,null,null,null,null,null];
(statearr_20218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__);

(statearr_20218[(1)] = (1));

return statearr_20218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1 = (function (state_20207){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20219){if((e20219 instanceof Object)){
var ex__19725__auto__ = e20219;
var statearr_20220_20355 = state_20207;
(statearr_20220_20355[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20356 = state_20207;
state_20207 = G__20356;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = function(state_20207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1.call(this,state_20207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__;
})()
;})(__20336,switch__19721__auto__,c__19777__auto___20348,G__20167_20337,n__18672__auto___20335,jobs,results,process,async))
})();
var state__19779__auto__ = (function (){var statearr_20221 = f__19778__auto__.call(null);
(statearr_20221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___20348);

return statearr_20221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(__20336,c__19777__auto___20348,G__20167_20337,n__18672__auto___20335,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20357 = (__20336 + (1));
__20336 = G__20357;
continue;
} else {
}
break;
}

var c__19777__auto___20358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___20358,jobs,results,process,async){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___20358,jobs,results,process,async){
return (function (state_20243){
var state_val_20244 = (state_20243[(1)]);
if((state_val_20244 === (9))){
var inst_20236 = (state_20243[(2)]);
var state_20243__$1 = (function (){var statearr_20245 = state_20243;
(statearr_20245[(7)] = inst_20236);

return statearr_20245;
})();
var statearr_20246_20359 = state_20243__$1;
(statearr_20246_20359[(2)] = null);

(statearr_20246_20359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (8))){
var inst_20229 = (state_20243[(8)]);
var inst_20234 = (state_20243[(2)]);
var state_20243__$1 = (function (){var statearr_20247 = state_20243;
(statearr_20247[(9)] = inst_20234);

return statearr_20247;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20243__$1,(9),results,inst_20229);
} else {
if((state_val_20244 === (7))){
var inst_20239 = (state_20243[(2)]);
var state_20243__$1 = state_20243;
var statearr_20248_20360 = state_20243__$1;
(statearr_20248_20360[(2)] = inst_20239);

(statearr_20248_20360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (6))){
var inst_20224 = (state_20243[(10)]);
var inst_20229 = (state_20243[(8)]);
var inst_20229__$1 = cljs.core.async.chan.call(null,(1));
var inst_20230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20231 = [inst_20224,inst_20229__$1];
var inst_20232 = (new cljs.core.PersistentVector(null,2,(5),inst_20230,inst_20231,null));
var state_20243__$1 = (function (){var statearr_20249 = state_20243;
(statearr_20249[(8)] = inst_20229__$1);

return statearr_20249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20243__$1,(8),jobs,inst_20232);
} else {
if((state_val_20244 === (5))){
var inst_20227 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20243__$1 = state_20243;
var statearr_20250_20361 = state_20243__$1;
(statearr_20250_20361[(2)] = inst_20227);

(statearr_20250_20361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (4))){
var inst_20224 = (state_20243[(10)]);
var inst_20224__$1 = (state_20243[(2)]);
var inst_20225 = (inst_20224__$1 == null);
var state_20243__$1 = (function (){var statearr_20251 = state_20243;
(statearr_20251[(10)] = inst_20224__$1);

return statearr_20251;
})();
if(cljs.core.truth_(inst_20225)){
var statearr_20252_20362 = state_20243__$1;
(statearr_20252_20362[(1)] = (5));

} else {
var statearr_20253_20363 = state_20243__$1;
(statearr_20253_20363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20244 === (3))){
var inst_20241 = (state_20243[(2)]);
var state_20243__$1 = state_20243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20243__$1,inst_20241);
} else {
if((state_val_20244 === (2))){
var state_20243__$1 = state_20243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20243__$1,(4),from);
} else {
if((state_val_20244 === (1))){
var state_20243__$1 = state_20243;
var statearr_20254_20364 = state_20243__$1;
(statearr_20254_20364[(2)] = null);

(statearr_20254_20364[(1)] = (2));


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
});})(c__19777__auto___20358,jobs,results,process,async))
;
return ((function (switch__19721__auto__,c__19777__auto___20358,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0 = (function (){
var statearr_20258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__);

(statearr_20258[(1)] = (1));

return statearr_20258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1 = (function (state_20243){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20259){if((e20259 instanceof Object)){
var ex__19725__auto__ = e20259;
var statearr_20260_20365 = state_20243;
(statearr_20260_20365[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20366 = state_20243;
state_20243 = G__20366;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = function(state_20243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1.call(this,state_20243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___20358,jobs,results,process,async))
})();
var state__19779__auto__ = (function (){var statearr_20261 = f__19778__auto__.call(null);
(statearr_20261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___20358);

return statearr_20261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___20358,jobs,results,process,async))
);


var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__,jobs,results,process,async){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__,jobs,results,process,async){
return (function (state_20299){
var state_val_20300 = (state_20299[(1)]);
if((state_val_20300 === (7))){
var inst_20295 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20301_20367 = state_20299__$1;
(statearr_20301_20367[(2)] = inst_20295);

(statearr_20301_20367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (20))){
var state_20299__$1 = state_20299;
var statearr_20302_20368 = state_20299__$1;
(statearr_20302_20368[(2)] = null);

(statearr_20302_20368[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (1))){
var state_20299__$1 = state_20299;
var statearr_20303_20369 = state_20299__$1;
(statearr_20303_20369[(2)] = null);

(statearr_20303_20369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (4))){
var inst_20264 = (state_20299[(7)]);
var inst_20264__$1 = (state_20299[(2)]);
var inst_20265 = (inst_20264__$1 == null);
var state_20299__$1 = (function (){var statearr_20304 = state_20299;
(statearr_20304[(7)] = inst_20264__$1);

return statearr_20304;
})();
if(cljs.core.truth_(inst_20265)){
var statearr_20305_20370 = state_20299__$1;
(statearr_20305_20370[(1)] = (5));

} else {
var statearr_20306_20371 = state_20299__$1;
(statearr_20306_20371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (15))){
var inst_20277 = (state_20299[(8)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20299__$1,(18),to,inst_20277);
} else {
if((state_val_20300 === (21))){
var inst_20290 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20307_20372 = state_20299__$1;
(statearr_20307_20372[(2)] = inst_20290);

(statearr_20307_20372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (13))){
var inst_20292 = (state_20299[(2)]);
var state_20299__$1 = (function (){var statearr_20308 = state_20299;
(statearr_20308[(9)] = inst_20292);

return statearr_20308;
})();
var statearr_20309_20373 = state_20299__$1;
(statearr_20309_20373[(2)] = null);

(statearr_20309_20373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (6))){
var inst_20264 = (state_20299[(7)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(11),inst_20264);
} else {
if((state_val_20300 === (17))){
var inst_20285 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
if(cljs.core.truth_(inst_20285)){
var statearr_20310_20374 = state_20299__$1;
(statearr_20310_20374[(1)] = (19));

} else {
var statearr_20311_20375 = state_20299__$1;
(statearr_20311_20375[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (3))){
var inst_20297 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20299__$1,inst_20297);
} else {
if((state_val_20300 === (12))){
var inst_20274 = (state_20299[(10)]);
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(14),inst_20274);
} else {
if((state_val_20300 === (2))){
var state_20299__$1 = state_20299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20299__$1,(4),results);
} else {
if((state_val_20300 === (19))){
var state_20299__$1 = state_20299;
var statearr_20312_20376 = state_20299__$1;
(statearr_20312_20376[(2)] = null);

(statearr_20312_20376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (11))){
var inst_20274 = (state_20299[(2)]);
var state_20299__$1 = (function (){var statearr_20313 = state_20299;
(statearr_20313[(10)] = inst_20274);

return statearr_20313;
})();
var statearr_20314_20377 = state_20299__$1;
(statearr_20314_20377[(2)] = null);

(statearr_20314_20377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (9))){
var state_20299__$1 = state_20299;
var statearr_20315_20378 = state_20299__$1;
(statearr_20315_20378[(2)] = null);

(statearr_20315_20378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (5))){
var state_20299__$1 = state_20299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20316_20379 = state_20299__$1;
(statearr_20316_20379[(1)] = (8));

} else {
var statearr_20317_20380 = state_20299__$1;
(statearr_20317_20380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (14))){
var inst_20279 = (state_20299[(11)]);
var inst_20277 = (state_20299[(8)]);
var inst_20277__$1 = (state_20299[(2)]);
var inst_20278 = (inst_20277__$1 == null);
var inst_20279__$1 = cljs.core.not.call(null,inst_20278);
var state_20299__$1 = (function (){var statearr_20318 = state_20299;
(statearr_20318[(11)] = inst_20279__$1);

(statearr_20318[(8)] = inst_20277__$1);

return statearr_20318;
})();
if(inst_20279__$1){
var statearr_20319_20381 = state_20299__$1;
(statearr_20319_20381[(1)] = (15));

} else {
var statearr_20320_20382 = state_20299__$1;
(statearr_20320_20382[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (16))){
var inst_20279 = (state_20299[(11)]);
var state_20299__$1 = state_20299;
var statearr_20321_20383 = state_20299__$1;
(statearr_20321_20383[(2)] = inst_20279);

(statearr_20321_20383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (10))){
var inst_20271 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20322_20384 = state_20299__$1;
(statearr_20322_20384[(2)] = inst_20271);

(statearr_20322_20384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (18))){
var inst_20282 = (state_20299[(2)]);
var state_20299__$1 = state_20299;
var statearr_20323_20385 = state_20299__$1;
(statearr_20323_20385[(2)] = inst_20282);

(statearr_20323_20385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20300 === (8))){
var inst_20268 = cljs.core.async.close_BANG_.call(null,to);
var state_20299__$1 = state_20299;
var statearr_20324_20386 = state_20299__$1;
(statearr_20324_20386[(2)] = inst_20268);

(statearr_20324_20386[(1)] = (10));


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
});})(c__19777__auto__,jobs,results,process,async))
;
return ((function (switch__19721__auto__,c__19777__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0 = (function (){
var statearr_20328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__);

(statearr_20328[(1)] = (1));

return statearr_20328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1 = (function (state_20299){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20329){if((e20329 instanceof Object)){
var ex__19725__auto__ = e20329;
var statearr_20330_20387 = state_20299;
(statearr_20330_20387[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20388 = state_20299;
state_20299 = G__20388;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__ = function(state_20299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1.call(this,state_20299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19722__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__,jobs,results,process,async))
})();
var state__19779__auto__ = (function (){var statearr_20331 = f__19778__auto__.call(null);
(statearr_20331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_20331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__,jobs,results,process,async))
);

return c__19777__auto__;
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
var c__19777__auto___20489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___20489,tc,fc){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___20489,tc,fc){
return (function (state_20464){
var state_val_20465 = (state_20464[(1)]);
if((state_val_20465 === (7))){
var inst_20460 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
var statearr_20466_20490 = state_20464__$1;
(statearr_20466_20490[(2)] = inst_20460);

(statearr_20466_20490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (1))){
var state_20464__$1 = state_20464;
var statearr_20467_20491 = state_20464__$1;
(statearr_20467_20491[(2)] = null);

(statearr_20467_20491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (4))){
var inst_20441 = (state_20464[(7)]);
var inst_20441__$1 = (state_20464[(2)]);
var inst_20442 = (inst_20441__$1 == null);
var state_20464__$1 = (function (){var statearr_20468 = state_20464;
(statearr_20468[(7)] = inst_20441__$1);

return statearr_20468;
})();
if(cljs.core.truth_(inst_20442)){
var statearr_20469_20492 = state_20464__$1;
(statearr_20469_20492[(1)] = (5));

} else {
var statearr_20470_20493 = state_20464__$1;
(statearr_20470_20493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (13))){
var state_20464__$1 = state_20464;
var statearr_20471_20494 = state_20464__$1;
(statearr_20471_20494[(2)] = null);

(statearr_20471_20494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (6))){
var inst_20441 = (state_20464[(7)]);
var inst_20447 = p.call(null,inst_20441);
var state_20464__$1 = state_20464;
if(cljs.core.truth_(inst_20447)){
var statearr_20472_20495 = state_20464__$1;
(statearr_20472_20495[(1)] = (9));

} else {
var statearr_20473_20496 = state_20464__$1;
(statearr_20473_20496[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (3))){
var inst_20462 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20464__$1,inst_20462);
} else {
if((state_val_20465 === (12))){
var state_20464__$1 = state_20464;
var statearr_20474_20497 = state_20464__$1;
(statearr_20474_20497[(2)] = null);

(statearr_20474_20497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (2))){
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20464__$1,(4),ch);
} else {
if((state_val_20465 === (11))){
var inst_20441 = (state_20464[(7)]);
var inst_20451 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20464__$1,(8),inst_20451,inst_20441);
} else {
if((state_val_20465 === (9))){
var state_20464__$1 = state_20464;
var statearr_20475_20498 = state_20464__$1;
(statearr_20475_20498[(2)] = tc);

(statearr_20475_20498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (5))){
var inst_20444 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20445 = cljs.core.async.close_BANG_.call(null,fc);
var state_20464__$1 = (function (){var statearr_20476 = state_20464;
(statearr_20476[(8)] = inst_20444);

return statearr_20476;
})();
var statearr_20477_20499 = state_20464__$1;
(statearr_20477_20499[(2)] = inst_20445);

(statearr_20477_20499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (14))){
var inst_20458 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
var statearr_20478_20500 = state_20464__$1;
(statearr_20478_20500[(2)] = inst_20458);

(statearr_20478_20500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (10))){
var state_20464__$1 = state_20464;
var statearr_20479_20501 = state_20464__$1;
(statearr_20479_20501[(2)] = fc);

(statearr_20479_20501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20465 === (8))){
var inst_20453 = (state_20464[(2)]);
var state_20464__$1 = state_20464;
if(cljs.core.truth_(inst_20453)){
var statearr_20480_20502 = state_20464__$1;
(statearr_20480_20502[(1)] = (12));

} else {
var statearr_20481_20503 = state_20464__$1;
(statearr_20481_20503[(1)] = (13));

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
});})(c__19777__auto___20489,tc,fc))
;
return ((function (switch__19721__auto__,c__19777__auto___20489,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__19722__auto__ = null;
var cljs$core$async$split_$_state_machine__19722__auto____0 = (function (){
var statearr_20485 = [null,null,null,null,null,null,null,null,null];
(statearr_20485[(0)] = cljs$core$async$split_$_state_machine__19722__auto__);

(statearr_20485[(1)] = (1));

return statearr_20485;
});
var cljs$core$async$split_$_state_machine__19722__auto____1 = (function (state_20464){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20486){if((e20486 instanceof Object)){
var ex__19725__auto__ = e20486;
var statearr_20487_20504 = state_20464;
(statearr_20487_20504[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20505 = state_20464;
state_20464 = G__20505;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__19722__auto__ = function(state_20464){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__19722__auto____1.call(this,state_20464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__19722__auto____0;
cljs$core$async$split_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__19722__auto____1;
return cljs$core$async$split_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___20489,tc,fc))
})();
var state__19779__auto__ = (function (){var statearr_20488 = f__19778__auto__.call(null);
(statearr_20488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___20489);

return statearr_20488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___20489,tc,fc))
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
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_20552){
var state_val_20553 = (state_20552[(1)]);
if((state_val_20553 === (7))){
var inst_20548 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
var statearr_20554_20570 = state_20552__$1;
(statearr_20554_20570[(2)] = inst_20548);

(statearr_20554_20570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (6))){
var inst_20538 = (state_20552[(7)]);
var inst_20541 = (state_20552[(8)]);
var inst_20545 = f.call(null,inst_20538,inst_20541);
var inst_20538__$1 = inst_20545;
var state_20552__$1 = (function (){var statearr_20555 = state_20552;
(statearr_20555[(7)] = inst_20538__$1);

return statearr_20555;
})();
var statearr_20556_20571 = state_20552__$1;
(statearr_20556_20571[(2)] = null);

(statearr_20556_20571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (5))){
var inst_20538 = (state_20552[(7)]);
var state_20552__$1 = state_20552;
var statearr_20557_20572 = state_20552__$1;
(statearr_20557_20572[(2)] = inst_20538);

(statearr_20557_20572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (4))){
var inst_20541 = (state_20552[(8)]);
var inst_20541__$1 = (state_20552[(2)]);
var inst_20542 = (inst_20541__$1 == null);
var state_20552__$1 = (function (){var statearr_20558 = state_20552;
(statearr_20558[(8)] = inst_20541__$1);

return statearr_20558;
})();
if(cljs.core.truth_(inst_20542)){
var statearr_20559_20573 = state_20552__$1;
(statearr_20559_20573[(1)] = (5));

} else {
var statearr_20560_20574 = state_20552__$1;
(statearr_20560_20574[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20553 === (3))){
var inst_20550 = (state_20552[(2)]);
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20552__$1,inst_20550);
} else {
if((state_val_20553 === (2))){
var state_20552__$1 = state_20552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20552__$1,(4),ch);
} else {
if((state_val_20553 === (1))){
var inst_20538 = init;
var state_20552__$1 = (function (){var statearr_20561 = state_20552;
(statearr_20561[(7)] = inst_20538);

return statearr_20561;
})();
var statearr_20562_20575 = state_20552__$1;
(statearr_20562_20575[(2)] = null);

(statearr_20562_20575[(1)] = (2));


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
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19722__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19722__auto____0 = (function (){
var statearr_20566 = [null,null,null,null,null,null,null,null,null];
(statearr_20566[(0)] = cljs$core$async$reduce_$_state_machine__19722__auto__);

(statearr_20566[(1)] = (1));

return statearr_20566;
});
var cljs$core$async$reduce_$_state_machine__19722__auto____1 = (function (state_20552){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20567){if((e20567 instanceof Object)){
var ex__19725__auto__ = e20567;
var statearr_20568_20576 = state_20552;
(statearr_20568_20576[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20577 = state_20552;
state_20552 = G__20577;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19722__auto__ = function(state_20552){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19722__auto____1.call(this,state_20552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19722__auto____0;
cljs$core$async$reduce_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19722__auto____1;
return cljs$core$async$reduce_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_20569 = f__19778__auto__.call(null);
(statearr_20569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_20569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
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
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_20651){
var state_val_20652 = (state_20651[(1)]);
if((state_val_20652 === (7))){
var inst_20633 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
var statearr_20653_20676 = state_20651__$1;
(statearr_20653_20676[(2)] = inst_20633);

(statearr_20653_20676[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (1))){
var inst_20627 = cljs.core.seq.call(null,coll);
var inst_20628 = inst_20627;
var state_20651__$1 = (function (){var statearr_20654 = state_20651;
(statearr_20654[(7)] = inst_20628);

return statearr_20654;
})();
var statearr_20655_20677 = state_20651__$1;
(statearr_20655_20677[(2)] = null);

(statearr_20655_20677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (4))){
var inst_20628 = (state_20651[(7)]);
var inst_20631 = cljs.core.first.call(null,inst_20628);
var state_20651__$1 = state_20651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20651__$1,(7),ch,inst_20631);
} else {
if((state_val_20652 === (13))){
var inst_20645 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
var statearr_20656_20678 = state_20651__$1;
(statearr_20656_20678[(2)] = inst_20645);

(statearr_20656_20678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (6))){
var inst_20636 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
if(cljs.core.truth_(inst_20636)){
var statearr_20657_20679 = state_20651__$1;
(statearr_20657_20679[(1)] = (8));

} else {
var statearr_20658_20680 = state_20651__$1;
(statearr_20658_20680[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (3))){
var inst_20649 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20651__$1,inst_20649);
} else {
if((state_val_20652 === (12))){
var state_20651__$1 = state_20651;
var statearr_20659_20681 = state_20651__$1;
(statearr_20659_20681[(2)] = null);

(statearr_20659_20681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (2))){
var inst_20628 = (state_20651[(7)]);
var state_20651__$1 = state_20651;
if(cljs.core.truth_(inst_20628)){
var statearr_20660_20682 = state_20651__$1;
(statearr_20660_20682[(1)] = (4));

} else {
var statearr_20661_20683 = state_20651__$1;
(statearr_20661_20683[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (11))){
var inst_20642 = cljs.core.async.close_BANG_.call(null,ch);
var state_20651__$1 = state_20651;
var statearr_20662_20684 = state_20651__$1;
(statearr_20662_20684[(2)] = inst_20642);

(statearr_20662_20684[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (9))){
var state_20651__$1 = state_20651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20663_20685 = state_20651__$1;
(statearr_20663_20685[(1)] = (11));

} else {
var statearr_20664_20686 = state_20651__$1;
(statearr_20664_20686[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (5))){
var inst_20628 = (state_20651[(7)]);
var state_20651__$1 = state_20651;
var statearr_20665_20687 = state_20651__$1;
(statearr_20665_20687[(2)] = inst_20628);

(statearr_20665_20687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (10))){
var inst_20647 = (state_20651[(2)]);
var state_20651__$1 = state_20651;
var statearr_20666_20688 = state_20651__$1;
(statearr_20666_20688[(2)] = inst_20647);

(statearr_20666_20688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20652 === (8))){
var inst_20628 = (state_20651[(7)]);
var inst_20638 = cljs.core.next.call(null,inst_20628);
var inst_20628__$1 = inst_20638;
var state_20651__$1 = (function (){var statearr_20667 = state_20651;
(statearr_20667[(7)] = inst_20628__$1);

return statearr_20667;
})();
var statearr_20668_20689 = state_20651__$1;
(statearr_20668_20689[(2)] = null);

(statearr_20668_20689[(1)] = (2));


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
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__19722__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__19722__auto____0 = (function (){
var statearr_20672 = [null,null,null,null,null,null,null,null];
(statearr_20672[(0)] = cljs$core$async$onto_chan_$_state_machine__19722__auto__);

(statearr_20672[(1)] = (1));

return statearr_20672;
});
var cljs$core$async$onto_chan_$_state_machine__19722__auto____1 = (function (state_20651){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_20651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e20673){if((e20673 instanceof Object)){
var ex__19725__auto__ = e20673;
var statearr_20674_20690 = state_20651;
(statearr_20674_20690[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20691 = state_20651;
state_20651 = G__20691;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__19722__auto__ = function(state_20651){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__19722__auto____1.call(this,state_20651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__19722__auto____0;
cljs$core$async$onto_chan_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__19722__auto____1;
return cljs$core$async$onto_chan_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_20675 = f__19778__auto__.call(null);
(statearr_20675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_20675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
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

cljs.core.async.Mux = (function (){var obj20693 = {};
return obj20693;
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


cljs.core.async.Mult = (function (){var obj20695 = {};
return obj20695;
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
if(typeof cljs.core.async.t20917 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20917 = (function (cs,ch,mult,meta20918){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20918 = meta20918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20917.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20917.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20917.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20917.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20917.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20919){
var self__ = this;
var _20919__$1 = this;
return self__.meta20918;
});})(cs))
;

cljs.core.async.t20917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20919,meta20918__$1){
var self__ = this;
var _20919__$1 = this;
return (new cljs.core.async.t20917(self__.cs,self__.ch,self__.mult,meta20918__$1));
});})(cs))
;

cljs.core.async.t20917.cljs$lang$type = true;

cljs.core.async.t20917.cljs$lang$ctorStr = "cljs.core.async/t20917";

cljs.core.async.t20917.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t20917");
});})(cs))
;

cljs.core.async.__GT_t20917 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t20917(cs__$1,ch__$1,mult__$1,meta20918){
return (new cljs.core.async.t20917(cs__$1,ch__$1,mult__$1,meta20918));
});})(cs))
;

}

return (new cljs.core.async.t20917(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19777__auto___21138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___21138,cs,m,dchan,dctr,done){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___21138,cs,m,dchan,dctr,done){
return (function (state_21050){
var state_val_21051 = (state_21050[(1)]);
if((state_val_21051 === (7))){
var inst_21046 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21052_21139 = state_21050__$1;
(statearr_21052_21139[(2)] = inst_21046);

(statearr_21052_21139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (20))){
var inst_20951 = (state_21050[(7)]);
var inst_20961 = cljs.core.first.call(null,inst_20951);
var inst_20962 = cljs.core.nth.call(null,inst_20961,(0),null);
var inst_20963 = cljs.core.nth.call(null,inst_20961,(1),null);
var state_21050__$1 = (function (){var statearr_21053 = state_21050;
(statearr_21053[(8)] = inst_20962);

return statearr_21053;
})();
if(cljs.core.truth_(inst_20963)){
var statearr_21054_21140 = state_21050__$1;
(statearr_21054_21140[(1)] = (22));

} else {
var statearr_21055_21141 = state_21050__$1;
(statearr_21055_21141[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (27))){
var inst_20922 = (state_21050[(9)]);
var inst_20998 = (state_21050[(10)]);
var inst_20993 = (state_21050[(11)]);
var inst_20991 = (state_21050[(12)]);
var inst_20998__$1 = cljs.core._nth.call(null,inst_20991,inst_20993);
var inst_20999 = cljs.core.async.put_BANG_.call(null,inst_20998__$1,inst_20922,done);
var state_21050__$1 = (function (){var statearr_21056 = state_21050;
(statearr_21056[(10)] = inst_20998__$1);

return statearr_21056;
})();
if(cljs.core.truth_(inst_20999)){
var statearr_21057_21142 = state_21050__$1;
(statearr_21057_21142[(1)] = (30));

} else {
var statearr_21058_21143 = state_21050__$1;
(statearr_21058_21143[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (1))){
var state_21050__$1 = state_21050;
var statearr_21059_21144 = state_21050__$1;
(statearr_21059_21144[(2)] = null);

(statearr_21059_21144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (24))){
var inst_20951 = (state_21050[(7)]);
var inst_20968 = (state_21050[(2)]);
var inst_20969 = cljs.core.next.call(null,inst_20951);
var inst_20931 = inst_20969;
var inst_20932 = null;
var inst_20933 = (0);
var inst_20934 = (0);
var state_21050__$1 = (function (){var statearr_21060 = state_21050;
(statearr_21060[(13)] = inst_20968);

(statearr_21060[(14)] = inst_20933);

(statearr_21060[(15)] = inst_20931);

(statearr_21060[(16)] = inst_20932);

(statearr_21060[(17)] = inst_20934);

return statearr_21060;
})();
var statearr_21061_21145 = state_21050__$1;
(statearr_21061_21145[(2)] = null);

(statearr_21061_21145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (39))){
var state_21050__$1 = state_21050;
var statearr_21065_21146 = state_21050__$1;
(statearr_21065_21146[(2)] = null);

(statearr_21065_21146[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (4))){
var inst_20922 = (state_21050[(9)]);
var inst_20922__$1 = (state_21050[(2)]);
var inst_20923 = (inst_20922__$1 == null);
var state_21050__$1 = (function (){var statearr_21066 = state_21050;
(statearr_21066[(9)] = inst_20922__$1);

return statearr_21066;
})();
if(cljs.core.truth_(inst_20923)){
var statearr_21067_21147 = state_21050__$1;
(statearr_21067_21147[(1)] = (5));

} else {
var statearr_21068_21148 = state_21050__$1;
(statearr_21068_21148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (15))){
var inst_20933 = (state_21050[(14)]);
var inst_20931 = (state_21050[(15)]);
var inst_20932 = (state_21050[(16)]);
var inst_20934 = (state_21050[(17)]);
var inst_20947 = (state_21050[(2)]);
var inst_20948 = (inst_20934 + (1));
var tmp21062 = inst_20933;
var tmp21063 = inst_20931;
var tmp21064 = inst_20932;
var inst_20931__$1 = tmp21063;
var inst_20932__$1 = tmp21064;
var inst_20933__$1 = tmp21062;
var inst_20934__$1 = inst_20948;
var state_21050__$1 = (function (){var statearr_21069 = state_21050;
(statearr_21069[(18)] = inst_20947);

(statearr_21069[(14)] = inst_20933__$1);

(statearr_21069[(15)] = inst_20931__$1);

(statearr_21069[(16)] = inst_20932__$1);

(statearr_21069[(17)] = inst_20934__$1);

return statearr_21069;
})();
var statearr_21070_21149 = state_21050__$1;
(statearr_21070_21149[(2)] = null);

(statearr_21070_21149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (21))){
var inst_20972 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21074_21150 = state_21050__$1;
(statearr_21074_21150[(2)] = inst_20972);

(statearr_21074_21150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (31))){
var inst_20998 = (state_21050[(10)]);
var inst_21002 = done.call(null,null);
var inst_21003 = cljs.core.async.untap_STAR_.call(null,m,inst_20998);
var state_21050__$1 = (function (){var statearr_21075 = state_21050;
(statearr_21075[(19)] = inst_21002);

return statearr_21075;
})();
var statearr_21076_21151 = state_21050__$1;
(statearr_21076_21151[(2)] = inst_21003);

(statearr_21076_21151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (32))){
var inst_20992 = (state_21050[(20)]);
var inst_20990 = (state_21050[(21)]);
var inst_20993 = (state_21050[(11)]);
var inst_20991 = (state_21050[(12)]);
var inst_21005 = (state_21050[(2)]);
var inst_21006 = (inst_20993 + (1));
var tmp21071 = inst_20992;
var tmp21072 = inst_20990;
var tmp21073 = inst_20991;
var inst_20990__$1 = tmp21072;
var inst_20991__$1 = tmp21073;
var inst_20992__$1 = tmp21071;
var inst_20993__$1 = inst_21006;
var state_21050__$1 = (function (){var statearr_21077 = state_21050;
(statearr_21077[(20)] = inst_20992__$1);

(statearr_21077[(22)] = inst_21005);

(statearr_21077[(21)] = inst_20990__$1);

(statearr_21077[(11)] = inst_20993__$1);

(statearr_21077[(12)] = inst_20991__$1);

return statearr_21077;
})();
var statearr_21078_21152 = state_21050__$1;
(statearr_21078_21152[(2)] = null);

(statearr_21078_21152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (40))){
var inst_21018 = (state_21050[(23)]);
var inst_21022 = done.call(null,null);
var inst_21023 = cljs.core.async.untap_STAR_.call(null,m,inst_21018);
var state_21050__$1 = (function (){var statearr_21079 = state_21050;
(statearr_21079[(24)] = inst_21022);

return statearr_21079;
})();
var statearr_21080_21153 = state_21050__$1;
(statearr_21080_21153[(2)] = inst_21023);

(statearr_21080_21153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (33))){
var inst_21009 = (state_21050[(25)]);
var inst_21011 = cljs.core.chunked_seq_QMARK_.call(null,inst_21009);
var state_21050__$1 = state_21050;
if(inst_21011){
var statearr_21081_21154 = state_21050__$1;
(statearr_21081_21154[(1)] = (36));

} else {
var statearr_21082_21155 = state_21050__$1;
(statearr_21082_21155[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (13))){
var inst_20941 = (state_21050[(26)]);
var inst_20944 = cljs.core.async.close_BANG_.call(null,inst_20941);
var state_21050__$1 = state_21050;
var statearr_21083_21156 = state_21050__$1;
(statearr_21083_21156[(2)] = inst_20944);

(statearr_21083_21156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (22))){
var inst_20962 = (state_21050[(8)]);
var inst_20965 = cljs.core.async.close_BANG_.call(null,inst_20962);
var state_21050__$1 = state_21050;
var statearr_21084_21157 = state_21050__$1;
(statearr_21084_21157[(2)] = inst_20965);

(statearr_21084_21157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (36))){
var inst_21009 = (state_21050[(25)]);
var inst_21013 = cljs.core.chunk_first.call(null,inst_21009);
var inst_21014 = cljs.core.chunk_rest.call(null,inst_21009);
var inst_21015 = cljs.core.count.call(null,inst_21013);
var inst_20990 = inst_21014;
var inst_20991 = inst_21013;
var inst_20992 = inst_21015;
var inst_20993 = (0);
var state_21050__$1 = (function (){var statearr_21085 = state_21050;
(statearr_21085[(20)] = inst_20992);

(statearr_21085[(21)] = inst_20990);

(statearr_21085[(11)] = inst_20993);

(statearr_21085[(12)] = inst_20991);

return statearr_21085;
})();
var statearr_21086_21158 = state_21050__$1;
(statearr_21086_21158[(2)] = null);

(statearr_21086_21158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (41))){
var inst_21009 = (state_21050[(25)]);
var inst_21025 = (state_21050[(2)]);
var inst_21026 = cljs.core.next.call(null,inst_21009);
var inst_20990 = inst_21026;
var inst_20991 = null;
var inst_20992 = (0);
var inst_20993 = (0);
var state_21050__$1 = (function (){var statearr_21087 = state_21050;
(statearr_21087[(27)] = inst_21025);

(statearr_21087[(20)] = inst_20992);

(statearr_21087[(21)] = inst_20990);

(statearr_21087[(11)] = inst_20993);

(statearr_21087[(12)] = inst_20991);

return statearr_21087;
})();
var statearr_21088_21159 = state_21050__$1;
(statearr_21088_21159[(2)] = null);

(statearr_21088_21159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (43))){
var state_21050__$1 = state_21050;
var statearr_21089_21160 = state_21050__$1;
(statearr_21089_21160[(2)] = null);

(statearr_21089_21160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (29))){
var inst_21034 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21090_21161 = state_21050__$1;
(statearr_21090_21161[(2)] = inst_21034);

(statearr_21090_21161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (44))){
var inst_21043 = (state_21050[(2)]);
var state_21050__$1 = (function (){var statearr_21091 = state_21050;
(statearr_21091[(28)] = inst_21043);

return statearr_21091;
})();
var statearr_21092_21162 = state_21050__$1;
(statearr_21092_21162[(2)] = null);

(statearr_21092_21162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (6))){
var inst_20982 = (state_21050[(29)]);
var inst_20981 = cljs.core.deref.call(null,cs);
var inst_20982__$1 = cljs.core.keys.call(null,inst_20981);
var inst_20983 = cljs.core.count.call(null,inst_20982__$1);
var inst_20984 = cljs.core.reset_BANG_.call(null,dctr,inst_20983);
var inst_20989 = cljs.core.seq.call(null,inst_20982__$1);
var inst_20990 = inst_20989;
var inst_20991 = null;
var inst_20992 = (0);
var inst_20993 = (0);
var state_21050__$1 = (function (){var statearr_21093 = state_21050;
(statearr_21093[(30)] = inst_20984);

(statearr_21093[(29)] = inst_20982__$1);

(statearr_21093[(20)] = inst_20992);

(statearr_21093[(21)] = inst_20990);

(statearr_21093[(11)] = inst_20993);

(statearr_21093[(12)] = inst_20991);

return statearr_21093;
})();
var statearr_21094_21163 = state_21050__$1;
(statearr_21094_21163[(2)] = null);

(statearr_21094_21163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (28))){
var inst_21009 = (state_21050[(25)]);
var inst_20990 = (state_21050[(21)]);
var inst_21009__$1 = cljs.core.seq.call(null,inst_20990);
var state_21050__$1 = (function (){var statearr_21095 = state_21050;
(statearr_21095[(25)] = inst_21009__$1);

return statearr_21095;
})();
if(inst_21009__$1){
var statearr_21096_21164 = state_21050__$1;
(statearr_21096_21164[(1)] = (33));

} else {
var statearr_21097_21165 = state_21050__$1;
(statearr_21097_21165[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (25))){
var inst_20992 = (state_21050[(20)]);
var inst_20993 = (state_21050[(11)]);
var inst_20995 = (inst_20993 < inst_20992);
var inst_20996 = inst_20995;
var state_21050__$1 = state_21050;
if(cljs.core.truth_(inst_20996)){
var statearr_21098_21166 = state_21050__$1;
(statearr_21098_21166[(1)] = (27));

} else {
var statearr_21099_21167 = state_21050__$1;
(statearr_21099_21167[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (34))){
var state_21050__$1 = state_21050;
var statearr_21100_21168 = state_21050__$1;
(statearr_21100_21168[(2)] = null);

(statearr_21100_21168[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (17))){
var state_21050__$1 = state_21050;
var statearr_21101_21169 = state_21050__$1;
(statearr_21101_21169[(2)] = null);

(statearr_21101_21169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (3))){
var inst_21048 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21050__$1,inst_21048);
} else {
if((state_val_21051 === (12))){
var inst_20977 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21102_21170 = state_21050__$1;
(statearr_21102_21170[(2)] = inst_20977);

(statearr_21102_21170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (2))){
var state_21050__$1 = state_21050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21050__$1,(4),ch);
} else {
if((state_val_21051 === (23))){
var state_21050__$1 = state_21050;
var statearr_21103_21171 = state_21050__$1;
(statearr_21103_21171[(2)] = null);

(statearr_21103_21171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (35))){
var inst_21032 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21104_21172 = state_21050__$1;
(statearr_21104_21172[(2)] = inst_21032);

(statearr_21104_21172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (19))){
var inst_20951 = (state_21050[(7)]);
var inst_20955 = cljs.core.chunk_first.call(null,inst_20951);
var inst_20956 = cljs.core.chunk_rest.call(null,inst_20951);
var inst_20957 = cljs.core.count.call(null,inst_20955);
var inst_20931 = inst_20956;
var inst_20932 = inst_20955;
var inst_20933 = inst_20957;
var inst_20934 = (0);
var state_21050__$1 = (function (){var statearr_21105 = state_21050;
(statearr_21105[(14)] = inst_20933);

(statearr_21105[(15)] = inst_20931);

(statearr_21105[(16)] = inst_20932);

(statearr_21105[(17)] = inst_20934);

return statearr_21105;
})();
var statearr_21106_21173 = state_21050__$1;
(statearr_21106_21173[(2)] = null);

(statearr_21106_21173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (11))){
var inst_20951 = (state_21050[(7)]);
var inst_20931 = (state_21050[(15)]);
var inst_20951__$1 = cljs.core.seq.call(null,inst_20931);
var state_21050__$1 = (function (){var statearr_21107 = state_21050;
(statearr_21107[(7)] = inst_20951__$1);

return statearr_21107;
})();
if(inst_20951__$1){
var statearr_21108_21174 = state_21050__$1;
(statearr_21108_21174[(1)] = (16));

} else {
var statearr_21109_21175 = state_21050__$1;
(statearr_21109_21175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (9))){
var inst_20979 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21110_21176 = state_21050__$1;
(statearr_21110_21176[(2)] = inst_20979);

(statearr_21110_21176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (5))){
var inst_20929 = cljs.core.deref.call(null,cs);
var inst_20930 = cljs.core.seq.call(null,inst_20929);
var inst_20931 = inst_20930;
var inst_20932 = null;
var inst_20933 = (0);
var inst_20934 = (0);
var state_21050__$1 = (function (){var statearr_21111 = state_21050;
(statearr_21111[(14)] = inst_20933);

(statearr_21111[(15)] = inst_20931);

(statearr_21111[(16)] = inst_20932);

(statearr_21111[(17)] = inst_20934);

return statearr_21111;
})();
var statearr_21112_21177 = state_21050__$1;
(statearr_21112_21177[(2)] = null);

(statearr_21112_21177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (14))){
var state_21050__$1 = state_21050;
var statearr_21113_21178 = state_21050__$1;
(statearr_21113_21178[(2)] = null);

(statearr_21113_21178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (45))){
var inst_21040 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21114_21179 = state_21050__$1;
(statearr_21114_21179[(2)] = inst_21040);

(statearr_21114_21179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (26))){
var inst_20982 = (state_21050[(29)]);
var inst_21036 = (state_21050[(2)]);
var inst_21037 = cljs.core.seq.call(null,inst_20982);
var state_21050__$1 = (function (){var statearr_21115 = state_21050;
(statearr_21115[(31)] = inst_21036);

return statearr_21115;
})();
if(inst_21037){
var statearr_21116_21180 = state_21050__$1;
(statearr_21116_21180[(1)] = (42));

} else {
var statearr_21117_21181 = state_21050__$1;
(statearr_21117_21181[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (16))){
var inst_20951 = (state_21050[(7)]);
var inst_20953 = cljs.core.chunked_seq_QMARK_.call(null,inst_20951);
var state_21050__$1 = state_21050;
if(inst_20953){
var statearr_21118_21182 = state_21050__$1;
(statearr_21118_21182[(1)] = (19));

} else {
var statearr_21119_21183 = state_21050__$1;
(statearr_21119_21183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (38))){
var inst_21029 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21120_21184 = state_21050__$1;
(statearr_21120_21184[(2)] = inst_21029);

(statearr_21120_21184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (30))){
var state_21050__$1 = state_21050;
var statearr_21121_21185 = state_21050__$1;
(statearr_21121_21185[(2)] = null);

(statearr_21121_21185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (10))){
var inst_20932 = (state_21050[(16)]);
var inst_20934 = (state_21050[(17)]);
var inst_20940 = cljs.core._nth.call(null,inst_20932,inst_20934);
var inst_20941 = cljs.core.nth.call(null,inst_20940,(0),null);
var inst_20942 = cljs.core.nth.call(null,inst_20940,(1),null);
var state_21050__$1 = (function (){var statearr_21122 = state_21050;
(statearr_21122[(26)] = inst_20941);

return statearr_21122;
})();
if(cljs.core.truth_(inst_20942)){
var statearr_21123_21186 = state_21050__$1;
(statearr_21123_21186[(1)] = (13));

} else {
var statearr_21124_21187 = state_21050__$1;
(statearr_21124_21187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (18))){
var inst_20975 = (state_21050[(2)]);
var state_21050__$1 = state_21050;
var statearr_21125_21188 = state_21050__$1;
(statearr_21125_21188[(2)] = inst_20975);

(statearr_21125_21188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (42))){
var state_21050__$1 = state_21050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21050__$1,(45),dchan);
} else {
if((state_val_21051 === (37))){
var inst_21009 = (state_21050[(25)]);
var inst_20922 = (state_21050[(9)]);
var inst_21018 = (state_21050[(23)]);
var inst_21018__$1 = cljs.core.first.call(null,inst_21009);
var inst_21019 = cljs.core.async.put_BANG_.call(null,inst_21018__$1,inst_20922,done);
var state_21050__$1 = (function (){var statearr_21126 = state_21050;
(statearr_21126[(23)] = inst_21018__$1);

return statearr_21126;
})();
if(cljs.core.truth_(inst_21019)){
var statearr_21127_21189 = state_21050__$1;
(statearr_21127_21189[(1)] = (39));

} else {
var statearr_21128_21190 = state_21050__$1;
(statearr_21128_21190[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21051 === (8))){
var inst_20933 = (state_21050[(14)]);
var inst_20934 = (state_21050[(17)]);
var inst_20936 = (inst_20934 < inst_20933);
var inst_20937 = inst_20936;
var state_21050__$1 = state_21050;
if(cljs.core.truth_(inst_20937)){
var statearr_21129_21191 = state_21050__$1;
(statearr_21129_21191[(1)] = (10));

} else {
var statearr_21130_21192 = state_21050__$1;
(statearr_21130_21192[(1)] = (11));

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
});})(c__19777__auto___21138,cs,m,dchan,dctr,done))
;
return ((function (switch__19721__auto__,c__19777__auto___21138,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19722__auto__ = null;
var cljs$core$async$mult_$_state_machine__19722__auto____0 = (function (){
var statearr_21134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21134[(0)] = cljs$core$async$mult_$_state_machine__19722__auto__);

(statearr_21134[(1)] = (1));

return statearr_21134;
});
var cljs$core$async$mult_$_state_machine__19722__auto____1 = (function (state_21050){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_21050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e21135){if((e21135 instanceof Object)){
var ex__19725__auto__ = e21135;
var statearr_21136_21193 = state_21050;
(statearr_21136_21193[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21194 = state_21050;
state_21050 = G__21194;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19722__auto__ = function(state_21050){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19722__auto____1.call(this,state_21050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19722__auto____0;
cljs$core$async$mult_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19722__auto____1;
return cljs$core$async$mult_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___21138,cs,m,dchan,dctr,done))
})();
var state__19779__auto__ = (function (){var statearr_21137 = f__19778__auto__.call(null);
(statearr_21137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___21138);

return statearr_21137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___21138,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21196 = {};
return obj21196;
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
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21197){
var map__21202 = p__21197;
var map__21202__$1 = ((cljs.core.seq_QMARK_.call(null,map__21202))?cljs.core.apply.call(null,cljs.core.hash_map,map__21202):map__21202);
var opts = map__21202__$1;
var statearr_21203_21206 = state;
(statearr_21203_21206[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21202,map__21202__$1,opts){
return (function (val){
var statearr_21204_21207 = state;
(statearr_21204_21207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21202,map__21202__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21205_21208 = state;
(statearr_21205_21208[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21197 = null;
if (arguments.length > 3) {
var G__21209__i = 0, G__21209__a = new Array(arguments.length -  3);
while (G__21209__i < G__21209__a.length) {G__21209__a[G__21209__i] = arguments[G__21209__i + 3]; ++G__21209__i;}
  p__21197 = new cljs.core.IndexedSeq(G__21209__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21197);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21210){
var state = cljs.core.first(arglist__21210);
arglist__21210 = cljs.core.next(arglist__21210);
var cont_block = cljs.core.first(arglist__21210);
arglist__21210 = cljs.core.next(arglist__21210);
var ports = cljs.core.first(arglist__21210);
var p__21197 = cljs.core.rest(arglist__21210);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__21197);
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
if(typeof cljs.core.async.t21330 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21330 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21331){
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
this.meta21331 = meta21331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21330.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21330.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21330.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21332){
var self__ = this;
var _21332__$1 = this;
return self__.meta21331;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21332,meta21331__$1){
var self__ = this;
var _21332__$1 = this;
return (new cljs.core.async.t21330(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21331__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21330.cljs$lang$type = true;

cljs.core.async.t21330.cljs$lang$ctorStr = "cljs.core.async/t21330";

cljs.core.async.t21330.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t21330");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21330 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t21330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21331){
return (new cljs.core.async.t21330(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21331));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21330(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19777__auto___21449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___21449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___21449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21402){
var state_val_21403 = (state_21402[(1)]);
if((state_val_21403 === (7))){
var inst_21346 = (state_21402[(7)]);
var inst_21351 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21346);
var state_21402__$1 = state_21402;
var statearr_21404_21450 = state_21402__$1;
(statearr_21404_21450[(2)] = inst_21351);

(statearr_21404_21450[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (20))){
var inst_21361 = (state_21402[(8)]);
var state_21402__$1 = state_21402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21402__$1,(23),out,inst_21361);
} else {
if((state_val_21403 === (1))){
var inst_21336 = (state_21402[(9)]);
var inst_21336__$1 = calc_state.call(null);
var inst_21337 = cljs.core.seq_QMARK_.call(null,inst_21336__$1);
var state_21402__$1 = (function (){var statearr_21405 = state_21402;
(statearr_21405[(9)] = inst_21336__$1);

return statearr_21405;
})();
if(inst_21337){
var statearr_21406_21451 = state_21402__$1;
(statearr_21406_21451[(1)] = (2));

} else {
var statearr_21407_21452 = state_21402__$1;
(statearr_21407_21452[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (24))){
var inst_21354 = (state_21402[(10)]);
var inst_21346 = inst_21354;
var state_21402__$1 = (function (){var statearr_21408 = state_21402;
(statearr_21408[(7)] = inst_21346);

return statearr_21408;
})();
var statearr_21409_21453 = state_21402__$1;
(statearr_21409_21453[(2)] = null);

(statearr_21409_21453[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (4))){
var inst_21336 = (state_21402[(9)]);
var inst_21342 = (state_21402[(2)]);
var inst_21343 = cljs.core.get.call(null,inst_21342,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21344 = cljs.core.get.call(null,inst_21342,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21345 = cljs.core.get.call(null,inst_21342,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21346 = inst_21336;
var state_21402__$1 = (function (){var statearr_21410 = state_21402;
(statearr_21410[(11)] = inst_21343);

(statearr_21410[(12)] = inst_21345);

(statearr_21410[(7)] = inst_21346);

(statearr_21410[(13)] = inst_21344);

return statearr_21410;
})();
var statearr_21411_21454 = state_21402__$1;
(statearr_21411_21454[(2)] = null);

(statearr_21411_21454[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (15))){
var state_21402__$1 = state_21402;
var statearr_21412_21455 = state_21402__$1;
(statearr_21412_21455[(2)] = null);

(statearr_21412_21455[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (21))){
var inst_21354 = (state_21402[(10)]);
var inst_21346 = inst_21354;
var state_21402__$1 = (function (){var statearr_21413 = state_21402;
(statearr_21413[(7)] = inst_21346);

return statearr_21413;
})();
var statearr_21414_21456 = state_21402__$1;
(statearr_21414_21456[(2)] = null);

(statearr_21414_21456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (13))){
var inst_21398 = (state_21402[(2)]);
var state_21402__$1 = state_21402;
var statearr_21415_21457 = state_21402__$1;
(statearr_21415_21457[(2)] = inst_21398);

(statearr_21415_21457[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (22))){
var inst_21396 = (state_21402[(2)]);
var state_21402__$1 = state_21402;
var statearr_21416_21458 = state_21402__$1;
(statearr_21416_21458[(2)] = inst_21396);

(statearr_21416_21458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (6))){
var inst_21400 = (state_21402[(2)]);
var state_21402__$1 = state_21402;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21402__$1,inst_21400);
} else {
if((state_val_21403 === (25))){
var state_21402__$1 = state_21402;
var statearr_21417_21459 = state_21402__$1;
(statearr_21417_21459[(2)] = null);

(statearr_21417_21459[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (17))){
var inst_21376 = (state_21402[(14)]);
var state_21402__$1 = state_21402;
var statearr_21418_21460 = state_21402__$1;
(statearr_21418_21460[(2)] = inst_21376);

(statearr_21418_21460[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (3))){
var inst_21336 = (state_21402[(9)]);
var state_21402__$1 = state_21402;
var statearr_21419_21461 = state_21402__$1;
(statearr_21419_21461[(2)] = inst_21336);

(statearr_21419_21461[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (12))){
var inst_21376 = (state_21402[(14)]);
var inst_21357 = (state_21402[(15)]);
var inst_21362 = (state_21402[(16)]);
var inst_21376__$1 = inst_21357.call(null,inst_21362);
var state_21402__$1 = (function (){var statearr_21420 = state_21402;
(statearr_21420[(14)] = inst_21376__$1);

return statearr_21420;
})();
if(cljs.core.truth_(inst_21376__$1)){
var statearr_21421_21462 = state_21402__$1;
(statearr_21421_21462[(1)] = (17));

} else {
var statearr_21422_21463 = state_21402__$1;
(statearr_21422_21463[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (2))){
var inst_21336 = (state_21402[(9)]);
var inst_21339 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21336);
var state_21402__$1 = state_21402;
var statearr_21423_21464 = state_21402__$1;
(statearr_21423_21464[(2)] = inst_21339);

(statearr_21423_21464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (23))){
var inst_21387 = (state_21402[(2)]);
var state_21402__$1 = state_21402;
if(cljs.core.truth_(inst_21387)){
var statearr_21424_21465 = state_21402__$1;
(statearr_21424_21465[(1)] = (24));

} else {
var statearr_21425_21466 = state_21402__$1;
(statearr_21425_21466[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (19))){
var inst_21384 = (state_21402[(2)]);
var state_21402__$1 = state_21402;
if(cljs.core.truth_(inst_21384)){
var statearr_21426_21467 = state_21402__$1;
(statearr_21426_21467[(1)] = (20));

} else {
var statearr_21427_21468 = state_21402__$1;
(statearr_21427_21468[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (11))){
var inst_21361 = (state_21402[(8)]);
var inst_21367 = (inst_21361 == null);
var state_21402__$1 = state_21402;
if(cljs.core.truth_(inst_21367)){
var statearr_21428_21469 = state_21402__$1;
(statearr_21428_21469[(1)] = (14));

} else {
var statearr_21429_21470 = state_21402__$1;
(statearr_21429_21470[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (9))){
var inst_21354 = (state_21402[(10)]);
var inst_21354__$1 = (state_21402[(2)]);
var inst_21355 = cljs.core.get.call(null,inst_21354__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21356 = cljs.core.get.call(null,inst_21354__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21357 = cljs.core.get.call(null,inst_21354__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21402__$1 = (function (){var statearr_21430 = state_21402;
(statearr_21430[(10)] = inst_21354__$1);

(statearr_21430[(17)] = inst_21356);

(statearr_21430[(15)] = inst_21357);

return statearr_21430;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21402__$1,(10),inst_21355);
} else {
if((state_val_21403 === (5))){
var inst_21346 = (state_21402[(7)]);
var inst_21349 = cljs.core.seq_QMARK_.call(null,inst_21346);
var state_21402__$1 = state_21402;
if(inst_21349){
var statearr_21431_21471 = state_21402__$1;
(statearr_21431_21471[(1)] = (7));

} else {
var statearr_21432_21472 = state_21402__$1;
(statearr_21432_21472[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (14))){
var inst_21362 = (state_21402[(16)]);
var inst_21369 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21362);
var state_21402__$1 = state_21402;
var statearr_21433_21473 = state_21402__$1;
(statearr_21433_21473[(2)] = inst_21369);

(statearr_21433_21473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (26))){
var inst_21392 = (state_21402[(2)]);
var state_21402__$1 = state_21402;
var statearr_21434_21474 = state_21402__$1;
(statearr_21434_21474[(2)] = inst_21392);

(statearr_21434_21474[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (16))){
var inst_21372 = (state_21402[(2)]);
var inst_21373 = calc_state.call(null);
var inst_21346 = inst_21373;
var state_21402__$1 = (function (){var statearr_21435 = state_21402;
(statearr_21435[(18)] = inst_21372);

(statearr_21435[(7)] = inst_21346);

return statearr_21435;
})();
var statearr_21436_21475 = state_21402__$1;
(statearr_21436_21475[(2)] = null);

(statearr_21436_21475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (10))){
var inst_21361 = (state_21402[(8)]);
var inst_21362 = (state_21402[(16)]);
var inst_21360 = (state_21402[(2)]);
var inst_21361__$1 = cljs.core.nth.call(null,inst_21360,(0),null);
var inst_21362__$1 = cljs.core.nth.call(null,inst_21360,(1),null);
var inst_21363 = (inst_21361__$1 == null);
var inst_21364 = cljs.core._EQ_.call(null,inst_21362__$1,change);
var inst_21365 = (inst_21363) || (inst_21364);
var state_21402__$1 = (function (){var statearr_21437 = state_21402;
(statearr_21437[(8)] = inst_21361__$1);

(statearr_21437[(16)] = inst_21362__$1);

return statearr_21437;
})();
if(cljs.core.truth_(inst_21365)){
var statearr_21438_21476 = state_21402__$1;
(statearr_21438_21476[(1)] = (11));

} else {
var statearr_21439_21477 = state_21402__$1;
(statearr_21439_21477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (18))){
var inst_21356 = (state_21402[(17)]);
var inst_21357 = (state_21402[(15)]);
var inst_21362 = (state_21402[(16)]);
var inst_21379 = cljs.core.empty_QMARK_.call(null,inst_21357);
var inst_21380 = inst_21356.call(null,inst_21362);
var inst_21381 = cljs.core.not.call(null,inst_21380);
var inst_21382 = (inst_21379) && (inst_21381);
var state_21402__$1 = state_21402;
var statearr_21440_21478 = state_21402__$1;
(statearr_21440_21478[(2)] = inst_21382);

(statearr_21440_21478[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21403 === (8))){
var inst_21346 = (state_21402[(7)]);
var state_21402__$1 = state_21402;
var statearr_21441_21479 = state_21402__$1;
(statearr_21441_21479[(2)] = inst_21346);

(statearr_21441_21479[(1)] = (9));


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
});})(c__19777__auto___21449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19721__auto__,c__19777__auto___21449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19722__auto__ = null;
var cljs$core$async$mix_$_state_machine__19722__auto____0 = (function (){
var statearr_21445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21445[(0)] = cljs$core$async$mix_$_state_machine__19722__auto__);

(statearr_21445[(1)] = (1));

return statearr_21445;
});
var cljs$core$async$mix_$_state_machine__19722__auto____1 = (function (state_21402){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_21402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e21446){if((e21446 instanceof Object)){
var ex__19725__auto__ = e21446;
var statearr_21447_21480 = state_21402;
(statearr_21447_21480[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21481 = state_21402;
state_21402 = G__21481;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19722__auto__ = function(state_21402){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19722__auto____1.call(this,state_21402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19722__auto____0;
cljs$core$async$mix_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19722__auto____1;
return cljs$core$async$mix_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___21449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19779__auto__ = (function (){var statearr_21448 = f__19778__auto__.call(null);
(statearr_21448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___21449);

return statearr_21448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___21449,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21483 = {};
return obj21483;
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
return (function (p1__21484_SHARP_){
if(cljs.core.truth_(p1__21484_SHARP_.call(null,topic))){
return p1__21484_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21484_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17787__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21607 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21607 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21608){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21608 = meta21608;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21607.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21607.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21607.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t21607.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21607.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21607.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21607.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21609){
var self__ = this;
var _21609__$1 = this;
return self__.meta21608;
});})(mults,ensure_mult))
;

cljs.core.async.t21607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21609,meta21608__$1){
var self__ = this;
var _21609__$1 = this;
return (new cljs.core.async.t21607(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21608__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21607.cljs$lang$type = true;

cljs.core.async.t21607.cljs$lang$ctorStr = "cljs.core.async/t21607";

cljs.core.async.t21607.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t21607");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21607 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t21607(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21608){
return (new cljs.core.async.t21607(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21608));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21607(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19777__auto___21729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___21729,mults,ensure_mult,p){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___21729,mults,ensure_mult,p){
return (function (state_21681){
var state_val_21682 = (state_21681[(1)]);
if((state_val_21682 === (7))){
var inst_21677 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21683_21730 = state_21681__$1;
(statearr_21683_21730[(2)] = inst_21677);

(statearr_21683_21730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (20))){
var state_21681__$1 = state_21681;
var statearr_21684_21731 = state_21681__$1;
(statearr_21684_21731[(2)] = null);

(statearr_21684_21731[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (1))){
var state_21681__$1 = state_21681;
var statearr_21685_21732 = state_21681__$1;
(statearr_21685_21732[(2)] = null);

(statearr_21685_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (24))){
var inst_21660 = (state_21681[(7)]);
var inst_21669 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21660);
var state_21681__$1 = state_21681;
var statearr_21686_21733 = state_21681__$1;
(statearr_21686_21733[(2)] = inst_21669);

(statearr_21686_21733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (4))){
var inst_21612 = (state_21681[(8)]);
var inst_21612__$1 = (state_21681[(2)]);
var inst_21613 = (inst_21612__$1 == null);
var state_21681__$1 = (function (){var statearr_21687 = state_21681;
(statearr_21687[(8)] = inst_21612__$1);

return statearr_21687;
})();
if(cljs.core.truth_(inst_21613)){
var statearr_21688_21734 = state_21681__$1;
(statearr_21688_21734[(1)] = (5));

} else {
var statearr_21689_21735 = state_21681__$1;
(statearr_21689_21735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (15))){
var inst_21654 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21690_21736 = state_21681__$1;
(statearr_21690_21736[(2)] = inst_21654);

(statearr_21690_21736[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (21))){
var inst_21674 = (state_21681[(2)]);
var state_21681__$1 = (function (){var statearr_21691 = state_21681;
(statearr_21691[(9)] = inst_21674);

return statearr_21691;
})();
var statearr_21692_21737 = state_21681__$1;
(statearr_21692_21737[(2)] = null);

(statearr_21692_21737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (13))){
var inst_21636 = (state_21681[(10)]);
var inst_21638 = cljs.core.chunked_seq_QMARK_.call(null,inst_21636);
var state_21681__$1 = state_21681;
if(inst_21638){
var statearr_21693_21738 = state_21681__$1;
(statearr_21693_21738[(1)] = (16));

} else {
var statearr_21694_21739 = state_21681__$1;
(statearr_21694_21739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (22))){
var inst_21666 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21666)){
var statearr_21695_21740 = state_21681__$1;
(statearr_21695_21740[(1)] = (23));

} else {
var statearr_21696_21741 = state_21681__$1;
(statearr_21696_21741[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (6))){
var inst_21612 = (state_21681[(8)]);
var inst_21660 = (state_21681[(7)]);
var inst_21662 = (state_21681[(11)]);
var inst_21660__$1 = topic_fn.call(null,inst_21612);
var inst_21661 = cljs.core.deref.call(null,mults);
var inst_21662__$1 = cljs.core.get.call(null,inst_21661,inst_21660__$1);
var state_21681__$1 = (function (){var statearr_21697 = state_21681;
(statearr_21697[(7)] = inst_21660__$1);

(statearr_21697[(11)] = inst_21662__$1);

return statearr_21697;
})();
if(cljs.core.truth_(inst_21662__$1)){
var statearr_21698_21742 = state_21681__$1;
(statearr_21698_21742[(1)] = (19));

} else {
var statearr_21699_21743 = state_21681__$1;
(statearr_21699_21743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (25))){
var inst_21671 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21700_21744 = state_21681__$1;
(statearr_21700_21744[(2)] = inst_21671);

(statearr_21700_21744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (17))){
var inst_21636 = (state_21681[(10)]);
var inst_21645 = cljs.core.first.call(null,inst_21636);
var inst_21646 = cljs.core.async.muxch_STAR_.call(null,inst_21645);
var inst_21647 = cljs.core.async.close_BANG_.call(null,inst_21646);
var inst_21648 = cljs.core.next.call(null,inst_21636);
var inst_21622 = inst_21648;
var inst_21623 = null;
var inst_21624 = (0);
var inst_21625 = (0);
var state_21681__$1 = (function (){var statearr_21701 = state_21681;
(statearr_21701[(12)] = inst_21623);

(statearr_21701[(13)] = inst_21625);

(statearr_21701[(14)] = inst_21622);

(statearr_21701[(15)] = inst_21647);

(statearr_21701[(16)] = inst_21624);

return statearr_21701;
})();
var statearr_21702_21745 = state_21681__$1;
(statearr_21702_21745[(2)] = null);

(statearr_21702_21745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (3))){
var inst_21679 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21681__$1,inst_21679);
} else {
if((state_val_21682 === (12))){
var inst_21656 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21703_21746 = state_21681__$1;
(statearr_21703_21746[(2)] = inst_21656);

(statearr_21703_21746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (2))){
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21681__$1,(4),ch);
} else {
if((state_val_21682 === (23))){
var state_21681__$1 = state_21681;
var statearr_21704_21747 = state_21681__$1;
(statearr_21704_21747[(2)] = null);

(statearr_21704_21747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (19))){
var inst_21612 = (state_21681[(8)]);
var inst_21662 = (state_21681[(11)]);
var inst_21664 = cljs.core.async.muxch_STAR_.call(null,inst_21662);
var state_21681__$1 = state_21681;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21681__$1,(22),inst_21664,inst_21612);
} else {
if((state_val_21682 === (11))){
var inst_21636 = (state_21681[(10)]);
var inst_21622 = (state_21681[(14)]);
var inst_21636__$1 = cljs.core.seq.call(null,inst_21622);
var state_21681__$1 = (function (){var statearr_21705 = state_21681;
(statearr_21705[(10)] = inst_21636__$1);

return statearr_21705;
})();
if(inst_21636__$1){
var statearr_21706_21748 = state_21681__$1;
(statearr_21706_21748[(1)] = (13));

} else {
var statearr_21707_21749 = state_21681__$1;
(statearr_21707_21749[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (9))){
var inst_21658 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21708_21750 = state_21681__$1;
(statearr_21708_21750[(2)] = inst_21658);

(statearr_21708_21750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (5))){
var inst_21619 = cljs.core.deref.call(null,mults);
var inst_21620 = cljs.core.vals.call(null,inst_21619);
var inst_21621 = cljs.core.seq.call(null,inst_21620);
var inst_21622 = inst_21621;
var inst_21623 = null;
var inst_21624 = (0);
var inst_21625 = (0);
var state_21681__$1 = (function (){var statearr_21709 = state_21681;
(statearr_21709[(12)] = inst_21623);

(statearr_21709[(13)] = inst_21625);

(statearr_21709[(14)] = inst_21622);

(statearr_21709[(16)] = inst_21624);

return statearr_21709;
})();
var statearr_21710_21751 = state_21681__$1;
(statearr_21710_21751[(2)] = null);

(statearr_21710_21751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (14))){
var state_21681__$1 = state_21681;
var statearr_21714_21752 = state_21681__$1;
(statearr_21714_21752[(2)] = null);

(statearr_21714_21752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (16))){
var inst_21636 = (state_21681[(10)]);
var inst_21640 = cljs.core.chunk_first.call(null,inst_21636);
var inst_21641 = cljs.core.chunk_rest.call(null,inst_21636);
var inst_21642 = cljs.core.count.call(null,inst_21640);
var inst_21622 = inst_21641;
var inst_21623 = inst_21640;
var inst_21624 = inst_21642;
var inst_21625 = (0);
var state_21681__$1 = (function (){var statearr_21715 = state_21681;
(statearr_21715[(12)] = inst_21623);

(statearr_21715[(13)] = inst_21625);

(statearr_21715[(14)] = inst_21622);

(statearr_21715[(16)] = inst_21624);

return statearr_21715;
})();
var statearr_21716_21753 = state_21681__$1;
(statearr_21716_21753[(2)] = null);

(statearr_21716_21753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (10))){
var inst_21623 = (state_21681[(12)]);
var inst_21625 = (state_21681[(13)]);
var inst_21622 = (state_21681[(14)]);
var inst_21624 = (state_21681[(16)]);
var inst_21630 = cljs.core._nth.call(null,inst_21623,inst_21625);
var inst_21631 = cljs.core.async.muxch_STAR_.call(null,inst_21630);
var inst_21632 = cljs.core.async.close_BANG_.call(null,inst_21631);
var inst_21633 = (inst_21625 + (1));
var tmp21711 = inst_21623;
var tmp21712 = inst_21622;
var tmp21713 = inst_21624;
var inst_21622__$1 = tmp21712;
var inst_21623__$1 = tmp21711;
var inst_21624__$1 = tmp21713;
var inst_21625__$1 = inst_21633;
var state_21681__$1 = (function (){var statearr_21717 = state_21681;
(statearr_21717[(17)] = inst_21632);

(statearr_21717[(12)] = inst_21623__$1);

(statearr_21717[(13)] = inst_21625__$1);

(statearr_21717[(14)] = inst_21622__$1);

(statearr_21717[(16)] = inst_21624__$1);

return statearr_21717;
})();
var statearr_21718_21754 = state_21681__$1;
(statearr_21718_21754[(2)] = null);

(statearr_21718_21754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (18))){
var inst_21651 = (state_21681[(2)]);
var state_21681__$1 = state_21681;
var statearr_21719_21755 = state_21681__$1;
(statearr_21719_21755[(2)] = inst_21651);

(statearr_21719_21755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21682 === (8))){
var inst_21625 = (state_21681[(13)]);
var inst_21624 = (state_21681[(16)]);
var inst_21627 = (inst_21625 < inst_21624);
var inst_21628 = inst_21627;
var state_21681__$1 = state_21681;
if(cljs.core.truth_(inst_21628)){
var statearr_21720_21756 = state_21681__$1;
(statearr_21720_21756[(1)] = (10));

} else {
var statearr_21721_21757 = state_21681__$1;
(statearr_21721_21757[(1)] = (11));

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
});})(c__19777__auto___21729,mults,ensure_mult,p))
;
return ((function (switch__19721__auto__,c__19777__auto___21729,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__19722__auto__ = null;
var cljs$core$async$pub_$_state_machine__19722__auto____0 = (function (){
var statearr_21725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21725[(0)] = cljs$core$async$pub_$_state_machine__19722__auto__);

(statearr_21725[(1)] = (1));

return statearr_21725;
});
var cljs$core$async$pub_$_state_machine__19722__auto____1 = (function (state_21681){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_21681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e21726){if((e21726 instanceof Object)){
var ex__19725__auto__ = e21726;
var statearr_21727_21758 = state_21681;
(statearr_21727_21758[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21759 = state_21681;
state_21681 = G__21759;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__19722__auto__ = function(state_21681){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__19722__auto____1.call(this,state_21681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__19722__auto____0;
cljs$core$async$pub_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__19722__auto____1;
return cljs$core$async$pub_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___21729,mults,ensure_mult,p))
})();
var state__19779__auto__ = (function (){var statearr_21728 = f__19778__auto__.call(null);
(statearr_21728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___21729);

return statearr_21728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___21729,mults,ensure_mult,p))
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
var c__19777__auto___21896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___21896,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___21896,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21866){
var state_val_21867 = (state_21866[(1)]);
if((state_val_21867 === (7))){
var state_21866__$1 = state_21866;
var statearr_21868_21897 = state_21866__$1;
(statearr_21868_21897[(2)] = null);

(statearr_21868_21897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (1))){
var state_21866__$1 = state_21866;
var statearr_21869_21898 = state_21866__$1;
(statearr_21869_21898[(2)] = null);

(statearr_21869_21898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (4))){
var inst_21830 = (state_21866[(7)]);
var inst_21832 = (inst_21830 < cnt);
var state_21866__$1 = state_21866;
if(cljs.core.truth_(inst_21832)){
var statearr_21870_21899 = state_21866__$1;
(statearr_21870_21899[(1)] = (6));

} else {
var statearr_21871_21900 = state_21866__$1;
(statearr_21871_21900[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (15))){
var inst_21862 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
var statearr_21872_21901 = state_21866__$1;
(statearr_21872_21901[(2)] = inst_21862);

(statearr_21872_21901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (13))){
var inst_21855 = cljs.core.async.close_BANG_.call(null,out);
var state_21866__$1 = state_21866;
var statearr_21873_21902 = state_21866__$1;
(statearr_21873_21902[(2)] = inst_21855);

(statearr_21873_21902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (6))){
var state_21866__$1 = state_21866;
var statearr_21874_21903 = state_21866__$1;
(statearr_21874_21903[(2)] = null);

(statearr_21874_21903[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (3))){
var inst_21864 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21866__$1,inst_21864);
} else {
if((state_val_21867 === (12))){
var inst_21852 = (state_21866[(8)]);
var inst_21852__$1 = (state_21866[(2)]);
var inst_21853 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21852__$1);
var state_21866__$1 = (function (){var statearr_21875 = state_21866;
(statearr_21875[(8)] = inst_21852__$1);

return statearr_21875;
})();
if(cljs.core.truth_(inst_21853)){
var statearr_21876_21904 = state_21866__$1;
(statearr_21876_21904[(1)] = (13));

} else {
var statearr_21877_21905 = state_21866__$1;
(statearr_21877_21905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (2))){
var inst_21829 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21830 = (0);
var state_21866__$1 = (function (){var statearr_21878 = state_21866;
(statearr_21878[(7)] = inst_21830);

(statearr_21878[(9)] = inst_21829);

return statearr_21878;
})();
var statearr_21879_21906 = state_21866__$1;
(statearr_21879_21906[(2)] = null);

(statearr_21879_21906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (11))){
var inst_21830 = (state_21866[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21866,(10),Object,null,(9));
var inst_21839 = chs__$1.call(null,inst_21830);
var inst_21840 = done.call(null,inst_21830);
var inst_21841 = cljs.core.async.take_BANG_.call(null,inst_21839,inst_21840);
var state_21866__$1 = state_21866;
var statearr_21880_21907 = state_21866__$1;
(statearr_21880_21907[(2)] = inst_21841);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (9))){
var inst_21830 = (state_21866[(7)]);
var inst_21843 = (state_21866[(2)]);
var inst_21844 = (inst_21830 + (1));
var inst_21830__$1 = inst_21844;
var state_21866__$1 = (function (){var statearr_21881 = state_21866;
(statearr_21881[(7)] = inst_21830__$1);

(statearr_21881[(10)] = inst_21843);

return statearr_21881;
})();
var statearr_21882_21908 = state_21866__$1;
(statearr_21882_21908[(2)] = null);

(statearr_21882_21908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (5))){
var inst_21850 = (state_21866[(2)]);
var state_21866__$1 = (function (){var statearr_21883 = state_21866;
(statearr_21883[(11)] = inst_21850);

return statearr_21883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21866__$1,(12),dchan);
} else {
if((state_val_21867 === (14))){
var inst_21852 = (state_21866[(8)]);
var inst_21857 = cljs.core.apply.call(null,f,inst_21852);
var state_21866__$1 = state_21866;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21866__$1,(16),out,inst_21857);
} else {
if((state_val_21867 === (16))){
var inst_21859 = (state_21866[(2)]);
var state_21866__$1 = (function (){var statearr_21884 = state_21866;
(statearr_21884[(12)] = inst_21859);

return statearr_21884;
})();
var statearr_21885_21909 = state_21866__$1;
(statearr_21885_21909[(2)] = null);

(statearr_21885_21909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (10))){
var inst_21834 = (state_21866[(2)]);
var inst_21835 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21866__$1 = (function (){var statearr_21886 = state_21866;
(statearr_21886[(13)] = inst_21834);

return statearr_21886;
})();
var statearr_21887_21910 = state_21866__$1;
(statearr_21887_21910[(2)] = inst_21835);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21866__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21867 === (8))){
var inst_21848 = (state_21866[(2)]);
var state_21866__$1 = state_21866;
var statearr_21888_21911 = state_21866__$1;
(statearr_21888_21911[(2)] = inst_21848);

(statearr_21888_21911[(1)] = (5));


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
});})(c__19777__auto___21896,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19721__auto__,c__19777__auto___21896,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__19722__auto__ = null;
var cljs$core$async$map_$_state_machine__19722__auto____0 = (function (){
var statearr_21892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21892[(0)] = cljs$core$async$map_$_state_machine__19722__auto__);

(statearr_21892[(1)] = (1));

return statearr_21892;
});
var cljs$core$async$map_$_state_machine__19722__auto____1 = (function (state_21866){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_21866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e21893){if((e21893 instanceof Object)){
var ex__19725__auto__ = e21893;
var statearr_21894_21912 = state_21866;
(statearr_21894_21912[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21913 = state_21866;
state_21866 = G__21913;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__19722__auto__ = function(state_21866){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__19722__auto____1.call(this,state_21866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__19722__auto____0;
cljs$core$async$map_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__19722__auto____1;
return cljs$core$async$map_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___21896,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19779__auto__ = (function (){var statearr_21895 = f__19778__auto__.call(null);
(statearr_21895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___21896);

return statearr_21895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___21896,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__19777__auto___22021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___22021,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___22021,out){
return (function (state_21997){
var state_val_21998 = (state_21997[(1)]);
if((state_val_21998 === (7))){
var inst_21976 = (state_21997[(7)]);
var inst_21977 = (state_21997[(8)]);
var inst_21976__$1 = (state_21997[(2)]);
var inst_21977__$1 = cljs.core.nth.call(null,inst_21976__$1,(0),null);
var inst_21978 = cljs.core.nth.call(null,inst_21976__$1,(1),null);
var inst_21979 = (inst_21977__$1 == null);
var state_21997__$1 = (function (){var statearr_21999 = state_21997;
(statearr_21999[(7)] = inst_21976__$1);

(statearr_21999[(9)] = inst_21978);

(statearr_21999[(8)] = inst_21977__$1);

return statearr_21999;
})();
if(cljs.core.truth_(inst_21979)){
var statearr_22000_22022 = state_21997__$1;
(statearr_22000_22022[(1)] = (8));

} else {
var statearr_22001_22023 = state_21997__$1;
(statearr_22001_22023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (1))){
var inst_21968 = cljs.core.vec.call(null,chs);
var inst_21969 = inst_21968;
var state_21997__$1 = (function (){var statearr_22002 = state_21997;
(statearr_22002[(10)] = inst_21969);

return statearr_22002;
})();
var statearr_22003_22024 = state_21997__$1;
(statearr_22003_22024[(2)] = null);

(statearr_22003_22024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (4))){
var inst_21969 = (state_21997[(10)]);
var state_21997__$1 = state_21997;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21997__$1,(7),inst_21969);
} else {
if((state_val_21998 === (6))){
var inst_21993 = (state_21997[(2)]);
var state_21997__$1 = state_21997;
var statearr_22004_22025 = state_21997__$1;
(statearr_22004_22025[(2)] = inst_21993);

(statearr_22004_22025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (3))){
var inst_21995 = (state_21997[(2)]);
var state_21997__$1 = state_21997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21997__$1,inst_21995);
} else {
if((state_val_21998 === (2))){
var inst_21969 = (state_21997[(10)]);
var inst_21971 = cljs.core.count.call(null,inst_21969);
var inst_21972 = (inst_21971 > (0));
var state_21997__$1 = state_21997;
if(cljs.core.truth_(inst_21972)){
var statearr_22006_22026 = state_21997__$1;
(statearr_22006_22026[(1)] = (4));

} else {
var statearr_22007_22027 = state_21997__$1;
(statearr_22007_22027[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (11))){
var inst_21969 = (state_21997[(10)]);
var inst_21986 = (state_21997[(2)]);
var tmp22005 = inst_21969;
var inst_21969__$1 = tmp22005;
var state_21997__$1 = (function (){var statearr_22008 = state_21997;
(statearr_22008[(10)] = inst_21969__$1);

(statearr_22008[(11)] = inst_21986);

return statearr_22008;
})();
var statearr_22009_22028 = state_21997__$1;
(statearr_22009_22028[(2)] = null);

(statearr_22009_22028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (9))){
var inst_21977 = (state_21997[(8)]);
var state_21997__$1 = state_21997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21997__$1,(11),out,inst_21977);
} else {
if((state_val_21998 === (5))){
var inst_21991 = cljs.core.async.close_BANG_.call(null,out);
var state_21997__$1 = state_21997;
var statearr_22010_22029 = state_21997__$1;
(statearr_22010_22029[(2)] = inst_21991);

(statearr_22010_22029[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (10))){
var inst_21989 = (state_21997[(2)]);
var state_21997__$1 = state_21997;
var statearr_22011_22030 = state_21997__$1;
(statearr_22011_22030[(2)] = inst_21989);

(statearr_22011_22030[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21998 === (8))){
var inst_21969 = (state_21997[(10)]);
var inst_21976 = (state_21997[(7)]);
var inst_21978 = (state_21997[(9)]);
var inst_21977 = (state_21997[(8)]);
var inst_21981 = (function (){var c = inst_21978;
var v = inst_21977;
var vec__21974 = inst_21976;
var cs = inst_21969;
return ((function (c,v,vec__21974,cs,inst_21969,inst_21976,inst_21978,inst_21977,state_val_21998,c__19777__auto___22021,out){
return (function (p1__21914_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21914_SHARP_);
});
;})(c,v,vec__21974,cs,inst_21969,inst_21976,inst_21978,inst_21977,state_val_21998,c__19777__auto___22021,out))
})();
var inst_21982 = cljs.core.filterv.call(null,inst_21981,inst_21969);
var inst_21969__$1 = inst_21982;
var state_21997__$1 = (function (){var statearr_22012 = state_21997;
(statearr_22012[(10)] = inst_21969__$1);

return statearr_22012;
})();
var statearr_22013_22031 = state_21997__$1;
(statearr_22013_22031[(2)] = null);

(statearr_22013_22031[(1)] = (2));


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
});})(c__19777__auto___22021,out))
;
return ((function (switch__19721__auto__,c__19777__auto___22021,out){
return (function() {
var cljs$core$async$merge_$_state_machine__19722__auto__ = null;
var cljs$core$async$merge_$_state_machine__19722__auto____0 = (function (){
var statearr_22017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22017[(0)] = cljs$core$async$merge_$_state_machine__19722__auto__);

(statearr_22017[(1)] = (1));

return statearr_22017;
});
var cljs$core$async$merge_$_state_machine__19722__auto____1 = (function (state_21997){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_21997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22018){if((e22018 instanceof Object)){
var ex__19725__auto__ = e22018;
var statearr_22019_22032 = state_21997;
(statearr_22019_22032[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22033 = state_21997;
state_21997 = G__22033;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__19722__auto__ = function(state_21997){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__19722__auto____1.call(this,state_21997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__19722__auto____0;
cljs$core$async$merge_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__19722__auto____1;
return cljs$core$async$merge_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___22021,out))
})();
var state__19779__auto__ = (function (){var statearr_22020 = f__19778__auto__.call(null);
(statearr_22020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___22021);

return statearr_22020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___22021,out))
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
var c__19777__auto___22126 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___22126,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___22126,out){
return (function (state_22103){
var state_val_22104 = (state_22103[(1)]);
if((state_val_22104 === (7))){
var inst_22085 = (state_22103[(7)]);
var inst_22085__$1 = (state_22103[(2)]);
var inst_22086 = (inst_22085__$1 == null);
var inst_22087 = cljs.core.not.call(null,inst_22086);
var state_22103__$1 = (function (){var statearr_22105 = state_22103;
(statearr_22105[(7)] = inst_22085__$1);

return statearr_22105;
})();
if(inst_22087){
var statearr_22106_22127 = state_22103__$1;
(statearr_22106_22127[(1)] = (8));

} else {
var statearr_22107_22128 = state_22103__$1;
(statearr_22107_22128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (1))){
var inst_22080 = (0);
var state_22103__$1 = (function (){var statearr_22108 = state_22103;
(statearr_22108[(8)] = inst_22080);

return statearr_22108;
})();
var statearr_22109_22129 = state_22103__$1;
(statearr_22109_22129[(2)] = null);

(statearr_22109_22129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (4))){
var state_22103__$1 = state_22103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22103__$1,(7),ch);
} else {
if((state_val_22104 === (6))){
var inst_22098 = (state_22103[(2)]);
var state_22103__$1 = state_22103;
var statearr_22110_22130 = state_22103__$1;
(statearr_22110_22130[(2)] = inst_22098);

(statearr_22110_22130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (3))){
var inst_22100 = (state_22103[(2)]);
var inst_22101 = cljs.core.async.close_BANG_.call(null,out);
var state_22103__$1 = (function (){var statearr_22111 = state_22103;
(statearr_22111[(9)] = inst_22100);

return statearr_22111;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22103__$1,inst_22101);
} else {
if((state_val_22104 === (2))){
var inst_22080 = (state_22103[(8)]);
var inst_22082 = (inst_22080 < n);
var state_22103__$1 = state_22103;
if(cljs.core.truth_(inst_22082)){
var statearr_22112_22131 = state_22103__$1;
(statearr_22112_22131[(1)] = (4));

} else {
var statearr_22113_22132 = state_22103__$1;
(statearr_22113_22132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (11))){
var inst_22080 = (state_22103[(8)]);
var inst_22090 = (state_22103[(2)]);
var inst_22091 = (inst_22080 + (1));
var inst_22080__$1 = inst_22091;
var state_22103__$1 = (function (){var statearr_22114 = state_22103;
(statearr_22114[(8)] = inst_22080__$1);

(statearr_22114[(10)] = inst_22090);

return statearr_22114;
})();
var statearr_22115_22133 = state_22103__$1;
(statearr_22115_22133[(2)] = null);

(statearr_22115_22133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (9))){
var state_22103__$1 = state_22103;
var statearr_22116_22134 = state_22103__$1;
(statearr_22116_22134[(2)] = null);

(statearr_22116_22134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (5))){
var state_22103__$1 = state_22103;
var statearr_22117_22135 = state_22103__$1;
(statearr_22117_22135[(2)] = null);

(statearr_22117_22135[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (10))){
var inst_22095 = (state_22103[(2)]);
var state_22103__$1 = state_22103;
var statearr_22118_22136 = state_22103__$1;
(statearr_22118_22136[(2)] = inst_22095);

(statearr_22118_22136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22104 === (8))){
var inst_22085 = (state_22103[(7)]);
var state_22103__$1 = state_22103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22103__$1,(11),out,inst_22085);
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
});})(c__19777__auto___22126,out))
;
return ((function (switch__19721__auto__,c__19777__auto___22126,out){
return (function() {
var cljs$core$async$take_$_state_machine__19722__auto__ = null;
var cljs$core$async$take_$_state_machine__19722__auto____0 = (function (){
var statearr_22122 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22122[(0)] = cljs$core$async$take_$_state_machine__19722__auto__);

(statearr_22122[(1)] = (1));

return statearr_22122;
});
var cljs$core$async$take_$_state_machine__19722__auto____1 = (function (state_22103){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_22103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22123){if((e22123 instanceof Object)){
var ex__19725__auto__ = e22123;
var statearr_22124_22137 = state_22103;
(statearr_22124_22137[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22123;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22138 = state_22103;
state_22103 = G__22138;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__19722__auto__ = function(state_22103){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__19722__auto____1.call(this,state_22103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__19722__auto____0;
cljs$core$async$take_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__19722__auto____1;
return cljs$core$async$take_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___22126,out))
})();
var state__19779__auto__ = (function (){var statearr_22125 = f__19778__auto__.call(null);
(statearr_22125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___22126);

return statearr_22125;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___22126,out))
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
if(typeof cljs.core.async.t22146 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22146 = (function (ch,f,map_LT_,meta22147){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22147 = meta22147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22149 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22149 = (function (fn1,_,meta22147,map_LT_,f,ch,meta22150){
this.fn1 = fn1;
this._ = _;
this.meta22147 = meta22147;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22150 = meta22150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22149.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22139_SHARP_){
return f1.call(null,(((p1__22139_SHARP_ == null))?null:self__.f.call(null,p1__22139_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22151){
var self__ = this;
var _22151__$1 = this;
return self__.meta22150;
});})(___$1))
;

cljs.core.async.t22149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22151,meta22150__$1){
var self__ = this;
var _22151__$1 = this;
return (new cljs.core.async.t22149(self__.fn1,self__._,self__.meta22147,self__.map_LT_,self__.f,self__.ch,meta22150__$1));
});})(___$1))
;

cljs.core.async.t22149.cljs$lang$type = true;

cljs.core.async.t22149.cljs$lang$ctorStr = "cljs.core.async/t22149";

cljs.core.async.t22149.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t22149");
});})(___$1))
;

cljs.core.async.__GT_t22149 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t22149(fn1__$1,___$2,meta22147__$1,map_LT___$1,f__$1,ch__$1,meta22150){
return (new cljs.core.async.t22149(fn1__$1,___$2,meta22147__$1,map_LT___$1,f__$1,ch__$1,meta22150));
});})(___$1))
;

}

return (new cljs.core.async.t22149(fn1,___$1,self__.meta22147,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22146.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22148){
var self__ = this;
var _22148__$1 = this;
return self__.meta22147;
});

cljs.core.async.t22146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22148,meta22147__$1){
var self__ = this;
var _22148__$1 = this;
return (new cljs.core.async.t22146(self__.ch,self__.f,self__.map_LT_,meta22147__$1));
});

cljs.core.async.t22146.cljs$lang$type = true;

cljs.core.async.t22146.cljs$lang$ctorStr = "cljs.core.async/t22146";

cljs.core.async.t22146.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t22146");
});

cljs.core.async.__GT_t22146 = (function cljs$core$async$map_LT__$___GT_t22146(ch__$1,f__$1,map_LT___$1,meta22147){
return (new cljs.core.async.t22146(ch__$1,f__$1,map_LT___$1,meta22147));
});

}

return (new cljs.core.async.t22146(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t22155 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22155 = (function (ch,f,map_GT_,meta22156){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22156 = meta22156;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22155.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22155.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22155.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22155.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22155.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22155.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22157){
var self__ = this;
var _22157__$1 = this;
return self__.meta22156;
});

cljs.core.async.t22155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22157,meta22156__$1){
var self__ = this;
var _22157__$1 = this;
return (new cljs.core.async.t22155(self__.ch,self__.f,self__.map_GT_,meta22156__$1));
});

cljs.core.async.t22155.cljs$lang$type = true;

cljs.core.async.t22155.cljs$lang$ctorStr = "cljs.core.async/t22155";

cljs.core.async.t22155.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t22155");
});

cljs.core.async.__GT_t22155 = (function cljs$core$async$map_GT__$___GT_t22155(ch__$1,f__$1,map_GT___$1,meta22156){
return (new cljs.core.async.t22155(ch__$1,f__$1,map_GT___$1,meta22156));
});

}

return (new cljs.core.async.t22155(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t22161 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22161 = (function (ch,p,filter_GT_,meta22162){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22162 = meta22162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22163){
var self__ = this;
var _22163__$1 = this;
return self__.meta22162;
});

cljs.core.async.t22161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22163,meta22162__$1){
var self__ = this;
var _22163__$1 = this;
return (new cljs.core.async.t22161(self__.ch,self__.p,self__.filter_GT_,meta22162__$1));
});

cljs.core.async.t22161.cljs$lang$type = true;

cljs.core.async.t22161.cljs$lang$ctorStr = "cljs.core.async/t22161";

cljs.core.async.t22161.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cljs.core.async/t22161");
});

cljs.core.async.__GT_t22161 = (function cljs$core$async$filter_GT__$___GT_t22161(ch__$1,p__$1,filter_GT___$1,meta22162){
return (new cljs.core.async.t22161(ch__$1,p__$1,filter_GT___$1,meta22162));
});

}

return (new cljs.core.async.t22161(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19777__auto___22246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___22246,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___22246,out){
return (function (state_22225){
var state_val_22226 = (state_22225[(1)]);
if((state_val_22226 === (7))){
var inst_22221 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
var statearr_22227_22247 = state_22225__$1;
(statearr_22227_22247[(2)] = inst_22221);

(statearr_22227_22247[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (1))){
var state_22225__$1 = state_22225;
var statearr_22228_22248 = state_22225__$1;
(statearr_22228_22248[(2)] = null);

(statearr_22228_22248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (4))){
var inst_22207 = (state_22225[(7)]);
var inst_22207__$1 = (state_22225[(2)]);
var inst_22208 = (inst_22207__$1 == null);
var state_22225__$1 = (function (){var statearr_22229 = state_22225;
(statearr_22229[(7)] = inst_22207__$1);

return statearr_22229;
})();
if(cljs.core.truth_(inst_22208)){
var statearr_22230_22249 = state_22225__$1;
(statearr_22230_22249[(1)] = (5));

} else {
var statearr_22231_22250 = state_22225__$1;
(statearr_22231_22250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (6))){
var inst_22207 = (state_22225[(7)]);
var inst_22212 = p.call(null,inst_22207);
var state_22225__$1 = state_22225;
if(cljs.core.truth_(inst_22212)){
var statearr_22232_22251 = state_22225__$1;
(statearr_22232_22251[(1)] = (8));

} else {
var statearr_22233_22252 = state_22225__$1;
(statearr_22233_22252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (3))){
var inst_22223 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22225__$1,inst_22223);
} else {
if((state_val_22226 === (2))){
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22225__$1,(4),ch);
} else {
if((state_val_22226 === (11))){
var inst_22215 = (state_22225[(2)]);
var state_22225__$1 = state_22225;
var statearr_22234_22253 = state_22225__$1;
(statearr_22234_22253[(2)] = inst_22215);

(statearr_22234_22253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (9))){
var state_22225__$1 = state_22225;
var statearr_22235_22254 = state_22225__$1;
(statearr_22235_22254[(2)] = null);

(statearr_22235_22254[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (5))){
var inst_22210 = cljs.core.async.close_BANG_.call(null,out);
var state_22225__$1 = state_22225;
var statearr_22236_22255 = state_22225__$1;
(statearr_22236_22255[(2)] = inst_22210);

(statearr_22236_22255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (10))){
var inst_22218 = (state_22225[(2)]);
var state_22225__$1 = (function (){var statearr_22237 = state_22225;
(statearr_22237[(8)] = inst_22218);

return statearr_22237;
})();
var statearr_22238_22256 = state_22225__$1;
(statearr_22238_22256[(2)] = null);

(statearr_22238_22256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22226 === (8))){
var inst_22207 = (state_22225[(7)]);
var state_22225__$1 = state_22225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22225__$1,(11),out,inst_22207);
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
});})(c__19777__auto___22246,out))
;
return ((function (switch__19721__auto__,c__19777__auto___22246,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__19722__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__19722__auto____0 = (function (){
var statearr_22242 = [null,null,null,null,null,null,null,null,null];
(statearr_22242[(0)] = cljs$core$async$filter_LT__$_state_machine__19722__auto__);

(statearr_22242[(1)] = (1));

return statearr_22242;
});
var cljs$core$async$filter_LT__$_state_machine__19722__auto____1 = (function (state_22225){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_22225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22243){if((e22243 instanceof Object)){
var ex__19725__auto__ = e22243;
var statearr_22244_22257 = state_22225;
(statearr_22244_22257[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22258 = state_22225;
state_22225 = G__22258;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__19722__auto__ = function(state_22225){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__19722__auto____1.call(this,state_22225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__19722__auto____0;
cljs$core$async$filter_LT__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__19722__auto____1;
return cljs$core$async$filter_LT__$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___22246,out))
})();
var state__19779__auto__ = (function (){var statearr_22245 = f__19778__auto__.call(null);
(statearr_22245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___22246);

return statearr_22245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___22246,out))
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
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_22424){
var state_val_22425 = (state_22424[(1)]);
if((state_val_22425 === (7))){
var inst_22420 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
var statearr_22426_22467 = state_22424__$1;
(statearr_22426_22467[(2)] = inst_22420);

(statearr_22426_22467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (20))){
var inst_22390 = (state_22424[(7)]);
var inst_22401 = (state_22424[(2)]);
var inst_22402 = cljs.core.next.call(null,inst_22390);
var inst_22376 = inst_22402;
var inst_22377 = null;
var inst_22378 = (0);
var inst_22379 = (0);
var state_22424__$1 = (function (){var statearr_22427 = state_22424;
(statearr_22427[(8)] = inst_22401);

(statearr_22427[(9)] = inst_22377);

(statearr_22427[(10)] = inst_22376);

(statearr_22427[(11)] = inst_22379);

(statearr_22427[(12)] = inst_22378);

return statearr_22427;
})();
var statearr_22428_22468 = state_22424__$1;
(statearr_22428_22468[(2)] = null);

(statearr_22428_22468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (1))){
var state_22424__$1 = state_22424;
var statearr_22429_22469 = state_22424__$1;
(statearr_22429_22469[(2)] = null);

(statearr_22429_22469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (4))){
var inst_22365 = (state_22424[(13)]);
var inst_22365__$1 = (state_22424[(2)]);
var inst_22366 = (inst_22365__$1 == null);
var state_22424__$1 = (function (){var statearr_22430 = state_22424;
(statearr_22430[(13)] = inst_22365__$1);

return statearr_22430;
})();
if(cljs.core.truth_(inst_22366)){
var statearr_22431_22470 = state_22424__$1;
(statearr_22431_22470[(1)] = (5));

} else {
var statearr_22432_22471 = state_22424__$1;
(statearr_22432_22471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (15))){
var state_22424__$1 = state_22424;
var statearr_22436_22472 = state_22424__$1;
(statearr_22436_22472[(2)] = null);

(statearr_22436_22472[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (21))){
var state_22424__$1 = state_22424;
var statearr_22437_22473 = state_22424__$1;
(statearr_22437_22473[(2)] = null);

(statearr_22437_22473[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (13))){
var inst_22377 = (state_22424[(9)]);
var inst_22376 = (state_22424[(10)]);
var inst_22379 = (state_22424[(11)]);
var inst_22378 = (state_22424[(12)]);
var inst_22386 = (state_22424[(2)]);
var inst_22387 = (inst_22379 + (1));
var tmp22433 = inst_22377;
var tmp22434 = inst_22376;
var tmp22435 = inst_22378;
var inst_22376__$1 = tmp22434;
var inst_22377__$1 = tmp22433;
var inst_22378__$1 = tmp22435;
var inst_22379__$1 = inst_22387;
var state_22424__$1 = (function (){var statearr_22438 = state_22424;
(statearr_22438[(9)] = inst_22377__$1);

(statearr_22438[(10)] = inst_22376__$1);

(statearr_22438[(11)] = inst_22379__$1);

(statearr_22438[(12)] = inst_22378__$1);

(statearr_22438[(14)] = inst_22386);

return statearr_22438;
})();
var statearr_22439_22474 = state_22424__$1;
(statearr_22439_22474[(2)] = null);

(statearr_22439_22474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (22))){
var state_22424__$1 = state_22424;
var statearr_22440_22475 = state_22424__$1;
(statearr_22440_22475[(2)] = null);

(statearr_22440_22475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (6))){
var inst_22365 = (state_22424[(13)]);
var inst_22374 = f.call(null,inst_22365);
var inst_22375 = cljs.core.seq.call(null,inst_22374);
var inst_22376 = inst_22375;
var inst_22377 = null;
var inst_22378 = (0);
var inst_22379 = (0);
var state_22424__$1 = (function (){var statearr_22441 = state_22424;
(statearr_22441[(9)] = inst_22377);

(statearr_22441[(10)] = inst_22376);

(statearr_22441[(11)] = inst_22379);

(statearr_22441[(12)] = inst_22378);

return statearr_22441;
})();
var statearr_22442_22476 = state_22424__$1;
(statearr_22442_22476[(2)] = null);

(statearr_22442_22476[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (17))){
var inst_22390 = (state_22424[(7)]);
var inst_22394 = cljs.core.chunk_first.call(null,inst_22390);
var inst_22395 = cljs.core.chunk_rest.call(null,inst_22390);
var inst_22396 = cljs.core.count.call(null,inst_22394);
var inst_22376 = inst_22395;
var inst_22377 = inst_22394;
var inst_22378 = inst_22396;
var inst_22379 = (0);
var state_22424__$1 = (function (){var statearr_22443 = state_22424;
(statearr_22443[(9)] = inst_22377);

(statearr_22443[(10)] = inst_22376);

(statearr_22443[(11)] = inst_22379);

(statearr_22443[(12)] = inst_22378);

return statearr_22443;
})();
var statearr_22444_22477 = state_22424__$1;
(statearr_22444_22477[(2)] = null);

(statearr_22444_22477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (3))){
var inst_22422 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22424__$1,inst_22422);
} else {
if((state_val_22425 === (12))){
var inst_22410 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
var statearr_22445_22478 = state_22424__$1;
(statearr_22445_22478[(2)] = inst_22410);

(statearr_22445_22478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (2))){
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22424__$1,(4),in$);
} else {
if((state_val_22425 === (23))){
var inst_22418 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
var statearr_22446_22479 = state_22424__$1;
(statearr_22446_22479[(2)] = inst_22418);

(statearr_22446_22479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (19))){
var inst_22405 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
var statearr_22447_22480 = state_22424__$1;
(statearr_22447_22480[(2)] = inst_22405);

(statearr_22447_22480[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (11))){
var inst_22376 = (state_22424[(10)]);
var inst_22390 = (state_22424[(7)]);
var inst_22390__$1 = cljs.core.seq.call(null,inst_22376);
var state_22424__$1 = (function (){var statearr_22448 = state_22424;
(statearr_22448[(7)] = inst_22390__$1);

return statearr_22448;
})();
if(inst_22390__$1){
var statearr_22449_22481 = state_22424__$1;
(statearr_22449_22481[(1)] = (14));

} else {
var statearr_22450_22482 = state_22424__$1;
(statearr_22450_22482[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (9))){
var inst_22412 = (state_22424[(2)]);
var inst_22413 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22424__$1 = (function (){var statearr_22451 = state_22424;
(statearr_22451[(15)] = inst_22412);

return statearr_22451;
})();
if(cljs.core.truth_(inst_22413)){
var statearr_22452_22483 = state_22424__$1;
(statearr_22452_22483[(1)] = (21));

} else {
var statearr_22453_22484 = state_22424__$1;
(statearr_22453_22484[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (5))){
var inst_22368 = cljs.core.async.close_BANG_.call(null,out);
var state_22424__$1 = state_22424;
var statearr_22454_22485 = state_22424__$1;
(statearr_22454_22485[(2)] = inst_22368);

(statearr_22454_22485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (14))){
var inst_22390 = (state_22424[(7)]);
var inst_22392 = cljs.core.chunked_seq_QMARK_.call(null,inst_22390);
var state_22424__$1 = state_22424;
if(inst_22392){
var statearr_22455_22486 = state_22424__$1;
(statearr_22455_22486[(1)] = (17));

} else {
var statearr_22456_22487 = state_22424__$1;
(statearr_22456_22487[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (16))){
var inst_22408 = (state_22424[(2)]);
var state_22424__$1 = state_22424;
var statearr_22457_22488 = state_22424__$1;
(statearr_22457_22488[(2)] = inst_22408);

(statearr_22457_22488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22425 === (10))){
var inst_22377 = (state_22424[(9)]);
var inst_22379 = (state_22424[(11)]);
var inst_22384 = cljs.core._nth.call(null,inst_22377,inst_22379);
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22424__$1,(13),out,inst_22384);
} else {
if((state_val_22425 === (18))){
var inst_22390 = (state_22424[(7)]);
var inst_22399 = cljs.core.first.call(null,inst_22390);
var state_22424__$1 = state_22424;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22424__$1,(20),out,inst_22399);
} else {
if((state_val_22425 === (8))){
var inst_22379 = (state_22424[(11)]);
var inst_22378 = (state_22424[(12)]);
var inst_22381 = (inst_22379 < inst_22378);
var inst_22382 = inst_22381;
var state_22424__$1 = state_22424;
if(cljs.core.truth_(inst_22382)){
var statearr_22458_22489 = state_22424__$1;
(statearr_22458_22489[(1)] = (10));

} else {
var statearr_22459_22490 = state_22424__$1;
(statearr_22459_22490[(1)] = (11));

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
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19722__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19722__auto____0 = (function (){
var statearr_22463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22463[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19722__auto__);

(statearr_22463[(1)] = (1));

return statearr_22463;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19722__auto____1 = (function (state_22424){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_22424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22464){if((e22464 instanceof Object)){
var ex__19725__auto__ = e22464;
var statearr_22465_22491 = state_22424;
(statearr_22465_22491[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22492 = state_22424;
state_22424 = G__22492;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19722__auto__ = function(state_22424){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19722__auto____1.call(this,state_22424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19722__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19722__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_22466 = f__19778__auto__.call(null);
(statearr_22466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_22466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
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
var c__19777__auto___22589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___22589,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___22589,out){
return (function (state_22564){
var state_val_22565 = (state_22564[(1)]);
if((state_val_22565 === (7))){
var inst_22559 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
var statearr_22566_22590 = state_22564__$1;
(statearr_22566_22590[(2)] = inst_22559);

(statearr_22566_22590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (1))){
var inst_22541 = null;
var state_22564__$1 = (function (){var statearr_22567 = state_22564;
(statearr_22567[(7)] = inst_22541);

return statearr_22567;
})();
var statearr_22568_22591 = state_22564__$1;
(statearr_22568_22591[(2)] = null);

(statearr_22568_22591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (4))){
var inst_22544 = (state_22564[(8)]);
var inst_22544__$1 = (state_22564[(2)]);
var inst_22545 = (inst_22544__$1 == null);
var inst_22546 = cljs.core.not.call(null,inst_22545);
var state_22564__$1 = (function (){var statearr_22569 = state_22564;
(statearr_22569[(8)] = inst_22544__$1);

return statearr_22569;
})();
if(inst_22546){
var statearr_22570_22592 = state_22564__$1;
(statearr_22570_22592[(1)] = (5));

} else {
var statearr_22571_22593 = state_22564__$1;
(statearr_22571_22593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (6))){
var state_22564__$1 = state_22564;
var statearr_22572_22594 = state_22564__$1;
(statearr_22572_22594[(2)] = null);

(statearr_22572_22594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (3))){
var inst_22561 = (state_22564[(2)]);
var inst_22562 = cljs.core.async.close_BANG_.call(null,out);
var state_22564__$1 = (function (){var statearr_22573 = state_22564;
(statearr_22573[(9)] = inst_22561);

return statearr_22573;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22564__$1,inst_22562);
} else {
if((state_val_22565 === (2))){
var state_22564__$1 = state_22564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22564__$1,(4),ch);
} else {
if((state_val_22565 === (11))){
var inst_22544 = (state_22564[(8)]);
var inst_22553 = (state_22564[(2)]);
var inst_22541 = inst_22544;
var state_22564__$1 = (function (){var statearr_22574 = state_22564;
(statearr_22574[(10)] = inst_22553);

(statearr_22574[(7)] = inst_22541);

return statearr_22574;
})();
var statearr_22575_22595 = state_22564__$1;
(statearr_22575_22595[(2)] = null);

(statearr_22575_22595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (9))){
var inst_22544 = (state_22564[(8)]);
var state_22564__$1 = state_22564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22564__$1,(11),out,inst_22544);
} else {
if((state_val_22565 === (5))){
var inst_22544 = (state_22564[(8)]);
var inst_22541 = (state_22564[(7)]);
var inst_22548 = cljs.core._EQ_.call(null,inst_22544,inst_22541);
var state_22564__$1 = state_22564;
if(inst_22548){
var statearr_22577_22596 = state_22564__$1;
(statearr_22577_22596[(1)] = (8));

} else {
var statearr_22578_22597 = state_22564__$1;
(statearr_22578_22597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (10))){
var inst_22556 = (state_22564[(2)]);
var state_22564__$1 = state_22564;
var statearr_22579_22598 = state_22564__$1;
(statearr_22579_22598[(2)] = inst_22556);

(statearr_22579_22598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22565 === (8))){
var inst_22541 = (state_22564[(7)]);
var tmp22576 = inst_22541;
var inst_22541__$1 = tmp22576;
var state_22564__$1 = (function (){var statearr_22580 = state_22564;
(statearr_22580[(7)] = inst_22541__$1);

return statearr_22580;
})();
var statearr_22581_22599 = state_22564__$1;
(statearr_22581_22599[(2)] = null);

(statearr_22581_22599[(1)] = (2));


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
});})(c__19777__auto___22589,out))
;
return ((function (switch__19721__auto__,c__19777__auto___22589,out){
return (function() {
var cljs$core$async$unique_$_state_machine__19722__auto__ = null;
var cljs$core$async$unique_$_state_machine__19722__auto____0 = (function (){
var statearr_22585 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22585[(0)] = cljs$core$async$unique_$_state_machine__19722__auto__);

(statearr_22585[(1)] = (1));

return statearr_22585;
});
var cljs$core$async$unique_$_state_machine__19722__auto____1 = (function (state_22564){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_22564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22586){if((e22586 instanceof Object)){
var ex__19725__auto__ = e22586;
var statearr_22587_22600 = state_22564;
(statearr_22587_22600[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22601 = state_22564;
state_22564 = G__22601;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__19722__auto__ = function(state_22564){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__19722__auto____1.call(this,state_22564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__19722__auto____0;
cljs$core$async$unique_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__19722__auto____1;
return cljs$core$async$unique_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___22589,out))
})();
var state__19779__auto__ = (function (){var statearr_22588 = f__19778__auto__.call(null);
(statearr_22588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___22589);

return statearr_22588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___22589,out))
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
var c__19777__auto___22736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___22736,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___22736,out){
return (function (state_22706){
var state_val_22707 = (state_22706[(1)]);
if((state_val_22707 === (7))){
var inst_22702 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22708_22737 = state_22706__$1;
(statearr_22708_22737[(2)] = inst_22702);

(statearr_22708_22737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (1))){
var inst_22669 = (new Array(n));
var inst_22670 = inst_22669;
var inst_22671 = (0);
var state_22706__$1 = (function (){var statearr_22709 = state_22706;
(statearr_22709[(7)] = inst_22670);

(statearr_22709[(8)] = inst_22671);

return statearr_22709;
})();
var statearr_22710_22738 = state_22706__$1;
(statearr_22710_22738[(2)] = null);

(statearr_22710_22738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (4))){
var inst_22674 = (state_22706[(9)]);
var inst_22674__$1 = (state_22706[(2)]);
var inst_22675 = (inst_22674__$1 == null);
var inst_22676 = cljs.core.not.call(null,inst_22675);
var state_22706__$1 = (function (){var statearr_22711 = state_22706;
(statearr_22711[(9)] = inst_22674__$1);

return statearr_22711;
})();
if(inst_22676){
var statearr_22712_22739 = state_22706__$1;
(statearr_22712_22739[(1)] = (5));

} else {
var statearr_22713_22740 = state_22706__$1;
(statearr_22713_22740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (15))){
var inst_22696 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22714_22741 = state_22706__$1;
(statearr_22714_22741[(2)] = inst_22696);

(statearr_22714_22741[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (13))){
var state_22706__$1 = state_22706;
var statearr_22715_22742 = state_22706__$1;
(statearr_22715_22742[(2)] = null);

(statearr_22715_22742[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (6))){
var inst_22671 = (state_22706[(8)]);
var inst_22692 = (inst_22671 > (0));
var state_22706__$1 = state_22706;
if(cljs.core.truth_(inst_22692)){
var statearr_22716_22743 = state_22706__$1;
(statearr_22716_22743[(1)] = (12));

} else {
var statearr_22717_22744 = state_22706__$1;
(statearr_22717_22744[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (3))){
var inst_22704 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22706__$1,inst_22704);
} else {
if((state_val_22707 === (12))){
var inst_22670 = (state_22706[(7)]);
var inst_22694 = cljs.core.vec.call(null,inst_22670);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22706__$1,(15),out,inst_22694);
} else {
if((state_val_22707 === (2))){
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22706__$1,(4),ch);
} else {
if((state_val_22707 === (11))){
var inst_22686 = (state_22706[(2)]);
var inst_22687 = (new Array(n));
var inst_22670 = inst_22687;
var inst_22671 = (0);
var state_22706__$1 = (function (){var statearr_22718 = state_22706;
(statearr_22718[(10)] = inst_22686);

(statearr_22718[(7)] = inst_22670);

(statearr_22718[(8)] = inst_22671);

return statearr_22718;
})();
var statearr_22719_22745 = state_22706__$1;
(statearr_22719_22745[(2)] = null);

(statearr_22719_22745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (9))){
var inst_22670 = (state_22706[(7)]);
var inst_22684 = cljs.core.vec.call(null,inst_22670);
var state_22706__$1 = state_22706;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22706__$1,(11),out,inst_22684);
} else {
if((state_val_22707 === (5))){
var inst_22674 = (state_22706[(9)]);
var inst_22679 = (state_22706[(11)]);
var inst_22670 = (state_22706[(7)]);
var inst_22671 = (state_22706[(8)]);
var inst_22678 = (inst_22670[inst_22671] = inst_22674);
var inst_22679__$1 = (inst_22671 + (1));
var inst_22680 = (inst_22679__$1 < n);
var state_22706__$1 = (function (){var statearr_22720 = state_22706;
(statearr_22720[(12)] = inst_22678);

(statearr_22720[(11)] = inst_22679__$1);

return statearr_22720;
})();
if(cljs.core.truth_(inst_22680)){
var statearr_22721_22746 = state_22706__$1;
(statearr_22721_22746[(1)] = (8));

} else {
var statearr_22722_22747 = state_22706__$1;
(statearr_22722_22747[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (14))){
var inst_22699 = (state_22706[(2)]);
var inst_22700 = cljs.core.async.close_BANG_.call(null,out);
var state_22706__$1 = (function (){var statearr_22724 = state_22706;
(statearr_22724[(13)] = inst_22699);

return statearr_22724;
})();
var statearr_22725_22748 = state_22706__$1;
(statearr_22725_22748[(2)] = inst_22700);

(statearr_22725_22748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (10))){
var inst_22690 = (state_22706[(2)]);
var state_22706__$1 = state_22706;
var statearr_22726_22749 = state_22706__$1;
(statearr_22726_22749[(2)] = inst_22690);

(statearr_22726_22749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22707 === (8))){
var inst_22679 = (state_22706[(11)]);
var inst_22670 = (state_22706[(7)]);
var tmp22723 = inst_22670;
var inst_22670__$1 = tmp22723;
var inst_22671 = inst_22679;
var state_22706__$1 = (function (){var statearr_22727 = state_22706;
(statearr_22727[(7)] = inst_22670__$1);

(statearr_22727[(8)] = inst_22671);

return statearr_22727;
})();
var statearr_22728_22750 = state_22706__$1;
(statearr_22728_22750[(2)] = null);

(statearr_22728_22750[(1)] = (2));


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
});})(c__19777__auto___22736,out))
;
return ((function (switch__19721__auto__,c__19777__auto___22736,out){
return (function() {
var cljs$core$async$partition_$_state_machine__19722__auto__ = null;
var cljs$core$async$partition_$_state_machine__19722__auto____0 = (function (){
var statearr_22732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22732[(0)] = cljs$core$async$partition_$_state_machine__19722__auto__);

(statearr_22732[(1)] = (1));

return statearr_22732;
});
var cljs$core$async$partition_$_state_machine__19722__auto____1 = (function (state_22706){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_22706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22733){if((e22733 instanceof Object)){
var ex__19725__auto__ = e22733;
var statearr_22734_22751 = state_22706;
(statearr_22734_22751[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22752 = state_22706;
state_22706 = G__22752;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__19722__auto__ = function(state_22706){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__19722__auto____1.call(this,state_22706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__19722__auto____0;
cljs$core$async$partition_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__19722__auto____1;
return cljs$core$async$partition_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___22736,out))
})();
var state__19779__auto__ = (function (){var statearr_22735 = f__19778__auto__.call(null);
(statearr_22735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___22736);

return statearr_22735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___22736,out))
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
var c__19777__auto___22895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___22895,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___22895,out){
return (function (state_22865){
var state_val_22866 = (state_22865[(1)]);
if((state_val_22866 === (7))){
var inst_22861 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22867_22896 = state_22865__$1;
(statearr_22867_22896[(2)] = inst_22861);

(statearr_22867_22896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (1))){
var inst_22824 = [];
var inst_22825 = inst_22824;
var inst_22826 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22865__$1 = (function (){var statearr_22868 = state_22865;
(statearr_22868[(7)] = inst_22826);

(statearr_22868[(8)] = inst_22825);

return statearr_22868;
})();
var statearr_22869_22897 = state_22865__$1;
(statearr_22869_22897[(2)] = null);

(statearr_22869_22897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (4))){
var inst_22829 = (state_22865[(9)]);
var inst_22829__$1 = (state_22865[(2)]);
var inst_22830 = (inst_22829__$1 == null);
var inst_22831 = cljs.core.not.call(null,inst_22830);
var state_22865__$1 = (function (){var statearr_22870 = state_22865;
(statearr_22870[(9)] = inst_22829__$1);

return statearr_22870;
})();
if(inst_22831){
var statearr_22871_22898 = state_22865__$1;
(statearr_22871_22898[(1)] = (5));

} else {
var statearr_22872_22899 = state_22865__$1;
(statearr_22872_22899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (15))){
var inst_22855 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22873_22900 = state_22865__$1;
(statearr_22873_22900[(2)] = inst_22855);

(statearr_22873_22900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (13))){
var state_22865__$1 = state_22865;
var statearr_22874_22901 = state_22865__$1;
(statearr_22874_22901[(2)] = null);

(statearr_22874_22901[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (6))){
var inst_22825 = (state_22865[(8)]);
var inst_22850 = inst_22825.length;
var inst_22851 = (inst_22850 > (0));
var state_22865__$1 = state_22865;
if(cljs.core.truth_(inst_22851)){
var statearr_22875_22902 = state_22865__$1;
(statearr_22875_22902[(1)] = (12));

} else {
var statearr_22876_22903 = state_22865__$1;
(statearr_22876_22903[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (3))){
var inst_22863 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22865__$1,inst_22863);
} else {
if((state_val_22866 === (12))){
var inst_22825 = (state_22865[(8)]);
var inst_22853 = cljs.core.vec.call(null,inst_22825);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22865__$1,(15),out,inst_22853);
} else {
if((state_val_22866 === (2))){
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(4),ch);
} else {
if((state_val_22866 === (11))){
var inst_22833 = (state_22865[(10)]);
var inst_22829 = (state_22865[(9)]);
var inst_22843 = (state_22865[(2)]);
var inst_22844 = [];
var inst_22845 = inst_22844.push(inst_22829);
var inst_22825 = inst_22844;
var inst_22826 = inst_22833;
var state_22865__$1 = (function (){var statearr_22877 = state_22865;
(statearr_22877[(11)] = inst_22843);

(statearr_22877[(12)] = inst_22845);

(statearr_22877[(7)] = inst_22826);

(statearr_22877[(8)] = inst_22825);

return statearr_22877;
})();
var statearr_22878_22904 = state_22865__$1;
(statearr_22878_22904[(2)] = null);

(statearr_22878_22904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (9))){
var inst_22825 = (state_22865[(8)]);
var inst_22841 = cljs.core.vec.call(null,inst_22825);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22865__$1,(11),out,inst_22841);
} else {
if((state_val_22866 === (5))){
var inst_22826 = (state_22865[(7)]);
var inst_22833 = (state_22865[(10)]);
var inst_22829 = (state_22865[(9)]);
var inst_22833__$1 = f.call(null,inst_22829);
var inst_22834 = cljs.core._EQ_.call(null,inst_22833__$1,inst_22826);
var inst_22835 = cljs.core.keyword_identical_QMARK_.call(null,inst_22826,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22836 = (inst_22834) || (inst_22835);
var state_22865__$1 = (function (){var statearr_22879 = state_22865;
(statearr_22879[(10)] = inst_22833__$1);

return statearr_22879;
})();
if(cljs.core.truth_(inst_22836)){
var statearr_22880_22905 = state_22865__$1;
(statearr_22880_22905[(1)] = (8));

} else {
var statearr_22881_22906 = state_22865__$1;
(statearr_22881_22906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (14))){
var inst_22858 = (state_22865[(2)]);
var inst_22859 = cljs.core.async.close_BANG_.call(null,out);
var state_22865__$1 = (function (){var statearr_22883 = state_22865;
(statearr_22883[(13)] = inst_22858);

return statearr_22883;
})();
var statearr_22884_22907 = state_22865__$1;
(statearr_22884_22907[(2)] = inst_22859);

(statearr_22884_22907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (10))){
var inst_22848 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22885_22908 = state_22865__$1;
(statearr_22885_22908[(2)] = inst_22848);

(statearr_22885_22908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (8))){
var inst_22825 = (state_22865[(8)]);
var inst_22833 = (state_22865[(10)]);
var inst_22829 = (state_22865[(9)]);
var inst_22838 = inst_22825.push(inst_22829);
var tmp22882 = inst_22825;
var inst_22825__$1 = tmp22882;
var inst_22826 = inst_22833;
var state_22865__$1 = (function (){var statearr_22886 = state_22865;
(statearr_22886[(14)] = inst_22838);

(statearr_22886[(7)] = inst_22826);

(statearr_22886[(8)] = inst_22825__$1);

return statearr_22886;
})();
var statearr_22887_22909 = state_22865__$1;
(statearr_22887_22909[(2)] = null);

(statearr_22887_22909[(1)] = (2));


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
});})(c__19777__auto___22895,out))
;
return ((function (switch__19721__auto__,c__19777__auto___22895,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__19722__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__19722__auto____0 = (function (){
var statearr_22891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22891[(0)] = cljs$core$async$partition_by_$_state_machine__19722__auto__);

(statearr_22891[(1)] = (1));

return statearr_22891;
});
var cljs$core$async$partition_by_$_state_machine__19722__auto____1 = (function (state_22865){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_22865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e22892){if((e22892 instanceof Object)){
var ex__19725__auto__ = e22892;
var statearr_22893_22910 = state_22865;
(statearr_22893_22910[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22911 = state_22865;
state_22865 = G__22911;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__19722__auto__ = function(state_22865){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__19722__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__19722__auto____1.call(this,state_22865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__19722__auto____0;
cljs$core$async$partition_by_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__19722__auto____1;
return cljs$core$async$partition_by_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___22895,out))
})();
var state__19779__auto__ = (function (){var statearr_22894 = f__19778__auto__.call(null);
(statearr_22894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___22895);

return statearr_22894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___22895,out))
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

//# sourceMappingURL=async.js.map?rel=1434650229724