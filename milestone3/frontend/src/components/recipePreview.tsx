import React from 'react';
import { Recipe } from '../recipeData';
import { Link } from 'react-router-dom';
import './recipePreview.css'
import internal from 'stream';

interface RecipePreviewProps{
  name: string,
  image: string,
  description: string;
  external: boolean;
  idx: Number;
}

export default function RecipePreview({ name, image, description, external, idx }: RecipePreviewProps) {
  return (
    <div className="recipe-container">
        <Link to={ external ? `externalRecipe/${name.split('(')[0]}` : `recipe/${idx}`} className="recipe-name">{name}</Link>
        <div className="recipe-info">
          <img src={image} alt="img" />
          <p className="recipe-description">{description}</p>
        </div>
    </div>
  );
}