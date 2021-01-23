import React, {useEffect} from 'react';

import axios from "axios";
import Card from "react-bootstrap/Card";

function Blogs (){
    
    useEffect(() => {
      const dataFetch=async() => {
          try{
           const res = await axios.get("https://blogapp1302.herokuapp.com/api/blogs");
           console.log(res);
          }
          catch(error){
              console.log(error);
          }
        }
        dataFetch();

   
    }, [])

    return (
       <>
       <Card style={{ width: '18rem' }}>
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
         </Card.Body>  
     </Card>
       
       
       
       </>
   )

} 
export default Blogs;