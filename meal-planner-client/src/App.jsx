import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ingredient, setIngredient] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/Meals?ingredient=${encodeURIComponent(ingredient)}`);
    const data = await res.json();
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={ingredient} onChange={e => setIngredient(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  );
}
export default App;
  