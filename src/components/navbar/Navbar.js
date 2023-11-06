import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
  return (
    <div>
     <Navbar bg="body-tertiary" expand="lg" className="fixed-top">
  <div className="container-fluid">
    <Navbar.Brand href="#"  style={{ color: '#ff014f', fontWeight: '1000'}}><h2>Besto Solutions</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarSupportedContent" />
    <Navbar.Collapse id="navbarSupportedContent">
      <Nav className="me-auto">
        <Nav.Link href="#" style={{ marginLeft: '124px' }}>Home</Nav.Link>
        <Nav.Link href="#" style={{ marginLeft: '15px' }}>Platform</Nav.Link>
        <NavDropdown title="Company" style={{ marginLeft: '15px' }} id="basic-nav-dropdown">
          <NavDropdown.Item href="">About Us</NavDropdown.Item>
          <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
          <NavDropdown.Item href="#">Careers</NavDropdown.Item> 
          <NavDropdown.Item href="#">press</NavDropdown.Item>
          <NavDropdown.Item href="#">Security and Compliance</NavDropdown.Item>
          <NavDropdown.Item href="#">Global Partner Program</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Resources" style={{ marginLeft: '15px' }} id="basic-nav-dropdown">
          <NavDropdown.Item href="#">Blog</NavDropdown.Item>
          <NavDropdown.Item href="#">Resources</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#">Let's Talk</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" style={{ marginLeft: '15px' }}>Let's Talk</Nav.Link>
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
