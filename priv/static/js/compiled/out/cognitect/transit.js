// Compiled by ClojureScript 1.7.48 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__24387_24391 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__24388_24392 = null;
var count__24389_24393 = (0);
var i__24390_24394 = (0);
while(true){
if((i__24390_24394 < count__24389_24393)){
var k_24395 = cljs.core._nth.call(null,chunk__24388_24392,i__24390_24394);
var v_24396 = (b[k_24395]);
(a[k_24395] = v_24396);

var G__24397 = seq__24387_24391;
var G__24398 = chunk__24388_24392;
var G__24399 = count__24389_24393;
var G__24400 = (i__24390_24394 + (1));
seq__24387_24391 = G__24397;
chunk__24388_24392 = G__24398;
count__24389_24393 = G__24399;
i__24390_24394 = G__24400;
continue;
} else {
var temp__4425__auto___24401 = cljs.core.seq.call(null,seq__24387_24391);
if(temp__4425__auto___24401){
var seq__24387_24402__$1 = temp__4425__auto___24401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24387_24402__$1)){
var c__17256__auto___24403 = cljs.core.chunk_first.call(null,seq__24387_24402__$1);
var G__24404 = cljs.core.chunk_rest.call(null,seq__24387_24402__$1);
var G__24405 = c__17256__auto___24403;
var G__24406 = cljs.core.count.call(null,c__17256__auto___24403);
var G__24407 = (0);
seq__24387_24391 = G__24404;
chunk__24388_24392 = G__24405;
count__24389_24393 = G__24406;
i__24390_24394 = G__24407;
continue;
} else {
var k_24408 = cljs.core.first.call(null,seq__24387_24402__$1);
var v_24409 = (b[k_24408]);
(a[k_24408] = v_24409);

var G__24410 = cljs.core.next.call(null,seq__24387_24402__$1);
var G__24411 = null;
var G__24412 = (0);
var G__24413 = (0);
seq__24387_24391 = G__24410;
chunk__24388_24392 = G__24411;
count__24389_24393 = G__24412;
i__24390_24394 = G__24413;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var args24414 = [];
var len__17511__auto___24417 = arguments.length;
var i__17512__auto___24418 = (0);
while(true){
if((i__17512__auto___24418 < len__17511__auto___24417)){
args24414.push((arguments[i__17512__auto___24418]));

var G__24419 = (i__17512__auto___24418 + (1));
i__17512__auto___24418 = G__24419;
continue;
} else {
}
break;
}

var G__24416 = args24414.length;
switch (G__24416) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24414.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__24421 = (i + (2));
var G__24422 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__24421;
ret = G__24422;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24423_24427 = cljs.core.seq.call(null,v);
var chunk__24424_24428 = null;
var count__24425_24429 = (0);
var i__24426_24430 = (0);
while(true){
if((i__24426_24430 < count__24425_24429)){
var x_24431 = cljs.core._nth.call(null,chunk__24424_24428,i__24426_24430);
ret.push(x_24431);

var G__24432 = seq__24423_24427;
var G__24433 = chunk__24424_24428;
var G__24434 = count__24425_24429;
var G__24435 = (i__24426_24430 + (1));
seq__24423_24427 = G__24432;
chunk__24424_24428 = G__24433;
count__24425_24429 = G__24434;
i__24426_24430 = G__24435;
continue;
} else {
var temp__4425__auto___24436 = cljs.core.seq.call(null,seq__24423_24427);
if(temp__4425__auto___24436){
var seq__24423_24437__$1 = temp__4425__auto___24436;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24423_24437__$1)){
var c__17256__auto___24438 = cljs.core.chunk_first.call(null,seq__24423_24437__$1);
var G__24439 = cljs.core.chunk_rest.call(null,seq__24423_24437__$1);
var G__24440 = c__17256__auto___24438;
var G__24441 = cljs.core.count.call(null,c__17256__auto___24438);
var G__24442 = (0);
seq__24423_24427 = G__24439;
chunk__24424_24428 = G__24440;
count__24425_24429 = G__24441;
i__24426_24430 = G__24442;
continue;
} else {
var x_24443 = cljs.core.first.call(null,seq__24423_24437__$1);
ret.push(x_24443);

var G__24444 = cljs.core.next.call(null,seq__24423_24437__$1);
var G__24445 = null;
var G__24446 = (0);
var G__24447 = (0);
seq__24423_24427 = G__24444;
chunk__24424_24428 = G__24445;
count__24425_24429 = G__24446;
i__24426_24430 = G__24447;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24448_24452 = cljs.core.seq.call(null,v);
var chunk__24449_24453 = null;
var count__24450_24454 = (0);
var i__24451_24455 = (0);
while(true){
if((i__24451_24455 < count__24450_24454)){
var x_24456 = cljs.core._nth.call(null,chunk__24449_24453,i__24451_24455);
ret.push(x_24456);

var G__24457 = seq__24448_24452;
var G__24458 = chunk__24449_24453;
var G__24459 = count__24450_24454;
var G__24460 = (i__24451_24455 + (1));
seq__24448_24452 = G__24457;
chunk__24449_24453 = G__24458;
count__24450_24454 = G__24459;
i__24451_24455 = G__24460;
continue;
} else {
var temp__4425__auto___24461 = cljs.core.seq.call(null,seq__24448_24452);
if(temp__4425__auto___24461){
var seq__24448_24462__$1 = temp__4425__auto___24461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24448_24462__$1)){
var c__17256__auto___24463 = cljs.core.chunk_first.call(null,seq__24448_24462__$1);
var G__24464 = cljs.core.chunk_rest.call(null,seq__24448_24462__$1);
var G__24465 = c__17256__auto___24463;
var G__24466 = cljs.core.count.call(null,c__17256__auto___24463);
var G__24467 = (0);
seq__24448_24452 = G__24464;
chunk__24449_24453 = G__24465;
count__24450_24454 = G__24466;
i__24451_24455 = G__24467;
continue;
} else {
var x_24468 = cljs.core.first.call(null,seq__24448_24462__$1);
ret.push(x_24468);

var G__24469 = cljs.core.next.call(null,seq__24448_24462__$1);
var G__24470 = null;
var G__24471 = (0);
var G__24472 = (0);
seq__24448_24452 = G__24469;
chunk__24449_24453 = G__24470;
count__24450_24454 = G__24471;
i__24451_24455 = G__24472;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__24473_24477 = cljs.core.seq.call(null,v);
var chunk__24474_24478 = null;
var count__24475_24479 = (0);
var i__24476_24480 = (0);
while(true){
if((i__24476_24480 < count__24475_24479)){
var x_24481 = cljs.core._nth.call(null,chunk__24474_24478,i__24476_24480);
ret.push(x_24481);

var G__24482 = seq__24473_24477;
var G__24483 = chunk__24474_24478;
var G__24484 = count__24475_24479;
var G__24485 = (i__24476_24480 + (1));
seq__24473_24477 = G__24482;
chunk__24474_24478 = G__24483;
count__24475_24479 = G__24484;
i__24476_24480 = G__24485;
continue;
} else {
var temp__4425__auto___24486 = cljs.core.seq.call(null,seq__24473_24477);
if(temp__4425__auto___24486){
var seq__24473_24487__$1 = temp__4425__auto___24486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24473_24487__$1)){
var c__17256__auto___24488 = cljs.core.chunk_first.call(null,seq__24473_24487__$1);
var G__24489 = cljs.core.chunk_rest.call(null,seq__24473_24487__$1);
var G__24490 = c__17256__auto___24488;
var G__24491 = cljs.core.count.call(null,c__17256__auto___24488);
var G__24492 = (0);
seq__24473_24477 = G__24489;
chunk__24474_24478 = G__24490;
count__24475_24479 = G__24491;
i__24476_24480 = G__24492;
continue;
} else {
var x_24493 = cljs.core.first.call(null,seq__24473_24487__$1);
ret.push(x_24493);

var G__24494 = cljs.core.next.call(null,seq__24473_24487__$1);
var G__24495 = null;
var G__24496 = (0);
var G__24497 = (0);
seq__24473_24477 = G__24494;
chunk__24474_24478 = G__24495;
count__24475_24479 = G__24496;
i__24476_24480 = G__24497;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var args24498 = [];
var len__17511__auto___24509 = arguments.length;
var i__17512__auto___24510 = (0);
while(true){
if((i__17512__auto___24510 < len__17511__auto___24509)){
args24498.push((arguments[i__17512__auto___24510]));

var G__24511 = (i__17512__auto___24510 + (1));
i__17512__auto___24510 = G__24511;
continue;
} else {
}
break;
}

var G__24500 = args24498.length;
switch (G__24500) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24498.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24501 = obj;
G__24501.push(kfn.call(null,k),vfn.call(null,v));

return G__24501;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24502 = cljs.core.clone.call(null,handlers);
x24502.forEach = ((function (x24502,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24503 = cljs.core.seq.call(null,coll);
var chunk__24504 = null;
var count__24505 = (0);
var i__24506 = (0);
while(true){
if((i__24506 < count__24505)){
var vec__24507 = cljs.core._nth.call(null,chunk__24504,i__24506);
var k = cljs.core.nth.call(null,vec__24507,(0),null);
var v = cljs.core.nth.call(null,vec__24507,(1),null);
f.call(null,v,k);

var G__24513 = seq__24503;
var G__24514 = chunk__24504;
var G__24515 = count__24505;
var G__24516 = (i__24506 + (1));
seq__24503 = G__24513;
chunk__24504 = G__24514;
count__24505 = G__24515;
i__24506 = G__24516;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24503);
if(temp__4425__auto__){
var seq__24503__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24503__$1)){
var c__17256__auto__ = cljs.core.chunk_first.call(null,seq__24503__$1);
var G__24517 = cljs.core.chunk_rest.call(null,seq__24503__$1);
var G__24518 = c__17256__auto__;
var G__24519 = cljs.core.count.call(null,c__17256__auto__);
var G__24520 = (0);
seq__24503 = G__24517;
chunk__24504 = G__24518;
count__24505 = G__24519;
i__24506 = G__24520;
continue;
} else {
var vec__24508 = cljs.core.first.call(null,seq__24503__$1);
var k = cljs.core.nth.call(null,vec__24508,(0),null);
var v = cljs.core.nth.call(null,vec__24508,(1),null);
f.call(null,v,k);

var G__24521 = cljs.core.next.call(null,seq__24503__$1);
var G__24522 = null;
var G__24523 = (0);
var G__24524 = (0);
seq__24503 = G__24521;
chunk__24504 = G__24522;
count__24505 = G__24523;
i__24506 = G__24524;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24502,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24502;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var args24525 = [];
var len__17511__auto___24531 = arguments.length;
var i__17512__auto___24532 = (0);
while(true){
if((i__17512__auto___24532 < len__17511__auto___24531)){
args24525.push((arguments[i__17512__auto___24532]));

var G__24533 = (i__17512__auto___24532 + (1));
i__17512__auto___24532 = G__24533;
continue;
} else {
}
break;
}

var G__24527 = args24525.length;
switch (G__24527) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24525.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t24528 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t24528 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24529){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24529 = meta24529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t24528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24530,meta24529__$1){
var self__ = this;
var _24530__$1 = this;
return (new cognitect.transit.t24528(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24529__$1));
});

cognitect.transit.t24528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24530){
var self__ = this;
var _24530__$1 = this;
return self__.meta24529;
});

cognitect.transit.t24528.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t24528.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t24528.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t24528.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t24528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24529","meta24529",164263602,null)], null);
});

cognitect.transit.t24528.cljs$lang$type = true;

cognitect.transit.t24528.cljs$lang$ctorStr = "cognitect.transit/t24528";

cognitect.transit.t24528.cljs$lang$ctorPrWriter = (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"cognitect.transit/t24528");
});

cognitect.transit.__GT_t24528 = (function cognitect$transit$__GT_t24528(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24529){
return (new cognitect.transit.t24528(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24529));
});

}

return (new cognitect.transit.t24528(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1440504625056