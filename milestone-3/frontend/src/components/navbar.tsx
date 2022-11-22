import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
    <div className="top-panel">
        <h1>Swayam's Recipes</h1>
        <div className="top-left-panel">
            <h2 className="panel-button"><Link to="index" id='but'>Home</Link></h2>
            <h2 className="panel-button"><Link to="about" id='but'>About Me</Link></h2>
        </div>
    </div>
    </header>
  );
}