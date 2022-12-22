import React, { ChangeEvent, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './recipePage.css';
import { Recipe } from "../recipeData";

interface RecipePageProps {
    external?: boolean;
    
}

function RecipePage(props: RecipePageProps) {
    const { name } = useParams();
    // make currentRecipe a variable that is the recipe with the id that matches the id in the url
    //const currentRecipe = recipes?.find((recipe) => recipe.name === name);
    const [recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
    });

    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    const [newIngredient, setNewIngredient] = useState("");
    const [allInstructions, setAllInstructions] = useState(recipe.instructions);
    const [newInstruction, setNewInstruction] = useState("");
    
    useEffect(() => {
            fetch("http://localhost:3001/recipe/" + name)
            .then((res) => res.json())
            .then((data) => {
                setRecipe(data);
                setAllIngredients(data.ingredients);
                setAllInstructions(data.instructions);
        })
            console.log("data: " + recipe);
    }, [name]);
    
    useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllInstructions(recipe.instructions);
    }, [recipe]);

    function addIngredient(newIngredient: any): any {
        const request = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newIngredient })
        }
        fetch(`http://localhost:3001/recipe/${name}/ingredient`, request)
        .then((res) => console.log(res));

        setAllIngredients([...allIngredients, newIngredient])
        
    }

    function addInstruction(newInstruction: any): any {
        const request = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ newInstruction })
        }
        fetch(`http://localhost:3001/recipe/${name}/instruction`, request)
        .then(res => console.log(res));
        setAllInstructions([...allInstructions, newInstruction]);
    }

    return (
        <div className="recipe">
            <h1 className="recipe-title">{recipe?.name}</h1>
            <img className="recipe-photo"
                src={recipe?.image}
                alt={recipe?.name} />
            <div>
                <h3 className="recipe-description-header">Description</h3>
                <p className="recipe-description">{recipe?.description}</p>
                <h3 className="recipe-ingredients-header">Ingredients</h3>
                <ul className="recipe-ingredients">
                    {allIngredients.map(ingredient =>{
                        return <li>{ingredient}</li>
                    })}
                </ul>
                <input
                    placeholder="2 cups of spinach"
                    value={newIngredient} // add newIngredient as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newIngredient
                        setNewIngredient(e.target.value);
                    }}
                />
                <button onClick={() => {
                    addIngredient(newIngredient);
                }}>
                    Add Ingredient
                </button>             
    
                <h3 className="recipe-instructions-header">Instructions</h3>
                <ol className="recipe-instructions">
                    {allInstructions.map(instruction =>{
                        return <li>{instruction}</li>
                    })}
                </ol>
                <input
                    placeholder="boil the water"
                    value={newInstruction} // add newInstruction as the input's value
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        // this event handler updates the value of newInstruction
                        setNewInstruction(e.target.value);
                    }}
                />
                <button onClick={() => {
                    addInstruction(newInstruction);
                }}>
                    Add Instruction
                </button>    
            </div>
        </div>
    );
}

RecipePage.defaultProps = {
    external: false,
};

export default RecipePage;