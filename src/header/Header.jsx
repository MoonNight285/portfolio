import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import "./Header.css";

function Header() {
    return (
        <div className={"container-fluid"}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">KJY portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">About Me</Nav.Link>
                            <Nav.Link href="#home">Skill</Nav.Link>
                            <Nav.Link href="#link">드림컴</Nav.Link>
                            <Nav.Link href="#link">스프링 시네마</Nav.Link>
                            <Nav.Link href="#link">코로나 모니터</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;