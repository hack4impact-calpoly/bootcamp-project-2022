import React from 'react'
import "../recipeData.ts"
import "./recipePreview.css"
import { useParams } from 'react-router-dom';
import { Recipe } from '../recipeData';
import Navbar from './navbar';
import recipes from '../recipeData'; 


export default function RecipePage() {
    const { name } = useParams(); 
    // Find the recipe corresponding to the selected option.
    const recipe = recipes.find(i => i.short === name);
    if (recipe === undefined) { return (<div>Page not found</div>)} 
    return (
    <body>
        <div className='recipe-box'>
            <div>
                <h1>{recipe.name}</h1>
                <h2>Ingredients</h2>
                <ul className='ingredients'>
                    {/* Maps each items in the ingredients array to a list item */}
                    {recipe.ingredients.map(
                        item => (
                            <li className="ingredient"><label className="container">{item}<input type="checkbox" />
                            <span className="checkmark"></span>
                            </label></li>
                        )
                    )}
                </ul>
            </div>
                <div>
                    <img className="thumbnail-large" alt={recipe.name} src={recipe.image} />
                </div>             
        </div>
        <div>
            <h2>Instructions</h2>
            <ol className='instructions'>
                {/* Maps each item in the instructions array to a list item. */}
                {recipe.instructions.map(
                    item => (
                        <li>{item}</li>
                    )
                )}
            </ol>
        </div>
    </body>
    )
}