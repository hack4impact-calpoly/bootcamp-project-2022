import React, { useEffect, useState } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
import recipes from "../recipeData";
import RecipePreview from './RecipePreview';

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[]
}

function Home() {
    let [extRecipes, setExtRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExtRecipes(data));
    }, []);
    
    return (
        <main>
        <h1 id="welcome">Welcome To Sreshta's Sides</h1>
        {recipes.map((recipe) => (
            <RecipePreview {...recipe} />))
        };
        {extRecipes.map((recipe) => (
            <RecipePreview {...recipe} external />))
        };
        </main>
    );
}

export default Home