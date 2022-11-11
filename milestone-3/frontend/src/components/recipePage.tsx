import React from 'react';
import './recipePage.css'
import recipes, {Recipe} from "../recipeData"
import { useParams } from 'react-router-dom';
import RecipePreview from "./recipePreview";
import { Link } from 'react-router-dom';


export default function RecipePage() {
  
    let {name} = useParams();
    console.log(name);
    let recipe = recipes.find(x => x.name === name);
    console.log(recipe);
    if(!recipe) {
        return (
            <div></div>
        )
    }
    return (
    <div>
        
    <div className = "page-of-recipe1">
        <h2> <a className = "recipe-name">{recipe.name}</a> </h2>
        <div className = "recipe-body">
            <div className = "recipe-contents">
                <img src={recipe.image} alt="img"/>

                <ul>
                <h2>Ingredients</h2>
                {recipe.ingredients.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}
                    
                </ul>
           
                <ol>
                    <h2>Directions</h2>
                    {recipe.instructions.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                    })}
                </ol>
            </div>
        </div>
    </div>
    </div>

        );
}

