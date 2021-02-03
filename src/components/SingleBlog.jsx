import React, {useEffect, useState} from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

import './Blogs.css';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Link, Redirect } from "react-router-dom";
import config from "../config.json";

import Blogs from "./Blogs";
function SingleBlog(props){
    const [blog, setBlog] = useState([]);
    let id =  props.match.params.id;

    const [deleteB, setDelete] = useState(false);

    useEffect(() => {
        const fetchBlog = async() => {
            try{
                
                const res = await axios.get(`${config.BASE}blog/${id}`);
                console.log(res.data);
                if(res.data){
                    setBlog(res.data);
                }
            }
            catch(error){
                console.log(error);
            }
            
        } 
        fetchBlog();

    },[]);


    const deleteBlog = async() => { 
        try{
                
            const res = await axios.delete(`${config.BASE}delete/${id}`);
            console.log(res.data);
            if(res.data){
                setDelete(true);
                window.alert("blog deleted");
                // return <Redirect to="/allblogs" />;
            }
        }
        catch(error){
            console.log(error);
            window.alert("Something wrong, please try again")
        }
    }


    const updateBlog =() => {

    }

    if(deleteB){
        return <Redirect to="/allblogs" />;
    }
    return (
                        
         <>
         <Container>
            <Card className="blog-card mt-5" border="info" >
                <Card.Header>Featured</Card.Header>
                <Card.Body className="blog-body">
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text style={{padding:'2% 4%'}}>
                <b>By-<i>{blog.author}</i></b><br></br>
                {blog.desc}
                </Card.Text>
                
                <Button style={{ padding:'10px 20px', display:'inline'}} variant="primary" onClick={deleteBlog} >Delete</Button>
                <Link to={{pathname:'/updateblog/'+blog._id}}><Button style={{margin:'20px', padding:'10px 20px'}}variant="primary">Update</Button></Link>
                </Card.Body>
            </Card> 
            
            </Container>
         </>  
    
    )
}
export default SingleBlog;
