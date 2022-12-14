import { Link } from "react-router-dom";
import "../App.css";
import logo from "../images/potatoLogo.png"
// import SearchBar from "./SearchBar";
function NavBar() {
    
  return (
    <>
    <header>
      <Link to = "/"className="logo_container">
        <img
          src={logo}
          className="logo-img"
          alt="OnlyPotatoes Logo"
        />

        <h1 className="title_link text--purple">OnlyPotatoes</h1>
      </Link>
      <nav>
        <Link to="/" className="nav_link">
          Home
        </Link>
        <Link to="/About" className="nav_link">
          About Me
        </Link>
        <Link to="/create" className="nav_link">
          Create
        </Link>
      </nav>
    </header>
    </>
  );
}

export default NavBar;
