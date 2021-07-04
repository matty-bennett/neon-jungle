import React from 'react';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';


function Navi() {
    function checkLoggedIn() {
        if (Auth.loggedIn()) {
            return (
                <Nav.Link><Link className="navlink" to="/orderHistory">Order History</Link></Nav.Link>
            );
        }
    }
    return (
        <div className="navi">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link><Link className="navlink" to='/'>Home</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to='/categories'>Categories</ Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/supplies">Supplies</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/feeders">Feeders</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/community">Community</Link></Nav.Link>
                            {checkLoggedIn()}
                            <Nav.Link><Link className="navlink" to="/contact">Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}

export default Navi;