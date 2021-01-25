import React, {useEffect, useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Jumbotron } from 'react-bootstrap';

function CreateBlog (){
  
  
  return(
   <>
  
   <Jumbotron style={{marginTop:'5.0rem'}}>
   <h4>CREATE A NEW BLOG</h4>
   <Form>
       <Form.Group controlId="formBasicEmail">
            <Form.Label style={{float:'left',fontSize:'20px'}}>Title</Form.Label>
            <Form.Control type="email" placeholder="Enter Title of Blog" />
       </Form.Group>

       <Form.Group controlId="formBasicEmail">
            <Form.Label style={{float:'left' ,fontSize:'20px'}}>Author</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Name" />
       </Form.Group>

       <Form.Group controlId="formBasicEmail">
            <Form.Label style={{float:'left' ,fontSize:'20px'}}>Description</Form.Label><br />
            <textarea type="text" placeholder="Description" style={{width:'100%'}} />
       </Form.Group>
       
       <Button variant="primary" type="submit">
            Submit
       </Button>

   </Form>
   </Jumbotron>
   </>
  );

}
export default CreateBlog;