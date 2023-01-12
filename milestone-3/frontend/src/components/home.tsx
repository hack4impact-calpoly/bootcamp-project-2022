
import "./home.css";
import RecipePreview from "./recipePreview";
import recipes from "../recipeData.json";
import {useState, useEffect} from 'react';
import {Recipe} from '../types';

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

  return (
    <main>
      <h1 className="text">Welcome to Arya's Best Cafe!</h1>
      {recipes.map(recipe =>
        <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.description} />
    )}
    {externalRecipes.map((recipe) => (
      <RecipePreview
        name={recipe.name}
        image={recipe.image}
        desc={recipe.description}
        external/>
    ))}
    </main>
  );
}