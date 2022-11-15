import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <Link style={{textDecoration: 'none', color: '#faedcd'}} to="/" className ="links">
      <h1 className = "title"> Cafe Hope </h1>
      </Link>
      <nav>
        <Link style={{textDecoration: 'none', color: '#faedcd'}} to="/" className ="links">
        <a>Home  </a>
        </Link>
        <Link style={{textDecoration: 'none', color: '#faedcd'}} to="/About " className ="links">
        <a>About me</a>
        </Link>
      </nav>
    </header>
  );
}