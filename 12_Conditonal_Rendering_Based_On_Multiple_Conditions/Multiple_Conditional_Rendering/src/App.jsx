import './App.css'
import { useState } from 'react'

function App() {
  const [display, setDisplay]=useState(0);

  return <>
    <button onClick={()=>(setDisplay(display+1))}>Toggle</button>
    {
      display==0?<h1>Condition 0</h1>
      :display==1?<h1>Condition 1</h1>
      :display==2?<h1>Condition 2</h1>
      :display==3?<h1>Condition 3</h1>
      :display==4?<h1>Condition 4</h1>
      :display==5?<h1>Condition 5</h1>
      :<h1>Other Conditions</h1>
    }
  </>
}

export default App