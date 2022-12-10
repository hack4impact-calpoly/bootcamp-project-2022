import React, { useEffect, useState } from "react";
import "./navbar.css";
import recipes, { Recipe } from "../recipeData";
import RecipePreview from "./recipePreview";


export default function Home() {
    // const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    const [externalRecipes, setExternalRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
        .then((res) => res.json())
        .then((data) => setExternalRecipes(data));
    }, []);

  return (
    <main>
        {/* {recipes.map((r) => 
            <RecipePreview recipe={r} external={false}/>)} */}

        {externalRecipes.map((r) => 
            <RecipePreview recipe={r}/>)}
    </main>
  );
}