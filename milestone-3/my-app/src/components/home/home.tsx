import React from 'react';
import RecipePreview from './RecipePreview';
import RecipeData from './recipeData.json';


export default function Home() {
    return (
      <div> 
          { RecipeData.map(recipe =>
              <RecipePreview 
                name = {recipe.name} 
                image = {recipe.image} 
                desc = {recipe.desc} 
                altName = {recipe.altName} 
                buttonHref = {recipe.buttonHref}
              />
            )}
        </div>
    );
}