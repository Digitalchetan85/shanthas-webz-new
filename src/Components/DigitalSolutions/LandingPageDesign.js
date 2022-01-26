import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopHeaderPage from './../Includes/TopHeaderPage';

const LandingPageDesign = () => {
  return (
    <main>
      <section
        className="bg-primary pt-3 pb-3 pt-md-5 pb-md-5"
        id="page-top-header"
      >
        <TopHeaderPage
          name="Landing Page Design"
          link="/digital-solutions"
          linkingPageName="Digital Solutions"
        ></TopHeaderPage>
      </section>
      <section className = "pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={12}>
              <p>When it comes to advertising and marketing, the success of your campaigns relies heavily on the effectiveness of your landing pages. When you use experienced landing page design services, you may increase the effectiveness of your pages. Custom landing page designs from Shanthaswebz may help you increase sales, improve lead quality, and raise your revenue.</p>
              <h3>What is a landing page?</h3>
              <p>The term "landing page" refers to a single web page that is built for a specific marketing or advertising campaign. A "landing page" is where people go when they click on a link in an email or an ad on the web. It's where they end up after clicking on the link.</p>
              <h3>Why does landing page design matter?</h3>
              <p>Landing pages, like all other internet marketing campaigns, must accomplish a lot in a short period of time. It is critical for landing pages to define who your organization is, how trustworthy your offer or information is, and how to take advantage of the offer or share the content with others in a short time period. Your internet ad's closing pitch or the spark that ignites a conversation about your company may be found in the landing page design.</p>
              <p>Additionally, visitors lack the time necessary to double-check that they've arrived at the relevant page. Visitors will leave if your landing pages do not match your online ad creatives or the content of the website.</p>
              <h2 className="text-primary">Designing a High Conversion Landing Page Requires These Elements</h2>
              <h5>Your USP</h5>
              <p>The headline and supporting subheadings of the unique selling proposition should be eye-catching. Your USP is completed by supporting assertions and essential points. In order to captivate visitors and instill trust in your company, we start by learning about your unique selling proposition (USP) and incorporating it into the landing page design.</p>
              <h5>Visual aspects</h5>
              <p>Humans are drawn to pictures and graphics more than any other type of content, and this is why visual aspects play a significant part in boosting conversions. Creative photos and videos have been shown to increase the amount of time visitors spend on a website immensely. Our team of designers uses eye-catching photos and graphics in order to create landing pages with a high conversion rate.</p>
              <h5>Elements of trust</h5>
              <p>Building trust is essential if you want to increase conversions from your landing page. To develop landing pages, we utilize an insight and knowledge framework that takes review ratings, testimonials, awards, and other forms of recognition. This helps to build trust with users and increases conversion rates.</p>
              <h5>Incorporating Benefits</h5>
              <p>Highlighting and outlining all of your benefits, as well as a brief description of the product or service you're offering, is the focus of this section. Our specialty is creating landing pages that include advantages to help consumers become familiar with your product or service.</p>
              <h5>Call-to-action (CTA)</h5>
              <p>Finally, the most critical part of all is the precise call to action. Visitors may be more effectively targeted and converted with the use of call-to-actions (CTAs). The effectiveness of the landing page may be improved by strategically placing and clearly displaying the CTA.</p>
              <h5>The form</h5>
              <p>There is a form on the landing page that shows the conversion funnel, which could be used to sign up for a newsletter, send an email, or subscribe to a service. Our short, basic, and easy-to-fill out forms on the landing page help minimise bounce rates and encourage visitors to provide more information.</p>
            <h3>Summary:</h3>
            <p>There is a reason why every visitor comes to your website. Make sure the landing page design they encounter is visually appealing, with clear details and is thoughtfully created and easy to use. A good landing page designer can help you out with this part. Shanthaswebz can create a product or service landing page with all of the necessary components.</p>
            <p>With the help of our experts, we can create landing pages that highlight your company's unique selling propositions, enticing customers to take action and ultimately generating sales. Our corporate clients benefit from our landing page design service.</p>
            <h2  className="text-primary text-center"> Request a Cost Estimate for the Design of Your Landing Page.</h2>
            <p>It is our goal for you to have a clear understanding of your website's scope, cost, and project duration from the start. Looking forward to meeting with you and discussing your ideas.</p>
            </Col>
          </Row>

        </Container>
      </section>
    </main>
  );
};

export default LandingPageDesign;
