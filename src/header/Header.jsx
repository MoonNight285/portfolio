import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import "./Header.css";
import "../font/fontStyle.css";

function Header() {
    return (
        <div id={"header-navbar-wrapper"} className={"container-fluid"}>
            <Navbar id={"header-navbar"} expand="lg">
                <Container>
                    <Navbar.Brand href="#div-intro">KJY portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#div-about-me-wrapper">About Me</Nav.Link>
                            <Nav.Link href="#div-skill-wrapper">Skill</Nav.Link>
                            <Nav.Link href="#div-portfolio-dream-com">드림컴</Nav.Link>
                            <Nav.Link href="#div-portfolio-spring-cinema">스프링 시네마</Nav.Link>
                            <Nav.Link href="#div-portfolio-covid19-monitor">코로나 모니터</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;