import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header className="header">
    <Link className="title-container" to="/">
      <h1 className="title">Cookie Cutters</h1>
    </Link>
    <nav>
			<Link className="nav-item" to='/'>Home</Link>
			<Link className="nav-item" to='/about'>About</Link>
		</nav>
  </header>
  );
}