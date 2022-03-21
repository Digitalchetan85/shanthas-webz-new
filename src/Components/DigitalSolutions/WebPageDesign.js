import React from "react";
import TopHeaderPage from './../Includes/TopHeaderPage';

const WebPageDesign = () => {
  return (
    <main>
      <section
        className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Web Page Designs"
          link="/digital-solutions"
          linkingPageName="Digital Solutions"
        ></TopHeaderPage>
      </section>
    </main>
  );
};

export default WebPageDesign;
