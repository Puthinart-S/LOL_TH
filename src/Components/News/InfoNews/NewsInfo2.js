import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n2 from './img/n2.jpg'

const NewsInfo2 = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n2} alt="n2" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.5vh" }}>
                    <h5>กิจกรรม เอ้ก E เอ้ก</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p className="text-success" style={{ fontSize: 12 }}>ระยะเวลา</p>
                    <p style={{ fontSize: 12 }}>วันอังคารที่ 9 พฤศจิกายน 2564 - วันจันทร์ที่ 15 พฤศจิกายน 2564 เวลา 23.59 น.</p>
                    <p className="text-success" style={{ fontSize: 12 }}>เข้าร่วมกิจกรรมได้ผ่านทางตัวเกม &gt;&gt; หน้าแรก &gt;&gt; Overview &gt;&gt; เอ้ก E เอ้ก</p>
                    <p className="text-success" style={{ fontSize: 12 }}>รายละเอียด</p>
                    <p style={{ fontSize: 12 }}>
                        1. ใช้ 245 RP เพื่อหมุนไข่! <br />
                        <ul><li>ไข่แต่ละใบจะบรรจุของรางวัลแบบสุ่มไว้อยู่ 1 ชิ้น (สามารถกดดูได้ที่ "ลิสต์ของรางวัล")</li></ul>
                        2. การเปิดไข่แต่ละครั้งจะสะสม Milestone เพื่อนำไปแลกของรางวัลได้อีก!<br />
                        <ul><li>เปิดไข่ Summoner's Rift 5 ครั้ง: แถมฟรี เลือกรับฟรี! สกินระดับ Epic</li>
                            <li>เปิดไข่ Teamfight Tactics 3 ครั้ง: แถมฟรี ไข่ Little Legends</li></ul>
                    </p>
                    <p className="text-success" style={{ fontSize: 12 }}>ข้อควรระวัง</p>
                    <p style={{ fontSize: 12 }}>
                        1. คุณจะได้รับของรางวัลเหล่านี้แทนหากคุณครอบสกินทั้งหมดในอีเวนต์นี้แล้ว<br/>
                        <ul><li>สกินระดับ Normal แบบสุ่ม - 2x Orb</li>
                        <li>สกินระดับ Superior แบบสุ่ม - 3x Orb</li>
                        <li>สกินระดับ Epic แบบสุ่ม - 5x Orb</li>
                        <li>สกินระดับ Legendary แบบสุ่ม - 7x Orb</li></ul>
                        2. คุณจะได้แชมเปี้ยนนั้นๆ ไปเลยฟรีๆ เมื่อได้รับสกินนั้นๆ ! (ไม่มีการชดเชยหากคุณมีแชมเปี้ยนอยู่แล้ว)<br/>
                        3. สกินระดับ Limited, Prestige, Mythical, Legacy, และสกินที่ปล่อยขายในช่วง 3 เดือนที่ผ่านมาจะไม่รวมอยู่ในอีเวนท์<br/>
                        4. ไอเทมทั้งหมดจะถูกส่งตรงเข้าไปยังบัญชีของคุณ นโยบายการคืนเงินจึงไม่มีผลกับอีเวนท์นี้ - กรุณาอ่านกฎรายละเอียดของอีเวนท์ให้ถี่ถ้วนก่อน!<br/>
                        5. หากเกิดปัญหาขึ้น กรุณาติดต่อ Garena Support
                    </p>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default NewsInfo2
