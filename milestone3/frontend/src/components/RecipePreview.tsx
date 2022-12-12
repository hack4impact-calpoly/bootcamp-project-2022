import React from 'react';
import { Link } from "react-router-dom";
import './RecipePreview.css';
import {Recipe} from '../recipeData';
  
interface recipePreviewProps extends Recipe {
  external: Boolean;
}
  
export default function RecipePreview(props: recipePreviewProps) {
  let address = ""
  if (props.external) {
    address = "externalRecipes/" + props.name;
  } else {
    address = "recipe/" + props.name;
  }

  return (
      <div className="card">
        <h2>
          <Link to={ address }>{props.name}</Link><br />
        </h2>
        <div className="card-body">
          <img className="img-small" src={ props.image } alt="img"/>
          <p className="card-text">{ props.description }</p>
        </div>
      </div>
  )
};
  