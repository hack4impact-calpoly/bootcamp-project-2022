import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
    <Link className="title-container" to="/">
      <h1 className="title">Muzart's Awesome Kitchen</h1>
    </Link>
    <nav>
      <Link className="nav-item" to="/">Home</Link>
      <Link className="nav-item" to="/about">About The Chef</Link>
    </nav>
  </header> 
  );
}
 