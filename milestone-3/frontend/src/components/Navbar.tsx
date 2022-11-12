import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
      <div className="title-box">
        <h1 className="title-txt">Nick's Filipino Feasts</h1>
        <img src="https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg" className="pic"/>
        <nav>
            <Link to="/" className="title-links">Home</Link>
            <Link to="/about" className="title-links">About Me</Link>
        </nav>
    </div>    
    </header>
  );
}