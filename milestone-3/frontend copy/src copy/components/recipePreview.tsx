import React, { useEffect, useState } from 'react';
import './recipePreview.css'

import recipes, {Recipe} from "../recipeData"
import { Link, useParams } from 'react-router-dom';





export default function RecipePreview(props: Recipe) {

  return (
    
    
    <div className = "recipe_card">
      <div className = "recipe_main">
      <Link to={`/recipe/${props.name}`}>
        <h3 className = "recipeTitle"> {props.name} </h3>
      </Link>
      <div className = "recipe_body"> 
        <img  src={props.image} alt="img" />
        <p className = "text">{props.description}</p>
        </div>
      </div>
     
	  </div>

    


  );
}