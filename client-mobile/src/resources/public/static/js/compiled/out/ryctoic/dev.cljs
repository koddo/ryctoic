(ns ryctoic.dev
    (:require
     [ryctoic.core :as ryctoic]
     [re-frame.core :as re-frame]
     [figwheel.client :as fw]))

(enable-console-print!)

(fw/start {
  :websocket-url "wss://localhost.ryctoic.com:8443/figwheel-ws"
  :on-jsload (fn []
               (println "----------------------------------------")
               (println "jsload")
               (re-frame/dispatch [:render])
               )})

