import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] =useState([])
  const [searched, setSearched] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // when a user types an ingredient into the search box (ex. Chicken). react fetches the result of /meals endpoint
    // api calls mealdb with the suer input ingredient and returns object containing meals and other info on the meals
    const res = await fetch(`http://localhost:5000/Meals?ingredient=${encodeURIComponent(ingredient)}`);
    const data = await res.json();
    // load the top 5 meals returned (currently alphabetical)
    setMeals((data.meals || []).slice(0,5));
    setSearched(true);
  }

  return (
    <div className="App">
    <form className= "search-form" onSubmit={handleSubmit}>
      <input value={ingredient} onChange={e => setIngredient(e.target.value)}/>
      <button type="submit">Search</button>
      {/* // if there are no meals returned, return "no meals found" */}
    </form>
    {searched && meals.length === 0 ? (
      <p>No meals found</p>
    ) : (
      <ul>
        {/* the actual objects that show up on the page. meal name, image, and link.  */}
        {meals.map((meal, index) => (
          <li key = {meal.idMeal} style={{animationDelay: `${index * 80}ms`}}>
            <img className="meal-thumb" src={meal.strMealThumb} alt={meal.strMeal}/>
            <a 
            className="meal-link"
            href={`https://www.themealdb.com/meal/${meal.idMeal}`}
            target='_blank'
            rel="noopener noreferrer"
            >
              {"Recipe: "+meal.strMeal}
            </a>
            </li>
        ))}
      </ul>
    )}
    </div>
  );
}
export default App;
  