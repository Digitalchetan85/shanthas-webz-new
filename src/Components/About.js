import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import aboutImage from "../Components/images/slider/Slide1.png";

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
            <Col md={12}>
              <h2 className="text-primary">About Shanthas Webz</h2>

              <p>
                Shanthaswebz's core emphasis is digital marketing, which means
                we don't waste time or resources on anything else when it comes
                to designing and implementing a digital marketing strategy for
                our clients. Professionals who are good at things like SEO,
                social media, paid ads, and content marketing makes up our team.
                With over 5 years of experience in the business, we have helped
                several customers increase their traffic, revenue, and overall
                brand value. Our digital marketing expertise enables us to
                assist you in achieving your company's goals in a cost-effective
                and timely manner.
              </p>
              <p>
                People use digital marketing all the time, but the most common
                way is to promote an organization's website. This is where all
                of the organization's online activities happen. We use a mix of
                email marketing, search engine optimization (SEO), pay-per-click
                (PPC) advertising, and social media to get qualified traffic to
                a website, or to get people to come back and make sales.
              </p>
              <p>
                A brand's in-person experiences may be improved with the use of
                technology. On a lot of different platforms, we can use a lot of
                different things to make a brand better and more memorable. This
                is because technology is easy and cheap to use.
              </p>
              <p>
                It is difficult to imagine living without the use of a mobile
                smartphone. It's always with us, so we can use it to form a
                relationship wherever we are. In order to maintain a high level
                of engagement, we make experiences available at all hours of the
                day and night.
              </p>
              <p>
                By blending great ideas with technology, we ensure that you have
                all the ingredients to make the right noises in the market. We
                create differentiated go-to-market processes for your
                organization. We create a systematic approach—both consistent
                and efficient—to captivate your audience.{" "}
              </p>
              <p>
                If you would like to learn more about our services, the sectors
                in which we have worked, and our outcomes, we would be happy to
                arrange a free consultation with you.
              </p>
            </Col>

            {/* <Col md={4} className="align-self-center">
              <div className="text-center">
                <Image src={aboutImage} alt="" className="img-fluid rounded" />
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>

      <section className="pt-3 pb-3 pt-md-5 pb-md-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded" style={{ height: '18rem' }}>
                <h2 className="pb-2 text-center text-primary">Our Mision</h2>
                <div className="text-center text-primary">
                  <i className="fas fa-bullseye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">Our mission is to deliver a wide range of digital solutions to clients of all sizes and from all industry sectors, ranging from small businesses to large multinational organizations. All of our customized online solutions are made with one goal in mind: to help our clients become more visible online while also making sure their businesses grow to the fullest extent possible.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="bg-white shadow p-3 rounded" style={{ height: '18rem' }}>
                <h2 className="pb-2 text-center text-primary">Our Vision</h2>
                <div className="text-center text-primary">
                  <i className="fas fa-eye fs-1 pb-2"></i>
                </div>
                <p className="pt-2 text-center">
                The vision of Shanthaswebz is to assist our customers by using integrated digital experiences to develop meaningful interactions with their target audiences and to build stronger brands. As a company, we want to be known for having a systematic way of making sure each and every customer is happy.
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
