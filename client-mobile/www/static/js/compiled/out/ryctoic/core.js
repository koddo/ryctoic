// Compiled by ClojureScript 0.0-3165 {}
goog.provide('ryctoic.core');
goog.require('cljs.core');
goog.require('pushy.core');
goog.require('secretary.core');
goog.require('re_frame.core');
goog.require('reagent.ratom');
goog.require('reagent.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),(function (state,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
}));
}));
ryctoic.core.current_page = (function ryctoic$core$current_page(){
var cp = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-page","current-page",-101294180)], null));
cljs.core.println.call(null,"current page ",cljs.core.deref.call(null,cp));

if(cljs.core.not.call(null,cljs.core.deref.call(null,cp))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"initializing"], null);
} else {
return cljs.core.deref.call(null,cp).call(null);
}
});
ryctoic.core.page_root = (function ryctoic$core$page_root(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"root"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"about"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/wont_be_found"], null),"wont_be_found"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"fuuu3"], null)], null);
});
ryctoic.core.page_about = (function ryctoic$core$page_about(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"about"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"root"], null)], null)], null)], null);
});
ryctoic.core.page_not_found = (function ryctoic$core$page_not_found(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"not found"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),"root"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/about"], null),"about"], null)], null)], null)], null);
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,v){
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),null,new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284),(new WebSocket("wss://echo.websocket.org"))], null);
cljs.core.println.call(null,":initialize");

new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284).cljs$core$IFn$_invoke$arity$1(state).onopen = ((function (state){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-onopen","ws-onopen",2114412150)], null));
});})(state))
;

new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284).cljs$core$IFn$_invoke$arity$1(state).onmessage = ((function (state){
return (function (p1__23034_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),p1__23034_SHARP_], null));
});})(state))
;

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"router-event","router-event",631645884),(function (state,p__23035){
var vec__23036 = p__23035;
var _ = cljs.core.nth.call(null,vec__23036,(0),null);
var new_current_page = cljs.core.nth.call(null,vec__23036,(1),null);
cljs.core.println.call(null,":router-event ",new_current_page);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new_current_page);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),(function (state,_){
cljs.core.println.call(null,":render ");

reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ryctoic.core.current_page], null),document.getElementById("app"));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-onopen","ws-onopen",2114412150),(function (state,_){
cljs.core.println.call(null,":ws-onopen ");

new cljs.core.Keyword(null,"websocket-obj","websocket-obj",-1810626284).cljs$core$IFn$_invoke$arity$1(state).send("hello websocket");

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),(function (state,p__23037){
var vec__23038 = p__23037;
var _ = cljs.core.nth.call(null,vec__23038,(0),null);
var msg = cljs.core.nth.call(null,vec__23038,(1),null);
cljs.core.println.call(null,":ws-onmessage ",msg.data);

return state;
}));
var action__19016__auto___23041 = (function (params__19017__auto__){
if(cljs.core.map_QMARK_.call(null,params__19017__auto__)){
var map__23039 = params__19017__auto__;
var map__23039__$1 = ((cljs.core.seq_QMARK_.call(null,map__23039))?cljs.core.apply.call(null,cljs.core.hash_map,map__23039):map__23039);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),null,16,7,21,21,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19017__auto__)){
var vec__23040 = params__19017__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),null,16,7,21,21,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19016__auto___23041);

var action__19016__auto___23044 = (function (params__19017__auto__){
if(cljs.core.map_QMARK_.call(null,params__19017__auto__)){
var map__23042 = params__19017__auto__;
var map__23042__$1 = ((cljs.core.seq_QMARK_.call(null,map__23042))?cljs.core.apply.call(null,cljs.core.hash_map,map__23042):map__23042);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),null,17,7,30,30,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19017__auto__)){
var vec__23043 = params__19017__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),null,17,7,30,30,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19016__auto___23044);

var action__19016__auto___23047 = (function (params__19017__auto__){
if(cljs.core.map_QMARK_.call(null,params__19017__auto__)){
var map__23045 = params__19017__auto__;
var map__23045__$1 = ((cljs.core.seq_QMARK_.call(null,map__23045))?cljs.core.apply.call(null,cljs.core.hash_map,map__23045):map__23045);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),null,21,7,36,36,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19017__auto__)){
var vec__23046 = params__19017__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),null,21,7,36,36,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__19016__auto___23047);

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

//# sourceMappingURL=core.js.map?rel=1435073920629