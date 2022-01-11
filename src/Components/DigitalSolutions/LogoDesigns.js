import React from "react";
import TopHeaderPage from "./../Includes/TopHeaderPage";

const LogoDesigns = () => {
  return (
    <main>
      <section
        className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Logo Designs"
          link="/digital-solutions"
          linkingPageName="Digital Solutions"
        ></TopHeaderPage>
      </section>
    </main>
  );
};

export default LogoDesigns;
