FROM postgres:9.6.1

RUN apt-get update && apt-get install -y \
            postgresql-9.6-pgtap && \
    apt-get -y autoclean && apt-get -y autoremove


# RUN /docker-entrypoint.sh postgres please_dont_start ; echo ok    







