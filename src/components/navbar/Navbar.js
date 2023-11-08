import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';


const MyNavbar = () => {
  return (
    <div>
     <Navbar bg="body-tertiary" expand="lg" className="fixed-top">
  <div className="container-fluid">
    <Navbar.Brand href="#"  style={{ color: '#ff014f', fontWeight: '1000'}}><h2>Besto Consultancy Services</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarSupportedContent" />
    <Navbar.Collapse id="navbarSupportedContent">
      <Nav className="me-auto">
      <NavLink className={"link"} to={'/'} style={{ marginLeft: '124px', fontWeight: 'bold' }}>Home</NavLink>

      <NavDropdown title="Platform" style={{ marginLeft: '15px', fontWeight: 'bold' }} id="basic-nav-dropdown">
          <NavDropdown.Item ><NavLink  className={"link"} to={'/mojoplatform'}>MOJO Platform</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink  className={"link"} to={'/mojoai'}>MOJO AI</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Let's Talk</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Solutions" style={{ marginLeft: '15px', fontWeight: 'bold' }} id="basic-nav-dropdown">
          <NavDropdown.Item ><NavLink  className={"link"} to={'/products'}>Products</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink  className={"link"} to={'/problem'}>Problem We Solve</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink  className={"link"} to={'/work'}>Who We Work With</NavLink></NavDropdown.Item>
    
        </NavDropdown>
        <NavDropdown title="Company" style={{ marginLeft: '15px', fontWeight: 'bold' }} id="basic-nav-dropdown">
          <NavDropdown.Item ><NavLink  className={"link"} to={'/about'}>About Us</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink   className={"link"} to={'/contact'}>Contact Us</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink  className={"link"}  to={'/careers'}>Careers</NavLink></NavDropdown.Item> 
          <NavDropdown.Item><NavLink  className={"link"}   to={'/press'}>Press</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink  className={"link"}  to={'/security'}>Security and Compliance</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink   className={"link"} to={'/global'}>Global Partner Program</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Resources" style={{ marginLeft: '15px', fontWeight: 'bold' }} id="basic-nav-dropdown">
          <NavDropdown.Item ><NavLink  className={"link"} to={'/blog'}>Blog</NavLink></NavDropdown.Item>
          <NavDropdown.Item ><NavLink  className={"link"} to={'/resources'}>Resources</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item ><NavLink  className={"link" }  to={'/contact'}>Let's Talk</NavLink></NavDropdown.Item>
        </NavDropdown>
        <NavLink to={'/contact'}  className={"link"} style={{ marginLeft: '15px', fontWeight: 'bold' }}>Let'sTalk</NavLink>
      </Nav>
      <Form className="d-flex">
        <FormControl type="search" placeholder="Search" aria-label="Search" /> 
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>
    </Navbar.Collapse>
  </div>
</Navbar>

    </div>
  );
};

export default MyNavbar;
