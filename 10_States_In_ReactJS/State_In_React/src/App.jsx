import './App.css'
import { useState } from 'react';
function App() {
  const [fruit, setFruit]=useState("Apple");
  const fruitHandler=()=>{
    setFruit("Banana");
  }
  return <>
    <h1>{fruit}</h1>
    <button onClick={fruitHandler}>Change Fruit</button>
  </>
}

export default App