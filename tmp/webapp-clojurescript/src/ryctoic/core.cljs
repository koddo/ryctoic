(ns ^:figwheel-always ryctoic.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [pushy.core :as pushy]
              ))

(defn current-page []
  [(session/get :current-page)])

(defn root-page []
  [:div [:h2 "root"]
   [:div [:a {:href "/about"} "about"]]
   [:div [:a {:href "/asdf"} "asdf"]]
   ])

(defn about-page []
  [:div [:h2 "about"]
   [:div [:a {:href "/"} "root"]]])

(defn not-found []
  [:div [:h2 "not found"]
   [:div [:a {:href "/"} "root"]]
   [:div [:a {:href "/about"} "about"]]])


(secretary/defroute "/" []
  (session/put! :current-page #'root-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "*" []
  (session/put! :current-page #'not-found))


(defn ^:export render []
  (reagent/render-component [current-page]
                            (js/document.getElementById "app")))

(defn ^:export run []
  (def history (pushy/pushy secretary/dispatch!
                            (fn [x] (when (secretary/locate-route x) x))))
  (pushy/start! history)
  (render)
  )







