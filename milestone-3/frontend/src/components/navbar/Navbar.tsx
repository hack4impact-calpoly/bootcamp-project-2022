import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

//header bar
export default function Navbar() {
    return (
        <header className="site-header">
            <Link to="/"><h1 id="site-title-text">World Class Chef Ameer</h1></Link>

            <nav className="navigator">
                <Link className="nav-item-text" to="/">Home</Link>
                <Link className="nav-item-text" to="/about">About Me</Link>
            </nav>
        </header>
    );
}