import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import cardimage from "../images/slider/Slide1.png";
import { Link } from "react-router-dom";

const HomeWebsiteSolutions = () => {
    const services = [
        {
          id: 1,
          title: "Website Development",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/website-solutions/website-development",
        },
        {
          id: 2,
          title: "Landing Page",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/website-solutions/landing-page-development",
        },
        {
          id: 3,
          title: "E-Commerce Website Development",
          image: cardimage,
          desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
          link: "/website-solutions/e-commerce-website-development",
        },
        {
            id: 4,
            title: "Shopify",
            image: cardimage,
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/website-solutions/shopify",
          },
      ];
    return (
        <Container>
          <h2 className="text-center pt-2 pb-2 text-primary">Website Solutions</h2>
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
                    <Button variant="primary" as={Link} to={service.link}>Readmore</Button>
                    <a className="float-end btn btn-outline-primary" href="/contact-us">Contact</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    )
}

export default HomeWebsiteSolutions
