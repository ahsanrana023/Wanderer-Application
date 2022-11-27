import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer--slogan">
        <h2>Wanderer.</h2>
        <p>We Provide you the best Travel Experiences.</p>
      </div>
      <div className="footer--services">
        <h2>Services</h2>
        <ul className="services--list">
          <li>
            <Link to="/hotels" className="footer--links">
              Hotels
            </Link>
          </li>
          <li>
            <Link to="/guides" className="footer--links">
              Guides
            </Link>
          </li>
          <li>
            <Link to="/travelessentials" className="footer--links">
              Travel Essentials
            </Link>
          </li>
          <li>
            <Link to="/tours" className="footer--links">
              Tours
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer--email">
        <label style={{ fontSize: "10px" }}>Subscribe to Newsletter</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          className="input--email"
          style={{
            marginBottom: "6px",
          }}
        />
        <br />
        <button>Subcribe</button>
      </div>
    </div>
  );
}
