import React, { ChangeEvent, useState } from 'react';
import { useParams } from "react-router-dom";
import './recipePage.css';
import Recipe from '../recipeData';
import recipes from '../recipeData';


function RecipePage(props: any) {
    const { name } = useParams();
    // make currentRecipe a variable that is the recipe with the id that matches the id in the url
    const currentRecipe = recipes?.find((recipe) => recipe.name === name);
    const [allIngredients, setAllIngredients] = useState(props.ingredients);
    const [newIngredient, setNewIngredient] = useState('');
    const [allInstructions, setAllInstructions] = useState(props.instructions);
    const [newInstruction, setNewInstruction] = useState('');


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
                <input
                    placeholder="2 cups of spinach"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setNewIngredient(e.target.value);
                    }}
                />
                <button onChange={() => setAllIngredients([...allIngredients, newIngredient])}>
                    Add Ingredient
                </button>             
    
                <h3 className="recipe-instructions-header">Instructions</h3>
                <ol className="recipe-instructions">
                    {currentRecipe?.instructions.map(instruction =>{
                        return <li>{instruction}</li>
                    })}
                </ol>
                <input
                    placeholder="boil the water"
                    value={newInstruction} // add newInstruction as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newInstruction
                        setNewInstruction(e.target.value);
                    }}
                />
                <button onChange={() => setAllInstructions([...allInstructions, newInstruction])}>
                    Add Instruction
                </button>    
            </div>
        </div>
    );
}

export default RecipePage;