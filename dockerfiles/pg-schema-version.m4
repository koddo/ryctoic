FROM postgres:9.5


RUN apt-get update && apt-get install -y \
    wget \
    python3-pip \
    libpq-dev && \
    apt-get -y autoclean && apt-get -y autoremove


include(`add_theuser.in')


RUN wget   https://raw.githubusercontent.com/koddo/pg-schema-version/master/pg-schema-version.py && \
    wget  https://raw.githubusercontent.com/koddo/pg-schema-version/master/requirements.txt && \
    chmod +x pg-schema-version.py && \
    pip3 install --user -r requirements.txt



    


