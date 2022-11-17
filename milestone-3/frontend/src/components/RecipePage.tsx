import '../recipe.css'
import recipes, { Recipe } from "./recipeData";
import { useParams } from "react-router-dom";

// milestone 3.5
import React, { ChangeEvent, useState } from 'react';

function RecipePage(props: Recipe) {
    let { name } = useParams();
    let recipe = recipes.find((r) => r.name === name)

    // new state
    const [allIngredients, setAllIngredients] = useState(props.ingredients);
    const [newIngredient, setNewIngredient] = useState('');

    // const [instructions, setInstructions] = useState(props.instructions);
    // const [newInstruction, setNewInstruction] = useState('');

    if(recipe) {
        return (
            <body>
                <div className="center-image">
                <img src={recipe.image} />
                </div>
                <h2>{recipe.name}</h2>
    
                <h3>Ingredients</h3>
    
                <ul>
                    {allIngredients.map((i) => (<li>{i}</li>))}
                </ul>
    
                <h3>Preparation + Instructions</h3>
    
                <ol>
                    {recipe.instructions.map((instr) => (<li>{instr}</li>))}
                </ol>

                <div className="newvalues">
                    {/* add new ingredient */}
                    <p>Add a new ingredient: </p>

                    <input placeholder="2 cups of spinach"
                        value={newIngredient} // add newIngredient as the input's value
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // this event handler updates the value of newIngredient
                            setNewIngredient(e.target.value); }}
                    />

                    {/* appends new ingredient */}
                    <button onChange={() => setAllIngredients([...allIngredients, newIngredient])}>
                        Add Ingredient
                    </button>

                    <br />


                </div>
    
            </body>
        )
    }
    else {
        return(<div></div>);
    }
    
}

export default RecipePage;