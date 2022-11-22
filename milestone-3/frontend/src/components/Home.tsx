import React from 'react';
import recipes from '../recipeData';
import RecipePreview from '../components/recipePreview';

export default function Home(){
    return(
      <div>
        <div className='upper-class'>
            {recipes.map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      short = {recipe.short}
    />
  ))}
        </div>
        <br/>
      </div>
    )
}