import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] =useState([])
  const [searched, setSearched] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/Meals?ingredient=${encodeURIComponent(ingredient)}`);
    const data = await res.json();
    setMeals((data.meals || []).slice(0,5));
    setSearched(true);
  }

  return (
    <div className="App">
    <form className= "search-form" onSubmit={handleSubmit}>
      <input value={ingredient} onChange={e => setIngredient(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
    {searched && meals.length === 0 ? (
      <p>No meals found</p>
    ) : (
      <ul>
        {meals.map((meal, index) => (
          <li key = {meal.idMeal} style={{animationDelay: `${index * 80}ms`}}>
            <img className="meal-thumb" src={meal.strMealThumb} alt={meal.strMeal}/>
            {meal.strMeal}
            </li>
        ))}
      </ul>
    )}
    </div>
  );
}
export default App;
  