import React, { useEffect, useState } from 'react';
import './recipePreview.css'

import recipes, {Recipe} from "../recipeData"
import { Link, useParams } from 'react-router-dom';



interface RecipePreviewProps extends Recipe {
  external: boolean;
}

// function RecipePreview(props: RecipePreviewProps) {

export default function RecipePreview(props: RecipePreviewProps) {

  return (
    
    
    <div className = "recipe_card">
      <div className = "recipe_main">
        
      {/* <Link to={`/externalRecipe/${props.name}`}> Recipe/${props.name}`}> */}
      <Link to ={props.external ? `/externalRecipe/${props.name}` : `/recipe/${props.name}`}>
        <h3 className = "recipeTitle"> {props.name} </h3>
      </Link>
      
      
        {/* <Link to={`/recipe/${props.name}`}>
        <h3 className = "recipeTitle"> {props.name} </h3>
      </Link> */}
      
      <div className = "recipe_body"> 
        <img  className = "image_preview" src={props.image} alt="img" />
        <p className = "text">{props.description}</p>
        </div>
      </div>
     
	  </div>

    


  );
}