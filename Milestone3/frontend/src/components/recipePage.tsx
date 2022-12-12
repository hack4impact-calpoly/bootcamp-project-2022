import React from "react";
import "./recipePage.css";
import recipes, {Recipe} from '../recipeData';
import RecipePreview from "./recipePreview";
import { useParams } from "react-router-dom";


//function to get the index of the correct recipe from recipedata based off of the id provided from the link from recipe preview
function getCorrectRecipe(data: Recipe[], name: String | undefined) {
  for (let i = 0; i < data.length; i++) {
      if (data[i].name === name) {
          return i;
      }
  }
  return -1;
}

export default function RecipePage() {
  let { id } = useParams();
  let index = getCorrectRecipe(recipes, id);
  return(
    <div>
        <div className = "flex-container">
            <div>
                <img className="recipe-image" src={recipes[index].image}/>
            </div>
            <div className= "flex-content">
                <h1>{recipes[index].name}</h1>
                <p>{recipes[index].description}</p>
                {/* Ingredients */}
                <h2>Ingredients</h2>
                {recipes[index].ingredients.map(ingredient =>
                    <li>{ingredient}</li>)}
            </div>   
        </div>
        <h2>Preparation</h2>
        <ol>
            {/* Instructions */}
            {recipes[index].instructions.map(instruction =>
                <li>{instruction}</li>)}
        </ol>
    </div>
    )
  }
