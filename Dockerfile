FROM debian:wheezy

ENV ERLANG_VERSION 1:17.3.2

RUN apt-get update && apt-get install -y ca-certificates wget git build-essential && \
    wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && \
    dpkg -i erlang-solutions_1.0_all.deb && \
    apt-get update && apt-get install -y erlang=$ERLANG_VERSION && \
    apt-get -y autoclean && apt-get -y autoremove

# at the moment of writing the docker volumes' owner is 1000
# TODO: do I need useradd --system here?
RUN groupadd theuser && useradd --create-home --gid theuser --uid 1000 theuser
WORKDIR /home/theuser
USER theuser

RUN cd ~ && mkdir -p ~/bin && cd ~/bin && \
    wget https://github.com/rebar/rebar/wiki/rebar && chmod a+x rebar
    # git clone https://github.com/erlware/relx relx-tmp && cd relx-tmp && make && cd ~/bin && mv relx-tmp/relx . && rm -fr relx-tmp && \   # erlang.mk downloads relx, but I leave this here for a while
ENV PATH ~/bin:$PATH




# VOLUME ["/data"]  
# RUN cd ~ && git clone https://github.com/koddo/ryctoicpab && cd ryctoicpab && make 
# CMD ["/home/theuser/ryctoicpab/_rel/hello_world_example/bin/hello_world_example", "foreground"]
# ENTRYPOINT ["/home/theuser/ryctoicpab/entrypoint.sh"]
# EXPOSE 8080



