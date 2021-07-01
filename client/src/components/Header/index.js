import React from 'react';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/logo/neon-jungle-logo.jpg';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Header() {
     return (
         <div className="header">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col className="d-flex flex-column align-items-center justify-content-center">
                        <Button className="button-primary"><Link className="header-link" to='/login'>Login/Sign-up</Link></Button>
                    </Col>
                    <Col xs={6} md={4} className="d-flex justify-content-center">
                        <Image className="logo-img" src={Logo} alt="logo" />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button className="button-primary">Search</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
         </div>
     )
 };

 export default Header;