import  { ChangeEvent, useState } from 'react';
import { Link } from "react-router-dom";

interface Recipe {
    name: string;
    image: string;
    description: string;
    ingredients: string [];
    instructions: string [];
}

function RecipePage(props: Recipe) {
    

  const [newIngredient, setNewIngredient] = useState('');
  const [allIngredients, setAllIngredients] = useState(props.ingredients);
  const [newInstruction, setNewInstruction] = useState('');
  const [allInstructions, setAllInstructions] = useState(props.instructions);

    return (
    <div>
    <h1 className="text">{props.name}</h1>
    <div className="sub-section">
        <img className="recipe-images-main" src={props.image} alt="picture of recipe" width="200" height="200"/>
        <p className="text">
            {props.description}
        </p>

    </div>
    <div className="sub-section">
        <strong className="text">Ingredients</strong>
         <ul>
            {allIngredients.map(ingredient => 
            <li className="text" key={ingredient}>{ingredient}</li>)}
        </ul>
    </div>
    <input
        placeholder="enter ingredient here"
        value={newIngredient} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setNewIngredient(e.target.value);
    }}
    />
     <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
    Add Ingredient
    </button>

    <div className="sub-section">
        <strong className="text">Instructions</strong>
        <ol>
            {allInstructions.map(instruction =>
            <li className="text" key={instruction}>{instruction}</li>)}
        </ol>
    </div>
    <input
        placeholder="enter instruction here"
        value={newInstruction} 
        onChange={(f: ChangeEvent<HTMLInputElement>) => {
        setNewInstruction(f.target.value);
    }}
    />
    <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
    Add Instruction
    </button>
   
    </div>);

    
}

export default RecipePage;