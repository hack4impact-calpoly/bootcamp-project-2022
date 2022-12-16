import React from "react";
import "./navbar.css";

import { Link } from 'react-router-dom';
import { Navbar, Button, Nav, NavDropdown, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar_x() {
  return (
    // <Navbar bg="light" expand="lg">
    //   <Navbar.Brand href="/index">Swayam's Recipes</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse id="basic-navbar-nav">
    //     <Nav className="mr-auto"></Nav>
    //     <Nav>
    //       <Button variant="outline-primary" className="mr-2">
    //         <Link to="index" className="nav-link">Home</Link>
    //       </Button>
    //       <Button variant="outline-primary" className="mr-2">
    //         <Link to="about" className="nav-link">About</Link>
    //       </Button>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/index">Swayam's Recipes</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/index">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Navbar.Collapse>
  </Navbar>
  );
}
