import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'
import { Link } from 'react-router-dom';

export default function RecipePreview(props: Recipe) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="card">
    <Link className="title-container" to={`/recipe/${props.name}`}>
      <h2 className = "card-title"> {props.name} </h2>
      </Link>
      <div className="card-body">
        <img className="img-small" src={props.image} alt={props.name} />
        <p className="card-text">{props.description}</p>
      </div>
	  </div>
  );
}