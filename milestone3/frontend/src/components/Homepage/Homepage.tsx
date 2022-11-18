import { Recipe } from "../../types"
import { useEffect, useState } from "react"
import RecipePreview from "../RecipePreview/RecipePreview"

export default function Homepage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      const recipes = await response.json()
      setRecipes(recipes)
    }
    fetchRecipes()
  }, [])
  return (
    <div className="main">
      <h2>Welcome to Oleks's Kitchen, where we cook traditional Ukrainian Food</h2>
      <div className="recipeBoxContainer">
        {
          recipes.map((recipe) => {
            return (
              <RecipePreview 
                recipeName={recipe.name} 
                recipeDescription={recipe.description}
                recipeImage={recipe.image}
              />
            )
          })
        }
      </div>
    </div>
  )
}