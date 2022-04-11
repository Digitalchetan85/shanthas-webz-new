import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const OurProcess = () => {
  return (
    <div>
        <section className="">
            <Container>
                <Row className="g-3 justify-content-center">
                    <Col md={12}>
                        <h2 className="text-center text-primary py-2">Our Process</h2>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>We Design</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Approval</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Development</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Testing & Delivery</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </div>
  )
}

export default OurProcess