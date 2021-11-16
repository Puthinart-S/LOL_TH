import React, { Fragment, useState, useEffect } from 'react'
import Footer from '../../Footer/Footer'
import './style2.css'
import { BsCaretRightFill } from "react-icons/bs";
import charsec1 from './img2/katarina_0.jpg'
import sp from './img2/Katarina_Passive.png'
import s1 from './img2/KatarinaQ.png'
import s2 from './img2/KatarinaW.png'
import s3 from './img2/KatarinaEWrapper.png'
import s4 from './img2/KatarinaR.png'

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
                        <h6 className="text-secondary" style={{ fontSize: 14 }}>the Sinister Blade</h6>
                        <h1 className="text-light" style={{ fontSize: 81 }}>Katarina</h1>
                    </div>
                    <div className="d-flex justify-content-center align-items-center w-100" style={{ position: "relative", top: "-12.5vw" }}>
                        <div className="d-flex justify-content-center align-items-center w-50 mx-5 p-5">
                            <div className="d-flex flex-column justify-content-center align-items-center mx-5">
                                <svg data-v-45896a2b="" viewBox="0 0 100 100" style={{fill: "gold"}}>    <path d="M56.59 73.71l1.67-2.88c5.75-9.34 5.51-16 3.83-20.59a39.78 39.78 0 01-9.1 16 2 2 0 01-1.43.48H48.2a2.17 2.17 0 01-1.67-.72 39.78 39.78 0 01-9.1-16c-1.68 4.55-1.68 11.26 3.83 20.59l1.68 2.88-3.36 5.75 10.06 17.72L59.7 79.22z"></path> <path d="M73.11 38.74c-3.35-4.31-6-10-6-18.91 0-4.07-3.59-8.15-7.66-12-4.79-4.31-5.75-5.74-9.58-5.74s-4.79 1.43-9.34 5.74c-4.07 3.83-7.66 7.91-7.66 12 0 8.86-2.88 14.6-6 18.68L12.76 52.87 2.23 45.69v12.93S2.47 84 39.58 97.89c0 0-14.13-7.18-16.28-31.13-.24-1.67-.24-9.1-.24-10.29A119.77 119.77 0 0036.71 74c-.72-1.2-1.44-2.64-2.16-3.83-5-10.54-4.07-18.2-1.67-23.47a22.77 22.77 0 017.42-8.86l9.58 9.58 9.58-9.58a22.77 22.77 0 017.42 8.86c2.4 5.27 3.59 12.93-1.43 23.23-.72 1.38-1.45 2.58-2.16 4.07a119.77 119.77 0 0013.65-17.53c0 1.19 0 8.62-.24 10.29-2.39 23.95-16.28 31.13-16.28 31.13C97.53 84 97.77 58.62 97.77 58.62V45.69l-10.53 7.18z"></path> </svg>
                                <h6 className="text-light" style={{ fontSize: 10 }}>ตัวละคร</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>มือสังหาร</h6>
                            </div>
                            <div className="d-flex flex-column justify-content-around align-items-center mx-5">
                                <div className="d-flex justify-content-center align-items-center text-info" style={{ fontSize: 16 }}><BsCaretRightFill /><BsCaretRightFill /><BsCaretRightFill /></div><br />
                                <h6 className="text-light" style={{ fontSize: 10 }}>ระดับความยาก</h6>
                                <h6 style={{ fontSize: 10, color: "gold" }}>ง่าย / ปานกลาง / ยาก</h6>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center w-50 p-5">
                            <p className="text-light" style={{ fontSize: 10, width: "17.5vw" }}>ด้วยการตัดสินใจที่แน่วแน่และความสามารถในการสังหารคู่ต่อสู้ของเธอ Katarina เป็นมือสังหารที่เก่งกาจที่สุดของ Noxus และเป็นลูกสาวคนโตของแม่ทัพในตำนาน Du Couteau เธอมีเทคนิคในการสังหารเป้าหมายอย่างรวดเร็วโดยที่ฝ่ายตรงข้ามไม่ทันได้รู้สึกตัว อุดมการณ์ที่ร้อนแรงของเธอนั้นเป็นแรงผลักดันให้เธอเข้าท้าทายกับเป้าหมายที่ได้รับการคุ้มกันอย่างแน่นหนา แม้ว่ามันอาจจะเสี่ยงที่จะสร้างภัยอันตรายให้แก่พรรคพวกของเธอก็ตาม --- แต่ไม่ว่าจะเป็นภารกิจแบบใดก็ตาม ก็ไม่อาจทำให้ Katarina นั้นลังเลในการทำหน้าที่ท่ามกลางพายุคมมีดอันคมกริบของเธอได้</p>
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
                                    <h5 className="text-light" style={{ fontSize: 16 }}>Voracity</h5>
                                    <p className="text-light" style={{ fontSize: 10 }}>เมื่อใดก็ตามที่แชมเปี้ยนศัตรูตายหลังจากที่โดนความเสียหายจาก Katarina มาไม่นาน คูลดาวน์สกิลที่เหลืออยู่ของเธอจะถูกลดลงอย่างมหาศาลหาก Katarina เก็บมีดได้ เธอจะใช้มันเพื่อฟันศัตรูทั้งหมดที่อยู่รอบข้าง สร้างความเสียหายเวท</p>
                                </>
                                : skill === "1" ?
                                    <>
                                        <p className="text-info" style={{ fontSize: 10 }}>Q</p>
                                        <h5 className="text-light" style={{ fontSize: 16 }}>Bouncing Blade</h5>
                                        <p className="text-light" style={{ fontSize: 10 }}>Katarina ขว้างมีดไปยังเป้าหมายและจะชิ่งไปโดนศัตรูที่อยู่ใกล้ ๆ ก่อนจะตกลงสู่พื้น</p>
                                    </>
                                    : skill === "2" ?
                                        <>
                                            <p className="text-info" style={{ fontSize: 10 }}>W</p>
                                            <h5 className="text-light" style={{ fontSize: 16 }}>Preparation</h5>
                                            <p className="text-light" style={{ fontSize: 10 }}>Katarina ได้รับความเร็วเคลื่อนที่อย่างมาก และโยนมีดขึ้นไปบนอากาศเหนือจุดที่เธอยืนอยู่</p>
                                        </>
                                        : skill === "3" ?
                                            <>
                                                <p className="text-info" style={{ fontSize: 10 }}>E</p>
                                                <h5 className="text-light" style={{ fontSize: 16 }}>Shunpo</h5>
                                                <p className="text-light" style={{ fontSize: 10 }}>Katarina เคลื่อนที่ในพริบตาไปยังเป้าหมาย หากเป้าหมายเป็นศัตรูจะโจมตี หรือไม่อย่างนั้นจะสร้างความเสียหายแก่ศัตรูที่ใกล้ที่สุดแทน</p>
                                            </>
                                            :
                                            <>
                                                <p className="text-info" style={{ fontSize: 10 }}>R</p>
                                                <h5 className="text-light" style={{ fontSize: 16 }}>Curtain Call</h5>
                                                <p className="text-light" style={{ fontSize: 10 }}>Jhin ตั้งท่า แล้วเปลี่ยน Whisper ให้กลายเป็นปืนใหญ่ติดบ่า มันสามารถยิงกระสุนได้ต่อเนื่อง 4 นัด ได้จากระยะอันแสนไกล ที่จะทะลุร่างมินเนี่ยนและสัตว์ป่า แต่จะหยุดเมื่อโดนแชมเปี้ยนคนแรก Whisper จะทำให้ศัตรูที่โดน ติดสโลว์พร้อมสร้างความเสียหายอย่างรุนแรง และกระสุนนัดที่ 4 ที่ถูกสร้างขึ้นมาอย่างสมบูรณ์แบบ จะทรงพลังอย่างไม่น่าเชื่อ และจะติดคริติคอลอย่างแน่นอน</p>
                                            </>
                            }
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        {skill === "0" ?
                            <>
                                <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                    <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_P1.mp4" />
                                </video>
                            </>
                            : skill === "1" ?
                                <>
                                    <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                        <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_Q1.mp4" />
                                    </video>
                                </>
                                : skill === "2" ?
                                    <>
                                        <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                            <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_W1.mp4" />
                                        </video>
                                    </>
                                    : skill === "3" ?
                                        <>
                                            <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                                <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_E1.mp4" />
                                            </video>
                                        </>
                                        :
                                        <>
                                            <video autoPlay="autoplay" muted style={{ display: "block", width: "35vw", height: "35vh" }}>
                                                <source src="https://d28xe8vt774jo5.cloudfront.net/champion-abilities/0055/ability_0055_R1.mp4" />
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

