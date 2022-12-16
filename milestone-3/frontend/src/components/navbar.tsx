import React from "react";
import "./navbar.css";

import { Link } from 'react-router-dom';
import { Navbar, Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar_x() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Swayam's Recipes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Button variant="primary" className="mr-2">
            <Link to="index" className="nav-link">Home</Link>
          </Button>
          <Button variant="primary" className="mr-2">
            <Link to="about" className="nav-link">About</Link>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
