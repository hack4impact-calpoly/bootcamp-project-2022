import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header>
        <div className = "banner">
            <Link to ='/' style = {{ textDecoration: 'none'}}>
                <div className = "banner-head">
                    <h1>Ryan's Recipes</h1>
                </div>
            </Link>
            <nav className = "navbar">
                <Link to ='/' style = {{ textDecoration: 'none'}}> 
                    <div className = "navbar_item">
                        <p> Home </p>
                    </div>
                </Link>
                <Link to ='/about' style = {{ textDecoration: 'none'}}>
                    <div className = "navbar_item">
                        <p> About </p>
                    </div>
                </Link>
            </nav>
        </div>
    </header>
  );
}