FROM nginx:stable

RUN apt-get update && apt-get install -y \
            tcpdump && \
    apt-get -y autoclean && apt-get -y autoremove
