(ns ryctoic.dev
    (:require
     [ryctoic.core :as ryctoic]
     [re-frame.core :as re-frame]
     [figwheel.client :as fw]))

(enable-console-print!)

(fw/start {
  :websocket-url (str "wss://" js/window.location.hostname ":8443/figwheel-ws")
  :on-jsload (fn []
               (println "----------------------------------------")
               (println "jsload")
               (re-frame/dispatch [:render])
               )})


(defn sqlite-query
  ([query] (sqlite-query query []))
  ([query params]
   (. (:sqlite @re-frame.db/app-db) executeSql query (clj->js params)
      (fn [res]
        (let [rows (-> res .-rows)
              len (-> rows .-length)
              ]
          (dotimes [i len]
            (println (. rows item i))))))))


