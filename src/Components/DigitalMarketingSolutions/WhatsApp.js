import React from "react";
import TopHeaderPage from "./../Includes/TopHeaderPage";
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const WhatsApp = () => {
  return (
    <main>
      <section
        className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5"
        id="page-top-header"
      >
        <TopHeaderPage
          name="WhatsApp/SMS Marketing"
          link="/digital-marketing-solutions"
          linkingPageName="Digital Marketing Solutions"
        ></TopHeaderPage>
      </section>
      <section className = "pt-3 pb-3 pt-md-5 pb-md-5">
          <Container>
            <Row>
                <Col md={12}>
                  
                </Col>
            </Row>
          </Container>

      </section>
    </main>
  );
};

export default WhatsApp;
