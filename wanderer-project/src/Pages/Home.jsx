import React from "react";
import About from "../components/About";
import CustomerReviews from "../components/CustomerReviews";
import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header title="Discover New Destinations" />
      <About />
      <CustomerReviews />
    </div>
  );
}

export default Home;
