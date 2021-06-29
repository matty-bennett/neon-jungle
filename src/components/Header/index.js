import React from 'react';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
     return (
         <div className="header">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col className="align-items-center justify-content-center">
                        login
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <h1>Neon Jungle</h1>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        cart
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Availability" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Frogs</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Geckos</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Snakes</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Lizards</NavDropdown.Item>
                                <NavDropdown.Item href="#action5">Plants</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">Supplies</Nav.Link>
                            <Nav.Link href="#pricing">Feeders</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar>
                </Row>
            </Container>
         </div>
     )
 };

 export default Header;