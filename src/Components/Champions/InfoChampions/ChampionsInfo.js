import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import './style.css'
import { BsCaretRight, BsCaretRightFill } from "react-icons/bs";
import charsec1 from './img1/jhin_0.jpg'
import sp from './img1/Jhin_P.png'
import s1 from './img1/JhinQ.png'
import s2 from './img1/JhinW.png'
import s3 from './img1/JhinE.png'
import s4 from './img1/JhinR.png'

const ChampionsInfo = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <div className="w-75 h-75 flex-column d-flex justify-content-center align-items-center">
                    <img src={charsec1} alt="ban" className="img-fluid" style={{ width: "60vw", height: "75vh", position: "relative", top: "7.5vw" }} />
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ position: "relative", top: "-10vw" }}>
                        <h6 className="text-secondary" style={{ fontSize: 14 }}>the Virtuoso</h6>
                        <h1 className="text-light" style={{ fontSize: 81 }}>Jhin</h1>
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-100" style={{ position: "relative", top: "-12.5vw" }}>
                        <div className="d-flex justify-content-center align-items-center w-50 mx-5 p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center mx-5">
                                <svg data-v-45896a2b viewBox="0 0 100 100" style={{ fill: "gold" }}><path d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42"></path> <path d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z"></path></svg>
                                <h6 className="text-light" style={{ fontSize: 10 }}>ตัวละคร</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>มาคส์แมน</h6>
                            </div>
                            <div className="d-flex flex-column justify-content-around align-items-center mx-5">
                                <div className="d-flex justify-content-center align-items-center text-info" style={{ fontSize: 16 }}><BsCaretRightFill /><BsCaretRightFill /><BsCaretRight /></div><br />
                                <h6 className="text-light" style={{ fontSize: 10 }}>ระดับความยาก</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>ง่าย / ปานกลาง / ยาก</h6>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-50 p-5">
                            <p className="text-light" style={{ fontSize: 10, width: "17.5vw" }}>Jhin เป็นอาชญากรโรคจิตที่มีความประณีต เขาเชื่อว่าการฆ่าคือศิลปะ ครั้งหนึ่ง Jhin เป็นนักโทษแห่ง Ionia แต่ได้รับการปลดปล่อยอย่างลับ ๆ จากคนในสภาปกครองของ Ionia ปัจจุบันเขาเป็นฆาตกรต่อเนื่องที่รับหน้าที่เป็นมือสังหารของพวกคาบาล Jhin ใช้ปืนประดุจพู่กัน เขาสร้างความโหดเหี้ยมในเชิงศิลป์โดยทำให้เหยื่อและผู้ชมเกิดความหวาดกลัว เขาติดใจในความโหดร้ายจากการสวมบทบาทในโรงละครอันโหดเหี้ยมของเขา วิธีนี้เป็นวิธีที่เขาชื่นชอบในการมอบสาส์นที่บ่งบอกถึงพลังอำนาจของเขามากที่สุด นั่นคือ ความหวาดกลัว</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center bg-dark">
                <div className="d-flex justify-content-center align-items-center container m-4">
                    <div className="d-flex flex-column justify-content-center align-items-start w-50">
                        <div className="d-flex">
                            <h1 className="text-light">แนะนำสกิล</h1><br />
                        </div>
                        <div className="d-flex justify-content-around align-items-center m-5">
                            <img src={sp} alt="sp" className="img-fluid mx-3" />
                            <img src={s1} alt="s1" className="img-fluid mx-3" />
                            <img src={s2} alt="s2" className="img-fluid mx-3" />
                            <img src={s3} alt="s3" className="img-fluid mx-3" />
                            <img src={s4} alt="s4" className="img-fluid mx-3" />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start w-75">
                            <p className="text-info" style={{ fontSize: 10 }}>สกิลติดตัว</p>
                            <h5 className="text-light" style={{ fontSize: 16 }}>Whisper</h5>
                            <p className="text-light" style={{ fontSize: 10 }}>ปืนของ Jhin ที่มีนามว่า Whisper เป็นอุปกรณ์ละเอียดอ่อนที่ถูกออกแบบมาให้สร้างความเสียหายอย่างมหาศาล มันจะสามารถยิงได้ในอัตราความเร็วการยิงเท่าเดิมตามที่กำหนดไว้ และสามารถยิงติดกันได้เพียง 4 นัด Jhin ได้อัดมนต์ดำลงในกระสุนนัดสุดท้ายที่จะติดคริติคอลอย่างแน่นอน และสร้างโบนัสความเสียหายอย่างรุนแรง เมื่อใดก็ตามที่ Whisper คริติคอล มันจะส่งผลให้ Jhin ได้รับความเร็วเคลื่อนที่เพิ่มขึ้นมหาศาลชั่วครู่</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <iframe src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0202/ability_0202_P1.mp4" title="show" style={{display: "block", width: "35vw", height: "35vh"}}>
                        </iframe>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default ChampionsInfo

