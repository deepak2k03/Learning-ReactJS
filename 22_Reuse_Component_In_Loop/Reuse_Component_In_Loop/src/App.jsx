import { useState } from "react";
import "./App.css";
import User from "./User";


function App() {
  const users = [
  { id: 1, name: "John", age: 25, gender: "male" },
  { id: 2, name: "Emma", age: 22, gender: "female" },
  { id: 3, name: "Raj", age: 30, gender: "male" },
  { id: 4, name: "Sophia", age: 27, gender: "female" }
];
  return (
    <>
      <h1>Reusing Copmonents In Loop</h1>
      {
        users.map((users)=>(
          <div key={users.id}>
            <User user={users}/>
          </div>
        ))
      }
    </>
  );
}

export default App;
