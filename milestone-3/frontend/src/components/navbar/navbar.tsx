import React from "react";
import eggstroke from "../../images/eggstroke.png";
import "./navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <nav>
    <div className="container">
      <div className="nav-wrapper">
        <a href="index.html"
          ><img src={eggstroke} alt="eggielogo" width="50px"
        /></a>
        <ul className="nav-menu">
          <a href="index.html"><li>home</li></a>
          <a href="about.html"><li>about</li></a>
        </ul>
      </div>
    </div>
  </nav>
  );
}