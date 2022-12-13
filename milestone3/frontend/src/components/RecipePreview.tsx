import {Link} from "react-router-dom";
import React, {useEffect, useState } from 'react';
import recipeData, {Recipe} from '../recipeData';

require('../css/RecipePreview.css')


interface RecipePreviewProps extends Recipe {
    external?: boolean
}

function RecipePreview(props: RecipePreviewProps){
    let path = ""
    if(props.external){
        path = "/external/" + props.name
    }
    else {
        path = "/recipe/" + props.name;
    }

    return(
        <div className="grid-item">
        <h2>{props.name}</h2>
        <Link to = {path}><img src = {props.image} className = "pics"/> </Link>
        <p>{props.description}</p>
        </div>
    )
}

export default RecipePreview;