(ns ryctoic.async-error-handling-macros)

;; http://swannodette.github.io/2013/08/31/asynchronous-error-handling/
;; http://martintrojer.github.io/clojure/2014/03/09/working-with-coreasync-exceptions-in-go-blocks/
;; http://stackoverflow.com/questions/32156276/clojurescript-async-macro

(defmacro <? [ch]
  `(ryctoic.async-error-handling-helpers/throw-err (cljs.core.async/<! ~ch)))

