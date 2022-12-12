import React, {useState} from 'react';
import './style.css';
import recipes from './recipeData';
import {useParams} from "react-router-dom";

export default function RecipePage() {
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.name === id);
    if (recipe === undefined) {
        throw new TypeError('Recipe does not exist');
    }

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

    return(
        <div className="flex-container">
            <div className="flex-content">
                <h1>{recipe.name}</h1>
                <p>{recipe.description}</p>
                <h2>Ingredients</h2>
                <ul>
                    {allIngredients.map(function(name, index) {
                        return <li key={index}>{name}</li>
                    })}
                </ul>
                <input
                    placeholder="A cup of love"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setNewIngredient(e.target.value);
                    }}
                />
                <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                    Add Ingredient
                </button>
            </div>
            <img className="flex-image" src={recipe.image} alt="food"/>
            <div className="flex-content">
                <h2>Instructions</h2>
                <ol>
                    {allInstructions.map(function(name, index) {
                        return <li key={index}>{name}</li>
                    })}
                </ol>
                <input
                    placeholder="Add milk"
                    value={newInstruction} // add newIngredient as the input's value
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setNewInstruction(e.target.value);
                    }}
                />
                <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
                    Add Instruction
                </button>
            </div>
        </div>
    );
}