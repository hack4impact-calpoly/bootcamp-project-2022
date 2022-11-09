import React from "react";
import "./Home.css";
import RecipePreview from "./recipePreview";
import recipes from "../recipeData";

export default function Home() {
  return (
    <main>
      {/* cycle through recipes array to create RecipePreview components with their appropriate props */}
      {recipes.map((recipe) => (
        <RecipePreview name={recipe.name} image={recipe.image} />
      ))}
    </main>
  );
}
