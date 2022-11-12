import React from 'react';
import './Style.css';
import recipes from '../recipeData';
import RecipePreview from './RecipePreview';

export default function Home() {
  return (
    <main>
      <h1>Welcome to Dessert House!</h1>
      {recipes.map((recipe) => (
        <RecipePreview {...recipe} />
      ))}
    </main>
  );
}
