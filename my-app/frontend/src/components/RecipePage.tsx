import './RecipePage.css';
import React, { ChangeEvent, useState } from 'react';
import { Recipe } from '../recipeData';

export default function RecipePage(props:Recipe) {
    const [newIngredient, setNewIngredient] = useState('');//add this
    const [allIngredients, setAllIngredients] = useState(props.ingredients);
    const [newInstruction, setNewInstruction] = useState('');//add this
    const [allInstructions, setAllInstructions] = useState(props.instructions);

    let addIngredient = () => {
        console.log("ADDING INGREDIENT");
        fetch(`http://localhost:3002/recipe/${props.name}/ingredient`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            method: 'PUT',
            body: JSON.stringify({ingredient: newIngredient})
          });
    }
     
    let addInstruction = () => {
        console.log("ADDING INSTRUCTION");
        fetch(`http://localhost:3002/recipe/${props.name}/instruction`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify({instruction: newInstruction})
        })
    }

    return (<div className="food">
    <h1>{props.name}</h1>
    <p id="description">{props.description}</p>
   

    <h2>Ingredients</h2>

    <ol id="ingred">
        {allIngredients.map((ingred, idx) => {
                    return <li key={idx}>{ingred}</li>;
                })}
    </ol>

    <input
        placeholder="2 cups of spinach"
        value={newIngredient} // add newIngredient as the input's value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewIngredient(e.target.value);
            console.log(newIngredient);
        }}/>
    <button onClick={() => 
        {
            setAllIngredients([...allIngredients, newIngredient])
            addIngredient();
            console.log(allIngredients);
        }}>
        Add Ingredient
    </button>

    <h2>Procedure</h2>
    <ol id="instructions">
       {allInstructions.map((ingred, idx) => {
                    return <li key={idx}>{ingred}</li>;
                })}
    </ol>

    <input
        placeholder="Voila"
        value={newInstruction} // add newIngredient as the input's value
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
            // this event handler updates the value of newIngredient
            setNewInstruction(e.target.value);
            console.log(newInstruction);
        }}/>
    <button onClick={() => 
        {
            setAllInstructions([...allInstructions, newInstruction]);
            addInstruction();
            console.log(allInstructions);
        }}>
        Add Instruction
    </button>

    <img src={props.image} width="300" height="300" />
    </div>);
}
