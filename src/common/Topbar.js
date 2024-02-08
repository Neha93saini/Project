import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

const TopBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <img
                    src={logo}
                    height="30"
                    className="d-inline-block align-top"
                    alt="Your Logo"
                />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                <Nav.Link as={Link} to="/form">Form</Nav.Link>
                <Nav.Link as={Link} to="/table">Table</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default TopBar;