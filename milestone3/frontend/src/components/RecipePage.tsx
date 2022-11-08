import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import recipes from '../recipeData';
import './RecipePage.css'

interface RecipePageProps {
    external: boolean;
}

export default function RecipePage(props: RecipePageProps) {
    const { name, id } = useParams();
    const defaultRecipe = recipes[Number(id)];
    const [recipe, setRecipe] = useState(defaultRecipe)
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients)
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions)

    useEffect(() => {
        if (props.external) {
            fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${name}`)
                .then(res => res.json())
                .then(data => {setRecipe(data[0])})
        } else {
            setRecipe(defaultRecipe)
        }
    }, [name, props.external])
    
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
                    {allInstructions.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ol>
                <input
                    placeholder='Pour and serve!'
                    value={newInstruction}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewInstruction(e.target.value)}
                />
                <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
                    Add Ingredient
                </button>
            </div>
        </div>
    )
}
