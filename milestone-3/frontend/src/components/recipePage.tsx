import React, { ChangeEvent } from 'react'
import "./recipePreview.css"
import { useParams } from 'react-router-dom';
import Navbar from './navbar';
import { useState } from 'react';
import { useEffect } from 'react';

interface Recipe{
    name: string,
    description: string,
    image: string,
    ingredients: string[],
    instructions: string[],
}

// Create a new interface so that the data fetched from the API can be used
interface Recipe_ext extends Recipe{
    '_id'? : string,
    '__v'? : number,
    external?: boolean;
}

export default function RecipePage() {
    // Use the `useParams` hook to access the URL parameters.
    const { name } = useParams(); 

    // Create state variables for the recipe, new ingredient and new instruction.
    const [recipe, setRecipe] = useState<Recipe_ext>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
        external: false,
        _id: "",
        __v: 0
    });
    
    const [error, setError] = useState("");
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState<string[]>([]);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState<string[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3001/recipe/${name}`)
        .then((response) => response.json())
        .then(recipeData => {
            setRecipe(recipeData)
            setAllIngredients(recipeData.ingredients)
            setAllInstructions(recipeData.instructions)
        })
        .catch(err => console.log(err))
    }, [name])


    function addIngredient(){
        fetch(
            `http://localhost:3001/recipe/${name}/ingredient`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "ingredient": newIngredient
                })
            }
            ).then(() => {
                setAllIngredients([...allIngredients,newIngredient])
                setNewIngredient("")
            })
            .catch(err => console.log(err))
    }

    function addInstruction(){
        fetch(
            `http://localhost:3001/recipe/${name}/instruction`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "instruction": newInstruction
                })
            }
            ).then(() => {
                setAllInstructions([...allInstructions,newInstruction]);
                setNewInstruction("")
            })
            .catch(err => console.log(err))
    }
    
    return (
    <body>
        <div className='recipe-box'>
            <div>
                <h1>{recipe.name}</h1>

                {/* Ingredients */}
                <h2>Ingredients</h2>
                <ul className='ingredients'>
                    {/* Maps each items in the ingredients array to a list item */}
                    {allIngredients.map(
                        item => (
                            <li className="ingredient"><label className="container">{item}<input type="checkbox" />
                            <span className="checkmark"></span>
                            </label></li>
                        )
                    )}
                </ul>
                <input 
                placeholder='2 cups of spinach'
                value = {newIngredient} // add newIngredient as the input's value
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewIngredient(e.target.value)}
                />
                <button onClick={addIngredient}
                >
                    Add Ingredient
                </button>
            </div>
                <div>
                    <img className="thumbnail-large" alt={recipe.name} src={recipe.image} />
                </div>             
        </div>
        
        <div>
            {/* Instructions */}
            <h2>Instructions</h2>
            <ol className='instructions'>
                {/* Maps each item in the instructions array to a list item. */}
                {allInstructions.map(
                    item => (
                        <li>{item}</li>
                    )
                )}
            </ol>
            <input 
                placeholder='Mix everything in a bowl'
                value = {newInstruction} // add newIngredient as the input's value
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewInstruction(e.target.value)}
                />
                <button onClick={addInstruction}
                >
                    Add Instruction
                </button>

        </div>
    </body>
    )
}

RecipePage.defaultProps = {
    external: false,
}