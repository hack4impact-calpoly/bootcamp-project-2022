import React from 'react';
import './recipePreview.css';
import { Link } from 'react-router-dom';
import { Recipe } from '../App';

interface RecipePreviewProps extends Recipe{
  external?: boolean;
}

export default function RecipePreview(props: RecipePreviewProps) {
  let address = "";
  if (props.external) {
    address = '/externalRecipe/' + props.name;
  } else {
    address = 'recipe/' + props.name;
  }
  return (
    <div className = "recipe">
        <Link to = {address} style = {{ textDecoration: 'none'}}>
            <h2 className = "recipe_head"> {props.name}</h2>
        </Link>
        <div className = "recipe_content">
            <p className = "recipe_p"> {props.description} </p>
            <img className = "food_preview" src = {props.image}/>
        </div>
    </div>
  );
}

