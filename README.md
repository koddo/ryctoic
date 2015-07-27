Ryctoic
===================

 TODO: readme, svg diagram of components

vmware instead of boot2docker(virtualbox)
-----------------------------------------
there is a bug in virtualbox's shared filesystem
you read garbage after writing to a file
https://github.com/ninenines/cowboy/issues/812


/etc/hosts
------------
add localhost.ryctoic.com (vmware ip) to /etc/hosts, because redirect uri must end with a public top-level domain (such as .com or .org)

remote shell
------------

I'm using boot2docker, it's ip is 192.168.59.103.
To access docker container directly via it's ip, which looks like 172.17.0.98, add this route:

     mac$ sudo route -n add 172.17.0.0/16 192.168.59.103

Test it:

     mac$ docker run -it ubuntu bash
     root@52eee3e2c7f6:/# hostname --ip-address
     root@52eee3e2c7f6:/# nc -l 7777

     mac$ telnet _ip_from_ifconfig_above_ 7777

Get a remote shell on a running container with erlang node:

     mac$ erl -name foo@$(hostname) -setcookie secret -remsh ryctoic@172.17.0.58
     (ryctoic@172.17.0.58)1> error_logger:info_msg("test info messge~n", []).

     
To connect
     
notes and todos
--------------

 TODO: I've put mochijson2.erl to src. There is another way: https://github.com/bjnortier/mochijson2
 TODO: another container for logs with logrotate
 TODO: --icc=false to disallow any communication between containers other than by links

 TODO: review authentication code



 
make inappbrowser ignore ssl errors for dev env
--------------------------------------

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

Please use this for development and debugging only!

NEVER USE THIS IN PRODUCTION!

You have been warned.

Clone the inappbrowser plugin: https://github.com/apache/cordova-plugin-inappbrowser
Add these lines to org.apache.cordova.inappbrowser/src/android/InAppBrowser.java:

```java
...
// <--- this
import android.webkit.SslErrorHandler;
import android.net.http.SslError;
...

public class InAppBrowser extends CordovaPlugin {
...
    public class InAppBrowserClient extends WebViewClient {
    ...
        // <--- and this 
        public void onReceivedSslError(WebView view,
                                       SslErrorHandler handler, SslError error) {
            Log.e("Error", "Received SSL error"+ error.toString());
            handler.proceed();
        }
    }
...
```

Then add this modified plugin to the cordova project:

```
$ cordova plugins add ~/tmp/org.apache.cordova.inappbrowser
```

If you want to modify it further, edit some files in tmp, remove and re-add the plugin.


TODO: CRITICAL make sure the modified inappbrowser plugin that ignores ssl errors won't go into production



docker dynamic links with skydns+skydock
--------------------------------------
in debian add "--dns 172.17.42.1" to DOCKER_OPTS in /etc/default/docker
this is better that adding dns param to every container
then start skydns:
```
$ docker-skydns/run.sh [stop]
```


