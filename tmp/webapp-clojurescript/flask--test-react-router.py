# for testing react-router

# tldr; serve static files
# for other urls just send index.html


# let's say we are at http://localhost/
# we get the /static/index.html
# and then .js, .css, etc
#
# but we get to http://localhost/users/123
# we want to get some html, corresponding to the route, prerendered on server-side
# but for now index.html still do the job, the react-router and reactjs itself will render it on client-side
#
# so we can refresh the page at any moment

from flask import Flask
app = Flask(__name__, static_url_path='/static', static_folder='resources/public')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return app.send_static_file('index.html')   # was 'the path is: %s' % path
    
if __name__ == '__main__':
    app.run()
