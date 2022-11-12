import React from "react";
import productdata from "../productdata";
import ProductCard from "../components/ProductCard.js";
import Shoe from "../images/Nike-Shoe.png";
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
      <div className="product--header">
        <div className="product--details">
          <h4 style={{ color: "#2898b6" }}>Featured Product</h4>
          <h1 style={{ fontSize: "48px" }}>Nike Air Max 90</h1>
          <h1>50$</h1>
          <p style={{ fontSize: "16px", marginBottom: "15px" }}>
            Nike Shoe Provides you the best experience while running and jogging
            and hiking through the mountians.
            <br /> Get the most favourite product on the store.
          </p>
          <button className="features-btn">Reserve the Product</button>
        </div>
        <div>
          <img src={Shoe} alt="Shoe" className="featured--product" />
        </div>
      </div>
      <h2
        style={{
          backgroundColor: "#fff",
          textAlign: "center",
          paddingTop: "65px",
          fontSize: "46px",
          color: "#2898b6",
        }}
      >
        Get Your Products
      </h2>
      <div className="product--row">{products}</div>
    </div>
  );
}

export default TravelEssentials;
