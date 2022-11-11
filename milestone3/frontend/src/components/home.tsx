import React from "react";
import "./home.css";
import recipes from '../recipeData';
import RecipePreview from './recipePreview';

export default function Home() {
  return (
    <body>
        <div className="cards" id="recipe-list">
            {recipes.map((recipe) => (
                <RecipePreview {...recipe} />
            ))}
        </div>
    </body>
  );
}
