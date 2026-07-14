import { useState, useEffect} from 'react';
import './App.css';


function App(){
  var func= useState(null)
  useEffect(func,[])
  var prom= fetch('http://localhost:5000/hello') 
  prom.then(response=> response.json).then(data=> message)
  return <h1>Hello World</h1>;
}
export default App;
