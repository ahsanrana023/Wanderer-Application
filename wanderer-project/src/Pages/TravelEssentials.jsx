import React from "react";
import productdata from "../productdata";
import ProductCard from "../components/ProductCard.js";
import "./travel.css";
function TravelEssentials() {
  const products = productdata.map((item) => {
    return (
      <ProductCard
        key={item.key}
        title={item.title}
        description={item.description}
        price={item.price}
      />
    );
  });
  return (
    <div>
      <div className="product--row">{products}</div>
    </div>
  );
}

export default TravelEssentials;
