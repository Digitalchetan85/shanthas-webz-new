import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import cardimage from "../images/slider/Slide1.png";
import { Link } from "react-router-dom";

const HomeDesignSolution = () => {
    const services = [
        {
          id: 1,
          title: "Creatives",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/digital-solutions/creatives",
        },
        {
          id: 2,
          title: "Logo Designs",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/digital-solutions/logo-designs",
        },
        {
          id: 3,
          title: "Web Page Design",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/digital-solutions/web-page-design",
        },
        {
          id: 4,
          title: "Landing Page Design",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/digital-solutions/landing-page-design",
        },
        {
          id: 5,
          title: "Brochure",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/digital-solutions/Brochure-design",
        },
      ];
    return (
        <Container>
          <h2 className="text-center pt-2 pb-2 text-primary">Design Solutions</h2>
          <Row className="justify-content-center">
            {services.map((service) => (
              <Col md={4} key={service.id}>
                <Card className="mt-3 mb-3 shadow-sm">
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
                    <Button variant="primary" as={Link} to={service.link}>Read More</Button>
                    <a className="float-end btn btn-outline-primary" href="/contact-us">Contact</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    )
}

export default HomeDesignSolution
