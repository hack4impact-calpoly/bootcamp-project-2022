import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Recipe } from "../types";
import './RecipePage.css';
export function RecipePage() {
  const { recipeName } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [newIngredient, setNewIngredient] = useState<string>("");
  const [newInstruction, setNewInstruction] = useState<string>("");
  const [refetch, setRefetch] = useState<boolean>(false);

  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`/recipe/${recipeName}`);
      const recipe = (await response.json() as Recipe);
      setRecipe(recipe);
    }
    try {
      fetchRecipe();
    } catch (error) {
      console.log(error);
    }
  }, [recipeName, refetch]);

  async function addIngredient() {
    try {
      await fetch(`/recipe/${recipeName}/ingredients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredient: newIngredient,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setNewIngredient("");
    setRefetch(e => !e);
  }

  async function addInstruction() {
    try {
      await fetch(`/recipe/${recipeName}/instructions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          instruction: newInstruction,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    setNewInstruction("");
    setRefetch(e => !e);
  }

  return (
    <div className="main">
      <div className="recipePanel">
      <img className="bigImage" src={recipe?.image} alt={recipe?.name} />
      <div>
        <h1>{recipe?.name} Recipe</h1>
        <p>
          {recipe?.description}
        </p>
        <h2>Ingredients</h2>
        <ul>
          {
            recipe?.ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>{ingredient}</li>
              )
            })
          }
        </ul>
        <div className="addForm">
          <input type="text" value={newIngredient} onChange={(event) => setNewIngredient(event.target.value)} />
          <button onClick={addIngredient}>Add Ingredient</button>
        </div>
      </div>
    </div>
    <div className="preparationPanel">
      <h1>
        Preparation
      </h1>
      <ol>
        {
          recipe?.instructions ? recipe?.instructions.map((step) => {
            return (
              <li key={step}>{step}</li>
            )
          }) : 
          <li>Sorry, we don't have instructions for this recipe yet</li>
        }
      </ol>
      <div className="addForm">
        <input type="text" value={newInstruction} onChange={(event) => setNewInstruction(event.target.value)} />
        <button onClick={addInstruction}>Add Instruction</button>
      </div>
    </div>
    </div>
  )
}