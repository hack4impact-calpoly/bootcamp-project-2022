import RecipePreview from "./RecipePreview";
import { useState, useEffect } from "react";
import Recipe from "../recipeInterface";

export default function Home() {
  //State variable to store all the external recipes
  const [recipes, setRecipes] = useState<Recipe[]>();

  //UseEffect for asynchronous fetching of recipe data
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []); //Only triggered on page load

  return (
    <main>
      <h1>Recipes</h1>
      {/* Renders recipe previews for each recipe item fetched */}
      {(recipes || []).map((recipe) => (
        <RecipePreview {...recipe} />
      ))}
    </main>
  );
}
