import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="title-container">
      <h1>welcome to hannah's recipe website!</h1>   
        <nav>
            <Link className = "nav-item" to='/'>home</Link>
            <Link className = "nav-item" to='/aboutme'>about me</Link>
        </nav>
    </div>
  );
}