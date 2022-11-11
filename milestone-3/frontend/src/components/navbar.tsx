import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
    
      <nav className="nav">
            <div className="container">
                <h1 className="logo"><Link to="/">MyKitchen</Link> </h1>
                <ul>
               
                    <li className="current">
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>  
                </ul>


            </div>
        </nav>
    </header>
  );
}