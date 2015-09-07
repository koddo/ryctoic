(ns ryctoic.rest-client_macros
  (:require
     [ryctoic.async-error-handling-macros :refer [<?]])
  )

(defn asdf [body ch]
  (mapcat
   #(if (sequential? %) (cond
                          (= (first %) :to) [`(ryctoic.rest-client/MYGET2 ~ch)
                                             '<?]
                          true [%])
        [%])
   body))

(defmacro api [url & body]
  (let [ch (gensym 'ch)
        ex (gensym 'ex)
        newbody (asdf body ch)
        ]
    `(async/go (try
                 (let [~ch (cljs.core.async/chan)]
                   (->
                    (ryctoic.rest-client/MYGET2 ~url ~ch)
                    <?
                    ~@newbody
                    ))
                 (catch js/Error ~ex
                   (js/console.error "!!! --- WTF --- !!!: " ~ex))
                 ))))


