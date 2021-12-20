import React from "react";
import MainSlider from "./Includes/MainSlider";
import HomeServices from './Includes/HomeServices';
import HomeDesignSolution from './Includes/HomeDesignSolution';

const Home = () => {
  

  return (
    <div>
      <MainSlider />
      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeServices />
      </div>
      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeDesignSolution />
      </div>
    </div>
  );
};

export default Home;
