import RecipePreview from "./RecipePreview";
import recipeData from "../recipeData";
import { useState, useEffect } from "react";
import { Recipe } from "../recipeData";

export default function Home() {
  //State variable to store all the external recipes
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>();

  //UseEffect for asynchronous fetching of recipe data
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []); //Only triggered on page load

  return (
    <main>
      <h1>Recipes</h1>
      {/* Local recipe previews */}
      {[...recipeData].map((recipe) => (
        <RecipePreview {...recipe} />
      ))}
      {/* External recipe previews */}
      {(externalRecipes || []).map((recipe) => (
        <RecipePreview {...recipe} externalR/>
      ))}
    </main>
  );
}
