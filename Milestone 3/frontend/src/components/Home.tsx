import React from 'react';
import './Home.css';
import { Link} from "react-router-dom";
import recipes from "../recipeData";
import RecipePreview from './RecipePreview';

function Home() {
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