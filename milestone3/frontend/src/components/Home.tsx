import React from 'react'
import recipes from '../recipeData'
import RecipePreview from './recipePreview'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        {recipes.map((recipe, idx) => (
            <RecipePreview 
                name={recipe.name}
                image={recipe.image}
                description={recipe.description}
                idx = {idx}
            />
        ))}
    </div>
  )
}
