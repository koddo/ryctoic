(ns ryctoic.rest-client_macros
  (:require
     [ryctoic.async-error-handling-macros :refer [<?]])
  )


(defmacro api [url & body]
  (let [ch (gensym 'ch)
        ex (gensym 'ex)
        rrr (fn [body] (mapcat
                         #(if (sequential? %) (cond
                                                (= (first %) :to) [`(ryctoic.rest-client/MYGET2 ~ch)
                                                                   '<?]
                                                true [%])
                              [%])
                         body))
        newbody (rrr body)
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


