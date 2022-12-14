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

    const [newIng, setnewIng] = useState('');
    const [allIngs, setallIngs] = useState(recipe?.ingredients);

    const [newInst, setnewInst] = useState('');
    const [allInst, setallInst] = useState(recipe?.instructions);

    useEffect(() => {
        setallIngs(recipe.ingredients);
        setallInst(recipe.instructions);
    }, [recipe]);

    // we can add the ingredient function using the endpoints
    function addIngredient() {
        fetch(`http://localhost:3001/recipe/${name}/ingredient`, {   //new api calls
            method: 'PUT',
            body: JSON.stringify({
                "ingredient": newIng
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => console.log(data));
        setallIngs([...allIngs, newIng])
    }

    // we can add the instruction function using the endpoints
    function addInstruction() {
        fetch(`http://localhost:3001/recipe/${name}/instruction`, {
            method: 'PUT',
            body: JSON.stringify({
                "instruction": newInst
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => console.log(data));
        setallInst([...allInst, newInst])
    }

    if (recipe) {
        return (
            <div>
                <div className="Box">
                    <img src={recipe?.image} alt="error loading image" className="recipeImage" />
                    <div className="recipeDetails">
                        <h2 className="subheader">{recipe?.name}</h2>
                        <p className="recipeDesc">{recipe?.description}</p>
                        <h3 className="ingredients">Ingredients</h3>
                        <ul>
                            {allIngs?.map((ingredient) =>
                                <li>{ingredient}</li>
                            )}
                        </ul>
                        <input
                            placeholder="ingredient"
                            value={newIng} // add newIng as the input's value
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                // update the value of newIng
                                setnewIng(e.target.value);
                            }}
                        />
                        <button onClick={addIngredient}>
                            Add an Ingredient
                        </button>
                    </div>
                </div>

                <div className="Box">
                    <h3 className="ingredients">Instructions</h3>
                    <ol>
                        {allInst?.map((step) =>
                            <li>{step}</li>
                        )}
                    </ol>
                    <input
                        placeholder="instruction"
                        value={newInst} 
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // modify the value of newInst
                            setnewInst(e.target.value);
                        }}
                    />
                    <button onClick={addInstruction}>
                        Add an Instruction
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div> //empty
        );
    }
}

export default RecipePage;