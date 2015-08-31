// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29205_SHARP_,p2__29206_SHARP_){
var and__16460__auto__ = p1__29205_SHARP_;
if(cljs.core.truth_(and__16460__auto__)){
return p2__29206_SHARP_;
} else {
return and__16460__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16472__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16472__auto__){
return or__16472__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16472__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16472__auto__){
return or__16472__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16472__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17370__auto__,method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29207){
var map__29208 = p__29207;
var map__29208__$1 = ((((!((map__29208 == null)))?((((map__29208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29208):map__29208);
var file = cljs.core.get.call(null,map__29208__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29210){
var map__29211 = p__29210;
var map__29211__$1 = ((((!((map__29211 == null)))?((((map__29211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29211):map__29211);
var namespace = cljs.core.get.call(null,map__29211__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17370__auto__,method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29213){if((e29213 instanceof Error)){
var e = e29213;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29213;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var args29214 = [];
var len__17511__auto___29217 = arguments.length;
var i__17512__auto___29218 = (0);
while(true){
if((i__17512__auto___29218 < len__17511__auto___29217)){
args29214.push((arguments[i__17512__auto___29218]));

var G__29219 = (i__17512__auto___29218 + (1));
i__17512__auto___29218 = G__29219;
continue;
} else {
}
break;
}

var G__29216 = args29214.length;
switch (G__29216) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29214.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29221,callback){
var map__29224 = p__29221;
var map__29224__$1 = ((((!((map__29224 == null)))?((((map__29224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29224):map__29224);
var file_msg = map__29224__$1;
var request_url = cljs.core.get.call(null,map__29224__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29224,map__29224__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29224,map__29224__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29226){
var map__29229 = p__29226;
var map__29229__$1 = ((((!((map__29229 == null)))?((((map__29229.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29229.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29229):map__29229);
var file_msg = map__29229__$1;
var namespace = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__29229__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16472__auto__ = meta_data;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16460__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16460__auto__){
var or__16472__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
var or__16472__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16472__auto____$1)){
return or__16472__auto____$1;
} else {
var and__16460__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16460__auto____$1){
var or__16472__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16472__auto____$2){
return or__16472__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16460__auto____$1;
}
}
}
} else {
return and__16460__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29231,callback){
var map__29234 = p__29231;
var map__29234__$1 = ((((!((map__29234 == null)))?((((map__29234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29234):map__29234);
var file_msg = map__29234__$1;
var request_url = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29234__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19733__auto___29322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto___29322,out){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto___29322,out){
return (function (state_29304){
var state_val_29305 = (state_29304[(1)]);
if((state_val_29305 === (1))){
var inst_29282 = cljs.core.nth.call(null,files,(0),null);
var inst_29283 = cljs.core.nthnext.call(null,files,(1));
var inst_29284 = files;
var state_29304__$1 = (function (){var statearr_29306 = state_29304;
(statearr_29306[(7)] = inst_29282);

(statearr_29306[(8)] = inst_29283);

(statearr_29306[(9)] = inst_29284);

return statearr_29306;
})();
var statearr_29307_29323 = state_29304__$1;
(statearr_29307_29323[(2)] = null);

(statearr_29307_29323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (2))){
var inst_29284 = (state_29304[(9)]);
var inst_29287 = (state_29304[(10)]);
var inst_29287__$1 = cljs.core.nth.call(null,inst_29284,(0),null);
var inst_29288 = cljs.core.nthnext.call(null,inst_29284,(1));
var inst_29289 = (inst_29287__$1 == null);
var inst_29290 = cljs.core.not.call(null,inst_29289);
var state_29304__$1 = (function (){var statearr_29308 = state_29304;
(statearr_29308[(10)] = inst_29287__$1);

(statearr_29308[(11)] = inst_29288);

return statearr_29308;
})();
if(inst_29290){
var statearr_29309_29324 = state_29304__$1;
(statearr_29309_29324[(1)] = (4));

} else {
var statearr_29310_29325 = state_29304__$1;
(statearr_29310_29325[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (3))){
var inst_29302 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29304__$1,inst_29302);
} else {
if((state_val_29305 === (4))){
var inst_29287 = (state_29304[(10)]);
var inst_29292 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29287);
var state_29304__$1 = state_29304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29304__$1,(7),inst_29292);
} else {
if((state_val_29305 === (5))){
var inst_29298 = cljs.core.async.close_BANG_.call(null,out);
var state_29304__$1 = state_29304;
var statearr_29311_29326 = state_29304__$1;
(statearr_29311_29326[(2)] = inst_29298);

(statearr_29311_29326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (6))){
var inst_29300 = (state_29304[(2)]);
var state_29304__$1 = state_29304;
var statearr_29312_29327 = state_29304__$1;
(statearr_29312_29327[(2)] = inst_29300);

(statearr_29312_29327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29305 === (7))){
var inst_29288 = (state_29304[(11)]);
var inst_29294 = (state_29304[(2)]);
var inst_29295 = cljs.core.async.put_BANG_.call(null,out,inst_29294);
var inst_29284 = inst_29288;
var state_29304__$1 = (function (){var statearr_29313 = state_29304;
(statearr_29313[(9)] = inst_29284);

(statearr_29313[(12)] = inst_29295);

return statearr_29313;
})();
var statearr_29314_29328 = state_29304__$1;
(statearr_29314_29328[(2)] = null);

(statearr_29314_29328[(1)] = (2));


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
});})(c__19733__auto___29322,out))
;
return ((function (switch__19668__auto__,c__19733__auto___29322,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto____0 = (function (){
var statearr_29318 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29318[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto__);

(statearr_29318[(1)] = (1));

return statearr_29318;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto____1 = (function (state_29304){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_29304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e29319){if((e29319 instanceof Object)){
var ex__19672__auto__ = e29319;
var statearr_29320_29329 = state_29304;
(statearr_29320_29329[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29330 = state_29304;
state_29304 = G__29330;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto__ = function(state_29304){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto____1.call(this,state_29304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto___29322,out))
})();
var state__19735__auto__ = (function (){var statearr_29321 = f__19734__auto__.call(null);
(statearr_29321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto___29322);

return statearr_29321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto___29322,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29331,p__29332){
var map__29337 = p__29331;
var map__29337__$1 = ((((!((map__29337 == null)))?((((map__29337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29337):map__29337);
var opts = map__29337__$1;
var url_rewriter = cljs.core.get.call(null,map__29337__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29338 = p__29332;
var map__29338__$1 = ((((!((map__29338 == null)))?((((map__29338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29338):map__29338);
var file_msg = map__29338__$1;
var file = cljs.core.get.call(null,map__29338__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29341,opts){
var map__29345 = p__29341;
var map__29345__$1 = ((((!((map__29345 == null)))?((((map__29345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29345):map__29345);
var eval_body__$1 = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29345__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16460__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16460__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16460__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29347){var e = e29347;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29352,p__29353){
var map__29581 = p__29352;
var map__29581__$1 = ((((!((map__29581 == null)))?((((map__29581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29581):map__29581);
var opts = map__29581__$1;
var before_jsload = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__29581__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__29582 = p__29353;
var map__29582__$1 = ((((!((map__29582 == null)))?((((map__29582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29582):map__29582);
var msg = map__29582__$1;
var files = cljs.core.get.call(null,map__29582__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (state_29723){
var state_val_29724 = (state_29723[(1)]);
if((state_val_29724 === (7))){
var inst_29599 = (state_29723[(7)]);
var inst_29596 = (state_29723[(8)]);
var inst_29598 = (state_29723[(9)]);
var inst_29597 = (state_29723[(10)]);
var inst_29604 = cljs.core._nth.call(null,inst_29597,inst_29599);
var inst_29605 = figwheel.client.file_reloading.eval_body.call(null,inst_29604,opts);
var inst_29606 = (inst_29599 + (1));
var tmp29725 = inst_29596;
var tmp29726 = inst_29598;
var tmp29727 = inst_29597;
var inst_29596__$1 = tmp29725;
var inst_29597__$1 = tmp29727;
var inst_29598__$1 = tmp29726;
var inst_29599__$1 = inst_29606;
var state_29723__$1 = (function (){var statearr_29728 = state_29723;
(statearr_29728[(7)] = inst_29599__$1);

(statearr_29728[(11)] = inst_29605);

(statearr_29728[(8)] = inst_29596__$1);

(statearr_29728[(9)] = inst_29598__$1);

(statearr_29728[(10)] = inst_29597__$1);

return statearr_29728;
})();
var statearr_29729_29808 = state_29723__$1;
(statearr_29729_29808[(2)] = null);

(statearr_29729_29808[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (20))){
var inst_29648 = (state_29723[(12)]);
var inst_29642 = (state_29723[(13)]);
var inst_29646 = (state_29723[(14)]);
var inst_29641 = (state_29723[(15)]);
var inst_29645 = (state_29723[(16)]);
var inst_29651 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29653 = (function (){var all_files = inst_29641;
var files_SINGLEQUOTE_ = inst_29642;
var res_SINGLEQUOTE_ = inst_29645;
var res = inst_29646;
var files_not_loaded = inst_29648;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29648,inst_29642,inst_29646,inst_29641,inst_29645,inst_29651,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (p__29652){
var map__29730 = p__29652;
var map__29730__$1 = ((((!((map__29730 == null)))?((((map__29730.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29730.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);
var namespace = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29648,inst_29642,inst_29646,inst_29641,inst_29645,inst_29651,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29654 = cljs.core.map.call(null,inst_29653,inst_29646);
var inst_29655 = cljs.core.pr_str.call(null,inst_29654);
var inst_29656 = figwheel.client.utils.log.call(null,inst_29655);
var inst_29657 = (function (){var all_files = inst_29641;
var files_SINGLEQUOTE_ = inst_29642;
var res_SINGLEQUOTE_ = inst_29645;
var res = inst_29646;
var files_not_loaded = inst_29648;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29648,inst_29642,inst_29646,inst_29641,inst_29645,inst_29651,inst_29653,inst_29654,inst_29655,inst_29656,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29648,inst_29642,inst_29646,inst_29641,inst_29645,inst_29651,inst_29653,inst_29654,inst_29655,inst_29656,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29658 = setTimeout(inst_29657,(10));
var state_29723__$1 = (function (){var statearr_29732 = state_29723;
(statearr_29732[(17)] = inst_29656);

(statearr_29732[(18)] = inst_29651);

return statearr_29732;
})();
var statearr_29733_29809 = state_29723__$1;
(statearr_29733_29809[(2)] = inst_29658);

(statearr_29733_29809[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (27))){
var state_29723__$1 = state_29723;
var statearr_29734_29810 = state_29723__$1;
(statearr_29734_29810[(2)] = false);

(statearr_29734_29810[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (1))){
var inst_29588 = (state_29723[(19)]);
var inst_29585 = before_jsload.call(null,files);
var inst_29586 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29587 = (function (){return ((function (inst_29588,inst_29585,inst_29586,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (p1__29348_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29348_SHARP_);
});
;})(inst_29588,inst_29585,inst_29586,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29588__$1 = cljs.core.filter.call(null,inst_29587,files);
var inst_29589 = cljs.core.not_empty.call(null,inst_29588__$1);
var state_29723__$1 = (function (){var statearr_29735 = state_29723;
(statearr_29735[(20)] = inst_29585);

(statearr_29735[(21)] = inst_29586);

(statearr_29735[(19)] = inst_29588__$1);

return statearr_29735;
})();
if(cljs.core.truth_(inst_29589)){
var statearr_29736_29811 = state_29723__$1;
(statearr_29736_29811[(1)] = (2));

} else {
var statearr_29737_29812 = state_29723__$1;
(statearr_29737_29812[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (24))){
var state_29723__$1 = state_29723;
var statearr_29738_29813 = state_29723__$1;
(statearr_29738_29813[(2)] = null);

(statearr_29738_29813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (39))){
var state_29723__$1 = state_29723;
var statearr_29739_29814 = state_29723__$1;
(statearr_29739_29814[(2)] = null);

(statearr_29739_29814[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (4))){
var inst_29633 = (state_29723[(2)]);
var inst_29634 = (function (){return ((function (inst_29633,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (p1__29349_SHARP_){
var and__16460__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29349_SHARP_);
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29349_SHARP_));
} else {
return and__16460__auto__;
}
});
;})(inst_29633,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29635 = cljs.core.filter.call(null,inst_29634,files);
var state_29723__$1 = (function (){var statearr_29740 = state_29723;
(statearr_29740[(22)] = inst_29635);

(statearr_29740[(23)] = inst_29633);

return statearr_29740;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29741_29815 = state_29723__$1;
(statearr_29741_29815[(1)] = (16));

} else {
var statearr_29742_29816 = state_29723__$1;
(statearr_29742_29816[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (15))){
var inst_29623 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29743_29817 = state_29723__$1;
(statearr_29743_29817[(2)] = inst_29623);

(statearr_29743_29817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (21))){
var state_29723__$1 = state_29723;
var statearr_29744_29818 = state_29723__$1;
(statearr_29744_29818[(2)] = null);

(statearr_29744_29818[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (31))){
var inst_29680 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29745_29819 = state_29723__$1;
(statearr_29745_29819[(2)] = inst_29680);

(statearr_29745_29819[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (32))){
var inst_29668 = (state_29723[(24)]);
var inst_29685 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29668);
var state_29723__$1 = state_29723;
var statearr_29746_29820 = state_29723__$1;
(statearr_29746_29820[(2)] = inst_29685);

(statearr_29746_29820[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (40))){
var inst_29691 = (state_29723[(25)]);
var inst_29709 = (state_29723[(2)]);
var inst_29710 = cljs.core.not_empty.call(null,inst_29691);
var state_29723__$1 = (function (){var statearr_29747 = state_29723;
(statearr_29747[(26)] = inst_29709);

return statearr_29747;
})();
if(cljs.core.truth_(inst_29710)){
var statearr_29748_29821 = state_29723__$1;
(statearr_29748_29821[(1)] = (41));

} else {
var statearr_29749_29822 = state_29723__$1;
(statearr_29749_29822[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (33))){
var inst_29668 = (state_29723[(24)]);
var state_29723__$1 = state_29723;
var statearr_29750_29823 = state_29723__$1;
(statearr_29750_29823[(2)] = inst_29668);

(statearr_29750_29823[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (13))){
var inst_29609 = (state_29723[(27)]);
var inst_29613 = cljs.core.chunk_first.call(null,inst_29609);
var inst_29614 = cljs.core.chunk_rest.call(null,inst_29609);
var inst_29615 = cljs.core.count.call(null,inst_29613);
var inst_29596 = inst_29614;
var inst_29597 = inst_29613;
var inst_29598 = inst_29615;
var inst_29599 = (0);
var state_29723__$1 = (function (){var statearr_29751 = state_29723;
(statearr_29751[(7)] = inst_29599);

(statearr_29751[(8)] = inst_29596);

(statearr_29751[(9)] = inst_29598);

(statearr_29751[(10)] = inst_29597);

return statearr_29751;
})();
var statearr_29752_29824 = state_29723__$1;
(statearr_29752_29824[(2)] = null);

(statearr_29752_29824[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (22))){
var inst_29648 = (state_29723[(12)]);
var inst_29661 = (state_29723[(2)]);
var inst_29662 = cljs.core.not_empty.call(null,inst_29648);
var state_29723__$1 = (function (){var statearr_29753 = state_29723;
(statearr_29753[(28)] = inst_29661);

return statearr_29753;
})();
if(cljs.core.truth_(inst_29662)){
var statearr_29754_29825 = state_29723__$1;
(statearr_29754_29825[(1)] = (23));

} else {
var statearr_29755_29826 = state_29723__$1;
(statearr_29755_29826[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (36))){
var state_29723__$1 = state_29723;
var statearr_29756_29827 = state_29723__$1;
(statearr_29756_29827[(2)] = null);

(statearr_29756_29827[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (41))){
var inst_29691 = (state_29723[(25)]);
var inst_29712 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29691);
var inst_29713 = cljs.core.pr_str.call(null,inst_29712);
var inst_29714 = [cljs.core.str("not required: "),cljs.core.str(inst_29713)].join('');
var inst_29715 = figwheel.client.utils.log.call(null,inst_29714);
var state_29723__$1 = state_29723;
var statearr_29757_29828 = state_29723__$1;
(statearr_29757_29828[(2)] = inst_29715);

(statearr_29757_29828[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (43))){
var inst_29718 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29758_29829 = state_29723__$1;
(statearr_29758_29829[(2)] = inst_29718);

(statearr_29758_29829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (29))){
var state_29723__$1 = state_29723;
var statearr_29759_29830 = state_29723__$1;
(statearr_29759_29830[(2)] = true);

(statearr_29759_29830[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (6))){
var inst_29630 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29760_29831 = state_29723__$1;
(statearr_29760_29831[(2)] = inst_29630);

(statearr_29760_29831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (28))){
var inst_29683 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
if(cljs.core.truth_(inst_29683)){
var statearr_29761_29832 = state_29723__$1;
(statearr_29761_29832[(1)] = (32));

} else {
var statearr_29762_29833 = state_29723__$1;
(statearr_29762_29833[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (25))){
var inst_29721 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29723__$1,inst_29721);
} else {
if((state_val_29724 === (34))){
var inst_29689 = (state_29723[(29)]);
var inst_29688 = (state_29723[(2)]);
var inst_29689__$1 = cljs.core.get.call(null,inst_29688,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29690 = cljs.core.get.call(null,inst_29688,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29691 = cljs.core.get.call(null,inst_29688,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29692 = cljs.core.not_empty.call(null,inst_29689__$1);
var state_29723__$1 = (function (){var statearr_29763 = state_29723;
(statearr_29763[(30)] = inst_29690);

(statearr_29763[(29)] = inst_29689__$1);

(statearr_29763[(25)] = inst_29691);

return statearr_29763;
})();
if(cljs.core.truth_(inst_29692)){
var statearr_29764_29834 = state_29723__$1;
(statearr_29764_29834[(1)] = (35));

} else {
var statearr_29765_29835 = state_29723__$1;
(statearr_29765_29835[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (17))){
var inst_29635 = (state_29723[(22)]);
var state_29723__$1 = state_29723;
var statearr_29766_29836 = state_29723__$1;
(statearr_29766_29836[(2)] = inst_29635);

(statearr_29766_29836[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (3))){
var state_29723__$1 = state_29723;
var statearr_29767_29837 = state_29723__$1;
(statearr_29767_29837[(2)] = null);

(statearr_29767_29837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (12))){
var inst_29626 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29768_29838 = state_29723__$1;
(statearr_29768_29838[(2)] = inst_29626);

(statearr_29768_29838[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (2))){
var inst_29588 = (state_29723[(19)]);
var inst_29595 = cljs.core.seq.call(null,inst_29588);
var inst_29596 = inst_29595;
var inst_29597 = null;
var inst_29598 = (0);
var inst_29599 = (0);
var state_29723__$1 = (function (){var statearr_29769 = state_29723;
(statearr_29769[(7)] = inst_29599);

(statearr_29769[(8)] = inst_29596);

(statearr_29769[(9)] = inst_29598);

(statearr_29769[(10)] = inst_29597);

return statearr_29769;
})();
var statearr_29770_29839 = state_29723__$1;
(statearr_29770_29839[(2)] = null);

(statearr_29770_29839[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (23))){
var inst_29648 = (state_29723[(12)]);
var inst_29642 = (state_29723[(13)]);
var inst_29646 = (state_29723[(14)]);
var inst_29641 = (state_29723[(15)]);
var inst_29668 = (state_29723[(24)]);
var inst_29645 = (state_29723[(16)]);
var inst_29664 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29667 = (function (){var all_files = inst_29641;
var files_SINGLEQUOTE_ = inst_29642;
var res_SINGLEQUOTE_ = inst_29645;
var res = inst_29646;
var files_not_loaded = inst_29648;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29648,inst_29642,inst_29646,inst_29641,inst_29668,inst_29645,inst_29664,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (p__29666){
var map__29771 = p__29666;
var map__29771__$1 = ((((!((map__29771 == null)))?((((map__29771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29771):map__29771);
var meta_data = cljs.core.get.call(null,map__29771__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_29648,inst_29642,inst_29646,inst_29641,inst_29668,inst_29645,inst_29664,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29668__$1 = cljs.core.group_by.call(null,inst_29667,inst_29648);
var inst_29670 = (inst_29668__$1 == null);
var inst_29671 = cljs.core.not.call(null,inst_29670);
var state_29723__$1 = (function (){var statearr_29773 = state_29723;
(statearr_29773[(31)] = inst_29664);

(statearr_29773[(24)] = inst_29668__$1);

return statearr_29773;
})();
if(inst_29671){
var statearr_29774_29840 = state_29723__$1;
(statearr_29774_29840[(1)] = (26));

} else {
var statearr_29775_29841 = state_29723__$1;
(statearr_29775_29841[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (35))){
var inst_29689 = (state_29723[(29)]);
var inst_29694 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29689);
var inst_29695 = cljs.core.pr_str.call(null,inst_29694);
var inst_29696 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29695)].join('');
var inst_29697 = figwheel.client.utils.log.call(null,inst_29696);
var state_29723__$1 = state_29723;
var statearr_29776_29842 = state_29723__$1;
(statearr_29776_29842[(2)] = inst_29697);

(statearr_29776_29842[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (19))){
var inst_29642 = (state_29723[(13)]);
var inst_29646 = (state_29723[(14)]);
var inst_29641 = (state_29723[(15)]);
var inst_29645 = (state_29723[(16)]);
var inst_29645__$1 = (state_29723[(2)]);
var inst_29646__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29645__$1);
var inst_29647 = (function (){var all_files = inst_29641;
var files_SINGLEQUOTE_ = inst_29642;
var res_SINGLEQUOTE_ = inst_29645__$1;
var res = inst_29646__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29642,inst_29646,inst_29641,inst_29645,inst_29645__$1,inst_29646__$1,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (p1__29351_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29351_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_29642,inst_29646,inst_29641,inst_29645,inst_29645__$1,inst_29646__$1,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29648 = cljs.core.filter.call(null,inst_29647,inst_29645__$1);
var inst_29649 = cljs.core.not_empty.call(null,inst_29646__$1);
var state_29723__$1 = (function (){var statearr_29777 = state_29723;
(statearr_29777[(12)] = inst_29648);

(statearr_29777[(14)] = inst_29646__$1);

(statearr_29777[(16)] = inst_29645__$1);

return statearr_29777;
})();
if(cljs.core.truth_(inst_29649)){
var statearr_29778_29843 = state_29723__$1;
(statearr_29778_29843[(1)] = (20));

} else {
var statearr_29779_29844 = state_29723__$1;
(statearr_29779_29844[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (11))){
var state_29723__$1 = state_29723;
var statearr_29780_29845 = state_29723__$1;
(statearr_29780_29845[(2)] = null);

(statearr_29780_29845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (9))){
var inst_29628 = (state_29723[(2)]);
var state_29723__$1 = state_29723;
var statearr_29781_29846 = state_29723__$1;
(statearr_29781_29846[(2)] = inst_29628);

(statearr_29781_29846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (5))){
var inst_29599 = (state_29723[(7)]);
var inst_29598 = (state_29723[(9)]);
var inst_29601 = (inst_29599 < inst_29598);
var inst_29602 = inst_29601;
var state_29723__$1 = state_29723;
if(cljs.core.truth_(inst_29602)){
var statearr_29782_29847 = state_29723__$1;
(statearr_29782_29847[(1)] = (7));

} else {
var statearr_29783_29848 = state_29723__$1;
(statearr_29783_29848[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (14))){
var inst_29609 = (state_29723[(27)]);
var inst_29618 = cljs.core.first.call(null,inst_29609);
var inst_29619 = figwheel.client.file_reloading.eval_body.call(null,inst_29618,opts);
var inst_29620 = cljs.core.next.call(null,inst_29609);
var inst_29596 = inst_29620;
var inst_29597 = null;
var inst_29598 = (0);
var inst_29599 = (0);
var state_29723__$1 = (function (){var statearr_29784 = state_29723;
(statearr_29784[(7)] = inst_29599);

(statearr_29784[(8)] = inst_29596);

(statearr_29784[(9)] = inst_29598);

(statearr_29784[(10)] = inst_29597);

(statearr_29784[(32)] = inst_29619);

return statearr_29784;
})();
var statearr_29785_29849 = state_29723__$1;
(statearr_29785_29849[(2)] = null);

(statearr_29785_29849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (26))){
var inst_29668 = (state_29723[(24)]);
var inst_29673 = inst_29668.cljs$lang$protocol_mask$partition0$;
var inst_29674 = (inst_29673 & (64));
var inst_29675 = inst_29668.cljs$core$ISeq$;
var inst_29676 = (inst_29674) || (inst_29675);
var state_29723__$1 = state_29723;
if(cljs.core.truth_(inst_29676)){
var statearr_29786_29850 = state_29723__$1;
(statearr_29786_29850[(1)] = (29));

} else {
var statearr_29787_29851 = state_29723__$1;
(statearr_29787_29851[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (16))){
var inst_29635 = (state_29723[(22)]);
var inst_29637 = (function (){var all_files = inst_29635;
return ((function (all_files,inst_29635,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function (p1__29350_SHARP_){
return cljs.core.update_in.call(null,p1__29350_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29635,state_val_29724,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var inst_29638 = cljs.core.map.call(null,inst_29637,inst_29635);
var state_29723__$1 = state_29723;
var statearr_29788_29852 = state_29723__$1;
(statearr_29788_29852[(2)] = inst_29638);

(statearr_29788_29852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (38))){
var inst_29690 = (state_29723[(30)]);
var inst_29703 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29690);
var inst_29704 = cljs.core.pr_str.call(null,inst_29703);
var inst_29705 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29704)].join('');
var inst_29706 = figwheel.client.utils.log.call(null,inst_29705);
var state_29723__$1 = state_29723;
var statearr_29789_29853 = state_29723__$1;
(statearr_29789_29853[(2)] = inst_29706);

(statearr_29789_29853[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (30))){
var state_29723__$1 = state_29723;
var statearr_29790_29854 = state_29723__$1;
(statearr_29790_29854[(2)] = false);

(statearr_29790_29854[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (10))){
var inst_29609 = (state_29723[(27)]);
var inst_29611 = cljs.core.chunked_seq_QMARK_.call(null,inst_29609);
var state_29723__$1 = state_29723;
if(inst_29611){
var statearr_29791_29855 = state_29723__$1;
(statearr_29791_29855[(1)] = (13));

} else {
var statearr_29792_29856 = state_29723__$1;
(statearr_29792_29856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (18))){
var inst_29642 = (state_29723[(13)]);
var inst_29641 = (state_29723[(15)]);
var inst_29641__$1 = (state_29723[(2)]);
var inst_29642__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29641__$1);
var inst_29643 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29642__$1);
var state_29723__$1 = (function (){var statearr_29793 = state_29723;
(statearr_29793[(13)] = inst_29642__$1);

(statearr_29793[(15)] = inst_29641__$1);

return statearr_29793;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29723__$1,(19),inst_29643);
} else {
if((state_val_29724 === (42))){
var state_29723__$1 = state_29723;
var statearr_29794_29857 = state_29723__$1;
(statearr_29794_29857[(2)] = null);

(statearr_29794_29857[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (37))){
var inst_29690 = (state_29723[(30)]);
var inst_29700 = (state_29723[(2)]);
var inst_29701 = cljs.core.not_empty.call(null,inst_29690);
var state_29723__$1 = (function (){var statearr_29795 = state_29723;
(statearr_29795[(33)] = inst_29700);

return statearr_29795;
})();
if(cljs.core.truth_(inst_29701)){
var statearr_29796_29858 = state_29723__$1;
(statearr_29796_29858[(1)] = (38));

} else {
var statearr_29797_29859 = state_29723__$1;
(statearr_29797_29859[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29724 === (8))){
var inst_29609 = (state_29723[(27)]);
var inst_29596 = (state_29723[(8)]);
var inst_29609__$1 = cljs.core.seq.call(null,inst_29596);
var state_29723__$1 = (function (){var statearr_29798 = state_29723;
(statearr_29798[(27)] = inst_29609__$1);

return statearr_29798;
})();
if(inst_29609__$1){
var statearr_29799_29860 = state_29723__$1;
(statearr_29799_29860[(1)] = (10));

} else {
var statearr_29800_29861 = state_29723__$1;
(statearr_29800_29861[(1)] = (11));

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
});})(c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
;
return ((function (switch__19668__auto__,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto____0 = (function (){
var statearr_29804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29804[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto__);

(statearr_29804[(1)] = (1));

return statearr_29804;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto____1 = (function (state_29723){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_29723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e29805){if((e29805 instanceof Object)){
var ex__19672__auto__ = e29805;
var statearr_29806_29862 = state_29723;
(statearr_29806_29862[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29863 = state_29723;
state_29723 = G__29863;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto__ = function(state_29723){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto____1.call(this,state_29723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
})();
var state__19735__auto__ = (function (){var statearr_29807 = f__19734__auto__.call(null);
(statearr_29807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_29807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__,map__29581,map__29581__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__29582,map__29582__$1,msg,files))
);

return c__19733__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29866,link){
var map__29869 = p__29866;
var map__29869__$1 = ((((!((map__29869 == null)))?((((map__29869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29869):map__29869);
var file = cljs.core.get.call(null,map__29869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29869,map__29869__$1,file){
return (function (p1__29864_SHARP_,p2__29865_SHARP_){
if(cljs.core._EQ_.call(null,p1__29864_SHARP_,p2__29865_SHARP_)){
return p1__29864_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29869,map__29869__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29875){
var map__29876 = p__29875;
var map__29876__$1 = ((((!((map__29876 == null)))?((((map__29876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29876):map__29876);
var match_length = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29871_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29871_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var args29878 = [];
var len__17511__auto___29881 = arguments.length;
var i__17512__auto___29882 = (0);
while(true){
if((i__17512__auto___29882 < len__17511__auto___29881)){
args29878.push((arguments[i__17512__auto___29882]));

var G__29883 = (i__17512__auto___29882 + (1));
i__17512__auto___29882 = G__29883;
continue;
} else {
}
break;
}

var G__29880 = args29878.length;
switch (G__29880) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29878.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29885){
var map__29888 = p__29885;
var map__29888__$1 = ((((!((map__29888 == null)))?((((map__29888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29888):map__29888);
var f_data = map__29888__$1;
var file = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16472__auto__ = request_url;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29890,files_msg){
var map__29913 = p__29890;
var map__29913__$1 = ((((!((map__29913 == null)))?((((map__29913.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29913.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29913):map__29913);
var opts = map__29913__$1;
var on_cssload = cljs.core.get.call(null,map__29913__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29915_29935 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29916_29936 = null;
var count__29917_29937 = (0);
var i__29918_29938 = (0);
while(true){
if((i__29918_29938 < count__29917_29937)){
var f_29939 = cljs.core._nth.call(null,chunk__29916_29936,i__29918_29938);
figwheel.client.file_reloading.reload_css_file.call(null,f_29939);

var G__29940 = seq__29915_29935;
var G__29941 = chunk__29916_29936;
var G__29942 = count__29917_29937;
var G__29943 = (i__29918_29938 + (1));
seq__29915_29935 = G__29940;
chunk__29916_29936 = G__29941;
count__29917_29937 = G__29942;
i__29918_29938 = G__29943;
continue;
} else {
var temp__4425__auto___29944 = cljs.core.seq.call(null,seq__29915_29935);
if(temp__4425__auto___29944){
var seq__29915_29945__$1 = temp__4425__auto___29944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29915_29945__$1)){
var c__17256__auto___29946 = cljs.core.chunk_first.call(null,seq__29915_29945__$1);
var G__29947 = cljs.core.chunk_rest.call(null,seq__29915_29945__$1);
var G__29948 = c__17256__auto___29946;
var G__29949 = cljs.core.count.call(null,c__17256__auto___29946);
var G__29950 = (0);
seq__29915_29935 = G__29947;
chunk__29916_29936 = G__29948;
count__29917_29937 = G__29949;
i__29918_29938 = G__29950;
continue;
} else {
var f_29951 = cljs.core.first.call(null,seq__29915_29945__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29951);

var G__29952 = cljs.core.next.call(null,seq__29915_29945__$1);
var G__29953 = null;
var G__29954 = (0);
var G__29955 = (0);
seq__29915_29935 = G__29952;
chunk__29916_29936 = G__29953;
count__29917_29937 = G__29954;
i__29918_29938 = G__29955;
continue;
}
} else {
}
}
break;
}

var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__,map__29913,map__29913__$1,opts,on_cssload){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__,map__29913,map__29913__$1,opts,on_cssload){
return (function (state_29925){
var state_val_29926 = (state_29925[(1)]);
if((state_val_29926 === (1))){
var inst_29919 = cljs.core.async.timeout.call(null,(100));
var state_29925__$1 = state_29925;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29925__$1,(2),inst_29919);
} else {
if((state_val_29926 === (2))){
var inst_29921 = (state_29925[(2)]);
var inst_29922 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_29923 = on_cssload.call(null,inst_29922);
var state_29925__$1 = (function (){var statearr_29927 = state_29925;
(statearr_29927[(7)] = inst_29921);

return statearr_29927;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29925__$1,inst_29923);
} else {
return null;
}
}
});})(c__19733__auto__,map__29913,map__29913__$1,opts,on_cssload))
;
return ((function (switch__19668__auto__,c__19733__auto__,map__29913,map__29913__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto____0 = (function (){
var statearr_29931 = [null,null,null,null,null,null,null,null];
(statearr_29931[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto__);

(statearr_29931[(1)] = (1));

return statearr_29931;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto____1 = (function (state_29925){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_29925);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e29932){if((e29932 instanceof Object)){
var ex__19672__auto__ = e29932;
var statearr_29933_29956 = state_29925;
(statearr_29933_29956[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29925);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29957 = state_29925;
state_29925 = G__29957;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto__ = function(state_29925){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto____1.call(this,state_29925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__,map__29913,map__29913__$1,opts,on_cssload))
})();
var state__19735__auto__ = (function (){var statearr_29934 = f__19734__auto__.call(null);
(statearr_29934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_29934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__,map__29913,map__29913__$1,opts,on_cssload))
);

return c__19733__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440504643390