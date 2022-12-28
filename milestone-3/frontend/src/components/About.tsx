import React from 'react';
import "./about.css";

export default function About() {
  return (
        <main className="about-me recipe">
            <h1 className="recipe-header-page main_header">About Me</h1>
                <p className="main_header">
                   Name: &nbsp; Leticia Mezzetti
                </p>
                <p className="main_header">
                    The chef level I'd like to be
                </p>
        <img
        className="about-me-img"
        src="https://media.timeout.com/images/105854659/750/422/image.jpg"
        alt="a male chef holding a plate of food"
        />
    </main>
  );
}
