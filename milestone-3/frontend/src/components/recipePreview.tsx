import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'

export default function RecipePreview(props:Recipe) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div>
      <h3> {props.name} </h3>
      <div>
        <img src={props.image} alt="img" />
        <p>{props.description}</p>
      </div>
	  </div>
  );
}