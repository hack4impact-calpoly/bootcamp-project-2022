import React from "react";
import "./navbar.css";
import recipes from "../recipeData";
import RecipePreview from "./recipePreview";

export default function Home() {
  return (
    <main>
        {recipes.map((recipe) => 
            <RecipePreview {...recipe}/>)}
    </main>
  );
}