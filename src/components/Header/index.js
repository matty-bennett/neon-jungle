import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
     return (
         <div>
            <Container className="d-flex">
                <Row className="d-flex justify-content-center">
                    <Col>
                        search bar / login
                    </Col>
                    <Col xs={6}>
                        <h1>Neon Jungle</h1>
                        <h2> logo  </h2>
                    </Col>
                    <Col>
                        cart
                    </Col>
                </Row>
            </Container>
         </div>
     )
 };

 export default Header;