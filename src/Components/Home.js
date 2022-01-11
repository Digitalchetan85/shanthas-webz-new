import React from "react";
import MainSlider from "./Includes/MainSlider";
import HomeServices from './Includes/HomeServices';
import HomeDesignSolution from './Includes/HomeDesignSolution';
import HomeWebsiteSolutions from './Includes/HomeWebsiteSolutions';
import HomeDigitalMarketingSolutions from './Includes/HomeDigitalMarketingSolutions';

const Home = () => {
  

  return (
    <main>
      <MainSlider />
      <section id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeServices />
      </section>
      <section id="design-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <HomeDesignSolution />
      </section>
      <section id="website-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <HomeWebsiteSolutions />      
      </section>
      <section id="digital-marketing-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <HomeDigitalMarketingSolutions />      
      </section>
    </main>
  );
};

export default Home;
