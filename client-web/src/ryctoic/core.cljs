(ns ^:figwheel-always ryctoic.core
    (:require [reagent.core :as reagent]
              [reagent.ratom]
              [re-frame.core :as re-frame]
              [secretary.core :as secretary]
              [pushy.core :as pushy]
              [ajax.core :as ajax]
              [cljs.core.async :refer [chan <! >! put! close!]]
              [ryctoic.async-error-handling-helpers]
              [ryctoic.rest-client]
              )
    (:require-macros
     [cljs.core.async.macros :as async]
     [ryctoic.async-error-handling-macros :refer [<?]]
     [ryctoic.rest-client_macros]
     [cljs.core :refer [exists?]]
     ))


(re-frame/register-sub :current-page
                       (fn [state _]
                         (reagent.ratom/reaction (:current-page @state))))

(re-frame/register-sub :username
                       (fn [state _]
                         (reagent.ratom/reaction (:username @state))))

(re-frame/register-sub :network-information
                       (fn [state _]
                         (reagent.ratom/reaction (:network-information @state))))

(defn current-page []
  (let [current-page    (re-frame/subscribe [:current-page])
        username        (re-frame/subscribe [:username])
        network-information  (re-frame/subscribe [:network-information])
        ]
    (println "current page " @current-page)
    (if-not @current-page
      [:div "initializing"]   ; never shown, because we render after :initialize and :router-event
      [:div
       [:p @username]
       [:p "network-information: " @network-information]   ; TODO: ping our backend using ajax or websockets to know if we can use network --- instead of this plugin, because it doesn't show anything useful for _us_
       [:input {
                :type "button"
                :value "log in"
                :on-click #(js/somecode.openLoginPopup)   ; can't open a popup later in a handler, browsers blocks window.open() outside the onclick handler
                }]
       [:input {
                :type "button"
                :value "get request"
                :on-click #(re-frame/dispatch [:btn-click--get-request])
                }]
       [:input {
                :type "button"
                :value "post request"
                :on-click #(re-frame/dispatch [:btn-click--post-request])
                }]
       [:div
        [:input {
                :type "button"
                :value "login_user1"
                :on-click #(re-frame/dispatch [:btn-click--login_user1])
                }]
        [:input {
                :type "button"
                :value "login_user2"
                :on-click #(re-frame/dispatch [:btn-click--login_user2])
                }]
        ]
       [:div
        [:textarea {
                 :id "whatever"
                 }]
        [:input {
                 :type "button"
                 :value "add card"
                 :on-click #(re-frame/dispatch [:btn-click--add-card])
                 }]
        ]
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

(defn get-network-information []
    js/navigator.connection.type
    )

(re-frame/register-handler :initialize
                           [re-frame.core/debug]
                           (fn [_ v]
                             (let [state {
                                          :current-page nil   ; the router handles this, fail fast if not
                                          :username js/somecode.userinfo
                                          :websocket-obj (new js/WebSocket "wss://echo.websocket.org")
                                          :network-information "unknown"   ; TODO: 1. network-information in browser, now works in cordova only; 2. a good init value instead of unknown
                                          :sqlite nil
                                          }]
                               (set! (.-onopen    (:websocket-obj state)) #(re-frame/dispatch [:ws-onopen]))
                               (set! (.-onmessage (:websocket-obj state)) #(re-frame/dispatch [:ws-onmessage %]))
                               state
                              )
                             ))

(re-frame/register-handler :router-event
                           [re-frame.core/debug]
                           (fn [state [_ new-current-page]]
                             (println ":router-event " new-current-page)
                             (-> state
                                 (assoc :current-page new-current-page))))

(re-frame/register-handler :render
                           [re-frame.core/debug]
                           (fn [state _]
                             (reagent/render-component [current-page]
                                                       (js/document.getElementById "app"))
                             state))

(re-frame/register-handler :ws-onopen
                           [re-frame.core/debug]
                           (fn [state _]
                             (.send (:websocket-obj state) "hello websocket")
                             state))

(re-frame/register-handler :ws-onmessage
                           [re-frame.core/debug]
                           (fn [state [_ msg]]
                             (println "--- the msg: " (.-data msg))
                             state))

(defn ^:export dispatch-login [s]   ; called from popup
  (js/console.log (str "--- dispatch-login: " s))
  (re-frame/dispatch [:log-in s]))

(re-frame/register-handler :log-in
                           [re-frame.core/debug]
                           (fn [state [_ s]]
                             (-> state
                                 (assoc :username s))))



(re-frame/register-handler :btn-click--get-request
                           [re-frame.core/debug]
                           (fn [state _]


                             ;; (async/go (try
                             ;;             (let [ch (chan)]
                             ;;               (re-frame/dispatch [:btn-click--get-request--handle
                             ;;                                   (->
                             ;;                                    (ryctoic.rest-client/MYGET2 "https://local.ryctoic.com:8443/api/v0" ch)
                             ;;                                    <?
                             ;;                                    (get-in ["_links" "ry:test" "href"])
                             ;;                                    (ryctoic.rest-client/MYGET2 ch)
                             ;;                                    <?
                             ;;                                    (get-in ["data"])
                             ;;                                    )]))
                             ;;             (catch js/Error ex
                             ;;               (js/console.error "!!! --- WTF --- !!!: " ex))
                             ;;             ))

                             
                             ;; (ryctoic.rest-client_macros/api "https://local.ryctoic.com:8443/api/v0"
                             ;;                                 (get-in ["_links" "ry:test" "href"])
                             ;;                                 (ryctoic.rest-client/MYGET2 ch)
                             ;;                                 <?
                             ;;                                 (get-in ["data"])
                             ;;                                 (#(re-frame/dispatch [:btn-click--get-request--handle %]))
                             ;;                                 )

                             (ryctoic.rest-client_macros/api "https://local.ryctoic.com:8443/api/v0"
                                                             (get-in ["_links" "ry:test" "href"])
                                                             (:to)
                                                             (get-in ["data"])
                                                             (#(re-frame/dispatch [:btn-click--get-request--handle %]))
                                                             )

                             ;; (ajax/GET "https://local.ryctoic.com:8443/mongo"
                             ;;  {:handler       #(re-frame/dispatch [:btn-click--get-request--handle %1])
                             ;;   :error-handler #(re-frame/dispatch [:btn-click--get-request--error %1])})

                             state))


(re-frame/register-handler :btn-click--get-request--handle
                           [re-frame.core/debug]
                           (fn [state [_ response]]
                             (js/console.log "!!! --- WTF --- !!!: ")
                             (println "--- the response "
                                      response
                                      ;; (get response "_links")
                                      )
                             state))
(re-frame/register-handler :btn-click--get-request--error
                           [re-frame.core/debug]
                           (fn [state [_ response]]
                             state))



(re-frame/register-handler :btn-click--post-request
                           [re-frame.core/debug]
                           (fn [state _]
                             (js/throw "error2")
                             (ajax/POST "https://local.ryctoic.com:8443/mongo"
                              {:params {:fuck "you"}
                               :format :json
                               :handler       #(re-frame/dispatch [:btn-click--post-request--handle %1])
                               :error-handler #(re-frame/dispatch [:btn-click--post-request--error %1])})
                             state))
(re-frame/register-handler :btn-click--post-request--handle
                           [re-frame.core/debug]
                           (fn [state [_ response]]
                             state))
(re-frame/register-handler :btn-click--post-request--error
                           [re-frame.core/debug]
                           (fn [state [_ response]]
                             state))

(re-frame/register-handler :btn-click--add-card
                           [re-frame.core/debug]
                           (fn [state _]
                             (println (-> (. js/document getElementById "whatever") .-value))
                             state))

;; -----------------------------------------------


(secretary/defroute "/" []
  (re-frame/dispatch [:router-event #'page-root]))
(secretary/defroute "/cordova/ios/" []
  (re-frame/dispatch [:router-event #'page-root]))
(secretary/defroute "/cordova/android/" []
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


(defn ^:export dispatch-network-information []
  (println "dispatch-network-information")
  (re-frame/dispatch [:network-information])
  )


(re-frame/register-handler :network-information
                           [re-frame.core/debug]
                           (fn [state _]
                             (-> state
                                 (assoc :network-information (get-network-information)))))

(defn ^:export dispatch-deviceready []
  (println "dispatch-deviceready")
  (re-frame/dispatch [:deviceready])
  )

(re-frame/register-handler :deviceready
                           [re-frame.core/debug]
                           (fn [state _]
                             (let [sqlite (js/window.sqlitePlugin.openDatabase (clj->js {:name "sqlite.db"})
                                                                               (fn [_db] (println "sqlite success"))
                                                                               (fn [err] (println "sqlite error: " err))   ; TODO: handle sqlite.openDatabase errors
                                                                               )]
                               (-> state
                                   (assoc :sqlite sqlite)))))





