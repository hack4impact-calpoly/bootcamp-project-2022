import React from "react";
import "./About.css";

import AboutChef from "src/util/AboutChef";
import aboutInfo from "src/data/aboutme.json";

export default function About() {
    const aboutme: AboutChef = aboutInfo;

    return (
        <div id="body-about">
            <main id="about-main">
                <div className="about-content">
                    <h1>About Me</h1>

                    <img className="portrait" src={process.env.PUBLIC_URL + aboutme.imagePath} alt="legendary chef Ameer Arsala"/>

                    <h3><u>Early life and career</u></h3>
                    <p>{aboutme.earlyLife}</p>
            
                    <br />

                    <h3><u>Career as chef</u></h3>
                    <p>{aboutme.careerAsChef}</p>

                    <br />
            
                    <h3><u>Recognition</u></h3>
                    <p>{aboutme.recognition}</p>
                </div>
            </main>
        </div>
    );
}