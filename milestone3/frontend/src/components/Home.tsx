import React from "react";
import "./style.css";
import recipes from './recipeData';
import {Recipe} from './recipeData';
import RecipePreview from './recipePreview';

export default function Home() {
    return (
      <div>
        <h1>Welcome to Dom's Italian Cuisine!</h1>
        {recipes.map((recipe: Recipe) => (
            <RecipePreview {...recipe}/>
        ))}
      </div>
    );
  }