import React from "react";
import tourdata from "../tourdata.js";
import { useParams } from "react-router-dom";
import tourimg from "../images/Mountain.jpg";
const TourDetail = () => {
  const { tourid } = useParams();
  console.log(tourid);
  return (
    <div style={{ backgroundColor: "white", padding: "100px" }}>
      Tour Detail
      <div>
        <h1>Select the tour Package</h1>
        <img src={tourimg} alt="image" style={{ width: "50%" }} />

        <h3 style={{ color: "#498fc4", fontSize: "32px", marginTop: "20px" }}>
          Mushkpuri Top
        </h3>
        <h4>Price from 15$ per day</h4>
        <p
          style={{ marginBottom: "15px", fontSize: "16px", lineHeight: "26px" }}
        >
          Located in Lahore, 27 km from Wagah Border, Rose Palace Hotel, Gulberg
          provides accommodation with a restaurant,
          <br /> free private parking, a fitness centre and a shared lounge
        </p>
        <button
          style={{ padding: "15px", cursor: "pointer" }}
          className="detail-btn"
        >
          Book Tour
        </button>
      </div>
    </div>
  );
};

export default TourDetail;
