import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n4 from './img/n4.jpg'
import n4_n from './img/n4_n.jpg'

const NewsInfo4 = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n4} alt="n4" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.2vh" }}>
                    <h5 style={{ fontSize: 30, fontWeight: "400" }}>Teamfight Tactics: Innovator Tournament</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p className="text-danger" style={{ fontSize: 26, fontWeight: "bold", lineHeight: 0.1 }}>เปิดรับสมัครรอบ High Rank แล้ว!</p>
                    <p style={{ fontSize: 16 }}>วันนี้ - 15 พฤศจิกายน 2564 เวลา 23.59 น.</p>
                    <p className="text-success" style={{ fontSize: 16, fontWeight: "bold", lineHeight: 0.1 }}>สมัครเลยที่&gt;&gt; https://forms.gle/LSVeUjmDhp6Wa4Ls8</p>
                    <hr />
                    <p style={{ fontSize: 16, marginTop: "-10px" }}>​สวัสดี นักประดิษฐ์ทุกท่าน!</p>
                    <p style={{ fontSize: 16 }}>วันนี้เรามาพร้อม Teamfight Tactics: Innovator Tournament ศึกชิงความเป็นสุดยอดนักประดิษฐ์ประจำ TFT Set 6: กลไกและสิ่งประดิษฐ์<br />มาดูรายละเอียดการแข่งขันกันดีกว่า</p>
                    <hr />
                    <p className="text-success" style={{ fontSize: 24, fontWeight: "bold", marginBottom: "0px" }}>กำหนดการของ Tournament</p>
                    <img src={n4_n} alt="n4_n" className="img-fluid" style={{ width: "35vw" }} />
                    <p style={{ fontSize: 16 }}>
                        <ul><li>รับสมัครผู้เล่นระดับ Diamond ขึ้นไป จำนวน 48 คน: 13 พฤศจิกายน 2564 เวลา 18.00 น. ถึง 15 พฤศจิกายน 2564 เวลา 23.59 น. แบ่งจำนวนตามระดับแรงก์โดยอิงจากแรงก์ของผู้เข้าแข่งขันในรอบ 16 คนสุดท้ายของ TFT: Dawn of Heroes Tournament และปรับตามความเหมาะสม ดังนี้</li>
                            <li className="text-decoration-line-through">Challenger 18 คน</li>
                            <li className="text-decoration-line-through">Grandmaster 14 คน</li>
                            <li className="text-decoration-line-through">Master 10 คน</li>
                            <li className="text-decoration-line-through">Diamond 6 คน</li>
                            <br />
                            <ul><p className="text-success" style={{ fontSize: 16, fontWeight: "bold" }}>อัปเดต ณ วันที่ 13 พฤศจิกายน 2564</p>
                                <p style={{ marginTop: "-20px", marginBottom: "20px" }}>ทีมงานได้ทำการปรับระดับแรงก์และจำนวนในรอบรับสมัครสำหรับ High Rank ดังนี้:</p>
                                <p style={{ marginBottom: "0px" }}>รับผู้เข้าแข่งขันผ่านการสมัครรอบ High Rank จำนวน 52 คน ซึ่งแบ่งจำนวนตามระดับแรงก์ได้ดังล่างข้างนี้</p>
                                <li>Grandmaster 10 คน</li>
                                <li>Master 20 คน</li>
                                <li>Diamond 22 คน</li>
                                <p>*หากหลังปิดรับสมัครมีผู้สมัครในแต่ละแรงก์ไม่เต็มจำนวน ทีมงานจะยกยอดสล็อตไปให้แรงก์ลำดับถัดไป เช่น หากเมื่อปิดรับสมัครรอบ High Rank แล้ว มีผู้สมัครของระดับ Grandmaster เพียง 3 คน ทีมงานจะยกสล็อตที่เหลือ 7 คนไปให้ระดับ Master รวมเป็น 27 คน และหากระดับ Master มีผู้สมัครไม่เต็มจำนวน ทีมงานจะยกสล็อตของระดับ Master ที่ไม่ถูกใช้ไปให้ระดับ Diamond ต่อไป*</p>
                            </ul>
                            <li>รับสมัครผู้เล่นแบบไม่จำกัดแรงก์: 17 พฤศจิกายน 2564 เวลา 18.00 น. ถึง 21 พฤศจิกายน 2564 เวลา 23.59 น.</li>
                            <li>ประกาศรายชื่อผู้เข้าแข่งขัน: 22 พฤศจิกายน 2564</li>
                            <li>ประกาศสายการแข่งขัน 23 พฤศจิกายน 2564</li>
                            <li>เริ่มแข่งขันรอบแรก 24 พฤศจิกายน 2564</li>
                            <li>แข่งขันรอบ Finals พร้อมถ่ายทอดสด: 4 ธันวาคม 2564 เวลา 17.00 น.</li></ul>
                    </p>
                    <p style={{ fontSize: 16 }}>*การรับสมัครในแต่ละรอบจะเปิดและปิดตามวันและเวลาที่ระบุไว้ ไม่มีปิดก่อน หากมีจำนวนผู้สมัครเต็มก่อนเวลา ทีมงานจะจัดทำรายชื่อผู้เข้าแข่งขันสำรอง*<br />**สำหรับการรับสมัครผู้เข้าแข่งขันระดับ Diamond ขึ้นไป อาจมีการเปลี่ยนแปลงแรงก์และจำนวนได้ตามความเหมาะสมและตามผู้เล่นในเซิร์ฟเวอร์ซึ่งจะมีการประกาศให้ทราบในวันรับสมัคร (13 พฤศจิกายน) ต่อไป**</p>
                    <hr />
                    <p className="text-success" style={{ fontSize: 24, fontWeight: "bold" }}>รูปแบบการแข่งขัน</p>
                    <p style={{ fontSize: 16, marginTop: "-40px" }}>​<ul><li>รอบ 2048 คน (Bo2) - วันที่ 24 พฤศจิกายน 2564</li>
                        <li>รอบ 1024 คน (Bo2) - วันที่ 25 พฤศจิกายน 2564</li>
                        <li>รอบ 512 คน (Bo2) - วันที่ 26 พฤศจิกายน 2564</li>
                        <li>รอบ 256 คน (Bo2) - วันที่ 27 พฤศจิกายน 2564</li>
                        <li>รอบ 128 คน (Bo2) - วันที่ 28 พฤศจิกายน 2564</li></ul>
                        <p style={{ fontSize: 16 , lineHeight: 0 }}>ผู้เข้าแข่งขันที่ผ่านเข้ารอบทั้ง 64 คนหลังการแข่งขันในวันที่ 28 พฤศจิกายนจะเข้าไปแข่งขันต่อกับผู้เข้าแข่งขันจากการรับสมัครรอบ High Rank 64 คนในรอบ 128+</p>
                        <ul><li>รอบ 128+ (Bo2) - วันที่ 29 พฤศจิกายน 2564</li>
                        <li>รอบ 64+ (Bo2) - วันที่ 30พฤศจิกายน 2564</li>
                        <li>รอบก่อนรองชนะเลิศ 32 คน (Bo2) - วันที่ 2 ธันวาคม 2564</li>
                        <li>รอบรองชนะเลิศ 16 คน (Bo3) - วันที่ 3 ธันวาคม 2564</li>
                        <li>รอบชิงชนะเลิศ (ใช้กฎกติกาพิเศษ) - วันที่ 4 ธันวาคม 2564 เวลา 17.00 น.</li></ul>
                        <p style={{ fontSize: 16, lineHeight: 0.1 }}>*จำนวนวันในการแข่งขันอาจปรับเปลี่ยนได้ตามจำนวนผู้สมัคร*</p></p>
                    <p style={{ fontSize: 16, color: "#00FFFF", fontWeight: "bold" }}>กฎกติกาการแข่งขันโดยละเอียด</p>
                    <p style={{ fontSize: 16, lineHeight: 0 }}>​อ่านได้ที่: &gt;&gt;<a href="https://docs.google.com/document/d/1Klze3b7Yio98_P4C_6u1c8W1kOoFawBEnBI7KR4Ke7Y/edit">คลิกที่นี่</a>&lt;&lt;</p>
                    <hr />
                    <p className="text-success" style={{ fontSize: 24, fontWeight: "bold" }}>​เงินรางวัล</p>
                    <p style={{ fontSize: 16, marginTop: "-20px" }}><ul><li>รางวัลที่ 1 : 10,000 บาท + คูปอง ShopeePay 1,000 บาท 1 ใบ</li>
                        <li>รางวัลที่ 2 : 5,000 บาท +  คูปอง ShopeePay 1,000 บาท 1 ใบ</li>
                        <li>รางวัลที่ 3 : 3,000 บาท +  คูปอง ShopeePay 1,000 บาท 1 ใบ</li>
                        <li>รางวัลที่ 4 : 2,000 บาท + คูปอง ShopeePay 500 บาท 1 ใบ</li>
                        <li>รางวัลที่ 5,6 : 1,500 บาท + คูปอง ShopeePay 300 บาท 1 ใบ</li>
                        <li>รางวัลที่ 7,8 : 1,000 บาท + คูปอง ShopeePay 300 บาท 1 ใบ</li></ul></p>
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

export default NewsInfo4
