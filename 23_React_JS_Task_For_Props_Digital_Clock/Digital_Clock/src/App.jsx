import { useState } from "react";
import "./App.css";
import Clock from "./clock";

function App() {
  const [color,setColor]=useState('green');
  return (
    <>
      <h1>Digital Clock In ReactJS</h1>
      <select onChange={(event)=>setColor(event.target.value)}>
        <option value={"red"}>RED</option>
        <option value={"blue"}>BLUE</option>
        <option value={"green"}>GREEN</option>
      </select>
      <Clock color={color}/>
    </>
  );
}

export default App;
