import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer--slogan">
        <h2>Wanderer.</h2>
        <p>We Provide you the best Travel Experiences.</p>
      </div>
      <div className="footer--services">
        <h4>Services</h4>
        <ul className="services--list">
          <li>Hotels</li>
          <li>Guides</li>
          <li>Travel Essentials</li>
          <li>Tours</li>
        </ul>
      </div>
      <div className="footer--email">
        <label>Subscribe to Newsletter</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="input--email"
        />
        <br />
        <button>Subcribe</button>
      </div>
    </div>
  );
}
