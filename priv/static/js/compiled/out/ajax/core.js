// Compiled by ClojureScript 1.7.48 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 */
ajax.core.AjaxImpl = {};

/**
 * Makes an actual ajax request.  All parameters except opts
 * are in JS format.  Should return an AjaxRequest.
 */
ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7 == null)))){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$,uri,method,body,headers,handler,opts);
} else {
var m__17109__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$,uri,method,body,headers,handler,opts);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 */
ajax.core.AjaxRequest = {};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.core._abort = (function ajax$core$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._abort[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (ajax.core._abort["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * A marker interface for types that can be directly sent to XhrIo.
 */
ajax.core.DirectlySubmittable = {};


/**
 * An abstraction for an ajax response.
 */
ajax.core.AjaxResponse = {};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.core._status = (function ajax$core$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._status[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (ajax.core._status["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.core._status_text = (function ajax$core$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._status_text[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (ajax.core._status_text["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format
 * such as a blob or arraybuffer.
 */
ajax.core._body = (function ajax$core$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._body[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (ajax.core._body["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._get_response_header[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$,header);
} else {
var m__17109__auto____$1 = (ajax.core._get_response_header["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$core$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (ajax.core._was_aborted[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (ajax.core._was_aborted["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__16472__auto__ = ((!((params == null)))?(((false) || (params.ajax$core$DirectlySubmittable$))?true:(((!params.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params):false)):cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,params));
if(or__16472__auto__){
return or__16472__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23943){
var map__23944 = p__23943;
var map__23944__$1 = ((((!((map__23944 == null)))?((((map__23944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23944):map__23944);
var timeout = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var this$__$1 = this;
var G__23946 = this$__$1;
goog.events.listen(G__23946,goog.net.EventType.COMPLETE,((function (G__23946,this$__$1,map__23944,map__23944__$1,timeout,with_credentials){
return (function (p1__23942_SHARP_){
return handler.call(null,p1__23942_SHARP_.target);
});})(G__23946,this$__$1,map__23944,map__23944__$1,timeout,with_credentials))
);

G__23946.setTimeoutInterval(timeout);

G__23946.setWithCredentials(with_credentials);

G__23946.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__23946;
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
ajax.core.ready_state = (function ajax$core$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23948){
var map__23949 = p__23948;
var map__23949__$1 = ((((!((map__23949 == null)))?((((map__23949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23949):map__23949);
var timeout = cljs.core.get.call(null,map__23949__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__23949__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__23949__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__23949,map__23949__$1,timeout,with_credentials,response_format){
return (function (p1__23947_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.core.ready_state.call(null,p1__23947_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__23949,map__23949__$1,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___23957 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___23957)){
var response_type_23958 = temp__4425__auto___23957;
this$__$1.responseType = cljs.core.name.call(null,response_type_23958);
} else {
}

var seq__23951_23959 = cljs.core.seq.call(null,headers);
var chunk__23952_23960 = null;
var count__23953_23961 = (0);
var i__23954_23962 = (0);
while(true){
if((i__23954_23962 < count__23953_23961)){
var vec__23955_23963 = cljs.core._nth.call(null,chunk__23952_23960,i__23954_23962);
var k_23964 = cljs.core.nth.call(null,vec__23955_23963,(0),null);
var v_23965 = cljs.core.nth.call(null,vec__23955_23963,(1),null);
this$__$1.setRequestHeader(k_23964,v_23965);

var G__23966 = seq__23951_23959;
var G__23967 = chunk__23952_23960;
var G__23968 = count__23953_23961;
var G__23969 = (i__23954_23962 + (1));
seq__23951_23959 = G__23966;
chunk__23952_23960 = G__23967;
count__23953_23961 = G__23968;
i__23954_23962 = G__23969;
continue;
} else {
var temp__4425__auto___23970 = cljs.core.seq.call(null,seq__23951_23959);
if(temp__4425__auto___23970){
var seq__23951_23971__$1 = temp__4425__auto___23970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23951_23971__$1)){
var c__17256__auto___23972 = cljs.core.chunk_first.call(null,seq__23951_23971__$1);
var G__23973 = cljs.core.chunk_rest.call(null,seq__23951_23971__$1);
var G__23974 = c__17256__auto___23972;
var G__23975 = cljs.core.count.call(null,c__17256__auto___23972);
var G__23976 = (0);
seq__23951_23959 = G__23973;
chunk__23952_23960 = G__23974;
count__23953_23961 = G__23975;
i__23954_23962 = G__23976;
continue;
} else {
var vec__23956_23977 = cljs.core.first.call(null,seq__23951_23971__$1);
var k_23978 = cljs.core.nth.call(null,vec__23956_23977,(0),null);
var v_23979 = cljs.core.nth.call(null,vec__23956_23977,(1),null);
this$__$1.setRequestHeader(k_23978,v_23979);

var G__23980 = cljs.core.next.call(null,seq__23951_23971__$1);
var G__23981 = null;
var G__23982 = (0);
var G__23983 = (0);
seq__23951_23959 = G__23980;
chunk__23952_23960 = G__23981;
count__23953_23961 = G__23982;
i__23954_23962 = G__23983;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__16472__auto__ = body;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__23984){
var map__23985 = p__23984;
var map__23985__$1 = ((((!((map__23985 == null)))?((((map__23985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23985):map__23985);
var id = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var priority = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var max_retries = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function ajax$core$edn_response_format(){
var args23987 = [];
var len__17511__auto___23990 = arguments.length;
var i__17512__auto___23991 = (0);
while(true){
if((i__17512__auto___23991 < len__17511__auto___23990)){
args23987.push((arguments[i__17512__auto___23991]));

var G__23992 = (i__17512__auto___23991 + (1));
i__17512__auto___23991 = G__23992;
continue;
} else {
}
break;
}

var G__23989 = args23987.length;
switch (G__23989) {
case 0:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23987.length)].join('')));

}
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});

ajax.core.edn_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.edn_response_format.call(null);
});

ajax.core.edn_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_write = (function ajax$core$transit_write(){
var args23994 = [];
var len__17511__auto___23997 = arguments.length;
var i__17512__auto___23998 = (0);
while(true){
if((i__17512__auto___23998 < len__17511__auto___23997)){
args23994.push((arguments[i__17512__auto___23998]));

var G__23999 = (i__17512__auto___23998 + (1));
i__17512__auto___23998 = G__23999;
continue;
} else {
}
break;
}

var G__23996 = args23994.length;
switch (G__23996) {
case 2:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23994.length)].join('')));

}
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});

ajax.core.transit_write.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});

ajax.core.transit_write.cljs$lang$maxFixedArity = 2;
ajax.core.transit_request_format = (function ajax$core$transit_request_format(){
var args24001 = [];
var len__17511__auto___24007 = arguments.length;
var i__17512__auto___24008 = (0);
while(true){
if((i__17512__auto___24008 < len__17511__auto___24007)){
args24001.push((arguments[i__17512__auto___24008]));

var G__24009 = (i__17512__auto___24008 + (1));
i__17512__auto___24008 = G__24009;
continue;
} else {
}
break;
}

var G__24003 = args24001.length;
switch (G__24003) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24001.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (p__24004){
var map__24005 = p__24004;
var map__24005__$1 = ((((!((map__24005 == null)))?((((map__24005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24005):map__24005);
var opts = map__24005__$1;
var type = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer = cljs.core.get.call(null,map__24005__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var writer__$1 = (function (){var or__16472__auto__ = writer;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__16472__auto____$1 = type;
if(cljs.core.truth_(or__16472__auto____$1)){
return or__16472__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;
ajax.core.transit_read = (function ajax$core$transit_read(){
var args24011 = [];
var len__17511__auto___24014 = arguments.length;
var i__17512__auto___24015 = (0);
while(true){
if((i__17512__auto___24015 < len__17511__auto___24014)){
args24011.push((arguments[i__17512__auto___24015]));

var G__24016 = (i__17512__auto___24015 + (1));
i__17512__auto___24015 = G__24016;
continue;
} else {
}
break;
}

var G__24013 = args24011.length;
switch (G__24013) {
case 3:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24011.length)].join('')));

}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});

ajax.core.transit_read.cljs$lang$maxFixedArity = 3;
ajax.core.transit_response_format = (function ajax$core$transit_response_format(){
var args24018 = [];
var len__17511__auto___24024 = arguments.length;
var i__17512__auto___24025 = (0);
while(true){
if((i__17512__auto___24025 < len__17511__auto___24024)){
args24018.push((arguments[i__17512__auto___24025]));

var G__24026 = (i__17512__auto___24025 + (1));
i__17512__auto___24025 = G__24026;
continue;
} else {
}
break;
}

var G__24020 = args24018.length;
switch (G__24020) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24018.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__24021){
var map__24022 = p__24021;
var map__24022__$1 = ((((!((map__24022 == null)))?((((map__24022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24022):map__24022);
var opts = map__24022__$1;
var type = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var raw = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader__$1 = (function (){var or__16472__auto__ = reader;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__16472__auto____$1 = type;
if(cljs.core.truth_(or__16472__auto____$1)){
return or__16472__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(){
var args24028 = [];
var len__17511__auto___24031 = arguments.length;
var i__17512__auto___24032 = (0);
while(true){
if((i__17512__auto___24032 < len__17511__auto___24031)){
args24028.push((arguments[i__17512__auto___24032]));

var G__24033 = (i__17512__auto___24032 + (1));
i__17512__auto___24032 = G__24033;
continue;
} else {
}
break;
}

var G__24030 = args24028.length;
switch (G__24030) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24028.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return ajax.core.raw_response_format.call(null);
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function ajax$core$json_read(){
var args24035 = [];
var len__17511__auto___24038 = arguments.length;
var i__17512__auto___24039 = (0);
while(true){
if((i__17512__auto___24039 < len__17511__auto___24038)){
args24035.push((arguments[i__17512__auto___24039]));

var G__24040 = (i__17512__auto___24039 + (1));
i__17512__auto___24039 = G__24040;
continue;
} else {
}
break;
}

var G__24037 = args24035.length;
switch (G__24037) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24035.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16460__auto__ = prefix;
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16460__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16460__auto__ = prefix;
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16460__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16460__auto__ = prefix;
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16460__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__16460__auto__ = prefix;
if(cljs.core.truth_(and__16460__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__16460__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(){
var args24042 = [];
var len__17511__auto___24048 = arguments.length;
var i__17512__auto___24049 = (0);
while(true){
if((i__17512__auto___24049 < len__17511__auto___24048)){
args24042.push((arguments[i__17512__auto___24049]));

var G__24050 = (i__17512__auto___24049 + (1));
i__17512__auto___24049 = G__24050;
continue;
} else {
}
break;
}

var G__24044 = args24042.length;
switch (G__24044) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24042.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__24045){
var map__24046 = p__24045;
var map__24046__$1 = ((((!((map__24046 == null)))?((((map__24046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24046):map__24046);
var prefix = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var keywords_QMARK_ = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var raw = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function ajax$core$get_format(){
var args24052 = [];
var len__17511__auto___24055 = arguments.length;
var i__17512__auto___24056 = (0);
while(true){
if((i__17512__auto___24056 < len__17511__auto___24055)){
args24052.push((arguments[i__17512__auto___24056]));

var G__24057 = (i__17512__auto___24056 + (1));
i__17512__auto___24056 = G__24057;
continue;
} else {
}
break;
}

var G__24054 = args24052.length;
switch (G__24054) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24052.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax.core.get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;
ajax.core.accept_entry = (function ajax$core$accept_entry(){
var args24059 = [];
var len__17511__auto___24062 = arguments.length;
var i__17512__auto___24063 = (0);
while(true){
if((i__17512__auto___24063 < len__17511__auto___24062)){
args24059.push((arguments[i__17512__auto___24063]));

var G__24064 = (i__17512__auto___24063 + (1));
i__17512__auto___24063 = G__24064;
continue;
} else {
}
break;
}

var G__24061 = args24059.length;
switch (G__24061) {
case 2:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24059.length)].join('')));

}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$2 = (function (opts,format_entry){
var or__16472__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return "*/*";
}
});

ajax.core.accept_entry.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (format_entry){
var or__16472__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return "*/*";
}
});
});

ajax.core.accept_entry.cljs$lang$maxFixedArity = 2;
ajax.core.detect_content_type = (function ajax$core$detect_content_type(){
var args24066 = [];
var len__17511__auto___24069 = arguments.length;
var i__17512__auto___24070 = (0);
while(true){
if((i__17512__auto___24070 < len__17511__auto___24069)){
args24066.push((arguments[i__17512__auto___24070]));

var G__24071 = (i__17512__auto___24070 + (1));
i__17512__auto___24070 = G__24071;
continue;
} else {
}
break;
}

var G__24068 = args24066.length;
switch (G__24068) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24066.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__24073){
var map__24076 = p__24073;
var map__24076__$1 = ((((!((map__24076 == null)))?((((map__24076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24076):map__24076);
var opts = map__24076__$1;
var response_format = cljs.core.get.call(null,map__24076__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__16472__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(){
var args24078 = [];
var len__17511__auto___24081 = arguments.length;
var i__17512__auto___24082 = (0);
while(true){
if((i__17512__auto___24082 < len__17511__auto___24081)){
args24078.push((arguments[i__17512__auto___24082]));

var G__24083 = (i__17512__auto___24082 + (1));
i__17512__auto___24082 = G__24083;
continue;
} else {
}
break;
}

var G__24080 = args24078.length;
switch (G__24080) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24078.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;
ajax.core.accept_header = (function ajax$core$accept_header(p__24085){
var map__24088 = p__24085;
var map__24088__$1 = ((((!((map__24088 == null)))?((((map__24088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24088):map__24088);
var opts = map__24088__$1;
var response_format = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(){
var args24090 = [];
var len__17511__auto___24093 = arguments.length;
var i__17512__auto___24094 = (0);
while(true){
if((i__17512__auto___24094 < len__17511__auto___24093)){
args24090.push((arguments[i__17512__auto___24094]));

var G__24095 = (i__17512__auto___24094 + (1));
i__17512__auto___24094 = G__24095;
continue;
} else {
}
break;
}

var G__24092 = args24090.length;
switch (G__24092) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24090.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__24097){
var map__24100 = p__24097;
var map__24100__$1 = ((((!((map__24100 == null)))?((((map__24100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24100):map__24100);
var opts = map__24100__$1;
var response_format = cljs.core.get.call(null,map__24100__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__24102,xhrio){
var map__24105 = p__24102;
var map__24105__$1 = ((((!((map__24105 == null)))?((((map__24105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24105):map__24105);
var description = cljs.core.get.call(null,map__24105__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
ajax.core.fail = (function ajax$core$fail(){
var args__17518__auto__ = [];
var len__17511__auto___24111 = arguments.length;
var i__17512__auto___24112 = (0);
while(true){
if((i__17512__auto___24112 < len__17511__auto___24111)){
args__17518__auto__.push((arguments[i__17512__auto___24112]));

var G__24113 = (i__17512__auto___24112 + (1));
i__17512__auto___24112 = G__24113;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((3) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((3)),(0))):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17519__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq24107){
var G__24108 = cljs.core.first.call(null,seq24107);
var seq24107__$1 = cljs.core.next.call(null,seq24107);
var G__24109 = cljs.core.first.call(null,seq24107__$1);
var seq24107__$2 = cljs.core.next.call(null,seq24107__$1);
var G__24110 = cljs.core.first.call(null,seq24107__$2);
var seq24107__$3 = cljs.core.next.call(null,seq24107__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__24108,G__24109,G__24110,seq24107__$3);
});
ajax.core.interpret_response = (function ajax$core$interpret_response(p__24114,xhrio){
var map__24120 = p__24114;
var map__24120__$1 = ((((!((map__24120 == null)))?((((map__24120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24120):map__24120);
var format = map__24120__$1;
var read = cljs.core.get.call(null,map__24120__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
var G__24123 = status;
switch (G__24123) {
case (-1):
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e24124){if((e24124 instanceof Object)){
var e = e24124;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e24124;

}
}
}
}catch (e24122){if((e24122 instanceof Object)){
var e = e24122;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e24122;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str((cljs.core.truth_(cljs.core.re_find.call(null,/\?/,uri))?"&":"?")),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__24126,p__24127){
var map__24134 = p__24126;
var map__24134__$1 = ((((!((map__24134 == null)))?((((map__24134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24134):map__24134);
var uri = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.call(null,map__24134__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__24135 = p__24127;
var map__24135__$1 = ((((!((map__24135 == null)))?((((map__24135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24135):map__24135);
var content_type = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__16472__auto__ = headers;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__24138 = ajax.core.get_request_format.call(null,format);
var map__24138__$1 = ((((!((map__24138 == null)))?((((map__24138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24138):map__24138);
var write = cljs.core.get.call(null,map__24138__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type__$1 = cljs.core.get.call(null,map__24138__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = ((!((write == null)))?write.call(null,params):(cljs.core.truth_(ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",[cljs.core.str(content_type__$1),cljs.core.str("; charset=utf-8")].join('')], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function ajax$core$js_handler(){
var args24140 = [];
var len__17511__auto___24143 = arguments.length;
var i__17512__auto___24144 = (0);
while(true){
if((i__17512__auto___24144 < len__17511__auto___24143)){
args24140.push((arguments[i__17512__auto___24144]));

var G__24145 = (i__17512__auto___24144 + (1));
i__17512__auto___24144 = G__24145;
continue;
} else {
}
break;
}

var G__24142 = args24140.length;
switch (G__24142) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24140.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__24147){
var map__24150 = p__24147;
var map__24150__$1 = ((((!((map__24150 == null)))?((((map__24150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24150):map__24150);
var handler = cljs.core.get.call(null,map__24150__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__24152){
var map__24156 = p__24152;
var map__24156__$1 = ((((!((map__24156 == null)))?((((map__24156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24156):map__24156);
var opts = map__24156__$1;
var method = cljs.core.get.call(null,map__24156__$1,new cljs.core.Keyword(null,"method","method",55703592));
var api = cljs.core.get.call(null,map__24156__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__24158 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__24158,(0),null);
var body = cljs.core.nth.call(null,vec__24158,(1),null);
var headers = cljs.core.nth.call(null,vec__24158,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__16472__auto__ = api;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__24160 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__24160) {
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "url":
return ajax.core.url_request_format.call(null);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__24163 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__24163) {
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "detect":
return ajax.core.detect_response_format.call(null);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__24165_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__24165_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function ajax$core$transform_handler(){
var args24166 = [];
var len__17511__auto___24179 = arguments.length;
var i__17512__auto___24180 = (0);
while(true){
if((i__17512__auto___24180 < len__17511__auto___24179)){
args24166.push((arguments[i__17512__auto___24180]));

var G__24181 = (i__17512__auto___24180 + (1));
i__17512__auto___24180 = G__24181;
continue;
} else {
}
break;
}

var G__24168 = args24166.length;
switch (G__24168) {
case 2:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24166.length)].join('')));

}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$2 = (function (p__24169,p__24170){
var map__24171 = p__24169;
var map__24171__$1 = ((((!((map__24171 == null)))?((((map__24171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24171):map__24171);
var handler = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__24171__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var vec__24172 = p__24170;
var ok = cljs.core.nth.call(null,vec__24172,(0),null);
var result = cljs.core.nth.call(null,vec__24172,(1),null);
var temp__4423__auto___24183 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___24183)){
var h_24184 = temp__4423__auto___24183;
h_24184.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});

ajax.core.transform_handler.cljs$core$IFn$_invoke$arity$1 = (function (p__24174){
var map__24175 = p__24174;
var map__24175__$1 = ((((!((map__24175 == null)))?((((map__24175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24175):map__24175);
var handler = cljs.core.get.call(null,map__24175__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__24175__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var finally$ = cljs.core.get.call(null,map__24175__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
return ((function (map__24175,map__24175__$1,handler,error_handler,finally$){
return (function (p__24177){
var vec__24178 = p__24177;
var ok = cljs.core.nth.call(null,vec__24178,(0),null);
var result = cljs.core.nth.call(null,vec__24178,(1),null);
var temp__4423__auto___24185 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4423__auto___24185)){
var h_24186 = temp__4423__auto___24185;
h_24186.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__24175,map__24175__$1,handler,error_handler,finally$))
});

ajax.core.transform_handler.cljs$lang$maxFixedArity = 2;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__24187){
var map__24190 = p__24187;
var map__24190__$1 = ((((!((map__24190 == null)))?((((map__24190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24190):map__24190);
var opts = map__24190__$1;
var method = cljs.core.get.call(null,map__24190__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.call(null,map__24190__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var response_format = cljs.core.get.call(null,map__24190__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var params = cljs.core.get.call(null,map__24190__$1,new cljs.core.Keyword(null,"params","params",710516235));

var needs_format = cljs.core.not.call(null,(function (){var or__16472__auto__ = ajax.core.submittable_QMARK_.call(null,params);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return cljs.core._EQ_.call(null,method,"GET");
}
})());
var rf = (cljs.core.truth_((function (){var or__16472__auto__ = format;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(){
var args__17518__auto__ = [];
var len__17511__auto___24194 = arguments.length;
var i__17512__auto___24195 = (0);
while(true){
if((i__17512__auto___24195 < len__17511__auto___24194)){
args__17518__auto__.push((arguments[i__17512__auto___24195]));

var G__24196 = (i__17512__auto___24195 + (1));
i__17512__auto___24195 = G__24196;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq24192){
var G__24193 = cljs.core.first.call(null,seq24192);
var seq24192__$1 = cljs.core.next.call(null,seq24192);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__24193,seq24192__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(){
var args__17518__auto__ = [];
var len__17511__auto___24199 = arguments.length;
var i__17512__auto___24200 = (0);
while(true){
if((i__17512__auto___24200 < len__17511__auto___24199)){
args__17518__auto__.push((arguments[i__17512__auto___24200]));

var G__24201 = (i__17512__auto___24200 + (1));
i__17512__auto___24200 = G__24201;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq24197){
var G__24198 = cljs.core.first.call(null,seq24197);
var seq24197__$1 = cljs.core.next.call(null,seq24197);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__24198,seq24197__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(){
var args__17518__auto__ = [];
var len__17511__auto___24204 = arguments.length;
var i__17512__auto___24205 = (0);
while(true){
if((i__17512__auto___24205 < len__17511__auto___24204)){
args__17518__auto__.push((arguments[i__17512__auto___24205]));

var G__24206 = (i__17512__auto___24205 + (1));
i__17512__auto___24205 = G__24206;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq24202){
var G__24203 = cljs.core.first.call(null,seq24202);
var seq24202__$1 = cljs.core.next.call(null,seq24202);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__24203,seq24202__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(){
var args__17518__auto__ = [];
var len__17511__auto___24209 = arguments.length;
var i__17512__auto___24210 = (0);
while(true){
if((i__17512__auto___24210 < len__17511__auto___24209)){
args__17518__auto__.push((arguments[i__17512__auto___24210]));

var G__24211 = (i__17512__auto___24210 + (1));
i__17512__auto___24210 = G__24211;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq24207){
var G__24208 = cljs.core.first.call(null,seq24207);
var seq24207__$1 = cljs.core.next.call(null,seq24207);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__24208,seq24207__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(){
var args__17518__auto__ = [];
var len__17511__auto___24214 = arguments.length;
var i__17512__auto___24215 = (0);
while(true){
if((i__17512__auto___24215 < len__17511__auto___24214)){
args__17518__auto__.push((arguments[i__17512__auto___24215]));

var G__24216 = (i__17512__auto___24215 + (1));
i__17512__auto___24215 = G__24216;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq24212){
var G__24213 = cljs.core.first.call(null,seq24212);
var seq24212__$1 = cljs.core.next.call(null,seq24212);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__24213,seq24212__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(){
var args__17518__auto__ = [];
var len__17511__auto___24219 = arguments.length;
var i__17512__auto___24220 = (0);
while(true){
if((i__17512__auto___24220 < len__17511__auto___24219)){
args__17518__auto__.push((arguments[i__17512__auto___24220]));

var G__24221 = (i__17512__auto___24220 + (1));
i__17512__auto___24220 = G__24221;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq24217){
var G__24218 = cljs.core.first.call(null,seq24217);
var seq24217__$1 = cljs.core.next.call(null,seq24217);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__24218,seq24217__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(){
var args__17518__auto__ = [];
var len__17511__auto___24224 = arguments.length;
var i__17512__auto___24225 = (0);
while(true){
if((i__17512__auto___24225 < len__17511__auto___24224)){
args__17518__auto__.push((arguments[i__17512__auto___24225]));

var G__24226 = (i__17512__auto___24225 + (1));
i__17512__auto___24225 = G__24226;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq24222){
var G__24223 = cljs.core.first.call(null,seq24222);
var seq24222__$1 = cljs.core.next.call(null,seq24222);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__24223,seq24222__$1);
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(){
var args__17518__auto__ = [];
var len__17511__auto___24229 = arguments.length;
var i__17512__auto___24230 = (0);
while(true){
if((i__17512__auto___24230 < len__17511__auto___24229)){
args__17518__auto__.push((arguments[i__17512__auto___24230]));

var G__24231 = (i__17512__auto___24230 + (1));
i__17512__auto___24230 = G__24231;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((1) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((1)),(0))):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17519__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__17661__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PATCH",(((f__17661__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__17661__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq24227){
var G__24228 = cljs.core.first.call(null,seq24227);
var seq24227__$1 = cljs.core.next.call(null,seq24227);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__24228,seq24227__$1);
});

//# sourceMappingURL=core.js.map?rel=1440504622493