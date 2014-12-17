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

