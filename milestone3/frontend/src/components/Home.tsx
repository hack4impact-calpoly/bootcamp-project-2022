import React from 'react'
import RecipePreview from './RecipePreview';
import recipeData from "../recipeData.json"
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
const ramen = require('../images/ramen.jpg');
const burger = require('../images/burgerPic.jpeg');
const salmon = require('../images/salmon.jpeg');
require('../css/RecipePreview.css');


function Home () {
    console.log(recipeData)

  return (
    <div>
          <h1 className = "header">All the recipes you need right at your fingertips.</h1>

        <h2 className = "recipeTitle"> <a href = "#recipes">Recipes -{'>'}</a> </h2>
        <h1 id = "recipes">All Recipes</h1>
        {
            recipeData.map((recipe) => (
                <RecipePreview{...recipe}/>
            ))
        }
    </div>
  )
}

export default Home
