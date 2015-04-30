(ns ^:figwheel-always ryctoic.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [secretary.core :as secretary :include-macros true]
              [pushy.core :as pushy]
              ))

(enable-console-print!)

(println "----------------------------------------")

(defn current-page []
  [(session/get :current-page)])

(defn home-page []
  [:div [:h2 "Welcome to {{name}}"]
   [:div [:a {:href "/about"} "about"]]
   [:div [:a {:href "/asdf"} "asdf"]]
   ])

(defn about-page []
  [:div [:h2 "About {{name}}"]
   [:div [:a {:href "/"} "home page"]]])

(defn not-found []
  [:div [:h2 "Not found"]
   [:div [:a {:href "/"} "home page"]]
   [:div [:a {:href "/about"} "about"]]])



(secretary/defroute "/" []
  (session/put! :current-page #'home-page))

(secretary/defroute "/about" []
  (session/put! :current-page #'about-page))

(secretary/defroute "*" []
  (session/put! :current-page #'not-found))

(defn ^:export run []
  (def history (pushy/pushy secretary/dispatch!
                            (fn [x] (when (secretary/locate-route x) x))))
  (pushy/start! history)
  (println (current-page))
  (reagent/render [current-page]
                  (js/document.getElementById "app"))
  )


