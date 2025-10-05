import { useState } from "react";
import "./App.css";
import College from "./College";

function App() {
  const college = [
    {
      name: "IET Alwer",
      city: "Alwer",
      website: "https://www.iet.ac.in/",
      student: [
        {
          name: "Anil sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Beter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
    {
      name: "IIT Delhi",
      city: "Delhi",
      website: "https://www.iit.ac.in/",
      student: [
        {
          name: "Anil sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Beter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
    {
      name: "KCIET Hisar",
      city: "Hisar",
      website: "https://www.kciet.ac.in/",
      student: [
        {
          name: "Anil sidhu",
          age: 29,
          email: "anil@test.com",
        },
        {
          name: "Beter",
          age: 20,
          email: "peter@test.com",
        },
        {
          name: "Bruce",
          age: 25,
          email: "bruce@test.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Reuse component in Loop</h1>
      {college.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </div>
  );
}
export default App;
