#!/usr/bin/env bash

cordova platform add ios
cordova platform add android

ln -s config-dev.xml config.xml

# figwheel quirk
# didn't find a way to use relative path '../../www' in http-server-root
ln -s www src/resources/symlink-to-www
