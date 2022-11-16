import './recipePreview.css'
import {Recipe} from "../recipeData"
import { ChangeEvent, useState } from 'react';

export default function RecipePage(props : Recipe) {
    let [ingredients, setIngredients] = useState(props.ingredients);
    let [newIngredient, setNewIngredient] = useState("");
    
    function addIngredient(event: ChangeEvent<HTMLInputElement>){
        setNewIngredient(event.currentTarget.value);
    };

    let [instructions, setInstructions] = useState(props.instructions);
    let [newInstruction, setNewInstruction] = useState("");
    
    function addInstruction(event: ChangeEvent<HTMLInputElement>){
        setNewInstruction(event.currentTarget.value);
    };

    if(!props) {
        return (
            <div></div>
        )
    }
    
    return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
        <div className="flex-container">
        <img className="large-image"src={props.image} alt="img"/>
        <div className = "flex-content">
            <h1> {props.name}</h1>
            <p>{props.description}</p>
            <h2>Ingredients</h2>
            <ul>
                <input
                value={newIngredient} // add newIngredient as the input's value
                onChange={addIngredient}
                />
                <button onClick={() => setIngredients([...ingredients, newIngredient])}>Add ingredient</button>
                {ingredients.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}

            </ul>
            <h2>Instructions</h2>
            <ol>
            <input
                value={newInstruction} // add newIngredient as the input's value
                onChange={addInstruction}
                />
                <button onClick={() => setInstructions([...instructions, newInstruction])}>Add instruction</button>
                {instructions.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                })}
            </ol>
        </div>
    </div>
  );
}