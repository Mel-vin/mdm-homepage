import React from 'react';
import Link from 'next/link';

import { Navbar, Container, Nav } from 'react-bootstrap';

const PublicNavbar = () => {
    return (
        <Navbar expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">Melvin's Deathmatch</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="https://forum.melvinsdm.com">Forums</Nav.Link>
                    </Nav>                
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default PublicNavbar;