import React, {useState} from "react";
import { Col, Container, Row, Button, Image } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import contactImage from "../Components/images/slider/Slide1.png"

const Contact = () => {
  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    schedule: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = (values) => {
    const data = values;

    axios
      .get(
        "http://digitalagilityinstitute.com/email-payment-form.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone +
          "&schedule=" +
          data.schedule
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };


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
                <h2 className="text-center text-white">Contact Us</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">Contact Us</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
        {/* <TopHeaderPage name="About Us" link="/digital-solutions" linkingPageName="Digital Solutions"/>
        <TopHeaderPage name="Contact Us"/> */}
      </section>

      <section id="contact-1" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-center rounded p-3">
                <i class="fas fa-map-marker-alt fs-3 p-3 text-primary bg-white border border-primary rounded-circle"></i>

                <address className="mt-3">
                  <p>
                    #483, Shop No. 1, 8th Main, 10th Cross HAL 3rd Stage, Jeevan
                    Bhima Nagar, Bengaluru - 560 075.
                  </p>
                </address>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center rounded p-3">
                <i class="fas fa-phone-volume fs-3 p-3 text-primary bg-white border border-primary rounded-circle"></i>

                <address>
                  <p>
                    <a href="tel:09513636036">+91 95136 36036</a>
                  </p>
                </address>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center rounded p-3">
                <i class="fas fa-envelope fs-3 p-3 text-primary bg-white border border-primary rounded-circle"></i>

                <address>
                  <p>
                    <a href="mailto:business@shanthasdesigns.com">
                      business@shanthaswebz.com
                    </a>
                  </p>
                </address>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact-2" className="pt-3 pb-3 pt-md-5 pb-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={6} className="align-self-center">
              <Image src={contactImage} alt="" className="img-fluid" />
            </Col>
            <Col md={6}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form className="p-3 shadow-sm bg-light">
                    <h2 className="text-primary"> Get in Touch with us</h2>
                  <Row className="mb-3 rounded">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <Field
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="name" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <Field
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="email" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="mb-3">
                        <label htmlFor="phone" className="form-label">
                          Phone No
                        </label>
                        <Field
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="phone" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col md={12}>
                      <div className="">
                        <Button className="btn btn-primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
