import React, { useState, useEffect } from "react";
import recipes, {Recipe} from "../recipeData";
import RecipePreview from "./recipePreview";

export default function Home() {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data))
    }, []);
    // const allRecipes = [...recipes,...externalRecipes]
    return (
        <div>
            {recipes.map(recipe =>
                <RecipePreview {...recipe}/>    
            )}
            {externalRecipes.map(recipe =>
                <RecipePreview {...recipe} external/>
            )}
        </div>
    );
}