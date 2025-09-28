import './App.css'
function App() {
  const name = "JSX in React"
  let x=4;
  let y=6;
  return (
    <>
      <h1>{name}</h1>
      <h2>{x*y}</h2>
      <button onClick={()=>alert("Pressed Button")}> Button</button>
    </>
  )
}
export default App

