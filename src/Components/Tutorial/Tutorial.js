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

import bg8 from './img/skillBg-1.jpg'
import bg9 from './img/skillBg-2.png'

import sk from './img/skill-1.png'
import sk2 from './img/skill-2.png'
import sk3 from './img/skill-3.png'
import sk4 from './img/skill-4.png'
import sk5 from './img/skill-5.png'
import sk6 from './img/skill-6.png'


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
                        <Parallax pages={4} style={{ top: '0', left: '0' }}>
                            <ParallaxLayer sticky={{ start: 0, end: 4 }} offset={0} speed={0} className="d-flex align-items-center justify-content-end">
                                <img
                                    alt="gamemap"
                                    src={gamemap}
                                    className="w-75 mx-5"
                                />
                            </ParallaxLayer>
                            <ParallaxLayer offset={0} speed={0} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <h1 className="text-light fw-bold">ทำลายฐาน</h1>
                                    <p className="text-light lh-1" style={{ fontSize: 14 }}>Nexus คือใจกลางฐานทัพของทั้งสองทีม ทำลาย Nexus <br />ของศัตรูก่อนอีกฝ่ายเพื่อชนะเกม</p>
                                    <br /><br />
                                    <div className="border border-light w-100 p-3">
                                        <h5 className="text-light">Nexus ของคุณ</h5>
                                        <p className="text-light lh-sm" style={{ fontSize: 14 }}>Nexus ของคุณจะเป็นจุดที่มินเนี่ยนจะเกิด ด้านหลัง<br /> Nexus ของคุณคือแท่นจุดเกิด ซึ่งเป็นที่ที่คุณจะสามารถ<br />เติมพลังชีวิตและมานาได้อย่างรวดเร็ว และใช้งานร้านค้าได้</p>
                                    </div>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={1.5} speed={0.5} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <h1 className="text-light fw-bold">เคลียร์ทางให้ทีม</h1>
                                    <p className="text-light lh-1" style={{ fontSize: 14 }}>ทีมของคุณต้องทำลายทุกอย่างใน 1 เลนเป็นอย่างน้อย<br/> เพื่อที่จะเข้าถึง Nexus ของศัตรู สิ่งที่จะค่อยกั้นขวางทาง<br/>ของคุณคือป้อมปราการและ Inhibitor แต่ละเลนจะมีป้อม<br/>ปราการ 3 ป้อมและ 1 Inhibitor และ Nexus แต่ละฝั่งจะมี<br/>ป้อมปราการขวางอยู่ถึง 2 ป้อม</p>
                                    <br /><br />
                                    <div className="border border-light w-100 p-3">
                                        <h5 className="text-light">ป้อมปราการ</h5>
                                        <p className="text-light lh-sm" style={{ fontSize: 14 }}>ป้อมปราการจะสร้างความเสียหายกับมินเนี่ยนและ<br/>แชมเปี้ยนฝ่ายศัตรู และมอบวิสัยทัศน์ให้กับทีมของมัน<br/> โจมตีสิ่งปลูกสร้างเหล่านี้เวลาที่มีมินเนี่ยนของคุณอยู่ข้าง<br/>หน้าเพื่อหลีกเลี่ยงการถูกป้อมยิง</p>
                                    </div>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={2.5} speed={0.5} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <h1 className="text-light fw-bold">พิชิตผืนป่า</h1>
                                    <p className="text-light lh-1" style={{ fontSize: 14 }}>ตรงช่องว่างระหว่างเลนจะมีป่าอยู่ ซึ่งเป็นที่อยู่ของสัตว์ป่า<br/>และพืชพันธุ์ชนิดต่าง ๆ สัตว์ป่าที่สำคัญที่สุดคือบารอนและ <br/>มังกร การสังหารยูนิตเหล่านี้จะมอบบัฟพิเศษให้กับทีมของ<br/>คุณและสามารถช่วยให้เกมพลิกกลับมาได้</p>
                                    <br /><br />
                                    <div className="border border-light w-100 p-3">
                                        <h5 className="text-light">BARON NASHOR</h5>
                                        <p className="text-light lh-sm" style={{ fontSize: 14 }}>บารอน (Baron Nashor) คือสัตว์ป่าที่แข็งแกร่งที่สุดในป่า<br/> ทีมที่สังหารบารอนจะได้รับโบนัสพลังโจมตี พลังเวท <br/>วาร์ปกลับบ้านแบบเสริมพลัง และความสามารถในการเพิ่ม<br/>พลังให้กับมินเนี่ยนที่อยู่รอบข้าง</p>
                                    </div>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={3} speed={0.5} className="d-flex align-items-center justify-content-start mx-5">
                                <div>
                                    <h1 className="text-light fw-bold">เลือกเลนของคุณ</h1>
                                    <p className="text-light lh-1" style={{ fontSize: 14 }}>การจัดทีมทั่วไปจะจำแนกผู้เล่นในทีมออกเป็น 5 ตำแหน่ง<br/> แต่ละเลนจะต้องใช้ประเภทของแชมเปี้ยนที่แตกต่างกัน<br/> ลองเล่นหลาย ๆ เลนหรือไม่ก็เลือกเลนที่ถนัดแล้วไปให้สุด<br/>ทางดู</p>
                                    <br /><br />
                                    <div className="border border-light w-100 p-3">
                                        <h5 className="text-light">เลนบน</h5>
                                        <p className="text-light lh-sm" style={{ fontSize: 14 }}>แชมเปี้ยนที่อยู่เลนบนจะเป็นประเภทนักสู้ผู้เด็ดเดี่ยว หน้าที่<br/>ของเขาคือการปกป้องเลนและคอยจัดการกับสมาชิกที่<br/>แข็งแกร่งที่สุดของทีมศัตรูเป็นหลัก</p>
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
                        <ParallaxLayer offset={0} speed={0}>
                            <div className="d-flex align-items-center justify-content-around border border-secondary border-1 w-50" style={{ marginTop: "15vw", marginLeft: "25vw" }}>
                                <div className="d-flex justify-content-center w-50 m-2 p-2">
                                    <video autoPlay="autoplay" muted style={{ width: "25vw" }}>
                                        <source src="https://cdngarenanow-a.akamaihd.net/webth/lol/LoLWebsite/img/tutorial/championVideo1.mp4" />
                                    </video>
                                </div>
                                <div className="d-flex justify-content-center flex-column w-50 m-2 p-2">
                                    <div className="d-flex flex-column justify-content-center w-100">
                                        <h6 style={{ fontSize: 16 }} className="fw-bold">เก็บค่าประสบการณ์</h6>
                                        <p style={{ fontSize: 12 }} className="lh-1">
                                            ร้านค้าคือที่ที่คุณจะสามารถซื้อและขายไอเทมด้วยทองที่คุณสะสมมา สามารถใช้งานร้านค้าได้แค่ตอนที่คุณอยู่ในบริเวณจุดเกิดเท่านั้น
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center w-100">
                                        <h6 style={{ fontSize: 16 }} className="fw-bold">เก็บสะสมทอง</h6>
                                        <p style={{ fontSize: 12 }} className="lh-1">
                                            ทองเป็นหน่วยเงินภายในเกมเพื่อใช้ในการซื้อไอเทมสำหรับแชมเปี้ยนของคุณ ทองจะสามารถเก็บสะสมได้จากการสังหารแชมเปี้ยนและยูนิตฝ่ายศัตรู ช่วยเหลือในการสังหาร ทำลายสิ่งปลุกสร้าง และสวมใส่ไอเทมเพิ่มรายรับ
                                        </p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-center w-100">
                                        <h6 style={{ fontSize: 16 }} className="fw-bold">ร้านค้า</h6>
                                        <p style={{ fontSize: 12 }} className="lh-1">
                                            เมื่อแชมเปี้ยนได้รับค่าประสบการณ์ถึงจำนวนหนึ่ง พวกเขาจะอัปเลเวลและสามารถปลดล็อกหรือเพิ่มพลังให้กับสกิลต่าง ๆ และมีค่าพลังพื้นฐานเพิ่มขึ้น เก็บค่าประสบการณ์จากการสังหารแชมเปี้ยนและยูนิตฝ่ายศัตรู ช่วยเหลือในการสังหาร และทำลายสิ่งปลูกสร้างต่าง ๆ
                                        </p>
                                    </div>
                                </div>

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
                                <br />
                                <p style={{ fontSize: 12 }}>แชมเปี้ยนจะมีสกิลหลักอยู่ 5 สกิล เวทพิเศษ 2 แบบ และสามารถสวมใส่ไอเทมได้สูงสุด 7<br /> ชิ้นพร้อมกัน การค้นหาลำดับสกิลที่ควรอัป เวทซัมมอนเนอร์ที่ใช่ และการออกไอเทมที่ถูก<br />ต้องสำหรับแชมเปี้ยนของคุณจะช่วยให้ทีมของคุณประสบความสำเร็จ</p>
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "25vw" }}>
                                <img alt="sk" src={sk} style={{ width: "50vw" }} />
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "25vw" }}>
                                <img alt="sk2" src={sk2} style={{ width: "50vw" }} />
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "25vw" }}>
                                <img alt="sk3" src={sk3} style={{ width: "50vw" }} />
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "26.5vw", marginLeft: "-11.5vw" }}>
                                <img alt="sk4" src={sk4} style={{ width: "20vw" }} />
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "27vw", marginLeft: "14.5vw" }}>
                                <img alt="sk5" src={sk5} style={{ width: "6vw" }} />
                            </div>
                        </ParallaxLayer>
                        <ParallaxLayer offset={0} speed={0} style={{ opacity: 1.0 }}>
                            <div className="d-flex align-items-center justify-content-center" style={{ marginTop: "26.5vw", marginLeft: "35vw" }}>
                                <img alt="sk6" src={sk6} style={{ width: "11vw" }} />
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
