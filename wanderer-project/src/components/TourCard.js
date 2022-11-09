import React from "react";
import "./tourcard.css";
import Mountain from "../images/Mountain.jpg";
import Star from "../images/Star.svg";

export default function TourCard(props) {
  return (
    <div>
      <div className="tourcard">
        <img src={Mountain} alt="Card Mountain" />
        <h5>{props.triptype}</h5>
        <h4>{props.name}</h4>
        <p className="tourcard--headline">{props.description}</p>
        <div className="tourcard--rating">
          <img src={Star} className="rating-star" alt="Star" />
          <img src={Star} className="rating-star" alt="Star" />
          <img src={Star} className="rating-star" alt="Star" />
          <img src={Star} className="rating-star" alt="Star" />
          <img src={Star} className="rating-star" alt="Star" />
          <p>
            {props.rating}{" "}
            <span className="tourcard--reviews">(274 Reviews)</span>
          </p>
        </div>
        <p className="tourcard--price">
          From US$ {props.price} <span className="tourperson">per person</span>
        </p>
      </div>
    </div>
  );
}
