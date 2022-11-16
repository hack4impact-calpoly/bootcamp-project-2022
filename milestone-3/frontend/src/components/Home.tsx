import RecipePreview from './recipePreview'
import {useState, useEffect } from 'react';
import recipes from '../recipeData';
import {Recipe} from "../recipeData"
export default function Home(){
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-3.netlify.app/")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
  const compRecipes: Recipe[] = {...recipes, ...externalRecipes} ;

    return(
    <main>
      {/* {recipes.map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ))} */}
        {compRecipes.map((recipe) => (
    <RecipePreview
      name={recipe.name}
      description={recipe.description}
      image={recipe.image}
      ingredients={recipe.ingredients}
      instructions={recipe.instructions}
    />
  ))}
    
    </main>
    );
}