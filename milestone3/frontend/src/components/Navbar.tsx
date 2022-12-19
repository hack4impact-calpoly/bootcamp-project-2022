import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className = "header">
        <Link to="/"><header className="headermain">Kitchen Gaming <span role="img" aria-label="sunglasses">😎</span></header></Link>
         <nav>
            <Link to="/" className="navel">Home</Link>
            <Link to="/about" className="navel">About Me</Link>
        </nav>
    </header>
  );
}