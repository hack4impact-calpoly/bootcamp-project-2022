import { Link } from "react-router-dom";
import './RecipePreview.css'
import { Recipe } from '../recipeData';
// import React, { useEffect, useState } from 'react';

interface RecipePreviewProps extends Recipe {
    external: boolean;
}

// previewing recipes before opening them for the actual receipe (ingredients etc)
export default function RecipePreview(props: RecipePreviewProps)
{
    let address = "";
    // if (props.external) {
    //     address = "externalRecipe/" + props.name;
    // }
    // else {
    address = "Recipe/" + props.name;
    // }
    // const id = props.name

    return (
        <div className="recipe3-flex">
            <Link style={{textDecoration: 'none', color: '#faedcd'}} to={address}>
                <h2 className ="links"> {props.name} </h2>
            </Link>            
            <p>{props.description}</p>
            <img src={props.image} className="imageIced" alt={props.name}/>
        </div>
    );
}

// RecipePreview.defaultProps = {
//     external: false
// }