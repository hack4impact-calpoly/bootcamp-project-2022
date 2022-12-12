import './RecipePage.css';
import React, { ChangeEvent, useEffect, useState } from 'react';
import recipes from "../recipeData";
import { useParams } from "react-router-dom";

interface RecipePageProps {
    external?: boolean;
}

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[]
}

function RecipePage (props: RecipePageProps) {
    const { name } = useParams();

    const[recipe, setRecipe] = useState<Recipe>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
    })

    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe?.ingredients);

    const [newInstruction, setNewInstruction] = useState('');
    const [allInstructions, setAllInstructions] = useState(recipe?.instructions);

    useEffect(() => {
        if (props.external) {
            fetch("https://bootcamp-milestone-4.onrender.com/recipe/" + name?.replace(/ /g, "%20"))
            .then((res) => res.json())
            .then((data) => setRecipe(data[0]))
        }
        else{
            setRecipe(recipes.find((recipe) => recipe.name === name) || recipes[0])
        }
    }, [props.external, name])

    useEffect(() => {
        setAllIngredients(recipe.ingredients);
        setAllInstructions(recipe.instructions);
    }, [recipe]);


    if (recipe) {
        return (
            <div>
                <div className="recipeBox">
                    <img src={recipe?.image} alt="food pic" className="recipeImg" />
                    <div className="recipeInfo">
                        <h2 className="recipeTitle">{recipe?.name}</h2>
                        <p className="recipeText">{recipe?.description}</p>
                        <h3 className="ingredientsTitle">Ingredients</h3>
                        <ul>
                            {allIngredients?.map((ingredient) =>
                                <li>{ingredient}</li>
                            )}
                        </ul>
                        <input
                            placeholder="ingredient"
                            value={newIngredient} // add newIngredient as the input's value
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                // this event handler updates the value of newIngredient
                                setNewIngredient(e.target.value);
                            }}
                        />
                        <button onClick={() => setAllIngredients([...allIngredients ?? [], newIngredient])}>
                            Add Ingredient
                        </button>
                    </div>
                </div>

                <div className="prepBox">
                    <h3 className="ingredientsTitle">Preparation</h3>
                    <ol>
                        {allInstructions?.map((step) =>
                            <li>{step}</li>
                        )}
                    </ol>
                    <input
                        placeholder="instruction"
                        value={newInstruction} // add newIngredient as the input's value
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            // this event handler updates the value of newIngredient
                            setNewInstruction(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllInstructions([...allInstructions ?? [], newInstruction])}>
                        Add Instruction
                    </button>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        );
    }
}

export default RecipePage;