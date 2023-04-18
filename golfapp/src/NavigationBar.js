import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import MemberIcon from "@rsuite/icons/Member";

//need to add as={NavLink} to the NavItems and add field to href
export default function NavigationBar({ signOut, user, onSelect, activeKey }) {
    return (
        <Navbar fixed="top" bg="success" variant="dark" expand="lg">
            <Container>
                <Link className="navbar-brand" to="/home">Swingers Club</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav onSelect={onSelect} activeKey={activeKey} className="me-auto">
                        <Link className="nav-link" to="/score" eventKey="2">Scoring</Link>
                        <Link className="nav-link" to="/allscores" eventKey="2">All Scores</Link>
                        <Link className="nav-link" to="/new" eventKey="2">New Game</Link>
                        <Link className="nav-link" to="/scheduling" eventKey="3">Scheduling</Link>
                    </Nav>
                    <Nav onSelect={onSelect} activeKey={activeKey}>
                        <Link
                            className="nav-link"
                            to="/profile"
                            href={`/user/${user?.id}`}
                            icon={<MemberIcon />}
                            eventKey="4"
                        >
                            My Profile
                        </Link>
                        <Link className="nav-link" onClick={signOut}>Logout</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}