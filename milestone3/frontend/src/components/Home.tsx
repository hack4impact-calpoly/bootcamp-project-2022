import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import recipes from "../recipeData";
import RecipePreview from "./RecipePreview";

export default function Home() {
    return (
        <main>
        <h4 className="minititle">Click a menu item for the recipe!</h4>
        <div className="menu">
            {recipes.map((curRecipe) => 
                <RecipePreview path={curRecipe.path} image={curRecipe.image}/>
            )}
        </div>
    </main>
    );
  }