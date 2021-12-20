import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import cardimage from "../images/slider/Slide1.png";
import { Link } from "react-router-dom";

const HomeServices = () => {
    const services = [
        {
          id: 1,
          title: "",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "",
        },
        {
          id: 2,
          title: "",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "",
        },
        {
          id: 3,
          title: "",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "",
        },
      ];
    return (
        <Container>
          <h2 className="text-center pt-2 pb-2 text-primary">Our Services</h2>
          <Row>
            {services.map((service) => (
              <Col md={4} key={service.id}>
                <Card className="mt-3 mb-3">
                  <Card.Img
                    variant="top"
                    src={service.image}
                    alt=""
                    className="img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>
                      {service.desc}
                    </Card.Text>
                    <Button variant="primary" as={Link} to={service.link}>Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    )
}

export default HomeServices
