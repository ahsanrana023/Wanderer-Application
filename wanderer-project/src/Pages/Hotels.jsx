import React from "react";
import hoteldata from "../hoteldata.js";
import Card from "../components/Card.js";
import { Link } from "react-router-dom";
import "./hotels.css";
export default function Hotels() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    cpassword: "",
  });
  console.log(formData);
  function handleChange(e) {
    e.persist();
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  console.log(hoteldata);
  const cards = hoteldata.map((item) => {
    return (
      <Card
        key={item.id}
        id={item.id}
        location={item.location}
        name={item.name}
        image={item.image}
        price={item.price}
        description={item.description}
      />
    );
  });
  return (
    <div className="hotels">
      <div className="hotel--header">
        <h1 className="hotel--title">Get Hotels on Best Rates</h1>
        <div className="hotel--widgets">
          <div>
            <p className="field--name">Chech-in Date</p>
            <input
              className="fieldbox"
              type="date"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div>
            <p className="field--name">Chech-out Date</p>
            <input
              className="fieldbox"
              type="date"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
          </div>
          <div>
            <p className="field--name">Total Guests</p>
            <input
              className="fieldbox"
              type="number"
              placeholder="No of Guest"
              name="cpassword"
              onChange={handleChange}
              value={formData.cpassword}
            />
          </div>
          <Link to="/hotels" className="btn-explore">
            Explore Now
          </Link>
        </div>
      </div>
      <h1 style={{ color: "#2869b6", textAlign: "center", marginTop: "35px" }}>
        Top Hotels Found: {hoteldata.length}
      </h1>
      <div>{cards}</div>
    </div>
  );
}
