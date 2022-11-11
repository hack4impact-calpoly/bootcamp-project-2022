import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import React, { useState } from "react";

//Recipe Page component
export default function RecipePage() {
  const [newIngredient, setNewIngredient] = useState(""); //add this
  const { id } = useParams(); //Get the id from the URL parameter
  // Get the correct Recipe object based on the given URL parameter
  const recipe: Recipe | undefined = recipeData.find(
    (recipe) => recipe.id === Number(id) //Cast to number type, since parameter is given as string
  );

  return (
    <main>
      <div className="recipe-container">
        <div className="recipe-content">
          <h1>{recipe?.name}</h1>
          <p>{recipe?.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {recipe?.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <h2>Instructions</h2>
          <ol>
            {recipe?.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
        <div>
          <img
            className="recipe-image"
            alt={recipe?.imgAlt}
            src={recipe?.image}
          />
        </div>
      </div>
    </main>
  );
}
