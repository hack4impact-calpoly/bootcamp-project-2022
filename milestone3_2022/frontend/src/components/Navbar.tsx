import { Link } from "react-router-dom";
import "../App.css"

function Navbar() {
  return (
    <header className="header">
        <Link className="title-container" to="/">
            <h1 className="title">Chloe's Favorite Recipes</h1>
        </Link>
        <div className="nav">
            {/* <Link className="nav-item" to={randomRecipe()}>Can"t Decide?</Link>   */}
            <Link className="nav-item" to="/about">About Me</Link>  
        </div>
    </header>
  );
}

function randomRecipe() {
    let pages = [
        "/recipes/Ratatouille",
        "/recipes/TacoSoup",
        "/recipes/BeefandBroccoli",
        "/recipes/ananaBread"
    ];
    let i = Math.random() * pages.length;
    console.log(pages[i]);
    return pages[i];
}

export default Navbar;