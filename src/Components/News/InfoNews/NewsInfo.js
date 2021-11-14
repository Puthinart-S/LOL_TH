import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpg'

const NewsInfo = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid"/>
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center">

            </section>
            <Footer />
        </Fragment>
    )
}

export default NewsInfo
