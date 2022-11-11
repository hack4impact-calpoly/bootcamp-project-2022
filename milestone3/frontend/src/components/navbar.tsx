import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <div id="site-title-container">
            <h1 id="title"><Link to="/">Get Cooking!</Link></h1>
        </div>
        <nav id="nav-bar">
            <Link className="nav-bar-links" to="/">
                Home Page
            </Link>
            <Link className="nav-bar-links" to="/about">
                About Me
            </Link>
        </nav>
    </header>
  );
}