FROM python:3.5

RUN pip install flask

RUN groupadd theuser && useradd --create-home --gid theuser --uid 1000 theuser
WORKDIR /home/theuser
USER theuser

