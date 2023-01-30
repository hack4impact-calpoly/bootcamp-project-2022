import './Navbar.css';
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="header">
        <Link className="logo" to='/'>
            <h1>Angel Cooks</h1>
        </Link>
        <nav>
            <Link className="nav-links" to='/'>Home</Link>
            <Link className="nav-links" to='/about'>About</Link>
        </nav>
    </div> 
    )
}