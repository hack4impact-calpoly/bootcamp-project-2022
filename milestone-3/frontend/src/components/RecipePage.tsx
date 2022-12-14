import { useParams } from "react-router-dom";
import recipe_list, { Recipe } from "../recipeData";
import React, { ChangeEvent, useEffect, useState } from "react";

interface RecipePageProps {
  external?: boolean;
}


function RecipePage(props: RecipePageProps) {
  const [ingredients, setIngredients] = useState<any[]>([]);
  const [newIngredient, setNewIngredient] = useState('');
  const [instructions, setInstructions] = useState<any[]>([]);
  const [newInstruction, setNewInstruction] = useState('');
  const [recipe, setRecipe] = useState<Recipe>();
  const {name} = useParams();



  //grabbing recipe from mongodb
  useEffect(() => {
    console.log(name)
    fetch("http://localhost:3001/recipe/" + name)
      .then((response) => response.json())
      .then((recipeData) => {
        const data = recipeData[0];
        setIngredients(data.ingredients)
        setInstructions(data.instructions)
        setRecipe(data);
      })
      .catch((err) => console.log(err));
  }, [name]);


  function addInstruction() {
    fetch("http://localhost:3001/recipe/" + name + "/instruction", 
    {method: "PUT", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({
        value: newInstruction,
        position: instructions.length
    })})
    .catch((error:any) => console.log(error))
    setInstructions([...instructions, newInstruction])
  }

  function addIngredient() {
    console.log("hello in add ingredient function")
    fetch("http://localhost:3001/recipe/" + name + "/ingredient", 
    {method: "PUT", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({
        value: newIngredient,
        position: ingredients.length
    })})
    .catch((error:any) => console.log(error))
    setIngredients([...ingredients, newIngredient])
    
    // .then((res) => res.json())
    // .then((data) => setAllIngredients(data));
  }

    if(recipe)
    {

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
                    {ingredients.map((ingredient, i) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
            <input className="input-button"
              placeholder="2 cups of spinach"
              value={newIngredient} // add newIngredient as the input's value
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                // this event handler updates the value of newIngredient
                setNewIngredient(e.target.value);
              }}
            />
            <button
              onClick={
                addIngredient
              }
            >
              Add Ingredient
            </button>
                </div>
              </div>
            </div>
          </div>
          <div className="instructions">
            <div className="instructions-body">
            <h2 className="text--purple main_header recipe-header-page">
              Instructions
            </h2>
            <ol>
              {instructions.map((instruction, i) => (
                <li>{instruction}</li>
              ))}
            </ol>
            <input className="input-button2"
              placeholder="serve and enjoy"
              value={newInstruction} // add newIngredient as the input's value
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                // this event handler updates the value of newIngredient
                setNewInstruction(e.target.value);
              }}
            />
            <button
              onClick={
                addInstruction

              }
            >
              Add Ingredient
            </button>
            </div>
          </div>
        </div>
      )
    }
    else{
      return (
        <h1>Page loading...</h1>
      )
    }
  } 

export default RecipePage;
