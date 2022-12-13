import React, {useState, useEffect} from 'react';
import "./style.css";
import {Recipe} from './recipeData';
import RecipePreview from './recipePreview';

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

    return (
      <div>
        <h1>Welcome to Dom's Italian Cuisine!!</h1>
        {recipes.map((recipe: Recipe) => (
            <RecipePreview {...recipe}/>
        ))}
      </div>
    );
  }