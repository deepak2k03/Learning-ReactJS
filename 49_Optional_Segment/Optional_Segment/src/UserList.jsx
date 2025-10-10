import { Link } from "react-router-dom"; // Assuming "react-router" is shorthand for "react-router-dom"

export default function UserList() {
  // Mock data representing a list of users
  const userData = [
    { id: 1, name: "Anil" },
    { id: 2, name: "Sam" },
    { id: 3, name: "Sidhu" },
    { id: 4, name: "Peter" },
    { id: 5, name: "Bruce" },
    { id: 6, name: "Tony" },
  ];

  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User List Page</h1>
      {userData.map((item) => (
        <div key={item.id}>
          <h4>
            <Link to={"/users/"+item.id}>{item.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
}
