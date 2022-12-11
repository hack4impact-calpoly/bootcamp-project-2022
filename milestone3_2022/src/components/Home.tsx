import RecipePreview from "./RecipePreview";
import recipes, { Recipe } from "../recipeData";
import "../App.css"

// milestone 3.5
import { useState, useEffect } from "react";

export default function Home() {
  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, [])
  
  let myRecipes = [...recipes];
  let externalRecipes = [...fetRecipes];
  
  return (
    <main className="recipes">
      {myRecipes.map((recipe) => (
        <RecipePreview {...recipe}/>
      ))}
      {externalRecipes.map((recipe) => (
        <RecipePreview {...recipe}/>
      ))}
    </main>
  );
}