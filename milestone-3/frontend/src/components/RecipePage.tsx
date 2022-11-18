import { useParams } from "react-router-dom";
import recipe_list, { Recipe } from "../recipeData";
import React, { ChangeEvent, useState } from "react";
function RecipePage(props: Recipe) {
  const [newIngredient, setNewIngredient] = useState(""); //add this
  const [allIngredients, setAllIngredients] = useState(props.ingredients);
  const [newInstruction, setNewInstruction] = useState(""); //add this
  const [allInstructions, setAllInstructions] = useState(props.instructions);
  if(props){
  const recipe = props;
  console.log(recipe)
  if (recipe) {
    return (
      <div className="entire-page">
        <h1 className="recipe-header-page main_header">{recipe.name}</h1>
        <div className="recipe-page-first">
          <img src={recipe.image} alt={recipe.name} className="big-img" />
          <div className="recipe-desc-ingr">
            <p className="card-desc-page">{recipe.description}</p>

            <div className="ingredients">
              <div className="ingredient-body">
                <h2 className="text--purple recipe-header-page main_header">
                  Ingredients
                </h2>
                <ul>
                  {allIngredients.map((ingredient, i) => (
                    <li>{ingredient}</li>
                  ))}
                </ul>
          <input
            placeholder="2 cups of spinach"
            value={newIngredient} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewIngredient(e.target.value);
            }}
          />
          <button
            onClick={() =>
              setAllIngredients([...allIngredients, newIngredient])
            }
          >
            Add Ingredient
          </button>
              </div>
            </div>
          </div>
        </div>
        <div className="instructions">
          <h2 className="text--purple main_header recipe-header-page">
            Instructions
          </h2>
          <ol>
            {allInstructions.map((instruction, i) => (
              <li>{instruction}</li>
            ))}
          </ol>
          <input
            placeholder="serve and enjoy"
            value={newInstruction} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewInstruction(e.target.value);
            }}
          />
          <button
            onClick={() =>
              setAllInstructions([...allInstructions, newInstruction])
            }
          >
            Add Ingredient
          </button>
        </div>
      </div>
    );
  } else {
    return <h1>Sorry this recipe doesn't exist!</h1>;
  }
}
else{
  return <h1>Sorry this recipe doesn't exist!</h1>;
}
}

export default RecipePage;
