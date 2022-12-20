import React from 'react';
import './recipePreview.css'
import {Recipe} from "../recipeData"
import { Link } from 'react-router-dom';

interface RecipePreviewProps extends Recipe {
  external?: boolean;
}

export default function RecipePreview(props: RecipePreviewProps) {
  let address = "";
  if (props.external) {
    address = "externalRecipe/" + props.name;
  } else {
    address = "recipe/" + props.name; // whatever it was before
  }
  return (
    <div className = "recdiv">
    <Link to={address}><header className="rectit">{props.name}</header></Link>
    <div className="recdiv2">
    <p className="recdes">{props.description}</p>
    <img src={props.image} className="recpic" />
    </div>







	  </div>









  );
}