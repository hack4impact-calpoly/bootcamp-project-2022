import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import recipes from "../recipeData";
import RecipePreview from "./recipePreview";

export default function Home() {
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones

    <header>
      <div>
        <h1 className="important_titles">Welcome to Tung's Cookie Recipes!</h1>
      </div>

      {recipes.map((recipe) => (
        <RecipePreview  {...recipe} />
      ))}

    </header>
  );
}
