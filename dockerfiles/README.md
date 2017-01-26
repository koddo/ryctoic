http://bobbynorton.com/posts/includes-in-dockerfiles-with-m4-and-make/



```
include(`Dockerfile_jenkins')


docker_gid=esyscmd(`getent group docker | cut -d: -f3')


define(`install', `hello $1')
install(`whatever')
```


