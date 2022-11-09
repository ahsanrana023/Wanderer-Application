import React from "react";
import Heading from "../components/Heading.js";
import TourCard from "../components/TourCard.js";
import tourdata from "../tourdata.js";
import "./tours.css";

export default function Tours() {
  console.log(tourdata);
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
      <Heading title="What we have explored for you" />
      <div className="tours">{tours}</div>
    </div>
  );
}
