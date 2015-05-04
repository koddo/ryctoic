(ns ryctoic.dev
    (:require
     [ryctoic.core :as ryctoic]
     [figwheel.client :as fw]))

(enable-console-print!)

(fw/start {
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :on-jsload (fn []
               (println "----------------------------------------")
               (ryctoic/render)
               )})

