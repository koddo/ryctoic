FROM python:3.5

RUN pip install flask

include(`add_theuser.in')

