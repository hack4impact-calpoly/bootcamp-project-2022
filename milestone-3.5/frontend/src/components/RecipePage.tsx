import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import { useState, useEffect, ChangeEvent } from "react";

interface RecipePageProps {
  externalR?: boolean;
}

RecipePage.defaultProps = {
  externalR: false,
};

//Recipe Page component
export default function RecipePage(props: RecipePageProps) {
  const params = useParams();
  const [recipe, setRecipe] = useState<Recipe>(recipeData[0]);
  const [newIngredient, setNewIngredient] = useState(""); //To store user inputted ingredient
  const [newInstruction, setNewInstruction] = useState(""); //To store user inputted instruction
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients); //To store and set full ingredients list
  const [allInstructions, setAllInstructions] = useState(recipe.instructions); //To store and set full ingredients list

  useEffect(() => {
    if (props.externalR!) {
      fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + params.name)
        .then((res) => res.json())
        .then((data) => setRecipe(data[0]));
    } else {
      setRecipe(
        recipeData.find((x) => x.name === params.name) || recipeData[0]
      );
    }
  }, [params.name, props.externalR]);

  useEffect(() => {
    setAllIngredients(recipe.ingredients);
    setAllInstructions(recipe.instructions);
  }, [recipe]);

  return (
    <main>
      <div className="recipe-container">
        <div className="recipe-content">
          <h1>{recipe.name}</h1>
          <p>{recipe.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {allIngredients?.map((ingredient) => (
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
              setAllIngredients([...(allIngredients || []), newIngredient])
            }
          >
            Add Ingredient
          </button>
          <h2>Instructions</h2>
          <ol>
            {allInstructions?.map((instruction) => (
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
              setAllInstructions([...(allInstructions || []), newInstruction])
            }
          >
            Add Ingredient
          </button>
        </div>
        <div>
          <img
            className="recipe-image"
            alt={recipe.imgAlt}
            src={recipe.image}
          />
        </div>
      </div>
    </main>
  );
}
