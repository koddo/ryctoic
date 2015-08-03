// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
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
com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
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
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
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

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20950_20954 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20951_20955 = null;
var count__20952_20956 = (0);
var i__20953_20957 = (0);
while(true){
if((i__20953_20957 < count__20952_20956)){
var k_20958 = cljs.core._nth.call(null,chunk__20951_20955,i__20953_20957);
var v_20959 = (b[k_20958]);
(a[k_20958] = v_20959);

var G__20960 = seq__20950_20954;
var G__20961 = chunk__20951_20955;
var G__20962 = count__20952_20956;
var G__20963 = (i__20953_20957 + (1));
seq__20950_20954 = G__20960;
chunk__20951_20955 = G__20961;
count__20952_20956 = G__20962;
i__20953_20957 = G__20963;
continue;
} else {
var temp__4126__auto___20964 = cljs.core.seq.call(null,seq__20950_20954);
if(temp__4126__auto___20964){
var seq__20950_20965__$1 = temp__4126__auto___20964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20950_20965__$1)){
var c__18572__auto___20966 = cljs.core.chunk_first.call(null,seq__20950_20965__$1);
var G__20967 = cljs.core.chunk_rest.call(null,seq__20950_20965__$1);
var G__20968 = c__18572__auto___20966;
var G__20969 = cljs.core.count.call(null,c__18572__auto___20966);
var G__20970 = (0);
seq__20950_20954 = G__20967;
chunk__20951_20955 = G__20968;
count__20952_20956 = G__20969;
i__20953_20957 = G__20970;
continue;
} else {
var k_20971 = cljs.core.first.call(null,seq__20950_20965__$1);
var v_20972 = (b[k_20971]);
(a[k_20971] = v_20972);

var G__20973 = cljs.core.next.call(null,seq__20950_20965__$1);
var G__20974 = null;
var G__20975 = (0);
var G__20976 = (0);
seq__20950_20954 = G__20973;
chunk__20951_20955 = G__20974;
count__20952_20956 = G__20975;
i__20953_20957 = G__20976;
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

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/VectorBuilder");
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
cognitect.transit.reader = (function() {
var cognitect$transit$reader = null;
var cognitect$transit$reader__1 = (function (type){
return cognitect$transit$reader.call(null,type,null);
});
var cognitect$transit$reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
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
var G__20977 = (i + (2));
var G__20978 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20977;
ret = G__20978;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$reader = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$reader__1.call(this,type);
case 2:
return cognitect$transit$reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$reader__1;
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$reader__2;
return cognitect$transit$reader;
})()
;
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

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/SymbolHandler");
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
var seq__20979_20983 = cljs.core.seq.call(null,v);
var chunk__20980_20984 = null;
var count__20981_20985 = (0);
var i__20982_20986 = (0);
while(true){
if((i__20982_20986 < count__20981_20985)){
var x_20987 = cljs.core._nth.call(null,chunk__20980_20984,i__20982_20986);
ret.push(x_20987);

var G__20988 = seq__20979_20983;
var G__20989 = chunk__20980_20984;
var G__20990 = count__20981_20985;
var G__20991 = (i__20982_20986 + (1));
seq__20979_20983 = G__20988;
chunk__20980_20984 = G__20989;
count__20981_20985 = G__20990;
i__20982_20986 = G__20991;
continue;
} else {
var temp__4126__auto___20992 = cljs.core.seq.call(null,seq__20979_20983);
if(temp__4126__auto___20992){
var seq__20979_20993__$1 = temp__4126__auto___20992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20979_20993__$1)){
var c__18572__auto___20994 = cljs.core.chunk_first.call(null,seq__20979_20993__$1);
var G__20995 = cljs.core.chunk_rest.call(null,seq__20979_20993__$1);
var G__20996 = c__18572__auto___20994;
var G__20997 = cljs.core.count.call(null,c__18572__auto___20994);
var G__20998 = (0);
seq__20979_20983 = G__20995;
chunk__20980_20984 = G__20996;
count__20981_20985 = G__20997;
i__20982_20986 = G__20998;
continue;
} else {
var x_20999 = cljs.core.first.call(null,seq__20979_20993__$1);
ret.push(x_20999);

var G__21000 = cljs.core.next.call(null,seq__20979_20993__$1);
var G__21001 = null;
var G__21002 = (0);
var G__21003 = (0);
seq__20979_20983 = G__21000;
chunk__20980_20984 = G__21001;
count__20981_20985 = G__21002;
i__20982_20986 = G__21003;
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

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/MapHandler");
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
var seq__21004_21008 = cljs.core.seq.call(null,v);
var chunk__21005_21009 = null;
var count__21006_21010 = (0);
var i__21007_21011 = (0);
while(true){
if((i__21007_21011 < count__21006_21010)){
var x_21012 = cljs.core._nth.call(null,chunk__21005_21009,i__21007_21011);
ret.push(x_21012);

var G__21013 = seq__21004_21008;
var G__21014 = chunk__21005_21009;
var G__21015 = count__21006_21010;
var G__21016 = (i__21007_21011 + (1));
seq__21004_21008 = G__21013;
chunk__21005_21009 = G__21014;
count__21006_21010 = G__21015;
i__21007_21011 = G__21016;
continue;
} else {
var temp__4126__auto___21017 = cljs.core.seq.call(null,seq__21004_21008);
if(temp__4126__auto___21017){
var seq__21004_21018__$1 = temp__4126__auto___21017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21004_21018__$1)){
var c__18572__auto___21019 = cljs.core.chunk_first.call(null,seq__21004_21018__$1);
var G__21020 = cljs.core.chunk_rest.call(null,seq__21004_21018__$1);
var G__21021 = c__18572__auto___21019;
var G__21022 = cljs.core.count.call(null,c__18572__auto___21019);
var G__21023 = (0);
seq__21004_21008 = G__21020;
chunk__21005_21009 = G__21021;
count__21006_21010 = G__21022;
i__21007_21011 = G__21023;
continue;
} else {
var x_21024 = cljs.core.first.call(null,seq__21004_21018__$1);
ret.push(x_21024);

var G__21025 = cljs.core.next.call(null,seq__21004_21018__$1);
var G__21026 = null;
var G__21027 = (0);
var G__21028 = (0);
seq__21004_21008 = G__21025;
chunk__21005_21009 = G__21026;
count__21006_21010 = G__21027;
i__21007_21011 = G__21028;
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

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/SetHandler");
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
var seq__21029_21033 = cljs.core.seq.call(null,v);
var chunk__21030_21034 = null;
var count__21031_21035 = (0);
var i__21032_21036 = (0);
while(true){
if((i__21032_21036 < count__21031_21035)){
var x_21037 = cljs.core._nth.call(null,chunk__21030_21034,i__21032_21036);
ret.push(x_21037);

var G__21038 = seq__21029_21033;
var G__21039 = chunk__21030_21034;
var G__21040 = count__21031_21035;
var G__21041 = (i__21032_21036 + (1));
seq__21029_21033 = G__21038;
chunk__21030_21034 = G__21039;
count__21031_21035 = G__21040;
i__21032_21036 = G__21041;
continue;
} else {
var temp__4126__auto___21042 = cljs.core.seq.call(null,seq__21029_21033);
if(temp__4126__auto___21042){
var seq__21029_21043__$1 = temp__4126__auto___21042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21029_21043__$1)){
var c__18572__auto___21044 = cljs.core.chunk_first.call(null,seq__21029_21043__$1);
var G__21045 = cljs.core.chunk_rest.call(null,seq__21029_21043__$1);
var G__21046 = c__18572__auto___21044;
var G__21047 = cljs.core.count.call(null,c__18572__auto___21044);
var G__21048 = (0);
seq__21029_21033 = G__21045;
chunk__21030_21034 = G__21046;
count__21031_21035 = G__21047;
i__21032_21036 = G__21048;
continue;
} else {
var x_21049 = cljs.core.first.call(null,seq__21029_21043__$1);
ret.push(x_21049);

var G__21050 = cljs.core.next.call(null,seq__21029_21043__$1);
var G__21051 = null;
var G__21052 = (0);
var G__21053 = (0);
seq__21029_21033 = G__21050;
chunk__21030_21034 = G__21051;
count__21031_21035 = G__21052;
i__21032_21036 = G__21053;
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

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function() {
var cognitect$transit$writer = null;
var cognitect$transit$writer__1 = (function (type){
return cognitect$transit$writer.call(null,type,null);
});
var cognitect$transit$writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21063 = cljs.core.clone.call(null,handlers);
x21063.forEach = ((function (x21063,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21064 = cljs.core.seq.call(null,coll);
var chunk__21065 = null;
var count__21066 = (0);
var i__21067 = (0);
while(true){
if((i__21067 < count__21066)){
var vec__21068 = cljs.core._nth.call(null,chunk__21065,i__21067);
var k = cljs.core.nth.call(null,vec__21068,(0),null);
var v = cljs.core.nth.call(null,vec__21068,(1),null);
f.call(null,v,k);

var G__21070 = seq__21064;
var G__21071 = chunk__21065;
var G__21072 = count__21066;
var G__21073 = (i__21067 + (1));
seq__21064 = G__21070;
chunk__21065 = G__21071;
count__21066 = G__21072;
i__21067 = G__21073;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__21064);
if(temp__4126__auto__){
var seq__21064__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21064__$1)){
var c__18572__auto__ = cljs.core.chunk_first.call(null,seq__21064__$1);
var G__21074 = cljs.core.chunk_rest.call(null,seq__21064__$1);
var G__21075 = c__18572__auto__;
var G__21076 = cljs.core.count.call(null,c__18572__auto__);
var G__21077 = (0);
seq__21064 = G__21074;
chunk__21065 = G__21075;
count__21066 = G__21076;
i__21067 = G__21077;
continue;
} else {
var vec__21069 = cljs.core.first.call(null,seq__21064__$1);
var k = cljs.core.nth.call(null,vec__21069,(0),null);
var v = cljs.core.nth.call(null,vec__21069,(1),null);
f.call(null,v,k);

var G__21078 = cljs.core.next.call(null,seq__21064__$1);
var G__21079 = null;
var G__21080 = (0);
var G__21081 = (0);
seq__21064 = G__21078;
chunk__21065 = G__21079;
count__21066 = G__21080;
i__21067 = G__21081;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21063,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21063;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21062 = obj;
G__21062.push(kfn.call(null,k),vfn.call(null,v));

return G__21062;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$writer = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$writer__1.call(this,type);
case 2:
return cognitect$transit$writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$writer__1;
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$writer__2;
return cognitect$transit$writer;
})()
;
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
cognitect.transit.write_handler = (function() {
var cognitect$transit$write_handler = null;
var cognitect$transit$write_handler__2 = (function (tag_fn,rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,null,null);
});
var cognitect$transit$write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var cognitect$transit$write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t21085 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t21085 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta21086){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta21086 = meta21086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t21085.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t21085.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t21085.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t21085.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t21085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21087){
var self__ = this;
var _21087__$1 = this;
return self__.meta21086;
});

cognitect.transit.t21085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21087,meta21086__$1){
var self__ = this;
var _21087__$1 = this;
return (new cognitect.transit.t21085(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta21086__$1));
});

cognitect.transit.t21085.cljs$lang$type = true;

cognitect.transit.t21085.cljs$lang$ctorStr = "cognitect.transit/t21085";

cognitect.transit.t21085.cljs$lang$ctorPrWriter = (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"cognitect.transit/t21085");
});

cognitect.transit.__GT_t21085 = (function cognitect$transit$write_handler_$___GT_t21085(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21086){
return (new cognitect.transit.t21085(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta21086));
});

}

return (new cognitect.transit.t21085(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cognitect$transit$write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cognitect$transit$write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return cognitect$transit$write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return cognitect$transit$write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return cognitect$transit$write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$write_handler__2;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$3 = cognitect$transit$write_handler__3;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4 = cognitect$transit$write_handler__4;
return cognitect$transit$write_handler;
})()
;
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

//# sourceMappingURL=transit.js.map?rel=1438354193160