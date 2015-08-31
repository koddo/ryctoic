// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__29128_29142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29129_29143 = null;
var count__29130_29144 = (0);
var i__29131_29145 = (0);
while(true){
if((i__29131_29145 < count__29130_29144)){
var f_29146 = cljs.core._nth.call(null,chunk__29129_29143,i__29131_29145);
cljs.core.println.call(null,"  ",f_29146);

var G__29147 = seq__29128_29142;
var G__29148 = chunk__29129_29143;
var G__29149 = count__29130_29144;
var G__29150 = (i__29131_29145 + (1));
seq__29128_29142 = G__29147;
chunk__29129_29143 = G__29148;
count__29130_29144 = G__29149;
i__29131_29145 = G__29150;
continue;
} else {
var temp__4425__auto___29151 = cljs.core.seq.call(null,seq__29128_29142);
if(temp__4425__auto___29151){
var seq__29128_29152__$1 = temp__4425__auto___29151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29128_29152__$1)){
var c__17256__auto___29153 = cljs.core.chunk_first.call(null,seq__29128_29152__$1);
var G__29154 = cljs.core.chunk_rest.call(null,seq__29128_29152__$1);
var G__29155 = c__17256__auto___29153;
var G__29156 = cljs.core.count.call(null,c__17256__auto___29153);
var G__29157 = (0);
seq__29128_29142 = G__29154;
chunk__29129_29143 = G__29155;
count__29130_29144 = G__29156;
i__29131_29145 = G__29157;
continue;
} else {
var f_29158 = cljs.core.first.call(null,seq__29128_29152__$1);
cljs.core.println.call(null,"  ",f_29158);

var G__29159 = cljs.core.next.call(null,seq__29128_29152__$1);
var G__29160 = null;
var G__29161 = (0);
var G__29162 = (0);
seq__29128_29142 = G__29159;
chunk__29129_29143 = G__29160;
count__29130_29144 = G__29161;
i__29131_29145 = G__29162;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29163 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16472__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16472__auto__)){
return or__16472__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29163);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29163)))?cljs.core.second.call(null,arglists_29163):arglists_29163));
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
var seq__29132 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29133 = null;
var count__29134 = (0);
var i__29135 = (0);
while(true){
if((i__29135 < count__29134)){
var vec__29136 = cljs.core._nth.call(null,chunk__29133,i__29135);
var name = cljs.core.nth.call(null,vec__29136,(0),null);
var map__29137 = cljs.core.nth.call(null,vec__29136,(1),null);
var map__29137__$1 = ((((!((map__29137 == null)))?((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var doc = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29164 = seq__29132;
var G__29165 = chunk__29133;
var G__29166 = count__29134;
var G__29167 = (i__29135 + (1));
seq__29132 = G__29164;
chunk__29133 = G__29165;
count__29134 = G__29166;
i__29135 = G__29167;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29132);
if(temp__4425__auto__){
var seq__29132__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29132__$1)){
var c__17256__auto__ = cljs.core.chunk_first.call(null,seq__29132__$1);
var G__29168 = cljs.core.chunk_rest.call(null,seq__29132__$1);
var G__29169 = c__17256__auto__;
var G__29170 = cljs.core.count.call(null,c__17256__auto__);
var G__29171 = (0);
seq__29132 = G__29168;
chunk__29133 = G__29169;
count__29134 = G__29170;
i__29135 = G__29171;
continue;
} else {
var vec__29139 = cljs.core.first.call(null,seq__29132__$1);
var name = cljs.core.nth.call(null,vec__29139,(0),null);
var map__29140 = cljs.core.nth.call(null,vec__29139,(1),null);
var map__29140__$1 = ((((!((map__29140 == null)))?((((map__29140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29140):map__29140);
var doc = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__29140__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29172 = cljs.core.next.call(null,seq__29132__$1);
var G__29173 = null;
var G__29174 = (0);
var G__29175 = (0);
seq__29132 = G__29172;
chunk__29133 = G__29173;
count__29134 = G__29174;
i__29135 = G__29175;
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

//# sourceMappingURL=repl.js.map?rel=1440504642228