import flask
import requests
from flask_cors import CORS
app = flask.Flask(__name__)
CORS(app)

# api endpoint
MEALDB_MEAL_SEARCH_INGREDIENT_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
@app.route('/Meals')
def hello():
    #fetches the arg from the user input
    ingredient = flask.request.args.get('ingredient', '')
    #creates a request, api enpoint with an argument of user input ingredient
    response = requests.get(MEALDB_MEAL_SEARCH_INGREDIENT_URL + ingredient)
    print(response.json())
    # return the response in json 
    return flask.jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True, port=5000)  