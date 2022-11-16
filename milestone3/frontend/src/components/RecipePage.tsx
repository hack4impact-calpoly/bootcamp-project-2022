import { useParams } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import './RecipePage.css';
import React, { ChangeEvent, useEffect, useState } from 'react';

interface RecipePageProps {
    external?: boolean;
}

export default function RecipePage(props: RecipePageProps) {

    const { name } = useParams();
    const [recipe, setRecipe] = useState<Recipe | undefined>({
        name: "",
        description: "",
        image: "",
        ingredients: [],
        instructions: [],
    });
    const [newIngredient, setNewIngredient] = useState<string>('');
    const [allIngredients, setAllIngredients] = useState<string[]>([]);
    const [newInstruction, setNewInstruction] = useState<string>('');
    const [allInstructions, setAllInstructions] = useState<string[]>([]);

    useEffect(() => {
        if (props.external) {
            fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${name}`)
                .then((res) => res.json())
                .then((data) => {
                    setRecipe(data[0])
                })
        } else {
            // query all of your recipe data for the recipe you want & setRecipe
            setRecipe(recipes.find(recipe => recipe.name === name));
        }
    }, [name, props.external]);

    useEffect(() => {
        if (recipe) {
            setAllIngredients(recipe?.ingredients)
        }
    }, [recipe])

    useEffect(() => {
        if (recipe) {
            setAllInstructions(recipe?.instructions)
        }
    }, [recipe])
    
    
    return (recipe === undefined ? 
        (<div>
            <p>Recipe is undefined</p>
        </div>) :
        (<main>
            <div className="recipe-container">
                <img className="item" src={recipe.image} alt="good looking cornbread" />
                <div className="recipe">
                    <h2 className="minititle">{recipe.name}</h2>
                    <p>{recipe.description}</p>
                    <h4 className="minititle">Ingredients</h4>
                    <ul>
                        {allIngredients.map(ingredient =>
                            <li>{ingredient}</li>)}
                    </ul>
                    {/* input to add more ingredients */}
                    <input
                        placeholder="2 cups of spinach"
                        value={newIngredient}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewIngredient(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                        Add Ingredient
                    </button>
                    <h4 className="minititle">Instructions</h4>
                    <ol>
                        {allInstructions.map(instruction =>
                            <li>{instruction}</li>)}
                    </ol>
                    {/* input to add mroe instructions */}
                    <input
                        placeholder="Boil water"
                        value={newInstruction}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setNewInstruction(e.target.value);
                        }}
                    />
                    <button onClick={() => setAllInstructions([...allInstructions, newInstruction])}>
                        Add Instruction
                    </button>
                </div>
            </div>
        </main>)
    );
}

RecipePage.defaultProps = {
    external: false,
};