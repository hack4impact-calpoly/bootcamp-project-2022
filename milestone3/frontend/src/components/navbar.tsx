import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <header className ="header">
        <Link className="title-container" to="/">
            <h1 className="title">Dom's Italian Cuisine</h1>
        </Link>
        <nav>
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/about">About Me</Link>
        </nav>
    </header>
  );
}