import React from "react";
import { Link } from "react-router-dom";
import eggstroke from "../../images/eggstroke.png";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
            <Link to="/"><img src={eggstroke} alt="eggielogo" width="50px" /></Link>
          <ul className="nav-menu">
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/about">
              <li>about</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
