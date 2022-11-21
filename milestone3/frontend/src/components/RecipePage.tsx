import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './RecipePage.css'

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export default function RecipePage() {
    const { name } = useParams();
    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: []
    });
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

    useEffect(() => {
        fetch(`http://localhost:3001/recipe/${name}`)
            .then(res => res.json())
            .then(data => {
                setRecipe(data)
                setAllIngredients(data.ingredients)
                setAllInstructions(data.instructions)
            })
    }, [name])

    const updateIngredient = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newIngredient })
        }
        fetch(`http://localhost:3001/recipe/${name}/ingredient`, requestOptions)
        .then(res => console.log(res));
        setAllIngredients([...allIngredients, newIngredient]);
    }

    const updateInstruction = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ newInstruction })
        }
        fetch(`http://localhost:3001/recipe/${name}/instruction`, requestOptions)
        .then(res => console.log(res));
        setAllInstructions([...allInstructions, newInstruction]);
    }
    
    return (
        <div className='recipe-page'>
            {recipe ? <div>
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
                    </div>
                    <div className="add-item">
                        <p>Add Ingredient</p>
                        <input
                            placeholder='2 cups of spinach'
                            value={newIngredient}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewIngredient(e.target.value)}
                        />
                        <button className="add-item-btn" onClick={updateIngredient}>
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
            </div>
            <div className="add-item">
                <p>Add Instruction</p>
                <input
                    placeholder='Pour and serve!'
                    value={newInstruction}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewInstruction(e.target.value)}
                />
                <button className="add-item-btn" onClick={updateInstruction}>
                    Add Instruction
                </button>
            </div>
            </div>: <h1>Not found</h1>}
        </div>
    )
}
