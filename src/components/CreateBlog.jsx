import React, {useEffect, useState} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Jumbotron } from 'react-bootstrap';
import axios from "axios";

import config from "../config.json";
function CreateBlog(){
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
  
   <Jumbotron style={{marginTop:'5.0rem'}}>
   <h4>CREATE A NEW BLOG</h4>
   <Form>
       <Form.Group controlId="formBasicEmail">
            <Form.Label style={{float:'left',fontSize:'20px'}}>Title</Form.Label>
            <Form.Control value={blogPost.title} onChange={handleChange}  name="title" type="text" placeholder="Enter Title of Blog" />
       </Form.Group>

       <Form.Group controlId="formBasicEmail">
            <Form.Label style={{float:'left' ,fontSize:'20px'}}>Author</Form.Label>
            <Form.Control value={blogPost.author} onChange={handleChange}  name="author" type="text" placeholder="Enter Your Name" />
       </Form.Group>

       <Form.Group controlId="formBasicEmail">
            <Form.Label style={{float:'left' ,fontSize:'20px'}}>Description</Form.Label><br />
            <textarea value={blogPost.desc} onChange={handleChange}  name="desc" type="text" placeholder="Description" style={{width:'100%'}} />
       </Form.Group>
       
       <Button onClick={onSubmit} variant="primary">
            Submit
       </Button>

   </Form>
   </Jumbotron>
   </>
  );

}
export default CreateBlog;