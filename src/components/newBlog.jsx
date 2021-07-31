import React, {useEffect, useState} from 'react';
import {Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import './newBlog.css';
import Image from "react-bootstrap/Image";

import img from './kingdom-1434.cfa6d963.png';

import config from "../config.json";
function NewBlog(){
    const [blogPost, setBlog] = useState({
        title: '',
        author: '',
        desc: ''
    });

    const handleChange = (e) => {
        setBlog({
            ...blogPost,
            [e.target.name]: e.target.value
        })
    }

    const postBlog =async() => {
        try{
            const res= await axios.post( `${config.BASE}create` , blogPost  );
            if(res.data){
                 setBlog({
                      title :'',
                      author:'',
                      desc:''
                 })
                 window.alert("blog created");
                 window.location.reload(false);
            }
        }catch(err){
            console.log(err);
        }
       // dataFetch();
    }

    const onSubmit =(e) => {
        if(blogPost.title.trim() !== ""  && blogPost.author.trim() !== ""  && blogPost.desc.trim() !== "" ){
            postBlog();
        }else{
            window.alert("Blog details are  empty");
            
        }
    }

    console.log(blogPost);

  
  return(
   <>
   <Container>
       <Row>
           <Col md={6}> <Image src={img}  fluid/> </Col>
           <Col md={6}>
           <Modal.Dialog className="dialog" >
            <Modal.Header>
                <Modal.Title>Create a Blog</Modal.Title>
            </Modal.Header>
            
            <Form className="form">
            <Form.Group controlId="">
                <Form.Label><b>Title of Blog</b></Form.Label> 
                    <Form.Control className="input" type="text" name="title" value={blogPost.title} onChange={handleChange} placeholder="" />
                </Form.Group>
            <Form.Group controlId="">
                <Form.Label><b>Author Name</b></Form.Label>
                <Form.Control className="input"type="text" name="author" value={blogPost.author} onChange={handleChange}  placeholder="" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label><b>Description</b></Form.Label>
                <Form.Control className="input"as="textarea" name="desc" value={blogPost.desc} onChange={handleChange}  rows={3} />
            </Form.Group>
            
            <Modal.Footer>
            <Button variant="primary" onClick={onSubmit}>Create a Blog</Button>
            </Modal.Footer>
        </Form>
        </Modal.Dialog> 
           
           </Col>
       </Row>

   </Container>
  
  
   </>
  );

}
export default NewBlog;