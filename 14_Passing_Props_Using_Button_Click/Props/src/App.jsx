import "./App.css";
import { useState } from "react";
import User from "./User";
function App() {
  const [name, SetName] = useState("");
  return (
    <>
      <h1>Passing Props Using Button Click</h1>
      {User && <User name={name} />}
      <button onClick={() => SetName("Deepak")}>Update Name</button>
    </>
  );
}

export default App;
