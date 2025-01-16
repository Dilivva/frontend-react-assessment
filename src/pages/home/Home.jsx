import React from "react";
import HeroBanner from "./HeroBanner";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="">
      <HeroBanner />

      <div>
        <Trending />
      </div>
    </div>
  );
};

export default Home;
