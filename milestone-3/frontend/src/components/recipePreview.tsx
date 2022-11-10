import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'
import {Link} from 'react-router-dom';

export default function RecipePreview(props:Recipe) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="recipe">
        <div>
            <Link to={`/recipe/${props.name}`}>
                <h2 className="recipe-title"> {props.name} </h2>
            </Link>
        </div>
        <div className="recipe-body">
            <img className="image" src={props.image} alt="img" />
            <p className="recipe-description">{props.description}</p>
        </div>
    </div>

  );
}