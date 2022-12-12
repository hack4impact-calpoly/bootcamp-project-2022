import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../recipeData';
import './recipePreview.css'
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
    
    <div className='container-m'>
      
      <Link className="active" to={address}>{props.name}</Link>
      <div>
        <img src={props.image} alt="img" />
        <p>{props.description}</p>
      </div>
	  </div>

    
  );

  
}