// Compiled by ClojureScript 0.0-3165 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25120_25132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25121_25133 = null;
var count__25122_25134 = (0);
var i__25123_25135 = (0);
while(true){
if((i__25123_25135 < count__25122_25134)){
var f_25136 = cljs.core._nth.call(null,chunk__25121_25133,i__25123_25135);
cljs.core.println.call(null,"  ",f_25136);

var G__25137 = seq__25120_25132;
var G__25138 = chunk__25121_25133;
var G__25139 = count__25122_25134;
var G__25140 = (i__25123_25135 + (1));
seq__25120_25132 = G__25137;
chunk__25121_25133 = G__25138;
count__25122_25134 = G__25139;
i__25123_25135 = G__25140;
continue;
} else {
var temp__4126__auto___25141 = cljs.core.seq.call(null,seq__25120_25132);
if(temp__4126__auto___25141){
var seq__25120_25142__$1 = temp__4126__auto___25141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25120_25142__$1)){
var c__18572__auto___25143 = cljs.core.chunk_first.call(null,seq__25120_25142__$1);
var G__25144 = cljs.core.chunk_rest.call(null,seq__25120_25142__$1);
var G__25145 = c__18572__auto___25143;
var G__25146 = cljs.core.count.call(null,c__18572__auto___25143);
var G__25147 = (0);
seq__25120_25132 = G__25144;
chunk__25121_25133 = G__25145;
count__25122_25134 = G__25146;
i__25123_25135 = G__25147;
continue;
} else {
var f_25148 = cljs.core.first.call(null,seq__25120_25142__$1);
cljs.core.println.call(null,"  ",f_25148);

var G__25149 = cljs.core.next.call(null,seq__25120_25142__$1);
var G__25150 = null;
var G__25151 = (0);
var G__25152 = (0);
seq__25120_25132 = G__25149;
chunk__25121_25133 = G__25150;
count__25122_25134 = G__25151;
i__25123_25135 = G__25152;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__17787__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17787__auto__)){
return or__17787__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25124 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25125 = null;
var count__25126 = (0);
var i__25127 = (0);
while(true){
if((i__25127 < count__25126)){
var vec__25128 = cljs.core._nth.call(null,chunk__25125,i__25127);
var name = cljs.core.nth.call(null,vec__25128,(0),null);
var map__25129 = cljs.core.nth.call(null,vec__25128,(1),null);
var map__25129__$1 = ((cljs.core.seq_QMARK_.call(null,map__25129))?cljs.core.apply.call(null,cljs.core.hash_map,map__25129):map__25129);
var arglists = cljs.core.get.call(null,map__25129__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__25129__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25153 = seq__25124;
var G__25154 = chunk__25125;
var G__25155 = count__25126;
var G__25156 = (i__25127 + (1));
seq__25124 = G__25153;
chunk__25125 = G__25154;
count__25126 = G__25155;
i__25127 = G__25156;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__25124);
if(temp__4126__auto__){
var seq__25124__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25124__$1)){
var c__18572__auto__ = cljs.core.chunk_first.call(null,seq__25124__$1);
var G__25157 = cljs.core.chunk_rest.call(null,seq__25124__$1);
var G__25158 = c__18572__auto__;
var G__25159 = cljs.core.count.call(null,c__18572__auto__);
var G__25160 = (0);
seq__25124 = G__25157;
chunk__25125 = G__25158;
count__25126 = G__25159;
i__25127 = G__25160;
continue;
} else {
var vec__25130 = cljs.core.first.call(null,seq__25124__$1);
var name = cljs.core.nth.call(null,vec__25130,(0),null);
var map__25131 = cljs.core.nth.call(null,vec__25130,(1),null);
var map__25131__$1 = ((cljs.core.seq_QMARK_.call(null,map__25131))?cljs.core.apply.call(null,cljs.core.hash_map,map__25131):map__25131);
var arglists = cljs.core.get.call(null,map__25131__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__25131__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25161 = cljs.core.next.call(null,seq__25124__$1);
var G__25162 = null;
var G__25163 = (0);
var G__25164 = (0);
seq__25124 = G__25161;
chunk__25125 = G__25162;
count__25126 = G__25163;
i__25127 = G__25164;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1434650234695