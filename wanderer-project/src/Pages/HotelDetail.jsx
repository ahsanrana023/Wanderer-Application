import React from "react";
import hoteldata from "../hoteldata";
import { useParams } from "react-router-dom";
import hotelimg from "../images/Hotel-2.jpeg";
import "./hoteldet.css";
const HotelDetail = () => {
  const { hotelid } = useParams();
  console.log(hotelid);
  const thisHotel = hoteldata.find((hot) => hot.id === hotelid);
  console.log(thisHotel);
  return (
    <div style={{ backgroundColor: "white", padding: "100px" }}>
      Hotel Detail
      <div>
        <h1 className="title-detail">Book Your Favourite hotel</h1>
        <img src={hotelimg} alt="image" className="detail--img" />
        <h3 style={{ color: "#498fc4", fontSize: "32px", marginTop: "20px" }}>
          Ramada Hotel
        </h3>
        <h4>Price from 15$ per day</h4>
        <p
          style={{ marginBottom: "15px", fontSize: "16px", lineHeight: "26px" }}
        >
          Located in Lahore, 27 km from Wagah Border, Rose Palace Hotel, Gulberg
          provides accommodation with a restaurant,
          <br /> free private parking, a fitness centre and a shared lounge
        </p>
        <input
          type="number"
          placeholder="Enter Total Guest"
          style={{ padding: "15px", display: "block", marginBottom: "20px" }}
        />
        <button
          style={{ padding: "15px", cursor: "pointer" }}
          className="detail-btn"
        >
          Book Hotel
        </button>
      </div>
    </div>
  );
};

export default HotelDetail;
