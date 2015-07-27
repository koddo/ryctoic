(ns ^:figwheel-always ryctoic.core
    (:require [reagent.core :as reagent]
              [reagent.ratom]
              [re-frame.core :as re-frame]
              [secretary.core :as secretary]
              [pushy.core :as pushy]
              ))

(re-frame/register-sub :current-page
                       (fn [state _]
                         (reagent.ratom/reaction (:current-page @state))))

(re-frame/register-sub :username
                       (fn [state _]
                         (reagent.ratom/reaction (:username @state))))

(defn current-page []
  (let [current-page  (re-frame/subscribe [:current-page])
        username      (re-frame/subscribe [:username])]
    (println "current page " @current-page)
    (if-not @current-page
      [:div "initializing"]   ; never shown, because we render after :initialize and :router-event
      [:div
       [:p @username]
       [:input {
                :type "button"
                :value "log in"
                :on-click #(js/somecode.popupCenter "/oauth2/google/callback" "" "500", "500")   ; can't open a popup later in a handler, browsers blocks window.open() outside the onclick handler
                }]
       (@current-page)])
    ))

(defn page-root []
  [:div
   [:h1 "root"]
   [:ul
    [:li [:a {:href "/about"} "about"]]
    [:li [:a {:href "/wont_be_found"} "wont_be_found"]]]
   ])

(defn page-about []
  [:div
   [:h1 "about"]
   [:ul
    [:li [:a {:href "/"} "root"]]]])

(defn page-not-found []
  [:div
   [:h1 "not found"]
   [:ul
    [:li [:a {:href "/"} "root"]]
    [:li [:a {:href "/about"} "about"]]]])

;; -----------------------------------------------

(re-frame/register-handler :initialize
                           (fn [_ v]
                             (let [state {
                                          :current-page nil   ; the router handles this, fail fast if not
                                          :username js/somecode.userinfo
                                          :websocket-obj (new js/WebSocket "wss://echo.websocket.org")
                                          }]
                               (println ":initialize")
                               (set! (.-onopen    (:websocket-obj state)) #(re-frame/dispatch [:ws-onopen]))
                               (set! (.-onmessage (:websocket-obj state)) #(re-frame/dispatch [:ws-onmessage %]))
                               state
                              )
                             ))

(re-frame/register-handler :router-event
                           (fn [state [_ new-current-page]]
                             (println ":router-event " new-current-page)
                             (-> state
                                 (assoc :current-page new-current-page))))

(re-frame/register-handler :render
                           (fn [state _]
                             (println ":render ")
                             (reagent/render-component [current-page]
                                                       (js/document.getElementById "app"))
                             state))

(re-frame/register-handler :ws-onopen
                           (fn [state _]
                             (println ":ws-onopen ")
                             (.send (:websocket-obj state) "hello websocket")
                             state))

(re-frame/register-handler :ws-onmessage
                           (fn [state [_ msg]]
                             (println ":ws-onmessage " (.-data msg))
                             state))

(defn ^:export dispatch-login [s]   ; called from popup
  (re-frame/dispatch [:log-in s]))

(re-frame/register-handler :log-in
                           (fn [state [_ s]]
                             (println "---- log-in handler: " s)
                             (-> state
                                 (assoc :username s))))

;; -----------------------------------------------

(secretary/defroute "/" []
  (re-frame/dispatch [:router-event #'page-root]))

(secretary/defroute "/about" []
  (re-frame/dispatch [:router-event #'page-about]))

(secretary/defroute "*" []
  (re-frame/dispatch [:router-event #'page-not-found]))

;; -----------------------------------------------

(defn ^:export run []
  (re-frame/dispatch [:initialize])
  (do   ; this dispatches :router-event, which sets current-page
    (def history
      (pushy/pushy secretary/dispatch!
                   (fn [x] (when (secretary/locate-route x) x))))
    (pushy/start! history))
  (re-frame/dispatch [:render])
  )






