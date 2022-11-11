import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import { useState, ChangeEvent } from "react";

//Recipe Page component
export default function RecipePage() {
  const { name } = useParams(); //Get the id from the URL parameter
  // Get the correct Recipe object based on the given URL parameter
  const recipeFromName: Recipe | undefined = recipeData.find(
    (recipe) => recipe.name === name //Cast to number type, since parameter is given as string
  );

  let recipe = {} as Recipe; //Empty Recipe if undefined
  if (recipeFromName !== undefined) {
    //Check if Recipe is undefined
    recipe = recipeFromName;
  }

  const [newIngredient, setNewIngredient] = useState(""); //To store user inputted ingredient
  const [newInstruction, setNewInstruction] = useState(""); //To store user inputted instruction
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients); //To store and set full ingredients list
  const [allInstructions, setAllInstructions] = useState(recipe.instructions); //To store and set full ingredients list

  return (
    <main>
      <div className="recipe-container">
        <div className="recipe-content">
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {allIngredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <input
            placeholder="Ingredient"
            value={newIngredient} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewIngredient(e.currentTarget.value);
            }}
          />
          <button
            onClick={() =>
              setAllIngredients([...allIngredients, newIngredient])
            }
          >
            Add Ingredient
          </button>
          <h2>Instructions</h2>
          <ol>
            {allInstructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
          <input
            placeholder="Instruction"
            value={newInstruction} // add newInstruction as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewInstruction(e.currentTarget.value);
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
