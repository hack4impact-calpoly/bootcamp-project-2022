import React from 'react';
import { useParams } from "react-router-dom";
import './recipePage.css';
import recipes from '../recipeData';

function RecipePage() {
    const { name } = useParams();
    // make currentRecipe a variable that is the recipe with the id that matches the id in the url
    const currentRecipe = recipes?.find((recipe) => recipe.name === name);
    

    return (
        <div className="recipe">
            <h1 className="recipe-title">{currentRecipe?.name}</h1>
            <img className="recipe-photo"
                src={currentRecipe?.image}
                alt={currentRecipe?.name} />
            <div>
                <h3 className="recipe-description-header">Description</h3>
                <p className="recipe-description">{currentRecipe?.description}</p>
                <h3 className="recipe-ingredients-header">Ingredients</h3>
                <ul className="recipe-ingredients">
                    {currentRecipe?.ingredients.map(ingredient =>{
                        return <li>{ingredient}</li>
                    })}
                </ul>
                <h3 className="recipe-instructions-header">Instructions</h3>
                <ol className="recipe-instructions">
                    {currentRecipe?.instructions.map(instruction =>{
                        return <li>{instruction}</li>
                    })}
                </ol>
            </div>
        </div>
    );
}

export default RecipePage;