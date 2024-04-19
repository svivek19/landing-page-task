import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import TopPerformer from "./components/TopPerformer";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <TopPerformer />
      <Reviews />
    </>
  );
};

export default App;
