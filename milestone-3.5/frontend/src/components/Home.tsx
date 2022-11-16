import React from 'react';
import './Style.css';
import RecipePreview from './RecipePreview';

export default function Home(props: any) {
  const { updateRecipes } = props;
  return (
    <main>
      <h1>Welcome to Dessert House!</h1>
      {updateRecipes.map((recipe: any) => (
        <RecipePreview {...recipe} />
      ))}
    </main>
  );
}
