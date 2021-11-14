import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import l1 from './img/icon1.png'

const Navbars = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container className="d-flex flex-row justify-content-center align-items-center">
                <Navbar.Brand href="/"><img src={l1} alt="logo" className="img-fluid w-75" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">หน้าแรก</Nav.Link>
                        <Nav.Link href="/news">ข่าว</Nav.Link>
                        <NavDropdown title="เกี่ยวกับเกม" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/champions">แชมป์เปี้ยน</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ไอเทม</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">เริ่มต้นเล่น</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/">UNIVERSE</Nav.Link>
                        <Nav.Link href="#pricing">ช่วยเหลือ</Nav.Link>
                        <Nav.Link href="/">ลงทะเบียน/ดาวน์โหลด</Nav.Link>
                        <Nav.Link href="#pricing">เติมเงิน</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars
