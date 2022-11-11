import React from 'react';
import './Style.css';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <main>
      <h1>About Me</h1>
      <div className="about-me">
        <h3>I love to make dessert. Hope you like the recipe here!</h3>
        <div className="emoji">
          <span>🤩</span>
        </div>
      </div>
    </main>
  );
}
