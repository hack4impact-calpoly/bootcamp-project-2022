import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';
import Home from "../components/home"
import About from "../components/about"

export default function Navbar() {
    return (
        <div className = "flex-container">
            {/* flexbox for title and navigation. */}
            <header>
                <h1> Ryan's Recipes </h1>
                    <div className = "flex-container2">
                        <h2 className = "padding"> <Link to = "/"> Home</Link> </h2> 
                        <h2 className = "padding"> <Link to = "/about"> About </Link> </h2>
                    </div>  
            </header>
        </div>
    )
}

//export {}

