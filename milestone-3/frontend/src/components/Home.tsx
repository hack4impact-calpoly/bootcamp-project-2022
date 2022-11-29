import './Home.css';
import RecipePreview from './RecipePreview';
import recipes from '../recipeData';
import { Recipe } from '../recipeData';
import React, { useEffect, useState } from 'react';


// the home / index page of website
export default function Home()
{
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]> ([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        .then((res) => res.json())
        .then((data) => setExternalRecipes(data));
    }, []);

    return (
        <main>
        <h2 className="flexcontainer">Welcome to Cafe Hope!</h2>
        {recipes.map((recipe) => (
            <RecipePreview
                name = {recipe.name}
                image1 = {recipe.image1}
                description = {recipe.description}
                ingredients = {recipe.ingredients}
                instructions1 = {recipe.instructions1}
                external = {false}
            />

        ))}

       {externalRecipes.map((recipe) => (
            <RecipePreview
                name = {recipe.name}
                image1 = {recipe.image1}
                description = {recipe.description}
                ingredients = {recipe.ingredients}
                instructions1 = {recipe.instructions1}
                external = {true}
            />

        ))} 
        </main>
    )
}