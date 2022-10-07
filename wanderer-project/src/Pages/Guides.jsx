import React from "react";
import GuideCard from "../components/GuideCard.js";
import data from "../guidedata.js";
import "./guides.css";
export default function Guides() {
  const guides = data.map((item) => {
    return (
      <GuideCard
        key={item.id}
        name={item.name}
        location={item.location}
        phone={item.phone}
        email={item.email}
        isContact={item.isContact}
      />
    );
  });
  return (
    <div>
      <p className="guides--data">Total Guides Found: {data.length}</p>
      <div className="guide">{guides}</div>
    </div>
  );
}
