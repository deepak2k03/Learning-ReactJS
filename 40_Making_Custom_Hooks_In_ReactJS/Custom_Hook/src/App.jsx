import useToggle from "./useToggle";

function App(){ 
  
const [value, toggleValue] = useToggle(true);
const [data, setData] = useToggle(true);

return (
  <div>
    <button onClick={toggleValue}>Toggle Heading</button>
    <button onClick={() => toggleValue(false)}>Hide Heading</button>
    <button onClick={() => toggleValue(true)}>Show Heading</button>

    {value ? <h1>Custom Hooks in React js</h1> : null}
    <hr />
    <h1>Second Heading</h1>
  </div>
);
}

export default App
