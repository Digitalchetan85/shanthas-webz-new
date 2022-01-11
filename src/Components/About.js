import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import aboutImage from "../Components/images/slider/Slide1.png"

const About = () => {
  return (
    <main>
      <section
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
        id="page-top-header"
      >
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">About Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">About Us</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <TopHeaderPage name="About Us" link="/digital-solutions" linkingPageName="Digital Solutions"/>
        <TopHeaderPage name="Contact Us"/> */}
      </section>

      <section id="about-1" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={8}>
              <h2 className="text-primary">About Shanthas Webz</h2>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </Col>

            <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image src={aboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-primary">Our Mision</h2>
                <div className="text-center text-primary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded">
                <h2 className="pb-2 text-center text-primary">Our Vision</h2>
                <div className="text-center text-primary">
                  <i className="fas fa-eye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default About;
