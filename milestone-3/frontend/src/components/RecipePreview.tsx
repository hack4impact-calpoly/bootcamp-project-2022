import { Link } from "react-router-dom";
import './RecipePreview.css'
import { Recipe } from '../recipeData';
import React, { useEffect, useState } from 'react';

interface RecipePreviewProps extends Recipe {
    external: boolean;
}

// previewing recipes before opening them for the actual receipe (ingredients etc)
export default function RecipePreview(props: RecipePreviewProps)
{
    let address = "";
    if (props.external) {
        address = "externalRecipe/" + props.name;
    }
    else {
        address = "recipe/" + props.name;
    }
    const id = props.name

    return (
        <div className="recipe3-flex">
            {/* <Link style={{textDecoration: 'none', color: '#faedcd'}} to={`/Page/${id}`} className ="links"> */}
            <Link style={{textDecoration: 'none', color: '#faedcd'}} to={address}> <h2 className ="links"> {props.name}</h2></Link>

            {/* <h2> {props.name} </h2> */}
            
            <p> {props.description}</p>
            <img className="imageIced" src={props.image1} alt={props.name}/>
            {/* <img className="imageHot" src={props.image2} alt={props.name}/> */}

        </div>
    );

}

