// Compiled by ClojureScript 0.0-3165 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24875_24883 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24876_24884 = null;
var count__24877_24885 = (0);
var i__24878_24886 = (0);
while(true){
if((i__24878_24886 < count__24877_24885)){
var k_24887 = cljs.core._nth.call(null,chunk__24876_24884,i__24878_24886);
e.setAttribute(cljs.core.name.call(null,k_24887),cljs.core.get.call(null,attrs,k_24887));

var G__24888 = seq__24875_24883;
var G__24889 = chunk__24876_24884;
var G__24890 = count__24877_24885;
var G__24891 = (i__24878_24886 + (1));
seq__24875_24883 = G__24888;
chunk__24876_24884 = G__24889;
count__24877_24885 = G__24890;
i__24878_24886 = G__24891;
continue;
} else {
var temp__4126__auto___24892 = cljs.core.seq.call(null,seq__24875_24883);
if(temp__4126__auto___24892){
var seq__24875_24893__$1 = temp__4126__auto___24892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24875_24893__$1)){
var c__18572__auto___24894 = cljs.core.chunk_first.call(null,seq__24875_24893__$1);
var G__24895 = cljs.core.chunk_rest.call(null,seq__24875_24893__$1);
var G__24896 = c__18572__auto___24894;
var G__24897 = cljs.core.count.call(null,c__18572__auto___24894);
var G__24898 = (0);
seq__24875_24883 = G__24895;
chunk__24876_24884 = G__24896;
count__24877_24885 = G__24897;
i__24878_24886 = G__24898;
continue;
} else {
var k_24899 = cljs.core.first.call(null,seq__24875_24893__$1);
e.setAttribute(cljs.core.name.call(null,k_24899),cljs.core.get.call(null,attrs,k_24899));

var G__24900 = cljs.core.next.call(null,seq__24875_24893__$1);
var G__24901 = null;
var G__24902 = (0);
var G__24903 = (0);
seq__24875_24883 = G__24900;
chunk__24876_24884 = G__24901;
count__24877_24885 = G__24902;
i__24878_24886 = G__24903;
continue;
}
} else {
}
}
break;
}

var seq__24879_24904 = cljs.core.seq.call(null,children);
var chunk__24880_24905 = null;
var count__24881_24906 = (0);
var i__24882_24907 = (0);
while(true){
if((i__24882_24907 < count__24881_24906)){
var ch_24908 = cljs.core._nth.call(null,chunk__24880_24905,i__24882_24907);
e.appendChild(ch_24908);

var G__24909 = seq__24879_24904;
var G__24910 = chunk__24880_24905;
var G__24911 = count__24881_24906;
var G__24912 = (i__24882_24907 + (1));
seq__24879_24904 = G__24909;
chunk__24880_24905 = G__24910;
count__24881_24906 = G__24911;
i__24882_24907 = G__24912;
continue;
} else {
var temp__4126__auto___24913 = cljs.core.seq.call(null,seq__24879_24904);
if(temp__4126__auto___24913){
var seq__24879_24914__$1 = temp__4126__auto___24913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24879_24914__$1)){
var c__18572__auto___24915 = cljs.core.chunk_first.call(null,seq__24879_24914__$1);
var G__24916 = cljs.core.chunk_rest.call(null,seq__24879_24914__$1);
var G__24917 = c__18572__auto___24915;
var G__24918 = cljs.core.count.call(null,c__18572__auto___24915);
var G__24919 = (0);
seq__24879_24904 = G__24916;
chunk__24880_24905 = G__24917;
count__24881_24906 = G__24918;
i__24882_24907 = G__24919;
continue;
} else {
var ch_24920 = cljs.core.first.call(null,seq__24879_24914__$1);
e.appendChild(ch_24920);

var G__24921 = cljs.core.next.call(null,seq__24879_24914__$1);
var G__24922 = null;
var G__24923 = (0);
var G__24924 = (0);
seq__24879_24904 = G__24921;
chunk__24880_24905 = G__24922;
count__24881_24906 = G__24923;
i__24882_24907 = G__24924;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__24925__i = 0, G__24925__a = new Array(arguments.length -  2);
while (G__24925__i < G__24925__a.length) {G__24925__a[G__24925__i] = arguments[G__24925__i + 2]; ++G__24925__i;}
  children = new cljs.core.IndexedSeq(G__24925__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__24926){
var t = cljs.core.first(arglist__24926);
arglist__24926 = cljs.core.next(arglist__24926);
var attrs = cljs.core.first(arglist__24926);
var children = cljs.core.rest(arglist__24926);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18682__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18683__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18686__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18682__auto__,prefer_table__18683__auto__,method_cache__18684__auto__,cached_hierarchy__18685__auto__,hierarchy__18686__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18682__auto__,prefer_table__18683__auto__,method_cache__18684__auto__,cached_hierarchy__18685__auto__,hierarchy__18686__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18686__auto__,method_table__18682__auto__,prefer_table__18683__auto__,method_cache__18684__auto__,cached_hierarchy__18685__auto__));
})();
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
var el_24927 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24927.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24927.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_24927.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24927);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24928,st_map){
var map__24932 = p__24928;
var map__24932__$1 = ((cljs.core.seq_QMARK_.call(null,map__24932))?cljs.core.apply.call(null,cljs.core.hash_map,map__24932):map__24932);
var container_el = cljs.core.get.call(null,map__24932__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24932,map__24932__$1,container_el){
return (function (p__24933){
var vec__24934 = p__24933;
var k = cljs.core.nth.call(null,vec__24934,(0),null);
var v = cljs.core.nth.call(null,vec__24934,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24932,map__24932__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24935,dom_str){
var map__24937 = p__24935;
var map__24937__$1 = ((cljs.core.seq_QMARK_.call(null,map__24937))?cljs.core.apply.call(null,cljs.core.hash_map,map__24937):map__24937);
var c = map__24937__$1;
var content_area_el = cljs.core.get.call(null,map__24937__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__24938){
var map__24940 = p__24938;
var map__24940__$1 = ((cljs.core.seq_QMARK_.call(null,map__24940))?cljs.core.apply.call(null,cljs.core.hash_map,map__24940):map__24940);
var content_area_el = cljs.core.get.call(null,map__24940__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_24982){
var state_val_24983 = (state_24982[(1)]);
if((state_val_24983 === (2))){
var inst_24967 = (state_24982[(7)]);
var inst_24976 = (state_24982[(2)]);
var inst_24977 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_24978 = ["auto"];
var inst_24979 = cljs.core.PersistentHashMap.fromArrays(inst_24977,inst_24978);
var inst_24980 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24967,inst_24979);
var state_24982__$1 = (function (){var statearr_24984 = state_24982;
(statearr_24984[(8)] = inst_24976);

return statearr_24984;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24982__$1,inst_24980);
} else {
if((state_val_24983 === (1))){
var inst_24967 = (state_24982[(7)]);
var inst_24967__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_24968 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_24969 = ["10px","10px","100%","68px","1.0"];
var inst_24970 = cljs.core.PersistentHashMap.fromArrays(inst_24968,inst_24969);
var inst_24971 = cljs.core.merge.call(null,inst_24970,style);
var inst_24972 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_24967__$1,inst_24971);
var inst_24973 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_24967__$1,msg);
var inst_24974 = cljs.core.async.timeout.call(null,(300));
var state_24982__$1 = (function (){var statearr_24985 = state_24982;
(statearr_24985[(7)] = inst_24967__$1);

(statearr_24985[(9)] = inst_24972);

(statearr_24985[(10)] = inst_24973);

return statearr_24985;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24982__$1,(2),inst_24974);
} else {
return null;
}
}
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto____0 = (function (){
var statearr_24989 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24989[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto__);

(statearr_24989[(1)] = (1));

return statearr_24989;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto____1 = (function (state_24982){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_24982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e24990){if((e24990 instanceof Object)){
var ex__19725__auto__ = e24990;
var statearr_24991_24993 = state_24982;
(statearr_24991_24993[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24994 = state_24982;
state_24982 = G__24994;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto__ = function(state_24982){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto____1.call(this,state_24982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_24992 = f__19778__auto__.call(null);
(statearr_24992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_24992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
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
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__24996 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__24996,(0),null);
var ln = cljs.core.nth.call(null,vec__24996,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__24999 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__24999,(0),null);
var file_line = cljs.core.nth.call(null,vec__24999,(1),null);
var file_column = cljs.core.nth.call(null,vec__24999,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__24999,file_name,file_line,file_column){
return (function (p1__24997_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__24997_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__24999,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__17787__auto__ = file_line;
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
var and__17775__auto__ = cause;
if(cljs.core.truth_(and__17775__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__17775__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25001 = figwheel.client.heads_up.ensure_container.call(null);
var map__25001__$1 = ((cljs.core.seq_QMARK_.call(null,map__25001))?cljs.core.apply.call(null,cljs.core.hash_map,map__25001):map__25001);
var content_area_el = cljs.core.get.call(null,map__25001__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_25048){
var state_val_25049 = (state_25048[(1)]);
if((state_val_25049 === (3))){
var inst_25031 = (state_25048[(7)]);
var inst_25045 = (state_25048[(2)]);
var inst_25046 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25031,"");
var state_25048__$1 = (function (){var statearr_25050 = state_25048;
(statearr_25050[(8)] = inst_25045);

return statearr_25050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25048__$1,inst_25046);
} else {
if((state_val_25049 === (2))){
var inst_25031 = (state_25048[(7)]);
var inst_25038 = (state_25048[(2)]);
var inst_25039 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25040 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25041 = cljs.core.PersistentHashMap.fromArrays(inst_25039,inst_25040);
var inst_25042 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25031,inst_25041);
var inst_25043 = cljs.core.async.timeout.call(null,(200));
var state_25048__$1 = (function (){var statearr_25051 = state_25048;
(statearr_25051[(9)] = inst_25042);

(statearr_25051[(10)] = inst_25038);

return statearr_25051;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25048__$1,(3),inst_25043);
} else {
if((state_val_25049 === (1))){
var inst_25031 = (state_25048[(7)]);
var inst_25031__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25032 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25033 = ["0.0"];
var inst_25034 = cljs.core.PersistentHashMap.fromArrays(inst_25032,inst_25033);
var inst_25035 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25031__$1,inst_25034);
var inst_25036 = cljs.core.async.timeout.call(null,(300));
var state_25048__$1 = (function (){var statearr_25052 = state_25048;
(statearr_25052[(7)] = inst_25031__$1);

(statearr_25052[(11)] = inst_25035);

return statearr_25052;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25048__$1,(2),inst_25036);
} else {
return null;
}
}
}
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19722__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19722__auto____0 = (function (){
var statearr_25056 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25056[(0)] = figwheel$client$heads_up$clear_$_state_machine__19722__auto__);

(statearr_25056[(1)] = (1));

return statearr_25056;
});
var figwheel$client$heads_up$clear_$_state_machine__19722__auto____1 = (function (state_25048){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_25048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e25057){if((e25057 instanceof Object)){
var ex__19725__auto__ = e25057;
var statearr_25058_25060 = state_25048;
(statearr_25058_25060[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25061 = state_25048;
state_25048 = G__25061;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19722__auto__ = function(state_25048){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19722__auto____1.call(this,state_25048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19722__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19722__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_25059 = f__19778__auto__.call(null);
(statearr_25059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_25059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19777__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19777__auto__){
return (function (){
var f__19778__auto__ = (function (){var switch__19721__auto__ = ((function (c__19777__auto__){
return (function (state_25093){
var state_val_25094 = (state_25093[(1)]);
if((state_val_25094 === (4))){
var inst_25091 = (state_25093[(2)]);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25093__$1,inst_25091);
} else {
if((state_val_25094 === (3))){
var inst_25088 = (state_25093[(2)]);
var inst_25089 = figwheel.client.heads_up.clear.call(null);
var state_25093__$1 = (function (){var statearr_25095 = state_25093;
(statearr_25095[(7)] = inst_25088);

return statearr_25095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(4),inst_25089);
} else {
if((state_val_25094 === (2))){
var inst_25085 = (state_25093[(2)]);
var inst_25086 = cljs.core.async.timeout.call(null,(400));
var state_25093__$1 = (function (){var statearr_25096 = state_25093;
(statearr_25096[(8)] = inst_25085);

return statearr_25096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(3),inst_25086);
} else {
if((state_val_25094 === (1))){
var inst_25083 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25093__$1 = state_25093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25093__$1,(2),inst_25083);
} else {
return null;
}
}
}
}
});})(c__19777__auto__))
;
return ((function (switch__19721__auto__,c__19777__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto____1 = (function (state_25093){
while(true){
var ret_value__19723__auto__ = (function (){try{while(true){
var result__19724__auto__ = switch__19721__auto__.call(null,state_25093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19724__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__19725__auto__ = e25101;
var statearr_25102_25104 = state_25093;
(statearr_25102_25104[(5)] = ex__19725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25105 = state_25093;
state_25093 = G__25105;
continue;
} else {
return ret_value__19723__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto__ = function(state_25093){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto____1.call(this,state_25093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19722__auto__;
})()
;})(switch__19721__auto__,c__19777__auto__))
})();
var state__19779__auto__ = (function (){var statearr_25103 = f__19778__auto__.call(null);
(statearr_25103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19777__auto__);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19779__auto__);
});})(c__19777__auto__))
);

return c__19777__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1434650234594