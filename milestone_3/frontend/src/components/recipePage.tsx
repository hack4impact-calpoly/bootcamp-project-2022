import { useParams } from "react-router-dom";
// import recipes, { Recipe } from "../recipeData";
import "./recipePage.css";
import { Link } from "react-router-dom";
import React, { ChangeEvent, useEffect, useState } from "react";
import { isButtonElement } from "react-router-dom/dist/dom";
import RecipePreview from "./recipePreview";



interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}


const RecipePage = () => {
  const { id } = useParams();
  const [newIngredient, setNewIngredient] = useState("");
  const [newProcedure, setNewProcedure] = useState("");
  const [allIngredients, setAllIngredients] = useState<string[]>([]);
  const [allProcedures, setAllProcedures] = useState<string[]>([]);

  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  // const [allRecipes, setAllRecipes] = useState<Recipe[]>(recipes);
  const [recipe, setRecipe] = useState<Recipe>();
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => {
        setExternalRecipes(data);
        return data;
      })
      // .then((data) => {
      //   setAllRecipes([...allRecipes, ...data]);
      // });
  }, []);

  useEffect(() => {
    let i = externalRecipes.find((x) => x.name === id);
    setRecipe(
      i
        ? i
        : {
            name: "",
            description: "",
            image: "",
            ingredients: [],
            instructions: [],
          }
    )
    if (recipe) {
        setAllIngredients(recipe.ingredients);
        setAllProcedures(recipe.instructions);
    }
  }, [externalRecipes])


if (!recipe) {
  return (<div></div>)
}


function addIngredient() {
  console.log(newIngredient)
  fetch("http://localhost:3001/recipe/" + recipe?.name + "/ingredient", {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newIngredient: newIngredient })
    });
    setAllIngredients([...allIngredients, newIngredient])
}

function addInstruction() {
  console.log(newProcedure);
  fetch("http://localhost:3001/recipe/" + recipe?.name + "/instruction", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ newProcedure: newProcedure}),
  });
  setAllProcedures([...allProcedures, newProcedure]);
}


return (
  <p>
    <img className="recipe_img" src={recipe.image} alt={recipe.name} />

    <div className="recipe_section">
      <p className="recipe_text">{recipe.description}</p>
    </div>
    <p className="recipe_text">
      Ingredients
      <ul>
        {allIngredients.map(function (name, index) {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <input
        placeholder="3 cups flour"
        value={newIngredient} // add newIngredient as the input's value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // this event handler updates the value of newIngredient
          setNewIngredient(e.currentTarget.value);
        }}
      />
      <button onClick={addIngredient}>Add Ingredient</button>
      <p className="recipe_text">Procedure</p>
      <ol className="recipe_text">
        {allProcedures.map(function (name, index) {
          return <li key={index}>{name}</li>;
        })}
      </ol>
      <input
        placeholder="Preheat oven to 350"
        value={newProcedure} // add newIngredient as the input's value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // this event handler updates the value of newIngredient
          setNewProcedure(e.target.value);
        }}
      />
      <button onClick={addInstruction}>Add Instruction</button>
    </p>
  </p>
);
;}


export default RecipePage;
