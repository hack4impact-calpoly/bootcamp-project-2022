// import recipes from '../recipeData';
import { useParams } from "react-router-dom";
import './RecipePage.css'
import React, { ChangeEvent, useState, useEffect } from "react";
import recipes, { Recipe } from '../recipeData';

// checking to see if external exists in other recipes (T or F)
interface RecipeProp {
    external?: boolean;

}

// all of the recipe contents
export default function RecipePage(props: RecipeProp)
{
    // ingredients
    const [ingredients, setIngredients] = useState<any[]>([]);
    const [newIngredient, setNewIngredient] = useState('');
    // instructions
    const [instructions1, setInstructions1] = useState<any[]>([]);
    const [newInstruction1, setNewInstruction1] = useState('');
    const [currRecipe, setCurrRecipe] = useState<Recipe>(recipes[0]);
    
    const {id} = useParams();

    useEffect(() => {
        if (props.external) {
            const getExt = async() => {
                let data = await fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + id);
                let recipeData = await data.json();
                setCurrRecipe({...recipeData[0], image: recipeData[0].image});
                setIngredients([...recipeData[0].ingredients]);
                setInstructions1([...recipeData[0].instructions]);
            }
            getExt();
            console.log(currRecipe);
        }

        else {
            let target = recipes.find(element => (element.name === id))!;
            setCurrRecipe(target)
            setIngredients([...target.ingredients])
            setInstructions1([...target.instructions1])
        }
    }, [id, props.external]);

    
    return (
        <main>
        <div className="flex-container">
            <h3> {currRecipe.name} </h3>
            <p> {currRecipe.description}</p>
            <img className="imageIced" src={currRecipe.image} alt={currRecipe.name}/>
            <h4>Ingredient List</h4>
            <ul>
                {ingredients.map((ingred, index) => (
                    <li>{ingred}</li>
                ))}
            </ul>

            <h3>Add a new ingredient!</h3>
            <input 
                placeholder=""
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
                {instructions1.map((instruct, index) => (
                    <li>{instruct}</li>
                ))}
            </ol>

            <h3>Add a new instruction!</h3>
            <input 
                placeholder=""
                value={newInstruction1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewInstruction1(e.target.value);
                }}    
            />
            <button onClick={() => setInstructions1([...instructions1, newInstruction1])}>
                Add new Instruction
            </button>
             
        </div>
        </main>
    )
}
