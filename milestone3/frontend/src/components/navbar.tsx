import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <body>
      <header>
        <Link className="page-link" to='/'>Home</Link>
        <Link className="title-box" to='/'>
            <h1 className="title-text">Fall Classics</h1>
        </Link>
        <Link className="page-link" to='/about'>About Me</Link>  
      </header>
    </body>
  );
}