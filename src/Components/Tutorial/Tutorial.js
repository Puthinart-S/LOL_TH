import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import bg from './img/bg1.png'
import bg2 from './img/bg2.png'
import bg3 from './img/bg3.png'
import bg4 from './img/bg4.png'
import bg5 from './img/bg5.png'
import bg6 from './img/bg6.png'
import bg7 from './img/bg7.png'
import gamemap from './img/map-lg.png'
import nex from './img/blue_nexus.jpg'
import nex2 from './img/red_nexus.jpg'

import bg8 from './img/skillBg-1.jpg'
import bg9 from './img/skillBg-2.png'


const Tutorial = () => {

    return (
        <Fragment>
            <section style={{ width: "100%", height: "100vh" }}>
                <Parallax pages={5} style={{ top: '0', left: '0', width: "100%", height: "100vh", marginTop: "4.5vw", overflow: "auto" }}>
                    <ParallaxLayer offset={0} speed={0}>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="cloud"
                                src={bg}
                                className="w-100"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="b2"
                                src={bg2}
                                className="w-100"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="b3"
                                src={bg3}
                                className="w-100"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="b4"
                                src={bg4}
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="b5"
                                src={bg5}
                                className="w-100"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="b6"
                                src={bg6}
                                className="w-100"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="b7"
                                src={bg7}
                                className="w-100"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex flex-column align-items-center my-5">
                                <p style={{ fontSize: 18 }} className="fw-bold">เรียนรู้พื้นฐาน</p>
                                <h6 style={{ fontSize: 88, marginTop: "-2vw" }}>ยินดีต้อนรับสู่ Summoner's Rift</h6>
                                <p style={{ fontSize: 12 }}>League เป็นเกมที่ใช้เวลาในการเรียนรู้ เพราะฉะนั้นเราจะมาเริ่มกันที่สิ่งจำเป็นที่คุณควรรู้ก่อน ดูคู่มือด้านล่างเพื่ออ่านสรุปเกี่ยวกับโหมดที่มีผู้เล่นมากที่สุด</p>
                                <a href="#sec2"><button className="btn btn-warning">ไปลุยกันเลย</button></a>
                            </div>
                        </ParallaxLayer>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} speed={0} >
                        <ParallaxLayer offset={0} speed={0}>
                            <div style={{ width: "100vw", height: "100vh" }}>
                                <video autoPlay="autoplay" muted loop>
                                    <source src="https://cdngarenanow-a.akamaihd.net/webth/lol/LoLWebsite/img/tutorial/tutorialVideo.mp4" />
                                </video>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0}>
                            <div className="d-flex flex-column align-items-center justify-content-center text-white" style={{ marginTop: "12.5vw" }}>
                                <h6 style={{ fontSize: 52 }} className="fw-bold">League of Legends คือ</h6>
                                <h6 style={{ fontSize: 52, marginTop: "-1vw" }}>อะไร?</h6>
                                <p style={{ fontSize: 12 }} className="text-center lh-1">League of Legends คือเกมวางแผนแบบทีมที่ทั้ง 2 ทีมจะต้องส่งแชมเปี้ยน 5 ตัวมาต่อสู้กันเพื่อทำลาย<br />ฐานทัพของอีกฝ่าย มีแชมเปี้ยนกว่า 140 ตัวให้เลือกเล่นและโชว์ความสามารถ ใช้พวกมันในการสังหาร<br />ศัตรูและทำลายป้อมปราการเพื่อฝ่าเข้าไปเก็บชัยชนะมาให้กับทีมของคืน</p>
                            </div>
                        </ParallaxLayer>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} speed={0} className="bg-dark">
                        <Parallax pages={4} style={{ top: '0', left: '0'}}>
                            <ParallaxLayer sticky={{ start: 0, end: 4 }} offset={0} speed={0} className="d-flex align-items-center justify-content-end">
                                <img
                                    alt="gamemap"
                                    src={gamemap}
                                    className="w-75 mx-5"
                                />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <img
                                        alt="nex"
                                        src={nex}
                                        className="w-25 mx-5 rounded-circle"
                                        style={{ position: "relative", left: "33vw", top: "3vw" }}
                                    />
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <h1 className="text-light">ทำลายฐาน</h1>
                                    <p className="text-light">Nexus คือใจกลางฐานทัพของทั้งสองทีม ทำลาย Nexus <br />ของศัตรูก่อนอีกฝ่ายเพื่อชนะเกม</p>
                                    <br /><br />
                                    <div className="border border-secondary p-3">
                                        <h4 className="text-light">Nexus ของคุณ</h4>
                                        <p className="text-light">Nexus ของคุณจะเป็นจุดที่มินเนี่ยนจะเกิด ด้านหลัง<br /> Nexus ของคุณคือแท่นจุดเกิด ซึ่งเป็นที่ที่คุณจะสามารถ<br />เติมพลังชีวิตและมานาได้อย่างรวดเร็ว และใช้งานร้านค้าได้</p>
                                    </div>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={1.5} speed={0.5} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <h1 className="text-light">ทำลายฐาน1</h1>
                                    <p className="text-light">Nexus คือใจกลางฐานทัพของทั้งสองทีม ทำลาย Nexus <br />ของศัตรูก่อนอีกฝ่ายเพื่อชนะเกม</p>
                                    <br /><br />
                                    <div className="border border-secondary p-3">
                                        <h4 className="text-light">Nexus ของคุณ</h4>
                                        <p className="text-light">Nexus ของคุณจะเป็นจุดที่มินเนี่ยนจะเกิด ด้านหลัง<br /> Nexus ของคุณคือแท่นจุดเกิด ซึ่งเป็นที่ที่คุณจะสามารถ<br />เติมพลังชีวิตและมานาได้อย่างรวดเร็ว และใช้งานร้านค้าได้</p>
                                    </div>
                                </div>
                            </ParallaxLayer>
                        </Parallax>
                    </ParallaxLayer>

                    <ParallaxLayer offset={3} speed={0} >
                        <ParallaxLayer offset={0} speed={0}>
                            <div className="d-flex flex-column align-items-center justify-content-center text-dark" style={{ marginTop: "4.5vw" }}>
                                <h6 style={{ fontSize: 44 }} className="fw-bold">เพิ่มพลังให้กับแชมเปี้ยนของคุณ</h6>
                                <p style={{ fontSize: 12 }} className="text-center lh-1">แชมเปี้ยนจะแข็งแกร่งขึ้นจากการเก็บค่าประสบการณ์เพื่อเพิ่มเลเวล และเก็บทองเพื่อซื้อไอเทมที่ทรงพลัง<br />ขึ้นเรื่อย ๆ ทั้งสองปัจจัยนี้เป็นสิ่งสำคัญที่จะทำให้คุณเอาชนะคู่ต่อสู้ได้เพื่อเข้าไปทำลายฐานทัพของพวกเขา</p>
                            </div>
                        </ParallaxLayer>
                    </ParallaxLayer>

                    <ParallaxLayer offset={4} speed={0} >
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="bg8"
                                src={bg8}
                                className="w-100 h-100 my-5"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <img
                                alt="bg9"
                                src={bg9}
                                className="w-100 h-100 my-5"
                            />
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0}>
                            <div className="d-flex flex-column align-items-center justify-content-center text-dark" style={{ marginTop: "4.5vw" }}>
                                <h6 style={{ fontSize: 44 }} className="fw-bold">ปลดล็อกสกิลของคุณ</h6>
                                <p style={{ fontSize: 12 }} className="text-center lh-1">แชมเปี้ยนจะมีสกิลหลักอยู่ 5 สกิล เวทพิเศษ 2 แบบ และสามารถสวมใส่ไอเทมได้สูงสุด 7 ชิ้นพร้อมกัน การค้นหาลำดับสกิลที่ควรอัป<br /> เวทซัมมอนเนอร์ที่ใช่ และการออกไอเทมที่ถูกต้องสำหรับแชมเปี้ยนของคุณจะช่วยให้ทีมของคุณประสบความสำเร็จ</p>
                            </div>
                        </ParallaxLayer>
                    </ParallaxLayer>
                </Parallax>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Tutorial
