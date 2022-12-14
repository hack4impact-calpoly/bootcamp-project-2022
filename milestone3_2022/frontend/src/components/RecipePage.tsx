import { useParams } from "react-router-dom";

// milestone 3.5
import React, { ChangeEvent, useState } from 'react';
import { useEffect } from "react";

export interface Recipe {
    name: string;
    description: string;
    image: string;
    image2: string
    info: string[];
    intro: string;
    ingredients: string[];
    instructions: string[];
}

export default function RecipePage(props: Recipe) {
    let { param } = useParams();

    let [recipe, setRecipe] = useState<Recipe>()

    let [allIngredients, setAllIngredients] = useState(recipe?.ingredients);
    let [allInstructions, setAllInstructions] = useState(recipe?.instructions);

    let [newIngredient, setNewIngredient] = useState('');
    let [newInstruction, setNewInstruction] = useState('');

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
          let data = await fetch("http://localhost:3001/recipe/" + param);
          let recipe = await data.json();
          if (!ignore) {
            setRecipe(recipe);
            setAllIngredients(recipe.ingredients);
            setAllInstructions(recipe.instructions);
          }
        }
        fetchData();
        return () => { ignore = true; }
    }, [param])

    function addIngredient() {
        fetch("http://localhost:3001/recipe/" + param + "/ingredient", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            ingredient: newIngredient,
            position: allIngredients?.length
        })})
        .catch((error:any) => console.log(error))
        console.log(newIngredient);
        if (allIngredients !== undefined) {
            setAllIngredients([...allIngredients, newIngredient])
        }
    }

    function addInstruction() {
        fetch("http://localhost:3001/recipe/" + param + "/instruction", 
        {method: "PUT", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({
            instruction: newInstruction,
            position: allInstructions?.length
        })})
        .catch((error:any) => console.log(error))
        if (allInstructions !== undefined) {
            setAllInstructions([...allInstructions, newInstruction])
        }
      }

    return (
        <main className="recipe-page">
            <div className="intro">
                <img className="intro-image" src={recipe?.image2} alt={recipe?.name}/>
                <h1 className="intro-title">{recipe?.name}</h1>
                <div className="intro-info">
                    {recipe?.info.map((i) => (<p>{i}</p>))} 
                    <br></br>
                    {recipe?.intro} {recipe?.description}
                </div>
            </div>
            <div className="flex-container">
                <div className="flex-content">
                    <h2 className="label">Ingredients</h2>
                    <ul>
                        {allIngredients?.map((i) => (<li>{i}</li>))}
                    </ul>
                    <div className="add-values">
                        <p>Add ingredient: </p>
                        <input placeholder="2 cups of flour"
                            value={newIngredient}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setNewIngredient(e.target.value);}}
                        />
                        <button onClick={addIngredient}>Add Ingredient</button>
                    </div>
                    <h2 className="label">Instructions</h2>
                    <ol>
                        {allInstructions?.map((instr) => (<li>{instr}</li>))}
                    </ol>
                    <div className="add-values">
                        <p>Add instruction: </p>
                        <input placeholder="Beat the eggs"
                            value={newInstruction}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setNewInstruction(e.target.value); }}
                        />
                        <button onClick={addInstruction}>Add Instruction</button>
                    </div>
                </div>
            </div>
        </main>
    );
}