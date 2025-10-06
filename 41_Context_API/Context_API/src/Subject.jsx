import { useContext } from "react";
import ClassComponent from "./ClassComponent";
import { SubjectContext } from "./ContextData";

function Subject(){ 
  const subject=useContext(SubjectContext)
return (
  <div style={{backgroundColor:'red',padding:10}}>
    <h1>Subject Component | Subject is : {subject}</h1>
  </div>
);
}

export default Subject
