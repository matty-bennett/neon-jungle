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
import { Link } from 'react-router-dom';

function Navi() {


    return(
        <div className="navi">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link><Link className="navlink" to='/'>Home</Link></Nav.Link>
                            <NavDropdown title="Availability" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link className="navlink" to="/frogs">Frogs</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="navlink" to="/geckos">Geckos</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="navlink" to="/snakes">Snakes</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="navlink" to="/lizards">Lizards</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="navlink" to="/plants">Plants</Link></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link className="navlink" to="/supplies">Supplies</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/feeders">Feeders</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/community">Community</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/contact">Contact</Link></Nav.Link>
                            
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