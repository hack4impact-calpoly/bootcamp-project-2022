import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
    <header>
      <a href="index.html" className="logo_container">
        <img
          src="./assets/potatoLogo.png"
          className="logo-img"
          alt="OnlyPotatoes Logo"
        />
        <h1 className="title_link text--purple">OnlyPotatoes</h1>
      </a>
      <nav>
        <a href="./index.html" className="nav_link">Home</a>
        <a href="./aboutMe.html" className="nav_link">About Me</a>
      </nav>
    </header>

    <main>
      <div className="main_header">
        <h1>Welcome to <span className="text--purple"> OnlyPotatoes!</span></h1>
      </div>

      <div className="recipe-home">
        <a href="./recipe1.html">
          <h2 className="recipe-header">Crispy Garlic Roasted Potatoes</h2>
        </a>
        <div className="recipe-card">
          <img
            src="./assets/Crispy-Garlic-Roasted-Potatoes.jpg"
            className="small-img"
            alt="Crispy Garlic Roasted Potatoes"
          />
          <p className="card-desc-home">
            Buttery, garlicky, fluffy inside with crisp, golden edges… crispy
            garlic roasted potatoes are a super simple side dish perfect with
            anything!! No need for bowls or pans when you can prepare AND cook
            your potatoes on ONE PAN!
          </p>
        </div>
      </div>

      <div className="recipe-home">
        <a href="./recipe2.html">
          <h2 className="recipe-header">Buttery Herb Mashed Potatoes</h2>
        </a>
        <div className="recipe-card">
          <img
            src="./assets/easy-garlic-mashed-potatoes.jpg"
            className="small-img"
            alt="Roasted Garlic Mashed Potatoes"
          />
          <p className="card-desc-home">
            Mashed potatoes are the ultimate comfort food, and these roasted
            garlic mashed potatoes take treating yourself to a whole other
            level. Thanks to the flavor powerhouse that is homemade roasted
            garlic, our creamy mashed potatoes are the quintessential sidekick
            to the best meals your table will ever see.
          </p>
        </div>
      </div>

      <div className="recipe-home">
        <a href="./recipe3.html">
          <h2 className="recipe-header">Crispy Homemade Waffle Fries</h2>
        </a>
        <div className="recipe-card">
          <img
            src="./assets/wafflefry.webp"
            className="small-img"
            alt="Crispy Homemade Waffle Friess"
          />
          <p className="card-desc-home">
            Each fry is coated in a layer of golden crisp that gives way to a
            soft, welcoming interior. They hit savory and umami with a hint of
            sweetness and they taste like potatoes, oil, and just the right
            amount of salt.
          </p>
        </div>
      </div>
    </main>
  </body>
  );
}

export default App;
