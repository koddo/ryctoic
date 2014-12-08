Hello world example
===================

To try this example, you need GNU `make` and `git` in your PATH.

To build the example, run the following command:

``` bash
$ make
```

To start the release in the foreground:

``` bash
$ ./_rel/hello_world_example/bin/hello_world_example console
```

Then point your browser at [http://localhost:8080](http://localhost:8080).

Example output
--------------

``` bash
$ curl -i http://localhost:8080
HTTP/1.1 200 OK
connection: keep-alive
server: Cowboy
date: Fri, 28 Sep 2012 04:10:25 GMT
content-length: 12
content-type: text/plain

Hello world!
```

notes and todos
--------------

$ erl -kernel inet_dist_listen_min 9100 inet_dist_listen_max 9102

 TODO: I put mochijson2.erl to src. There is another way: https://github.com/bjnortier/mochijson2
 TODO: logrotate

 
