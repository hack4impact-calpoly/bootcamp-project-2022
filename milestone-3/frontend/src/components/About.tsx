import React from "react";
import { Link } from "react-router-dom";
import "./About.css"
import seal from "./images/seal.webp"

export default function About() {
    return (
    <body>
    <div className = "about"> 
    {/* short description + meme stuff lol*/}
    <p> This is a website talking about Indian Food! I've never cooked any of these recipes because I have my own *secret* ones that my parents make </p>
    <img className="seal" src={seal} alt="seal"/>
    <p className = "t2"> Seal.</p>
    <p className = "home"> <Link to = "/" target = "_self" > <u> Home</u></Link></p>
    </div>
    </body>
    );
}