import React, { useState, useEffect, ChangeEvent } from 'react';
import { useParams } from "react-router-dom";
import { Recipe } from "../recipeData";
import "./RecipePage.css";

/*interface RecipePageProps {
    external?: boolean;
  }

  RecipePage.defaultProps = {
    external: false
  };
*/

  export default function RecipePage(){

    const [recipe, setRecipe] = useState<Recipe>({
      name: "",
      description: "",
      image: "",
      ingredients: [],
      instructions: [],
      altDesc: ""
    });

    const {name} = useParams();
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    const [newInstructions, setNewInstructions] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${name}`)
      .then((response) => response.json())
      .then((recipeData) => {
      setAllIngredients(recipeData[0].ingredients)
      setAllInstructions(recipeData[0].instructions)
      setRecipe(recipeData[0]);
      })
    .catch((err) => console.log(err));
  }, [name]);

  const addIngredient = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ingredient: newIngredient})
    }
    fetch(`http://localhost:3001/recipes/${name}/ingredient`, requestOptions)
      .then(res => console.log(res))
      setAllIngredients([...allIngredients, newIngredient]);
}

  const addInstruction = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({instruction: newInstructions})
    }
      fetch(`http://localhost:3001/recipes/${name}/instruction`, requestOptions)
        .then(res => console.log(res));
        setAllInstructions([...allInstructions, newInstructions]);
  }

  
  if(recipe):
    {
      return(
        <body>
        <div className = "all-page">
            <h1 className="page-recipe-header main-header">{recipe.name}
            </h1>
            <div className="recipe-page-first">
            <img 
                src= {recipe.image}
                alt= {recipe.altDesc}
                className="recipe-img"
                />
            <div className="recipe-desc-ingr">
            <p className="page-card-desc">{recipe.description}</p>

            <div className="ingredients">
            <div className = "body-ingredients">
              <h3 className = "page-recipe-header main-header">Ingredients</h3>
                    <ul>
                        {allIngredients.map(function(name, index) {
                          return <li key = {index} > {name}</li>;
                        })}
                    </ul>
            <div>
                  <input
                      placeholder="2 cups of spinach"
                      value = {newIngredient} // add newIngredient as the input's value
                      onChange = {(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setNewIngredient(e.target.value);
                      }}
                    />
                  <button onClick ={addIngredient}> Add Ingredient </button>
              </div>
              </div>
              </div>
              </div>

            <div className="instructions">
                      <h3 className="recipe-header-page main-header">Instructions</h3>
                          <ol>
                            {allInstructions.map(function(name, index) {
                                    return <li key={index} > {name} </li> ;
                              })}
                          </ol>
                  <input
                      placeholder= "Sauté for 30 seconds"
                      value={newInstructions} // add newInstructions as the input's value
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      // this event handler updates the value of newInstructions
                                        setNewInstructions(e.target.value);
                                    }}
                                />
                                <button onClick={addInstruction}> Add Instruction </button>
              </div>
              </div>
              </div>
          </body>
      )
    }
  };
