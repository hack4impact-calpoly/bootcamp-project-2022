import React from 'react';
import "./navbar.css"

export default function Navbar() 
{
    return (
        <header className="header">
            <img src="site-icon.png" className="site-icon" />
            <h1><em>that</em> easy</h1>
            <nav>
                <a href="index.html" className="nav-member">Home</a>
                <a href="about.html" className="nav-member">About</a>
            </nav>
        </header>
    );
}