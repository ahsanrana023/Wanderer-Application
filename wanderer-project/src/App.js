import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import Hotels from "./Pages/Hotels";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Guides from "./Pages/Guides";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import TravelEssentials from "./Pages/TravelEssentials";
import Smart from "./Pages/Smart";

function App() {
  return (
    <Router>
      <nav style={{ color: "green" }}>
        <Link to="/" style={{ padding: "10px", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/tours" style={{ padding: "10px", fontWeight: "bold" }}>
          Tours
        </Link>
        <Link to="/hotels" style={{ padding: "10px", fontWeight: "bold" }}>
          Hotels
        </Link>
        <Link to="/smart" style={{ padding: "10px", fontWeight: "bold" }}>
          Smart Tour Recomendations
        </Link>
        <Link to="/login" style={{ padding: "10px", fontWeight: "bold" }}>
          Login
        </Link>
        <Link to="/register" style={{ padding: "10px", fontWeight: "bold" }}>
          Register
        </Link>
        <Link to="/guides" style={{ padding: "10px", fontWeight: "bold" }}>
          Guides
        </Link>
        <Link to="/about" style={{ padding: "10px", fontWeight: "bold" }}>
          About
        </Link>
        <Link
          to="/travelessentials"
          style={{ padding: "10px", fontWeight: "bold" }}
        >
          Travel Essentials
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/guides" element={<Guides />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/travelessentials" element={<TravelEssentials />}></Route>
        <Route path="/smart" element={<Smart />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
