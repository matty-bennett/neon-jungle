
import React from 'react';
import { Col, Row, Container, ListGroup, Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="d-flex footer">
            <Container>
                <Row style={{
                    paddingBottom: "2rem"
                }}>
                    <Col className="d-flex flex-wrap flex-column">
                        <h4 className="d-flex justify-content-center">Stay Connected</h4>
                        <ListGroup className="d-flex justify-content-center" horizontal>
                            <ListGroup.Item variant="dark"><FaFacebook /></ListGroup.Item>
                            <ListGroup.Item variant="dark"><FaInstagram /></ListGroup.Item>
                            <ListGroup.Item variant="dark"><FaYoutube /></ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col>
                        <h4 className="d-flex justify-content-center">Terms and Conditions</h4>
                        <h4 className="d-flex justify-content-center">F.A.Q</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="footer d-flex justify-content-center">© 2021. Neon Jungle</h6>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer