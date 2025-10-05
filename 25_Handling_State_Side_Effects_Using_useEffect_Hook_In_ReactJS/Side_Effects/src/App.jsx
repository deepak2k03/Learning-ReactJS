import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter,setCounter]=useState(0);
  function test(){
    console.log("side effect")
  }

  useEffect(()=>{
    test()
  },[])
  
  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
    </div>
  );
}
export default App;
