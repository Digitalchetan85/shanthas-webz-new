import React from "react";
import { Card, Container, Button, Image } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import cardimage from "../images/home/design-solutions.png";
import cardimage1 from "../images/home/website-solutions.png";
import cardimage2 from "../images/home/digital-marketing-solutions.png";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      title: "Design Solutions",
      image: cardimage,
      desc: "Graphic design is a field that involves the creation of visual information with the purpose of conveying a message. We offer fresh and innovative design solutions for both companies and individuals.",
      link: "/digital-solutions",
    },
    {
      id: 2,
      title: "Website Solutions",
      image: cardimage1,
      desc: "Using cutting-edge technology, our team of skilled web developers and seasoned digital marketing professionals develop dynamic websites that engage their target audiences and promote them to expand their reach and increase sales.",
      link: "/website-solutions",
    },
    {
      id: 3,
      title: "Digital Marketing Solutions",
      image: cardimage2,
      desc: "We offer solutions to your biggest internet marketing issues and challenges in the digital age. It includes SEO, SEM, SMM, PPC, Content Marketing, E-Mail Marketing, Whatsapp/SMS Marketing, and  App Promotions.",
      link: "/digital-marketing-solutions",
    },
  ];
  return (
    <Container>
      <h2 className="text-center text-primary">Our Services</h2>
      <Row>
        {services.map((service) => (
          <Col md={4} key={service.id}>
            <Card className="mt-3 mb-3">
              <div className="text-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="img-fluid"
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center">{service.title}</Card.Title>
                <Card.Text style={{ height: "8rem" }}>{service.desc}</Card.Text>
                  <Button variant="primary" as={Link} to={service.link}>
                    Read More
                  </Button>
                  <a
                    className="float-end btn btn-outline-primary"
                    href="/contact-us"
                  >
                    Contact
                  </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeServices;
