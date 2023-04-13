import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";

//need to add as={NavLink} to the NavItems and add field to href
export default function NavigationBar() {
    return (
        <Navbar fixed="top" bg="success" variant="dark" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/home">Swingers Club</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/scoring">Scoring</Link>
                        <Link className="nav-link" to="/scheduling">Scheduling</Link>
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}