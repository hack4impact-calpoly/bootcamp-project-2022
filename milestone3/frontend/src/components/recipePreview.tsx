import React from 'react';
import { Link } from 'react-router-dom';
import './recipePreview.css'

interface RecipePreviewProps{
  name: string,
  image: string,
  description: string;
  idx: Number;
}

export default function RecipePreview({ name, image, description, idx }: RecipePreviewProps) {
  return (
    <div className="recipe-container">
        <Link to={`externalRecipe/${name.split('(')[0]}`}>{name}</Link>
        <div className="recipe-info">
          <img src={image} alt="img" />
          <p className="recipe-description">{description}</p>
        </div>
    </div>
  );
}