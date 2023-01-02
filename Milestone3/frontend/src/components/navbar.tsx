import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    // <div className="header">
    //   <a href="index.html" className="logo">Vasanth's Recipes</a>
    //   <div className="header-right">
    //     <a className="active" href="index.html">Home</a>
    //     <a href="about.html">About Me</a>
    //   </div>
    // </div>
    <header className="header">
		<h1 className="logo">Snappy Link Site</h1>
		<nav>
			<Link className="active" to='/'>Home</Link>
			<Link to='/about'>About</Link>
		</nav>
	</header>
  );
}