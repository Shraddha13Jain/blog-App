import React, {useEffect, useState} from 'react';

import axios from "axios";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Blogs(props){
    
    const [blogs , setBlogs] = useState([]);

    useEffect(() => {
      const dataFetch=async() => {
          try{
           const res = await axios.get("https://blogapp1302.herokuapp.com/api/blogs");
           console.log(res.data);
           if(res.data){
            setBlogs(res.data.slice(0, props.count));
           }
          }
          catch(error){
              console.log(error);
          }
        }
        dataFetch();

   
    }, [])

    return (
    <>

        <Container>
            <Row style={{ marginTop: '1.0rem' }}>
         {(blogs) ? (
             <>
                {blogs.map( (blog) => (
                        <Card className ="" style={{ width: '20rem' ,marginLeft: '2.0rem',marginTop: '2.0rem', borderRadius:'2.0rem'}}
                        border={'dark'}
                       
                        text={'Success'.toLowerCase() === 'light' ? 'dark' : 'white'}
                        bg={'Warning'.toLowerCase()}>
                        <Card.Body>
                           <Card.Title>{blog.title}</Card.Title>
                           <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
                           <Card.Text>
                              {blog.desc.substring(0,500)}
                           </Card.Text>
                        </Card.Body>  
                    </Card>
                ))
                
                }
             </>
         ) : (
             <>
             
             </>
         )
         }
         </Row>
         </Container>
    </>
   )

} 
export default Blogs;
