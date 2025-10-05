import { useRef } from "react"
function App() {

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;

    console.log(user, password);
  }

  return (
    <>
      <h1>Uncontrolled Component</h1>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name" />
        <br /><br />
        <input type="password" id="password" placeholder="enter user password" />
        <br /><br />
        <button>
          Submit
        </button>
      </form>
    </>
  )
}

export default App


// Using useRef
// function App() {
//   const userRef = useRef(null);
//   const passwordRef = useRef(null);

//   const handleForm = (event) => {
//     event.preventDefault();
//     const user = userRef.current.value;
//     const password = passwordRef.current.value;
//     console.log('User:', user, 'Password:', password);
//   };

//   return (
//     <>
//       <h1>Uncontrolled Component</h1>
//       <form onSubmit={handleForm}>
//         <input ref={userRef} type="text" placeholder="Enter user name" />
//         <br /><br />
//         <input ref={passwordRef} type="password" placeholder="enter user password" />
//         <br /><br />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// }