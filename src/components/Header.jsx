import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="bg-light" variant="bg-light" className='shadow-lg'>
            <Container>
                <Navbar.Brand href="#home">Devs Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none me-5' to={'/home'}>Home</Link>
                        <Link className='text-decoration-none me-5' to={'/quiz'}>Quiz</Link>
                        <Link className='text-decoration-none me-5' to={'/about'}>Statistice</Link>
                        <Link className='text-decoration-none me-5' to={'/about'}>About</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;