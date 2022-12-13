import {Link} from "react-router-dom";

function Navbar(){
    return(
        <header className="header">
        <Link className="title" to="/">Eeshan's Eatery</Link>
        {/* <a className="title-container" href="recipes.html"> */}
            {/* <h1 className="title">Eeshan's Eatery</h1> */}
            <nav>
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/about">About Me</Link>
            </nav>
    </header>
    )
}

export default Navbar;