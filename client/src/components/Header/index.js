import React from 'react';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Logo from '../../assets/logo/neon-jungle-logo.jpg';

function Header() {
     return (
         <div className="header">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col className="d-flex align-items-center justify-content-center">
                        login
                    </Col>
                    <Col xs={6} md={4} className="d-flex justify-content-center">
                        <Image className="logo-img" src={Logo} alt="logo" />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        cart
                    </Col>
                </Row>
            </Container>
         </div>
     )
 };

 export default Header;