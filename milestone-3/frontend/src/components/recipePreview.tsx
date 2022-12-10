import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'
import {Link} from 'react-router-dom';

interface RecipePreviewProps {
  recipe: Recipe;
  // external: boolean;
}

export default function RecipePreview(props:RecipePreviewProps) {
  // let link = ''
  // if(!props.external) {
  //   link = `/recipe/${props.recipe.name}`
  // }
  // else {
  //   link = `/externalRecipe/${props.recipe.name}`
  // }
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="recipe">
        <div>
            <Link to={`/recipe/${props.recipe.name}`}>
                <h2 className="recipe-title"> {props.recipe.name} </h2>
            </Link>
        </div>
        <div className="recipe-body">
            <img className="image" src={props.recipe.image} alt="img" />
            <p className="recipe-description">{props.recipe.description}</p>
        </div>
    </div>

  );
}