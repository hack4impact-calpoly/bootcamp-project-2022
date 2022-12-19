import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <Link to="/" className="header">
            <h1 className="header">Arya's Best Cafe</h1>
        </Link>
        <nav>
            <Link to="/" className="navigator">Home</Link>
            <Link to="/about" className="navigator">About Me</Link>
        </nav>
    </header>
  );
}