import User from "./User"
function App() {

  const display=()=>{
    alert("fucntion from parent")
  }
  return (
    <>
      <h1>Call parent from child</h1>
      <User display={display}/>
    </>
  )
}

export default App

