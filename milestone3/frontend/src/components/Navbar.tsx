import React from 'react';
import './Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <header className ="header">
        <Link className = "title-container" to="/">
            <h1 className ="title">Connor's Bakery</h1>
        </Link>
        <nav>
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="about">About Me</Link>
        </nav>
    </header>
    );
}

export default Navbar;