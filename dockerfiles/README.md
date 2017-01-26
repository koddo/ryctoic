
# Preprocessor for dockerfiles

Using `m4`: <http://bobbynorton.com/posts/includes-in-dockerfiles-with-m4-and-make/>

E.g.:

```
FROM debian

include(`add_theuser.in')
```

This is not strictly necessary, let's give it a try.


# Build

`Makefile` is too much for this.

```
$ ./build_dockerfiles.sh
```

Does the following:

```
./backend.m4 -> Dockerfile_backend
./nginx.m4 -> Dockerfile_nginx
./postgres.m4 -> Dockerfile_postgres
etc
```

All those `Dockerfile_*` are gitignored.


# Misc 

Right now we have a flat directory structure where `*.m4` and `*.in` are mixed. Maybe later move things around a bit.


# Build context

We moved all the dockerfiles to a separate folder to avoid copying all the stuff to build context on every image build.


