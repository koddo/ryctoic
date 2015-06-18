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
return cljs.core.reduce.call(null,(function (p1__16693_SHARP_,p2__16694_SHARP_){
var and__4137__auto__ = p1__16693_SHARP_;
if(cljs.core.truth_(and__4137__auto__)){
return p2__16694_SHARP_;
} else {
return and__4137__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4149__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4149__auto__){
return or__4149__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__16696_SHARP_,p2__16695_SHARP_){
return [cljs.core.str(p2__16695_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__4149__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4149__auto__){
return or__4149__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4149__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5048__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5048__auto__,method_table__5044__auto__,prefer_table__5045__auto__,method_cache__5046__auto__,cached_hierarchy__5047__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__16697){
var map__16698 = p__16697;
var map__16698__$1 = ((cljs.core.seq_QMARK_.call(null,map__16698))?cljs.core.apply.call(null,cljs.core.hash_map,map__16698):map__16698);
var file = cljs.core.get.call(null,map__16698__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__16699){
var map__16700 = p__16699;
var map__16700__$1 = ((cljs.core.seq_QMARK_.call(null,map__16700))?cljs.core.apply.call(null,cljs.core.hash_map,map__16700):map__16700);
var namespace = cljs.core.get.call(null,map__16700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__5044__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5045__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5046__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5047__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5048__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5048__auto__,method_table__5044__auto__,prefer_table__5045__auto__,method_cache__5046__auto__,cached_hierarchy__5047__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e16701){if((e16701 instanceof Error)){
var e = e16701;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e16701;

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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__16702,callback){
var map__16704 = p__16702;
var map__16704__$1 = ((cljs.core.seq_QMARK_.call(null,map__16704))?cljs.core.apply.call(null,cljs.core.hash_map,map__16704):map__16704);
var file_msg = map__16704__$1;
var request_url = cljs.core.get.call(null,map__16704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__16704,map__16704__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__16704,map__16704__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__16705){
var map__16707 = p__16705;
var map__16707__$1 = ((cljs.core.seq_QMARK_.call(null,map__16707))?cljs.core.apply.call(null,cljs.core.hash_map,map__16707):map__16707);
var file_msg = map__16707__$1;
var meta_data = cljs.core.get.call(null,map__16707__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__16707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4149__auto__ = meta_data;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4137__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4137__auto__){
var or__4149__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
var or__4149__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4149__auto____$1)){
return or__4149__auto____$1;
} else {
var and__4137__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4137__auto____$1){
var or__4149__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4149__auto____$2){
return or__4149__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4137__auto____$1;
}
}
}
} else {
return and__4137__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__16708,callback){
var map__16710 = p__16708;
var map__16710__$1 = ((cljs.core.seq_QMARK_.call(null,map__16710))?cljs.core.apply.call(null,cljs.core.hash_map,map__16710):map__16710);
var file_msg = map__16710__$1;
var namespace = cljs.core.get.call(null,map__16710__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__16710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__6760__auto___16797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto___16797,out){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto___16797,out){
return (function (state_16779){
var state_val_16780 = (state_16779[(1)]);
if((state_val_16780 === (7))){
var inst_16763 = (state_16779[(7)]);
var inst_16769 = (state_16779[(2)]);
var inst_16770 = cljs.core.async.put_BANG_.call(null,out,inst_16769);
var inst_16759 = inst_16763;
var state_16779__$1 = (function (){var statearr_16781 = state_16779;
(statearr_16781[(8)] = inst_16759);

(statearr_16781[(9)] = inst_16770);

return statearr_16781;
})();
var statearr_16782_16798 = state_16779__$1;
(statearr_16782_16798[(2)] = null);

(statearr_16782_16798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (6))){
var inst_16775 = (state_16779[(2)]);
var state_16779__$1 = state_16779;
var statearr_16783_16799 = state_16779__$1;
(statearr_16783_16799[(2)] = inst_16775);

(statearr_16783_16799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (5))){
var inst_16773 = cljs.core.async.close_BANG_.call(null,out);
var state_16779__$1 = state_16779;
var statearr_16784_16800 = state_16779__$1;
(statearr_16784_16800[(2)] = inst_16773);

(statearr_16784_16800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (4))){
var inst_16762 = (state_16779[(10)]);
var inst_16767 = figwheel.client.file_reloading.reload_js_file.call(null,inst_16762);
var state_16779__$1 = state_16779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16779__$1,(7),inst_16767);
} else {
if((state_val_16780 === (3))){
var inst_16777 = (state_16779[(2)]);
var state_16779__$1 = state_16779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16779__$1,inst_16777);
} else {
if((state_val_16780 === (2))){
var inst_16759 = (state_16779[(8)]);
var inst_16762 = (state_16779[(10)]);
var inst_16762__$1 = cljs.core.nth.call(null,inst_16759,(0),null);
var inst_16763 = cljs.core.nthnext.call(null,inst_16759,(1));
var inst_16764 = (inst_16762__$1 == null);
var inst_16765 = cljs.core.not.call(null,inst_16764);
var state_16779__$1 = (function (){var statearr_16785 = state_16779;
(statearr_16785[(10)] = inst_16762__$1);

(statearr_16785[(7)] = inst_16763);

return statearr_16785;
})();
if(inst_16765){
var statearr_16786_16801 = state_16779__$1;
(statearr_16786_16801[(1)] = (4));

} else {
var statearr_16787_16802 = state_16779__$1;
(statearr_16787_16802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16780 === (1))){
var inst_16757 = cljs.core.nth.call(null,files,(0),null);
var inst_16758 = cljs.core.nthnext.call(null,files,(1));
var inst_16759 = files;
var state_16779__$1 = (function (){var statearr_16788 = state_16779;
(statearr_16788[(8)] = inst_16759);

(statearr_16788[(11)] = inst_16758);

(statearr_16788[(12)] = inst_16757);

return statearr_16788;
})();
var statearr_16789_16803 = state_16779__$1;
(statearr_16789_16803[(2)] = null);

(statearr_16789_16803[(1)] = (2));


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
});})(c__6760__auto___16797,out))
;
return ((function (switch__6704__auto__,c__6760__auto___16797,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto____0 = (function (){
var statearr_16793 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16793[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto__);

(statearr_16793[(1)] = (1));

return statearr_16793;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto____1 = (function (state_16779){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_16779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e16794){if((e16794 instanceof Object)){
var ex__6708__auto__ = e16794;
var statearr_16795_16804 = state_16779;
(statearr_16795_16804[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16805 = state_16779;
state_16779 = G__16805;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto__ = function(state_16779){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto____1.call(this,state_16779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto___16797,out))
})();
var state__6762__auto__ = (function (){var statearr_16796 = f__6761__auto__.call(null);
(statearr_16796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto___16797);

return statearr_16796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto___16797,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__16806,p__16807){
var map__16810 = p__16806;
var map__16810__$1 = ((cljs.core.seq_QMARK_.call(null,map__16810))?cljs.core.apply.call(null,cljs.core.hash_map,map__16810):map__16810);
var opts = map__16810__$1;
var url_rewriter = cljs.core.get.call(null,map__16810__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__16811 = p__16807;
var map__16811__$1 = ((cljs.core.seq_QMARK_.call(null,map__16811))?cljs.core.apply.call(null,cljs.core.hash_map,map__16811):map__16811);
var file_msg = map__16811__$1;
var file = cljs.core.get.call(null,map__16811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__16812){
var map__16815 = p__16812;
var map__16815__$1 = ((cljs.core.seq_QMARK_.call(null,map__16815))?cljs.core.apply.call(null,cljs.core.hash_map,map__16815):map__16815);
var file = cljs.core.get.call(null,map__16815__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__16815__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4137__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4137__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4137__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e16816){var e = e16816;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__16821,p__16822){
var map__17023 = p__16821;
var map__17023__$1 = ((cljs.core.seq_QMARK_.call(null,map__17023))?cljs.core.apply.call(null,cljs.core.hash_map,map__17023):map__17023);
var opts = map__17023__$1;
var load_unchanged_files = cljs.core.get.call(null,map__17023__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__17023__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__17023__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__17024 = p__16822;
var map__17024__$1 = ((cljs.core.seq_QMARK_.call(null,map__17024))?cljs.core.apply.call(null,cljs.core.hash_map,map__17024):map__17024);
var msg = map__17024__$1;
var files = cljs.core.get.call(null,map__17024__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (state_17148){
var state_val_17149 = (state_17148[(1)]);
if((state_val_17149 === (7))){
var inst_17036 = (state_17148[(7)]);
var inst_17038 = (state_17148[(8)]);
var inst_17035 = (state_17148[(9)]);
var inst_17037 = (state_17148[(10)]);
var inst_17043 = cljs.core._nth.call(null,inst_17036,inst_17038);
var inst_17044 = figwheel.client.file_reloading.eval_body.call(null,inst_17043);
var inst_17045 = (inst_17038 + (1));
var tmp17150 = inst_17036;
var tmp17151 = inst_17035;
var tmp17152 = inst_17037;
var inst_17035__$1 = tmp17151;
var inst_17036__$1 = tmp17150;
var inst_17037__$1 = tmp17152;
var inst_17038__$1 = inst_17045;
var state_17148__$1 = (function (){var statearr_17153 = state_17148;
(statearr_17153[(7)] = inst_17036__$1);

(statearr_17153[(8)] = inst_17038__$1);

(statearr_17153[(9)] = inst_17035__$1);

(statearr_17153[(11)] = inst_17044);

(statearr_17153[(10)] = inst_17037__$1);

return statearr_17153;
})();
var statearr_17154_17223 = state_17148__$1;
(statearr_17154_17223[(2)] = null);

(statearr_17154_17223[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (20))){
var inst_17080 = (state_17148[(12)]);
var inst_17085 = (state_17148[(13)]);
var inst_17087 = (state_17148[(14)]);
var inst_17081 = (state_17148[(15)]);
var inst_17084 = (state_17148[(16)]);
var inst_17090 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_17092 = (function (){var files_not_loaded = inst_17087;
var res = inst_17085;
var res_SINGLEQUOTE_ = inst_17084;
var files_SINGLEQUOTE_ = inst_17081;
var all_files = inst_17080;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17087,inst_17081,inst_17084,inst_17090,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (p__17091){
var map__17155 = p__17091;
var map__17155__$1 = ((cljs.core.seq_QMARK_.call(null,map__17155))?cljs.core.apply.call(null,cljs.core.hash_map,map__17155):map__17155);
var file = cljs.core.get.call(null,map__17155__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__17155__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17087,inst_17081,inst_17084,inst_17090,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17093 = cljs.core.map.call(null,inst_17092,inst_17085);
var inst_17094 = cljs.core.pr_str.call(null,inst_17093);
var inst_17095 = figwheel.client.utils.log.call(null,inst_17094);
var inst_17096 = (function (){var files_not_loaded = inst_17087;
var res = inst_17085;
var res_SINGLEQUOTE_ = inst_17084;
var files_SINGLEQUOTE_ = inst_17081;
var all_files = inst_17080;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17087,inst_17081,inst_17084,inst_17090,inst_17092,inst_17093,inst_17094,inst_17095,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17087,inst_17081,inst_17084,inst_17090,inst_17092,inst_17093,inst_17094,inst_17095,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17097 = setTimeout(inst_17096,(10));
var state_17148__$1 = (function (){var statearr_17156 = state_17148;
(statearr_17156[(17)] = inst_17095);

(statearr_17156[(18)] = inst_17090);

return statearr_17156;
})();
var statearr_17157_17224 = state_17148__$1;
(statearr_17157_17224[(2)] = inst_17097);

(statearr_17157_17224[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (27))){
var inst_17107 = (state_17148[(19)]);
var state_17148__$1 = state_17148;
var statearr_17158_17225 = state_17148__$1;
(statearr_17158_17225[(2)] = inst_17107);

(statearr_17158_17225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (1))){
var inst_17027 = (state_17148[(20)]);
var inst_17025 = before_jsload.call(null,files);
var inst_17026 = (function (){return ((function (inst_17027,inst_17025,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (p1__16817_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__16817_SHARP_);
});
;})(inst_17027,inst_17025,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17027__$1 = cljs.core.filter.call(null,inst_17026,files);
var inst_17028 = cljs.core.not_empty.call(null,inst_17027__$1);
var state_17148__$1 = (function (){var statearr_17159 = state_17148;
(statearr_17159[(20)] = inst_17027__$1);

(statearr_17159[(21)] = inst_17025);

return statearr_17159;
})();
if(cljs.core.truth_(inst_17028)){
var statearr_17160_17226 = state_17148__$1;
(statearr_17160_17226[(1)] = (2));

} else {
var statearr_17161_17227 = state_17148__$1;
(statearr_17161_17227[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (24))){
var state_17148__$1 = state_17148;
var statearr_17162_17228 = state_17148__$1;
(statearr_17162_17228[(2)] = null);

(statearr_17162_17228[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (4))){
var inst_17072 = (state_17148[(2)]);
var inst_17073 = (function (){return ((function (inst_17072,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (p1__16818_SHARP_){
var and__4137__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__16818_SHARP_);
if(cljs.core.truth_(and__4137__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__16818_SHARP_));
} else {
return and__4137__auto__;
}
});
;})(inst_17072,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17074 = cljs.core.filter.call(null,inst_17073,files);
var state_17148__$1 = (function (){var statearr_17163 = state_17148;
(statearr_17163[(22)] = inst_17074);

(statearr_17163[(23)] = inst_17072);

return statearr_17163;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_17164_17229 = state_17148__$1;
(statearr_17164_17229[(1)] = (16));

} else {
var statearr_17165_17230 = state_17148__$1;
(statearr_17165_17230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (15))){
var inst_17062 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17166_17231 = state_17148__$1;
(statearr_17166_17231[(2)] = inst_17062);

(statearr_17166_17231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (21))){
var state_17148__$1 = state_17148;
var statearr_17167_17232 = state_17148__$1;
(statearr_17167_17232[(2)] = null);

(statearr_17167_17232[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (31))){
var inst_17115 = (state_17148[(24)]);
var inst_17125 = (state_17148[(2)]);
var inst_17126 = cljs.core.not_empty.call(null,inst_17115);
var state_17148__$1 = (function (){var statearr_17168 = state_17148;
(statearr_17168[(25)] = inst_17125);

return statearr_17168;
})();
if(cljs.core.truth_(inst_17126)){
var statearr_17169_17233 = state_17148__$1;
(statearr_17169_17233[(1)] = (32));

} else {
var statearr_17170_17234 = state_17148__$1;
(statearr_17170_17234[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (32))){
var inst_17115 = (state_17148[(24)]);
var inst_17128 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17115);
var inst_17129 = cljs.core.pr_str.call(null,inst_17128);
var inst_17130 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_17129)].join('');
var inst_17131 = figwheel.client.utils.log.call(null,inst_17130);
var state_17148__$1 = state_17148;
var statearr_17171_17235 = state_17148__$1;
(statearr_17171_17235[(2)] = inst_17131);

(statearr_17171_17235[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (33))){
var state_17148__$1 = state_17148;
var statearr_17172_17236 = state_17148__$1;
(statearr_17172_17236[(2)] = null);

(statearr_17172_17236[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (13))){
var inst_17048 = (state_17148[(26)]);
var inst_17052 = cljs.core.chunk_first.call(null,inst_17048);
var inst_17053 = cljs.core.chunk_rest.call(null,inst_17048);
var inst_17054 = cljs.core.count.call(null,inst_17052);
var inst_17035 = inst_17053;
var inst_17036 = inst_17052;
var inst_17037 = inst_17054;
var inst_17038 = (0);
var state_17148__$1 = (function (){var statearr_17173 = state_17148;
(statearr_17173[(7)] = inst_17036);

(statearr_17173[(8)] = inst_17038);

(statearr_17173[(9)] = inst_17035);

(statearr_17173[(10)] = inst_17037);

return statearr_17173;
})();
var statearr_17174_17237 = state_17148__$1;
(statearr_17174_17237[(2)] = null);

(statearr_17174_17237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (22))){
var inst_17087 = (state_17148[(14)]);
var inst_17100 = (state_17148[(2)]);
var inst_17101 = cljs.core.not_empty.call(null,inst_17087);
var state_17148__$1 = (function (){var statearr_17175 = state_17148;
(statearr_17175[(27)] = inst_17100);

return statearr_17175;
})();
if(cljs.core.truth_(inst_17101)){
var statearr_17176_17238 = state_17148__$1;
(statearr_17176_17238[(1)] = (23));

} else {
var statearr_17177_17239 = state_17148__$1;
(statearr_17177_17239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (36))){
var state_17148__$1 = state_17148;
var statearr_17178_17240 = state_17148__$1;
(statearr_17178_17240[(2)] = null);

(statearr_17178_17240[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (29))){
var inst_17116 = (state_17148[(28)]);
var inst_17119 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17116);
var inst_17120 = cljs.core.pr_str.call(null,inst_17119);
var inst_17121 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_17120)].join('');
var inst_17122 = figwheel.client.utils.log.call(null,inst_17121);
var state_17148__$1 = state_17148;
var statearr_17179_17241 = state_17148__$1;
(statearr_17179_17241[(2)] = inst_17122);

(statearr_17179_17241[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (6))){
var inst_17069 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17180_17242 = state_17148__$1;
(statearr_17180_17242[(2)] = inst_17069);

(statearr_17180_17242[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (28))){
var inst_17116 = (state_17148[(28)]);
var inst_17113 = (state_17148[(2)]);
var inst_17114 = cljs.core.get.call(null,inst_17113,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_17115 = cljs.core.get.call(null,inst_17113,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_17116__$1 = cljs.core.get.call(null,inst_17113,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_17117 = cljs.core.not_empty.call(null,inst_17116__$1);
var state_17148__$1 = (function (){var statearr_17181 = state_17148;
(statearr_17181[(29)] = inst_17114);

(statearr_17181[(24)] = inst_17115);

(statearr_17181[(28)] = inst_17116__$1);

return statearr_17181;
})();
if(cljs.core.truth_(inst_17117)){
var statearr_17182_17243 = state_17148__$1;
(statearr_17182_17243[(1)] = (29));

} else {
var statearr_17183_17244 = state_17148__$1;
(statearr_17183_17244[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (25))){
var inst_17146 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17148__$1,inst_17146);
} else {
if((state_val_17149 === (34))){
var inst_17114 = (state_17148[(29)]);
var inst_17134 = (state_17148[(2)]);
var inst_17135 = cljs.core.not_empty.call(null,inst_17114);
var state_17148__$1 = (function (){var statearr_17184 = state_17148;
(statearr_17184[(30)] = inst_17134);

return statearr_17184;
})();
if(cljs.core.truth_(inst_17135)){
var statearr_17185_17245 = state_17148__$1;
(statearr_17185_17245[(1)] = (35));

} else {
var statearr_17186_17246 = state_17148__$1;
(statearr_17186_17246[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (17))){
var inst_17074 = (state_17148[(22)]);
var state_17148__$1 = state_17148;
var statearr_17187_17247 = state_17148__$1;
(statearr_17187_17247[(2)] = inst_17074);

(statearr_17187_17247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (3))){
var state_17148__$1 = state_17148;
var statearr_17188_17248 = state_17148__$1;
(statearr_17188_17248[(2)] = null);

(statearr_17188_17248[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (12))){
var inst_17065 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17189_17249 = state_17148__$1;
(statearr_17189_17249[(2)] = inst_17065);

(statearr_17189_17249[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (2))){
var inst_17027 = (state_17148[(20)]);
var inst_17034 = cljs.core.seq.call(null,inst_17027);
var inst_17035 = inst_17034;
var inst_17036 = null;
var inst_17037 = (0);
var inst_17038 = (0);
var state_17148__$1 = (function (){var statearr_17190 = state_17148;
(statearr_17190[(7)] = inst_17036);

(statearr_17190[(8)] = inst_17038);

(statearr_17190[(9)] = inst_17035);

(statearr_17190[(10)] = inst_17037);

return statearr_17190;
})();
var statearr_17191_17250 = state_17148__$1;
(statearr_17191_17250[(2)] = null);

(statearr_17191_17250[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (23))){
var inst_17080 = (state_17148[(12)]);
var inst_17085 = (state_17148[(13)]);
var inst_17107 = (state_17148[(19)]);
var inst_17087 = (state_17148[(14)]);
var inst_17081 = (state_17148[(15)]);
var inst_17084 = (state_17148[(16)]);
var inst_17103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_17106 = (function (){var files_not_loaded = inst_17087;
var res = inst_17085;
var res_SINGLEQUOTE_ = inst_17084;
var files_SINGLEQUOTE_ = inst_17081;
var all_files = inst_17080;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17107,inst_17087,inst_17081,inst_17084,inst_17103,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (p__17105){
var map__17192 = p__17105;
var map__17192__$1 = ((cljs.core.seq_QMARK_.call(null,map__17192))?cljs.core.apply.call(null,cljs.core.hash_map,map__17192):map__17192);
var meta_data = cljs.core.get.call(null,map__17192__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17107,inst_17087,inst_17081,inst_17084,inst_17103,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17107__$1 = cljs.core.group_by.call(null,inst_17106,inst_17087);
var inst_17108 = cljs.core.seq_QMARK_.call(null,inst_17107__$1);
var state_17148__$1 = (function (){var statearr_17193 = state_17148;
(statearr_17193[(19)] = inst_17107__$1);

(statearr_17193[(31)] = inst_17103);

return statearr_17193;
})();
if(inst_17108){
var statearr_17194_17251 = state_17148__$1;
(statearr_17194_17251[(1)] = (26));

} else {
var statearr_17195_17252 = state_17148__$1;
(statearr_17195_17252[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (35))){
var inst_17114 = (state_17148[(29)]);
var inst_17137 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_17114);
var inst_17138 = cljs.core.pr_str.call(null,inst_17137);
var inst_17139 = [cljs.core.str("not required: "),cljs.core.str(inst_17138)].join('');
var inst_17140 = figwheel.client.utils.log.call(null,inst_17139);
var state_17148__$1 = state_17148;
var statearr_17196_17253 = state_17148__$1;
(statearr_17196_17253[(2)] = inst_17140);

(statearr_17196_17253[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (19))){
var inst_17080 = (state_17148[(12)]);
var inst_17085 = (state_17148[(13)]);
var inst_17081 = (state_17148[(15)]);
var inst_17084 = (state_17148[(16)]);
var inst_17084__$1 = (state_17148[(2)]);
var inst_17085__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_17084__$1);
var inst_17086 = (function (){var res = inst_17085__$1;
var res_SINGLEQUOTE_ = inst_17084__$1;
var files_SINGLEQUOTE_ = inst_17081;
var all_files = inst_17080;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17081,inst_17084,inst_17084__$1,inst_17085__$1,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (p1__16820_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__16820_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_17080,inst_17085,inst_17081,inst_17084,inst_17084__$1,inst_17085__$1,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17087 = cljs.core.filter.call(null,inst_17086,inst_17084__$1);
var inst_17088 = cljs.core.not_empty.call(null,inst_17085__$1);
var state_17148__$1 = (function (){var statearr_17197 = state_17148;
(statearr_17197[(13)] = inst_17085__$1);

(statearr_17197[(14)] = inst_17087);

(statearr_17197[(16)] = inst_17084__$1);

return statearr_17197;
})();
if(cljs.core.truth_(inst_17088)){
var statearr_17198_17254 = state_17148__$1;
(statearr_17198_17254[(1)] = (20));

} else {
var statearr_17199_17255 = state_17148__$1;
(statearr_17199_17255[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (11))){
var state_17148__$1 = state_17148;
var statearr_17200_17256 = state_17148__$1;
(statearr_17200_17256[(2)] = null);

(statearr_17200_17256[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (9))){
var inst_17067 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17201_17257 = state_17148__$1;
(statearr_17201_17257[(2)] = inst_17067);

(statearr_17201_17257[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (5))){
var inst_17038 = (state_17148[(8)]);
var inst_17037 = (state_17148[(10)]);
var inst_17040 = (inst_17038 < inst_17037);
var inst_17041 = inst_17040;
var state_17148__$1 = state_17148;
if(cljs.core.truth_(inst_17041)){
var statearr_17202_17258 = state_17148__$1;
(statearr_17202_17258[(1)] = (7));

} else {
var statearr_17203_17259 = state_17148__$1;
(statearr_17203_17259[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (14))){
var inst_17048 = (state_17148[(26)]);
var inst_17057 = cljs.core.first.call(null,inst_17048);
var inst_17058 = figwheel.client.file_reloading.eval_body.call(null,inst_17057);
var inst_17059 = cljs.core.next.call(null,inst_17048);
var inst_17035 = inst_17059;
var inst_17036 = null;
var inst_17037 = (0);
var inst_17038 = (0);
var state_17148__$1 = (function (){var statearr_17204 = state_17148;
(statearr_17204[(7)] = inst_17036);

(statearr_17204[(8)] = inst_17038);

(statearr_17204[(32)] = inst_17058);

(statearr_17204[(9)] = inst_17035);

(statearr_17204[(10)] = inst_17037);

return statearr_17204;
})();
var statearr_17205_17260 = state_17148__$1;
(statearr_17205_17260[(2)] = null);

(statearr_17205_17260[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (26))){
var inst_17107 = (state_17148[(19)]);
var inst_17110 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17107);
var state_17148__$1 = state_17148;
var statearr_17206_17261 = state_17148__$1;
(statearr_17206_17261[(2)] = inst_17110);

(statearr_17206_17261[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (16))){
var inst_17074 = (state_17148[(22)]);
var inst_17076 = (function (){var all_files = inst_17074;
return ((function (all_files,inst_17074,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function (p1__16819_SHARP_){
return cljs.core.update_in.call(null,p1__16819_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_17074,state_val_17149,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var inst_17077 = cljs.core.map.call(null,inst_17076,inst_17074);
var state_17148__$1 = state_17148;
var statearr_17207_17262 = state_17148__$1;
(statearr_17207_17262[(2)] = inst_17077);

(statearr_17207_17262[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (30))){
var state_17148__$1 = state_17148;
var statearr_17208_17263 = state_17148__$1;
(statearr_17208_17263[(2)] = null);

(statearr_17208_17263[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (10))){
var inst_17048 = (state_17148[(26)]);
var inst_17050 = cljs.core.chunked_seq_QMARK_.call(null,inst_17048);
var state_17148__$1 = state_17148;
if(inst_17050){
var statearr_17209_17264 = state_17148__$1;
(statearr_17209_17264[(1)] = (13));

} else {
var statearr_17210_17265 = state_17148__$1;
(statearr_17210_17265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (18))){
var inst_17080 = (state_17148[(12)]);
var inst_17081 = (state_17148[(15)]);
var inst_17080__$1 = (state_17148[(2)]);
var inst_17081__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_17080__$1);
var inst_17082 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_17081__$1);
var state_17148__$1 = (function (){var statearr_17211 = state_17148;
(statearr_17211[(12)] = inst_17080__$1);

(statearr_17211[(15)] = inst_17081__$1);

return statearr_17211;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17148__$1,(19),inst_17082);
} else {
if((state_val_17149 === (37))){
var inst_17143 = (state_17148[(2)]);
var state_17148__$1 = state_17148;
var statearr_17212_17266 = state_17148__$1;
(statearr_17212_17266[(2)] = inst_17143);

(statearr_17212_17266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17149 === (8))){
var inst_17035 = (state_17148[(9)]);
var inst_17048 = (state_17148[(26)]);
var inst_17048__$1 = cljs.core.seq.call(null,inst_17035);
var state_17148__$1 = (function (){var statearr_17213 = state_17148;
(statearr_17213[(26)] = inst_17048__$1);

return statearr_17213;
})();
if(inst_17048__$1){
var statearr_17214_17267 = state_17148__$1;
(statearr_17214_17267[(1)] = (10));

} else {
var statearr_17215_17268 = state_17148__$1;
(statearr_17215_17268[(1)] = (11));

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
});})(c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
;
return ((function (switch__6704__auto__,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto____0 = (function (){
var statearr_17219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17219[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto__);

(statearr_17219[(1)] = (1));

return statearr_17219;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto____1 = (function (state_17148){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_17148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e17220){if((e17220 instanceof Object)){
var ex__6708__auto__ = e17220;
var statearr_17221_17269 = state_17148;
(statearr_17221_17269[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17270 = state_17148;
state_17148 = G__17270;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto__ = function(state_17148){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto____1.call(this,state_17148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
})();
var state__6762__auto__ = (function (){var statearr_17222 = f__6761__auto__.call(null);
(statearr_17222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_17222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__,map__17023,map__17023__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__17024,map__17024__$1,msg,files))
);

return c__6760__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__17273,link){
var map__17275 = p__17273;
var map__17275__$1 = ((cljs.core.seq_QMARK_.call(null,map__17275))?cljs.core.apply.call(null,cljs.core.hash_map,map__17275):map__17275);
var file = cljs.core.get.call(null,map__17275__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__17275,map__17275__$1,file){
return (function (p1__17271_SHARP_,p2__17272_SHARP_){
if(cljs.core._EQ_.call(null,p1__17271_SHARP_,p2__17272_SHARP_)){
return p1__17271_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__17275,map__17275__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__17279){
var map__17280 = p__17279;
var map__17280__$1 = ((cljs.core.seq_QMARK_.call(null,map__17280))?cljs.core.apply.call(null,cljs.core.hash_map,map__17280):map__17280);
var current_url_length = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__17280__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__17276_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__17276_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__17281){
var map__17283 = p__17281;
var map__17283__$1 = ((cljs.core.seq_QMARK_.call(null,map__17283))?cljs.core.apply.call(null,cljs.core.hash_map,map__17283):map__17283);
var f_data = map__17283__$1;
var request_url = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__17283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4149__auto__ = request_url;
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__17284,files_msg){
var map__17306 = p__17284;
var map__17306__$1 = ((cljs.core.seq_QMARK_.call(null,map__17306))?cljs.core.apply.call(null,cljs.core.hash_map,map__17306):map__17306);
var opts = map__17306__$1;
var on_cssload = cljs.core.get.call(null,map__17306__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__17307_17327 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__17308_17328 = null;
var count__17309_17329 = (0);
var i__17310_17330 = (0);
while(true){
if((i__17310_17330 < count__17309_17329)){
var f_17331 = cljs.core._nth.call(null,chunk__17308_17328,i__17310_17330);
figwheel.client.file_reloading.reload_css_file.call(null,f_17331);

var G__17332 = seq__17307_17327;
var G__17333 = chunk__17308_17328;
var G__17334 = count__17309_17329;
var G__17335 = (i__17310_17330 + (1));
seq__17307_17327 = G__17332;
chunk__17308_17328 = G__17333;
count__17309_17329 = G__17334;
i__17310_17330 = G__17335;
continue;
} else {
var temp__4126__auto___17336 = cljs.core.seq.call(null,seq__17307_17327);
if(temp__4126__auto___17336){
var seq__17307_17337__$1 = temp__4126__auto___17336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17307_17337__$1)){
var c__4934__auto___17338 = cljs.core.chunk_first.call(null,seq__17307_17337__$1);
var G__17339 = cljs.core.chunk_rest.call(null,seq__17307_17337__$1);
var G__17340 = c__4934__auto___17338;
var G__17341 = cljs.core.count.call(null,c__4934__auto___17338);
var G__17342 = (0);
seq__17307_17327 = G__17339;
chunk__17308_17328 = G__17340;
count__17309_17329 = G__17341;
i__17310_17330 = G__17342;
continue;
} else {
var f_17343 = cljs.core.first.call(null,seq__17307_17337__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_17343);

var G__17344 = cljs.core.next.call(null,seq__17307_17337__$1);
var G__17345 = null;
var G__17346 = (0);
var G__17347 = (0);
seq__17307_17327 = G__17344;
chunk__17308_17328 = G__17345;
count__17309_17329 = G__17346;
i__17310_17330 = G__17347;
continue;
}
} else {
}
}
break;
}

var c__6760__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6760__auto__,map__17306,map__17306__$1,opts,on_cssload){
return (function (){
var f__6761__auto__ = (function (){var switch__6704__auto__ = ((function (c__6760__auto__,map__17306,map__17306__$1,opts,on_cssload){
return (function (state_17317){
var state_val_17318 = (state_17317[(1)]);
if((state_val_17318 === (2))){
var inst_17313 = (state_17317[(2)]);
var inst_17314 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_17315 = on_cssload.call(null,inst_17314);
var state_17317__$1 = (function (){var statearr_17319 = state_17317;
(statearr_17319[(7)] = inst_17313);

return statearr_17319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17317__$1,inst_17315);
} else {
if((state_val_17318 === (1))){
var inst_17311 = cljs.core.async.timeout.call(null,(100));
var state_17317__$1 = state_17317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17317__$1,(2),inst_17311);
} else {
return null;
}
}
});})(c__6760__auto__,map__17306,map__17306__$1,opts,on_cssload))
;
return ((function (switch__6704__auto__,c__6760__auto__,map__17306,map__17306__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto____0 = (function (){
var statearr_17323 = [null,null,null,null,null,null,null,null];
(statearr_17323[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto__);

(statearr_17323[(1)] = (1));

return statearr_17323;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto____1 = (function (state_17317){
while(true){
var ret_value__6706__auto__ = (function (){try{while(true){
var result__6707__auto__ = switch__6704__auto__.call(null,state_17317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6707__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6707__auto__;
}
break;
}
}catch (e17324){if((e17324 instanceof Object)){
var ex__6708__auto__ = e17324;
var statearr_17325_17348 = state_17317;
(statearr_17325_17348[(5)] = ex__6708__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17349 = state_17317;
state_17317 = G__17349;
continue;
} else {
return ret_value__6706__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto__ = function(state_17317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto____1.call(this,state_17317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6705__auto__;
})()
;})(switch__6704__auto__,c__6760__auto__,map__17306,map__17306__$1,opts,on_cssload))
})();
var state__6762__auto__ = (function (){var statearr_17326 = f__6761__auto__.call(null);
(statearr_17326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6760__auto__);

return statearr_17326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6762__auto__);
});})(c__6760__auto__,map__17306,map__17306__$1,opts,on_cssload))
);

return c__6760__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1434562330929