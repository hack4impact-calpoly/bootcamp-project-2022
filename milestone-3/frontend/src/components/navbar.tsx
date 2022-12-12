import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    // navbar header
    <header className="head">
    <Link className="title" to="/" style={{textAlign: 'left'}}>
      <h1 className="title-text">Sharan's FOOD</h1>
    </Link>
    <Link className="ab" to="about" style={{textAlign: 'right'}}>About</Link>
  </header>
  );
}