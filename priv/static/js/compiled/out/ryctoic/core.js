// Compiled by ClojureScript 0.0-3165 {}
goog.provide('ryctoic.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.ratom');
goog.require('pushy.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (state,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"username","username",1605666410),(function (state,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
}));
}));
ryctoic.core.current_page = (function ryctoic$core$current_page(){
var current_page__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null));
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username","username",1605666410)], null));
cljs.core.println.call(null,"current page ",cljs.core.deref.call(null,current_page__$1));

if(cljs.core.not.call(null,cljs.core.deref.call(null,current_page__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"initializing"], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.deref.call(null,username)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"log in",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_page__$1,username){
return (function (){
return somecode.popupCenter("/oauth2/google/callback","","500","500");
});})(current_page__$1,username))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"get request",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_page__$1,username){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--get-request","btn-click--get-request",-1654264357)], null));
});})(current_page__$1,username))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"post request",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_page__$1,username){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request","btn-click--post-request",-1744629056)], null));
});})(current_page__$1,username))
], null)], null),cljs.core.deref.call(null,current_page__$1).call(null)], null);
}
});
ryctoic.core.page_root = (function ryctoic$core$page_root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"about"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/wont_be_found"], null),"wont_be_found"], null)], null)], null)], null);
});
ryctoic.core.page_about = (function ryctoic$core$page_about(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"about"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"root"], null)], null)], null)], null);
});
ryctoic.core.page_not_found = (function ryctoic$core$page_not_found(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"not found"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"root"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"about"], null)], null)], null)], null);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (_,v){
var state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),null,new cljs.core.Keyword(null,"username","username",1605666410),somecode.userinfo,new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284),(new WebSocket("wss://echo.websocket.org"))], null);
new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284).cljs$core$IFn$_invoke$arity$1(state).onopen = ((function (state){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-onopen","ws-onopen",2114412150)], null));
});})(state))
;

new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284).cljs$core$IFn$_invoke$arity$1(state).onmessage = ((function (state){
return (function (p1__20661_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),p1__20661_SHARP_], null));
});})(state))
;

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20662){
var vec__20663 = p__20662;
var _ = cljs.core.nth.call(null,vec__20663,(0),null);
var new_current_page = cljs.core.nth.call(null,vec__20663,(1),null);
cljs.core.println.call(null,":router-event ",new_current_page);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new_current_page);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ryctoic.core.current_page], null),document.getElementById("app"));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-onopen","ws-onopen",2114412150),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284).cljs$core$IFn$_invoke$arity$1(state).send("hello websocket");

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20664){
var vec__20665 = p__20664;
var _ = cljs.core.nth.call(null,vec__20665,(0),null);
var msg = cljs.core.nth.call(null,vec__20665,(1),null);
cljs.core.println.call(null,"--- the msg: ",msg.data);

return state;
}));
ryctoic.core.dispatch_login = (function ryctoic$core$dispatch_login(s){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-in","log-in",526627385),s], null));
});
goog.exportSymbol('ryctoic.core.dispatch_login', ryctoic.core.dispatch_login);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"log-in","log-in",526627385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20666){
var vec__20667 = p__20666;
var _ = cljs.core.nth.call(null,vec__20667,(0),null);
var s = cljs.core.nth.call(null,vec__20667,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"username","username",1605666410),s);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request","btn-click--get-request",-1654264357),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
ajax.core.GET.call(null,"https://localhost.ryctoic.com:8443/mongo",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__20668_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--get-request--handle","btn-click--get-request--handle",-1956662338),p1__20668_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__20669_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--get-request--error","btn-click--get-request--error",464363886),p1__20669_SHARP_], null));
})], null));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request--handle","btn-click--get-request--handle",-1956662338),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20670){
var vec__20671 = p__20670;
var _ = cljs.core.nth.call(null,vec__20671,(0),null);
var response = cljs.core.nth.call(null,vec__20671,(1),null);
cljs.core.println.call(null,"--- the response ",cljs.core.get.call(null,response,"field2"));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request--error","btn-click--get-request--error",464363886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20672){
var vec__20673 = p__20672;
var _ = cljs.core.nth.call(null,vec__20673,(0),null);
var response = cljs.core.nth.call(null,vec__20673,(1),null);
return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request","btn-click--post-request",-1744629056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
ajax.core.POST.call(null,"https://localhost.ryctoic.com:8443/mongo",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fuck","fuck",-1244062035),"you"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__20674_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request--handle","btn-click--post-request--handle",-790308330),p1__20674_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__20675_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request--error","btn-click--post-request--error",1272473559),p1__20675_SHARP_], null));
})], null));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request--handle","btn-click--post-request--handle",-790308330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20676){
var vec__20677 = p__20676;
var _ = cljs.core.nth.call(null,vec__20677,(0),null);
var response = cljs.core.nth.call(null,vec__20677,(1),null);
return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request--error","btn-click--post-request--error",1272473559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20678){
var vec__20679 = p__20678;
var _ = cljs.core.nth.call(null,vec__20679,(0),null);
var response = cljs.core.nth.call(null,vec__20679,(1),null);
return state;
}));
var action__19580__auto___20682 = (function (params__19581__auto__){
if(cljs.core.map_QMARK_.call(null,params__19581__auto__)){
var map__20680 = params__19581__auto__;
var map__20680__$1 = ((cljs.core.seq_QMARK_.call(null,map__20680))?cljs.core.apply.call(null,cljs.core.hash_map,map__20680):map__20680);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),null,16,7,44,44,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19581__auto__)){
var vec__20681 = params__19581__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),null,16,7,44,44,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19580__auto___20682);

var action__19580__auto___20685 = (function (params__19581__auto__){
if(cljs.core.map_QMARK_.call(null,params__19581__auto__)){
var map__20683 = params__19581__auto__;
var map__20683__$1 = ((cljs.core.seq_QMARK_.call(null,map__20683))?cljs.core.apply.call(null,cljs.core.hash_map,map__20683):map__20683);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),null,17,7,52,52,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19581__auto__)){
var vec__20684 = params__19581__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),null,17,7,52,52,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19580__auto___20685);

var action__19580__auto___20688 = (function (params__19581__auto__){
if(cljs.core.map_QMARK_.call(null,params__19581__auto__)){
var map__20686 = params__19581__auto__;
var map__20686__$1 = ((cljs.core.seq_QMARK_.call(null,map__20686))?cljs.core.apply.call(null,cljs.core.hash_map,map__20686):map__20686);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),null,21,7,58,58,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19581__auto__)){
var vec__20687 = params__19581__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),null,21,7,58,58,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__19580__auto___20688);

ryctoic.core.run = (function ryctoic$core$run(){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

ryctoic.core.history = pushy.core.pushy.call(null,secretary.core.dispatch_BANG_,(function (x){
if(cljs.core.truth_(secretary.core.locate_route.call(null,x))){
return x;
} else {
return null;
}
}));

pushy.core.start_BANG_.call(null,ryctoic.core.history);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454)], null));
});
goog.exportSymbol('ryctoic.core.run', ryctoic.core.run);

//# sourceMappingURL=core.js.map?rel=1438551696856