import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <div className="header">
        <h1> Random Recipes </h1>   
            <nav>
                <Link className = "link" to="/">Home</Link>
                <Link className = "link" to="/aboutme">About Me</Link>
            </nav>
        </div>
    </header>
  );
}
