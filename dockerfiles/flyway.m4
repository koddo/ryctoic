# FROM java:openjdk-8u66-jre
FROM java:openjdk-8u66-jdk

include(`add_theuser.in')


# TODO: critical: check signature
RUN wget https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/3.2.1/flyway-commandline-3.2.1.tar.gz && \
    tar xvfz flyway-commandline-3.2.1.tar.gz && \
    rm flyway-commandline-3.2.1.tar.gz


### old docker-compose target:
# flyway:
#     build: dockerfiles
#     dockerfile: Dockerfile_flyway

#     entrypoint: /bin/true     # bin/docker-compose.sh run --rm --no-deps --entrypoint "/home/theuser/bin/entrypoint-flyway.sh" flyway secrets/flyway.pgtest.conf info
#     # entrypoint: bin/entrypoint-flyway.sh
#     # command: secrets/flyway.conf info

#     volumes:
#         - /home/alex/mnt/ryctoic.secrets:/home/theuser/secrets
#         - /home/alex/mnt/ryctoic/sql:/home/theuser/sql
#         - /home/alex/mnt/ryctoic/bin/entrypoint-flyway.sh:/home/theuser/bin/entrypoint-flyway.sh
