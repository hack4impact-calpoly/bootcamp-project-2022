
import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../recipeData';
import './recipePreview.css'

export default function RecipePreview(props: Recipe) {
  return (
    <div >
      <h3 className = "recipe_section" > {props.name} </h3>
      <div className = "recipe_section">
        <Link to={"recipe/" + props.name}> <img src={props.image} alt="img" /></Link>
        <p className = "recipe_text" >{props.description}</p>
      </div>
	  </div>
  );
}