import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
    // const Header = () => (
    //     <header>
    //         <h1>Hay's Recipes</h1>
    //         <nav>
    //             <Link to='/'>Home</Link>
    //             <Link to='/About'>About</Link>
    //         </nav>
    //     </header>
    // );
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <h1> Hay's Recipes </h1>
      <nav>
      <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
      </nav>
    </header>
  );
}


