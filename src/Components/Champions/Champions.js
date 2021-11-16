import React, { Fragment } from 'react'
import './style.css'
import Footer from '../Footer/Footer'
import bgsec1 from './img/bgsec1.jpg'
import c1 from './img/Jhin_0.jpg'
import c2 from './img/Katarina_0.jpg'
import c3 from './img/Vayne_0.jpg'
import c4 from './img/Yasuo_0.jpg'
import c5 from './img/Zed_0.jpg'
import { Link } from 'react-router-dom'


const Champions = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban"  className="img-fluid"/>
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center p-5">
                <Link to="jhin"><div id="con">
                    <img  src={c1} alt="c1" className="w-75"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3" style={{ fontSize: 22, width: "12.20vw" }}>Jhin</div>
                </div></Link>
                <Link to="katarina"><div id="con">
                    <img  src={c2} alt="c2" className="w-75"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3" style={{ fontSize: 22, width: "12.20vw" }}>Katarina</div>
                </div></Link>
                <Link to="vayne"><div id="con">
                    <img  src={c3} alt="c3" className="w-75"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3" style={{ fontSize: 22, width: "12.20vw" }}>Vayne</div>
                </div></Link>
                <Link to="yasuo"><div id="con">
                    <img  src={c4} alt="c4" className="w-75"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3" style={{ fontSize: 22, width: "12.20vw" }}>Yasuo</div>
                </div></Link>
                <Link to="zed"><div id="con">
                    <img  src={c5} alt="c5" className="w-75"/>
                    <div id="txt" className="text-decoration-none text-light bg-dark px-3" style={{ fontSize: 22, width: "12.20vw" }}>Zed</div>
                </div></Link>
            </section>
            <Footer/>
        </Fragment>
    )
}

export default Champions
