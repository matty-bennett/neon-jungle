import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../../index.css';
import Auth from '../../utils/auth';


function Navi() {
    function checkLoggedIn() {
        if (Auth.loggedIn()) {
            return (
                <Nav.Link className="navlink" href="/orderHistory">Order History</Nav.Link>
            );
        }
    }
    return (
        <div className="navi">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link className="navlink" href='/'>Home</Nav.Link>
                            <Nav.Link className="navlink" href='/categories'>Categories</Nav.Link>
                            <Nav.Link className="navlink" href="/supplies">Supplies</Nav.Link>
                            <Nav.Link className="navlink" href="/feeders">Feeders</Nav.Link>
                            <Nav.Link className="navlink" href="/community">Community</Nav.Link>
                            {checkLoggedIn()}
                            <Nav.Link className="navlink" href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}

export default Navi;