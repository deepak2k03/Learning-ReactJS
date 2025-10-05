import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc3b",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc57",
    margin: "10px",
    color:"black"
  });

  const [textColor,setTextColor]=useState('blue')
  const updateTheme=(bgColor, textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor})
    setTextColor(textColor);
  }
  return (
    <>
    <div>
      <h1>Dynamic and Conditional Inline Style</h1>
      <button onClick={()=>updateTheme('grey','green')}>Grey Theme</button>
      <button onClick={()=>updateTheme('white','black')}>Default Theme</button>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://imgs.search.brave.com/HHv4G66L_oIc59sq5PJHB191jYrN0Wh0OR9z0neEfec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/ODQ3NTE5Ni92ZWN0/b3IvdXNlci1pY29u/LXJlcHJlc2VudGlu/Zy1wcm9maWxlLWFj/Y291bnQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUpFOS1t/UEZiamRPMWR1aEZO/SE1TakZnZWtvQVdD/Q05WRnRCQW1LSDdS/TTg9"
          />
          <div style={{ padding: "5px",color:textColor } }>
            <h4>Anil Sidhu</h4>
            <p>Software developer</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
