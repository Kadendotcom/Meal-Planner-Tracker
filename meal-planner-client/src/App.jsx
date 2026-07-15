import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ingredient, setIngredient] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={ingredient} onChange={e => setIngredient(e.target.value)}/>
      <button type="submit">Search</button>
    </form>
  );
}
export default App;
