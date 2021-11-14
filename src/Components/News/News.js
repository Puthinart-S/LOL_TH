import React, { Fragment } from 'react'
import './style.css'
import Footer from '../Footer/Footer'
import bansec1 from './img/bansec1.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import n1 from './img/n1.jpg'
import n2 from './img/n2.jpg'
import n3 from './img/n3.jpg'
import n4 from './img/n4.jpg'
import n5 from './img/n5.jpg'
import n6 from './img/n6.jpg'
import n7 from './img/n7.jpg'
import n8 from './img/n8.jpg'
import n9 from './img/n9.jpg'
import cate1 from './img/Cate1.jpg'
import cate2 from './img/Cate2.jpg'
import cate3 from './img/Cate3.jpg'

const News = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center p-5">
                <img src={bansec1} alt="ban" />
            </section>
            <section id="two" className="d-flex justify-content-center align-items-center p-5">
                <div className="d-flex justify-content-center bg-light border-secondary w-25 m-5 p-3">
                    <div className="w-50 m-1">
                        <img src={n7} alt="n7" className="img-fluid" />
                    </div>
                    <div className="w-50 m-1 p-2">
                        <h5 style={{ fontSize: 14 }}>Patch Notes 11.12</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center bg-light border-secondary w-25 m-5 p-3">
                    <div className="w-50 m-1">
                        <img src={n8} alt="n8" className="img-fluid" />
                    </div>
                    <div className="w-50 m-1 p-2">
                        <h5 style={{ fontSize: 12 }} className="text-info">PROJECT: Irelia Prestige Edition</h5>
                        <h5 style={{ fontSize: 14 }} >กิจกรรม ห้องแห่งความลับ</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center bg-light border-secondary w-25 m-5 p-3">
                    <div className="w-50 m-1">
                        <img src={n9} alt="n9" className="img-fluid" />
                    </div>
                    <div className="w-50 m-1 p-2">
                        <h5 style={{ fontSize: 14 }}>กิจกรรม ลิขิตแห่งมนตรา</h5>
                    </div>
                </div>
            </section>
            <section id="three" className="d-flex justify-content-center p-5">
                <div className="d-flex flex-column justify-content-center align-items-center m-5">
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n1} alt="n1" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <h5 style={{ fontSize: 18 }}>กิจกรรม หุบเขาจักรกล</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ทุกพื้นที่มีสมบัติ ทุกการค้นหามีโอกาสได้รับรางวัลใหญ่ ออกค้นหากันเลย!</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/12 14:00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n2} alt="n2" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <h5 style={{ fontSize: 18 }}>กิจกรรม เอ้ก E เอ้ก</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ยิ่งซื้อมากยิ่งคุ้มมาก ทั้งไข่และสกินใหม่</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/09 15:00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n3} alt="n3" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <h5 style={{ fontSize: 18 }}>สู่หอจดหมายเหตุสภา</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ท่องไปตามกองเอกสารในหอจดหมายเหตุสภา สำรวจประวัติศาสตร์แห่ง Piltover และอีกมากมาย</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/08 23:00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n4} alt="n4" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <p style={{ fontSize: 12 }} className="text-info">Tournament</p>
                            <h5 style={{ fontSize: 18 }}>Teamfight Tactics: Innovator Tournament</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ศึกชิงความเป็นสุดยอดนักประดิษฐ์ประจำ TFT Set 6: กลไกและสิ่งประดิษฐ์</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/08 17:30</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n5} alt="n5" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                        <p style={{ fontSize: 12 }} className="text-info">PROJECT: Irelia Prestige Edition</p>
                            <h5 style={{ fontSize: 18 }}>Teamfight Tactics: Innovator Tournament</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ศึกชิงความเป็นสุดยอดนักประดิษฐ์ประจำ TFT Set 6: กลไกและสิ่งประดิษฐ์</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/08 17:30</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n6} alt="n6" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <h5 style={{ fontSize: 18 }}>ความคิดเห็นจากทีมพัฒนา: 6 พฤศจิกายน 2564</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ความคิดเห็นจากทีมพัฒนา: 6 พฤศจิกายน 2564</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/05 11:00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n7} alt="n7" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <h5 style={{ fontSize: 18 }}>Patch Notes 11.22</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ใครจะคว้าแชมป์ Worlds ไปในสุดสัปดาห์นี้ ทุกอย่างจะถูกตัดสินในเสี้ยววินาทีแห่งการ MAKE/BREAK และพร้อมกับการจบลงของซีซั่น</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/03 15:00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n8} alt="n8" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                        <p style={{ fontSize: 12 }} className="text-info">Set 6</p>
                            <h5 style={{ fontSize: 18 }}>Teamfight Tactics patch 11.22 notes</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">ยินดีต้อนรับเข้าสู่ Teamfight Tactics: กลไกและสิ่งประดิษฐ์ โลกแห่งการทดลอง เวทมนตร์ และเทคโนโลยีที่จะเปลี่ยนยุคสมัย</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/03 12:00</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3 w-75">
                        <div className="w-50">
                            <img src={n9} alt="n9" className="img-fluid w-75" />
                        </div>
                        <div className="w-50 p-2">
                            <h5 style={{ fontSize: 18 }}>กิจกรรม ลิขิตแห่งมนตรา</h5>
                            <p style={{ fontSize: 12 }} className="text-secondary">เปิดการ์ดที่หมอบอยู่ จับคู่รับสกินทองสุดแรร์ K/DA All Out Kai'Sa Prestige Edition + กรอบ</p>
                            <p style={{ fontSize: 12 }} className="text-secondary">2021/11/02 15:00</p>
                        </div>
                    </div>
                </div>
                <div id="verti" style={{height: "125vw" }}></div>
                <div className="d-flex flex-column m-5">
                    <div className="d-flex flex-column" >
                        <div id="cont" className="my-2">
                            <img src={cate1} alt="cate" id="imag" />
                            <div id="text" className="text-decoration-none text-light" style={{ fontSize: 16 }}>ข่าวอัพเดท</div>
                        </div>
                        <div id="cont" className="my-2">
                            <img src={cate2} alt="cate2" id="imag" />
                            <div id="text2" className="text-decoration-none text-light" style={{ fontSize: 16 }}>กิจกรรม</div>
                        </div>
                        <div id="cont" className="my-2">
                            <img src={cate3} alt="cate2" id="imag" />
                            <div id="text3" className="text-decoration-none text-light" style={{ fontSize: 16 }}>โปรโมชั่น</div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default News
