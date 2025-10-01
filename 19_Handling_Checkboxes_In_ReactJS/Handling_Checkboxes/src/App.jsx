import { useState } from 'react'
import './App.css'
import CheckBoxes from './checkboxes';

function App() {
  const [name,setName]=useState('');
  return <>
    <CheckBoxes/>
  </>
}

export default App