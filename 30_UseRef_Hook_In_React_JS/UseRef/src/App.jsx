import { useRef } from "react"
function App() {
  const inputRef = useRef(null);
  const inputHandler = () => {
    console.log(inputRef)
    inputRef.current.focus();
    inputRef.current.style.color = 'red'
    inputRef.current.placeholder = "enter password"
    inputRef.current.value = "123"
  }

  return (
    <>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" placeholder="Enter user name" />
      <button onClick={inputHandler}>Focus on Input field</button>
    </>
  )
}

export default App