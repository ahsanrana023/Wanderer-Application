import React from "react";
import "./card.css";
import hotel from "../../src/images/Hotel-1.jpeg";
export default function Card(props) {
  return (
    <div className="card">
      <img src={hotel} className="card--img" alt="Hotel" />
      <div className="card--data">
        <h3 className="card--title">{props.name}</h3>
        <p className="card--location">{props.location}</p>
        <p className="card--description">{props.description}</p>
        <p className="card--price">
          From <span>USD {props.price}</span> per night
        </p>
        <button className="card--book">Book Now</button>
      </div>
    </div>
  );
}