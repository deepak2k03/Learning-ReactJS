import { useState } from "react";
function UserAdd() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const createUser = async () => {
    console.log(name, age, email);
    const url = "http://localhost:3000/users";

// Send POST request
let response = await fetch(url, {
  method: "Post",
  // The body should be sent as a JSON string
  body: JSON.stringify({ name, email, age }),
});

    // Parse the JSON response from the server
    response = await response.json();

    // Check if a response (indicating success or a response object) was received
    if (response) {
      alert("new user added");
    }
  };
  return (
    <>
      <h1>User Add Pages</h1>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="enter name"
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        onChange={(e) => setAge(e.target.value)}
        placeholder="enter age"
      ></input>
      <br></br>
      <br></br>
      <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="enter email"
      ></input>
      <br></br>
      <br></br>
      <button onClick={createUser}>Add User</button>
    </>
  );
}
export default UserAdd;
