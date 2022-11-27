import React from "react";
import productdata from "../productdata";
import { useParams } from "react-router-dom";
import productimg from "../images/Nike-Shoe.png";
const TravelEssentialDetail = () => {
  const params = useParams();

  return (
    <div style={{ backgroundColor: "#fff", padding: "150px" }}>
      <div>
        <h1 style={{ color: "#498fc4" }}>Buy your favourite Product</h1>
        <img src={productimg} alt="image" style={{ width: "50%" }} />

        <h3 style={{ color: "#498fc4", fontSize: "32px", marginTop: "20px" }}>
          Nike Shoe
        </h3>
        <h4 style={{ color: "#498fc4", fontSize: "22px" }}>100$</h4>
        <p
          style={{ marginBottom: "15px", fontSize: "16px", lineHeight: "26px" }}
        >
          Nike shoes are lightweight and durable – Despite provides exceptional
          comfort, flexibility, of Nike shoes are very light.
          <br /> If you buy a pair of Nike shoes for specific sports, you will
          definitely reap the benefits for a long time.
        </p>
        <button
          style={{ padding: "15px", cursor: "pointer" }}
          className="detail-btn"
        >
          Reserve the Product
        </button>
      </div>
    </div>
  );
};

export default TravelEssentialDetail;
