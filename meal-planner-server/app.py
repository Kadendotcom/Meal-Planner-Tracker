import flask
from flask_cors import CORS
app = flask.Flask(__name__)
CORS(app)

@app.route('/Meals')
def hello():
    ingredient = flask.request.args.get('ingredient', '')
    return flask.jsonify(message=f'Searching for {ingredient}')

if __name__ == '__main__':
    app.run(debug=True, port=5000)      