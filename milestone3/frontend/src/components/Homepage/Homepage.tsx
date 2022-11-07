import { recipeData } from "../../recipeData"
import { useState } from "react"
import RecipePreview from "../RecipePreview/RecipePreview"

export default function Homepage() {
  const [recipes, setRecipes] = useState(recipeData)
  return (
    <div className="main">
      <h2>Welcome to Oleks's Kitchen, where we cook traditional Ukrainian Food</h2>
      <div className="recipeBoxContainer">
        {
          recipes.map((recipe) => {
            return (
              <RecipePreview 
                recipeName={recipe.name} 
                recipeDescription={recipe.shortDescription}
                recipeImage={recipe.imagePath}
              />
            )
          })
        }
      </div>
    </div>
  )
}