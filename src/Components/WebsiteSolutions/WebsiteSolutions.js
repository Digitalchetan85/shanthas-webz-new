import React from 'react'
import TopHeaderPage from './../Includes/TopHeaderPage';

const WebsiteSolutions = () => {
    return (
        <main>
          <section
            className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5"
            id="page-top-header"
          >
            <TopHeaderPage
              name="Website Solutions"
              link="/website-solutions"
              linkingPageName="Website Solutions"
            ></TopHeaderPage>
          </section>
        </main>
    )
}

export default WebsiteSolutions
