import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../recipeData';
import './recipePreview.css'

export default function RecipePreview(props: Recipe) {
  return (
    <div className='container-m'>
      
      <Link className="active" to={`recipe/${props.name}`}>{props.name}</Link>
      <div>
        <img src={props.image} alt="img" />
        <p>{props.description}</p>
      </div>
	  </div>

    
  );

  
}