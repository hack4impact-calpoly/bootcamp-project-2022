import React from 'react'
import recipes from '../recipeData'
import RecipePreview from './recipePreview'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
        {recipes.map(recipe => (
            <RecipePreview {...recipe}/>
        ))}
    </div>
  )
}
