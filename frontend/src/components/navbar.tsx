import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className = "header">
      <Link to="/" >
        <h1>Tarini's Cookbook</h1>
      </Link>
      <nav>
      <Link to="/" >
          <a>Home </a>
      </Link>
      <Link to="/about" >
          <a>About me </a>
      </Link>
      </nav>
    </header>
  );
}


