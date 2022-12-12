import RecipePreview from "./recipePreview";
import recipes, { Recipe } from "../recipeData";
import { useState, useEffect } from "react";

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

  return (
    <main>
      <h1 className="blink_me">Select a Cookie!</h1>
      {/* recipes list */}
      {recipes.map((recipe) => (
        <RecipePreview {...recipe} />
      ))}

      {externalRecipes.map((recipe) => (
        <RecipePreview {...recipe} external />
      ))}
    </main>
  );
}
