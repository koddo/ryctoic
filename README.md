Ryctoic
===================

 TODO: readme, svg diagram of components

remote shell
------------

I'm using boot2docker, it's ip is 192.168.59.103.
To access docker container directly via it's ip, which looks like 172.17.0.98, add this route:

     $ sudo route -n add 172.17.0.0/16 192.168.59.103

Test it:

     $ docker run -it ubuntu bash
     root@52eee3e2c7f6:/# hostname --ip-address
     root@52eee3e2c7f6:/# nc -l 7777

     $ telnet _ip_from_ifconfig_above_ 7777

Get a remote shell on a running container with erlang node:

     $ erl -name foo@$(hostname) -setcookie secret -remsh ryctoic@172.17.0.58
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

**HUGE SECURITY HOLE!**

Please use this for debugging only, when you haven't buy a proper ssl cert yet!

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


