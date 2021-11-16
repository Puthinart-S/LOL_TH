import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n9 from './img/n9.jpg'

const NewsInfo9 = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n9} alt="n9" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.2vh" }}>
                    <h5 style={{ fontSize: 30, fontWeight: "400" }}>กิจกรรม ลิขิตแห่งมนตรา</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", marginBottom: "-0.2vw" }}>ระยะเวลา</p>
                    <p style={{ fontSize: 16 }}>วันอังคารที่ 2 พฤศจิกายน 2564 - วันจันทร์ที่ 8 พฤศจิกายน 2564 เวลา 23.59 น.</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>เข้าร่วมกิจกรรมผ่านทางตัวเกม &gt;&gt; หน้าแรก &gt;&gt; Overview &gt;&gt; ลิขิตแห่งมนตรา</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", marginBottom: "-0.2vw" }}>รายละเอียด</p>
                    <p style={{ fontSize: 16 }}>
                        1. หงายการ์ด โดยใช้ RP! <br />
                        <ul><li style={{ marginBottom: "-0.8vw" }}>รับฟรี 1x Token (Worlds2021) ต่อการหงายการ์ด 1 ครั้ง - มีโอกาสเล็กน้อยที่จะได้รับแจคพ็อต Prestige  K/DA ALL OUT Kai'Sa  + Border ทันที!</li></ul>
                        2. จำเป็นต้องหงายได้ การ์ดเหมือนกันทั้งสองใบจะได้รับรางวัลนั้นๆ<br />
                        3. สามารถรีเซตกระดานเมื่อใดก็ได้ โดยใช้ RP<br />
                        4. พิเศษ! เรามีของแถมให้ เมื่อเล่นครบตามจำนวนครั้งตามที่กำหนดไว้!<br />
                        <ul><li style={{ marginTop: "-0.2vw" }}>หงาย 10 ครั้ง: 1x Orb</li>
                            <li>หงาย 20 ครั้ง: 1x Grabbag</li>
                            <li>หงาย 48 ครั้ง: Prestige  K/DA ALL OUT Kai'Sa  + Border หรือ อื่นๆ (เลือกได้)</li></ul>
                    </p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", marginBottom: "-0.2vw" }}>ข้อควรทราบ</p>
                    <p style={{ fontSize: 16 }}>
                        1. ยิ่งเปิดไพ่มากขึ้น จะยิ่งใช้ RP มากขึ้น:<br />
                        <ul><li style={{ marginBottom: "-0.8vw" }}>0 → 36 → 36 → 54 → 54 → 54 → 72 → 72 → 144 → 144 → 216 → 216 → 216 → 288 → 360 → 432</li></ul>
                        2. ค่าใช้จ่ายในการรีเซ็ตจะสูงขึ้น ตามจำนวนไพ่ที่หงายไปแล้ว:<br />
                        <ul><li style={{ marginBottom: "-0.8vw" }}>70 → 70 → 140 → 140 → 140 → 210 → 210 → 210 → 280 → 280 → 280 → 350 → 350 → 350 → 350 → 350</li></ul>
                        3. หากมีสกินทั้งหมดในหมวดสุ่มสกิน Epic อยู่แล้ว คุณจะได้รับ 5x Orbs แทน<br />
                        4. สามารถกดดูสกินสุ่มที่ได้รับในหน้าประวัติการเล่น<br />
                        5. อีเวนท์นี้ไม่สามารถใช้ได้กับนโยบายการคืนเงินร้านค้าของ League of Legends ดังนั้นโปรดตรวจสอบให้แน่ใจว่าคุณเข้าใจกฎของกติกาก่อนทำการเข้าร่วม!<br />
                        6. สำหรับปัญหาใดๆ ที่เกี่ยวข้องกับอีเวนท์นี้ โปรดติดต่อฝ่าย<a href="https://support.garena.in.th/new/games/faqs/9/league-of-legends">ลูกค้าสัมพันธ์</a>ของบริษัทการีนาประเทศไทย
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

export default NewsInfo9
