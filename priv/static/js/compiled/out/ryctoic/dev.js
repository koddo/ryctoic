// Compiled by ClojureScript 0.0-3165 {}
goog.provide('ryctoic.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('re_frame.core');
goog.require('ryctoic.core');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),[cljs.core.str("wss://"),cljs.core.str(window.location.hostname),cljs.core.str(":8443/figwheel-ws")].join(''),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
cljs.core.println.call(null,"----------------------------------------");

cljs.core.println.call(null,"jsload");

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454)], null));
})], null));

//# sourceMappingURL=dev.js.map?rel=1437582709082