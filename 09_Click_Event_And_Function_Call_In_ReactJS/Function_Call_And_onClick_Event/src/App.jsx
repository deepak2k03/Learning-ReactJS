import './App.css'

const fruitName=()=>{
    alert("outside");
}

function App() {

  const fruitName=()=>{
    alert("inside");
  }
    
  return <>
    <h1>Function Call and Onclick Event</h1>
    <button onClick={()=>fruitName()}>Apple</button>
  </>
}

export default App