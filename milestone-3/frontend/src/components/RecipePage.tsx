import { Recipe } from "../recipeData";
import './RecipePage.css'
import React, {useState} from "react";

export default function RecipePage(recipe: Recipe ) {

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);

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
                <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
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
                <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
                    Add Step
                </button>
            </div>
        </div>
    )
}