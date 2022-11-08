import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom'
import recipes from '../recipeData';
import './RecipePage.css'

export default function RecipePage() {
    const { id } = useParams();
    const recipe = recipes[Number(id)];
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients)
    
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
                            {allIngredients.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        <input
                            placeholder='2 cups of spinach'
                            value={newIngredient}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewIngredient(e.target.value)}
                        />
                        <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                            Add Ingredient
                        </button>
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
