import React from 'react';
import recipes from '../recipeData';
import "./Home.css";
import RecipePreview from './recipePreview';

export default function Home() {
    return (
        <main>
            <h1 className="title-txt">Nick's Filipino Feasts</h1>
            {recipes.map((recipe) => 
                <RecipePreview 
                    name={recipe.name}
                    description={recipe.description}
                    image={recipe.image}
                    />)
            }
            
        </main>
    );
}