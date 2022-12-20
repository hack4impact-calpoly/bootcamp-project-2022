import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className="main_header">
      <Link to="/" className="header_flex">
        <h1>Tung's Cookie Recipes!</h1>
      </Link>
      <nav className="nav_flex">
        <Link to="/" className="nav_button">
          Home
        </Link>
        <Link to="/about" className="nav_button">
          About me
        </Link>
      </nav>
    </header>
  );
}
