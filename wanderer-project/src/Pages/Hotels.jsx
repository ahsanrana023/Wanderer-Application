import React from "react";
import hoteldata from "../hoteldata.js";
import Card from "../components/Card.js";

export default function Hotels() {
  console.log(hoteldata);
  const cards = hoteldata.map((item) => {
    return (
      <Card
        key={item.id}
        location={item.location}
        name={item.name}
        image={item.image}
        price={item.price}
        description={item.description}
      />
    );
  });
  return <div>{cards}</div>;
}
