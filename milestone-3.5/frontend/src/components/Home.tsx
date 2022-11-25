import React, { useState, useEffect } from 'react';
import './Style.css';
import RecipePreview from './RecipePreview';
import { Recipe } from '../recipeData';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/recipe')
      .then((response) => response.json())
      .then((recipeData) => setRecipes(recipeData))
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <h1>Welcome to Dessert House!</h1>
      {recipes.map((recipe: any) => (
        <RecipePreview {...recipe} />
      ))}
    </main>
  );
}
