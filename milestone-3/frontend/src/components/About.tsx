import React from "react";
import "./About.css" 

export default function About() {
    return (
        <div className = "about_section">
            <h1> About Me:</h1>
            <p> I am not actually a baker. All recipes, ingredient lists, and images are property of Tasty.</p> 
            {/* makes the tasty logo clickable and takes the user straight to the tasty site, more specifically the dessert page, as all the recipes I used where desserts  */}
            <a href= "https://tasty.co/topic/desserts">
                <img id = "tasty_logo" src = "http://www.licensingmattersglobal.com/wp-content/uploads/2019/03/News-Tasty.jpg"/>
            </a>
        </div>
    );
}