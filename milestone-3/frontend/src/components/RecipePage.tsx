import { Recipe } from "../recipeInterfaces";
import './RecipePage.css'
import React, { useState, useEffect } from "react";

export default function RecipePage(recipe: Recipe ) {
    // Creates an array (state variable) to store the recipe by-name drawn from MongoDB using the API 
    // defined in index.ts in the backend folder. Initializes that recipe object with an empty recipe.
    let [rec, setRec] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: []
    });

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(rec.ingredients);
    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(rec.instructions);

    useEffect(() => {
        setAllIngredients(rec.ingredients);
        setAllInstructions(rec.instructions);
    }, [rec]);

    // Calls on the Milestone 4 API to deliver recipe data, formats that data as an array of JSON 
    // objects, then sets the state variable for the external recipes to that array of JSON objects.
    useEffect(() => {
        fetch(`http://localhost:3001/recipe/${recipe.name}`)
        .then((res) => res.json())
        .then((data) => setRec(data))
    }, []);
    
    // A function for adding ingredients that passes a request with a JSON object as a string to the 
    // API for adding ingredients. This object includes the ingredient to be added to the ingredients 
    // database. The function then updates the state variable for ingredients to include the new
    // ingredient.
    function addIngredient(){
        const optionsObject = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newIngredient})
        }
        fetch(`http://localhost:3001/recipe/${recipe.name}/ingredient`, optionsObject
        ).then(res => res.json()).then(json => console.log(json))
        setAllIngredients([...allIngredients, newIngredient])
    }

    function addInstruction(){
        const optionsObject = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({newInstruction})
        }
        fetch(`http://localhost:3001/recipe/${recipe.name}/instruction`, optionsObject
        ).then(res => res.json()).then(json => console.log(json))
        setAllInstructions([...allInstructions, newInstruction])
    }

    return(
        <div className="ingredients-recipe-layout">
            {/*Flexbox with a list of ingredients, drawn from recipeData.ts*/}
            <div className="ingredients-or-recipe">
                <h2>Ingredients</h2>
                <ul className="ingredients-or-recipe-text">
                    {
                    allIngredients.map((ingredient) => (<li>{ingredient}</li>))
                    }
                </ul>
                <input
                    placeholder="3 scoops of disappointment"
                    value={newIngredient}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewIngredient(e.target.value)
                    }}
                />
                <button onClick={addIngredient}>
                    Add Ingredient
                </button>
            </div>
            {/*Flexbox with a list of steps, drawn from recipeData.ts*/}
            <div className="ingredients-or-recipe">
                <h2>Recipe</h2>
                <ol className="ingredients-or-recipe-text">
                    {
                    allInstructions.map((step) => (<li>{step}</li>))
                    }
                </ol>
                <input
                    placeholder="Place banana in microwave"
                    value={newInstruction}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setNewInstruction(e.target.value)
                    }}
                />
                <button onClick={addInstruction}>
                    Add Step
                </button>
            </div>
        </div>
    )
}