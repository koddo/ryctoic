FROM clojure:lein-2.5.1

RUN apt-get update && apt-get install -y \
            curl \
            && \
    apt-get -y autoclean && apt-get -y autoremove


include(`add_theuser.in')

# COPY project.clj $HOME/
# RUN lein  deps

