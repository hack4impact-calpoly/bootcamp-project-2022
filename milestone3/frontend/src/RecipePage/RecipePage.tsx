import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Recipe } from "../types";
import { recipeData } from "../recipeData";
import './RecipePage.css';
export function RecipePage() {
  const { recipeName } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  useEffect(() => {
    async function fetchRecipe() {
      const response = await fetch(`https://bootcamp-milestone-4.onrender.com/recipe/${recipeName}`);
      const recipe = (await response.json() as Recipe[])[0];
      setRecipe(recipe);
      if (!recipe) { // recipe is not in the API
        const recipe = recipeData.find((recipe) => {
          return recipe.name.toLowerCase() === recipeName;
        })
        if (recipe) setRecipe(recipe);
      }
    }
    try {
      fetchRecipe();
    } catch (error) {
      console.log(error);
    }
  }, [recipeName]);
  return (
    <div className="main">
      <div className="recipePanel">
      <img className="bigImage" src={recipe?.image} alt={recipe?.name} />
      <div>
        <h1>{recipe?.name} Recipe</h1>
        <p>
          {recipe?.description}
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
          recipe?.instructions ? recipe?.instructions.map((step) => {
            return (
              <li key={step}>{step}</li>
            )
          }) : 
          <li>Sorry, we don't have instructions for this recipe yet</li>
        }
      </ol>
    </div>
    </div>
  )
}