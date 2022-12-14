import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="Navbar">
      <h1 id= "title"> Rajvir's Ristorante</h1>
      <div className="Switchpages">
       <Link to= "/" id="pagetitle"> Home </Link>
       <Link to= "/about" id="pagetitle">About the Chef</Link>
      </div>
    </header>
  );
}