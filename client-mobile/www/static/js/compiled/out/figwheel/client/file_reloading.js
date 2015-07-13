// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__29417_SHARP_,p2__29418_SHARP_){
var and__17775__auto__ = p1__29417_SHARP_;
if(cljs.core.truth_(and__17775__auto__)){
return p2__29418_SHARP_;
} else {
return and__17775__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__17787__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17787__auto__){
return or__17787__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__29420_SHARP_,p2__29419_SHARP_){
return [cljs.core.str(p2__29419_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
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
if(cljs.core.truth_((function (){var or__17787__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__17787__auto__){
return or__17787__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__17787__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18686__auto__,method_table__18682__auto__,prefer_table__18683__auto__,method_cache__18684__auto__,cached_hierarchy__18685__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29421){
var map__29422 = p__29421;
var map__29422__$1 = ((cljs.core.seq_QMARK_.call(null,map__29422))?cljs.core.apply.call(null,cljs.core.hash_map,map__29422):map__29422);
var file = cljs.core.get.call(null,map__29422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__29423){
var map__29424 = p__29423;
var map__29424__$1 = ((cljs.core.seq_QMARK_.call(null,map__29424))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);
var namespace = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__18682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18686__auto__,method_table__18682__auto__,prefer_table__18683__auto__,method_cache__18684__auto__,cached_hierarchy__18685__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e29425){if((e29425 instanceof Error)){
var e = e29425;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29425;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29426,callback){
var map__29428 = p__29426;
var map__29428__$1 = ((cljs.core.seq_QMARK_.call(null,map__29428))?cljs.core.apply.call(null,cljs.core.hash_map,map__29428):map__29428);
var file_msg = map__29428__$1;
var request_url = cljs.core.get.call(null,map__29428__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29428,map__29428__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29428,map__29428__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29429){
var map__29431 = p__29429;
var map__29431__$1 = ((cljs.core.seq_QMARK_.call(null,map__29431))?cljs.core.apply.call(null,cljs.core.hash_map,map__29431):map__29431);
var file_msg = map__29431__$1;
var meta_data = cljs.core.get.call(null,map__29431__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__29431__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__17787__auto__ = meta_data;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__17775__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__17775__auto__){
var or__17787__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__17787__auto____$1)){
return or__17787__auto____$1;
} else {
var and__17775__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__17775__auto____$1){
var or__17787__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__17787__auto____$2){
return or__17787__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__17775__auto____$1;
}
}
}
} else {
return and__17775__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29432,callback){
var map__29434 = p__29432;
var map__29434__$1 = ((cljs.core.seq_QMARK_.call(null,map__29434))?cljs.core.apply.call(null,cljs.core.hash_map,map__29434):map__29434);
var file_msg = map__29434__$1;
var namespace = cljs.core.get.call(null,map__29434__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__29434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__20093__auto___29521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto___29521,out){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto___29521,out){
return (function (state_29503){
var state_val_29504 = (state_29503[(1)]);
if((state_val_29504 === (7))){
var inst_29487 = (state_29503[(7)]);
var inst_29493 = (state_29503[(2)]);
var inst_29494 = cljs.core.async.put_BANG_.call(null,out,inst_29493);
var inst_29483 = inst_29487;
var state_29503__$1 = (function (){var statearr_29505 = state_29503;
(statearr_29505[(8)] = inst_29483);

(statearr_29505[(9)] = inst_29494);

return statearr_29505;
})();
var statearr_29506_29522 = state_29503__$1;
(statearr_29506_29522[(2)] = null);

(statearr_29506_29522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (6))){
var inst_29499 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
var statearr_29507_29523 = state_29503__$1;
(statearr_29507_29523[(2)] = inst_29499);

(statearr_29507_29523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (5))){
var inst_29497 = cljs.core.async.close_BANG_.call(null,out);
var state_29503__$1 = state_29503;
var statearr_29508_29524 = state_29503__$1;
(statearr_29508_29524[(2)] = inst_29497);

(statearr_29508_29524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (4))){
var inst_29486 = (state_29503[(10)]);
var inst_29491 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29486);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29503__$1,(7),inst_29491);
} else {
if((state_val_29504 === (3))){
var inst_29501 = (state_29503[(2)]);
var state_29503__$1 = state_29503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29503__$1,inst_29501);
} else {
if((state_val_29504 === (2))){
var inst_29486 = (state_29503[(10)]);
var inst_29483 = (state_29503[(8)]);
var inst_29486__$1 = cljs.core.nth.call(null,inst_29483,(0),null);
var inst_29487 = cljs.core.nthnext.call(null,inst_29483,(1));
var inst_29488 = (inst_29486__$1 == null);
var inst_29489 = cljs.core.not.call(null,inst_29488);
var state_29503__$1 = (function (){var statearr_29509 = state_29503;
(statearr_29509[(10)] = inst_29486__$1);

(statearr_29509[(7)] = inst_29487);

return statearr_29509;
})();
if(inst_29489){
var statearr_29510_29525 = state_29503__$1;
(statearr_29510_29525[(1)] = (4));

} else {
var statearr_29511_29526 = state_29503__$1;
(statearr_29511_29526[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29504 === (1))){
var inst_29481 = cljs.core.nth.call(null,files,(0),null);
var inst_29482 = cljs.core.nthnext.call(null,files,(1));
var inst_29483 = files;
var state_29503__$1 = (function (){var statearr_29512 = state_29503;
(statearr_29512[(11)] = inst_29482);

(statearr_29512[(8)] = inst_29483);

(statearr_29512[(12)] = inst_29481);

return statearr_29512;
})();
var statearr_29513_29527 = state_29503__$1;
(statearr_29513_29527[(2)] = null);

(statearr_29513_29527[(1)] = (2));


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
});})(c__20093__auto___29521,out))
;
return ((function (switch__20037__auto__,c__20093__auto___29521,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto____0 = (function (){
var statearr_29517 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29517[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto__);

(statearr_29517[(1)] = (1));

return statearr_29517;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto____1 = (function (state_29503){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_29503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e29518){if((e29518 instanceof Object)){
var ex__20041__auto__ = e29518;
var statearr_29519_29528 = state_29503;
(statearr_29519_29528[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29529 = state_29503;
state_29503 = G__29529;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto__ = function(state_29503){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto____1.call(this,state_29503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto___29521,out))
})();
var state__20095__auto__ = (function (){var statearr_29520 = f__20094__auto__.call(null);
(statearr_29520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto___29521);

return statearr_29520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto___29521,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__29530,p__29531){
var map__29534 = p__29530;
var map__29534__$1 = ((cljs.core.seq_QMARK_.call(null,map__29534))?cljs.core.apply.call(null,cljs.core.hash_map,map__29534):map__29534);
var opts = map__29534__$1;
var url_rewriter = cljs.core.get.call(null,map__29534__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__29535 = p__29531;
var map__29535__$1 = ((cljs.core.seq_QMARK_.call(null,map__29535))?cljs.core.apply.call(null,cljs.core.hash_map,map__29535):map__29535);
var file_msg = map__29535__$1;
var file = cljs.core.get.call(null,map__29535__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29536){
var map__29539 = p__29536;
var map__29539__$1 = ((cljs.core.seq_QMARK_.call(null,map__29539))?cljs.core.apply.call(null,cljs.core.hash_map,map__29539):map__29539);
var file = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__29539__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__17775__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17775__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17775__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e29540){var e = e29540;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29545,p__29546){
var map__29747 = p__29545;
var map__29747__$1 = ((cljs.core.seq_QMARK_.call(null,map__29747))?cljs.core.apply.call(null,cljs.core.hash_map,map__29747):map__29747);
var opts = map__29747__$1;
var load_unchanged_files = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__29747__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__29748 = p__29546;
var map__29748__$1 = ((cljs.core.seq_QMARK_.call(null,map__29748))?cljs.core.apply.call(null,cljs.core.hash_map,map__29748):map__29748);
var msg = map__29748__$1;
var files = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (state_29872){
var state_val_29873 = (state_29872[(1)]);
if((state_val_29873 === (7))){
var inst_29759 = (state_29872[(7)]);
var inst_29762 = (state_29872[(8)]);
var inst_29760 = (state_29872[(9)]);
var inst_29761 = (state_29872[(10)]);
var inst_29767 = cljs.core._nth.call(null,inst_29760,inst_29762);
var inst_29768 = figwheel.client.file_reloading.eval_body.call(null,inst_29767);
var inst_29769 = (inst_29762 + (1));
var tmp29874 = inst_29759;
var tmp29875 = inst_29760;
var tmp29876 = inst_29761;
var inst_29759__$1 = tmp29874;
var inst_29760__$1 = tmp29875;
var inst_29761__$1 = tmp29876;
var inst_29762__$1 = inst_29769;
var state_29872__$1 = (function (){var statearr_29877 = state_29872;
(statearr_29877[(7)] = inst_29759__$1);

(statearr_29877[(11)] = inst_29768);

(statearr_29877[(8)] = inst_29762__$1);

(statearr_29877[(9)] = inst_29760__$1);

(statearr_29877[(10)] = inst_29761__$1);

return statearr_29877;
})();
var statearr_29878_29947 = state_29872__$1;
(statearr_29878_29947[(2)] = null);

(statearr_29878_29947[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (20))){
var inst_29809 = (state_29872[(12)]);
var inst_29808 = (state_29872[(13)]);
var inst_29805 = (state_29872[(14)]);
var inst_29804 = (state_29872[(15)]);
var inst_29811 = (state_29872[(16)]);
var inst_29814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29816 = (function (){var files_not_loaded = inst_29811;
var res = inst_29809;
var res_SINGLEQUOTE_ = inst_29808;
var files_SINGLEQUOTE_ = inst_29805;
var all_files = inst_29804;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29805,inst_29804,inst_29811,inst_29814,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (p__29815){
var map__29879 = p__29815;
var map__29879__$1 = ((cljs.core.seq_QMARK_.call(null,map__29879))?cljs.core.apply.call(null,cljs.core.hash_map,map__29879):map__29879);
var file = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__29879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29805,inst_29804,inst_29811,inst_29814,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29817 = cljs.core.map.call(null,inst_29816,inst_29809);
var inst_29818 = cljs.core.pr_str.call(null,inst_29817);
var inst_29819 = figwheel.client.utils.log.call(null,inst_29818);
var inst_29820 = (function (){var files_not_loaded = inst_29811;
var res = inst_29809;
var res_SINGLEQUOTE_ = inst_29808;
var files_SINGLEQUOTE_ = inst_29805;
var all_files = inst_29804;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29805,inst_29804,inst_29811,inst_29814,inst_29816,inst_29817,inst_29818,inst_29819,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29805,inst_29804,inst_29811,inst_29814,inst_29816,inst_29817,inst_29818,inst_29819,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29821 = setTimeout(inst_29820,(10));
var state_29872__$1 = (function (){var statearr_29880 = state_29872;
(statearr_29880[(17)] = inst_29814);

(statearr_29880[(18)] = inst_29819);

return statearr_29880;
})();
var statearr_29881_29948 = state_29872__$1;
(statearr_29881_29948[(2)] = inst_29821);

(statearr_29881_29948[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (27))){
var inst_29831 = (state_29872[(19)]);
var state_29872__$1 = state_29872;
var statearr_29882_29949 = state_29872__$1;
(statearr_29882_29949[(2)] = inst_29831);

(statearr_29882_29949[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (1))){
var inst_29751 = (state_29872[(20)]);
var inst_29749 = before_jsload.call(null,files);
var inst_29750 = (function (){return ((function (inst_29751,inst_29749,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (p1__29541_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29541_SHARP_);
});
;})(inst_29751,inst_29749,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29751__$1 = cljs.core.filter.call(null,inst_29750,files);
var inst_29752 = cljs.core.not_empty.call(null,inst_29751__$1);
var state_29872__$1 = (function (){var statearr_29883 = state_29872;
(statearr_29883[(20)] = inst_29751__$1);

(statearr_29883[(21)] = inst_29749);

return statearr_29883;
})();
if(cljs.core.truth_(inst_29752)){
var statearr_29884_29950 = state_29872__$1;
(statearr_29884_29950[(1)] = (2));

} else {
var statearr_29885_29951 = state_29872__$1;
(statearr_29885_29951[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (24))){
var state_29872__$1 = state_29872;
var statearr_29886_29952 = state_29872__$1;
(statearr_29886_29952[(2)] = null);

(statearr_29886_29952[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (4))){
var inst_29796 = (state_29872[(2)]);
var inst_29797 = (function (){return ((function (inst_29796,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (p1__29542_SHARP_){
var and__17775__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29542_SHARP_);
if(cljs.core.truth_(and__17775__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29542_SHARP_));
} else {
return and__17775__auto__;
}
});
;})(inst_29796,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29798 = cljs.core.filter.call(null,inst_29797,files);
var state_29872__$1 = (function (){var statearr_29887 = state_29872;
(statearr_29887[(22)] = inst_29796);

(statearr_29887[(23)] = inst_29798);

return statearr_29887;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_29888_29953 = state_29872__$1;
(statearr_29888_29953[(1)] = (16));

} else {
var statearr_29889_29954 = state_29872__$1;
(statearr_29889_29954[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (15))){
var inst_29786 = (state_29872[(2)]);
var state_29872__$1 = state_29872;
var statearr_29890_29955 = state_29872__$1;
(statearr_29890_29955[(2)] = inst_29786);

(statearr_29890_29955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (21))){
var state_29872__$1 = state_29872;
var statearr_29891_29956 = state_29872__$1;
(statearr_29891_29956[(2)] = null);

(statearr_29891_29956[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (31))){
var inst_29839 = (state_29872[(24)]);
var inst_29849 = (state_29872[(2)]);
var inst_29850 = cljs.core.not_empty.call(null,inst_29839);
var state_29872__$1 = (function (){var statearr_29892 = state_29872;
(statearr_29892[(25)] = inst_29849);

return statearr_29892;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29893_29957 = state_29872__$1;
(statearr_29893_29957[(1)] = (32));

} else {
var statearr_29894_29958 = state_29872__$1;
(statearr_29894_29958[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (32))){
var inst_29839 = (state_29872[(24)]);
var inst_29852 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29839);
var inst_29853 = cljs.core.pr_str.call(null,inst_29852);
var inst_29854 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_29853)].join('');
var inst_29855 = figwheel.client.utils.log.call(null,inst_29854);
var state_29872__$1 = state_29872;
var statearr_29895_29959 = state_29872__$1;
(statearr_29895_29959[(2)] = inst_29855);

(statearr_29895_29959[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (33))){
var state_29872__$1 = state_29872;
var statearr_29896_29960 = state_29872__$1;
(statearr_29896_29960[(2)] = null);

(statearr_29896_29960[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (13))){
var inst_29772 = (state_29872[(26)]);
var inst_29776 = cljs.core.chunk_first.call(null,inst_29772);
var inst_29777 = cljs.core.chunk_rest.call(null,inst_29772);
var inst_29778 = cljs.core.count.call(null,inst_29776);
var inst_29759 = inst_29777;
var inst_29760 = inst_29776;
var inst_29761 = inst_29778;
var inst_29762 = (0);
var state_29872__$1 = (function (){var statearr_29897 = state_29872;
(statearr_29897[(7)] = inst_29759);

(statearr_29897[(8)] = inst_29762);

(statearr_29897[(9)] = inst_29760);

(statearr_29897[(10)] = inst_29761);

return statearr_29897;
})();
var statearr_29898_29961 = state_29872__$1;
(statearr_29898_29961[(2)] = null);

(statearr_29898_29961[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (22))){
var inst_29811 = (state_29872[(16)]);
var inst_29824 = (state_29872[(2)]);
var inst_29825 = cljs.core.not_empty.call(null,inst_29811);
var state_29872__$1 = (function (){var statearr_29899 = state_29872;
(statearr_29899[(27)] = inst_29824);

return statearr_29899;
})();
if(cljs.core.truth_(inst_29825)){
var statearr_29900_29962 = state_29872__$1;
(statearr_29900_29962[(1)] = (23));

} else {
var statearr_29901_29963 = state_29872__$1;
(statearr_29901_29963[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (36))){
var state_29872__$1 = state_29872;
var statearr_29902_29964 = state_29872__$1;
(statearr_29902_29964[(2)] = null);

(statearr_29902_29964[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (29))){
var inst_29840 = (state_29872[(28)]);
var inst_29843 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29840);
var inst_29844 = cljs.core.pr_str.call(null,inst_29843);
var inst_29845 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29844)].join('');
var inst_29846 = figwheel.client.utils.log.call(null,inst_29845);
var state_29872__$1 = state_29872;
var statearr_29903_29965 = state_29872__$1;
(statearr_29903_29965[(2)] = inst_29846);

(statearr_29903_29965[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (6))){
var inst_29793 = (state_29872[(2)]);
var state_29872__$1 = state_29872;
var statearr_29904_29966 = state_29872__$1;
(statearr_29904_29966[(2)] = inst_29793);

(statearr_29904_29966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (28))){
var inst_29840 = (state_29872[(28)]);
var inst_29837 = (state_29872[(2)]);
var inst_29838 = cljs.core.get.call(null,inst_29837,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29839 = cljs.core.get.call(null,inst_29837,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_29840__$1 = cljs.core.get.call(null,inst_29837,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29841 = cljs.core.not_empty.call(null,inst_29840__$1);
var state_29872__$1 = (function (){var statearr_29905 = state_29872;
(statearr_29905[(29)] = inst_29838);

(statearr_29905[(24)] = inst_29839);

(statearr_29905[(28)] = inst_29840__$1);

return statearr_29905;
})();
if(cljs.core.truth_(inst_29841)){
var statearr_29906_29967 = state_29872__$1;
(statearr_29906_29967[(1)] = (29));

} else {
var statearr_29907_29968 = state_29872__$1;
(statearr_29907_29968[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (25))){
var inst_29870 = (state_29872[(2)]);
var state_29872__$1 = state_29872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29872__$1,inst_29870);
} else {
if((state_val_29873 === (34))){
var inst_29838 = (state_29872[(29)]);
var inst_29858 = (state_29872[(2)]);
var inst_29859 = cljs.core.not_empty.call(null,inst_29838);
var state_29872__$1 = (function (){var statearr_29908 = state_29872;
(statearr_29908[(30)] = inst_29858);

return statearr_29908;
})();
if(cljs.core.truth_(inst_29859)){
var statearr_29909_29969 = state_29872__$1;
(statearr_29909_29969[(1)] = (35));

} else {
var statearr_29910_29970 = state_29872__$1;
(statearr_29910_29970[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (17))){
var inst_29798 = (state_29872[(23)]);
var state_29872__$1 = state_29872;
var statearr_29911_29971 = state_29872__$1;
(statearr_29911_29971[(2)] = inst_29798);

(statearr_29911_29971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (3))){
var state_29872__$1 = state_29872;
var statearr_29912_29972 = state_29872__$1;
(statearr_29912_29972[(2)] = null);

(statearr_29912_29972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (12))){
var inst_29789 = (state_29872[(2)]);
var state_29872__$1 = state_29872;
var statearr_29913_29973 = state_29872__$1;
(statearr_29913_29973[(2)] = inst_29789);

(statearr_29913_29973[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (2))){
var inst_29751 = (state_29872[(20)]);
var inst_29758 = cljs.core.seq.call(null,inst_29751);
var inst_29759 = inst_29758;
var inst_29760 = null;
var inst_29761 = (0);
var inst_29762 = (0);
var state_29872__$1 = (function (){var statearr_29914 = state_29872;
(statearr_29914[(7)] = inst_29759);

(statearr_29914[(8)] = inst_29762);

(statearr_29914[(9)] = inst_29760);

(statearr_29914[(10)] = inst_29761);

return statearr_29914;
})();
var statearr_29915_29974 = state_29872__$1;
(statearr_29915_29974[(2)] = null);

(statearr_29915_29974[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (23))){
var inst_29809 = (state_29872[(12)]);
var inst_29808 = (state_29872[(13)]);
var inst_29831 = (state_29872[(19)]);
var inst_29805 = (state_29872[(14)]);
var inst_29804 = (state_29872[(15)]);
var inst_29811 = (state_29872[(16)]);
var inst_29827 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29830 = (function (){var files_not_loaded = inst_29811;
var res = inst_29809;
var res_SINGLEQUOTE_ = inst_29808;
var files_SINGLEQUOTE_ = inst_29805;
var all_files = inst_29804;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29831,inst_29805,inst_29804,inst_29811,inst_29827,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (p__29829){
var map__29916 = p__29829;
var map__29916__$1 = ((cljs.core.seq_QMARK_.call(null,map__29916))?cljs.core.apply.call(null,cljs.core.hash_map,map__29916):map__29916);
var meta_data = cljs.core.get.call(null,map__29916__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29831,inst_29805,inst_29804,inst_29811,inst_29827,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29831__$1 = cljs.core.group_by.call(null,inst_29830,inst_29811);
var inst_29832 = cljs.core.seq_QMARK_.call(null,inst_29831__$1);
var state_29872__$1 = (function (){var statearr_29917 = state_29872;
(statearr_29917[(19)] = inst_29831__$1);

(statearr_29917[(31)] = inst_29827);

return statearr_29917;
})();
if(inst_29832){
var statearr_29918_29975 = state_29872__$1;
(statearr_29918_29975[(1)] = (26));

} else {
var statearr_29919_29976 = state_29872__$1;
(statearr_29919_29976[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (35))){
var inst_29838 = (state_29872[(29)]);
var inst_29861 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29838);
var inst_29862 = cljs.core.pr_str.call(null,inst_29861);
var inst_29863 = [cljs.core.str("not required: "),cljs.core.str(inst_29862)].join('');
var inst_29864 = figwheel.client.utils.log.call(null,inst_29863);
var state_29872__$1 = state_29872;
var statearr_29920_29977 = state_29872__$1;
(statearr_29920_29977[(2)] = inst_29864);

(statearr_29920_29977[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (19))){
var inst_29809 = (state_29872[(12)]);
var inst_29808 = (state_29872[(13)]);
var inst_29805 = (state_29872[(14)]);
var inst_29804 = (state_29872[(15)]);
var inst_29808__$1 = (state_29872[(2)]);
var inst_29809__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29808__$1);
var inst_29810 = (function (){var res = inst_29809__$1;
var res_SINGLEQUOTE_ = inst_29808__$1;
var files_SINGLEQUOTE_ = inst_29805;
var all_files = inst_29804;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29805,inst_29804,inst_29808__$1,inst_29809__$1,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (p1__29544_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29544_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_29809,inst_29808,inst_29805,inst_29804,inst_29808__$1,inst_29809__$1,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29811 = cljs.core.filter.call(null,inst_29810,inst_29808__$1);
var inst_29812 = cljs.core.not_empty.call(null,inst_29809__$1);
var state_29872__$1 = (function (){var statearr_29921 = state_29872;
(statearr_29921[(12)] = inst_29809__$1);

(statearr_29921[(13)] = inst_29808__$1);

(statearr_29921[(16)] = inst_29811);

return statearr_29921;
})();
if(cljs.core.truth_(inst_29812)){
var statearr_29922_29978 = state_29872__$1;
(statearr_29922_29978[(1)] = (20));

} else {
var statearr_29923_29979 = state_29872__$1;
(statearr_29923_29979[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (11))){
var state_29872__$1 = state_29872;
var statearr_29924_29980 = state_29872__$1;
(statearr_29924_29980[(2)] = null);

(statearr_29924_29980[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (9))){
var inst_29791 = (state_29872[(2)]);
var state_29872__$1 = state_29872;
var statearr_29925_29981 = state_29872__$1;
(statearr_29925_29981[(2)] = inst_29791);

(statearr_29925_29981[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (5))){
var inst_29762 = (state_29872[(8)]);
var inst_29761 = (state_29872[(10)]);
var inst_29764 = (inst_29762 < inst_29761);
var inst_29765 = inst_29764;
var state_29872__$1 = state_29872;
if(cljs.core.truth_(inst_29765)){
var statearr_29926_29982 = state_29872__$1;
(statearr_29926_29982[(1)] = (7));

} else {
var statearr_29927_29983 = state_29872__$1;
(statearr_29927_29983[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (14))){
var inst_29772 = (state_29872[(26)]);
var inst_29781 = cljs.core.first.call(null,inst_29772);
var inst_29782 = figwheel.client.file_reloading.eval_body.call(null,inst_29781);
var inst_29783 = cljs.core.next.call(null,inst_29772);
var inst_29759 = inst_29783;
var inst_29760 = null;
var inst_29761 = (0);
var inst_29762 = (0);
var state_29872__$1 = (function (){var statearr_29928 = state_29872;
(statearr_29928[(32)] = inst_29782);

(statearr_29928[(7)] = inst_29759);

(statearr_29928[(8)] = inst_29762);

(statearr_29928[(9)] = inst_29760);

(statearr_29928[(10)] = inst_29761);

return statearr_29928;
})();
var statearr_29929_29984 = state_29872__$1;
(statearr_29929_29984[(2)] = null);

(statearr_29929_29984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (26))){
var inst_29831 = (state_29872[(19)]);
var inst_29834 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29831);
var state_29872__$1 = state_29872;
var statearr_29930_29985 = state_29872__$1;
(statearr_29930_29985[(2)] = inst_29834);

(statearr_29930_29985[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (16))){
var inst_29798 = (state_29872[(23)]);
var inst_29800 = (function (){var all_files = inst_29798;
return ((function (all_files,inst_29798,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function (p1__29543_SHARP_){
return cljs.core.update_in.call(null,p1__29543_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_29798,state_val_29873,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var inst_29801 = cljs.core.map.call(null,inst_29800,inst_29798);
var state_29872__$1 = state_29872;
var statearr_29931_29986 = state_29872__$1;
(statearr_29931_29986[(2)] = inst_29801);

(statearr_29931_29986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (30))){
var state_29872__$1 = state_29872;
var statearr_29932_29987 = state_29872__$1;
(statearr_29932_29987[(2)] = null);

(statearr_29932_29987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (10))){
var inst_29772 = (state_29872[(26)]);
var inst_29774 = cljs.core.chunked_seq_QMARK_.call(null,inst_29772);
var state_29872__$1 = state_29872;
if(inst_29774){
var statearr_29933_29988 = state_29872__$1;
(statearr_29933_29988[(1)] = (13));

} else {
var statearr_29934_29989 = state_29872__$1;
(statearr_29934_29989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (18))){
var inst_29805 = (state_29872[(14)]);
var inst_29804 = (state_29872[(15)]);
var inst_29804__$1 = (state_29872[(2)]);
var inst_29805__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_29804__$1);
var inst_29806 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29805__$1);
var state_29872__$1 = (function (){var statearr_29935 = state_29872;
(statearr_29935[(14)] = inst_29805__$1);

(statearr_29935[(15)] = inst_29804__$1);

return statearr_29935;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29872__$1,(19),inst_29806);
} else {
if((state_val_29873 === (37))){
var inst_29867 = (state_29872[(2)]);
var state_29872__$1 = state_29872;
var statearr_29936_29990 = state_29872__$1;
(statearr_29936_29990[(2)] = inst_29867);

(statearr_29936_29990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29873 === (8))){
var inst_29759 = (state_29872[(7)]);
var inst_29772 = (state_29872[(26)]);
var inst_29772__$1 = cljs.core.seq.call(null,inst_29759);
var state_29872__$1 = (function (){var statearr_29937 = state_29872;
(statearr_29937[(26)] = inst_29772__$1);

return statearr_29937;
})();
if(inst_29772__$1){
var statearr_29938_29991 = state_29872__$1;
(statearr_29938_29991[(1)] = (10));

} else {
var statearr_29939_29992 = state_29872__$1;
(statearr_29939_29992[(1)] = (11));

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
});})(c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
;
return ((function (switch__20037__auto__,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto____0 = (function (){
var statearr_29943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29943[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto__);

(statearr_29943[(1)] = (1));

return statearr_29943;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto____1 = (function (state_29872){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_29872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e29944){if((e29944 instanceof Object)){
var ex__20041__auto__ = e29944;
var statearr_29945_29993 = state_29872;
(statearr_29945_29993[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29994 = state_29872;
state_29872 = G__29994;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto__ = function(state_29872){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto____1.call(this,state_29872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
})();
var state__20095__auto__ = (function (){var statearr_29946 = f__20094__auto__.call(null);
(statearr_29946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_29946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__,map__29747,map__29747__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__29748,map__29748__$1,msg,files))
);

return c__20093__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29997,link){
var map__29999 = p__29997;
var map__29999__$1 = ((cljs.core.seq_QMARK_.call(null,map__29999))?cljs.core.apply.call(null,cljs.core.hash_map,map__29999):map__29999);
var file = cljs.core.get.call(null,map__29999__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__29999,map__29999__$1,file){
return (function (p1__29995_SHARP_,p2__29996_SHARP_){
if(cljs.core._EQ_.call(null,p1__29995_SHARP_,p2__29996_SHARP_)){
return p1__29995_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__29999,map__29999__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30003){
var map__30004 = p__30003;
var map__30004__$1 = ((cljs.core.seq_QMARK_.call(null,map__30004))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var current_url_length = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30000_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30000_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
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
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30005){
var map__30007 = p__30005;
var map__30007__$1 = ((cljs.core.seq_QMARK_.call(null,map__30007))?cljs.core.apply.call(null,cljs.core.hash_map,map__30007):map__30007);
var f_data = map__30007__$1;
var request_url = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__30007__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__17787__auto__ = request_url;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30008,files_msg){
var map__30030 = p__30008;
var map__30030__$1 = ((cljs.core.seq_QMARK_.call(null,map__30030))?cljs.core.apply.call(null,cljs.core.hash_map,map__30030):map__30030);
var opts = map__30030__$1;
var on_cssload = cljs.core.get.call(null,map__30030__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30031_30051 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30032_30052 = null;
var count__30033_30053 = (0);
var i__30034_30054 = (0);
while(true){
if((i__30034_30054 < count__30033_30053)){
var f_30055 = cljs.core._nth.call(null,chunk__30032_30052,i__30034_30054);
figwheel.client.file_reloading.reload_css_file.call(null,f_30055);

var G__30056 = seq__30031_30051;
var G__30057 = chunk__30032_30052;
var G__30058 = count__30033_30053;
var G__30059 = (i__30034_30054 + (1));
seq__30031_30051 = G__30056;
chunk__30032_30052 = G__30057;
count__30033_30053 = G__30058;
i__30034_30054 = G__30059;
continue;
} else {
var temp__4126__auto___30060 = cljs.core.seq.call(null,seq__30031_30051);
if(temp__4126__auto___30060){
var seq__30031_30061__$1 = temp__4126__auto___30060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30031_30061__$1)){
var c__18572__auto___30062 = cljs.core.chunk_first.call(null,seq__30031_30061__$1);
var G__30063 = cljs.core.chunk_rest.call(null,seq__30031_30061__$1);
var G__30064 = c__18572__auto___30062;
var G__30065 = cljs.core.count.call(null,c__18572__auto___30062);
var G__30066 = (0);
seq__30031_30051 = G__30063;
chunk__30032_30052 = G__30064;
count__30033_30053 = G__30065;
i__30034_30054 = G__30066;
continue;
} else {
var f_30067 = cljs.core.first.call(null,seq__30031_30061__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30067);

var G__30068 = cljs.core.next.call(null,seq__30031_30061__$1);
var G__30069 = null;
var G__30070 = (0);
var G__30071 = (0);
seq__30031_30051 = G__30068;
chunk__30032_30052 = G__30069;
count__30033_30053 = G__30070;
i__30034_30054 = G__30071;
continue;
}
} else {
}
}
break;
}

var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__,map__30030,map__30030__$1,opts,on_cssload){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__,map__30030,map__30030__$1,opts,on_cssload){
return (function (state_30041){
var state_val_30042 = (state_30041[(1)]);
if((state_val_30042 === (2))){
var inst_30037 = (state_30041[(2)]);
var inst_30038 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_30039 = on_cssload.call(null,inst_30038);
var state_30041__$1 = (function (){var statearr_30043 = state_30041;
(statearr_30043[(7)] = inst_30037);

return statearr_30043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30041__$1,inst_30039);
} else {
if((state_val_30042 === (1))){
var inst_30035 = cljs.core.async.timeout.call(null,(100));
var state_30041__$1 = state_30041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30041__$1,(2),inst_30035);
} else {
return null;
}
}
});})(c__20093__auto__,map__30030,map__30030__$1,opts,on_cssload))
;
return ((function (switch__20037__auto__,c__20093__auto__,map__30030,map__30030__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto____0 = (function (){
var statearr_30047 = [null,null,null,null,null,null,null,null];
(statearr_30047[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto____1 = (function (state_30041){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_30041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e30048){if((e30048 instanceof Object)){
var ex__20041__auto__ = e30048;
var statearr_30049_30072 = state_30041;
(statearr_30049_30072[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30073 = state_30041;
state_30041 = G__30073;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto__ = function(state_30041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto____1.call(this,state_30041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__,map__30030,map__30030__$1,opts,on_cssload))
})();
var state__20095__auto__ = (function (){var statearr_30050 = f__20094__auto__.call(null);
(statearr_30050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_30050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__,map__30030,map__30030__$1,opts,on_cssload))
);

return c__20093__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1435073936138