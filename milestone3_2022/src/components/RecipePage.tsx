import { useParams } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";

// milestone 3.5
import React, { ChangeEvent, useState } from 'react';
import { useEffect } from "react";

export default function RecipePage(props: Recipe) {
    const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
    useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
    }, [])

    let myRecipes = [...recipes];
    let externalRecipes = [...fetRecipes];

    let { param } = useParams();
    let curr1 = myRecipes.find((recipe) => recipe.name === param);
    let curr2 = externalRecipes.find((recipe) => recipe.name === param);

    let [allIngredients1, setAllIngredients1] = useState(curr1?.ingredients);
    let [allInstructions1, setAllInstructions1] = useState(curr1?.instructions);

    let [allIngredients2, setAllIngredients2] = useState(curr2?.ingredients);
    let [allInstructions2, setAllInstructions2] = useState(curr2?.instructions);

    let [newIngredient, setNewIngredient] = useState('');
    let [newInstruction, setNewInstruction] = useState('');

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
          let data = await fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + param);
          let recipe = await data.json();
          if (!ignore) {
            setAllIngredients2(recipe[0].ingredients);
            setAllInstructions2(recipe[0].instructions);
          }
        }
        fetchData();
        return () => { ignore = true; }
    }, [param])

    return (
        <main className="recipe-page">
            <div className="intro">
                <img className="intro-image" src={curr1?.image2 || curr2?.image} alt={curr1?.name || curr2?.name}/>
                <h1 className="intro-title">{curr1?.name} {curr2?.name}</h1>
                <div className="intro-info">
                    {curr1?.info.map((i) => (<p>{i}</p>))} 
                    <br></br>
                    {curr1?.intro} {curr2?.description}
                </div>
            </div>
            <div className="flex-container">
                <div className="flex-content">
                    <h2 className="label">Ingredients</h2>
                    <ul>
                        {allIngredients1?.map((i) => (<li>{i}</li>)) || allIngredients2?.map((i) => (<li>{i}</li>))}
                    </ul>
                    <div className="add-values">
                        <p>Add ingredient: </p>
                        <input placeholder="2 cups of flour"
                            value={newIngredient}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setNewIngredient(e.target.value);}}
                        />
                        <button onClick={() => { 
                            if (allIngredients1 !== undefined) {
                                setAllIngredients1([...allIngredients1, newIngredient])
                            } else if (allIngredients2 !== undefined) {
                                setAllIngredients2([...allIngredients2, newIngredient])
                            };}}>Add Ingredient</button>
                    </div>
                    <h2 className="label">Instructions</h2>
                    <ol>
                        {allInstructions1?.map((instr) => (<li>{instr}</li>)) || allInstructions2?.map((instr) => (<li>{instr}</li>))}
                    </ol>
                    <div className="add-values">
                        <p>Add an instruction: </p>
                        <input placeholder="Beat the eggs"
                            value={newInstruction}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setNewInstruction(e.target.value); }}
                        />
                        <button onClick={() => { 
                            if (allInstructions1 !== undefined) {
                                setAllInstructions1([...allInstructions1, newIngredient])
                            } else if (allInstructions2 !== undefined) {
                                setAllInstructions2([...allInstructions2, newIngredient])
                            };}}>Add Instruction</button>
                    </div>
                </div>
            </div>
        </main>
    );
}