import React from "react";
import { Navbar, NavDropdown, Container, Nav, Image } from "react-bootstrap";
import Logo from "../images/logo.png";

const TopMenubar = () => {
  return (
    <Navbar collapseOnSelect className="shadow sticky-top bg-white" id="navbar">
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="Shanthas Designs and Prints Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <NavDropdown
              title="Digital Solutions"
              id="digital-solutions-dropdown"
            >
              <NavDropdown.Item href="/digital-solutions/creatives">
                Creatives
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-solutions/logo-designs">
                Logo Designs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-solutions/web-page-design">
                Web Page Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-solutions/landing-page-design">
                Landing Page Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-solutions/brochure-design">
                Brochure Design
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Website Solutions"
              id="wesite-solutions-dropdown"
            >
              <NavDropdown.Item href="/website-solutions/website-development">
                Website Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/website-solutions/landing-page-development">
                Landing Page Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/website-solutions/e-commerce-website-development">
                E-Commerce Website Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/website-solutions/shopify">
                Shopify
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Digital Marketing Solutions"
              id="digital-marketing-solutions-dropdown"
            >
              <NavDropdown.Item href="/digital-marketing-solutions/search-engine-optimization">
                Search Engine Optmization
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/search-engine-marketing">
                Search Engine Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/social-media-marketing">
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/pay-per-click">
                Pay Per Click
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/content-marketing">
                Content Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/email-marketing">
                Email Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/whats-app-sms-marketing">
                Whats App / SMS Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/digital-marketing-solutions/app-promotions">
                App Promotions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>{/* <Nav.Link>Download Brochure</Nav.Link> */}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenubar;
