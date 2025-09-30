import { useState } from 'react'
import './App.css'

function App() {
  const [val,setVal]=useState("");
  return <>
    <h1>Get Value from Input Field</h1>
    <input type='text' value={val} onChange={(event)=>setVal(event.target.value)}></input>
    <h1>{val}</h1>
    <button onClick={()=>setVal("")}>clear</button>
  </>
}

export default App