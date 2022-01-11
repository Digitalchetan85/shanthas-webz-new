import React from "react";
import TopHeaderPage from "./../Includes/TopHeaderPage";

const DigitalSolutions = () => {
  return (
    <main>
      <section
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Design Solutions"
          link="/digital-solutions"
          linkingPageName="Digital Solutions"
        />
        {/* <TopHeaderPage name="Contact Us"/> */}
      </section>
    </main>
  );
};

export default DigitalSolutions;
