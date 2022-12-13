import { useParams } from "react-router-dom";
import Recipe from "../recipeInterface";
import { ChangeEvent, useState, useEffect } from "react";

export default function RecipePage() {
  const params = useParams();

  const [recipe, setRecipe] = useState<Recipe>({
    name: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: [],
  });

  const [newIngredient, setNewIngredient] = useState(""); //add this
  const [allIngredients, setAllIngredients] = useState(recipe?.ingredients);

  const [newInstruction, setNewInstruction] = useState("");
  const [allInstructions, setAllInstructions] = useState(recipe?.instructions);

  useEffect(() => {
    fetch(`http://localhost:3001/recipe/${params.id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
    //no else - initialized to internal | undefined as default
  }, [params.id]);

  //need this because page doesnt render recipe.ingredients/instructions, uses predifined array above
  useEffect(() => {
    setAllIngredients(recipe?.ingredients);
    setAllInstructions(recipe?.instructions);
  }, [recipe]);

  function addIngredient() {
    fetch(`http://localhost:3001/recipe/${params.id}/ingredient`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newIngredient: newIngredient }),
    });
    setAllIngredients([...allIngredients, newIngredient]);
  }
  function addInstruction() {
    fetch(`http://localhost:3001/recipe/${params.id}/instruction`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newInstruction: newInstruction }),
    });
    setAllInstructions([...allInstructions, newInstruction]);
  }

  return (
    <main>
      <div className="flex-container">
        <div>
          <img
            className="flex-image"
            src={recipe?.image}
            alt={recipe?.name}
          ></img>
        </div>
        <div className="flex-content">
          <h1>{recipe?.name}</h1>
          <p>{recipe?.description}</p>
          <h2>Ingredients</h2>
          <ul>
            {allIngredients?.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <input
            placeholder="new ingredient"
            value={newIngredient} // add newIngredient as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newIngredient
              setNewIngredient(e.target.value);
            }}
          />
          <button onClick={addIngredient}>Add Ingredient</button>
        </div>
      </div>
      {/* <!-- instructions list --> */}
      <h2>Instructions</h2>
      <ol>
        {allInstructions?.map((instruction) => (
          <li>{instruction}</li>
        ))}
      </ol>
      <input
        placeholder="new instruction"
        value={newInstruction} // add newIngredient as the input's value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // this event handler updates the value of newIngredient
          setNewInstruction(e.target.value);
        }}
      />
      <button onClick={addInstruction}>Add Instruction</button>
    </main>
  );
}

RecipePage.defaultProps = {
  external: false,
};

// npx prettier --write "src/components/RecipePage.tsx"
