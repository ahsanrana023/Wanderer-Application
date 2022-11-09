import React from "react";
import "./heading.css";
export default function Heading(props) {
  return (
    <div>
      <h1 className="heading">{props.title}</h1>
    </div>
  );
}
