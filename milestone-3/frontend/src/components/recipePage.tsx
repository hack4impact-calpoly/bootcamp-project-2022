import React from 'react';
import './recipePage.css'
import { useParams } from 'react-router-dom';
import { Recipe } from '../recipeData'

interface RecipeProps{
    props: Recipe[]
}

export default function RecipePage( {props} : RecipeProps ) {
    const { id } = useParams();
    // seing as all recipe data is passed in, the recipe shown is only the one whose name matches the id passed in from the url w/ useParams()
    let recipe = props.find(r => id === r.name);
    if (!recipe){
        return <div>Recipe not found.</div>
    }
    // dynamic list items for each ingredient in each recipe's list
    const ingredientList = recipe.ingredients.map((name, index) => (
        <li key = {index}>{name}</li>
    ));
    const instructionList = recipe.instructions.map((name, index) => (
        <li key = {index}>{name}</li>
    ));

    return (
        <div>
            <div className = "recipe_page_flex">
                <div className = "name_description_ingredients">
                    <h2 className = "recipe_page_text"> {recipe.name} </h2>
                    <p className = "recipe_page_text">  {recipe.description} </p>
                    <h3 className = "ingredient_accent"> Ingredients </h3>
                    <ul className = "recipe_page_text">
                        {ingredientList}
                    </ul>
                </div>
                <img className = "food_full_size" src = {recipe.image}/>
            </div>
            <div className = "prep_and_list_margin">
                <h3 className = "preparation_accent"> Preparation </h3>
                <ol className = "recipe_page_text">
                    {instructionList}
                </ol>
            </div>
        </div>
    );
}