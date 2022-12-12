import React from 'react';
import "./navbar.css";
import site_icon from "./site-icon.png";
import { Link } from 'react-router-dom';

export default function Navbar() 
{
    return (
        /* A header element containing a site logo + title, as well as links to the home and about pages*/
        <header className="header">
            <img src={site_icon} className="site-icon" />
            <h1><em>that</em> easy</h1>
            <nav>
                <Link to="/" className="nav-member">Home</Link>
                <Link to="/about" className="nav-member">About</Link>
            </nav>
        </header>
    );
}