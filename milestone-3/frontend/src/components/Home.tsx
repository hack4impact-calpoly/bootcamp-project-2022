import './Home.css';
import RecipePreview from './RecipePreview';
import recipes from '../recipeData';
import { Recipe } from '../recipeData';
import React, { useEffect, useState } from 'react';


// the home / index page of website
export default function Home()
{
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch(`http://localhost:3001/Recipe`)
        .then((res) => res.json())
        .then((data) => setAllRecipes(data));
    }, []);

    return (
        <main>
        <h2 className="flexcontainer">Welcome to Cafe Hope!</h2>
        {recipes.map((recipe) => (
            <RecipePreview external={false} {...recipe}/>
        ))}

        </main>
    )
}