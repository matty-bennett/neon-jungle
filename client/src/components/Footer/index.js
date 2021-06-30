
import React from 'react';
import { Col, Row, Container, ListGroup, Button } from 'react-bootstrap';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div className="d-flex justify-content-around footer">
            <Container>
                <Row className="d-flex flex-wrap">
                    <Col>
                        <h4>Stay Connected</h4>
                        <ListGroup horizontal>
                            <ListGroup.Item variant="dark"><FaFacebook /></ListGroup.Item>
                            <ListGroup.Item variant="dark"><FaInstagram /></ListGroup.Item>
                            <ListGroup.Item variant="dark"><FaYoutube /></ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer