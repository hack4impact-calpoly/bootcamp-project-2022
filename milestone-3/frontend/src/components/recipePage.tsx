import './recipePage.css'
import recipes, {Recipe} from "../recipeData"
import { useParams } from 'react-router-dom';
import RecipePreview from "./recipePreview";
import React, { ChangeEvent, useState } from 'react';



export default function RecipePage() {
  
    let {name} = useParams();
    let recipe = recipes.find(x => x.name === name);

    const [newIngredient, setNewIngredient] = useState('');

    const [allIngredients, setAllIngredients] = useState(recipe === undefined ? [] : recipe.ingredients);

    const [newInstruction, setNewInstruction] = useState('');

    const [allInstructions, setAllInstructions] = useState(recipe === undefined ? [] : recipe.instructions);


    if(!recipe) {
        return (
            <div></div>
        )
    }

    //const [newIngredient, setNewIngredient] = useState('');

    //const [allIngredients, setAllIngredients] = useState(recipe.ingredients);

    //provide recipe, recipe.name is a nam 

    //let recipe = recipes.find(x => x.name === name);
    

    // function handleChange(event: ChangeEvent<HTMLInputElement>) {
    //     setNewIngredient(event.currentTarget.value);
    //   }


    return (
    <div>
        
    <div className = "page-of-recipe1">
        <h2> <a className = "recipe-name">{recipe.name}</a> </h2>
        <div className = "recipe-body">
            <div className = "recipe-contents">
                <img src={recipe.image} alt="img"/>

                <ul>
                <h2>Ingredients</h2>
                
                {allIngredients.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
                
                <input
                    placeholder="2 cups of spinach"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    // this event handler updates the value of newIngredient
                    setNewIngredient(e.target.value);
                    }}
                />
                    

                <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                Add Ingredient
                </button>
            
                </ul>
           
                <ol>
                    <h2>Directions</h2>
                    {allInstructions.map(function(name, index) {
                    return <li key={index}>{name}</li>;
                    })}

                <input
                    placeholder="Stir pot"
                    value={newInstruction} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    // this event handler updates the value of newIngredient
                    setNewInstruction(e.target.value);
                    }}
                />

                <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
                Add Ingredient
                </button>


                </ol>
            </div>
        </div>
    </div>
    </div>

        );
}