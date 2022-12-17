import React from "react";
import "./navbar.css";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navbar_x() {

  const navigate = useNavigate();

  const handleSearch = () => {

    const searchInput = document.querySelector("input[type='search']") as HTMLInputElement;
    const searchQuery = searchInput.value;

    navigate(`/recipe/${searchQuery}`);
  }
  return (

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/index"><h2>Swayam's Recipes</h2></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/index">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/random">Random</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleSearch}>Search</Button>
          </Form>
    </Navbar.Collapse>
  </Navbar>

  );
}
