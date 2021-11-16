import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n5 from './img/n5.jpg'

const NewsInfo5 = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n5} alt="n5" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.2vh" }}>
                    <h5 style={{ fontSize: 30, fontWeight: "400" }}>กิจกรรม ห้องแห่งความลับ</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>ระยะเวลา</p>
                    <p style={{ fontSize: 16, marginTop: "-20px" }}>วันศุกร์ที่ 5 พฤศจิกายน 2564 - วันพฤหัสบดีที่ 11 พฤศจิกายน 2564 เวลา 23.59 น.</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>เข้าร่วมกิจกรรมได้ผ่านทางตัวเกม &gt;&gt; หน้าแรก &gt;&gt; Overview &gt;&gt; ห้องแห่งความลับ</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>รายละเอียด</p>
                    <p style={{ fontSize: 16, marginTop: "-20px" }}>
                        1. ใช้ RP เพื่อสุ่มหนังสือ และรับของรางวัล! <br />
                        2. คุณจะได้รับหนังสือระดับต้น, กลาง หรือเวทมนตร์ ในการสุ่มแต่ละครั้ง<br />
                        3. เก็บรวบรวมหนังสือเวทมนตร์เพื่อนำมาแลกกับของรางวัลที่หลายๆ คนต่างรอคอย อย่างเช่น สกินระดับ Prestige และอีกมากมาย!<br />
                        4. เปิดมาก-ได้รับมาก! คุณจะยังได้รับของรางวัลเพิ่มดังนี้!<br />
                        <ul><li>สุ่ม 15 ครั้ง: 2 Orbs</li>
                        <li>สุ่ม 45 ครั้ง: 1 Pack (Dragon)</li>
                        <li>สุ่ม 80 ครั้ง: หนังสือเวทมนตร์ +1 เล่ม!</li></ul>
                    </p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>ข้อควรทราบ</p>
                    <p style={{ fontSize: 16, marginTop: "-20px" }}>
                        1. สกินที่เปิดขายมาไม่ถึง 3 เดือน จะไม่ถูกรวมเข้ามาในกิจกรรมนี้<br />
                        2. ของรางวัลจากอีเวนท์นี้ไม่เข้าร่วมนโยบายการคืนเงินของ League of Legends โปรดทำความเข้าใจรายละเอียดกิจกรรมทุกครั้งก่อนเล่น<br />
                        3. หากพบปัญหาภายในกิจกรรมสามารถติดต่อ <a href="https://support.garena.in.th/new/games/faqs/9/league-of-legends">แผนกลูกค้าสัมพันธ์ของ Garena</a> ได้เลย<br />
                    </p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default NewsInfo5
