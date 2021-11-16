import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n7 from './img/n7.jpg'

const NewsInfo7 = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n7} alt="n7" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.2vh" }}>
                    <h5 style={{ fontSize: 30, fontWeight: "400" }}>กิจกรรม สมดุลแห่งมังกร</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", marginBottom: "-0.2vw" }}>ระยะเวลากิจกรรม</p>
                    <p style={{ fontSize: 16 }}>วันศุกร์ที่ 29 ตุลาคม 2564 - วันพฤหัสบดีที่ 4 พฤศจิกายน 2564 เวลา 23.59 น.</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>เข้าสู่หน้ากิจกรรมได้ผ่านทางตัวเกม &gt;&gt; หน้าแรก &gt;&gt; Overview &gt;&gt; สมดุลแห่งมังกร</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", marginBottom: "-0.2vw" }}>รายละเอียด</p>
                    <p style={{ fontSize: 16 }}>
                        1. บาลานซ์พลังระหว่าง Truth (ความจริง) และ Dream (ความฝัน) เพื่อรับรางวัลแห่งมังกร! <br />
                        2. เพื่อเริ่มต้น - ผู้เล่นต้องเลือกของรางวัลทั้งสองฝั่งของตราชั่ง<br />
                        3. ใช้ RP เพื่อสุ่มรับพลัง 1-5 แต้มจากตราชั่ง และแน่นอน นักรบมังกร Volibear มีของรางวัลมอบให้ทุกครั้งที่สุ่มอยู่แล้ว<br />
                        <ul style={{ marginTop: "-0.2vw", marginBottom: "-0.2vw" }}><li>RP ที่ใช้ในการสุ่มแต่ละครั้งจะเพิ่มขึ้น: 70/140/210/280/350/420/490/560/630/700 RP</li>
                        <li>เมื่อฝั่งใดก็ตามได้ทำการสุ่มครบ 10 ครั้ง ผู้เล่นจะได้รับสกินจากฝั่งนั้นไปทันที!</li></ul>
                        4. รางวัลที่จะได้รับจากการสุ่มแต่ละครั้ง<br />
                        <ul style={{ marginTop: "-0.2vw", marginBottom: "-0.2vw" }}><li>ไอเทม Hextech มูลค่า 45 - 1750 RP</li>
                        <li>สกิน Basic - สกิน Epic ล่าสุด (Dragonmancer)</li></ul>
                        5. ถ้าหากคุณบาลานซ์ทั้ง 2 ฝั่งได้ จะได้รับไอเทมทั้งสองฝั่งจากปลายตราชั่งที่คุณเลือกไว้ทั้งคู่เลย!<br />
                        <ul><li>เมื่อคุณรับรางวัลแล้วตราชั่งจะถูกรีเซตที่ 0 และคุณต้องเลือกรางวัลปลายตราชั่งใหม่อีกครั้งค่ะ</li></ul>
                    </p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", marginBottom: "-0.2vw" }}>ข้อควรรู้</p>
                    <p style={{ fontSize: 16 }}>
                        1. สกิน Prestige, Limited, และ Legacy Skins จะไม่ถูกรวมอยู่ในกิจกรรมนี้<br />
                        2. กิจกรรมนี้ไม่อยู่ในนโยบายการคืนเงิน ดังนั้นกรุณาอ่านรายละเอียดให้ถี่ถ้วนก่อนเข้าร่วมกิจกรรม<br />
                        3. หากเกิดปัญหาในการเข้าร่วมกิจกรรม กรุณาติดต่อ <a href="https://support.garena.in.th/new/games/faqs/9/league-of-legends">Garena Support</a><br />
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

export default NewsInfo7
