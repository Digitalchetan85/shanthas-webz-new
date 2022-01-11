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
          desc: "With a website, you just have a few seconds to grab the attention of users and get an advantage over the competition. Inspiring your target market to place their trust and confidence in your company should be a primary goal.",
          link: "/website-solutions/website-development",
        },
        {
          id: 2,
          title: "Landing Page",
          image: cardimage,
          desc: "A well-designed landing page is a perfect gateway to your online presence.A landing page is a single web page that a visitor lands on after clicking through from other digital platforms and is urged to perform an action, such as joining your list or purchasing your items.",
          link: "/website-solutions/landing-page-development",
        },
        {
          id: 3,
          title: "E-Commerce Website Development",
          image: cardimage,
          desc: "Creating an easy-to-use purchasing experience on a website is the ultimate objective of every business.We offer cutting-edge e-commerce website solutions for long-lasting, reliable, and scalable online shops.",
          link: "/website-solutions/e-commerce-website-development",
        },
        {
            id: 4,
            title: "Shopify",
            image: cardimage,
            desc: "Setting up an online shop on Shopify might be a daunting task, but with our help, you'll be able to do it in a short amount of time. No matter how many items you have, the CMS organises them and maximises conversions.",
            link: "/website-solutions/shopify",
          },
      ];
    return (
        <Container>
          <h2 className="text-center pt-2 pb-2 text-primary">Website Solutions</h2>
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
