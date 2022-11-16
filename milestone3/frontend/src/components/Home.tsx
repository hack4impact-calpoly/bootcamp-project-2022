import React, { useEffect, useState } from 'react'
import './Home.css'
import recipes, { Recipe } from "../recipeData";
import RecipePreview from "./RecipePreview";

export default function Home() {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
      }, []);
    return (
        <main>
        <h4 className="minititle">Click a menu item for the recipe!</h4>
        <div className="menu">
            {recipes.map((curRecipe) => 
                <RecipePreview external={false} {...curRecipe}/>
            )};
        </div>
        <div className="menu">
            {externalRecipes.map((curRecipe) => 
                <RecipePreview external={true} {...curRecipe}/>
            )};
        </div>
    </main>
    );
  }