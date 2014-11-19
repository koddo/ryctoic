FROM debian:wheezy

ENV ERLANG_VERSION 1:17.3.2

RUN apt-get update && apt-get install -y ca-certificates wget git build-essential && \
    wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb && \
    dpkg -i erlang-solutions_1.0_all.deb && \
    apt-get update && apt-get install -y erlang=$ERLANG_VERSION && \
    apt-get -y autoclean && apt-get -y autoremove

# TODO: do I really need --system here?
RUN groupadd --system theuser && useradd --system --create-home --gid theuser theuser
USER theuser
WORKDIR /home/theuser




# VOLUME ["/data"]  

# RUN cd ~ && mkdir -p ~/bin && cd ~/bin && \
#     wget https://github.com/rebar/rebar/wiki/rebar && chmod a+x rebar && \
#     git clone https://github.com/erlware/relx relx-tmp && cd relx-tmp && make && cd ~/bin && mv relx-tmp/relx . && rm -fr relx-tmp && \
    
# RUN cd ~ && git clone https://github.com/koddo/ryctoicpab && cd ryctoicpab && make 

# CMD ["/home/theuser/ryctoicpab/_rel/hello_world_example/bin/hello_world_example", "console"]

# EXPOSE 8080



