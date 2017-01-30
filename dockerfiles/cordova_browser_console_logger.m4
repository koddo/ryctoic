FROM python:3.5

include(`add_theuser.in')

RUN pip install flask
