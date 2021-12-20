import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterLogo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-light pt-3 pb-3 pt-md-5 pb-md-5" id="footer">
      <Container>
        <Row>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={FooterLogo}
                alt="Shanths Webz Logo"
                className="img-fluid"
              />
              <h3 className="text-uppercase text-primary pt-2 pb-2">Shanths Webz</h3>

              <address>
                <p>
                  #483, Shop No. 1, 8th Main, 10th Cross
                  HAL 3rd Stage, Jeevan Bhima Nagar, Bengaluru - 560 075.
                  <br />
                  <a href="tel:09513636036">Contact: +91 95136 36036</a>
                  <br />
                  <a href="mailto:business@shanthasdesigns.com">
                    Email: business@shanthaswebz.com
                  </a>
                </p>
              </address>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-primary pt-2 pb-2">Quick Links</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-primary pt-2 pb-2">Our Services</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
              <h3 className="text-primary pt-2 pb-2">Our Services</h3>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
