import { useParams } from "react-router-dom"
import { useState } from "react";
import { recipeData } from "../recipeData";
import './RecipePage.css';
export function RecipePage() {
  const { recipeName } = useParams();
  const [recipe, setRecipe] = useState(
    recipeData.find((recipe) => recipe.name.toLowerCase() === recipeName)
  );

  return (
    <div className="main">
      <div className="recipePanel">
      <img className="bigImage" src={"../images/" + recipe?.imagePath} alt={recipe?.name} />
      <div>
        <h1>{recipe?.name} Recipe</h1>
        <p>
          {recipe?.longDescription}
        </p>
        <h2>Ingredients</h2>
        <ul>
          {
            recipe?.ingredients.map((ingredient) => {
              return (
                <li key={ingredient}>{ingredient}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
    <div className="preparationPanel">
      <h1>
        Preparation
      </h1>
      <ol>
        {
          recipe?.preparation.map((step) => {
            return (
              <li key={step}>{step}</li>
            )
          })
        }
      </ol>
    </div>
    </div>
  )
}