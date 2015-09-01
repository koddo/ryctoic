(ns ryctoic.rest-client
  (:require [ryctoic.async-error-handling-helpers]
            [ajax.core :as ajax]
            [cljs.core.async :refer [chan <! >! put! close!]]
   )
  (:require-macros
     [cljs.core.async.macros :as async]
     [ryctoic.async-error-handling-macros :refer [<?]])
  )


(defn MYGET2 [url ch]
  (ajax/GET url
                 {
                  :response-format (assoc (ajax/json-response-format) :content-type "application/hal+json")   ; https://github.com/JulianBirch/cljs-ajax/issues/69#issuecomment-135125295
                  :handler #(put! ch %)
                  :error-handler (fn [{:keys [status status-text failure]}]
                                   (put! ch (js/Error. (str "Oops: " status ", " status-text ", " failure))))
                  })
  ch)



;; (async/go 
;;   (try 
;;     (clojure.core/let [ch 
;;                        (cljs.core.async/chan)] 
;;       (clojure.core/-> 
;;        (ryctoic.rest-client/MYGET2 "https://localhost.ryctoic.com:8443/api/v0" ch) ryctoic.async-error-handling-macros/<? 
;;        (get-in ["_links" "ry:test" "href"]) 
;;        (ryctoic.rest-client/MYGET2 ch) <? 
;;        (get-in ["data"]) 
;;        (fn* [p1__20074#] 
;;             (re-frame/dispatch [:btn-click--get-request--handle p1__20074#])))) 
;;     (catch js/Error ryctoic.rest-client_macros/ex 
;;       (js/console.error "!!! --- WTF --- !!!: " ryctoic.rest-client_macros/ex))))


;; (mapcat
;;  #(if (sequential? %) (cond
;;                         (= (first %) :to) [:asdf]
;;                         true %)
;;       [%])
;;  '(:a (:to "hell") :e))





;; (async/go 
;;   (try 
;;     (clojure.core/let [ch22790 
;;                        (cljs.core.async/chan)] 
;;       (clojure.core/-> 
;;        (ryctoic.rest-client/MYGET2 "https://localhost.ryctoic.com:8443/api/v0" ch22790)
;;        ryctoic.async-error-handling-macros/<? 
;;        (get-in ["_links" "ry:test" "href"]) 
;;        (ryctoic.rest-client/MYGET2 ch22790)
;;        <? 
;;        (get-in ["data"]) 
;;        ((fn* [p1__22787#] 
;;              (re-frame/dispatch [:btn-click--get-request--handle p1__22787#]))))) 
;;     (catch js/Error ex22791 
;;       (js/console.error "!!! --- WTF --- !!!: " ex22791))))









