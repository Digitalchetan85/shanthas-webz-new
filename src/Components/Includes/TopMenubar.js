import React from "react";
import { Navbar, NavDropdown, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const TopMenubar = () => {
  return (
    <Navbar collapseOnSelect className="shadow sticky-top bg-white" id="navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} alt="Shanthas Designs and Prints Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
            <NavDropdown
              title="Digital Solutions"
              id="digital-solutions-dropdown"
            >
              <NavDropdown.Item as={Link} to="/digital-solutions/creatives">
                Creatives
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-solutions/logo-designs">
                Logo Designs
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-solutions/web-page-design">
                Web Page Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-solutions/landing-page-design">
                Landing Page Design
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-solutions/brochure-design">
                Brochure Design
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Website Solutions"
              id="wesite-solutions-dropdown"
            >
              <NavDropdown.Item as={Link} to="/website-solutions/website-development">
                Website Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/website-solutions/landing-page-development">
                Landing Page Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/website-solutions/e-commerce-website-development">
                E-Commerce Website Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/website-solutions/shopify">
                Shopify
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Digital Marketing Solutions"
              id="digital-marketing-solutions-dropdown"
            >
            <NavDropdown.Item as={Link} to="/digital-marketing-solutions/digital-marketing">
              Digital Marketing
            </NavDropdown.Item>
            <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/search-engine-optimization">
                Search Engine Optmization
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/search-engine-marketing">
                Search Engine Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/social-media-marketing">
                Social Media Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/pay-per-click">
                Pay Per Click
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/content-marketing">
                Content Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/email-marketing">
                Email Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/whats-app-sms-marketing">
                Whats App / SMS Marketing
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/digital-marketing-solutions/app-promotions">
                App Promotions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Nav>{/* <Nav.Link>Download Brochure</Nav.Link> */}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopMenubar;
