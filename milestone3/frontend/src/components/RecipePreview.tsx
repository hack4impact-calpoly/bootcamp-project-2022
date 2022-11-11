import React from "react";
import { Link } from "react-router-dom";
import "./RecipePreview.css";

interface recipeProps {
    path: string;
    image: string;
}

export default function RecipePreview(props: recipeProps) {
    return(
        <Link to={props.path}>
            <img className="item" src={props.image} alt="yummy food"/>
        </Link>
    );
}