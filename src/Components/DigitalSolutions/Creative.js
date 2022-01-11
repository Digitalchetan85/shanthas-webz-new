import React from "react";
import TopHeaderPage from "../Includes/TopHeaderPage";

const Creative = () => {
  return (
    <main>
      <section
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Creatives"
          link="/digital-solutions/creatives"
          linkingPageName="Digtial Solutions"
        />
      </section>
    </main>
  );
};

export default Creative;
