import React from 'react';
import "./About.css";

export default function About() {
    return (
        <header>
            <h1 className="title-header">About Me</h1>
                <div className="description-box">
                    <h3>Nick is an amateur chef who basically cooks chicken, steak, eggs, and rice. His specialty is a 1500 calorie bowl of greek yogurt mixed with almond butter, oats, and protein powder...</h3>
                    <img className="pic" alt="Protein oats pic" src="https://ohsheglows.com/wp-content/uploads/2011/02/IMG_0235.jpg"/>
                </div>
        </header>
    );
}