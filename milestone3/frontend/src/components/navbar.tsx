import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <div id="site-title-container">
            <h1 id="title" onclick="location.href='index.html';">Get Cooking!</h1>
        </div>
        <nav id="nav-bar">
            <a class="nav-bar-links" href="index.html">
                Home Page
            </a>
            <a class="nav-bar-links" href="about.html">
                About Me
            </a>
        </nav>
    </header>
  );
}