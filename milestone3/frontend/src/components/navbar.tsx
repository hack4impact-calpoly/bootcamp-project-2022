import '../App.css';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <header>
      <Link to="/" >
        <img src="images/logo.png" style={{ width: 180, height: 40 }} />
      </Link>
      <div className="navBarLinks">
        <li>
          <Link to="/" > Home </Link>
        </li>
        <li>
          <a>&nbsp;|&nbsp;</a>
        </li>
        <li>
          <Link to="/about" > About </Link>
        </li>
      </div>
    </header>
  )
}

//export {}

