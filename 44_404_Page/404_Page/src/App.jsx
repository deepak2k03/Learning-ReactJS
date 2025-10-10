import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
export default function App() {
  return (
    <div>
      <NavBar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/login" element={<Login />} />
  <Route path="/*" element={<PageNotFound />} />
</Routes>
    </div>
  );
}
