import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import { useState, useEffect, ChangeEvent } from "react";

//Interface adds the externalR prop for determining the recipe location
interface RecipePageProps {
  externalR?: boolean;
}

RecipePage.defaultProps = {
  externalR: false,
};

//Recipe Page component
export default function RecipePage(props: RecipePageProps) {
  const params = useParams(); //Contains the name of the desired recipe
  const [recipe, setRecipe] = useState<Recipe>(recipeData[0]); //State variable for the displayed recipe
  const [newIngredient, setNewIngredient] = useState(""); //To store user inputted ingredient
  const [newInstruction, setNewInstruction] = useState(""); //To store user inputted instruction
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients); //To store and set full ingredients list
  const [allInstructions, setAllInstructions] = useState(recipe.instructions); //To store and set full ingredients list

  //UseEffect for setting the relevant recipe
  useEffect(() => {
    //Fetch if the desired recipe is external (as indicated by prop externalR)
    if (props.externalR) {
      fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + params.name)
        .then((res) => res.json())
        .then((data) => setRecipe(data[0]));
    }
    //Set recipe based on the local database if not externalR
    else {
      setRecipe(
        recipeData.find((x) => x.name === params.name) || recipeData[0]
      );
    }
  }, [params.name, props.externalR]); //Dependent on the params and props

  //UseEffect for setting the relevabt state variables once the recipe has been set
  useEffect(() => {
    setAllIngredients(recipe.ingredients);
    setAllInstructions(recipe.instructions);
  }, [recipe]); //Triggered when recipe is updated

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
          {/* New ingredient field */}
          <input
            placeholder="Ingredient"
            value={newIngredient} // set newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // Event handler updates the value of newIngredient as it is inputted
              setNewIngredient(e.currentTarget.value);
            }}
          />
          {/* New ingredient button */}
          <button
            onClick={
              () => setAllIngredients([...allIngredients, newIngredient]) //Set as all previous ingredients with new ingredient
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
          {/* New instruction field */}
          <input
            placeholder="Instruction"
            value={newInstruction} // set newInstruction as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // Event handler updates the value of newInstruction as it is inputted
              setNewInstruction(e.currentTarget.value);
            }}
          />
          {/* New instruction button */}
          <button
            onClick={
              () => setAllInstructions([...allInstructions, newInstruction]) //Set as all previous instructions with new instruction
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
