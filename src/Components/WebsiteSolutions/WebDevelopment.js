import React from "react";
import TopHeaderPage from "./../Includes/TopHeaderPage";
import { Card, Col, Container, Row } from "react-bootstrap";

const WebDevelopment = () => {
  return (
    <main>
      <section
        className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Web Development"
          link="/website-solutions"
          linkingPageName="Website Solutions"
        ></TopHeaderPage>
      </section>
      <section className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <p>
                Do you have a business that you've been running for a long time
                but haven't taken the leap to the internet yet? In order to grow
                your company, you'll need the right resources. Want to build a
                website from the ground up or redesign one that you currently
                have? You can count on Shanthaswebz's experienced web developers
                and designers to deliver web solutions that exceed your
                expectations in terms of performance and usability, regardless
                of the industry or sector for which you need a website.
              </p>
              <p>
                When it comes to achieving your company's objectives and goals,
                our skilled in-house team employs cutting-edge technologies and
                platforms like WordPress. Joomla! Drupal. Laravel. Magento. Core
                PHP language. React. WooCommerce, and others.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-md-5 bg-light">
        <Container>
          <Row className="g-3 justify-content-center">
            <Col md={12}>
              <div className="">
                <h4>
                  Profit from our web development expertise in order to help
                  your company expand:
                </h4>
                <p>
                  Every business should have a website since consumers spend
                  more than eight hours a day on the Internet. There are several
                  advantages to having a website for every sort of business. For
                  the following reasons, you should build a website for your
                  company:
                </p>
              </div>
            </Col>

            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>Promote Your Company</Card.Title>
                    <Card.Text>
                      As far as online promotion goes, there's no substitute for
                      a well-designed and well-maintained website. Marketing
                      through your company's website is faster, more efficient,
                      and more cost-effective than traditional methods of
                      promoting products and services.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>It builds trustworthiness</Card.Title>
                    <Card.Text>
                      Businesses might benefit from having a website because it
                      allows them to be more flexible and trustworthy.
                      Eighty-four percent of American consumers believe that a
                      firm with its own website has more credibility than one
                      with merely a social media profile.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>An Expanded Audience</Card.Title>
                    <Card.Text>
                      Businesses might benefit from having a website because it
                      allows them to be more flexible and trustworthy.
                      Eighty-four percent of American consumers believe that a
                      firm with its own website has more credibility than one
                      with merely a social media profile.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>Aim to Better Serve Your Customers</Card.Title>
                    <Card.Text>
                      In today's fast-paced business world, customers are always
                      looking for immediate answers to their questions or
                      concerns. Customers' problems and suggestions can be
                      addressed more quickly when they use a company website.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Tracking Your Business Can Help You Succeed
                    </Card.Title>
                    <Card.Text>
                      The ability to keep track of your products or services in
                      real-time by analyzing web visitor data is another
                      advantage of having a website. There are ways to see which
                      products are attracting the most interest.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-md-5">
        <Container>
          <Row className="g-3 justify-content-center">
            <h2 className="py-3 text-center">Our Process</h2>
            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>iHear the clients' requirements</Card.Title>
                    <Card.Text>
                      As a first step, get to know the clients. After thoroughly
                      listening to our clients' needs, we make every effort to
                      answer any questions they may have in order to move
                      forward in the best possible way.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      Organizing and Developing the Concept
                    </Card.Title>
                    <Card.Text>
                      Making your website creation process more manageable and
                      streamlined is one of our many specialties. The importance
                      of accomplishing goals while also providing a better
                      end-user experience is usually assumed.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>Design and build the website</Card.Title>
                    <Card.Text>
                      A framework is developed and sent to the customer for
                      assessment and feedback. We will not stop looking for new
                      and creative ways to improve our work until you are
                      completely happy. The design will then be programmed and
                      created when it has been accepted.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>Testing the website for errors</Card.Title>
                    <Card.Text>
                      We test the website on a wide range of devices and employ
                      cutting-edge techniques to ensure that it is responsive,
                      user-friendly, and error-free. In order to produce
                      high-quality projects, we immediately address any issues
                      we find.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col md={4}>
              <div className="">
                <Card>
                  <Card.Body>
                    <Card.Title>The launch</Card.Title>
                    <Card.Text>
                      After ensuring that your website is error-free, we deploy
                      it to your server so that you, your team, and your
                      customers may access it. If there are any problems with
                      performance, please contact us and we'll take care of it
                      for you.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-md-5 bg-light">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h4>Why choose Shanthaswebz?</h4>
                <p>
                  Shanthaswebz is a leading website development firm in India
                  that can assist you in defining your brand and increasing
                  demand for your products and services through a
                  customer-centric and data-driven approach to web design and
                  development. In today's digital world, all facets of digital
                  marketing, including SEO, PPC, and content marketing, are used
                  by Shanthaswebz to produce excellent results for our clients'
                  websites.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default WebDevelopment;
