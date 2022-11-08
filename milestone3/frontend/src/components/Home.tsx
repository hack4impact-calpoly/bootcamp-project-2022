import React, {useState, useEffect} from 'react'
import recipes, { Recipe } from '../recipeData'
import RecipePreview from './recipePreview'
import './Home.css'

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res => res.json()))
      .then((data) => setExternalRecipes(data))
    
  }, [])

  return (
    <div className='home'>
        {recipes.map((recipe, idx) => (
            <RecipePreview
              external={false}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
              idx={idx}
              key={idx}
            />
        ))}
        {externalRecipes.map((recipe, idx) => (
            <RecipePreview
              external={true}
              name={recipe.name}
              image={recipe.image}
              description={recipe.description}
              idx={idx}
              key={idx}
            />
        ))}
    </div>
  )
}
