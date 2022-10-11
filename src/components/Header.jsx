import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="bg-light" variant="bg-light" className='shadow-lg'>
            <Container>
                <Navbar.Brand><Link to={'/'} className='text-decoration-none fw-bolder'>Dev Quiz</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className='text-decoration-none fw-bold text-uppercase me-5' to={'/home'}>Home</NavLink>
                        <NavLink className='text-decoration-none fw-bold text-uppercase me-5' to={'/quiz'}>Quiz</NavLink>
                        <NavLink className='text-decoration-none fw-bold text-uppercase me-5' to={'/statistics'}>Statistics</NavLink>
                        <NavLink className='text-decoration-none fw-bold text-uppercase me-5' to={'/blogs'}>Blog</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;