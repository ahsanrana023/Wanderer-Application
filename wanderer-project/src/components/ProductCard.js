import React from "react";
import "./productcard.css";
import Shoe from "../../src/images/Nike-Shoe.png";
import { Link } from "react-router-dom";
export default function ProductCard(props) {
  return (
    <div>
      <div className="product--card">
        <img src={Shoe} alt="Product Shoes" className="product--img" />
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <h2>{props.price}$</h2>
        <button className="reserve--btn">Reserve The Product</button>
      </div>
    </div>
  );
}
