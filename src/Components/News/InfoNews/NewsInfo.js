import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n1 from './img/n1.jpg'

const NewsInfo = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n1} alt="n1" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.5vh" }}>
                    <h5>กิจกรรม หุบเขาจักรกล</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p className="text-success" style={{ fontSize: 12 }}>ระยะเวลา</p>
                    <p style={{ fontSize: 12 }}>วันศุกร์ที่ 12 พฤศจิกายน 2564 - วันพฤหัสบดีที่ 18 พฤศจิกายน 2564 เวลา 23.59 น.</p>
                    <p className="text-success" style={{ fontSize: 12 }}>เข้าร่วมกิจกรรมได้ผ่านทางตัวเกม &gt;&gt; หน้าแรก &gt;&gt; Overview &gt;&gt; หุบเขาจักรกล</p>
                    <p className="text-success" style={{ fontSize: 12 }}>วิธีใช้งาน</p>
                    <p style={{ fontSize: 12 }}>
                        1. เลือกรางวัลใหญ่ 4 ชิ้น ตามปรารถนา <br />
                        2. ใช้ RP เริ่มต้นที่ 99 RP เพื่อทำการบุกรุกพื้นที่ แล้วจะได้รับ [รางวัลใหญ่ที่เลือกไว้] หรือ [ไอเทม] ในแต่ละช่องที่เดินผ่าน!<br />
                        <ul><li>*รูปกล่องสมบัติ* ในแผนที่คืออะไร??: ผู้เล่นจะรับ [รางวัลใหญ่ที่เลือกไว้] ได้ 1 อย่าง(สุ่ม) โดยทันที!</li></ul>
                        3. เลือกช่องเดินได้ตามใจชอบ สูงสุด 5 ช่อง/ครั้ง<br />
                        4. พิเศษ! สามารถกดดูของรางวัลในช่องที่ต้องการได้ โดยใช้ WARD ซึ่งจะใช้งานฟรี 1 ครั้ง ในทุกครั้งที่เริ่มเล่น (รวมถึงการรีเซต)<br />
                        5. กดเติมเงินที่มุมซ้ายล่าง จะได้รับ 2x WARD มาใช้งานฟรี ต่อการเติม RP ครั้งนึง<br />
                        6. WARD ที่เหลือในรอบนั้นๆ จะไม่สามารถนำไปใช้ในแผนที่ใหม่ได้ (เมื่อกดรีเซตแล้ว WARD ที่ใช้เหลือจากการเติมเงิน จะหายไป)
                    </p>
                    <p className="text-success" style={{ fontSize: 12 }}>ข้อควรทราบ</p>
                    <p style={{ fontSize: 12 }}>
                        1. สกิน Prestige ที่ได้จากอีเวนท์นี้ จะแถม [กรอบ] มาให้ด้วย<br />
                        2. จำนวน RP ที่ใช้ จะค่อยๆ เพิ่ม เมือบุกรุกพื้นที่มากขึ้น:<br />
                        <ul><li>เริ่มต้นที่ 99 RP สูงสุด 299 RP</li></ul>
                        3. หากเติมเงินแล้วไม่ได้รับ WARD ตามที่กำหนด กรุณากด [รีเฟรช] อีกครั้ง<br />
                        4. อีเวนท์นี้ไม่สามารถใช้ได้กับนโยบายการคืนเงินร้านค้าของ League of Legends ดังนั้นโปรดตรวจสอบให้แน่ใจว่าคุณเข้าใจกฎของกติกาก่อนทำการเข้าร่วม!<br />
                        5. สำหรับปัญหาใดๆ ที่เกี่ยวข้องกับอีเวนท์นี้ โปรดติดต่อฝ่ายสนับสนุนลูกค้าของ Garena ประเทศไทย<br />
                    </p>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default NewsInfo
