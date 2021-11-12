import React, { Fragment } from 'react'
import { Carousel, Col, Row, Card, Container } from 'react-bootstrap'
import ban1 from './img/Banner1.jpg'
import ban2 from './img/Banner2.jpg'
import ban3 from './img/Banner3.jpg'
import n2 from './img/n1.jpg'
import n3 from './img/n2.jpg'
import n1 from './img/n3.jpg'
import n5 from './img/n4.jpg'
import n4 from './img/n5.jpg'
import n6 from './img/n6.jpg'
import Footer from '../Footer/Footer'


import './style.css'

const Home = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center p-5">
                <Carousel slide fade touch controls={false} pause="hover" className="w-75">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ban3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center p-5">
                <Container className="d-grid justify-content-center align-items-center">
                    <Row>
                        <Col>
                            <Card style={{ width: '15.5rem', border: '0px solid black' }}>
                                <Card.Img variant="top" src={n1} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15.5rem', border: '0px solid black' }}>
                                <Card.Img variant="top" src={n2} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15.5rem', border: '0px solid black' }}>
                                <Card.Img variant="top" src={n3} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Card style={{ width: '15.5rem', border: '0px solid black' }}>
                                <Card.Img variant="top" src={n4} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15.5rem', border: '0px solid black' }}>
                                <Card.Img variant="top" src={n5} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '15.5rem', border: '0px solid black' }}>
                                <Card.Img variant="top" src={n6} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
           <Footer/>
        </Fragment>
    )
}

export default Home
