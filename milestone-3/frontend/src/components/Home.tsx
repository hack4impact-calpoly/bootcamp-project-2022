import React, { useEffect, useState } from 'react';
import recipes from '../recipeData';
import RecipePreview from '../components/recipePreview';
import { Recipe } from '../recipeData';
import { RecipePreviewProps } from '../components/recipePreview';

export default function Home(){
  const [externalRecipes, setExternalRecipes] = useState<RecipePreviewProps[]>([]);
  useEffect(() =>{
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, [])
    return(
      <div>
        <div className='upper-class'>
            {[...recipes].map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      external = {false}
    />
    
  ))}
        </div>
        <br/>
        <div className='upper-class'>
            {[...externalRecipes].map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
      external = {true}
    />
    
  ))}
        </div>
      </div>
    )
}