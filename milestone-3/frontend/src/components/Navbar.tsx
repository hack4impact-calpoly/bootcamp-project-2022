import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <div className="title-box">
        <h1 className="title-txt">Nick's Filipino Feasts</h1>
        <img src="https://cdn.britannica.com/73/3473-004-6E573BFA/Flag-Philippines.jpg" className="pic"/>
        <nav>
            <a href="index.html" className="title-links">Home</a>
            <a href="about.html" className="title-links">About Me</a>
        </nav>
    </div>    
    </header>
  );
}