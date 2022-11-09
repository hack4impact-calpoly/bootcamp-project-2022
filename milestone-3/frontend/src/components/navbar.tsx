import React from "react";
import "./navbar.css";
import { Link} from 'react-router-dom';

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className="heading"> 
        <a href="index.html"><h1>Kasey's Eats</h1></a>
        <nav className="menu">
            <Link to='/' className="menu-item">Home</Link>
            <Link to='/about' className="menu-item">About Me</Link>
        </nav>
    </header>
  );
}