import React from "react";
import { Card, Container, Button, Image } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/src/owl.carousel.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import cardimage from "../images/home/ppc.png";
import cardimage1 from "../images/home/seo.png";
import cardimage2 from "../images/home/sem.png";
import cardimage3 from "../images/home/smm.png";
import cardimage4 from "../images/home/content-marketing.png";
import { Link } from "react-router-dom";

const HomeDigitalMarketingSolutions = () => {
  const services = [
    {
      id: 1,
      title: "Search Engine Optmization",
      image: cardimage1,
      desc: "In order to boost your organic traffic and maximise your chances of a conversion, we make sure that you are accessible at every stage of a user's search through the search engines.We will use the best SEO strategy to show your website in the organic search results.",
      link: "/digital-marketing-solutions/search-engine-optimization",
    },
    {
      id: 2,
      title: "Search Engine Marketing",
      image: cardimage2,
      desc: "Search engine advertising is one of the most cost-efficient ways to connect your brand with high-converting customers and increase your revenue. SEM advertising allows you to take advantage of consumers’ online behavior and position your ads precisely when they are looking for your brand offerings and are ready to purchase.",
      link: "/digital-marketing-solutions/search-engine-marketing",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      image: cardimage3,
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
      image: cardimage4,
      desc: "Creating helpful, useful, and entertaining content material such as those found on social media, websites and blogs contributes to the strengthening of your company's brand and the placement of your message in front of the relevant people.",
      link: "/digital-marketing-solutions/content-marketing",
    },
    // {
    //   id: 6,
    //   title: "E-mail Marketing",
    //   image: cardimage,
    //   desc: "Email marketing is a strong marketing channel that may be used to promote your company's products or services. It enables you to communicate with your consumers in a more personal manner",
    //   link: "/digital-marketing-solutions/email-marketing",
    // },
    // {
    //   id: 7,
    //   title: "Whats App/SMS - Marketing ",
    //   image: cardimage,
    //   desc: "Brands may offer a unique number as their WhatsApp contact point, allowing them to gain friends with their target demographic on the messaging app. Short messaging service (SMS) is a marketing strategy that utilises text messages sent to mobile phones",
    //   link: "/digital-marketing-solutions/whats-app-sms-marketing",
    // },
    // {
    //   id: 8,
    //   title: "App Promotions",
    //   image: cardimage,
    //   desc: "Mobile app marketing is a way of promoting an app to its target customers while also increasing the engagement and retention of existing app users. The task of promoting your mobile application to a prominent position amid the thousands of other similar applications is challenging.",
    //   link: "/digital-marketing-solutions/app-promotions",
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
      <h2 className="text-center pt-2 pb-2 text-primary">
        Digital Marketing Solutions
      </h2>
      <OwlCarousel options={options}>
        {services.map((service) => (
          <div key={service.id}>
            <Card className="m-3">
              <div className="text-center">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="img-fluid"
                />
              </div>
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text style={{ height: "10rem" }}>{service.desc}</Card.Text>
                <Button variant="primary" as={Link} to={service.link}>
                  Readmore
                </Button>
                <a
                  className="float-end btn btn-outline-primary"
                  href="/contact-us"
                >
                  Contact
                </a>
              </Card.Body>
            </Card>
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
};

export default HomeDigitalMarketingSolutions;
