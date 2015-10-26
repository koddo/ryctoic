# http://bobbynorton.com/posts/includes-in-dockerfiles-with-m4-and-make/
# run with $ m4 test.m4


include(`dockerfiles_empty_build_context/Dockerfile_jenkins')


docker_gid=esyscmd(`getent group docker | cut -d: -f3')


define(`install', `hello $1')
install(`fucker')

