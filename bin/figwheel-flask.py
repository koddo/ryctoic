from flask import Flask, request
from subprocess import call
import os

app = Flask(__name__)



## this script is supposed to be run from the root of the project
## prefix var is the home of the figwheel



@app.route("/emacsclient", methods=["POST"])
def whatever():
    prefix = os.path.join(os.getcwd(), "client-web")
    filename = os.path.join(prefix, request.values["file"])
    line = request.values["line"]

    print prefix
    print filename
    print line

    call(["emacsclient", "-n", "+" + line, filename])
    return ""

        
if __name__ == '__main__':
    # app.run(host='0.0.0.0')
    app.run(host='192.168.15.1', port=5000)
