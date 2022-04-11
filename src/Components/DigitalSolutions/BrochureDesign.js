import React from "react";
import TopHeaderPage from "../Includes/TopHeaderPage";
import { Col, Container, Image, Row } from "react-bootstrap";
import tempImage from "./../images/slider/new/image-3.jpg"

const BrochureDesign = () => {
  return (
    <main>
      <section
        className="pt-2 pb-2 pt-md-5 pb-md-5 bg-primary"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Brouchure Designs"
          link="/digital-solutions"
          linkingPageName="Digtial Solutions"
        />
      </section>

      <section className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <p>
                Brochures from Shanthaswebz are created to stand out from the
                crowd and propel you ahead.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-md-5 bg-light">
        <Container>
          <Row>
            <Col md={8}>
              <div className="">
                <h3>What are Brochures?</h3>
                <p>
                  A brochure is a marketing tool that is both concise and
                  effective. Your primary goal is not just to tell customers
                  about your goods and services, but it's also to demonstrate
                  that you have superior alternatives to those offered by your
                  competition. When it comes to economical and efficient
                  marketing, it may be referred to as the classic. As a company,
                  we value honesty and transparency above anything else.
                </p>
                <p>
                  Brochures have a very small amount of information, but they
                  are great at grabbing the attention of the people who read
                  them. Professional brochure designers are needed to produce
                  such a powerful marketing tool because of its ability to
                  influence consumers' perceptions.
                </p>
              </div>
              <div className="">
                <h3>
                  What role do brochures play in the success of your company's
                  brand?
                </h3>
                <p>
                  Brochures are an excellent tool for increasing awareness of
                  your company's brand. You may use it to introduce yourself and
                  explain what you do. In addition, it is an excellent
                  opportunity to inform people on how your products and services
                  may improve their life, therefore generating the much-needed
                  interest in your company. You can count on us to do exactly
                  that.
                </p>
              </div>
            </Col>
            <Col md={4} className="align-self-center">
              <div className="">
                <Image src={tempImage} alt="" className="img-fluid"></Image> 
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-primary">
                  Why Shanthaswebz for brochure design?
                </h2>
                <p>
                  An attractive and well-designed sales brochure conveys a sense
                  of confidence & reliability. Thoughts and concepts that define
                  your brand straight from the cover page; a concept that
                  supports the unique selling proposition of your company; an
                  idea that prompts a reader to take up your brochure and turn
                  through the pages to learn more. And that's the strength of
                  Shanthaswebz, the 21st-century creative brochure design
                  agency.
                </p>
                <p>
                  If you want to stand out from your competitors and maintain a
                  competitive advantage, our innovative and unique specially
                  made brochure designs can help you do just that.
                </p>
                <p>
                  A professional image, engaging copywriting, and creative
                  typography set out to perfection are all provided by the
                  Shanthaswebz team, and the team manages the whole creative
                  process from idea conception to printing. We also create
                  digital brochure designs that may be shared on the internet or
                  sent through email.
                </p>

                <p>
                  Make a good impression on your customers and clients with our
                  business brochures and sales flyers. We are the best flyer and
                  brochure design company in India, and we make them appear
                  wonderful. As a result, our carefully created brochure will
                  increase your sales.
                </p>
                <h5>How does our company design brochure?</h5>
                <p>
                  The creative team at Shanthawebz starts working on brochure
                  design as soon as they get the brief from you. They work hard
                  to make it interesting and educational.
                </p>
                <ul>
                  <li>
                    We use high-quality images from the most reputable image
                    retailers on the internet.
                  </li>
                  <li>
                    Text, graphics, and white space are cleverly used to
                    stimulate reading and comprehension.
                  </li>
                  <li>
                    Content that is particular to your brand and contains all of
                    the facts about your company
                  </li>
                  <li>
                    We use fonts that are up to date and colors that are
                    appropriate for your services or goods
                  </li>
                </ul>
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
                <p>
                  In addition to the visual expression of your message, we help
                  your products make a statement by writing excellent content.
                  Brochures that are up-to-date in style are essential, but we,
                  as a brochure design firm, aim to produce timeless designs as
                  well. In order to create a brochure that effectively
                  communicates your company's mission, vision, and values to
                  your target audience, we use a variety of design tools and
                  techniques from our library.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default BrochureDesign;
