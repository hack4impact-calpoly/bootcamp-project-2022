import React from 'react';
import recipes from '../recipeData';
import "./Home.css";
import RecipePreview from './recipePreview';

export default function Home() {
    return (
        <main>
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