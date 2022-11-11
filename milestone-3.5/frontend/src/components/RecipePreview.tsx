import { Link } from "react-router-dom";
import { RecipePreviewData } from "../recipeData";
import { useState, useEffect } from "react";
import { Recipe } from "../recipeData";

//This renders a Recipe Preview card from the given RecipePreviewData data object
export default function RecipePreview(props: RecipePreviewData) {
  return (
    <div className="flex-content">
      <h2>
        {/* This passes the name from the props into the link, to render the correct RecipePage */}
        <Link to={"/recipe/" + props.name}>{props.name}</Link>
      </h2>
      <p>{props.description}</p>
      <img className="flex-image" src={props.image} alt={props.imgAlt} />
    </div>
  );
}
