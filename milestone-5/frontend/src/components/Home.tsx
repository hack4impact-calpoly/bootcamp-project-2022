import React, { useState, useEffect } from "react";
import RecipePreview from "./recipePreview";
import { Recipe } from '../App';

export default function Home() {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data))
    }, []);
    // const allRecipes = [...recipes,...externalRecipes]
    return (
        <div>
            {externalRecipes.map(recipe =>
                <RecipePreview {...recipe} external/>
            )}
        </div>
    );
}