#!/usr/bin/env bash

ln -s config-dev.xml config.xml

cordova platform add ios
# cordova platform add android

cordova plugin add cordova-plugin-statusbar
cordova plugin add cordova-plugin-whitelist
cordova plugin add cordova-plugin-screen-orientation
cordova plugin add cordova-plugin-inappbrowser
cordova plugin add cordova-plugin-splashscreen
cordova plugin add cordova-plugin-console


# figwheel quirk
# didn't find a way to use relative path '../../www' in http-server-root
# ln -s www src/resources/symlink-to-www
