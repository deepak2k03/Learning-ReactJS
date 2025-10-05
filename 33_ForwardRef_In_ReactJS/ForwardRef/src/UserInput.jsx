// This commented sytax was used before React 19

// import { forwardRef } from "react"

// const UserInput=(props,ref)=>{
//  return(<div>
//   <input type="text" ref={ref} />
//  </div>)
// }

// export default forwardRef(UserInput);

// this is used in in and after React 19
const UserInput=(props)=>{
 return(<div>
  <input type="text" ref={props.ref} />
 </div>)
}

export default UserInput