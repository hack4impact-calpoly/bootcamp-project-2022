import React from 'react';
import RecipePreview from './RecipePreview';
import recipes from '../recipeData';


export default function Home() {
    return (
        <main>
        <div className="main_header">
            <h1>Welcome to Random Recipes!</h1>
        </div> 
            {recipes.map((recipe) =>
                <RecipePreview 
                    name = {recipe.name}
                    description = {recipe.description} 
                    image = {recipe.image}
                    ingredients = {recipe.ingredients}
                    instructions = {recipe.instructions}
                    altDesc = {recipe.altDesc}
                    />
                    )}
        </main>
            );
        }
