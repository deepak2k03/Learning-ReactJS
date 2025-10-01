import { useState } from 'react'
import './App.css'

function App() {
  const [name,setName]=useState('');
  const [password,setPassword]=useState('');
  const [email,setEmail]=useState('');
  return <>
    <form action="" method='get'>
      <input type='text' value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name'></input>
      <br></br><br></br>
      <input type='password' value={password} onChange={(event)=>setPassword(event.target.value)} placeholder='Enter Password'></input>
      <br></br><br></br>
      <input type='email' value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email'></input>
      <br></br><br></br>
      <button>Submit</button>
      <button onClick={()=>{setName('');()=>setEmail('');()=>setPassword('')}}>Clear</button>
    </form>
  </>
}

export default App