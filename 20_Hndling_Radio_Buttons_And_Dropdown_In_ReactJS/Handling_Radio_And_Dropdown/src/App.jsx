import { useState } from 'react'
import './App.css'
import CheckBoxes from './checkboxes';

function App() {
  const [gender,setGender]=useState('female');
  const [city,setCity]=useState('delhi');
  return <>
    <h1>Radio and dropdown</h1>
    <h4>Select Gender</h4>
    <input type='radio' onChange={(event)=>setGender(event.target.value)} checked={gender=='male'} name='gender' value="male" id='male'/>
    <label htmlFor='male'>male</label>
    <input type='radio' onChange={(event)=>setGender(event.target.value)} checked={gender=='female'} name='gender' value="female" id='female'/>
    <label htmlFor='female'>female</label>
    <h2>Selected Gender : {gender}</h2>
    <br></br>
    <br></br>
    <select defaultValue={"delhi"} onChange={(event)=>setCity(event.target.value)}>
      <option value="noida"> Noida </option>
      <option value="delhi"> Delih </option>
      <option value="Kanpur"> Kanpur </option>
    </select>
    <h2>Selected city : {city}</h2>
  </>
}

export default App