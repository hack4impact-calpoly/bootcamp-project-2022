import { useParams } from "react-router-dom";
import recipeData, { Recipe } from "../recipeData";
import "./recipePage.css";
import React, { ChangeEvent, useEffect, useState } from "react";

interface RecipePageProps {
  external?: boolean;
}

export default function RecipePage(props: RecipePageProps) {
  const { id } = useParams();

  const [recipe, setRecipe] = useState(recipeData[0]);

  useEffect(() => {
    if (props.external) {
      fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${id}`)
        .then((res) => res.json())
        .then((data) => setRecipe(data));
    } else {
      const curr: Recipe | undefined = recipeData.find(
        (recipe) => recipe.name === id
      );
      if (typeof curr === "undefined") {
        console.log("undefined recipe at specified name");
        setRecipe({
          name: "",
          description: "",
          image: "",
          ingredients: [],
          instructions: [],
        });
      } else {
        setRecipe(curr);
      }
    }
  }, [id, props.external]);

  const [newIngredient, setNewIngredient] = useState("");
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

  const [newInstruction, setNewInstruction] = useState("");
  const [allInstructions, setAllInstructions] = useState(recipe.instructions);

  return (
    <body>
      <main>
        {/* <!-- recipe title and description --> */}
        <h1 className="recipe-title">{recipe.name}</h1>
        <p className="description">{recipe.description}</p>
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
              }}
            />
            <button
              onClick={() => {
                setAllIngredients([...allIngredients, newIngredient]);
              }}
            >
              Add Ingredient
            </button>
          </div>
          <img className="image2" src={recipe.image} alt="image" />
        </div>
        {/* <!-- instruction list --> */}
        <div className="steps-box">
          <h3>Preparation</h3>
          <ol>
            {/* creating list items for each item in recipes.instructions array */}
            {allInstructions.map((instruction) => (
              <li>{instruction}</li>
            ))}
          </ol>
          <input
            placeholder="mix something, probably"
            value={newInstruction} // add newInstruction as the input's value
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              // this event handler updates the value of newInstruction
              setNewInstruction(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button
            onClick={() => {
              setAllInstructions([...allInstructions, newInstruction]);
              // console.log(newInstruction);
            }}
          >
            Add Instruction
          </button>
        </div>
      </main>
    </body>
  );
}

RecipePage.defaultProps = {
  external: false,
};
