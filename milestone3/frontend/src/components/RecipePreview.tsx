import React from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../recipeData";
import "./RecipePreview.css";

interface recipeProps extends Recipe {  
    external: boolean;
}

export default function RecipePreview(props: recipeProps) {
    let address = "";
    if (props.external) {
        address = "externalRecipe/" + props.name;
    } else {
        address = "recipe/" + props.name; 
    } 
    return(
        <Link to={address}>
            <img className="item" src={props.image} alt="yummy food"/>
        </Link>
    );
}