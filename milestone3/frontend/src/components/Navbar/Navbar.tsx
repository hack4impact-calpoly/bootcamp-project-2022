import { Link } from "react-router-dom"
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="bg">
      <h1>Oleks' Kitchen</h1>
      <nav>
        <ul className="navBarLinks">
          <Link to="/" className="link"><li>Home</li></Link>
          <Link to="/about" className="link"><li>About Me</li></Link>
        </ul>
      </nav>
   </div> 
  )
}