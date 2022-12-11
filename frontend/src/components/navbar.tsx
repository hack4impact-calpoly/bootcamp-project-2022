import "./navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
    return (
      // replace everything in between the <header> & <header /> tags
      // with your navbar code from your earlier milestones
      <header className="header">
       <p id="myheader">Ed's Kitchen </p>
        
        <nav>
               <Link  to='/' className="nav_item" > Home</Link>
               <Link to='/about ' className="nav_item" >About me </Link>
        </nav>



      </header>
    );
  }