import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="topBar">
        <h1 id="title">Sreshta's Sides</h1>
        <div className="navPages">
            <Link to="/about" id="navtitle">About Me</Link>
            <Link to="/" id="navtitle">Home</Link>
        </div>
    </header>
  );
}