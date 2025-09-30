import './App.css'
import User from './User'

function App() {
  const name="Deepak"
  return <>
    <h1>Props In React</h1>
    <User name={name} age={21}/>
  </>
}

export default App