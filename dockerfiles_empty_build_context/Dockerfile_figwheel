FROM clojure:lein-2.5.1

RUN apt-get update && apt-get install -y \
            curl && \
    apt-get -y autoclean && apt-get -y autoremove


RUN groupadd theuser && useradd --create-home --gid theuser --uid 1000 theuser
WORKDIR /home/theuser
USER theuser

# COPY project.clj $HOME/
# RUN lein  deps

