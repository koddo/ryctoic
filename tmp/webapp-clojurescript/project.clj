(defproject ryctoic "0.0.1"
  :description "ryctoic"
  :url "https://github.com/koddo/ryctoic"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3165"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]

                 [figwheel "0.2.7"]

                 ;; [org.clojure/clojurescript "0.0-3196" :scope "provided"]

                 [cljsjs/react "0.13.1-0"]
                 [reagent "0.5.0"]
                 [reagent-utils "0.1.4"]
                 ;; [reagent-forms "0.5.0"]

                 [secretary "1.2.3"]
                 [kibu/pushy "0.3.0"]
                 
                 ;; [ring-server "0.4.0"]
                 ;; [ring "1.3.2"]
                 ;; [ring/ring-defaults "0.1.4"]
                 ;; [compojure "1.3.3"]
                 ;; [prone "0.8.1"]
                 ;; [selmer "0.8.2"]

                 ;; [environ "1.0.0"]
                 
                 ]
  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.2.7"]
            ]
  :hooks [leiningen.cljsbuild]
  
  :source-paths ["src"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled"]
  
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src" "dev_src"]
              :compiler {:output-to "resources/public/js/compiled/ryctoic.js"
                         :output-dir "resources/public/js/compiled/out"
                         :optimizations :none
                         :main ryctoic.dev
                         :asset-path "static/js/compiled/out"
                         :source-map true
                         :source-map-timestamp true
                         :cache-analysis true }}
             {:id "min"
              :source-paths ["src"]
              :compiler {:output-to "resources/public/js/compiled/ryctoic-min.js"
                         :main ryctoic.core
                         :optimizations :advanced
                         :pretty-print false}}]}
  
  :figwheel {
             :http-server-root "public" ;; default and assumes "resources" 
             :server-port 3449 ;; default
             :css-dirs ["resources/public/css"] ;; watch and update CSS

             ;; Start an nREPL server into the running figwheel process
             ;; :nrepl-port 7888

             ;; Server Ring Handler (optional)
             ;; if you want to embed a ring handler into the figwheel http-kit
             ;; server, this is for simple ring servers, if this
             ;; doesn't work for you just run your own server :)
             ;; :ring-handler hello_world.server/handler

             ;; To be able to open files in your editor from the heads up display
             ;; you will need to put a script on your path.
             ;; that script will have to take a file path and a line number
             ;; ie. in  ~/bin/myfile-opener
             ;; #! /bin/sh
             ;; emacsclient -n +$2 $1
             ;;
             ;; :open-file-command "myfile-opener"

             ;; if you want to disable the REPL
             ;; :repl false

             ;; to configure a different figwheel logfile path
             ;; :server-logfile "tmp/logs/figwheel-logfile.log" 
             })



;; lein-less was too slow, took 5 seconds to get css
;; [lein-pdo "0.1.1"]   ; run task simultaneously: $ lein pdo less, figwheel
;; [lein-less "1.7.2"]
;; :hooks [leiningen.cljsbuild, leiningen.less]
;; :less {:source-paths ["resources/public/less"] :target-path "resources/public/css"}




