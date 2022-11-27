import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

//Navbar that is rendered on each page. Uses react router links.
export default function Navigation() {
  return (
    <header className="header">
      <h1>
        <Link to="/">Sam's Recipes</Link>
      </h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/newRecipe">Add</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
