import React from "react";
import Heading from "../components/Heading.js";
import TourCard from "../components/TourCard.js";
import tourdata from "../tourdata.js";
import { Link } from "react-router-dom";
import "./tours.css";

export default function Tours() {
  console.log(tourdata);
  const disToursarray = tourdata.filter((item) => item.price < 100);
  console.log(disToursarray);
  const disTour = disToursarray.map((item) => {
    return (
      <TourCard
        key={item.key}
        name={item.name}
        description={item.description}
        price={item.price}
        rating={item.rating}
        tag={item.tag}
        triptype={item.tripType}
      />
    );
  });
  const tours = tourdata.map((item) => {
    return (
      <TourCard
        key={item.key}
        name={item.name}
        description={item.description}
        price={item.price}
        rating={item.rating}
        tag={item.tag}
        triptype={item.tripType}
      />
    );
  });
  return (
    <div className="tour-page">
      <div className="tour--header">
        <h1 className="tour--title">
          We Provide You With the Smart Tour Reomendations{" "}
        </h1>
        <Link to="/smart" className="tour--reomendations">
          Get Recomendation
        </Link>
      </div>
      <div style={{ padding: "50px" }}>
        <Heading title="What we have explored for you" />
        <div className="tours">{tours}</div>
        <Heading title="Book your tour under 100$" />
        <div className="tours">{disTour}</div>
      </div>
    </div>
  );
}
