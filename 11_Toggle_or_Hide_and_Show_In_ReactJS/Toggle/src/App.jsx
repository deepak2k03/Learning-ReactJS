import './App.css'
import { useState } from 'react'
function App() {
  const [display, setDisplay]=useState(true);
  return <>
    <button onClick={()=>(setDisplay(!display))}>Toggle</button>
    {/* <h1>Toggle Or Hide and Show</h1> */}
    {
      display?<h1>Deepak Singh</h1>:null
    }
  </>
}

export default App