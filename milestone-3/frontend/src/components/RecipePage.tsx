import { useParams } from 'react-router-dom';
import recipeData from '../recipeData';
import React, { useState } from 'react';

function RecipePage() {
    const { name } = useParams();
    const recipe = recipeData.find(i => i.url === name); {/* Finds recipe corresponding to url */}
    const [newIngredient, setNewIngredient] = useState(''); { /* Will store user-inputted new ingredient */ } 
    const [allIngredients, setAllIngredients] = useState(recipe !== undefined ? recipe.ingredients : ['']);
    const [newStep, setNewStep] = useState('');
    const [allSteps, setAllSteps] = useState(recipe !== undefined ? recipe.steps : ['']);

    {/* Gets current list of ingredients, or just an empty string if the url isn't found. 
    Must use ternary operator because I can't put this after the return statement below by react hook rules */}


    if (recipe === undefined) { return (<p>Page not found</p>)} {/* Returns Page Not Found if no recipe corresponds to url */}
    return (
        <body>
        <header>
            {/* Will now use recipe.[property] to grab all necessary info about the recipe */}
            <h2>{recipe.name}</h2>
            <p>{recipe.desc}</p>
        </header>
        <main>
            <div className="flex-container-recipes">
                <img src={recipe.image} alt={recipe.alt}/>
                <div className="text">
                    <p><i><b>Ingredients:</b></i></p>
                    <ul>
                        {/* Recipe ingredients stored in array, maps each step to item in list */}
                        {allIngredients.map(ing => (
                            <li>{ing}</li>
                        ))}
                    </ul>
                    {/* Left off here, not sure what it's not adding new ingredient */}
                    <input value={newIngredient} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewIngredient(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                        Add Ingredient
                    </button> 
                </div>
            </div>
            <div className="flex-container-recipes">
                <div className="text steps">
                    <p><i><b>Steps:</b></i></p>
                    <ul>
                        {/* Recipe steps stored in array, maps each step to item in list */}
                        {allSteps.map(step => (
                            <li>{step}</li>
                        ))}
                    </ul>
                    <input value={newStep} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            setNewStep(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllSteps([...allSteps, newStep])}>
                        Add Step
                    </button>
                    <br></br>
                    <a href={recipe.source} target="_blank"><u>Recipe Source</u></a>
                </div>
            </div>
        </main>
        </body>
    )
}

export default RecipePage;