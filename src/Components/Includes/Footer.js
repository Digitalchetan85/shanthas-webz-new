import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FooterLogo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-dark pt-3 pb-3 pt-md-5 pb-md-5" id="footer">
      <Container>
        <Row>
          <Col md={3}>
            <div className="text-center">
              <Image
                src={FooterLogo}
                alt="Shanths Webz Logo"
                className="img-fluid bg-white"
              />
              <h3 className="text-uppercase text-primary pt-2 pb-2">Shanthas Webz</h3>

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
              
              <h4 className="text-primary pt-2 pb-2"><a href="/digital-solutions">Design Solutions </a></h4>
              <ul>
                <li>
                  <a href="/digital-solutions/creatives">Creatives</a>
                </li>
                <li>
                  <a href="/digital-solutions/logo-designs">Logo Designs</a>
                </li>
                <li>
                  <a href="/digital-solutions/web-page-designs">Web Page Designs</a>
                </li>
                <li>
                  <a href="/digital-solutions/landing-page">Landing Page</a>
                </li>
                <li>
                  <a href="/digital-solutions/brochure-design">Brochure Design</a>
                </li>
                
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
            <h4 className="text-primary pt-2 pb-2"><a href="/website-solutions">Website Solutions </a>
            </h4>
              <ul>
                <li>
                  <a href="/website-solutions/website-development">Website Development</a>
                </li>
                <li>
                  <a href="/website-solutions/lannding-page-development">Landing Page Development</a>
                </li>
                <li>
                  <a href="/website-solutions/e-commerce">E-Commerce Development</a>
                </li>
                <li>
                  <a href="/website-solutions/shopify">Shopify</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={3}>
            <div className="">
            <h4 className="text-primary pt-2 pb-2"><a href="digital-marketing-solutions">Digital Marketing Solutions </a>
            </h4>
              <ul>
                <li>
                  <a href="digital-marketing-solutions/search-engine-optimization">Search Engine Optimization</a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/search-engine-marketing">Search Engine Marketing</a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/social-media-marketing">Social Media Marketing</a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/pay-per-click">Pay Per Click </a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/content-marketing">Content Marketing </a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/email-marketing">E-Mail Marketing </a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/whats-app">WhatsApp/ SMS</a>
                </li>
                <li>
                  <a href="digital-marketing-solutions/app-promotions">App Promotions</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
          <div className="border-top border-light">
            <Row>
              <Col md={12}>
                <p className="text-center text-light m-0 pt-2 pb-1">
                  Copy Rights reserved. Developed by 
                  <a href="https://shanthaswebz.com" target="_blank" rel="noopener noreferrer">
                    Shanthas Webz.
                  </a>
                </p>
              </Col>
            </Row>
          </div>
      </Container>
    </div>
  );
};

export default Footer;
