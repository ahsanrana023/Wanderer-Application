import React from "react";
import About from "../components/About";
import CustomerReviews from "../components/CustomerReviews";
import Header from "../components/Header";
import Contact from "../components/Contact";
function Home() {
  return (
    <div>
      <Header title="Discover New Destinations" />
      <About />
      <CustomerReviews />
      <div style={{ backgroundColor: "#00a8ff", padding: "80px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "15px",
            fontSize: "32px",
          }}
        >
          Save Time, Save Money
        </h2>
        <h5
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          Sign up and we'll send the best deals to you
        </h5>
        <input
          placeholder="Email"
          type="email"
          style={{
            width: "10%",
            marginLeft: "42%",
            padding: "10px",
            borderRadius: "4px",
            outline: "none",
            border: "none",
          }}
        />
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            marginLeft: "2px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
