import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'

export default function RecipePreview(props: Recipe) {
  return (
    <div className="recipe-container">
        <a href="recipe1.html" className="recipe-name">{props.name}</a>
        <div className="recipe-info">
            <img src={props.image} alt="img" />
            <p className="recipe-description">{props.description}</p>
        </div>
    </div>
  );
}