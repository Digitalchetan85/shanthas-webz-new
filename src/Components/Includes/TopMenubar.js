import React from "react";
import {Navbar, NavDropdown, Container, Nav, Image} from 'react-bootstrap';
import Logo from '../images/logo.png';

const TopMenubar = () => {
  return (
    <div>
      <Navbar collapseOnSelect className="shadow" id="navbar">
        <Container>
          <Navbar.Brand href="/"><Image src={Logo} alt="Shanthas Designs and Prints Logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">About Us</Nav.Link>
              <NavDropdown title="Digital Solutions" id="digital-solutions-dropdown">
                <NavDropdown.Item href="/creatives">Creatives</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logo-designs">Logo Designs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/web-page-design">Web Page Design</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/landing-page-design">Landing Page Design</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/brochure-design">Brochure Design</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Website Solutions" id="wesite-solutions-dropdown">
                <NavDropdown.Item href="/website-development">Website Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/landing-page-development">Landing Page Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/e-commerce-website-development">E-Commerce Website Development</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/shopify">Shopify</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Digital Marketing Solutions" id="digital-marketing-solutions-dropdown">
                <NavDropdown.Item href="/search-engine-optimiztion">Search Engine Optmization</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/search-engine-marketing">Search Engine Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/social-media-marketing">Social Media Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/google-adwords">Google Adwords</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/content-marketing">Content Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/email-marketing">Email Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/whats-app-sms-marketing">Whats App / SMS Marketing</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/app-promotions">App Promotions</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav>
            <Nav>
              {/* <Nav.Link>Download Brochure</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenubar;
