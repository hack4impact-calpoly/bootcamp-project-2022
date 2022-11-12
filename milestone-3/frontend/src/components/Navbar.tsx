import { Link } from "react-router-dom"
import "../App.css"

function Navbar() {
    return(
        <div className="header-flex">
        <h1>Cute Confectionaries</h1>
        
        <div className="menu">
            { /* <a class="toolbar" href="index.html">Home</a> */ }
            <Link className="navbutton" to="/">Home</Link>
            { /* <a class="toolbar" href="about.html">Meet the Chef</a> */ }
            <Link className="navbutton" to="/about">Meet the Chef</Link>
        </div>
        </div>
    );
}

export default Navbar;