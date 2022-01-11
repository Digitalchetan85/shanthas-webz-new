import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

const TopHeaderPage = (props) => {
    return (
        <Container>
          <Row>
            <Col md={12}>
              <div className="">
                <h2 className="text-center text-white">{props.name}</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a href="/" className="custom">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      <a
                        href={props.link}
                        className="custom"
                      >
                        {props.linkingPageName}
                      </a>
                    </li>
                    <li className="breadcrumb-item">{props.name}</li>
                  </ol>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
    )
}

export default TopHeaderPage
