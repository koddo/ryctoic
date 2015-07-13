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
var seq__29113_29121 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__29114_29122 = null;
var count__29115_29123 = (0);
var i__29116_29124 = (0);
while(true){
if((i__29116_29124 < count__29115_29123)){
var k_29125 = cljs.core._nth.call(null,chunk__29114_29122,i__29116_29124);
e.setAttribute(cljs.core.name.call(null,k_29125),cljs.core.get.call(null,attrs,k_29125));

var G__29126 = seq__29113_29121;
var G__29127 = chunk__29114_29122;
var G__29128 = count__29115_29123;
var G__29129 = (i__29116_29124 + (1));
seq__29113_29121 = G__29126;
chunk__29114_29122 = G__29127;
count__29115_29123 = G__29128;
i__29116_29124 = G__29129;
continue;
} else {
var temp__4126__auto___29130 = cljs.core.seq.call(null,seq__29113_29121);
if(temp__4126__auto___29130){
var seq__29113_29131__$1 = temp__4126__auto___29130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29113_29131__$1)){
var c__18572__auto___29132 = cljs.core.chunk_first.call(null,seq__29113_29131__$1);
var G__29133 = cljs.core.chunk_rest.call(null,seq__29113_29131__$1);
var G__29134 = c__18572__auto___29132;
var G__29135 = cljs.core.count.call(null,c__18572__auto___29132);
var G__29136 = (0);
seq__29113_29121 = G__29133;
chunk__29114_29122 = G__29134;
count__29115_29123 = G__29135;
i__29116_29124 = G__29136;
continue;
} else {
var k_29137 = cljs.core.first.call(null,seq__29113_29131__$1);
e.setAttribute(cljs.core.name.call(null,k_29137),cljs.core.get.call(null,attrs,k_29137));

var G__29138 = cljs.core.next.call(null,seq__29113_29131__$1);
var G__29139 = null;
var G__29140 = (0);
var G__29141 = (0);
seq__29113_29121 = G__29138;
chunk__29114_29122 = G__29139;
count__29115_29123 = G__29140;
i__29116_29124 = G__29141;
continue;
}
} else {
}
}
break;
}

var seq__29117_29142 = cljs.core.seq.call(null,children);
var chunk__29118_29143 = null;
var count__29119_29144 = (0);
var i__29120_29145 = (0);
while(true){
if((i__29120_29145 < count__29119_29144)){
var ch_29146 = cljs.core._nth.call(null,chunk__29118_29143,i__29120_29145);
e.appendChild(ch_29146);

var G__29147 = seq__29117_29142;
var G__29148 = chunk__29118_29143;
var G__29149 = count__29119_29144;
var G__29150 = (i__29120_29145 + (1));
seq__29117_29142 = G__29147;
chunk__29118_29143 = G__29148;
count__29119_29144 = G__29149;
i__29120_29145 = G__29150;
continue;
} else {
var temp__4126__auto___29151 = cljs.core.seq.call(null,seq__29117_29142);
if(temp__4126__auto___29151){
var seq__29117_29152__$1 = temp__4126__auto___29151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29117_29152__$1)){
var c__18572__auto___29153 = cljs.core.chunk_first.call(null,seq__29117_29152__$1);
var G__29154 = cljs.core.chunk_rest.call(null,seq__29117_29152__$1);
var G__29155 = c__18572__auto___29153;
var G__29156 = cljs.core.count.call(null,c__18572__auto___29153);
var G__29157 = (0);
seq__29117_29142 = G__29154;
chunk__29118_29143 = G__29155;
count__29119_29144 = G__29156;
i__29120_29145 = G__29157;
continue;
} else {
var ch_29158 = cljs.core.first.call(null,seq__29117_29152__$1);
e.appendChild(ch_29158);

var G__29159 = cljs.core.next.call(null,seq__29117_29152__$1);
var G__29160 = null;
var G__29161 = (0);
var G__29162 = (0);
seq__29117_29142 = G__29159;
chunk__29118_29143 = G__29160;
count__29119_29144 = G__29161;
i__29120_29145 = G__29162;
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
var G__29163__i = 0, G__29163__a = new Array(arguments.length -  2);
while (G__29163__i < G__29163__a.length) {G__29163__a[G__29163__i] = arguments[G__29163__i + 2]; ++G__29163__i;}
  children = new cljs.core.IndexedSeq(G__29163__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__29164){
var t = cljs.core.first(arglist__29164);
arglist__29164 = cljs.core.next(arglist__29164);
var attrs = cljs.core.first(arglist__29164);
var children = cljs.core.rest(arglist__29164);
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
var el_29165 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29165.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29165.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_29165.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29165);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29166,st_map){
var map__29170 = p__29166;
var map__29170__$1 = ((cljs.core.seq_QMARK_.call(null,map__29170))?cljs.core.apply.call(null,cljs.core.hash_map,map__29170):map__29170);
var container_el = cljs.core.get.call(null,map__29170__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29170,map__29170__$1,container_el){
return (function (p__29171){
var vec__29172 = p__29171;
var k = cljs.core.nth.call(null,vec__29172,(0),null);
var v = cljs.core.nth.call(null,vec__29172,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29170,map__29170__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29173,dom_str){
var map__29175 = p__29173;
var map__29175__$1 = ((cljs.core.seq_QMARK_.call(null,map__29175))?cljs.core.apply.call(null,cljs.core.hash_map,map__29175):map__29175);
var c = map__29175__$1;
var content_area_el = cljs.core.get.call(null,map__29175__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29176){
var map__29178 = p__29176;
var map__29178__$1 = ((cljs.core.seq_QMARK_.call(null,map__29178))?cljs.core.apply.call(null,cljs.core.hash_map,map__29178):map__29178);
var content_area_el = cljs.core.get.call(null,map__29178__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_29220){
var state_val_29221 = (state_29220[(1)]);
if((state_val_29221 === (2))){
var inst_29205 = (state_29220[(7)]);
var inst_29214 = (state_29220[(2)]);
var inst_29215 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29216 = ["auto"];
var inst_29217 = cljs.core.PersistentHashMap.fromArrays(inst_29215,inst_29216);
var inst_29218 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29205,inst_29217);
var state_29220__$1 = (function (){var statearr_29222 = state_29220;
(statearr_29222[(8)] = inst_29214);

return statearr_29222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29220__$1,inst_29218);
} else {
if((state_val_29221 === (1))){
var inst_29205 = (state_29220[(7)]);
var inst_29205__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29206 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29207 = ["10px","10px","100%","68px","1.0"];
var inst_29208 = cljs.core.PersistentHashMap.fromArrays(inst_29206,inst_29207);
var inst_29209 = cljs.core.merge.call(null,inst_29208,style);
var inst_29210 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29205__$1,inst_29209);
var inst_29211 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29205__$1,msg);
var inst_29212 = cljs.core.async.timeout.call(null,(300));
var state_29220__$1 = (function (){var statearr_29223 = state_29220;
(statearr_29223[(7)] = inst_29205__$1);

(statearr_29223[(9)] = inst_29211);

(statearr_29223[(10)] = inst_29210);

return statearr_29223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29220__$1,(2),inst_29212);
} else {
return null;
}
}
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto____0 = (function (){
var statearr_29227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29227[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto__);

(statearr_29227[(1)] = (1));

return statearr_29227;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto____1 = (function (state_29220){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_29220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e29228){if((e29228 instanceof Object)){
var ex__20041__auto__ = e29228;
var statearr_29229_29231 = state_29220;
(statearr_29229_29231[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29232 = state_29220;
state_29220 = G__29232;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto__ = function(state_29220){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto____1.call(this,state_29220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_29230 = f__20094__auto__.call(null);
(statearr_29230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_29230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
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
var vec__29234 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__29234,(0),null);
var ln = cljs.core.nth.call(null,vec__29234,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29237 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29237,(0),null);
var file_line = cljs.core.nth.call(null,vec__29237,(1),null);
var file_column = cljs.core.nth.call(null,vec__29237,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29237,file_name,file_line,file_column){
return (function (p1__29235_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__29235_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__29237,file_name,file_line,file_column))
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
var map__29239 = figwheel.client.heads_up.ensure_container.call(null);
var map__29239__$1 = ((cljs.core.seq_QMARK_.call(null,map__29239))?cljs.core.apply.call(null,cljs.core.hash_map,map__29239):map__29239);
var content_area_el = cljs.core.get.call(null,map__29239__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_29286){
var state_val_29287 = (state_29286[(1)]);
if((state_val_29287 === (3))){
var inst_29269 = (state_29286[(7)]);
var inst_29283 = (state_29286[(2)]);
var inst_29284 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29269,"");
var state_29286__$1 = (function (){var statearr_29288 = state_29286;
(statearr_29288[(8)] = inst_29283);

return statearr_29288;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29286__$1,inst_29284);
} else {
if((state_val_29287 === (2))){
var inst_29269 = (state_29286[(7)]);
var inst_29276 = (state_29286[(2)]);
var inst_29277 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29278 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29279 = cljs.core.PersistentHashMap.fromArrays(inst_29277,inst_29278);
var inst_29280 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29269,inst_29279);
var inst_29281 = cljs.core.async.timeout.call(null,(200));
var state_29286__$1 = (function (){var statearr_29289 = state_29286;
(statearr_29289[(9)] = inst_29280);

(statearr_29289[(10)] = inst_29276);

return statearr_29289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(3),inst_29281);
} else {
if((state_val_29287 === (1))){
var inst_29269 = (state_29286[(7)]);
var inst_29269__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29270 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29271 = ["0.0"];
var inst_29272 = cljs.core.PersistentHashMap.fromArrays(inst_29270,inst_29271);
var inst_29273 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29269__$1,inst_29272);
var inst_29274 = cljs.core.async.timeout.call(null,(300));
var state_29286__$1 = (function (){var statearr_29290 = state_29286;
(statearr_29290[(7)] = inst_29269__$1);

(statearr_29290[(11)] = inst_29273);

return statearr_29290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(2),inst_29274);
} else {
return null;
}
}
}
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20038__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20038__auto____0 = (function (){
var statearr_29294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29294[(0)] = figwheel$client$heads_up$clear_$_state_machine__20038__auto__);

(statearr_29294[(1)] = (1));

return statearr_29294;
});
var figwheel$client$heads_up$clear_$_state_machine__20038__auto____1 = (function (state_29286){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_29286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e29295){if((e29295 instanceof Object)){
var ex__20041__auto__ = e29295;
var statearr_29296_29298 = state_29286;
(statearr_29296_29298[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29299 = state_29286;
state_29286 = G__29299;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20038__auto__ = function(state_29286){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20038__auto____1.call(this,state_29286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20038__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20038__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_29297 = f__20094__auto__.call(null);
(statearr_29297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_29297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__20093__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20093__auto__){
return (function (){
var f__20094__auto__ = (function (){var switch__20037__auto__ = ((function (c__20093__auto__){
return (function (state_29331){
var state_val_29332 = (state_29331[(1)]);
if((state_val_29332 === (4))){
var inst_29329 = (state_29331[(2)]);
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29331__$1,inst_29329);
} else {
if((state_val_29332 === (3))){
var inst_29326 = (state_29331[(2)]);
var inst_29327 = figwheel.client.heads_up.clear.call(null);
var state_29331__$1 = (function (){var statearr_29333 = state_29331;
(statearr_29333[(7)] = inst_29326);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29331__$1,(4),inst_29327);
} else {
if((state_val_29332 === (2))){
var inst_29323 = (state_29331[(2)]);
var inst_29324 = cljs.core.async.timeout.call(null,(400));
var state_29331__$1 = (function (){var statearr_29334 = state_29331;
(statearr_29334[(8)] = inst_29323);

return statearr_29334;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29331__$1,(3),inst_29324);
} else {
if((state_val_29332 === (1))){
var inst_29321 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29331__$1 = state_29331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29331__$1,(2),inst_29321);
} else {
return null;
}
}
}
}
});})(c__20093__auto__))
;
return ((function (switch__20037__auto__,c__20093__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto____0 = (function (){
var statearr_29338 = [null,null,null,null,null,null,null,null,null];
(statearr_29338[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto__);

(statearr_29338[(1)] = (1));

return statearr_29338;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto____1 = (function (state_29331){
while(true){
var ret_value__20039__auto__ = (function (){try{while(true){
var result__20040__auto__ = switch__20037__auto__.call(null,state_29331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20040__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20040__auto__;
}
break;
}
}catch (e29339){if((e29339 instanceof Object)){
var ex__20041__auto__ = e29339;
var statearr_29340_29342 = state_29331;
(statearr_29340_29342[(5)] = ex__20041__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20039__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29343 = state_29331;
state_29331 = G__29343;
continue;
} else {
return ret_value__20039__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto__ = function(state_29331){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto____1.call(this,state_29331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20038__auto__;
})()
;})(switch__20037__auto__,c__20093__auto__))
})();
var state__20095__auto__ = (function (){var statearr_29341 = f__20094__auto__.call(null);
(statearr_29341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20093__auto__);

return statearr_29341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20095__auto__);
});})(c__20093__auto__))
);

return c__20093__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1435073935164