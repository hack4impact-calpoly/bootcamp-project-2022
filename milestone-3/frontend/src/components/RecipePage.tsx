// import recipes from '../recipeData';
import { useParams } from "react-router-dom";
import './RecipePage.css'
import React, { ChangeEvent, useState, useEffect } from "react";
import recipes, { Recipe } from '../recipeData';
// import RecipePreview from "./RecipePreview";

// checking to see if external exists in other recipes (T or F)
interface RecipeProp {
    external?: boolean;
}

// all of the recipe contents and trying to remove Hu's Chews external recipes
export default function RecipePage(props: RecipeProp)
// export default function RecipePage()
{
    const [recipe, setNewRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions1: [],
    });

    // should be name of recipe
    const {id} = useParams();

    // ingredients
    const [newIngredient, setNewIngredient] = useState('');
    const [addIngredients, addNewIngredients] = useState(recipe.ingredients);
    
    // instructions
    const [newInstruction1, setNewInstruction1] = useState('');
    const [addInstructions1, addNewInstructions1] = useState(recipe.instructions1);

    useEffect(() => {
        fetch(`http://localhost:3001/Recipe/${id}}`)        
        .then((res) => res.json())
        .then((data) => {
            setNewRecipe(data[0]);
        })
    }, [props.external]);

    useEffect(() => {
        addNewIngredients(recipe.ingredients);
        addNewInstructions1(recipe.instructions1)
    }, [recipe]);   

    function AddIngredient() {
        addNewIngredients([...addIngredients, newIngredient]);
        let address = `http://localhost:3001/Recipe/${id}/ingredient`
        fetch(address, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "newIngredient":newIngredient
            })
        });
    }

    function AddInstruction() {
        addNewInstructions1([...addInstructions1, newInstruction1]);
        let address = `http://localhost:3001/Recipe/${id}/instruction`
        fetch(address, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "newInstruction1":newInstruction1
            })
        });
    }
    
    return (
        <main>
        <div className="flex-container">
            <h3> {recipe?.name} </h3>
            <p> {recipe?.description}</p>
            <img className="imageIced" src={recipe?.image} alt={recipe?.name}/>
            <h4>Ingredient List</h4>
            <ul>
                {addIngredients.map(function(ingred, index) {
                    return <li key={index}>{ingred}</li>
                })}
            </ul>

            <h3>Add a new ingredient!</h3>
            <input 
                placeholder=""
                value={newIngredient}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewIngredient(e.target.value);
                }}    
            />
            <button onClick={AddIngredient}>
                Add Ingredient
            </button>
            {/* <button onClick={() => addNewIngredients([...addIngredients, newIngredient])}>
                Add Ingredient
            </button> */}

            <h4>Instructions</h4>
            <ol>
                {addInstructions1.map(function(instruct, index) {
                    return <li key={index}>{instruct}</li>
                })}
        
            </ol>

            <h3>Add a new instruction!</h3>
            <input 
                placeholder=""
                value={newInstruction1}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setNewInstruction1(e.target.value);
                }}    
            />
            <button onClick={AddInstruction}>
                Add new Instruction
            </button>
            {/* <button onClick={() => addNewInstructions1([...addInstructions1, newInstruction1])}>
                Add new Instruction
            </button> */}
             
        </div>
        </main>
    );

}

RecipePage.defaultProps = {
    external: false
}
