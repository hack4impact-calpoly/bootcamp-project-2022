import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import recipeData from "../recipeData.json"


interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string [];
    instructions: string [];
}
function RecipePage() {
    const {name} = useParams();
    const [recipe, setRecipe] = useState<Recipe>(recipeData.find((recipe) => recipe.name === name) || recipeData[0]);

  return (
    <div>
 <div className="recipe-body">
        <div className="recipe-left">
            <img src={recipe.image} className="pics"/>
            <h1>{recipe.name}</h1>

        </div>

        <div className="recipe-right">
            
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map(ingredient => 
                <li>{ingredient}</li>)}
            </ul>
        </div>
    </div>
    <div className="recipe-list">
        <h2>Instructions</h2>
        <ol>
        {recipe.instructions.map(instruction => 
                <li>{instruction}</li>)}
        </ol>
    </div>
    </div>
  )
}

export default RecipePage