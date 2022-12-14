import React, {useEffect, useState} from 'react';
import './Home.css';
import RecipePreview from './RecipePreview';
import Recipe from "../recipeData";
import { Link } from 'react-router-dom';

interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[]
}


function Home() {

    let [extRecipes, setExtRecipes] = useState<Recipe[]>([]);
    
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        fetch("http://localhost:3001/recipe")
        .then((response) => response.json())
        .then((recipeData) => setRecipes(recipeData))
        .catch((err) => console.log(`Error: ${err}`))
    }, [])


    return (
        <main >
        <h1 id="Welcome">Welcome to my Kitchen!</h1>
        {recipes.map((recipe) => (
            <RecipePreview {...recipe} />))
        };
        </main>
    );
}

export default Home