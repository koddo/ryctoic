// Compiled by ClojureScript 0.0-3165 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.history.EventType');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.Html5History');
goog.require('goog.History');
goog.require('goog.events');
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
var G__24462 = h;
G__24462.setUseFragment(false);

G__24462.setPathPrefix("");

G__24462.setEnabled(true);

return G__24462;
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
pushy.core.new_history = (function() {
var pushy$core$new_history = null;
var pushy$core$new_history__0 = (function (){
return pushy$core$new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});
var pushy$core$new_history__1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});
pushy$core$new_history = function(transformer){
switch(arguments.length){
case 0:
return pushy$core$new_history__0.call(this);
case 1:
return pushy$core$new_history__1.call(this,transformer);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pushy$core$new_history.cljs$core$IFn$_invoke$arity$0 = pushy$core$new_history__0;
pushy$core$new_history.cljs$core$IFn$_invoke$arity$1 = pushy$core$new_history__1;
return pushy$core$new_history;
})()
;

pushy.core.IHistory = (function (){var obj24464 = {};
return obj24464;
})();

pushy.core.set_token_BANG_ = (function() {
var pushy$core$set_token_BANG_ = null;
var pushy$core$set_token_BANG___2 = (function (this$,token){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
})().call(null,this$,token);
}
});
var pushy$core$set_token_BANG___3 = (function (this$,token,title){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
})().call(null,this$,token,title);
}
});
pushy$core$set_token_BANG_ = function(this$,token,title){
switch(arguments.length){
case 2:
return pushy$core$set_token_BANG___2.call(this,this$,token);
case 3:
return pushy$core$set_token_BANG___3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pushy$core$set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = pushy$core$set_token_BANG___2;
pushy$core$set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = pushy$core$set_token_BANG___3;
return pushy$core$set_token_BANG_;
})()
;

pushy.core.replace_token_BANG_ = (function() {
var pushy$core$replace_token_BANG_ = null;
var pushy$core$replace_token_BANG___2 = (function (this$,token){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
})().call(null,this$,token);
}
});
var pushy$core$replace_token_BANG___3 = (function (this$,token,title){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
})().call(null,this$,token,title);
}
});
pushy$core$replace_token_BANG_ = function(this$,token,title){
switch(arguments.length){
case 2:
return pushy$core$replace_token_BANG___2.call(this,this$,token);
case 3:
return pushy$core$replace_token_BANG___3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pushy$core$replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = pushy$core$replace_token_BANG___2;
pushy$core$replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = pushy$core$replace_token_BANG___3;
return pushy$core$replace_token_BANG_;
})()
;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$get_token$arity$1;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.get_token[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.get_token["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
})().call(null,this$);
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$start_BANG_$arity$1;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.start_BANG_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
})().call(null,this$);
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((function (){var and__17775__auto__ = this$;
if(and__17775__auto__){
return this$.pushy$core$IHistory$stop_BANG_$arity$1;
} else {
return and__17775__auto__;
}
})()){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__18423__auto__ = (((this$ == null))?null:this$);
return (function (){var or__17787__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__18423__auto__)]);
if(or__17787__auto__){
return or__17787__auto__;
} else {
var or__17787__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(or__17787__auto____$1){
return or__17787__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
})().call(null,this$);
}
});

/**
 * Takes in three functions:
 * * dispatch-fn: the function that dispatches when a match is found
 * * match-fn: the function used to check if a particular route exists
 * * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function() {
var pushy$core$pushy = null;
var pushy$core$pushy__2 = (function (dispatch_fn,match_fn){
return pushy$core$pushy.call(null,dispatch_fn,match_fn,cljs.core.identity);
});
var pushy$core$pushy__3 = (function (dispatch_fn,match_fn,identity_fn){
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t24472 !== 'undefined'){
} else {

/**
* @constructor
*/
pushy.core.t24472 = (function (event_keys,history,identity_fn,match_fn,dispatch_fn,pushy,meta24473){
this.event_keys = event_keys;
this.history = history;
this.identity_fn = identity_fn;
this.match_fn = match_fn;
this.dispatch_fn = dispatch_fn;
this.pushy = pushy;
this.meta24473 = meta24473;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
pushy.core.t24472.prototype.pushy$core$IHistory$ = true;

pushy.core.t24472.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t24472.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t24472.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t24472.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t24472.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys))
;

pushy.core.t24472.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4124__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4124__auto__)){
var match = temp__4124__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

var temp__4126__auto___24479 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4126__auto___24479)){
var match_24480 = temp__4126__auto___24479;
self__.dispatch_fn.call(null,match_24480);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4126__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4126__auto__)){
var el = temp__4126__auto__;
var href = el.href;
var path = goog.Uri.parse(href).getPath();
if(cljs.core.truth_((function (){var and__17775__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,path));
if(cljs.core.truth_(and__17775__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__17775__auto__;
}
})())){
var temp__4124__auto___24481 = el.title;
if(cljs.core.truth_(temp__4124__auto___24481)){
var title_24482 = temp__4124__auto___24481;
pushy.core.set_token_BANG_.call(null,this$__$1,path,title_24482);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,path);
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

pushy.core.t24472.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__24475_24483 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__24476_24484 = null;
var count__24477_24485 = (0);
var i__24478_24486 = (0);
while(true){
if((i__24478_24486 < count__24477_24485)){
var key_24487 = cljs.core._nth.call(null,chunk__24476_24484,i__24478_24486);
goog.events.unlistenByKey(key_24487);

var G__24488 = seq__24475_24483;
var G__24489 = chunk__24476_24484;
var G__24490 = count__24477_24485;
var G__24491 = (i__24478_24486 + (1));
seq__24475_24483 = G__24488;
chunk__24476_24484 = G__24489;
count__24477_24485 = G__24490;
i__24478_24486 = G__24491;
continue;
} else {
var temp__4126__auto___24492 = cljs.core.seq.call(null,seq__24475_24483);
if(temp__4126__auto___24492){
var seq__24475_24493__$1 = temp__4126__auto___24492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24475_24493__$1)){
var c__18572__auto___24494 = cljs.core.chunk_first.call(null,seq__24475_24493__$1);
var G__24495 = cljs.core.chunk_rest.call(null,seq__24475_24493__$1);
var G__24496 = c__18572__auto___24494;
var G__24497 = cljs.core.count.call(null,c__18572__auto___24494);
var G__24498 = (0);
seq__24475_24483 = G__24495;
chunk__24476_24484 = G__24496;
count__24477_24485 = G__24497;
i__24478_24486 = G__24498;
continue;
} else {
var key_24499 = cljs.core.first.call(null,seq__24475_24493__$1);
goog.events.unlistenByKey(key_24499);

var G__24500 = cljs.core.next.call(null,seq__24475_24493__$1);
var G__24501 = null;
var G__24502 = (0);
var G__24503 = (0);
seq__24475_24483 = G__24500;
chunk__24476_24484 = G__24501;
count__24477_24485 = G__24502;
i__24478_24486 = G__24503;
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

pushy.core.t24472.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys){
return (function (_24474){
var self__ = this;
var _24474__$1 = this;
return self__.meta24473;
});})(history,event_keys))
;

pushy.core.t24472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys){
return (function (_24474,meta24473__$1){
var self__ = this;
var _24474__$1 = this;
return (new pushy.core.t24472(self__.event_keys,self__.history,self__.identity_fn,self__.match_fn,self__.dispatch_fn,self__.pushy,meta24473__$1));
});})(history,event_keys))
;

pushy.core.t24472.cljs$lang$type = true;

pushy.core.t24472.cljs$lang$ctorStr = "pushy.core/t24472";

pushy.core.t24472.cljs$lang$ctorPrWriter = ((function (history,event_keys){
return (function (this__18366__auto__,writer__18367__auto__,opt__18368__auto__){
return cljs.core._write.call(null,writer__18367__auto__,"pushy.core/t24472");
});})(history,event_keys))
;

pushy.core.__GT_t24472 = ((function (history,event_keys){
return (function pushy$core$pushy_$___GT_t24472(event_keys__$1,history__$1,identity_fn__$1,match_fn__$1,dispatch_fn__$1,pushy__$2,meta24473){
return (new pushy.core.t24472(event_keys__$1,history__$1,identity_fn__$1,match_fn__$1,dispatch_fn__$1,pushy__$2,meta24473));
});})(history,event_keys))
;

}

return (new pushy.core.t24472(event_keys,history,identity_fn,match_fn,dispatch_fn,pushy$core$pushy,cljs.core.PersistentArrayMap.EMPTY));
});
pushy$core$pushy = function(dispatch_fn,match_fn,identity_fn){
switch(arguments.length){
case 2:
return pushy$core$pushy__2.call(this,dispatch_fn,match_fn);
case 3:
return pushy$core$pushy__3.call(this,dispatch_fn,match_fn,identity_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pushy$core$pushy.cljs$core$IFn$_invoke$arity$2 = pushy$core$pushy__2;
pushy$core$pushy.cljs$core$IFn$_invoke$arity$3 = pushy$core$pushy__3;
return pushy$core$pushy;
})()
;
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function() {
var pushy$core$supported_QMARK_ = null;
var pushy$core$supported_QMARK___0 = (function (){
return pushy$core$supported_QMARK_.call(null,window);
});
var pushy$core$supported_QMARK___1 = (function (window){
return goog.history.Html5History.isSupported(window);
});
pushy$core$supported_QMARK_ = function(window){
switch(arguments.length){
case 0:
return pushy$core$supported_QMARK___0.call(this);
case 1:
return pushy$core$supported_QMARK___1.call(this,window);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pushy$core$supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = pushy$core$supported_QMARK___0;
pushy$core$supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = pushy$core$supported_QMARK___1;
return pushy$core$supported_QMARK_;
})()
;

//# sourceMappingURL=core.js.map?rel=1435073922044