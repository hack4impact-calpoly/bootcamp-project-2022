import React from "react";
import "./home.css";
import { recipes } from "../recipeData";
import RecipePreview from "./RecipePreview";
import { useState, useEffect } from "react";

export interface Recipe {
    id:string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
      fetch("https://bootcamp-milestone-4.onrender.com/recipe")
     .then((res) => res.json())
     .then((data) => setExternalRecipes(data));
     
  }, []);
  
 
  return (
 

    <div>
        <div className="hero">
            <div className="container">
                <h1>Wecome To My Kitchen</h1>
                <p>I wish everyone who loves to cook would have this website bookmarked:)</p>
            </div>

        </div >
        <div className="main">
        {recipes.map((recipe:Recipe) => 
        
            <RecipePreview 
                 external={false}
                {...recipe}
            />
            )}
        {externalRecipes.map((externalRecipe:Recipe) => 
        
            <RecipePreview 
                external
                {...externalRecipe}
            />
            )}


        </div>
    </div>
  );
}