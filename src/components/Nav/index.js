import React from 'react';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navi() {


    return(
        <div className="navi">
            <Container>
                <Row className="justify-content-center">
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Availability" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#frogs">Frogs</NavDropdown.Item>
                                <NavDropdown.Item href="#geckos">Geckos</NavDropdown.Item>
                                <NavDropdown.Item href="#snakes">Snakes</NavDropdown.Item>
                                <NavDropdown.Item href="#lizards">Lizards</NavDropdown.Item>
                                <NavDropdown.Item href="#plants">Plants</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#supplies">Supplies</Nav.Link>
                            <Nav.Link href="#feeders">Feeders</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            
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
}

export default Navi;