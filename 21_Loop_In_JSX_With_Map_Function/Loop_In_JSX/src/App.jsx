import { useState } from "react";
import "./App.css";
import CheckBoxes from "./checkboxes";

function App() {
  const users = [
    { id: 1, name: "John", age: 25, gender: "male" },
    { id: 2, name: "Emma", age: 22, gender: "female" },
    { id: 3, name: "Raj", age: 30, gender: "male" },
    { id: 4, name: "Sophia", age: 27, gender: "female" },
  ];
  return (
    <>
      <h1>Loop in JSX</h1>
      <table border={"1"}>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
          <td>Gender</td>
        </tr>
        <tbody>
          {
            users.map((user)=>(
              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default App;
