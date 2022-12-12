import React, { ChangeEvent } from 'react'
import "../recipeData.ts"
import "./recipePreview.css"
import { useParams } from 'react-router-dom';
import { Recipe } from '../recipeData';
import Navbar from './navbar';
import recipes from '../recipeData'; 
import { useState } from 'react';
import { useEffect } from 'react';

interface RecipePageProps{
    external?: boolean;
}

interface Recipe_ext extends Recipe{
    '_id'? : string,
    '__v'? : number
}

export default function RecipePage(props: RecipePageProps) {
    const { name } = useParams(); 
    const [recipe, setRecipe] = useState<Recipe_ext>(recipes[0]);
    const [error, setError] = useState("");
    useEffect(() =>{
        if (props.external) {
            fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${name}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length === 0){
                    setError("Sorry, this recipe does not exist")
                } else {
                    setError("")
                    setRecipe(data[0])
                }
            })
        } else {
            let recipe_temp = recipes.find(i => i.name === name);
            if (recipe_temp === undefined) { 
                recipe_temp = recipes[0];
            }
            setRecipe(recipe_temp) 
        }
    }, [name, props.external]
    )
    // Find the recipe corresponding to the selected option.
    const [newIngredient, setNewIngredient] = useState('');
    const [allIngredients, setAllIngredients] = useState(recipe.ingredients);
    return (
    <body>
        <div className='recipe-box'>
            <p>{error}</p> 
            <div>
                <h1>{recipe.name}</h1>
                <h2>Ingredients</h2>
                <ul className='ingredients'>
                    {/* Maps each items in the ingredients array to a list item */}
                    {recipe.ingredients.map(
                        item => (
                            <li className="ingredient"><label className="container">{item}<input type="checkbox" />
                            <span className="checkmark"></span>
                            </label></li>
                        )
                    )}
                </ul>
                <input 
                placeholder='2 cups of spinach'
                value = {newIngredient} // add newIngredient as the input's value
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewIngredient(e.target.value)}
                />
                <button onClick={() => setAllIngredients([...allIngredients, newIngredient])}>
                    Add Ingredient
                </button>
            </div>
                <div>
                    <img className="thumbnail-large" alt={recipe.name} src={recipe.image} />
                </div>             
        </div>
        <div>
            <h2>Instructions</h2>
            <ol className='instructions'>
                {/* Maps each item in the instructions array to a list item. */}
                {recipe.instructions.map(
                    item => (
                        <li>{item}</li>
                    )
                )}
            </ol>
        </div>
    </body>
    )
}

RecipePage.defaultProps = {
    external: false,
}