import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'
import {Link} from 'react-router-dom';

export default function RecipePreview(props:Recipe) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="recipe">
      <h2 className="recipe-title"> 
        <Link to={`/recipe/${props.name}`}>
            {props.name} 
        </Link>
      </h2>
      <div className="recipe-body">
        <img className="image" src={props.image} alt="img" />
        <p className="recipe-description">{props.description}</p>
      </div>
	  </div>
  );
}