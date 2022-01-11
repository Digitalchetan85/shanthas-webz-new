import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import cardimage from "../images/slider/Slide1.png";
import { Link } from "react-router-dom";

const HomeDigitalMarketingSolutions = () => {
    const services = [
        {
          id: 1,
          title: "Search Engine Optmization",
          image: cardimage,
          desc: "In order to boost your organic traffic and maximise your chances of a conversion, we make sure that you are accessible at every stage of a user's search through the search engines.We will use the best SEO strategy to show your website in the organic search results.",
          link: "/digital-marketing-solutions/search-engine-optimization",
        },
        {
          id: 2,
          title: "Search Engine Marketing",
          image: cardimage,
          desc: "",
          link: "/digital-marketing-solutions/search-engine-marketing",
        },
        {
          id: 3,
          title: "Social Media Marketing",
          image: cardimage,
          desc: "Creating a tailored social media marketing plan can help you to increase brand recognition dramatically while also connecting with and building connections with the individuals who are most important to your company's growth.",
          link: "/digital-marketing-solutions/social-media-marketing",
        },
        {
            id: 4,
            title: "Pay Per Click",
            image: cardimage,
            desc: "Creating helpful, useful, and entertaining content material such as those found on social media, websites and blogs contributes to the strengthening of your company's brand and the placement of your message in front of the relevant people",
            link: "/digital-marketing-solutions/pay-per-click",
          },
          {
            id: 5,
            title: "Content Marketing",
            image: cardimage,
            desc: "Creating helpful, useful, and entertaining content material such as those found on social media, websites and blogs contributes to the strengthening of your company's brand and the placement of your message in front of the relevant people.",
            link: "/digital-marketing-solutions/content-marketing",
          },
          {
            id: 6,
            title: "E-mail Marketing",
            image: cardimage,
            desc: "Email marketing is a strong marketing channel that may be used to promote your company's products or services. It enables you to communicate with your consumers in a more personal manner",
            link: "/digital-marketing-solutions/email-marketing",
          },
          {
            id: 7,
            title: "Whats App/SMS - Marketing ",
            image: cardimage,
            desc: "Brands may offer a unique number as their WhatsApp contact point, allowing them to gain friends with their target demographic on the messaging app. Short messaging service (SMS) is a marketing strategy that utilises text messages sent to mobile phones",
            link: "/digital-marketing-solutions/whats-app-sms-marketing",
          },
          {
            id: 8,
            title: "App Promotions",
            image: cardimage,
            desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            link: "/digital-marketing-solutions/app-promotions",
          },
      ];
    return (
        <Container>
          <h2 className="text-center pt-2 pb-2 text-primary">Digital Marketing Solutions</h2>
          <Row className="justify-content-center">
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

export default HomeDigitalMarketingSolutions
