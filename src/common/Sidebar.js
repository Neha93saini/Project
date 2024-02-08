import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Navbar bg="dark" variant="dark" expand="md" fixed="left">
                <Navbar.Collapse >
                    <Nav className="flex-column">
                        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
                        <Nav.Link as={Link} to="/form">Form</Nav.Link>
                        <Nav.Link as={Link} to="/table">Table</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Sidebar;