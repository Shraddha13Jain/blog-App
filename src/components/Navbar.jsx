import React ,{Component} from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
//import Component from "react-bootstrap/Component";


class Header extends Component{
  render(){
      return(
  <Navbar bg="dark" variant="dark" collapseOnSelect="true" expand="lg" sticky="top">  
  <Navbar.Brand href="/">ROUTINE BLOGGER</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    
  </Nav>
  <Nav.Link href="/allblogs" style={{color:'whitesmoke'}}>ALL BLOGS</Nav.Link> 
  <Nav.Link href="/newblog" style={{color:'whitesmoke'}}>NEW BLOG</Nav.Link>
  </Navbar.Collapse> 
</Navbar>

      )
  }
}

export default Header;