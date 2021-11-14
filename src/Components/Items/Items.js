import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import './style.css'
import bgsec1 from './img/bgsec1.jpg'
import i1 from './img/i1.png'
import i2 from './img/i2.png'
import i3 from './img/i3.png'
import i4 from './img/i4.png'
import i5 from './img/i5.png'

const Items = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban"  className="img-fluid"/>
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center p-5">
                <div id="con" className="mx-3">
                    <img  src={i1} alt="c1" className="w-100"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3 text-center" style={{ fontSize: 10, width: "5vw", height: "4vh" }}>Boots</div>
                </div>
                <div id="con" className="mx-3">
                    <img  src={i2} alt="c2" className="w-100"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3 text-center" style={{ fontSize: 10, width: "5vw", height: "4vh" }}>Faerie Charm</div>
                </div>
                <div id="con" className="mx-3">
                    <img  src={i3} alt="c3" className="w-100"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3 text-center" style={{ fontSize: 10, width: "5vw", height: "4vh" }}>Rejuvenation Bead</div>
                </div>
                <div id="con" className="mx-3">
                    <img  src={i4} alt="c4" className="w-100"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3 text-center" style={{ fontSize: 10, width: "5vw", height: "4vh" }}>Giant's Belt</div>
                </div>
                <div id="con" className="mx-3">
                    <img  src={i5} alt="c5" className="w-100"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3 text-center" style={{ fontSize: 10, width: "5vw", height: "4vh" }}>Cloak of Agility</div>
                </div>
            </section><br/><br/>
            <Footer />
        </Fragment>
    )
}

export default Items
