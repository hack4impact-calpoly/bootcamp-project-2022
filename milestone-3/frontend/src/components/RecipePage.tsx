import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import "./RecipePage.css";

interface RecipePageProps {
    external?: boolean;
  }

  RecipePage.defaultProps = {
    external: false
  };

  export default function RecipePage(props: RecipePageProps){

    const {id} = useParams();
    const target = recipes.find(recipe => recipe.name == id);

    const [recipe, setRecipe] = useState<Recipe>({
      name: "",
      description: "",
      image: "",
      ingredients: [],
      instructions: [],
      altDesc: ""
    });

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    const [newInstructions, setNewInstructions] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

    useEffect(() => {
      if (props.external) {
              fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id)
              .then((res) => res.json())
              .then((data) => {setRecipe(data[0])
              setAllIngredients(data[0].ingredients)
              setAllInstructions(data[0].instructions)
              });  

      } else {
          setRecipe(recipes.find((recipe) => recipe.name === id) || recipes[0])
          setRecipe(recipes.find((recipe) => recipe.name === id) || recipes[0])
        }
      }, [id, props.external]);

      useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllInstructions(recipe.instructions);
      }, [recipe]);

  return(

    <body>
    <div className = "all-page">
        <h1 className="page-recipe-header main-header">{recipe.name}
        </h1>
        <div className="recipe-page-first">
        <img 
            src = {recipe.image}
            alt = {recipe.altDesc}
            className = "recipe-img"
            />
        <div className = "recipe-desc-ingr">
        <p className = "page-card-desc">{recipe.description}</p>

        <div className = "ingredients">
        <div className = "body-ingredients">
          <h3 className = "page-recipe-header main-header">Ingredients</h3>
                <ul>
                    {allIngredients.map(function(name, index) {
                      return <li key = {index} > {name}</li>;
                    })}
                </ul>
        <div>
              <input
                  placeholder = "2 cups of spinach"
                  value={newIngredient} // add newIngredient as the input's value
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    // this event handler updates the value of newIngredient
                    setNewIngredient(e.target.value);
                  }}
                />

              <button onClick ={() => setAllIngredients([...allIngredients, newIngredient])}>
              Add Ingredient
              </button>
          </div>
          </div>
          </div>
          </div>
        <div className = "instructions">
                  <h3 className="recipe-header-page main-header">instructions</h3>
                      <ol>
                        {allInstructions.map(function(name, index) {
                                return <li key={index} > {name} </li> ;
                          })}
                      </ol>
              <input
                  placeholder = "Sauté for 30 seconds"
                  value={newInstructions} // add newInstructions as the input's value
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  // this event handler updates the value of newInstructions
                                    setNewInstructions(e.target.value);
                                }}
                            />
                            <button onClick={() => setAllInstructions([...allInstructions, newInstructions])}>
                                Add Instruction
                            </button>
          </div>
          </div>
          </div>
      </body>
  )
};
