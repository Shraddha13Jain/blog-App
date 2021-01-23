import React from 'react';

import Blogs from './Blogs';
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/container";

function Home () {
   return (
    <>
        <Container>
            <Row>
                <Col lg="8"><Blogs /></Col>
                <Col lg="4"> 2of 2</Col>
            </Row>
        </Container>
    </>

   )

}

export default Home;