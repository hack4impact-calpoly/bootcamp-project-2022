import React, {useState, useEffect} from 'react'
import RecipePreview from './recipePreview'
import './Home.css'

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res => res.json()))
      .then((data) => setExternalRecipes(data))
    
  }, [])

  return (
    <div className='home'>
        {externalRecipes.map((recipe: Recipe, idx) => (
            <RecipePreview
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
