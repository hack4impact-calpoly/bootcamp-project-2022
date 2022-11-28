import React from 'react';
import {ChangeEvent, useState} from 'react';
import './recipePage.css';
import recipes from '../recipeData';
import { useParams } from 'react-router-dom';


interface RecipePage{
    name: string,
    description: string,
    image: string
    ingredients: string[],
    instructions: string[]
}

export default function RecipePage() {
    //prop
    const { id } = useParams();
    const recipe = recipes.find(x => x.name == id)
    //states - ingredient
    const [ingredients, setIngredients] = useState(recipe ? recipe.ingredients : [""])
    const [newIngredient, setNewIngredient] = useState("");
    //states - instructions
    const [instructions, setInstructions] = useState(recipe ? recipe.instructions : [""])
    const [newInstruction, setNewInstruction] = useState("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewIngredient(event.currentTarget.value);
    }
    function handleChange2(event: ChangeEvent<HTMLInputElement>) {
        setNewInstruction(event.currentTarget.value);
    }

    if (recipe == undefined){
        return <div></div>;
    }

    return (

        <div className = " backgroundcolor">
            <h1 className = "important text"> {recipe.name} </h1>
            <h4 className = "flex-container4 text"> {recipe.description} </h4>
                <br></br>
            <img className = "flex-container3 imgscales" src= {recipe.image} />    
        

            {/* Ingredients */}
            <h1 className = "important text"> Ingredients </h1>
            
            {/* used map to change make a unordered list of all list elements for ingredients*/}
            <ul>
                <h3 className = 'text'>
                {ingredients.map(ingredient => <li>{ingredient}</li>)}
                </h3>
            </ul>


            <div className = "flex-container5">
                <h3 className = 'text'> Add Ingredient:</h3>
                <div className = "inputbutton">
                    <input
                        placeholder="2 cups of spinach"
                        value={newIngredient} // add newIngredient as the input's value
                        onChange={handleChange}
                        
                    />
                    <button className = "button" onClick={() => setIngredients([...ingredients, newIngredient])}>
                        Add Ingredient
                    </button>
                </div>
            </div>

            

            {/* Instructions */}

            
                {/* used map to change make a unordered list of all list elements for instructions*/}
                <h1 className = "important text"> Instructions </h1>
                <ol>
                    <h3 className = 'text '>
                    {instructions.map(instruction => <li>{instruction}</li>)}
                    </h3>
                </ol>
            
            <div className = "flex-container5">
                <h3 className = 'text'> Add Instructions:</h3>
                <div className = "inputbutton">
                    <input
                        placeholder="Mix well and serve"
                        value={newInstruction} // add newInstruction as the input's value
                        onChange={handleChange2}
                    />
                    <button className= "button"onClick={() => setInstructions([...instructions, newInstruction])}>
                        Add Instruction
                    </button>
                </div>
            </div>


        </div> 
    
    )


}


