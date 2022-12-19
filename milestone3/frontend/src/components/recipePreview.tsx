import React from 'react';
import './recipePreview.css'
import {Recipe} from "../recipeData"
import { Link } from 'react-router-dom';


export default function RecipePreview(props: Recipe) {
  let path = "/recipe/" + props.name;
  return (
    <div className = "recdiv">

    <Link to={path}><header className="rectit">{props.name}</header></Link>
    <div className="recdiv2">
    <p className="recdes">{props.description}</p>
    <img src={props.image} className="recpic" />
    </div>







	  </div>









  );
}