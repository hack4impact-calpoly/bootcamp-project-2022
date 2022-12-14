import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className="header">
        <Link className="title-container" to="/">
            <h1 className="title">Damon's Cheerios</h1>
        </Link>

        <nav className="nav">
            <Link className="nav-item" to="/about">About Me</Link>
        </nav>
    </header>
  );
}