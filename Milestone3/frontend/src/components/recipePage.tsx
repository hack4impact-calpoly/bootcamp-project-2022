import React, { ChangeEvent, useEffect, useState } from 'react';
import "./recipePage.css";
import recipes, {Recipe} from '../recipeData';
import RecipePreview from "./recipePreview";
import { useParams } from "react-router-dom";

interface RecipePageProps {
  external?: boolean;
	// other props
}

export default function RecipePage(props: RecipePageProps) {
  const[recipe, setRecipe] = useState<Recipe>({
    name: "",
    description: "",
    image: "",
    ingredients: [],
    instructions: []
  })

  
  let { id } = useParams();
  const [newIngredient, setNewIngredient] = useState('');//add this
  const [newStep, setNewStep] = useState('');//add this
  
  const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
  const [allSteps, setAllSteps] = useState(recipe.instructions);

  useEffect(() => {
    if (props.external) {
      // make an API call with the url param & setRecipe
      fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id)
            .then((res) => res.json())
            .then((data) => setRecipe(data[0]))
    } else {
      // query all of your recipe data for the recipe you want & setRecipe
      setRecipe(recipes.find((recipe) => recipe.name === id) || recipes[0])
    }
  }, [id,props.external]);
	
  useEffect(() => {
    setAllIngredients(recipe.ingredients);
    setAllSteps(recipe.instructions);
}, [recipe]);

  return(
    <div>
        <div className = "flex-container">
            <div>
                <img className="recipe-image" src={recipe.image}/>
            </div>
            <div className= "flex-content">
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                {/* Ingredients */}
                <h2>Ingredients</h2>
                {allIngredients.map(ingredient =>
                    <li>{ingredient}</li>)}
            </div>   
        </div>
        <h2>Preparation</h2>
        <ol>
            {/* Instructions */}
            {allSteps.map(instruction =>
                <li>{instruction}</li>)}
        </ol>
        <input
          placeholder="2 cups of spinach"
          value={newIngredient} // add newIngredient as the input's value
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewIngredient(e.target.value);
          }}
        />
        <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
        Add Ingredient
      </button>
        <br></br>
        <input
          placeholder="Turn on the stove"
          value={newStep} // add newIngredient as the input's value
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewStep(e.target.value);
          }}
        />
      
      <button onClick={() => setAllSteps([...allSteps, newStep])}>
        Add Step
      </button>
    </div>
    )
  }

  RecipePage.defaultProps = {
    external: false,
  };