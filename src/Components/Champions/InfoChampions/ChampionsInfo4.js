import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import './style4.css'
import { BsCaretRightFill } from "react-icons/bs";
import charsec1 from './img4/yasuo_0.jpg'
import sp from './img4/Yasuo_Passive.png'
import s1 from './img4/YasuoQ1Wrapper.png'
import s2 from './img4/YasuoW.png'
import s3 from './img4/YasuoE.png'
import s4 from './img4/YasuoR.png'

const ChampionsInfo = () => {
    const [skill, setSkill] = useState("0");

    const spa = (e) => {
        e.preventDefault();
        setSkill("0");
    }
    useEffect(() => {
        setSkill(skill);
    }, [skill])

    const sq = (e) => {
        e.preventDefault();
        setSkill("1");
    }
    useEffect(() => {
        setSkill(skill);
    }, [skill])

    const sw = (e) => {
        e.preventDefault();
        setSkill("2");
    }
    useEffect(() => {
        setSkill(skill);
    }, [skill])

    const se = (e) => {
        e.preventDefault();
        setSkill("3");
    }
    useEffect(() => {
        setSkill(skill);
    }, [skill])

    const sr = (e) => {
        e.preventDefault();
        setSkill("4");
    }
    useEffect(() => {
        setSkill(skill);
    }, [skill])

    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <div className="w-75 h-75 flex-column d-flex justify-content-center align-items-center">
                    <img src={charsec1} alt="ban" className="img-fluid" style={{ width: "60vw", height: "75vh", position: "relative", top: "7.5vw" }} />
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{ position: "relative", top: "-10vw" }}>
                        <h6 className="text-secondary" style={{ fontSize: 14 }}>the Unforgiven</h6>
                        <h1 className="text-light" style={{ fontSize: 81 }}>Yasuo</h1>
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-100" style={{ position: "relative", top: "-12.5vw" }}>
                        <div className="d-flex justify-content-center align-items-center w-50 mx-5 p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center mx-5">
                                <svg data-v-45896a2b="" viewBox="0 0 100 100" style={{ fill: "gold" }}> <path d="M67.84 56.35v5.5c8.62-8.62 14.37 0 14.37 0C112.14 40.78 90.35 2 90.35 2s-.72 17.24-15.08 27.77v16.52c-.24 4.79-3.84 7.9-7.43 10.06M17.79 62.09s4.07-6.46 10.78-2.63L20.91 48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14 41 17.79 62.09M26.89 83.89l5.51-18.68-.24-.48L19.23 77.9A17.78 17.78 0 017.5 83.17H3l-1 2.39 12 11.5zM92.27 83.89a16.24 16.24 0 01-11.74-5.27L68.8 66.88l3.83 17.72L85.8 98l12-11.49-1-2.4zM55.87 42.7c0 .24-.24.48-.24.71h.72c5.75.48 7.66 2.64 9.1 7.67a9.35 9.35 0 002.39-1.92c1-1 1.68-1.67 1.68-2.63V28.09a2 2 0 00-1.68-1.92l-31.37-5.74H36a2.39 2.39 0 00-2.39 2.39v6.71l24.9 3.35z"></path> <path d="M60.18 54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78 48v-3.87h5.51A4.09 4.09 0 0050.36 41l1-3.35L32.4 35l-5 12.22 11.74 17-5.54 18.47L49.88 98l16.53-15.07s-6.23-28.5-6.23-29M49.88 2.23l-4.79 10.29 4.79 3.83 4.79-3.83zM62.1 9.41l1.43 6h6l2.87-11zM30.25 15.4h6l.24-.72 1.2-5.27-10.3-5z"></path>    </svg>
                                <h6 className="text-light" style={{ fontSize: 10 }}>ตัวละคร</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>นักสู้</h6>
                            </div>
                            <div className="d-flex flex-column justify-content-around align-items-center mx-5">
                                <div className="d-flex justify-content-center align-items-center text-info" style={{ fontSize: 16 }}><BsCaretRightFill /><BsCaretRightFill /><BsCaretRightFill /></div><br />
                                <h6 className="text-light" style={{ fontSize: 10 }}>ระดับความยาก</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>ง่าย / ปานกลาง / ยาก</h6>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-50 p-5">
                            <p className="text-light" style={{ fontSize: 10, width: "17.5vw" }}>Yasuo เป็นชาว Ionia ผู้แน่วแน่ เขาเป็นนักดาบที่แสนจะว่องไว ที่ใช้อากาศในการต่อสู้กับศัตรู เมื่อตอนที่เขายังหนุ่ม Yasuo เป็นคนทะนงตัว เขาถูกกล่าวหาว่าฆ่าอาจารย์ของตัวเอง—แต่เขาก็ไม่สามารถพิสูจน์ความบริสุทธิ์ของตัวเองได้ เขาถูกบังคับให้สังหารพี่ชายของตัวเองเพื่อเป็นการป้องกันตัว และถึงแม้ในที่สุดฆาตกรตัวจริงจะถูกเปิดเผย เขาก็ไม่สามารถให้อภัยสิ่งที่ตัวเองทำลงไปได้ และตอนนี้เขาได้เร่ร่อนไปในดินแดนบ้านเกิดของเขา โดยมีเพียงสายลมเท่านั้น ที่คอยนำทางดาบของเขา</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center bg-black">
                <div className="d-flex justify-content-center align-items-center container m-4">
                    <div className="d-flex flex-column justify-content-center align-items-start w-50">
                        <div className="d-flex">
                            <h1 className="text-light">แนะนำสกิล</h1><br />
                        </div>
                        <div className="d-flex justify-content-around align-items-center m-5">
                            <img src={sp} alt="sp" className="img-fluid mx-3" onClick={spa} />
                            <img src={s1} alt="s1" className="img-fluid mx-3" onClick={sq} />
                            <img src={s2} alt="s2" className="img-fluid mx-3" onClick={sw} />
                            <img src={s3} alt="s3" className="img-fluid mx-3" onClick={se} />
                            <img src={s4} alt="s4" className="img-fluid mx-3" onClick={sr} />
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-start w-75">
                            {skill === "0" ?
                                <>
                                    <p className="text-info" style={{ fontSize: 10 }}>สกิลติดตัว</p>
                                    <h5 className="text-light" style={{ fontSize: 16 }}>Way of the Wanderer</h5>
                                    <p className="text-light" style={{ fontSize: 10 }}>โอกาสคริติคอลของ Yasuo เพิ่มขึ้น นอกจากนี้ Yasuo จะสร้างโล่สายลมขึ้นอย่างต่อเนื่องในขณะที่เขากำลังเคลื่อนที่ แล้วโล่สายลมนี้จะถูกนำมาใช้ป้องกันความเสียหายให้ตอนที่เขาได้รับความเสียหายจากแชมเปี้ยนหรือสัตว์ป่า</p>
                                </>
                                : skill === "1" ?
                                    <>
                                        <p className="text-info" style={{ fontSize: 10 }}>Q</p>
                                        <h5 className="text-light" style={{ fontSize: 16 }}>Steel Tempest</h5>
                                        <p className="text-light" style={{ fontSize: 10 }}>แทงดาบไปด้านหน้า สร้างความเสียหายให้กับศัตรูทุกตัวในเส้นทาง
                                            เมื่อใช้โดน จะได้รับแต้มสะสมของ Gathering Storm เป็นช่วงเวลาหนึ่ง ที่แต้มสะสม 2 แต้ม Steel Tempest จะยิงลมพายุออกไป ซึ่งมันจะกระแทกศัตรูให้ ลอยบนอากาศ
                                            Steel Tempest ถือว่าเป็นการโจมตีปกติและจะได้รับโบนัสต่าง ๆ เหมือนกัน</p>
                                    </>
                                    : skill === "2" ?
                                        <>
                                            <p className="text-info" style={{ fontSize: 10 }}>W</p>
                                            <h5 className="text-light" style={{ fontSize: 16 }}>Wind Wall</h5>
                                            <p className="text-light" style={{ fontSize: 10 }}>สร้างกำแพงที่จะพุ่งออกไปด้านหน้าและปัดป้องการโจมตีระยะไกลทุกอย่างของศัตรู เป็นเวลา 4 วินาที</p>
                                        </>
                                        : skill === "3" ?
                                            <>
                                                <p className="text-info" style={{ fontSize: 10 }}>E</p>
                                                <h5 className="text-light" style={{ fontSize: 16 }}>Sweeping Blade</h5>
                                                <p className="text-light" style={{ fontSize: 10 }}>พุ่งผ่านเป้าหมายศัตรู สร้างความเสียหายเวท ทุกครั้งที่ใช้จะเพิ่มความเสียหายพื้นฐานของการพุ่งครั้งถัดไป โดยเพิ่มได้สูงสุดจำนวนหนึ่ง
                                                    ไม่สามารถกดใช้ใส่ศัตรูตัวเดิมได้ภายในช่วงเวลาหนึ่ง
                                                    ถ้าหากใช้ Steel Tempest ในระหว่างที่กำลังพุ่งอยู่ มันจะจู่โจมเป็นรูปวงกลม</p>
                                            </>
                                            :
                                            <>
                                                <p className="text-info" style={{ fontSize: 10 }}>R</p>
                                                <h5 className="text-light" style={{ fontSize: 16 }}>Last Breath</h5>
                                                <p className="text-light" style={{ fontSize: 10 }}>วาร์ปไปหาแชมเปี้ยนศัตรูที่ลอยอยู่ สร้างความเสียหายกายภาพและจับศัตรูทุกตัวที่ลอยอยู่ไว้บนอากาศ ได้รับค่า Flow จำนวนสูงสุด แต่จะรีเซ็ตแต้มสะสมของ Gathering Storm หลังจากนั้นเป็นช่วงเวลาหนึ่ง การโจมตีคริติคอลของ Yasuo จะได้รับค่าเจาะเกราะโบนัสอย่างมาก</p>
                                            </>
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        {skill === "0" ?
                            <>
                                <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                    <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_P1.mp4" />
                                </video>
                            </>
                            : skill === "1" ?
                                <>
                                    <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                        <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_Q1.mp4" />
                                    </video>
                                </>
                                : skill === "2" ?
                                    <>
                                        <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                            <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_W1.mp4" />
                                        </video>
                                    </>
                                    : skill === "3" ?
                                        <>
                                            <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                                <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_E1.mp4" />
                                            </video>
                                        </>
                                        :
                                        <>
                                            <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                                <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0157/ability_0157_R1.mp4" />
                                            </video>
                                        </>
                        }
                    </div>
                </div>
            </section>
            <section id="three" className="d-flex justify-content-center align-items-center bg-black">
                <div >
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default ChampionsInfo

