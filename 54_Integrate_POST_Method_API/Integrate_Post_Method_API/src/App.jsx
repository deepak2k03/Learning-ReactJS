import { NavLink, Route, Routes } from "react-router";
import UserList from "./UserList";
import UserAdd from "./UserAdd";

function App() {
  return (
    <>
      <ul className="nav-list">
        <li>
          <NavLink to="/">List</NavLink>
        </li>
        <li>
          <NavLink to="/add">Add User</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<UserAdd />} />
      </Routes>
    </>
  );
}

export default App;
