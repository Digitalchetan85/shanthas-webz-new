import React from "react";
import MainSlider from "./Includes/MainSlider";
import HomeServices from "./Includes/HomeServices";
import HomeDesignSolution from "./Includes/HomeDesignSolution";
import HomeWebsiteSolutions from "./Includes/HomeWebsiteSolutions";
import HomeDigitalMarketingSolutions from "./Includes/HomeDigitalMarketingSolutions";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slide1 from "./images/slider/Slide1.png";

const Home = () => {
  return (
    <main>
      <MainSlider />
      <Container>
        <Row>
          <Col md={8}>
            <div className="pt-3 pb-3 pt-md-5 pb-md-5">
              <h1 className="text-primary text-center text-md-start py-2 fs-2">
                Shanthas Webz
              </h1>
              <p clasName="text-dark">
                Shanthas Webz feels that it is critical to building long-term connections
                with our clients in order to help them in their respective
                businesses. We firmly think that our efforts must have an effect
                both on the web and in the real world. The businesses we deal
                with benefit from our clear and simple strategies, which help
                them remain at the forefront of consumers' minds.
              </p>
              <p>
                Shanthas Webz begin by evaluating the client's present requirements. We use
                the results of the evaluation to create actionable goals for our
                team. Following that, the team gets to work on the project,
                conducting market research and developing the necessary material
                for it to succeed.
              </p>
               <Button variant="primary" className="py-2 my-2" as={Link} to="/about-us">Read more</Button>
            </div>
          </Col>
          <Col md={4} className="align-self-center">
            <div className="text-center">
              <Image src={Slide1} alt="" className="img-fluid"></Image>  
            </div>  
          </Col>
        </Row>
      </Container>

      <section id="services" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <HomeServices />
      </section>
      <section
        id="design-solutions"
        className="pt-3 pb-3 pt-md-5 pb-md-5"
      >
        <HomeDesignSolution />
      </section>
      <section id="website-solutions" className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <HomeWebsiteSolutions />
      </section>
      <section
        id="digital-marketing-solutions"
        className="pt-3 pb-3 pt-md-5 pb-md-5"
      >
        <HomeDigitalMarketingSolutions />
      </section>
    </main>
  );
};

export default Home;
