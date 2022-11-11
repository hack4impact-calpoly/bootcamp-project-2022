import RecipePreview from "./RecipePreview";
import recipeData from "../recipeData";
import { useState, useEffect } from "react";
import { Recipe } from "../recipeData";

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>();

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

  return (
    <main>
      <h1>Recipes</h1>
      {[...recipeData, ...(externalRecipes || []),].map((recipe) => (
        <RecipePreview {...recipe} />
      ))}
    </main>
  );
}
