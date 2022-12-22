import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../Recipedata'
import "./RecipePreview.css"

interface RecipePreviewProps extends Recipe {
  external: boolean;
}
 
 export default function RecipePreview(props: RecipePreviewProps) {
  let address = "";
  if (props.external) {
    address = "externalRecipe/" + props.name;
  } else {
    address = "recipe/" + props.name; 
  }
    return (
        <div className="box">
        <Link to = {address} target = "_self" > <h2 className = "t1"> {props.name} </h2> </Link>
        <div className="body">
          <img className="img" src={props.image} alt="sm"/>
          <p className="text">{props.description}</p>
        </div>
      </div>
    );
  }
  