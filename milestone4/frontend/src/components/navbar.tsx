import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
    <h1> Oli's Fried Chicken </h1>
      <nav>
        <Link to='/' className="page">Home</Link>
        <Link to='/about' className="page">About Me</Link>
      </nav>
    </header>
  );
}