import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import "./recipePage.css";
import React, { ChangeEvent, useState } from "react";

export default function RecipePage() {
  const { id } = useParams();
  const curr: Recipe | undefined = recipeData.find(
    (recipe) => recipe.name === id
  );

  const [newIngredient, setNewIngredient] = useState("");
  const [allIngredients, setAllIngredients] = useState(
    curr?.ingredients ?? ["null"]
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
              {/* creating list items for each item in recipes.ingredients array */}
              {allIngredients.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ul>
            <input
              placeholder="2 cups of spinach"
              value={newIngredient} // add newIngredient as the input's value
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                // this event handler updates the value of newIngredient
                setNewIngredient(e.target.value);
                console.log(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setAllIngredients([...allIngredients, newIngredient]);
                console.log(newIngredient);
              }}
            >
              Add Ingredient
            </button>
          </div>
          <img className="image2" src={curr?.image} alt="image" />
        </div>
        {/* <!-- instruction list --> */}
        <div className="steps-box">
          <h3>Preparation</h3>
          <ol>
            {/* creating list items for each item in recipes.instructions array */}
            {curr?.instructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </main>
    </body>
  );
}
