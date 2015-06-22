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
return cljs.core.reduce.call(null,(function (p1__25179_SHARP_,p2__25180_SHARP_){
var and__17775__auto__ = p1__25179_SHARP_;
if(cljs.core.truth_(and__17775__auto__)){
return p2__25180_SHARP_;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__25182_SHARP_,p2__25181_SHARP_){
return [cljs.core.str(p2__25181_SHARP_)].join('');
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25183){
var map__25184 = p__25183;
var map__25184__$1 = ((cljs.core.seq_QMARK_.call(null,map__25184))?cljs.core.apply.call(null,cljs.core.hash_map,map__25184):map__25184);
var file = cljs.core.get.call(null,map__25184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__25185){
var map__25186 = p__25185;
var map__25186__$1 = ((cljs.core.seq_QMARK_.call(null,map__25186))?cljs.core.apply.call(null,cljs.core.hash_map,map__25186):map__25186);
var namespace = cljs.core.get.call(null,map__25186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e25187){if((e25187 instanceof Error)){
var e = e25187;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25187;

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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25188,callback){
var map__25190 = p__25188;
var map__25190__$1 = ((cljs.core.seq_QMARK_.call(null,map__25190))?cljs.core.apply.call(null,cljs.core.hash_map,map__25190):map__25190);
var file_msg = map__25190__$1;
var request_url = cljs.core.get.call(null,map__25190__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25190,map__25190__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25190,map__25190__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25191){
var map__25193 = p__25191;
var map__25193__$1 = ((cljs.core.seq_QMARK_.call(null,map__25193))?cljs.core.apply.call(null,cljs.core.hash_map,map__25193):map__25193);
var file_msg = map__25193__$1;
var meta_data = cljs.core.get.call(null,map__25193__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__25193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25194,callback){
var map__25196 = p__25194;
var map__25196__$1 = ((cljs.core.seq_QMARK_.call(null,map__25196))?cljs.core.apply.call(null,cljs.core.hash_map,map__25196):map__25196);
var file_msg = map__25196__$1;
var namespace = cljs.core.get.call(null,map__25196__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__25196__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__19777__auto___25283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto___25283,out){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto___25283,out){
return (function (state_25265){
var state_val_25266 = (state_25265[(1)]);
if((state_val_25266 === (7))){
var inst_25249 = (state_25265[(7)]);
var inst_25255 = (state_25265[(2)]);
var inst_25256 = cljs.core.async.put_BANG_.call(null,out,inst_25255);
var inst_25245 = inst_25249;
var state_25265__$1 = (function (){var statearr_25267 = state_25265;
(statearr_25267[(8)] = inst_25256);

(statearr_25267[(9)] = inst_25245);

return statearr_25267;
})();
var statearr_25268_25284 = state_25265__$1;
(statearr_25268_25284[(2)] = null);

(statearr_25268_25284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (6))){
var inst_25261 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
var statearr_25269_25285 = state_25265__$1;
(statearr_25269_25285[(2)] = inst_25261);

(statearr_25269_25285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (5))){
var inst_25259 = cljs.core.async.close_BANG_.call(null,out);
var state_25265__$1 = state_25265;
var statearr_25270_25286 = state_25265__$1;
(statearr_25270_25286[(2)] = inst_25259);

(statearr_25270_25286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (4))){
var inst_25248 = (state_25265[(10)]);
var inst_25253 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25248);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25265__$1,(7),inst_25253);
} else {
if((state_val_25266 === (3))){
var inst_25263 = (state_25265[(2)]);
var state_25265__$1 = state_25265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25265__$1,inst_25263);
} else {
if((state_val_25266 === (2))){
var inst_25245 = (state_25265[(9)]);
var inst_25248 = (state_25265[(10)]);
var inst_25248__$1 = cljs.core.nth.call(null,inst_25245,(0),null);
var inst_25249 = cljs.core.nthnext.call(null,inst_25245,(1));
var inst_25250 = (inst_25248__$1 == null);
var inst_25251 = cljs.core.not.call(null,inst_25250);
var state_25265__$1 = (function (){var statearr_25271 = state_25265;
(statearr_25271[(10)] = inst_25248__$1);

(statearr_25271[(7)] = inst_25249);

return statearr_25271;
})();
if(inst_25251){
var statearr_25272_25287 = state_25265__$1;
(statearr_25272_25287[(1)] = (4));

} else {
var statearr_25273_25288 = state_25265__$1;
(statearr_25273_25288[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25266 === (1))){
var inst_25243 = cljs.core.nth.call(null,files,(0),null);
var inst_25244 = cljs.core.nthnext.call(null,files,(1));
var inst_25245 = files;
var state_25265__$1 = (function (){var statearr_25274 = state_25265;
(statearr_25274[(11)] = inst_25243);

(statearr_25274[(12)] = inst_25244);

(statearr_25274[(9)] = inst_25245);

return statearr_25274;
})();
var statearr_25275_25289 = state_25265__$1;
(statearr_25275_25289[(2)] = null);

(statearr_25275_25289[(1)] = (2));


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
});})(c__19777__auto___25283,out))
;
return ((function (switch__19721__auto__,c__19777__auto___25283,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto____0 = (function (){
var statearr_25279 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25279[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto__);

(statearr_25279[(1)] = (1));

return statearr_25279;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto____1 = (function (state_25265){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_25265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e25280){if((e25280 instanceof Object)){
var ex__19725__auto__ = e25280;
var statearr_25281_25290 = state_25265;
(statearr_25281_25290[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25291 = state_25265;
state_25265 = G__25291;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto__ = function(state_25265){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto____1.call(this,state_25265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto___25283,out))
})();
var state__19779__auto__ = (function (){var statearr_25282 = f__19778__auto__.call(null);
(statearr_25282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto___25283);

return statearr_25282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto___25283,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__25292,p__25293){
var map__25296 = p__25292;
var map__25296__$1 = ((cljs.core.seq_QMARK_.call(null,map__25296))?cljs.core.apply.call(null,cljs.core.hash_map,map__25296):map__25296);
var opts = map__25296__$1;
var url_rewriter = cljs.core.get.call(null,map__25296__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__25297 = p__25293;
var map__25297__$1 = ((cljs.core.seq_QMARK_.call(null,map__25297))?cljs.core.apply.call(null,cljs.core.hash_map,map__25297):map__25297);
var file_msg = map__25297__$1;
var file = cljs.core.get.call(null,map__25297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25298){
var map__25301 = p__25298;
var map__25301__$1 = ((cljs.core.seq_QMARK_.call(null,map__25301))?cljs.core.apply.call(null,cljs.core.hash_map,map__25301):map__25301);
var file = cljs.core.get.call(null,map__25301__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__25301__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
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
}catch (e25302){var e = e25302;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25307,p__25308){
var map__25509 = p__25307;
var map__25509__$1 = ((cljs.core.seq_QMARK_.call(null,map__25509))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);
var opts = map__25509__$1;
var load_unchanged_files = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__25510 = p__25308;
var map__25510__$1 = ((cljs.core.seq_QMARK_.call(null,map__25510))?cljs.core.apply.call(null,cljs.core.hash_map,map__25510):map__25510);
var msg = map__25510__$1;
var files = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (state_25634){
var state_val_25635 = (state_25634[(1)]);
if((state_val_25635 === (7))){
var inst_25521 = (state_25634[(7)]);
var inst_25523 = (state_25634[(8)]);
var inst_25524 = (state_25634[(9)]);
var inst_25522 = (state_25634[(10)]);
var inst_25529 = cljs.core._nth.call(null,inst_25522,inst_25524);
var inst_25530 = figwheel.client.file_reloading.eval_body.call(null,inst_25529);
var inst_25531 = (inst_25524 + (1));
var tmp25636 = inst_25521;
var tmp25637 = inst_25523;
var tmp25638 = inst_25522;
var inst_25521__$1 = tmp25636;
var inst_25522__$1 = tmp25638;
var inst_25523__$1 = tmp25637;
var inst_25524__$1 = inst_25531;
var state_25634__$1 = (function (){var statearr_25639 = state_25634;
(statearr_25639[(11)] = inst_25530);

(statearr_25639[(7)] = inst_25521__$1);

(statearr_25639[(8)] = inst_25523__$1);

(statearr_25639[(9)] = inst_25524__$1);

(statearr_25639[(10)] = inst_25522__$1);

return statearr_25639;
})();
var statearr_25640_25709 = state_25634__$1;
(statearr_25640_25709[(2)] = null);

(statearr_25640_25709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (20))){
var inst_25571 = (state_25634[(12)]);
var inst_25567 = (state_25634[(13)]);
var inst_25573 = (state_25634[(14)]);
var inst_25566 = (state_25634[(15)]);
var inst_25570 = (state_25634[(16)]);
var inst_25576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25578 = (function (){var files_not_loaded = inst_25573;
var res = inst_25571;
var res_SINGLEQUOTE_ = inst_25570;
var files_SINGLEQUOTE_ = inst_25567;
var all_files = inst_25566;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25573,inst_25566,inst_25570,inst_25576,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (p__25577){
var map__25641 = p__25577;
var map__25641__$1 = ((cljs.core.seq_QMARK_.call(null,map__25641))?cljs.core.apply.call(null,cljs.core.hash_map,map__25641):map__25641);
var file = cljs.core.get.call(null,map__25641__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__25641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25573,inst_25566,inst_25570,inst_25576,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25579 = cljs.core.map.call(null,inst_25578,inst_25571);
var inst_25580 = cljs.core.pr_str.call(null,inst_25579);
var inst_25581 = figwheel.client.utils.log.call(null,inst_25580);
var inst_25582 = (function (){var files_not_loaded = inst_25573;
var res = inst_25571;
var res_SINGLEQUOTE_ = inst_25570;
var files_SINGLEQUOTE_ = inst_25567;
var all_files = inst_25566;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25573,inst_25566,inst_25570,inst_25576,inst_25578,inst_25579,inst_25580,inst_25581,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25573,inst_25566,inst_25570,inst_25576,inst_25578,inst_25579,inst_25580,inst_25581,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25583 = setTimeout(inst_25582,(10));
var state_25634__$1 = (function (){var statearr_25642 = state_25634;
(statearr_25642[(17)] = inst_25581);

(statearr_25642[(18)] = inst_25576);

return statearr_25642;
})();
var statearr_25643_25710 = state_25634__$1;
(statearr_25643_25710[(2)] = inst_25583);

(statearr_25643_25710[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (27))){
var inst_25593 = (state_25634[(19)]);
var state_25634__$1 = state_25634;
var statearr_25644_25711 = state_25634__$1;
(statearr_25644_25711[(2)] = inst_25593);

(statearr_25644_25711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (1))){
var inst_25513 = (state_25634[(20)]);
var inst_25511 = before_jsload.call(null,files);
var inst_25512 = (function (){return ((function (inst_25513,inst_25511,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (p1__25303_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25303_SHARP_);
});
;})(inst_25513,inst_25511,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25513__$1 = cljs.core.filter.call(null,inst_25512,files);
var inst_25514 = cljs.core.not_empty.call(null,inst_25513__$1);
var state_25634__$1 = (function (){var statearr_25645 = state_25634;
(statearr_25645[(20)] = inst_25513__$1);

(statearr_25645[(21)] = inst_25511);

return statearr_25645;
})();
if(cljs.core.truth_(inst_25514)){
var statearr_25646_25712 = state_25634__$1;
(statearr_25646_25712[(1)] = (2));

} else {
var statearr_25647_25713 = state_25634__$1;
(statearr_25647_25713[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (24))){
var state_25634__$1 = state_25634;
var statearr_25648_25714 = state_25634__$1;
(statearr_25648_25714[(2)] = null);

(statearr_25648_25714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (4))){
var inst_25558 = (state_25634[(2)]);
var inst_25559 = (function (){return ((function (inst_25558,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (p1__25304_SHARP_){
var and__17775__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25304_SHARP_);
if(cljs.core.truth_(and__17775__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25304_SHARP_));
} else {
return and__17775__auto__;
}
});
;})(inst_25558,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25560 = cljs.core.filter.call(null,inst_25559,files);
var state_25634__$1 = (function (){var statearr_25649 = state_25634;
(statearr_25649[(22)] = inst_25558);

(statearr_25649[(23)] = inst_25560);

return statearr_25649;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_25650_25715 = state_25634__$1;
(statearr_25650_25715[(1)] = (16));

} else {
var statearr_25651_25716 = state_25634__$1;
(statearr_25651_25716[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (15))){
var inst_25548 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25652_25717 = state_25634__$1;
(statearr_25652_25717[(2)] = inst_25548);

(statearr_25652_25717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (21))){
var state_25634__$1 = state_25634;
var statearr_25653_25718 = state_25634__$1;
(statearr_25653_25718[(2)] = null);

(statearr_25653_25718[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (31))){
var inst_25601 = (state_25634[(24)]);
var inst_25611 = (state_25634[(2)]);
var inst_25612 = cljs.core.not_empty.call(null,inst_25601);
var state_25634__$1 = (function (){var statearr_25654 = state_25634;
(statearr_25654[(25)] = inst_25611);

return statearr_25654;
})();
if(cljs.core.truth_(inst_25612)){
var statearr_25655_25719 = state_25634__$1;
(statearr_25655_25719[(1)] = (32));

} else {
var statearr_25656_25720 = state_25634__$1;
(statearr_25656_25720[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (32))){
var inst_25601 = (state_25634[(24)]);
var inst_25614 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25601);
var inst_25615 = cljs.core.pr_str.call(null,inst_25614);
var inst_25616 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_25615)].join('');
var inst_25617 = figwheel.client.utils.log.call(null,inst_25616);
var state_25634__$1 = state_25634;
var statearr_25657_25721 = state_25634__$1;
(statearr_25657_25721[(2)] = inst_25617);

(statearr_25657_25721[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (33))){
var state_25634__$1 = state_25634;
var statearr_25658_25722 = state_25634__$1;
(statearr_25658_25722[(2)] = null);

(statearr_25658_25722[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (13))){
var inst_25534 = (state_25634[(26)]);
var inst_25538 = cljs.core.chunk_first.call(null,inst_25534);
var inst_25539 = cljs.core.chunk_rest.call(null,inst_25534);
var inst_25540 = cljs.core.count.call(null,inst_25538);
var inst_25521 = inst_25539;
var inst_25522 = inst_25538;
var inst_25523 = inst_25540;
var inst_25524 = (0);
var state_25634__$1 = (function (){var statearr_25659 = state_25634;
(statearr_25659[(7)] = inst_25521);

(statearr_25659[(8)] = inst_25523);

(statearr_25659[(9)] = inst_25524);

(statearr_25659[(10)] = inst_25522);

return statearr_25659;
})();
var statearr_25660_25723 = state_25634__$1;
(statearr_25660_25723[(2)] = null);

(statearr_25660_25723[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (22))){
var inst_25573 = (state_25634[(14)]);
var inst_25586 = (state_25634[(2)]);
var inst_25587 = cljs.core.not_empty.call(null,inst_25573);
var state_25634__$1 = (function (){var statearr_25661 = state_25634;
(statearr_25661[(27)] = inst_25586);

return statearr_25661;
})();
if(cljs.core.truth_(inst_25587)){
var statearr_25662_25724 = state_25634__$1;
(statearr_25662_25724[(1)] = (23));

} else {
var statearr_25663_25725 = state_25634__$1;
(statearr_25663_25725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (36))){
var state_25634__$1 = state_25634;
var statearr_25664_25726 = state_25634__$1;
(statearr_25664_25726[(2)] = null);

(statearr_25664_25726[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (29))){
var inst_25602 = (state_25634[(28)]);
var inst_25605 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25602);
var inst_25606 = cljs.core.pr_str.call(null,inst_25605);
var inst_25607 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25606)].join('');
var inst_25608 = figwheel.client.utils.log.call(null,inst_25607);
var state_25634__$1 = state_25634;
var statearr_25665_25727 = state_25634__$1;
(statearr_25665_25727[(2)] = inst_25608);

(statearr_25665_25727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (6))){
var inst_25555 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25666_25728 = state_25634__$1;
(statearr_25666_25728[(2)] = inst_25555);

(statearr_25666_25728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (28))){
var inst_25602 = (state_25634[(28)]);
var inst_25599 = (state_25634[(2)]);
var inst_25600 = cljs.core.get.call(null,inst_25599,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25601 = cljs.core.get.call(null,inst_25599,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_25602__$1 = cljs.core.get.call(null,inst_25599,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25603 = cljs.core.not_empty.call(null,inst_25602__$1);
var state_25634__$1 = (function (){var statearr_25667 = state_25634;
(statearr_25667[(28)] = inst_25602__$1);

(statearr_25667[(29)] = inst_25600);

(statearr_25667[(24)] = inst_25601);

return statearr_25667;
})();
if(cljs.core.truth_(inst_25603)){
var statearr_25668_25729 = state_25634__$1;
(statearr_25668_25729[(1)] = (29));

} else {
var statearr_25669_25730 = state_25634__$1;
(statearr_25669_25730[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (25))){
var inst_25632 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25634__$1,inst_25632);
} else {
if((state_val_25635 === (34))){
var inst_25600 = (state_25634[(29)]);
var inst_25620 = (state_25634[(2)]);
var inst_25621 = cljs.core.not_empty.call(null,inst_25600);
var state_25634__$1 = (function (){var statearr_25670 = state_25634;
(statearr_25670[(30)] = inst_25620);

return statearr_25670;
})();
if(cljs.core.truth_(inst_25621)){
var statearr_25671_25731 = state_25634__$1;
(statearr_25671_25731[(1)] = (35));

} else {
var statearr_25672_25732 = state_25634__$1;
(statearr_25672_25732[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (17))){
var inst_25560 = (state_25634[(23)]);
var state_25634__$1 = state_25634;
var statearr_25673_25733 = state_25634__$1;
(statearr_25673_25733[(2)] = inst_25560);

(statearr_25673_25733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (3))){
var state_25634__$1 = state_25634;
var statearr_25674_25734 = state_25634__$1;
(statearr_25674_25734[(2)] = null);

(statearr_25674_25734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (12))){
var inst_25551 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25675_25735 = state_25634__$1;
(statearr_25675_25735[(2)] = inst_25551);

(statearr_25675_25735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (2))){
var inst_25513 = (state_25634[(20)]);
var inst_25520 = cljs.core.seq.call(null,inst_25513);
var inst_25521 = inst_25520;
var inst_25522 = null;
var inst_25523 = (0);
var inst_25524 = (0);
var state_25634__$1 = (function (){var statearr_25676 = state_25634;
(statearr_25676[(7)] = inst_25521);

(statearr_25676[(8)] = inst_25523);

(statearr_25676[(9)] = inst_25524);

(statearr_25676[(10)] = inst_25522);

return statearr_25676;
})();
var statearr_25677_25736 = state_25634__$1;
(statearr_25677_25736[(2)] = null);

(statearr_25677_25736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (23))){
var inst_25571 = (state_25634[(12)]);
var inst_25567 = (state_25634[(13)]);
var inst_25593 = (state_25634[(19)]);
var inst_25573 = (state_25634[(14)]);
var inst_25566 = (state_25634[(15)]);
var inst_25570 = (state_25634[(16)]);
var inst_25589 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25592 = (function (){var files_not_loaded = inst_25573;
var res = inst_25571;
var res_SINGLEQUOTE_ = inst_25570;
var files_SINGLEQUOTE_ = inst_25567;
var all_files = inst_25566;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25593,inst_25573,inst_25566,inst_25570,inst_25589,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (p__25591){
var map__25678 = p__25591;
var map__25678__$1 = ((cljs.core.seq_QMARK_.call(null,map__25678))?cljs.core.apply.call(null,cljs.core.hash_map,map__25678):map__25678);
var meta_data = cljs.core.get.call(null,map__25678__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25593,inst_25573,inst_25566,inst_25570,inst_25589,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25593__$1 = cljs.core.group_by.call(null,inst_25592,inst_25573);
var inst_25594 = cljs.core.seq_QMARK_.call(null,inst_25593__$1);
var state_25634__$1 = (function (){var statearr_25679 = state_25634;
(statearr_25679[(19)] = inst_25593__$1);

(statearr_25679[(31)] = inst_25589);

return statearr_25679;
})();
if(inst_25594){
var statearr_25680_25737 = state_25634__$1;
(statearr_25680_25737[(1)] = (26));

} else {
var statearr_25681_25738 = state_25634__$1;
(statearr_25681_25738[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (35))){
var inst_25600 = (state_25634[(29)]);
var inst_25623 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25600);
var inst_25624 = cljs.core.pr_str.call(null,inst_25623);
var inst_25625 = [cljs.core.str("not required: "),cljs.core.str(inst_25624)].join('');
var inst_25626 = figwheel.client.utils.log.call(null,inst_25625);
var state_25634__$1 = state_25634;
var statearr_25682_25739 = state_25634__$1;
(statearr_25682_25739[(2)] = inst_25626);

(statearr_25682_25739[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (19))){
var inst_25571 = (state_25634[(12)]);
var inst_25567 = (state_25634[(13)]);
var inst_25566 = (state_25634[(15)]);
var inst_25570 = (state_25634[(16)]);
var inst_25570__$1 = (state_25634[(2)]);
var inst_25571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25570__$1);
var inst_25572 = (function (){var res = inst_25571__$1;
var res_SINGLEQUOTE_ = inst_25570__$1;
var files_SINGLEQUOTE_ = inst_25567;
var all_files = inst_25566;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25566,inst_25570,inst_25570__$1,inst_25571__$1,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (p1__25306_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25306_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_25571,inst_25567,inst_25566,inst_25570,inst_25570__$1,inst_25571__$1,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25573 = cljs.core.filter.call(null,inst_25572,inst_25570__$1);
var inst_25574 = cljs.core.not_empty.call(null,inst_25571__$1);
var state_25634__$1 = (function (){var statearr_25683 = state_25634;
(statearr_25683[(12)] = inst_25571__$1);

(statearr_25683[(14)] = inst_25573);

(statearr_25683[(16)] = inst_25570__$1);

return statearr_25683;
})();
if(cljs.core.truth_(inst_25574)){
var statearr_25684_25740 = state_25634__$1;
(statearr_25684_25740[(1)] = (20));

} else {
var statearr_25685_25741 = state_25634__$1;
(statearr_25685_25741[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (11))){
var state_25634__$1 = state_25634;
var statearr_25686_25742 = state_25634__$1;
(statearr_25686_25742[(2)] = null);

(statearr_25686_25742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (9))){
var inst_25553 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25687_25743 = state_25634__$1;
(statearr_25687_25743[(2)] = inst_25553);

(statearr_25687_25743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (5))){
var inst_25523 = (state_25634[(8)]);
var inst_25524 = (state_25634[(9)]);
var inst_25526 = (inst_25524 < inst_25523);
var inst_25527 = inst_25526;
var state_25634__$1 = state_25634;
if(cljs.core.truth_(inst_25527)){
var statearr_25688_25744 = state_25634__$1;
(statearr_25688_25744[(1)] = (7));

} else {
var statearr_25689_25745 = state_25634__$1;
(statearr_25689_25745[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (14))){
var inst_25534 = (state_25634[(26)]);
var inst_25543 = cljs.core.first.call(null,inst_25534);
var inst_25544 = figwheel.client.file_reloading.eval_body.call(null,inst_25543);
var inst_25545 = cljs.core.next.call(null,inst_25534);
var inst_25521 = inst_25545;
var inst_25522 = null;
var inst_25523 = (0);
var inst_25524 = (0);
var state_25634__$1 = (function (){var statearr_25690 = state_25634;
(statearr_25690[(32)] = inst_25544);

(statearr_25690[(7)] = inst_25521);

(statearr_25690[(8)] = inst_25523);

(statearr_25690[(9)] = inst_25524);

(statearr_25690[(10)] = inst_25522);

return statearr_25690;
})();
var statearr_25691_25746 = state_25634__$1;
(statearr_25691_25746[(2)] = null);

(statearr_25691_25746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (26))){
var inst_25593 = (state_25634[(19)]);
var inst_25596 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25593);
var state_25634__$1 = state_25634;
var statearr_25692_25747 = state_25634__$1;
(statearr_25692_25747[(2)] = inst_25596);

(statearr_25692_25747[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (16))){
var inst_25560 = (state_25634[(23)]);
var inst_25562 = (function (){var all_files = inst_25560;
return ((function (all_files,inst_25560,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function (p1__25305_SHARP_){
return cljs.core.update_in.call(null,p1__25305_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_25560,state_val_25635,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var inst_25563 = cljs.core.map.call(null,inst_25562,inst_25560);
var state_25634__$1 = state_25634;
var statearr_25693_25748 = state_25634__$1;
(statearr_25693_25748[(2)] = inst_25563);

(statearr_25693_25748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (30))){
var state_25634__$1 = state_25634;
var statearr_25694_25749 = state_25634__$1;
(statearr_25694_25749[(2)] = null);

(statearr_25694_25749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (10))){
var inst_25534 = (state_25634[(26)]);
var inst_25536 = cljs.core.chunked_seq_QMARK_.call(null,inst_25534);
var state_25634__$1 = state_25634;
if(inst_25536){
var statearr_25695_25750 = state_25634__$1;
(statearr_25695_25750[(1)] = (13));

} else {
var statearr_25696_25751 = state_25634__$1;
(statearr_25696_25751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (18))){
var inst_25567 = (state_25634[(13)]);
var inst_25566 = (state_25634[(15)]);
var inst_25566__$1 = (state_25634[(2)]);
var inst_25567__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_25566__$1);
var inst_25568 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25567__$1);
var state_25634__$1 = (function (){var statearr_25697 = state_25634;
(statearr_25697[(13)] = inst_25567__$1);

(statearr_25697[(15)] = inst_25566__$1);

return statearr_25697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25634__$1,(19),inst_25568);
} else {
if((state_val_25635 === (37))){
var inst_25629 = (state_25634[(2)]);
var state_25634__$1 = state_25634;
var statearr_25698_25752 = state_25634__$1;
(statearr_25698_25752[(2)] = inst_25629);

(statearr_25698_25752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25635 === (8))){
var inst_25534 = (state_25634[(26)]);
var inst_25521 = (state_25634[(7)]);
var inst_25534__$1 = cljs.core.seq.call(null,inst_25521);
var state_25634__$1 = (function (){var statearr_25699 = state_25634;
(statearr_25699[(26)] = inst_25534__$1);

return statearr_25699;
})();
if(inst_25534__$1){
var statearr_25700_25753 = state_25634__$1;
(statearr_25700_25753[(1)] = (10));

} else {
var statearr_25701_25754 = state_25634__$1;
(statearr_25701_25754[(1)] = (11));

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
});})(c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
;
return ((function (switch__19721__auto__,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto____0 = (function (){
var statearr_25705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25705[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto__);

(statearr_25705[(1)] = (1));

return statearr_25705;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto____1 = (function (state_25634){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_25634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e25706){if((e25706 instanceof Object)){
var ex__19725__auto__ = e25706;
var statearr_25707_25755 = state_25634;
(statearr_25707_25755[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25756 = state_25634;
state_25634 = G__25756;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto__ = function(state_25634){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto____1.call(this,state_25634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
})();
var state__19779__auto__ = (function (){var statearr_25708 = f__19778__auto__.call(null);
(statearr_25708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_25708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__,map__25509,map__25509__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__25510,map__25510__$1,msg,files))
);

return c__19777__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25759,link){
var map__25761 = p__25759;
var map__25761__$1 = ((cljs.core.seq_QMARK_.call(null,map__25761))?cljs.core.apply.call(null,cljs.core.hash_map,map__25761):map__25761);
var file = cljs.core.get.call(null,map__25761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__25761,map__25761__$1,file){
return (function (p1__25757_SHARP_,p2__25758_SHARP_){
if(cljs.core._EQ_.call(null,p1__25757_SHARP_,p2__25758_SHARP_)){
return p1__25757_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__25761,map__25761__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25765){
var map__25766 = p__25765;
var map__25766__$1 = ((cljs.core.seq_QMARK_.call(null,map__25766))?cljs.core.apply.call(null,cljs.core.hash_map,map__25766):map__25766);
var current_url_length = cljs.core.get.call(null,map__25766__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__25766__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25762_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25762_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25767){
var map__25769 = p__25767;
var map__25769__$1 = ((cljs.core.seq_QMARK_.call(null,map__25769))?cljs.core.apply.call(null,cljs.core.hash_map,map__25769):map__25769);
var f_data = map__25769__$1;
var request_url = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__25769__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25770,files_msg){
var map__25792 = p__25770;
var map__25792__$1 = ((cljs.core.seq_QMARK_.call(null,map__25792))?cljs.core.apply.call(null,cljs.core.hash_map,map__25792):map__25792);
var opts = map__25792__$1;
var on_cssload = cljs.core.get.call(null,map__25792__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25793_25813 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25794_25814 = null;
var count__25795_25815 = (0);
var i__25796_25816 = (0);
while(true){
if((i__25796_25816 < count__25795_25815)){
var f_25817 = cljs.core._nth.call(null,chunk__25794_25814,i__25796_25816);
figwheel.client.file_reloading.reload_css_file.call(null,f_25817);

var G__25818 = seq__25793_25813;
var G__25819 = chunk__25794_25814;
var G__25820 = count__25795_25815;
var G__25821 = (i__25796_25816 + (1));
seq__25793_25813 = G__25818;
chunk__25794_25814 = G__25819;
count__25795_25815 = G__25820;
i__25796_25816 = G__25821;
continue;
} else {
var temp__4126__auto___25822 = cljs.core.seq.call(null,seq__25793_25813);
if(temp__4126__auto___25822){
var seq__25793_25823__$1 = temp__4126__auto___25822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25793_25823__$1)){
var c__18572__auto___25824 = cljs.core.chunk_first.call(null,seq__25793_25823__$1);
var G__25825 = cljs.core.chunk_rest.call(null,seq__25793_25823__$1);
var G__25826 = c__18572__auto___25824;
var G__25827 = cljs.core.count.call(null,c__18572__auto___25824);
var G__25828 = (0);
seq__25793_25813 = G__25825;
chunk__25794_25814 = G__25826;
count__25795_25815 = G__25827;
i__25796_25816 = G__25828;
continue;
} else {
var f_25829 = cljs.core.first.call(null,seq__25793_25823__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25829);

var G__25830 = cljs.core.next.call(null,seq__25793_25823__$1);
var G__25831 = null;
var G__25832 = (0);
var G__25833 = (0);
seq__25793_25813 = G__25830;
chunk__25794_25814 = G__25831;
count__25795_25815 = G__25832;
i__25796_25816 = G__25833;
continue;
}
} else {
}
}
break;
}

var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__,map__25792,map__25792__$1,opts,on_cssload){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__,map__25792,map__25792__$1,opts,on_cssload){
return (function (state_25803){
var state_val_25804 = (state_25803[(1)]);
if((state_val_25804 === (2))){
var inst_25799 = (state_25803[(2)]);
var inst_25800 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_25801 = on_cssload.call(null,inst_25800);
var state_25803__$1 = (function (){var statearr_25805 = state_25803;
(statearr_25805[(7)] = inst_25799);

return statearr_25805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25803__$1,inst_25801);
} else {
if((state_val_25804 === (1))){
var inst_25797 = cljs.core.async.timeout.call(null,(100));
var state_25803__$1 = state_25803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25803__$1,(2),inst_25797);
} else {
return null;
}
}
});})(c__19777__auto__,map__25792,map__25792__$1,opts,on_cssload))
;
return ((function (switch__19721__auto__,c__19777__auto__,map__25792,map__25792__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto____0 = (function (){
var statearr_25809 = [null,null,null,null,null,null,null,null];
(statearr_25809[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto__);

(statearr_25809[(1)] = (1));

return statearr_25809;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto____1 = (function (state_25803){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_25803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e25810){if((e25810 instanceof Object)){
var ex__19725__auto__ = e25810;
var statearr_25811_25834 = state_25803;
(statearr_25811_25834[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25835 = state_25803;
state_25803 = G__25835;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto__ = function(state_25803){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto____1.call(this,state_25803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__,map__25792,map__25792__$1,opts,on_cssload))
})();
var state__19779__auto__ = (function (){var statearr_25812 = f__19778__auto__.call(null);
(statearr_25812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_25812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__,map__25792,map__25792__$1,opts,on_cssload))
);

return c__19777__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1434650235470