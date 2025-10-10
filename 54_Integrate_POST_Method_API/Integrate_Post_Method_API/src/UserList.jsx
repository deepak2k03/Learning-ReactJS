import { useEffect, useState } from 'react'
import './App.css'

function UserList() {

  const [usersData,setUsersData]=useState([]);
  const [loading,setloading]=useState(false);

  useEffect(()=>{
    setloading(true);
    getUsersData();
  },[])
  
  async function getUsersData(){
    const url="http://localhost:3000/users"
    let response = await fetch(url);
    response=await response.json();
    setUsersData(response); 
    setloading(false);
}
  
  return (
    <>
      
      {
        !loading?
        usersData.map((user)=>(
          <ul>
            <li>{user.name}</li>
          </ul>
        )):<h1>loading...</h1>
      }
    </>
  )
}

export default UserList
