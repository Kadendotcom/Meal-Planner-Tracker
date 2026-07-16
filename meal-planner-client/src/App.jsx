import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ingredient, setIngredient] = useState('');
  const [meals, setMeals] =useState([])

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/Meals?ingredient=${encodeURIComponent(ingredient)}`);
    const data = await res.json();
    setMeals((data.meals || []).slice(0,5));
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input value={ingredient} onChange={e => setIngredient(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
    <ul>
      {meals.map(meal => (
        <li key = {meal.idMeal}>
          <img src={meal.strMealThumb} alt={meal.strMeal}/> 
          {meal.strMeal}
          </li>
      ))}
    </ul>
    </>
  );
}
export default App;
  