# FROM debian:wheezy
FROM debian:jessie

### https://www.erlang-solutions.com/resources/download.html
### make sure to check the version in links on the download page, sometimes it contains additional versioning, like 19.2-1
### erlang vs esl-erlang: the latter is a monolithic package, contains everything at once, the former is broken into dependencies
ENV ERLANG_PACKAGE=erlang
ENV ERLANG_VERSION=1:19.2-1
# ENV ERLANG_VERSION 1:18.1

# dockerfile best practices recommends to run apt-get update && apt-get install in a single RUN: https://docs.docker.com/articles/dockerfile_best-practices/#the-dockerfile-instructions
# and without ca-certificates it won't install erlang-solutions_1.0_all.deb in debian, but in ubuntu it is not required
RUN apt-get update && apt-get install -y \
            ca-certificates \
            wget \
            curl \
            git \
            build-essential \
            && \
    wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && \
    dpkg -i erlang-solutions_1.0_all.deb && \
    rm      erlang-solutions_1.0_all.deb && \
    apt-get update && apt-get install -y $ERLANG_PACKAGE=$ERLANG_VERSION && \
    apt-get -y autoclean && apt-get -y autoremove

    
include(`add_theuser.in')


# install rebar to ~/bin
# my dependencies need it
RUN cd ~ && mkdir -p ~/bin && cd ~/bin && \
    wget https://github.com/rebar/rebar/wiki/rebar && chmod a+x rebar
    ## erlang.mk downloads relx, but I leave this here for a while
    # git clone https://github.com/erlware/relx relx-tmp && cd relx-tmp && make && cd ~/bin && mv relx-tmp/relx . && rm -fr relx-tmp && \   
ENV PATH /home/theuser/bin:$PATH




# ## unused right now, these are set in fig.yml
# # VOLUME ["/data"]  
# # RUN cd ~ && git clone https://github.com/koddo/ryctoicpab && cd ryctoicpab && make 
# # CMD ["/home/theuser/ryctoicpab/_rel/hello_world_example/bin/hello_world_example", "foreground"]
# # ENTRYPOINT ["/home/theuser/ryctoicpab/entrypoint.sh"]
# # EXPOSE 8080

