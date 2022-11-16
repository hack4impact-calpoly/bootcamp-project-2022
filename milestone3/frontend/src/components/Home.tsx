import React, { useEffect, useState } from "react";
import "./Home.css";
import RecipePreview from "./recipePreview";
import recipes, { Recipe } from "../recipeData";

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

  return (
    <main>
      {/* cycle through recipes array to create RecipePreview components with their appropriate props */}
      {recipes.map((recipe) => (
        <RecipePreview name={recipe.name} image={recipe.image} />
      ))}
      {externalRecipes.map((recipe) => (
        <RecipePreview name={recipe.name} image={recipe.image} />
      ))}
    </main>
  );
}
