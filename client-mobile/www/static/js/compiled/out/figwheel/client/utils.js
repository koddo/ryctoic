// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !(((goog["nodeGlobalRequire"]) == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"html","html",-998796897);
} else {
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);

}
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function() {
var figwheel$client$utils$log = null;
var figwheel$client$utils$log__1 = (function (x){
return figwheel$client$utils$log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});
var figwheel$client$utils$log__2 = (function (level,arg){
var f = (function (){var pred__29412 = cljs.core._EQ_;
var expr__29413 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__29412.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__29413))){
return ((function (pred__29412,expr__29413){
return (function (p1__29405_SHARP_){
return console.warn(p1__29405_SHARP_);
});
;})(pred__29412,expr__29413))
} else {
if(cljs.core.truth_(pred__29412.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__29413))){
return ((function (pred__29412,expr__29413){
return (function (p1__29406_SHARP_){
return console.debug(p1__29406_SHARP_);
});
;})(pred__29412,expr__29413))
} else {
if(cljs.core.truth_(pred__29412.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__29413))){
return ((function (pred__29412,expr__29413){
return (function (p1__29407_SHARP_){
return console.error(p1__29407_SHARP_);
});
;})(pred__29412,expr__29413))
} else {
return ((function (pred__29412,expr__29413){
return (function (p1__29408_SHARP_){
return console.log(p1__29408_SHARP_);
});
;})(pred__29412,expr__29413))
}
}
}
})();
return f.call(null,arg);
});
figwheel$client$utils$log = function(level,arg){
switch(arguments.length){
case 1:
return figwheel$client$utils$log__1.call(this,level);
case 2:
return figwheel$client$utils$log__2.call(this,level,arg);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$utils$log.cljs$core$IFn$_invoke$arity$1 = figwheel$client$utils$log__1;
figwheel$client$utils$log.cljs$core$IFn$_invoke$arity$2 = figwheel$client$utils$log__2;
return figwheel$client$utils$log;
})()
;

//# sourceMappingURL=utils.js.map?rel=1435073935318