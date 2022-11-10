import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
    
      <nav className="nav">
            <div className="container">
                <h1 className="logo"><a href="/index.html" className="current">MyKitchen</a> </h1>
                <ul>
                    <li><a href="/index.html" className="current">Home</a></li>
                    <li><a href="/about.html">About</a></li>  
                </ul>
            </div>
        </nav>
    </header>
  );
}