import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HotelDetail from "./Pages/HotelDetail";
import TravelEssentialDetail from "./Pages/TravelEssentialDetail";
import TourDetail from "./Pages/TourDetail";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tours" element={<Tours />}></Route>
        <Route path="/tours/:tourId" element={<TourDetail />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/hotels/:hotelId" element={<HotelDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/guides" element={<Guides />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/travelessentials" element={<TravelEssentials />}></Route>
        <Route
          path="/travelessentials/:travelessentialId"
          element={<TravelEssentialDetail />}
        ></Route>
        <Route path="/smart" element={<Smart />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
