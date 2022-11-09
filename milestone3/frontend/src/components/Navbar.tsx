import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function Navbar() {
    return (
        <header className ="header">
        <a className = "title-container" href="index.html">
            <h1 className ="title">Connor's Bakery</h1>
        </a>
        <nav>
            <a className="nav-item" href="index.html">Home</a>
            <a className="nav-item" href="about.html">About Me</a>
        </nav>
    </header>
    )
}


export default Navbar;