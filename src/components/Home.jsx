import React from 'react';

import Blogs from './Blogs';
import CreateBlog from './CreateBlog.jsx';
import Col from "react-bootstrap/col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/container";

function Home () {
   return (
    <>
        <Container>
            <Row>
                <Col md="6" lg="8">
                           <Blogs />
                </Col>
                <Col md="6" lg="4"> 
                 <CreateBlog />
                </Col>
            </Row>
        </Container>
    </>

   )

}

export default Home;