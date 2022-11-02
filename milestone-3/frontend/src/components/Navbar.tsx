import "./Navbar.css"

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo navbar-item">
                    <a className="nav-link">Yums</a>
                </div>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="navbar-item">
                        <a className="nav-link">About Me</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
}

export default Navbar