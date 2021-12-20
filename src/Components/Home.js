import React from "react";
import {Col, Row, Container, Cards} from "react-bootstrap";
import MainSlider from "./Includes/MainSlider";

const Home = () => {
  

  return (
    <div>
      <MainSlider />
      <div id="services" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
            <Row>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    
                </Col>
                <Col md={4}>
                    
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
