import React from 'react'
const gordon = require("../images/gordon.gif")
require('../css/RecipePreview.css')

function About() {
  return (

    <div>
        <h1 id = "aboutHeader"><a href = "#hi">Click to see me in the kitchen</a> </h1>
        <img src ={String(gordon)} id = "gordon"/>
        <p id = "hi"> </p>
    </div>
  )
}

export default About