import './Home.css';
import RecipePreview from './RecipePreview';
import recipes from '../recipeData';
import { Recipe } from '../recipeData';
import React, { useEffect, useState } from 'react';


// the home / index page of website
export default function Home()
{
    // const [externalRecipes, setExternalRecipes] = useState<Recipe[]> ([]);
    //useState<Recipe[]> ([]);
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        // fetch("https://bootcamp-milestone-4.onrender.com/recipe")
        fetch(`http://localhost:3001/`)
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => setAllRecipes(data));
        // console.log(data);
    }, []);

    return (
        <main>
        <h2 className="flexcontainer">Welcome to Cafe Hope!</h2>
        {allRecipes.map((recipe) => (
            <RecipePreview external={true} {...recipe}/>
        ))}
        {/* {allRecipes.map((recipe: Recipe) => (
            <RecipePreview 
                name = {recipe.name}
                image = {recipe.image}
                description = {recipe.description}
                ingredients = {recipe.ingredients}
                instructions1 = {recipe.instructions1}   
            />
        ))} */}

        </main>
    )
}