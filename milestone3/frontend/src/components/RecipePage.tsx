import './RecipePage.css';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[]
}

function RecipePage () {
    const { name } = useParams();

    const[recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: []
    });

    // getting receipe data
    useEffect(() => {
        fetch(`http://localhost:3001/recipe/${name}`)
        .then((response) => response.json())
        .then((recipeData) => setRecipe(recipeData))
        .catch((err) => console.log(`Error: ${err}`))
    }, [name])

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe?.ingredients);

    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe?.instructions);

    useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllInstructions(recipe.instructions);
    }, [recipe]);

    // adding ingredient function using our endpoint
    function addIngredient() {
        fetch(`http://localhost:3001/recipe/${name}/ingredient`, {
            method: 'PUT',
            body: JSON.stringify({
                "ingredient": newIngredient
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => console.log(data));
        setAllIngredients([...allIngredients, newIngredient])
    }

    // adding instruction function using our endpoint
    function addInstruction() {
        fetch(`http://localhost:3001/recipe/${name}/instruction`, {
            method: 'PUT',
            body: JSON.stringify({
                "instruction": newInstruction
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => console.log(data));
        setAllInstructions([...allInstructions, newInstruction])
    }

    if (recipe) {
        return (
            <div>
                <div className="recipeBox">
                    <img src={recipe?.image} alt="food pic" className="recipeImg" />
                    <div className="recipeInfo">
                        <h2 className="recipeTitle">{recipe?.name}</h2>
                        <p className="recipeText">{recipe?.description}</p>
                        <h3 className="ingredientsTitle">Ingredients</h3>
                        <ul>
                            {allIngredients?.map((ingredient) =>
                                <li>{ingredient}</li>
                            )}
                        </ul>
                        <input
                            placeholder="ingredient"
                            value={newIngredient} // add newIngredient as the input's value
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                // update the value of newIngredient
                                setNewIngredient(e.target.value);
                            }}
                        />
                        <button onClick={addIngredient}>
                            Add Ingredient
                        </button>
                    </div>
                </div>

                <div className="prepBox">
                    <h3 className="ingredientsTitle">Preparation</h3>
                    <ol>
                        {allInstructions?.map((step) =>
                            <li>{step}</li>
                        )}
                    </ol>
                    <input
                        placeholder="instruction"
                        value={newInstruction} // add newInstruction as the input's value
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // update the value of newInstruction
                            setNewInstruction(e.target.value);
                        }}
                    />
                    <button onClick={addInstruction}>
                        Add Instruction
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default RecipePage;