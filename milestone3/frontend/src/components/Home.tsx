import React, {useState, useEffect} from 'react';
import "./style.css";
import recipes, {Recipe} from './recipeData';
import RecipePreview from './recipePreview';

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

    return (
      <div>
        <h1>Welcome to Dom's Italian Cuisine!</h1>
        {recipes.map((recipe: Recipe) => (
            <RecipePreview {...recipe}/>
        ))}
        {externalRecipes.map((recipe: Recipe) => (
            <RecipePreview {...recipe} external={true}/>
        ))}
      </div>
    );
  }