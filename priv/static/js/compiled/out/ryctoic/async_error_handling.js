// Compiled by ClojureScript 1.7.48 {}
goog.provide('ryctoic.async_error_handling');
goog.require('cljs.core');
ryctoic.async_error_handling.error_QMARK_ = (function ryctoic$async_error_handling$error_QMARK_(x){
return (x instanceof Error);
});
ryctoic.async_error_handling.throw_err = (function ryctoic$async_error_handling$throw_err(e){
if(cljs.core.truth_(ryctoic.async_error_handling.error_QMARK_.call(null,e))){
throw e;
} else {
}

return e;
});

//# sourceMappingURL=async_error_handling.js.map?rel=1440778214568