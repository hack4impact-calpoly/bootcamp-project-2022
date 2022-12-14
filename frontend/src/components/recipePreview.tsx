import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../recipeData";
import "./recipePreview.css"

interface RecipePreviewProps {
  name: string;
  description: string;
  image: string;
}

export default function RecipePreview(props: RecipePreviewProps) {


  
  return (
    <div className="recipe">
      <h2 className ="recipe_header">
      <Link to={`/recipe/${props.name}`}>
          {props.name}
        </Link>
      </h2>

      <div className="recipe-body">
        <img className="img-small" src={props.image} alt={props.name} />
        <p className="text">{props.description}</p>
      </div>

    </div>
  );
}

