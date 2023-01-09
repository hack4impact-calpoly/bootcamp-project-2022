import React, { useState, useEffect } from "react";
import RecipePreview from "./RecipePreview";
import recipes, { Recipe } from "../recipeData";
import "./Home.css";


export default function Home() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    // useEffect hook for any GET request. Queries the api for recipes
    useEffect(() => {
        // two .then() calls bc both fetch() and json() are asynch functions
        fetch("http://localhost:3001/recipe")
          .then((res) => res.json())
          .then((data) => setRecipes(data));
      }, []);

    return (
        <main>
        <div className = "main_header">
            <h1>Welcome to Random Recipes!</h1>
        </div> 
            {recipes.map((recipe) =>
                <RecipePreview 
                    name = {recipe.name}
                    description = {recipe.description} 
                    image = {recipe.image}
                    ingredients = {recipe.ingredients}
                    instructions = {recipe.instructions}
                    altDesc = {recipe.altDesc}
                        />
                    )}

            </main>
            );
        }
