import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [usersData,setUsersData]=useState([]);

  useEffect(()=>{
    getUsersData();
  },[])

  async function getUsersData(){
    const url="http://localhost:3000/users"
    let response = await fetch(url);
    
    // 1. Get the JSON response, which is the array itself.
    let data = await response.json(); 
    
    // 2. Log the entire data array (not data.users)
    console.log(data); 
    
    // 3. Set the state with the array directly.
    setUsersData(data); // <-- FIX APPLIED HERE
}
  
  return (
    <>
      <h1>Fetching Data From API</h1>
      {
        usersData.map((user)=>(
          <ul>
            <li>{user.name}</li>
          </ul>
        ))
      }
    </>
  )
}

export default App
