import React, { useEffect, useState } from 'react'
import './Home.css'
import recipes, { Recipe } from "../recipeData";
import RecipePreview from "./RecipePreview";

export default function Home() {
    const [DBRecipes, setDBRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/recipe")
          .then((res) => res.json())
          .then((data) => setDBRecipes(data));
      }, []);
    return (
        <main>
        <h4 className="minititle">Click a menu item for the recipe!</h4>
        <div className="menu">
            {DBRecipes.map((curRecipe) => 
                <RecipePreview external={true} {...curRecipe}/>
            )};
        </div>
        {/* <div className="menu">
            {externalRecipes.map((curRecipe) => 
                <RecipePreview external={true} {...curRecipe}/>
            )};
        </div> */}
    </main>
    );
  }