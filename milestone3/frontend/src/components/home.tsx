import React, { useEffect } from "react";
import "./home.css";
import recipes, { Recipe } from "../recipeData";
import RecipePreview from './recipePreview';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
      fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => setExternalRecipes(data));
    }, []);

  return (
    <body>
        <div className="cards" id="recipe-list">
            {recipes.map((recipe) => (
              <RecipePreview {...recipe}/>
            ))}
            {externalRecipes.map((recipe) => (
              <RecipePreview {...recipe} external/>
          ))}
        </div>
    </body>
  );
}
