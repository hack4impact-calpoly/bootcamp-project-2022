import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav>
            <div className="flex-container">
                <Link to="/" className="page">Home</Link>
                <Link to="/about" className="page">About</Link>
            </div>
        </nav>
    )
}

export default Navbar;