// Compiled by ClojureScript 1.7.48 {}
goog.provide('ryctoic.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('ryctoic.rest_client');
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
return (function (p1__23822_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),p1__23822_SHARP_], null));
});})(state))
;

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23823){
var vec__23824 = p__23823;
var _ = cljs.core.nth.call(null,vec__23824,(0),null);
var new_current_page = cljs.core.nth.call(null,vec__23824,(1),null);
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
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"ws-onmessage","ws-onmessage",609093133),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23825){
var vec__23826 = p__23825;
var _ = cljs.core.nth.call(null,vec__23826,(0),null);
var msg = cljs.core.nth.call(null,vec__23826,(1),null);
cljs.core.println.call(null,"--- the msg: ",msg.data);

return state;
}));
ryctoic.core.dispatch_login = (function ryctoic$core$dispatch_login(s){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log-in","log-in",526627385),s], null));
});
goog.exportSymbol('ryctoic.core.dispatch_login', ryctoic.core.dispatch_login);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"log-in","log-in",526627385),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23827){
var vec__23828 = p__23827;
var _ = cljs.core.nth.call(null,vec__23828,(0),null);
var s = cljs.core.nth.call(null,vec__23828,(1),null);
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"username","username",1605666410),s);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request","btn-click--get-request",-1654264357),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
var c__19173__auto___23872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19173__auto___23872){
return (function (){
var f__19174__auto__ = (function (){var switch__19152__auto__ = ((function (c__19173__auto___23872){
return (function (state_23859){
var state_val_23860 = (state_23859[(1)]);
if((state_val_23860 === (1))){
var state_23859__$1 = state_23859;
var statearr_23861_23873 = state_23859__$1;
(statearr_23861_23873[(2)] = null);

(statearr_23861_23873[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (2))){
var inst_23857 = (state_23859[(2)]);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23859__$1,inst_23857);
} else {
if((state_val_23860 === (3))){
var inst_23832 = (state_23859[(2)]);
var inst_23833 = console.error("!!! --- WTF --- !!!: ",inst_23832);
var state_23859__$1 = state_23859;
var statearr_23862_23874 = state_23859__$1;
(statearr_23862_23874[(2)] = inst_23833);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23859__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (4))){
var inst_23837 = (state_23859[(7)]);
var ___$1 = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23859,(3),Error,null,(2));
var inst_23837__$1 = cljs.core.async.chan.call(null);
var inst_23838 = (function (){var ch23830 = inst_23837__$1;
return ((function (ch23830,inst_23837,___$1,inst_23837__$1,state_val_23860,c__19173__auto___23872){
return (function (p1__23829_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--get-request--handle","btn-click--get-request--handle",-1956662338),p1__23829_SHARP_], null));
});
;})(ch23830,inst_23837,___$1,inst_23837__$1,state_val_23860,c__19173__auto___23872))
})();
var inst_23839 = ryctoic.rest_client.MYGET2.call(null,"https://localhost.ryctoic.com:8443/api/v0",inst_23837__$1);
var state_23859__$1 = (function (){var statearr_23863 = state_23859;
(statearr_23863[(8)] = inst_23838);

(statearr_23863[(7)] = inst_23837__$1);

return statearr_23863;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23859__$1,(6),inst_23839);
} else {
if((state_val_23860 === (5))){
var inst_23838 = (state_23859[(8)]);
var inst_23849 = (state_23859[(2)]);
var inst_23850 = ryctoic.async_error_handling_helpers.throw_err.call(null,inst_23849);
var inst_23851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23852 = ["data"];
var inst_23853 = (new cljs.core.PersistentVector(null,1,(5),inst_23851,inst_23852,null));
var inst_23854 = cljs.core.get_in.call(null,inst_23850,inst_23853);
var inst_23855 = inst_23838.call(null,inst_23854);
var state_23859__$1 = state_23859;
var statearr_23864_23875 = state_23859__$1;
(statearr_23864_23875[(2)] = inst_23855);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23859__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23860 === (6))){
var inst_23837 = (state_23859[(7)]);
var inst_23841 = (state_23859[(2)]);
var inst_23842 = ryctoic.async_error_handling_helpers.throw_err.call(null,inst_23841);
var inst_23843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23844 = ["_links","ry:test","href"];
var inst_23845 = (new cljs.core.PersistentVector(null,3,(5),inst_23843,inst_23844,null));
var inst_23846 = cljs.core.get_in.call(null,inst_23842,inst_23845);
var inst_23847 = ryctoic.rest_client.MYGET2.call(null,inst_23846,inst_23837);
var state_23859__$1 = state_23859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23859__$1,(5),inst_23847);
} else {
return null;
}
}
}
}
}
}
});})(c__19173__auto___23872))
;
return ((function (switch__19152__auto__,c__19173__auto___23872){
return (function() {
var ryctoic$core$state_machine__19153__auto__ = null;
var ryctoic$core$state_machine__19153__auto____0 = (function (){
var statearr_23868 = [null,null,null,null,null,null,null,null,null];
(statearr_23868[(0)] = ryctoic$core$state_machine__19153__auto__);

(statearr_23868[(1)] = (1));

return statearr_23868;
});
var ryctoic$core$state_machine__19153__auto____1 = (function (state_23859){
while(true){
var ret_value__19154__auto__ = (function (){try{while(true){
var result__19155__auto__ = switch__19152__auto__.call(null,state_23859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19155__auto__;
}
break;
}
}catch (e23869){if((e23869 instanceof Object)){
var ex__19156__auto__ = e23869;
var statearr_23870_23876 = state_23859;
(statearr_23870_23876[(5)] = ex__19156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23877 = state_23859;
state_23859 = G__23877;
continue;
} else {
return ret_value__19154__auto__;
}
break;
}
});
ryctoic$core$state_machine__19153__auto__ = function(state_23859){
switch(arguments.length){
case 0:
return ryctoic$core$state_machine__19153__auto____0.call(this);
case 1:
return ryctoic$core$state_machine__19153__auto____1.call(this,state_23859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ryctoic$core$state_machine__19153__auto__.cljs$core$IFn$_invoke$arity$0 = ryctoic$core$state_machine__19153__auto____0;
ryctoic$core$state_machine__19153__auto__.cljs$core$IFn$_invoke$arity$1 = ryctoic$core$state_machine__19153__auto____1;
return ryctoic$core$state_machine__19153__auto__;
})()
;})(switch__19152__auto__,c__19173__auto___23872))
})();
var state__19175__auto__ = (function (){var statearr_23871 = f__19174__auto__.call(null);
(statearr_23871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19173__auto___23872);

return statearr_23871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19175__auto__);
});})(c__19173__auto___23872))
);


return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request--handle","btn-click--get-request--handle",-1956662338),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23878){
var vec__23879 = p__23878;
var _ = cljs.core.nth.call(null,vec__23879,(0),null);
var response = cljs.core.nth.call(null,vec__23879,(1),null);
cljs.core.println.call(null,"--- the response ",response);

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--get-request--error","btn-click--get-request--error",464363886),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23880){
var vec__23881 = p__23880;
var _ = cljs.core.nth.call(null,vec__23881,(0),null);
var response = cljs.core.nth.call(null,vec__23881,(1),null);
return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request","btn-click--post-request",-1744629056),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,_){
ajax.core.POST.call(null,"https://localhost.ryctoic.com:8443/mongo",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fuck","fuck",-1244062035),"you"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__23882_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request--handle","btn-click--post-request--handle",-790308330),p1__23882_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__23883_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-click--post-request--error","btn-click--post-request--error",1272473559),p1__23883_SHARP_], null));
})], null));

return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request--handle","btn-click--post-request--handle",-790308330),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23884){
var vec__23885 = p__23884;
var _ = cljs.core.nth.call(null,vec__23885,(0),null);
var response = cljs.core.nth.call(null,vec__23885,(1),null);
return state;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"btn-click--post-request--error","btn-click--post-request--error",1272473559),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.debug], null),(function (state,p__23886){
var vec__23887 = p__23886;
var _ = cljs.core.nth.call(null,vec__23887,(0),null);
var response = cljs.core.nth.call(null,vec__23887,(1),null);
return state;
}));
var action__19315__auto___23891 = (function (params__19316__auto__){
if(cljs.core.map_QMARK_.call(null,params__19316__auto__)){
var map__23888 = params__19316__auto__;
var map__23888__$1 = ((((!((map__23888 == null)))?((((map__23888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23888):map__23888);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),"src/ryctoic/core.cljs",16,1,53,53,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19316__auto__)){
var vec__23890 = params__19316__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_root;},new cljs.core.Symbol("ryctoic.core","page-root","ryctoic.core/page-root",561601196,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-root","page-root",80541440,null),"src/ryctoic/core.cljs",16,1,53,53,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_root)?ryctoic.core.page_root.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__19315__auto___23891);

var action__19315__auto___23895 = (function (params__19316__auto__){
if(cljs.core.map_QMARK_.call(null,params__19316__auto__)){
var map__23892 = params__19316__auto__;
var map__23892__$1 = ((((!((map__23892 == null)))?((((map__23892.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23892.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23892):map__23892);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),"src/ryctoic/core.cljs",17,1,61,61,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19316__auto__)){
var vec__23894 = params__19316__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_about;},new cljs.core.Symbol("ryctoic.core","page-about","ryctoic.core/page-about",1885717164,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-about","page-about",1460551424,null),"src/ryctoic/core.cljs",17,1,61,61,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_about)?ryctoic.core.page_about.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__19315__auto___23895);

var action__19315__auto___23899 = (function (params__19316__auto__){
if(cljs.core.map_QMARK_.call(null,params__19316__auto__)){
var map__23896 = params__19316__auto__;
var map__23896__$1 = ((((!((map__23896 == null)))?((((map__23896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23896):map__23896);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),"src/ryctoic/core.cljs",21,1,67,67,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__19316__auto__)){
var vec__23898 = params__19316__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"router-event","router-event",631645884),new cljs.core.Var(function(){return ryctoic.core.page_not_found;},new cljs.core.Symbol("ryctoic.core","page-not-found","ryctoic.core/page-not-found",1467125178,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[cljs.core.with_meta(new cljs.core.Symbol(null,"ryctoic.core","ryctoic.core",-437675327,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691),true], null)),new cljs.core.Symbol(null,"page-not-found","page-not-found",1759453726,null),"src/ryctoic/core.cljs",21,1,67,67,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ryctoic.core.page_not_found)?ryctoic.core.page_not_found.cljs$lang$test:null)]))], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"*",action__19315__auto___23899);

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

//# sourceMappingURL=core.js.map?rel=1441123918354