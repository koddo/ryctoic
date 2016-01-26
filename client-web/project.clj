(defproject ryctoic "0.0.1"
  :description "ryctoic"
  :url "https://github.com/koddo/ryctoic"

  ;; :license {:name "Eclipse Public License - v 1.0"
  ;;           :url "http://www.eclipse.org/legal/epl-v10.html"
  ;;           :distribution :repo}

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"]  ;; TODO: :scope "provided"? :classifier :aot?
                 ;; [org.clojure/clojure "1.6.0"]
                 ;; [org.clojure/clojurescript "0.0-3165"]
                 ;; [org.clojure/clojurescript "0.0-3196" :scope "provided"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 [figwheel "0.3.7"]

                 [cljsjs/react "0.13.3-0"]
                 [reagent "0.5.0"]
                 ;; [reagent-utils "0.1.4"]   ; for cookies
                 ;; [reagent-forms "0.5.0"]

                 [re-frame "0.4.1"]

                 [secretary "1.2.3"]   ; router
                 [kibu/pushy "0.3.2"]  ; html5 history for the router

                 [cljs-ajax "0.3.14"]
                 
                 ;; [ring-server "0.4.0"]
                 ;; [ring "1.3.2"]
                 ;; [ring/ring-defaults "0.1.4"]
                 ;; [compojure "1.3.3"]
                 ;; [prone "0.8.1"]
                 ;; [selmer "0.8.2"]

                 ;; [environ "1.0.0"]
                 ]
  
  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-figwheel "0.3.7"]
            ]
  :hooks [leiningen.cljsbuild]
  
  :source-paths ["src"]

  ;; :clean-targets ^{:protect false} ["resources/public/js/compiled"]
  :clean-targets ^{:protect false} ["../priv/static/js/compiled"]
  
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src" "dev_src"]
                        :compiler {
                                   ;; :output-to "resources/public/js/compiled/ryctoic.js"
                                   :output-to "../priv/static/js/compiled/ryctoic.js"

                                   ;; :output-dir "resources/public/js/compiled/out"
                                   :output-dir "../priv/static/js/compiled/out"

                                   :optimizations :none
                                   :main ryctoic.dev
                                   :asset-path "static/js/compiled/out"
                                   :source-map true
                                   :source-map-timestamp true
                                   :cache-analysis true
                                   }}

                       
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {
                                   ;; :output-to "resources/public/js/compiled/ryctoic-min.js"
                                   :output-to "../priv/static/js/compiled/ryctoic-min.js"
                                   :main ryctoic.core
                                   :optimizations :advanced
                                   :pretty-print false
                                   }}]}
  
  :figwheel {
             ;; :http-server-root "public" ;; default and assumes "resources" 
             ;; :server-port 3449 ;; default

             ;; :css-dirs ["resources/public/css"]
             :css-dirs ["../priv/static/css"]

             
             :repl false
             ;; but!
             :nrepl-port 7888

             
             ;; sadly, this won't work since my figwheel is inside a docker container, can't access my emacsclient from inside of it
             :open-file-command "../bin/figwheel-file-opener.sh"


             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             })




;; lein-less was too slow, took 5 seconds to get css
;; [lein-pdo "0.1.1"]   ; run task simultaneously: $ lein pdo less, figwheel
;; [lein-less "1.7.2"]
;; :hooks [leiningen.cljsbuild, leiningen.less]
;; :less {:source-paths ["resources/public/less"] :target-path "resources/public/css"}





