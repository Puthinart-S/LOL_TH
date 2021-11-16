import React, { Fragment } from 'react'
import Footer from '../../Footer/Footer'
import bgsec1 from './img/bgsec1.jpeg'
import n3 from './img/n3.jpg'

const NewsInfo3 = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center">
                <img src={bgsec1} alt="ban" className="img-fluid" />
            </section>
            <section id="two" className="d-flex flex-column justify-content-center align-items-center">
                <img src={n3} alt="n3" className="img-fluid" style={{ position: "relative", marginTop: "-10vw", width: "60vw" }} />
                <br />
                <div className="d-flex justify-content-center align-items-center border border-2" style={{ width: "60vw", height: "7.2vh" }}>
                    <h5 style={{ fontSize: 30, fontWeight: "400" }}>สู่หอจดหมายเหตุสภา</h5>
                </div><br />
                <div className="d-flex flex-column justify-content-start" style={{ width: "60vw" }}>
                    <p style={{ fontSize: 16 }}>ท่องไปตามกองเอกสารในหอจดหมายเหตุสภา สำรวจประวัติศาสตร์แห่ง Piltover และอีกมากมาย ค้นพบเรื่องราวของนักประดิษฐ์ อาชญากรพร้อมความทุ่มเทที่ไม่รู้ที่มาที่ไป เจ้าหน้าที่ และเด็กกำพร้าที่เรียกร้องความสนใจอย่างที่สุด</p>
                    <p style={{ fontSize: 16 }}>หอจดหมายเหตุสภาเป็นประสบการณ์แบบอินเตอร์แอคทีฟ สัมผัสได้แล้ววันนี้ที่ Client ของ League of Legends เมื่อคุณเข้าไปในหอจดหมายเหตุ ลากเมาส์ไปรอบ ๆ และคลิกเพื่อสำรวจเรื่องราวที่ไม่เคยถูกบอกเล่าจากตัวละครใน Arcane</p>
                    <p style={{ fontSize: 16 }}>เหมือนกับตารางฉายของ Arcane เนื้อหาในหอจดหมายเหตุของสภาจะถูกปล่อยออกมาเป็นระยะ เมื่อ Arcane ตอนใหม่มาถึง กลับมาที่คลังเก็บเอกสารเพื่อเปิดเผยเรื่องราวอีกมากมายผ่านบันทึกของ Jayce, Vi, Caitlyn และ Jinx</p>
                    <p style={{ fontSize: 16 }}>
                        <ul><li>เรื่องราวของ Jayce - วันที่ 8 พฤศจิกายน 2564 เวลา 23.00 น.</li>
                        <li>ดำดิ่งไปในบันทึกทางวิทยาศาสตร์ของ Jayce เพื่อมองดูการวางแผนสู่ภาพฝันแห่งอนาคตของ Piltover</li>
                        <li>เรื่องราวของ Vi - วันที่ 15 พฤศจิกายน 2564 เวลา 23.00 น.</li>
                        <li>เรียนรู้เพิ่มเติมเกี่ยวกับความดื้อรั้นของ Vi และความโปรดปรานศิลปะป้องกันตัวของเธอผ่านมุมมองผู้คุมที่เฉยชา</li>
                        <li>เรื่องราวของ Caitlyn - วันที่ 22 พฤศจิกายน 2564 เวลา 23.00 น.</li>
                        <li>นำหลักฐานที่ Caitlyn ได้รวบรวมมาปะติดปะต่อกันในการสืบสวนเมืองเบื้องล่างครั้งล่าสุดของเธอ</li>
                        <li>เรื่องราวของ Jinx - วันที่ 24 พฤศจิกายน 2564 เวลา 23.00 น.</li>
                        <li>ไขปริศนารูปวาดสุดประหลาดและรุนแรงของ Jinx ที่แปรปรวนและเปล่าเปลี่ยว</li></ul>
                    </p>
                    <p style={{ fontSize: 16 }}>คลังเก็บเอกสารของสภาจะใช้งานได้ทั่วโลกแล้ว ตั้งแต่วันที่ 8 พฤศจิกายน 2564 เวลา 23.00 น. ถึงวันที่ 9 ธันวาคม 2564 เวลา 03.59 น.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default NewsInfo3
