import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import './style3.css'
import { BsCaretRightFill } from "react-icons/bs";
import charsec1 from './img3/vayne_0.jpg'
import sp from './img3/Vayne_NightHunter.png'
import s1 from './img3/VayneTumble.png'
import s2 from './img3/VayneSilveredBolts.png'
import s3 from './img3/VayneCondemn.png'
import s4 from './img3/VayneInquisition.png'

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
                        <h6 className="text-secondary" style={{ fontSize: 14 }}>the Night Hunter</h6>
                        <h1 className="text-light" style={{ fontSize: 81 }}>Vayne</h1>
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-100" style={{ position: "relative", top: "-12.5vw" }}>
                        <div className="d-flex justify-content-center align-items-center w-50 mx-5 p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center mx-5">
                                <svg data-v-45896a2b viewBox="0 0 100 100" style={{ fill: "gold" }}><path d="M28.69 27.25h6.94l1.92-6.94-13.41-7.91zM71.31 27.25l4.55-14.85-13.41 7.91 1.92 6.94zM71.31 35.39c-1.43 0-12.21-3.83-12.21-3.83L50 42.34l-9.1-10.78s-10.54 3.83-12.21 3.83c-7.67 0-4.79-7.18-4.79-7.18S4.26 48.32 2.11 64.13c0 0 5.74-8.86 24.42-13.17a26.22 26.22 0 0013.89 12.93c-.72-3.11-1.44-6.71-2.15-10.06a22.36 22.36 0 01-3.84-4.31c.72 0 7.19-.72 8.15-.72.71 2.64 4.55 28.74 4.55 28.74l-7 10.3v10L50 93.82l9.82 4.07V87.6l-7-10.3s3.84-26.1 4.55-28.74c.72 0 7.19.72 8.15.72a16.52 16.52 0 01-3.84 4.31 98.08 98.08 0 00-2.15 10.06 25.33 25.33 0 0013.94-12.93c18.68 4.55 24.42 13.17 24.42 13.17C95.74 48.32 76.1 28 76.1 28s2.88 7.42-4.79 7.42"></path> <path d="M50 2.11l-7.66 21.31h.24L50 33.24l7.42-9.82h.24z"></path></svg>
                                <h6 className="text-light" style={{ fontSize: 10 }}>ตัวละคร</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>มาคส์แมน</h6>
                            </div>
                            <div className="d-flex flex-column justify-content-around align-items-center mx-5">
                                <div className="d-flex justify-content-center align-items-center text-info" style={{ fontSize: 16 }}><BsCaretRightFill /><BsCaretRightFill /><BsCaretRightFill /></div><br />
                                <h6 className="text-light" style={{ fontSize: 10 }}>ระดับความยาก</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>ง่าย / ปานกลาง / ยาก</h6>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-50 p-5">
                            <p className="text-light" style={{ fontSize: 10, width: "17.5vw" }}>Shuna Vayne เป็นนักล่าปีศาจชาว Demacia ที่แสนเลือดเย็นและไร้ซึ่งเมตตา เธออุทิศทั้งชีวิตของเธอเพื่อตามหาและทำลายปีศาจที่ฆาตกรรมครอบครัวของเธอ เธอติดอาวุธด้วยหน้าไม้ที่ข้อมือและความแค้นที่เต็มหัวใจ ช่วงเวลาเดียวที่เธอมีความสุขคือ ตอนที่ได้สังหารผู้ที่ใช้ศาสตร์มืดด้วยการลอบยิงพวกมันด้วยลูกศรเงินจากเงามืด</p>
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
                                    <h5 className="text-light" style={{ fontSize: 16 }}>Night Hunter</h5>
                                    <p className="text-light" style={{ fontSize: 10 }}>Vayne เข้าสู่โหมดไล่ล่าปีศาจ เมื่อ Vayne วิ่งเข้าหาแชมเปี้ยนศัตรู เธอจะมีความเร็วเคลื่อนที่เพิ่มขึ้น 30 หน่วย</p>
                                </>
                                : skill === "1" ?
                                    <>
                                        <p className="text-info" style={{ fontSize: 10 }}>Q</p>
                                        <h5 className="text-light" style={{ fontSize: 16 }}>Tumble</h5>
                                        <p className="text-light" style={{ fontSize: 10 }}>Vayne กลิ้งตัวไปยังตำแหน่งใหม่เพื่อเล็งยิงนัดถัดไป การโจมตีปกติครั้งต่อไปของเธอจะสร้างโบนัสความเสียหาย</p>
                                    </>
                                    : skill === "2" ?
                                        <>
                                            <p className="text-info" style={{ fontSize: 10 }}>W</p>
                                            <h5 className="text-light" style={{ fontSize: 16 }}>Silver Bolts</h5>
                                            <p className="text-light" style={{ fontSize: 10 }}>Vayne ชุบลุกศรของเธอด้วยโลหะหายากซึ่งมีพิษร้ายแรงต่อสิ่งชั่วร้าย ทุกการโจมตีหรือสกิลครั้งที่สามกับเป้าหมายเดิมจะสร้างโบนัสความเสียหายจริงจากพลังชีวิตสูงสุดของเป้าหมาย</p>
                                        </>
                                        : skill === "3" ?
                                            <>
                                                <p className="text-info" style={{ fontSize: 10 }}>E</p>
                                                <h5 className="text-light" style={{ fontSize: 16 }}>Condemn</h5>
                                                <p className="text-light" style={{ fontSize: 10 }}>Vayne ชักหน้าไม้อันใหญ่ที่อยู่บนหลังของเธออกมา แล้วยิงลูกศรยักษ์ไปยังเป้าหมายของเธอเพื่อสร้างความเสียหายและกระแทกศัตรูกระเด็น เมื่อศัตรูกระเด็นเข้าปะทะกับกำแพงหรือสิ่งกีดขวาง ศัตรูจะถูกเสียบทะลุ สร้างโบนัสความเสียหายและสตันพวกเขา</p>
                                            </>
                                            :
                                            <>
                                                <p className="text-info" style={{ fontSize: 10 }}>R</p>
                                                <h5 className="text-light" style={{ fontSize: 16 }}>Final Hour</h5>
                                                <p className="text-light" style={{ fontSize: 10 }}>เตรียมพร้อมสำหรับการเผชิญหน้าครั้งใหญ่ Vayne ได้รับพลังโจมตีเพิ่ม เมื่อใช้ Tumble เธอจะหายตัว คูลดาวน์ของ Tumble ลดลง และได้รับโบนัสความเร็วเคลื่อนที่จาก Night Hunter เพิ่มขึ้น</p>
                                            </>
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        {skill === "0" ?
                            <>
                                <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                    <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_P1.mp4" />
                                </video>
                            </>
                            : skill === "1" ?
                                <>
                                    <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                        <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_Q1.mp4" />
                                    </video>
                                </>
                                : skill === "2" ?
                                    <>
                                        <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                            <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_W1.mp4" />
                                        </video>
                                    </>
                                    : skill === "3" ?
                                        <>
                                            <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                                <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_E1.mp4" />
                                            </video>
                                        </>
                                        :
                                        <>
                                            <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                                <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0067/ability_0067_R1.mp4" />
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

