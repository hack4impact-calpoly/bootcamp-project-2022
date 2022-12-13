import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <div className = "banner">
            <a href = "index.html">
                <div className = "banner-head">
                    <h1>Ryan's Recipes</h1>
                </div>
            </a>
            <nav className = "navbar">
                <a href = "index.html"> 
                    <div className = "navbar_item">
                        <p> Home </p>
                    </div>
                </a>
                <a href= "about.html"> 
                    <div className = "navbar_item">
                        <p> About </p>
                    </div>
                </a>
            </nav>
        </div>
    </header>
  );
}