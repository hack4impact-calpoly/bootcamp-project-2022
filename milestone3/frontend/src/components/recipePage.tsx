import React from "react";
import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import "./recipePage.css";

export default function RecipePage() {
  const { id } = useParams();
  const curr: Recipe | undefined = recipeData.find(
    (recipe) => recipe.name === id
  );

  return (
    <body>
      <main>
        {/* <!-- recipe title and description --> */}
        <h1 className="recipe-title">{curr?.name}</h1>
        <p className="description">{curr?.description}</p>
        {/* <!-- ingredient list and image --> */}
        <div className="ingredient-box">
          <div className="ingredient-list">
            <h2>Ingredients</h2>
            <ul>
              {curr?.ingredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
          </div>
          <img className="image2" src={curr?.image} alt="image" />
        </div>
        {/* <!-- instruction list --> */}
        <div className="steps-box">
          <h3>Preparation</h3>
          <ol>
            {curr?.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </main>
    </body>
  );
}
