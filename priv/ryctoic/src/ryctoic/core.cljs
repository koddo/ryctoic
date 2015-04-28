(ns ^:figwheel-always ryctoic.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn simple-example []
  [:div
   [:p "Hello world, it is now"]
   ]
  )

(defn init! []
  (reagent/render [simple-example]
                  (js/document.getElementById "app"))
  )
