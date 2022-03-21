import React from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import cardimage from "../images/home/ui-ux.png";
import cardimage1 from "../images/home/logo.png";
import cardimage2 from "../images/home/web-design.png";
import cardimage3 from "../images/home/landing-page.png";
import { Link } from "react-router-dom";

const HomeDesignSolution = () => {
    const services = [
        {
          id: 1,
          title: "UI/UX Design",
          image: cardimage,
          desc: "As part of your entire marketing strategy, you may manage the visual impression using customized creatives. As a brand, you have the potential to attract, provoke emotions, and leave a lasting imprint in your customer's mind through your visual aesthetic.",
          link: "/digital-solutions/creatives",
        },
        {
          id: 2,
          title: "Logo Designs",
          image: cardimage1,
          desc: "Putting a custom logo on your website, social media, printed materials, and so on, helps your brand get the attention it needs. As the face of your company, a logo must correctly express your company's mission and values.",
          link: "/digital-solutions/logo-designs",
        },
        {
          id: 3,
          title: "Web Page Design",
          image: cardimage2,
          desc: "With a focus on user experience and responsive design, our team creates websites that solve the concerns of our customers and keep them coming back.We create mobile-friendly, aesthetically appealing websites that suit your company and make a lasting impact.",
          link: "/digital-solutions/web-page-design",
        },
        {
          id: 4,
          title: "Landing Page Design",
          image: cardimage3,
          desc: "Landing pages built by our team have all they need to succeed, thanks to our collective efforts and expertise. With the help of professional landing page designers, you can turn your website visitors into a lead generation machine.",
          link: "/digital-solutions/landing-page-design",
        },
        // {
        //   id: 5,
        //   title: "Brochure",
        //   image: cardimage,
        //   desc: "Our brochures are made to stand out from the crowd and lead you to the next step in the process.We produce company profiles, marketing materials, product catalogues, and brochures to help businesses sell more products and services",
        //   link: "/digital-solutions/Brochure-design",
        // },
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
          <h2 className="text-center pt-2 pb-2 text-primary">Design Solutions</h2>
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
                    <Button variant="primary" as={Link} to={service.link}>Read More</Button>
                    <a className="float-end btn btn-outline-primary" href="/contact-us">Contact</a>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </OwlCarousel>
        </Container>
    )
}

export default HomeDesignSolution
