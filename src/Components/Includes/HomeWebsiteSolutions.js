import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import cardimage from "../images/home/website-development.png";
import cardimage1 from "../images/home/landing-page.png";
import cardimage2 from "../images/home/e-commerce.png";
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
          image: cardimage1,
          desc: "A well-designed landing page is a perfect gateway to your online presence.A landing page is a single web page that a visitor lands on after clicking through from other digital platforms and is urged to perform an action, such as joining your list or purchasing your items.",
          link: "/website-solutions/landing-page-development",
        },
        {
          id: 3,
          title: "E-Commerce Website Development",
          image: cardimage2,
          desc: "Creating an easy-to-use purchasing experience on a website is the ultimate objective of every business.We offer cutting-edge e-commerce website solutions for long-lasting, reliable, and scalable online shops.",
          link: "/website-solutions/e-commerce-website-development",
        },
        // {
        //     id: 4,
        //     title: "Shopify",
        //     image: cardimage,
        //     desc: "Setting up an online shop on Shopify might be a daunting task, but with our help, you'll be able to do it in a short amount of time. No matter how many items you have, the CMS organises them and maximises conversions.",
        //     link: "/website-solutions/shopify",
        //   },
      ];

      const options = {
        rewind: true,
        dots: true,
        autoplay: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
            loop: false,
          },
        },
      };

    return (
        <Container>
          <h2 className="text-center pt-2 pb-2 text-primary">Website Solutions</h2>
          <OwlCarousel options={options}>
            {services.map((service) => (
              <div key={service.id}>
                <Card className="m-3 shadow-sm" style={{ height: '30rem' }}>
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
              </div>
            ))}
          </OwlCarousel>
        </Container>
    )
}

export default HomeWebsiteSolutions
