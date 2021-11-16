import React, { Fragment } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.css'
import f1 from './img/f1.png'
import f2 from './img/f2.png'
import { AiFillFacebook, AiFillYoutube, AiFillInfoCircle } from 'react-icons/ai'
import { FiList } from 'react-icons/fi'

const Footer = () => {
    return (
        <Fragment>
            <footer className="d-flex justify-content-center align-items-center bg-dark" style={{minHeight: "50px", marginTop: "auto"}}>
                <Container className="d-flex flex-column justify-content-center align-items-center p-5">
                    <Row>
                        <Col>
                            <img src={f1} className="img-fluid w-75" alt="icon" />
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <p className="text-light text-center" style={{ fontSize: 12 }}>Copyright © Garena Online. Trademarks belong to their respective owners. All Rights Reserved. Copyright © Riot Games, Inc. "Riot Games" and "League of Legends" are </p>
                            <p className="text-light text-center" style={{ fontSize: 12 }}>trademarks,service marks and/or registered trademarks throughout the world. All rights reserved.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col id="container">
                            <img src={f2} className="img-fluid" alt="icon2" id="image" />
                            <div id="overlay-text"><Link to="/" className="text-decoration-none" style={{fontSize: 12}}>เล่นฟรี</Link></div>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <a href="https://www.facebook.com/th.lol" target="_blank" rel="noreferrer" className="text-decoration-none text-light" style={{fontSize: 12}}><AiFillFacebook className="text-light" style={{fontSize: 16}}/>&nbsp;Facebook</a>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <a href="https://www.youtube.com/user/LoLPlayinter" target="_blank" rel="noreferrer" className="text-decoration-none text-light" style={{fontSize: 12}}><AiFillYoutube className="text-light" style={{fontSize: 16}}/>&nbsp;Youtube</a>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <a href="https://www.garena.co.th/tos" target="_blank" rel="noreferrer" className="text-decoration-none text-light" style={{fontSize: 12}}><AiFillInfoCircle className="text-light" style={{fontSize: 16}}/>&nbsp;Terms of Service</a>
                        </Col>
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <a href="https://www.garena.co.th/privacy" target="_blank" rel="noreferrer" className="text-decoration-none text-light" style={{fontSize: 12}}><FiList className="text-light" style={{fontSize: 16}}/>&nbsp;Privacy policy</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </Fragment>
    )
}

export default Footer
