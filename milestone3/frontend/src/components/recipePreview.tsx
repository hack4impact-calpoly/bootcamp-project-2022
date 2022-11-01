import React from 'react';
import { Recipe } from '../recipeData';
import { Link } from 'react-router-dom';
import './recipePreview.css'

interface recipePreviewProps {
  name: string,
  image: string,
  description: string,
  idx: number
}

export default function RecipePreview({ name, image, description, idx }: recipePreviewProps) {
  return (
    <div className="recipe-container">
        <Link to={`recipe/${idx}`} className="recipe-name">{name}</Link>
        <div className="recipe-info">
            <img src={image} alt="img" />
            <p className="recipe-description">{description}</p>
        </div>
    </div>
  );
}