import RecipePreview from "./recipePreview";
import Recipe from "../recipeInterface";
import { useState, useEffect } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <main>
      <h1 className="blink_me">Select a Cookie!</h1>
      {/* recipes list */}
      {recipes.map((recipe) => (
        <RecipePreview {...recipe} />
      ))}
    </main>
  );
}
