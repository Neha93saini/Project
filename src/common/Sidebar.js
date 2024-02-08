import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <Navbar bg="dark" variant="dark" expand="md" fixed="left">
                <Navbar.Collapse >
                    <Nav className="flex-column">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/form">Form</Nav.Link>
                        <Nav.Link href="/table">Table</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Sidebar;