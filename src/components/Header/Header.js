import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
    <Navbar bg="primary" variant="light">
    <Container>
                    <Navbar.Brand as={Link} className="text-white fw-bolder" to="/">Health Evarcare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">                     <Nav.Link as={Link} className="text-white fw-bolder fs-6" to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white fw-bolder fs-6" to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} className="text-white fw-bolder fs-6" to="/services">Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
    
    </Container>
  </Navbar>
        </>
    );
};

export default Header;