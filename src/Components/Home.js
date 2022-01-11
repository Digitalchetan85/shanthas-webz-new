import React from "react";
import MainSlider from "./Includes/MainSlider";
import HomeServices from './Includes/HomeServices';
import HomeDesignSolution from './Includes/HomeDesignSolution';
import HomeWebsiteSolutions from './Includes/HomeWebsiteSolutions';
import HomeDigitalMarketingSolutions from './Includes/HomeDigitalMarketingSolutions';

const Home = () => {
  

  return (
    <div>
      <MainSlider />
      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeServices />
      </div>
      <div id="design-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <HomeDesignSolution />
      </div>
      <div id="website-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeWebsiteSolutions />      
      </div>
      <div id="digital-marketing-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeDigitalMarketingSolutions />      
      </div>
  
      
    </div>
  );
};

export default Home;
