import "./home.css";
import RecipePreview from "./recipePreview";
import recipes, { Recipe } from "../recipeData";
import "./home.css"
import { useEffect, useState } from "react";

// home component
export default function Home() {


  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

  let AllRecipes = recipes.concat(externalRecipes)
  
  return (
    <main>
      <h1>Welcome to Tarini's Cookbox!</h1>
      {AllRecipes.map((recipe: { name: any; description: any; image: any; }) => (
        <RecipePreview
          name={recipe.name}
          description={recipe.description}
          image={recipe.image}
        />
      ))}
    </main>
  );
}