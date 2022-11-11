import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import homeIcon from '../resources/home.svg';
import userIcon from '../resources/me.png';

export default function Navbar() {
  return (
    <header className="nav-header">
      <Link to="/" className="title-container">
        <h1 className="title"> Dessert House</h1>
      </Link>
      <nav>
        <Link to="/" className="nav-page">
          <img className="nav-icon" src={homeIcon} alt="" />
          Home
        </Link>
        <Link to="/about-me" className="nav-page">
          <img className="nav-icon" src={userIcon} alt="" />
          About Me
        </Link>
      </nav>
    </header>
  );
}
