import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
        <a className="page-link" href="home.html">Home</a>
        <a className="title-box" href="home.html">
            <h1 className="title-text">Fall Classics</h1>
        </a>
        <a className="page-link" href="aboutme.html">About Me</a>
    </header>
  );
}