// Compiled by ClojureScript 1.7.48 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var args__17518__auto__ = [];
var len__17511__auto___28880 = arguments.length;
var i__17512__auto___28881 = (0);
while(true){
if((i__17512__auto___28881 < len__17511__auto___28880)){
args__17518__auto__.push((arguments[i__17512__auto___28881]));

var G__28882 = (i__17512__auto___28881 + (1));
i__17512__auto___28881 = G__28882;
continue;
} else {
}
break;
}

var argseq__17519__auto__ = ((((2) < args__17518__auto__.length))?(new cljs.core.IndexedSeq(args__17518__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17519__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28872_28883 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28873_28884 = null;
var count__28874_28885 = (0);
var i__28875_28886 = (0);
while(true){
if((i__28875_28886 < count__28874_28885)){
var k_28887 = cljs.core._nth.call(null,chunk__28873_28884,i__28875_28886);
e.setAttribute(cljs.core.name.call(null,k_28887),cljs.core.get.call(null,attrs,k_28887));

var G__28888 = seq__28872_28883;
var G__28889 = chunk__28873_28884;
var G__28890 = count__28874_28885;
var G__28891 = (i__28875_28886 + (1));
seq__28872_28883 = G__28888;
chunk__28873_28884 = G__28889;
count__28874_28885 = G__28890;
i__28875_28886 = G__28891;
continue;
} else {
var temp__4425__auto___28892 = cljs.core.seq.call(null,seq__28872_28883);
if(temp__4425__auto___28892){
var seq__28872_28893__$1 = temp__4425__auto___28892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28872_28893__$1)){
var c__17256__auto___28894 = cljs.core.chunk_first.call(null,seq__28872_28893__$1);
var G__28895 = cljs.core.chunk_rest.call(null,seq__28872_28893__$1);
var G__28896 = c__17256__auto___28894;
var G__28897 = cljs.core.count.call(null,c__17256__auto___28894);
var G__28898 = (0);
seq__28872_28883 = G__28895;
chunk__28873_28884 = G__28896;
count__28874_28885 = G__28897;
i__28875_28886 = G__28898;
continue;
} else {
var k_28899 = cljs.core.first.call(null,seq__28872_28893__$1);
e.setAttribute(cljs.core.name.call(null,k_28899),cljs.core.get.call(null,attrs,k_28899));

var G__28900 = cljs.core.next.call(null,seq__28872_28893__$1);
var G__28901 = null;
var G__28902 = (0);
var G__28903 = (0);
seq__28872_28883 = G__28900;
chunk__28873_28884 = G__28901;
count__28874_28885 = G__28902;
i__28875_28886 = G__28903;
continue;
}
} else {
}
}
break;
}

var seq__28876_28904 = cljs.core.seq.call(null,children);
var chunk__28877_28905 = null;
var count__28878_28906 = (0);
var i__28879_28907 = (0);
while(true){
if((i__28879_28907 < count__28878_28906)){
var ch_28908 = cljs.core._nth.call(null,chunk__28877_28905,i__28879_28907);
e.appendChild(ch_28908);

var G__28909 = seq__28876_28904;
var G__28910 = chunk__28877_28905;
var G__28911 = count__28878_28906;
var G__28912 = (i__28879_28907 + (1));
seq__28876_28904 = G__28909;
chunk__28877_28905 = G__28910;
count__28878_28906 = G__28911;
i__28879_28907 = G__28912;
continue;
} else {
var temp__4425__auto___28913 = cljs.core.seq.call(null,seq__28876_28904);
if(temp__4425__auto___28913){
var seq__28876_28914__$1 = temp__4425__auto___28913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28876_28914__$1)){
var c__17256__auto___28915 = cljs.core.chunk_first.call(null,seq__28876_28914__$1);
var G__28916 = cljs.core.chunk_rest.call(null,seq__28876_28914__$1);
var G__28917 = c__17256__auto___28915;
var G__28918 = cljs.core.count.call(null,c__17256__auto___28915);
var G__28919 = (0);
seq__28876_28904 = G__28916;
chunk__28877_28905 = G__28917;
count__28878_28906 = G__28918;
i__28879_28907 = G__28919;
continue;
} else {
var ch_28920 = cljs.core.first.call(null,seq__28876_28914__$1);
e.appendChild(ch_28920);

var G__28921 = cljs.core.next.call(null,seq__28876_28914__$1);
var G__28922 = null;
var G__28923 = (0);
var G__28924 = (0);
seq__28876_28904 = G__28921;
chunk__28877_28905 = G__28922;
count__28878_28906 = G__28923;
i__28879_28907 = G__28924;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28869){
var G__28870 = cljs.core.first.call(null,seq28869);
var seq28869__$1 = cljs.core.next.call(null,seq28869);
var G__28871 = cljs.core.first.call(null,seq28869__$1);
var seq28869__$2 = cljs.core.next.call(null,seq28869__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28870,G__28871,seq28869__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17369__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17370__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__,hierarchy__17370__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__,hierarchy__17370__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17370__auto__,method_table__17366__auto__,prefer_table__17367__auto__,method_cache__17368__auto__,cached_hierarchy__17369__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28925 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28925.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28925.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_28925.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28925);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28926,st_map){
var map__28931 = p__28926;
var map__28931__$1 = ((((!((map__28931 == null)))?((((map__28931.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28931.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28931):map__28931);
var container_el = cljs.core.get.call(null,map__28931__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28931,map__28931__$1,container_el){
return (function (p__28933){
var vec__28934 = p__28933;
var k = cljs.core.nth.call(null,vec__28934,(0),null);
var v = cljs.core.nth.call(null,vec__28934,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28931,map__28931__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28935,dom_str){
var map__28938 = p__28935;
var map__28938__$1 = ((((!((map__28938 == null)))?((((map__28938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28938):map__28938);
var c = map__28938__$1;
var content_area_el = cljs.core.get.call(null,map__28938__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28940){
var map__28943 = p__28940;
var map__28943__$1 = ((((!((map__28943 == null)))?((((map__28943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28943):map__28943);
var content_area_el = cljs.core.get.call(null,map__28943__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_28986){
var state_val_28987 = (state_28986[(1)]);
if((state_val_28987 === (1))){
var inst_28971 = (state_28986[(7)]);
var inst_28971__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28972 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28973 = ["10px","10px","100%","68px","1.0"];
var inst_28974 = cljs.core.PersistentHashMap.fromArrays(inst_28972,inst_28973);
var inst_28975 = cljs.core.merge.call(null,inst_28974,style);
var inst_28976 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28971__$1,inst_28975);
var inst_28977 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28971__$1,msg);
var inst_28978 = cljs.core.async.timeout.call(null,(300));
var state_28986__$1 = (function (){var statearr_28988 = state_28986;
(statearr_28988[(8)] = inst_28977);

(statearr_28988[(9)] = inst_28976);

(statearr_28988[(7)] = inst_28971__$1);

return statearr_28988;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28986__$1,(2),inst_28978);
} else {
if((state_val_28987 === (2))){
var inst_28971 = (state_28986[(7)]);
var inst_28980 = (state_28986[(2)]);
var inst_28981 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28982 = ["auto"];
var inst_28983 = cljs.core.PersistentHashMap.fromArrays(inst_28981,inst_28982);
var inst_28984 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28971,inst_28983);
var state_28986__$1 = (function (){var statearr_28989 = state_28986;
(statearr_28989[(10)] = inst_28980);

return statearr_28989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28986__$1,inst_28984);
} else {
return null;
}
}
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto____0 = (function (){
var statearr_28993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28993[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto__);

(statearr_28993[(1)] = (1));

return statearr_28993;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto____1 = (function (state_28986){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_28986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e28994){if((e28994 instanceof Object)){
var ex__19672__auto__ = e28994;
var statearr_28995_28997 = state_28986;
(statearr_28995_28997[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28998 = state_28986;
state_28986 = G__28998;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto__ = function(state_28986){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto____1.call(this,state_28986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_28996 = f__19734__auto__.call(null);
(statearr_28996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_28996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29000 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29000,(0),null);
var ln = cljs.core.nth.call(null,vec__29000,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29003 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29003,(0),null);
var file_line = cljs.core.nth.call(null,vec__29003,(1),null);
var file_column = cljs.core.nth.call(null,vec__29003,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29003,file_name,file_line,file_column){
return (function (p1__29001_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29001_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29003,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16472__auto__ = file_line;
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
var and__16460__auto__ = cause;
if(cljs.core.truth_(and__16460__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16460__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29006 = figwheel.client.heads_up.ensure_container.call(null);
var map__29006__$1 = ((((!((map__29006 == null)))?((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29006):map__29006);
var content_area_el = cljs.core.get.call(null,map__29006__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_29054){
var state_val_29055 = (state_29054[(1)]);
if((state_val_29055 === (1))){
var inst_29037 = (state_29054[(7)]);
var inst_29037__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29038 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29039 = ["0.0"];
var inst_29040 = cljs.core.PersistentHashMap.fromArrays(inst_29038,inst_29039);
var inst_29041 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29037__$1,inst_29040);
var inst_29042 = cljs.core.async.timeout.call(null,(300));
var state_29054__$1 = (function (){var statearr_29056 = state_29054;
(statearr_29056[(7)] = inst_29037__$1);

(statearr_29056[(8)] = inst_29041);

return statearr_29056;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(2),inst_29042);
} else {
if((state_val_29055 === (2))){
var inst_29037 = (state_29054[(7)]);
var inst_29044 = (state_29054[(2)]);
var inst_29045 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29046 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29047 = cljs.core.PersistentHashMap.fromArrays(inst_29045,inst_29046);
var inst_29048 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29037,inst_29047);
var inst_29049 = cljs.core.async.timeout.call(null,(200));
var state_29054__$1 = (function (){var statearr_29057 = state_29054;
(statearr_29057[(9)] = inst_29044);

(statearr_29057[(10)] = inst_29048);

return statearr_29057;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29054__$1,(3),inst_29049);
} else {
if((state_val_29055 === (3))){
var inst_29037 = (state_29054[(7)]);
var inst_29051 = (state_29054[(2)]);
var inst_29052 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29037,"");
var state_29054__$1 = (function (){var statearr_29058 = state_29054;
(statearr_29058[(11)] = inst_29051);

return statearr_29058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29054__$1,inst_29052);
} else {
return null;
}
}
}
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19669__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19669__auto____0 = (function (){
var statearr_29062 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29062[(0)] = figwheel$client$heads_up$clear_$_state_machine__19669__auto__);

(statearr_29062[(1)] = (1));

return statearr_29062;
});
var figwheel$client$heads_up$clear_$_state_machine__19669__auto____1 = (function (state_29054){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_29054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e29063){if((e29063 instanceof Object)){
var ex__19672__auto__ = e29063;
var statearr_29064_29066 = state_29054;
(statearr_29064_29066[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29063;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29067 = state_29054;
state_29054 = G__29067;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19669__auto__ = function(state_29054){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19669__auto____1.call(this,state_29054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19669__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19669__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_29065 = f__19734__auto__.call(null);
(statearr_29065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_29065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19733__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19733__auto__){
return (function (){
var f__19734__auto__ = (function (){var switch__19668__auto__ = ((function (c__19733__auto__){
return (function (state_29099){
var state_val_29100 = (state_29099[(1)]);
if((state_val_29100 === (1))){
var inst_29089 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29099__$1,(2),inst_29089);
} else {
if((state_val_29100 === (2))){
var inst_29091 = (state_29099[(2)]);
var inst_29092 = cljs.core.async.timeout.call(null,(400));
var state_29099__$1 = (function (){var statearr_29101 = state_29099;
(statearr_29101[(7)] = inst_29091);

return statearr_29101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29099__$1,(3),inst_29092);
} else {
if((state_val_29100 === (3))){
var inst_29094 = (state_29099[(2)]);
var inst_29095 = figwheel.client.heads_up.clear.call(null);
var state_29099__$1 = (function (){var statearr_29102 = state_29099;
(statearr_29102[(8)] = inst_29094);

return statearr_29102;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29099__$1,(4),inst_29095);
} else {
if((state_val_29100 === (4))){
var inst_29097 = (state_29099[(2)]);
var state_29099__$1 = state_29099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29099__$1,inst_29097);
} else {
return null;
}
}
}
}
});})(c__19733__auto__))
;
return ((function (switch__19668__auto__,c__19733__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto____0 = (function (){
var statearr_29106 = [null,null,null,null,null,null,null,null,null];
(statearr_29106[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto__);

(statearr_29106[(1)] = (1));

return statearr_29106;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto____1 = (function (state_29099){
while(true){
var ret_value__19670__auto__ = (function (){try{while(true){
var result__19671__auto__ = switch__19668__auto__.call(null,state_29099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19671__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19671__auto__;
}
break;
}
}catch (e29107){if((e29107 instanceof Object)){
var ex__19672__auto__ = e29107;
var statearr_29108_29110 = state_29099;
(statearr_29108_29110[(5)] = ex__19672__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19670__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29111 = state_29099;
state_29099 = G__29111;
continue;
} else {
return ret_value__19670__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto__ = function(state_29099){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto____1.call(this,state_29099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19669__auto__;
})()
;})(switch__19668__auto__,c__19733__auto__))
})();
var state__19735__auto__ = (function (){var statearr_29109 = f__19734__auto__.call(null);
(statearr_29109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19733__auto__);

return statearr_29109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19735__auto__);
});})(c__19733__auto__))
);

return c__19733__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440504642016