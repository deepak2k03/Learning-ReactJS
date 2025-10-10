import { Link, useParams } from "react-router-dom"; // Assuming "react-router" is shorthand for "react-router-dom"

export default function UserDetail() {
  // 1. Get the parameters object from the URL
  const paramsData = useParams();
  
  // 2. Log the specific ID parameter to the console (for debugging)
  console.log(paramsData.id);

  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Detail Page</h1>
      
      {/* 3. Display the retrieved ID on the screen */}
      <h2>User id is : {paramsData.id}</h2>
      
      {/* 4. Provide a navigation link back to the user list */}
      <h3><Link to="/users">Back</Link></h3>
    </div>
  )
}