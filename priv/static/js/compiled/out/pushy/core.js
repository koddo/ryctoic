// Compiled by ClojureScript 1.7.48 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy$core$recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__24538 = h;
G__24538.setUseFragment(false);

G__24538.setPathPrefix("");

G__24538.setEnabled(true);

return G__24538;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(){
var args24539 = [];
var len__17511__auto___24542 = arguments.length;
var i__17512__auto___24543 = (0);
while(true){
if((i__17512__auto___24543 < len__17511__auto___24542)){
args24539.push((arguments[i__17512__auto___24543]));

var G__24544 = (i__17512__auto___24543 + (1));
i__17512__auto___24543 = G__24544;
continue;
} else {
}
break;
}

var G__24541 = args24539.length;
switch (G__24541) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24539.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;

pushy.core.IHistory = {};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(){
var args24548 = [];
var len__17511__auto___24554 = arguments.length;
var i__17512__auto___24555 = (0);
while(true){
if((i__17512__auto___24555 < len__17511__auto___24554)){
args24548.push((arguments[i__17512__auto___24555]));

var G__24556 = (i__17512__auto___24555 + (1));
i__17512__auto___24555 = G__24556;
continue;
} else {
}
break;
}

var G__24550 = args24548.length;
switch (G__24550) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24548.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$,token);
} else {
var m__17109__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$,token,title);
} else {
var m__17109__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(){
var args24551 = [];
var len__17511__auto___24558 = arguments.length;
var i__17512__auto___24559 = (0);
while(true){
if((i__17512__auto___24559 < len__17511__auto___24558)){
args24551.push((arguments[i__17512__auto___24559]));

var G__24560 = (i__17512__auto___24559 + (1));
i__17512__auto___24559 = G__24560;
continue;
} else {
}
break;
}

var G__24553 = args24551.length;
switch (G__24553) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24551.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$,token);
} else {
var m__17109__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$,token,title);
} else {
var m__17109__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.get_token[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__17108__auto__ = (((this$ == null))?null:this$);
var m__17109__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__17108__auto__)]);
if(!((m__17109__auto__ == null))){
return m__17109__auto__.call(null,this$);
} else {
var m__17109__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__17109__auto____$1 == null))){
return m__17109__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

/**
 * Takes in three functions:
 * * dispatch-fn: the function that dispatches when a match is found
 * * match-fn: the function used to check if a particular route exists
 * * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(){
var args24562 = [];
var len__17511__auto___24572 = arguments.length;
var i__17512__auto___24573 = (0);
while(true){
if((i__17512__auto___24573 < len__17511__auto___24572)){
args24562.push((arguments[i__17512__auto___24573]));

var G__24574 = (i__17512__auto___24573 + (1));
i__17512__auto___24573 = G__24574;
continue;
} else {
}
break;
}

var G__24564 = args24562.length;
switch (G__24564) {
case 2:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24562.length)].join('')));

}
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.pushy.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t24565 !== 'undefined'){
} else {

/**
* @constructor
*/
pushy.core.t24565 = (function (dispatch_fn,match_fn,identity_fn,history,event_keys,meta24566){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta24566 = meta24566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t24565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys){
return (function (_24567,meta24566__$1){
var self__ = this;
var _24567__$1 = this;
return (new pushy.core.t24565(self__.dispatch_fn,self__.match_fn,self__.identity_fn,self__.history,self__.event_keys,meta24566__$1));
});})(history,event_keys))
;

pushy.core.t24565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys){
return (function (_24567){
var self__ = this;
var _24567__$1 = this;
return self__.meta24566;
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$ = true;

pushy.core.t24565.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4423__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4423__auto__)){
var match = temp__4423__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

var temp__4425__auto___24576 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___24576)){
var match_24577 = temp__4425__auto___24576;
self__.dispatch_fn.call(null,match_24577);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4425__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4425__auto__)){
var el = temp__4425__auto__;
var uri = goog.Uri.parse(el.href);
var path = uri.getPath();
var query = uri.getQuery();
var next_token = ((cljs.core.empty_QMARK_.call(null,query))?path:[cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join(''));
if(cljs.core.truth_((function (){var and__16460__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,next_token));
if(cljs.core.truth_(and__16460__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__16460__auto__;
}
})())){
var temp__4423__auto___24578 = el.title;
if(cljs.core.truth_(temp__4423__auto___24578)){
var title_24579 = temp__4423__auto___24578;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_24579);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

return null;
});})(history,event_keys))
;

pushy.core.t24565.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__24568_24580 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__24569_24581 = null;
var count__24570_24582 = (0);
var i__24571_24583 = (0);
while(true){
if((i__24571_24583 < count__24570_24582)){
var key_24584 = cljs.core._nth.call(null,chunk__24569_24581,i__24571_24583);
goog.events.unlistenByKey(key_24584);

var G__24585 = seq__24568_24580;
var G__24586 = chunk__24569_24581;
var G__24587 = count__24570_24582;
var G__24588 = (i__24571_24583 + (1));
seq__24568_24580 = G__24585;
chunk__24569_24581 = G__24586;
count__24570_24582 = G__24587;
i__24571_24583 = G__24588;
continue;
} else {
var temp__4425__auto___24589 = cljs.core.seq.call(null,seq__24568_24580);
if(temp__4425__auto___24589){
var seq__24568_24590__$1 = temp__4425__auto___24589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24568_24590__$1)){
var c__17256__auto___24591 = cljs.core.chunk_first.call(null,seq__24568_24590__$1);
var G__24592 = cljs.core.chunk_rest.call(null,seq__24568_24590__$1);
var G__24593 = c__17256__auto___24591;
var G__24594 = cljs.core.count.call(null,c__17256__auto___24591);
var G__24595 = (0);
seq__24568_24580 = G__24592;
chunk__24569_24581 = G__24593;
count__24570_24582 = G__24594;
i__24571_24583 = G__24595;
continue;
} else {
var key_24596 = cljs.core.first.call(null,seq__24568_24590__$1);
goog.events.unlistenByKey(key_24596);

var G__24597 = cljs.core.next.call(null,seq__24568_24590__$1);
var G__24598 = null;
var G__24599 = (0);
var G__24600 = (0);
seq__24568_24580 = G__24597;
chunk__24569_24581 = G__24598;
count__24570_24582 = G__24599;
i__24571_24583 = G__24600;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys))
;

pushy.core.t24565.getBasis = ((function (history,event_keys){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta24566","meta24566",1913274275,null)], null);
});})(history,event_keys))
;

pushy.core.t24565.cljs$lang$type = true;

pushy.core.t24565.cljs$lang$ctorStr = "pushy.core/t24565";

pushy.core.t24565.cljs$lang$ctorPrWriter = ((function (history,event_keys){
return (function (this__17051__auto__,writer__17052__auto__,opt__17053__auto__){
return cljs.core._write.call(null,writer__17052__auto__,"pushy.core/t24565");
});})(history,event_keys))
;

pushy.core.__GT_t24565 = ((function (history,event_keys){
return (function pushy$core$__GT_t24565(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta24566){
return (new pushy.core.t24565(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta24566));
});})(history,event_keys))
;

}

return (new pushy.core.t24565(dispatch_fn,match_fn,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = 3;
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(){
var args24601 = [];
var len__17511__auto___24604 = arguments.length;
var i__17512__auto___24605 = (0);
while(true){
if((i__17512__auto___24605 < len__17511__auto___24604)){
args24601.push((arguments[i__17512__auto___24605]));

var G__24606 = (i__17512__auto___24605 + (1));
i__17512__auto___24605 = G__24606;
continue;
} else {
}
break;
}

var G__24603 = args24601.length;
switch (G__24603) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24601.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;
pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(){
var args24608 = [];
var len__17511__auto___24611 = arguments.length;
var i__17512__auto___24612 = (0);
while(true){
if((i__17512__auto___24612 < len__17511__auto___24611)){
args24608.push((arguments[i__17512__auto___24612]));

var G__24613 = (i__17512__auto___24612 + (1));
i__17512__auto___24612 = G__24613;
continue;
} else {
}
break;
}

var G__24610 = args24608.length;
switch (G__24610) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24608.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map?rel=1440504625781