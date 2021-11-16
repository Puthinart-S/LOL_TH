import './style.css'
import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import bansec1 from './img/bansec1.jpg'
import {Button} from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Download = () => {
    return (
        <Fragment>
            <section id="one" className="d-flex justify-content-center align-items-center p-5">
                <img src={bansec1} alt="ban" />
            </section>
            <br/>
            <br/>
            <br/>
            <section id="two" className="mb-2 ">
                <Container>
                    <Row className="justify-content-md-center">
                    <Col id="twoI" xs lg="auto" >
                        
                    <div >
                       <div >
                                <Button variant="warning" size="lg" active> การสมัครบัญชี
                                </Button>{' '}
                        </div>
                        <div>
                            <p>การลงทะเบียนบัญชี Garena</p>
                        </div>
                    </div>
                    </Col>

                    <Col id="twoII" xs lg="auto">
                    <div >
                        <div  >
                            <Button variant="info" size="lg" active> ดาวน์โหลดเกม
                            </Button>{' '}
                        </div>
                        <div>
                            <p>ดาวน์โหลดด้วย Internet Browser (ซึ่งใช้เวลาดาวน์โหลดนานกว่า)</p>
                        </div>
                        </div>
                    </Col>
                    
                    <Col id="twoIII"xs lg="auto">
                    <div >
                        <div  >
                            <Button variant="info" size="lg" active> ดาวน์โหลดเกม (เร็วที่สุด)
                            </Button>{' '}
                        </div>
                        <div>
                            <p>ดาวน์โหลดด้วย GPC (ซึ่งใช้เวลาดาวน์โหลดน้อยกว่า)</p>
                        </div>
                        </div>
                    </Col>
                    </Row>
                </Container>
            </section>
            <br/>
            <br/>
            <br/>
            <section id="three">
            <Container>
                    <Row className="justify-content-md-center">
                    <div><h1>♦   แพตช์ปัจจุบัน</h1>
                    <div id="contain"> 
                        <div id="bhead">
                        <b>หากคุณพบข้อผิดพลาดระหว่างการอัปเดต คุณอาจลองใช้การอัปเดตแพตช์แบบ Manual Patch</b>
                        </div>
                        <h3>Manual Patch 11.22 hotfix1 [5 พ.ย.]</h3>
                        <div className="btr">
                        <Button variant="info" size="lg " active> แพตช์
                        </Button>{' '}
                        </div>
                    </div>
                    </div>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center">
                    <div><h1>♦   แพตช์ปัจจุบัน</h1>
                    <div id="contain"> 
                    <table striped bordered hover variant="dark">
                    
                        <thead>
                            <tr>
                                <th>วันปล่อยแพตช์</th>
                                <th>วันปล่อยแพตช์</th>
                                <th>เวอร์ชันแพตช์หลังการอัปเดต</th>
                                <th>เวอร์ชันแพตช์หลังการอัปเดต</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2021-11-04</td>
                                <td>11.21</td>
                                <td>11.21</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-10-21 </td>
                                <td>11.20 hotfix1</td>
                                <td>11.21</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-10-11</td>
                                <td>11.20</td>
                                <td>11.20 hotfix1</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-10-07</td>
                                <td>11.19 </td>
                                <td>11.20</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-09-23</td>
                                <td>11.18</td>
                                <td>11.19</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-09-14</td>
                                <td>11.17</td>
                                <td>11.19</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-08-26</td>
                                <td>11.16</td>
                                <td>11.17</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            <tr>
                                <td>2021-08-12</td>
                                <td> 11.15 hotfix1</td>
                                <td>11.16</td>
                                <td><div id="btr">
                                    <Button variant="info" size="lg " active> แพตช์
                                    </Button>{' '}
                                </div>                                
                                </td>
                            </tr>
                            
                           
                            
                        </tbody>
                    </table>
                    </div>
                    </div>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center">
                    <div><h1>♦   แพตช์ปัจจุบัน</h1>
                    <div id="contain"> 
                    <table striped bordered hover variant="dark">
                    
                        <thead>
                            <tr>
                                <th>ไอเทมที่ติดตั้ง</th>
                                <th>ความต้องการขั้นต่ำ</th>
                                <th>ความต้องการที่แนะนำ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>OS</td>
                                <td>Windows XP / Vista / 7</td>
                                <td>Windows 10</td>
                            </tr>
                            <tr>
                                <td>CPU</td>
                                <td> 3 GHz processor</td>
                                <td>3 GHz dual-core processor</td>
                            </tr>
                            <tr>
                                <td>ความจำ</td>
                                <td>2 GB RAM</td>
                                <td>4 GB RAM</td>
                            </tr>
                            <tr>
                                <td>พื้นที่ว่าง</td>
                                <td>พื้นที่ว่างมากกว่า 12 GB ขึ้นไป  </td>
                                <td>พื้นที่ว่างมากกว่า 16 GB ขึ้นไป</td>
                            </tr>
                            <tr>
                                <td>กราฟิก</td>
                                <td>Shader version 2.0b-capable video card</td>
                                <td>Nvidia GeForce 8800/AMD Radeon HD 5670 หรือที่ประสิทธิภาพสูงกว่านี้</td>
                            </tr>
                            <tr>
                                <td>Direct X</td>
                                <td>DirectX v9.0c หรือสูงกว่านี้ </td>
                                <td>DirectX v9.0c หรือสูงกว่านี้</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                    </Row>
                    <br/>
                    <br/>
                    <br/>
                    <Row className="justify-content-md-center">
                    <div><h1>♦   แพตช์ปัจจุบัน</h1>
                    <div id="contain"> 
                        <div id="bhead">
                        <b>เพื่อรักษาการแสดงกราฟิกที่ดีที่สุดของ "League of Legends" โปรดอัปเดตไดรเวอร์การ์ดแสดงผลเป็นประจำ ค้นหาไดรเวอร์ที่คุณต้องการ</b>
                        </div>
                        <div id="box">

                                <div className="btr">
                                    <Button variant="info" size="lg " active> Garena
                                    </Button>{' '}
                                </div>
                                <div className="btr">
                                    <Button variant="info" size="lg " active> Adobe AIR
                                    </Button>{' '}
                                </div>
                                <div className="btr">
                                    <Button variant="info" size="lg " active> .NET Framework
                                    </Button>{' '}
                                </div>
                                <div className="btr">
                                    <Button variant="info" size="lg " active> Direct X
                                    </Button>{' '}
                                </div>
                                <div className="btr">
                                    <Button variant="info" size="lg " active> WinRAR
                                    </Button>{' '}
                                </div>
                                <div className="btr">
                                    <Button variant="info" size="lg " active> Driver Nvidia
                                    </Button>{' '}
                                </div>
                                <div className="btr">
                                    <Button variant="info" size="lg " active> Driver ATI
                                    </Button>{' '}
                                </div>
                        </div>
                        <div id="box">

                                
                                
                        </div>
                    </div>
                    </div>
                    </Row>
                        
                    <br/>
                    <br/>
                    <br/>
            </Container>
            </section>
            <Footer />
        </Fragment>
    )
}

export default Download
