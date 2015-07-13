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
var seq__29358_29370 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29359_29371 = null;
var count__29360_29372 = (0);
var i__29361_29373 = (0);
while(true){
if((i__29361_29373 < count__29360_29372)){
var f_29374 = cljs.core._nth.call(null,chunk__29359_29371,i__29361_29373);
cljs.core.println.call(null,"  ",f_29374);

var G__29375 = seq__29358_29370;
var G__29376 = chunk__29359_29371;
var G__29377 = count__29360_29372;
var G__29378 = (i__29361_29373 + (1));
seq__29358_29370 = G__29375;
chunk__29359_29371 = G__29376;
count__29360_29372 = G__29377;
i__29361_29373 = G__29378;
continue;
} else {
var temp__4126__auto___29379 = cljs.core.seq.call(null,seq__29358_29370);
if(temp__4126__auto___29379){
var seq__29358_29380__$1 = temp__4126__auto___29379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29358_29380__$1)){
var c__18572__auto___29381 = cljs.core.chunk_first.call(null,seq__29358_29380__$1);
var G__29382 = cljs.core.chunk_rest.call(null,seq__29358_29380__$1);
var G__29383 = c__18572__auto___29381;
var G__29384 = cljs.core.count.call(null,c__18572__auto___29381);
var G__29385 = (0);
seq__29358_29370 = G__29382;
chunk__29359_29371 = G__29383;
count__29360_29372 = G__29384;
i__29361_29373 = G__29385;
continue;
} else {
var f_29386 = cljs.core.first.call(null,seq__29358_29380__$1);
cljs.core.println.call(null,"  ",f_29386);

var G__29387 = cljs.core.next.call(null,seq__29358_29380__$1);
var G__29388 = null;
var G__29389 = (0);
var G__29390 = (0);
seq__29358_29370 = G__29387;
chunk__29359_29371 = G__29388;
count__29360_29372 = G__29389;
i__29361_29373 = G__29390;
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
var seq__29362 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29363 = null;
var count__29364 = (0);
var i__29365 = (0);
while(true){
if((i__29365 < count__29364)){
var vec__29366 = cljs.core._nth.call(null,chunk__29363,i__29365);
var name = cljs.core.nth.call(null,vec__29366,(0),null);
var map__29367 = cljs.core.nth.call(null,vec__29366,(1),null);
var map__29367__$1 = ((cljs.core.seq_QMARK_.call(null,map__29367))?cljs.core.apply.call(null,cljs.core.hash_map,map__29367):map__29367);
var arglists = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29391 = seq__29362;
var G__29392 = chunk__29363;
var G__29393 = count__29364;
var G__29394 = (i__29365 + (1));
seq__29362 = G__29391;
chunk__29363 = G__29392;
count__29364 = G__29393;
i__29365 = G__29394;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__29362);
if(temp__4126__auto__){
var seq__29362__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29362__$1)){
var c__18572__auto__ = cljs.core.chunk_first.call(null,seq__29362__$1);
var G__29395 = cljs.core.chunk_rest.call(null,seq__29362__$1);
var G__29396 = c__18572__auto__;
var G__29397 = cljs.core.count.call(null,c__18572__auto__);
var G__29398 = (0);
seq__29362 = G__29395;
chunk__29363 = G__29396;
count__29364 = G__29397;
i__29365 = G__29398;
continue;
} else {
var vec__29368 = cljs.core.first.call(null,seq__29362__$1);
var name = cljs.core.nth.call(null,vec__29368,(0),null);
var map__29369 = cljs.core.nth.call(null,vec__29368,(1),null);
var map__29369__$1 = ((cljs.core.seq_QMARK_.call(null,map__29369))?cljs.core.apply.call(null,cljs.core.hash_map,map__29369):map__29369);
var arglists = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__29369__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__29399 = cljs.core.next.call(null,seq__29362__$1);
var G__29400 = null;
var G__29401 = (0);
var G__29402 = (0);
seq__29362 = G__29399;
chunk__29363 = G__29400;
count__29364 = G__29401;
i__29365 = G__29402;
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

//# sourceMappingURL=repl.js.map?rel=1435073935276