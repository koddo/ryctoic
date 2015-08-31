// Compiled by ClojureScript 1.7.48 {}
goog.provide('ryctoic.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('reagent.ratom');
goog.require('ryctoic.async_error_handling_helpers');
goog.require('cljs.core.async');
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
return (function (p1__20842_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),p1__20842_SHARP_], null));
});})(state))
;

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20843){
var vec__20844 = p__20843;
var _ = cljs.core.nth.call(null,vec__20844,(0),null);
var new_current_page = cljs.core.nth.call(null,vec__20844,(1),null);
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
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20845){
var vec__20846 = p__20845;
var _ = cljs.core.nth.call(null,vec__20846,(0),null);
var msg = cljs.core.nth.call(null,vec__20846,(1),null);
cljs.core.println.call(null,"--- the msg: ",msg.data);

return state;
}));
ryctoic.core.dispatch_login = (function ryctoic$core$dispatch_login(s){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-in","log-in",526627385),s], null));
});
goog.exportSymbol('ryctoic.core.dispatch_login', ryctoic.core.dispatch_login);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"log-in","log-in",526627385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20847){
var vec__20848 = p__20847;
var _ = cljs.core.nth.call(null,vec__20848,(0),null);
var s = cljs.core.nth.call(null,vec__20848,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"username","username",1605666410),s);
}));
ryctoic.core.MYGET2 = (function ryctoic$core$MYGET2(url,ch){
ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),cljs.core.assoc.call(null,ajax.core.json_response_format.call(null),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/hal+json"),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__20849_SHARP_){
return cljs.core.async.put_BANG_.call(null,ch,p1__20849_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p__20853){
var map__20854 = p__20853;
var map__20854__$1 = ((((!((map__20854 == null)))?((((map__20854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20854):map__20854);
var status = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
var failure = cljs.core.get.call(null,map__20854__$1,new cljs.core.Keyword(null,"failure","failure",720415879));
return cljs.core.async.put_BANG_.call(null,ch,(new Error([cljs.core.str("Oops: "),cljs.core.str(status),cljs.core.str(", "),cljs.core.str(status_text),cljs.core.str(", "),cljs.core.str(failure)].join(''))));
})], null));

return ch;
});
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request","btn-click--get-request",-1654264357),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
var c__19245__auto___20898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19245__auto___20898){
return (function (){
var f__19246__auto__ = (function (){var switch__19224__auto__ = ((function (c__19245__auto___20898){
return (function (state_20885){
var state_val_20886 = (state_20885[(1)]);
if((state_val_20886 === (1))){
var state_20885__$1 = state_20885;
var statearr_20887_20899 = state_20885__$1;
(statearr_20887_20899[(2)] = null);

(statearr_20887_20899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20886 === (2))){
var inst_20883 = (state_20885[(2)]);
var state_20885__$1 = state_20885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20885__$1,inst_20883);
} else {
if((state_val_20886 === (3))){
var inst_20856 = (state_20885[(2)]);
var inst_20857 = console.error("!!! --- WTF --- !!!: ",inst_20856);
var state_20885__$1 = state_20885;
var statearr_20888_20900 = state_20885__$1;
(statearr_20888_20900[(2)] = inst_20857);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20886 === (4))){
var inst_20861 = (state_20885[(7)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20885,(3),Error,null,(2));
var inst_20861__$1 = cljs.core.async.chan.call(null);
var inst_20862 = ryctoic.core.MYGET2.call(null,"https://localhost.ryctoic.com:8443/api/v0",inst_20861__$1);
var state_20885__$1 = (function (){var statearr_20889 = state_20885;
(statearr_20889[(7)] = inst_20861__$1);

return statearr_20889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20885__$1,(6),inst_20862);
} else {
if((state_val_20886 === (5))){
var inst_20872 = (state_20885[(2)]);
var inst_20873 = ryctoic.async_error_handling_helpers.throw_err.call(null,inst_20872);
var inst_20874 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20875 = ["data"];
var inst_20876 = (new cljs.core.PersistentVector(null,1,(5),inst_20874,inst_20875,null));
var inst_20877 = cljs.core.get_in.call(null,inst_20873,inst_20876);
var inst_20878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20879 = [new cljs.core.Keyword(null,"btn-click--get-request--handle","btn-click--get-request--handle",-1956662338),inst_20877];
var inst_20880 = (new cljs.core.PersistentVector(null,2,(5),inst_20878,inst_20879,null));
var inst_20881 = re_frame.core.dispatch.call(null,inst_20880);
var state_20885__$1 = state_20885;
var statearr_20890_20901 = state_20885__$1;
(statearr_20890_20901[(2)] = inst_20881);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20885__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20886 === (6))){
var inst_20861 = (state_20885[(7)]);
var inst_20864 = (state_20885[(2)]);
var inst_20865 = ryctoic.async_error_handling_helpers.throw_err.call(null,inst_20864);
var inst_20866 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20867 = ["_links","ry:test","href"];
var inst_20868 = (new cljs.core.PersistentVector(null,3,(5),inst_20866,inst_20867,null));
var inst_20869 = cljs.core.get_in.call(null,inst_20865,inst_20868);
var inst_20870 = ryctoic.core.MYGET2.call(null,inst_20869,inst_20861);
var state_20885__$1 = state_20885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20885__$1,(5),inst_20870);
} else {
return null;
}
}
}
}
}
}
});})(c__19245__auto___20898))
;
return ((function (switch__19224__auto__,c__19245__auto___20898){
return (function() {
var ryctoic$core$state_machine__19225__auto__ = null;
var ryctoic$core$state_machine__19225__auto____0 = (function (){
var statearr_20894 = [null,null,null,null,null,null,null,null];
(statearr_20894[(0)] = ryctoic$core$state_machine__19225__auto__);

(statearr_20894[(1)] = (1));

return statearr_20894;
});
var ryctoic$core$state_machine__19225__auto____1 = (function (state_20885){
while(true){
var ret_value__19226__auto__ = (function (){try{while(true){
var result__19227__auto__ = switch__19224__auto__.call(null,state_20885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19227__auto__;
}
break;
}
}catch (e20895){if((e20895 instanceof Object)){
var ex__19228__auto__ = e20895;
var statearr_20896_20902 = state_20885;
(statearr_20896_20902[(5)] = ex__19228__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20903 = state_20885;
state_20885 = G__20903;
continue;
} else {
return ret_value__19226__auto__;
}
break;
}
});
ryctoic$core$state_machine__19225__auto__ = function(state_20885){
switch(arguments.length){
case 0:
return ryctoic$core$state_machine__19225__auto____0.call(this);
case 1:
return ryctoic$core$state_machine__19225__auto____1.call(this,state_20885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ryctoic$core$state_machine__19225__auto__.cljs$core$IFn$_invoke$arity$0 = ryctoic$core$state_machine__19225__auto____0;
ryctoic$core$state_machine__19225__auto__.cljs$core$IFn$_invoke$arity$1 = ryctoic$core$state_machine__19225__auto____1;
return ryctoic$core$state_machine__19225__auto__;
})()
;})(switch__19224__auto__,c__19245__auto___20898))
})();
var state__19247__auto__ = (function (){var statearr_20897 = f__19246__auto__.call(null);
(statearr_20897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19245__auto___20898);

return statearr_20897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19247__auto__);
});})(c__19245__auto___20898))
);


return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request--handle","btn-click--get-request--handle",-1956662338),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20904){
var vec__20905 = p__20904;
var _ = cljs.core.nth.call(null,vec__20905,(0),null);
var response = cljs.core.nth.call(null,vec__20905,(1),null);
cljs.core.println.call(null,"--- the response ",response);

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request--error","btn-click--get-request--error",464363886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20906){
var vec__20907 = p__20906;
var _ = cljs.core.nth.call(null,vec__20907,(0),null);
var response = cljs.core.nth.call(null,vec__20907,(1),null);
return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request","btn-click--post-request",-1744629056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
ajax.core.POST.call(null,"https://localhost.ryctoic.com:8443/mongo",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fuck","fuck",-1244062035),"you"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__20908_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request--handle","btn-click--post-request--handle",-790308330),p1__20908_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__20909_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request--error","btn-click--post-request--error",1272473559),p1__20909_SHARP_], null));
})], null));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request--handle","btn-click--post-request--handle",-790308330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20910){
var vec__20911 = p__20910;
var _ = cljs.core.nth.call(null,vec__20911,(0),null);
var response = cljs.core.nth.call(null,vec__20911,(1),null);
return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request--error","btn-click--post-request--error",1272473559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__20912){
var vec__20913 = p__20912;
var _ = cljs.core.nth.call(null,vec__20913,(0),null);
var response = cljs.core.nth.call(null,vec__20913,(1),null);
return state;
}));
var action__19299__auto___20917 = (function (params__19300__auto__){
if(cljs.core.map_QMARK_.call(null,params__19300__auto__)){
var map__20914 = params__19300__auto__;
var map__20914__$1 = ((((!((map__20914 == null)))?((((map__20914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20914):map__20914);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),"src/ryctoic/core.cljs",16,1,51,51,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19300__auto__)){
var vec__20916 = params__19300__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),"src/ryctoic/core.cljs",16,1,51,51,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19299__auto___20917);

var action__19299__auto___20921 = (function (params__19300__auto__){
if(cljs.core.map_QMARK_.call(null,params__19300__auto__)){
var map__20918 = params__19300__auto__;
var map__20918__$1 = ((((!((map__20918 == null)))?((((map__20918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20918):map__20918);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),"src/ryctoic/core.cljs",17,1,59,59,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19300__auto__)){
var vec__20920 = params__19300__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),"src/ryctoic/core.cljs",17,1,59,59,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19299__auto___20921);

var action__19299__auto___20925 = (function (params__19300__auto__){
if(cljs.core.map_QMARK_.call(null,params__19300__auto__)){
var map__20922 = params__19300__auto__;
var map__20922__$1 = ((((!((map__20922 == null)))?((((map__20922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20922):map__20922);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),"src/ryctoic/core.cljs",21,1,65,65,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19300__auto__)){
var vec__20924 = params__19300__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),"src/ryctoic/core.cljs",21,1,65,65,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__19299__auto___20925);

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

//# sourceMappingURL=core.js.map?rel=1440856936840