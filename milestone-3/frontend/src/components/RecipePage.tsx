import recipes from '../recipeData';
import { useParams } from "react-router-dom";
import './RecipePage.css'
import React, { ChangeEvent, useState, useEffect } from 'react';
import { Recipe } from '../recipeData';

// checking to see if external exists in other recipes (T or F)
interface RecipeProp {
    external?: boolean;

}

// all of the recipe contents
export default function RecipePage(props: RecipeProp)
{
    
    const {id} = useParams();
    const recipe = recipes.find(recipe => recipe.name === id)

    const [externalRecipes, setExternalRecipes] = useState<Recipe[]> (recipes);
    const [ingredients, setIngredients] = useState<any[]>([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [instructions1, setInstructions1] = useState<any[]>([]);
    const [newInstruction1, setNewInstruction1] = useState('');
    const [instructions2, setInstructions2] = useState<any[]>([]);
    const [newInstruction2, setNewInstruction2] = useState('');
    const [currRecipe, setCurrRecipe] = useState<Recipe>(recipes[0]);

    useEffect(() => {


    if (props.external) {
        const getExt = async() => {
            let data = await
            fetch("https://bootcamp-milestone-4.onrender.com/recipe")
            let recipeData = await
            data.json();
            setCurrRecipe(recipeData[0]);
            setIngredients([...recipeData[0].ingredients]);
            setInstructions1([...recipeData[0].instructions1]);
            setInstructions2([...recipeData[0].instructions2]);
        }
        getExt();
        console.log(currRecipe);
    }

    else {
        let target = recipes.find(element => 
            (element.name == id))!;
            setCurrRecipe(target)
        setIngredients([...target.ingredients])
        setInstructions1([...target.instructions1])
        setInstructions2([...target.instructions2])
    }
}, [id, props.external]);

    
    return (
        <main>
        <div className="flex-container">
            <h3> {currRecipe.name} </h3>
            <p> {currRecipe.description}</p>
            <h4>Ingredient List</h4>
            <ul>
 
                {ingredients.map((ingred, index) => { 
                    return <li key={index}>{ingred}</li>
                })}
                
            </ul>

            <h3>Add a new ingredient!</h3>
            <input 
                placeholder="whipped cream"
                value={newIngredient}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredient(e.target.value);
                }}    
            />
            <button onClick={() => setIngredients([...ingredients, newIngredient])}>
                Add Ingredient
            </button>

            <h4>Instructions</h4>
            <ol>
                <h4>Iced</h4>
                {instructions1.map((ingred, index) => { 
                    return <li key={index}>{ingred}</li>
                })}
            </ol>

            <h3>Add a new instruction!</h3>
            <input 
                placeholder="Add more syrup"
                value={newInstruction1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewInstruction1(e.target.value);
                }}    
            />
            <button onClick={() => setInstructions1([...instructions1, newInstruction1])}>
                Add new Instruction
            </button>
             
            <ol>
                <h4>Hot</h4>
                {instructions2.map((ingred, index) => { 
                    return <li key={index}>{ingred}</li>
                })}
            </ol>

            <h3>Add a new instruction!</h3>
            <input 
                placeholder="Reheat mug"
                value={newInstruction2}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewInstruction2(e.target.value);
                }}    
            />
            <button onClick={() => setInstructions2([...instructions2, newInstruction2])}>
                Add Ingredient
            </button> 


        </div>
        </main>
    )
}
