import { useParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import Recipe from "../recipeInterface";

//Recipe Page component
export default function RecipePage() {
  const params = useParams(); //Contains the name of the desired recipe
  const [recipe, setRecipe] = useState<Recipe>({
    id: NaN,
    name: "",
    description: "",
    image: "",
    imgAlt: "",
    ingredients: [],
    instructions: [],
  }); //State variable for the displayed recipe, initialised with blank Recipe object
  const [newIngredient, setNewIngredient] = useState(""); //To store user inputted ingredient
  const [newInstruction, setNewInstruction] = useState(""); //To store user inputted instruction
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients); //To store and set full ingredients list
  const [allInstructions, setAllInstructions] = useState(recipe.instructions); //To store and set full ingredients list

  //UseEffect for setting the relevant recipe
  useEffect(() => {
    //Fetch if the desired recipe is external (as indicated by prop externalR)
    fetch("http://localhost:3001/recipe/" + params.name)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
    //Set recipe based on the local database if not externalR
  }, [params.name]); //Dependent on the params and props

  //UseEffect for setting the relevant state variables once the recipe has been set
  useEffect(() => {
    setAllIngredients(recipe.ingredients);
    setAllInstructions(recipe.instructions);
  }, [recipe]); //Triggered when recipe is updated

  //Function for adding an ingredient to the recipe
  function addIngredient() {
    fetch("http://localhost:3001/recipe/" + params.name + "/ingredient", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newIngredient: newIngredient }),
    });
    setAllIngredients([...allIngredients, newIngredient]);
  }

  //Function for adding an instruction to the recipe
  function addInstruction() {
    fetch("http://localhost:3001/recipe/" + params.name + "/instruction", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newInstruction: newInstruction }),
    });
    setAllInstructions([...allInstructions, newInstruction]);
  }

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
          <button onClick={addIngredient}>Add Ingredient</button>
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
              setNewInstruction(e.currentTarget.value);
            }}
          />
          {/* New instruction button */}
          <button onClick={addInstruction}>Add Instruction</button>
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
