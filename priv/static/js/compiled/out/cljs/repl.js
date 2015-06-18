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
var seq__16634_16646 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16635_16647 = null;
var count__16636_16648 = (0);
var i__16637_16649 = (0);
while(true){
if((i__16637_16649 < count__16636_16648)){
var f_16650 = cljs.core._nth.call(null,chunk__16635_16647,i__16637_16649);
cljs.core.println.call(null,"  ",f_16650);

var G__16651 = seq__16634_16646;
var G__16652 = chunk__16635_16647;
var G__16653 = count__16636_16648;
var G__16654 = (i__16637_16649 + (1));
seq__16634_16646 = G__16651;
chunk__16635_16647 = G__16652;
count__16636_16648 = G__16653;
i__16637_16649 = G__16654;
continue;
} else {
var temp__4126__auto___16655 = cljs.core.seq.call(null,seq__16634_16646);
if(temp__4126__auto___16655){
var seq__16634_16656__$1 = temp__4126__auto___16655;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16634_16656__$1)){
var c__4934__auto___16657 = cljs.core.chunk_first.call(null,seq__16634_16656__$1);
var G__16658 = cljs.core.chunk_rest.call(null,seq__16634_16656__$1);
var G__16659 = c__4934__auto___16657;
var G__16660 = cljs.core.count.call(null,c__4934__auto___16657);
var G__16661 = (0);
seq__16634_16646 = G__16658;
chunk__16635_16647 = G__16659;
count__16636_16648 = G__16660;
i__16637_16649 = G__16661;
continue;
} else {
var f_16662 = cljs.core.first.call(null,seq__16634_16656__$1);
cljs.core.println.call(null,"  ",f_16662);

var G__16663 = cljs.core.next.call(null,seq__16634_16656__$1);
var G__16664 = null;
var G__16665 = (0);
var G__16666 = (0);
seq__16634_16646 = G__16663;
chunk__16635_16647 = G__16664;
count__16636_16648 = G__16665;
i__16637_16649 = G__16666;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4149__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4149__auto__)){
return or__4149__auto__;
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
var seq__16638 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16639 = null;
var count__16640 = (0);
var i__16641 = (0);
while(true){
if((i__16641 < count__16640)){
var vec__16642 = cljs.core._nth.call(null,chunk__16639,i__16641);
var name = cljs.core.nth.call(null,vec__16642,(0),null);
var map__16643 = cljs.core.nth.call(null,vec__16642,(1),null);
var map__16643__$1 = ((cljs.core.seq_QMARK_.call(null,map__16643))?cljs.core.apply.call(null,cljs.core.hash_map,map__16643):map__16643);
var arglists = cljs.core.get.call(null,map__16643__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__16643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16667 = seq__16638;
var G__16668 = chunk__16639;
var G__16669 = count__16640;
var G__16670 = (i__16641 + (1));
seq__16638 = G__16667;
chunk__16639 = G__16668;
count__16640 = G__16669;
i__16641 = G__16670;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__16638);
if(temp__4126__auto__){
var seq__16638__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16638__$1)){
var c__4934__auto__ = cljs.core.chunk_first.call(null,seq__16638__$1);
var G__16671 = cljs.core.chunk_rest.call(null,seq__16638__$1);
var G__16672 = c__4934__auto__;
var G__16673 = cljs.core.count.call(null,c__4934__auto__);
var G__16674 = (0);
seq__16638 = G__16671;
chunk__16639 = G__16672;
count__16640 = G__16673;
i__16641 = G__16674;
continue;
} else {
var vec__16644 = cljs.core.first.call(null,seq__16638__$1);
var name = cljs.core.nth.call(null,vec__16644,(0),null);
var map__16645 = cljs.core.nth.call(null,vec__16644,(1),null);
var map__16645__$1 = ((cljs.core.seq_QMARK_.call(null,map__16645))?cljs.core.apply.call(null,cljs.core.hash_map,map__16645):map__16645);
var arglists = cljs.core.get.call(null,map__16645__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__16645__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__16675 = cljs.core.next.call(null,seq__16638__$1);
var G__16676 = null;
var G__16677 = (0);
var G__16678 = (0);
seq__16638 = G__16675;
chunk__16639 = G__16676;
count__16640 = G__16677;
i__16641 = G__16678;
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

//# sourceMappingURL=repl.js.map?rel=1434562330058