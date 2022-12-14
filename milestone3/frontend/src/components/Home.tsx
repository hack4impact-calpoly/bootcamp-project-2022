import React, { useEffect, useState } from "react";
import "./Home.css";
import RecipePreview from "./recipePreview";
// import recipes, { Recipe } from "../recipeData";

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      {/* cycle through recipes array to create RecipePreview components with their appropriate props */}
      {recipes.map((recipe) => (
        <RecipePreview name={recipe.name} image={recipe.image} />
      ))}
      {/* {externalRecipes.map((recipe) => (
        <RecipePreview name={recipe.name} image={recipe.image} external />
      ))} */}
    </main>
  );
}
