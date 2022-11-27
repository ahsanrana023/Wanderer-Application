import React from "react";
import "./card.css";
import { Link } from "react-router-dom";
import hotel from "../../src/images/Hotel-1.jpeg";
export default function Card(props) {
  return (
    <div className="hotelcard">
      <img src={hotel} className="hotelcard--img" alt="Hotel" />
      <div className="hotelcard--data">
        <h3 className="card--title">
          <Link
            to={`/hotels/${props.id}`}
            style={{ textDecoration: "none", color: "#6896b9" }}
          >
            {props.name}
          </Link>
        </h3>
        <p className="card--location">{props.location}</p>
        <p className="card--description">{props.description}</p>
        <p className="card--price">
          From <span>USD {props.price}</span> per night
        </p>
        <Link to={`/hotels/${props.id}`} className="card--book">
          Book Now
        </Link>
      </div>
    </div>
  );
}
