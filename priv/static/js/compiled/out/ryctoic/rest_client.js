// Compiled by ClojureScript 1.7.48 {}
goog.provide('ryctoic.rest_client');
goog.require('cljs.core');
goog.require('ryctoic.async_error_handling_helpers');
goog.require('ajax.core');
goog.require('cljs.core.async');
ryctoic.rest_client.MYGET2 = (function ryctoic$rest_client$MYGET2(url,ch){
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.assoc.call(null,ajax.core.json_response_format.call(null),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/hal+json"),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__22867_SHARP_){
return cljs.core.async.put_BANG_.call(null,ch,p1__22867_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__22871){
var map__22872 = p__22871;
var map__22872__$1 = ((((!((map__22872 == null)))?((((map__22872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22872):map__22872);
var status = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var failure = cljs.core.get.call(null,map__22872__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
return cljs.core.async.put_BANG_.call(null,ch,(new Error([cljs.core.str("Oops: "),cljs.core.str(status),cljs.core.str(", "),cljs.core.str(status_text),cljs.core.str(", "),cljs.core.str(failure)].join(''))));
})], null));

return ch;
});

//# sourceMappingURL=rest_client.js.map?rel=1441118716469