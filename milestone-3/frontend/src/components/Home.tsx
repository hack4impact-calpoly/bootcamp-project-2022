import React, { useState, useEffect } from "react";
import RecipePreview from "./RecipePreview";
import recipes, { Recipe } from "../recipeData";


export default function Home() {
    // State var to store the list of Hu's Chews recipes
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

    // useEffect hook for any GET request. Queries the api for recipes
    useEffect(() => {
        // two .then() calls bc both fetch() and json() are asynch functions
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
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
                    external = {false}
                        />
                    )}

            {externalRecipes.map((recipe) =>
                            <RecipePreview 
                                name = {recipe.name}
                                description = {recipe.description} 
                                image = {recipe.image}
                                ingredients = {recipe.ingredients}
                                instructions = {recipe.instructions}
                                altDesc = {recipe.altDesc}
                                external = {true}
                                    />
                                )}
        </main>
            );
        }
