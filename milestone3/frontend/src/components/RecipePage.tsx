import React from 'react'
import { useParams } from 'react-router-dom'
import recipes from '../recipeData';
import './RecipePage.css'

export default function RecipeDetail() {
    const { id } = useParams();
    const recipe = recipes[Number(id)];
    
    return (
        <div className='recipe-page'>
            <div className="recipe-detail-info">
                <img src={recipe.image} alt="img" />
                <div className="recipe-info-right">
                    <div className="header">
                        <h1>{recipe.name}</h1>
                        <p>{recipe.description}</p>
                    </div>
                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            {recipe.ingredients.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="preparation">
                <h2>Preparation</h2>
                <ol>
                    {recipe.instructions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
