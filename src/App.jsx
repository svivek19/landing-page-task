import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import TopPerformer from "./components/TopPerformer";
import Reviews from "./components/Reviews";
import Foooter from "./components/Foooter";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <TopPerformer />
      <Reviews />
      <Foooter />
    </>
  );
};

export default App;
