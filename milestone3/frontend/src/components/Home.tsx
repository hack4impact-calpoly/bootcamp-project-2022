import React from 'react'
import RecipePreview from './RecipePreview';
import recipeDataJson from "../recipeData.json"
import {useEffect, useState } from 'react';
import recipeData, {Recipe} from '../recipeData';
const ramen = require('../images/ramen.jpg');
const burger = require('../images/burgerPic.jpeg');
const salmon = require('../images/salmon.jpeg');
require('../css/RecipePreview.css');


function Home () {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe/")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
      }, []);

    console.log(recipeData)
  return (
    <>
        <h1 className = "header">All the recipes you need right at your fingertips.</h1>

        <h2 className = "recipeTitle"> <a href = "#recipes">Recipes -{'>'}</a> </h2>
        <h1 id = "recipes">All Recipes</h1>
        {
            recipeData.map((recipe) => (
                <RecipePreview{...recipe}/>
            ))
        }
        {
            externalRecipes.map((recipe) => (
                <RecipePreview{...recipe} external/>

            ))
        }
    </>
  )
}

export default Home
