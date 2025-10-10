import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [usersData,setUsersData]=useState([]);

  useEffect(()=>{
    getUsersData();
  },[])

  async function getUsersData(){
    const url="https://dummyjson.com/users"
    let response = await fetch(url);
    response = await response.json();
    setUsersData(response.users)

  }
  // console.log(response.users);
  
  return (
    <>
      <h1>Fetching Data From API</h1>
      {
        usersData.map((user)=>(
          <ul>
            <li>{user.firstName}</li>
          </ul>
        ))
      }
    </>
  )
}

export default App
