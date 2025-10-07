import { Link } from "react-router";

export default function NavBar() {
    
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
}
