import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <header>
      <Link to='/'>
        <h1 className="title">Recipe Website</h1>
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  );
}