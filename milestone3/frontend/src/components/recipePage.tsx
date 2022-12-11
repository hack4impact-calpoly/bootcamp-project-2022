import React from 'react';
import './style.css';
import recipes from './recipeData';
import {useParams} from "react-router-dom";

export default function RecipePage() {
    const {id} = useParams();
    let recipe = recipes.find(recipe => recipe.name === id);
    return(
        <div className="flex-container">
            <div className="flex-content">
                <h1>{recipe?.name}</h1>
                <p>{recipe?.description}</p>
                <h2>Ingredients</h2>
                <ul>
                    {recipe?.ingredients.map(function(name, index) {
                        return <li key={index}>{name}</li>
                    })}
                </ul>
            </div>
            <img className="flex-image" src={recipe?.image} alt="food"/>
            <div className="flex-content">
                <h2>Instructions</h2>
                <ol>
                    {recipe?.instructions.map(function(name, index) {
                        return <li key={index}>{name}</li>
                    })}
                </ol>
            </div>
        </div>
    );
}