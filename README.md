Ryctoic
===================

Human learning

 TODO: readme, svg diagram of components

vmware instead of boot2docker(virtualbox)
-----------------------------------------
there is a bug in virtualbox's shared filesystem
you read garbage after writing to a file
https://github.com/ninenines/cowboy/issues/812

nat port forwarding from host to virtual machine
--------------------------------------------------
http://apple.stackexchange.com/questions/80266/nat-port-forwarding-from-host-to-client-in-vmware-fusion-5

/etc/hosts
------------
add local.ryctoic.com (vmware ip) to /etc/hosts in mac, because redirect uri must end with a public top-level domain (such as .com or .org)

install and run dnsmasq, it will resolve hosts from /etc/hosts without additional configuration
```
$ sudo port install dnsmasq
$ sudo port load dnsmasq
```
http://stackoverflow.com/questions/7473939/iphone-add-entry-to-etc-hosts-without-jailbreaking
https://gist.github.com/bradt/2018072

remote shell
------------

I'm using boot2docker, it's ip is 192.168.59.103.
To access docker container directly via it's ip, which looks like 172.17.0.98, add this route:

     mac$ sudo route -n add 172.17.0.0/16 192.168.59.103   # or 192.168.15.134

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

 TODO: understand permissions of docker volumes, something about uid 1000


 
make inappbrowser ignore ssl errors for dev env
--------------------------------------

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

**=== HUGE SECURITY HOLE! ===**

http://stackoverflow.com/questions/12627774/cordova-phonegap-ios-https-ssl-issues
http://ivancevich.me/articles/ignoring-invalid-ssl-certificates-on-cordova-android-ios/

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



docker dynamic links with dnsdock
--------------------------------------
I tried skydns+skydock, but had some problems. Can't now remember. I'm sorry.

And I had to run two containers instead of one.

in /lib/systemd/system/docker.service add `--dns=172.17.0.1` to the `ExecStart=`        
this is better that adding a dns param to every container

add to /etc/resolv.conf on the host to be able to ping containers:
nameserver 172.17.0.1



application/hal+json
--------------------
_embedded may be multiple levels nested
standard doesn't assume _embedded data is consistent with information that can be gotten from the embedded resouce, we decide; client even can first try to read _embedded and then try the embedded resource itself when needed
hypermedia for machine2machine interaction, no forms



