import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from "../recipeData"


function RecipePreview (props: Recipe){
    let hRef = props.buttonHref
    return(     
        <div className = "recipe-container">
            <h2>{props.name}</h2>
            <img src = {props.image}
            alt = {props.imgAltName}
            width="350"
            ></img>
            <p>{props.description}</p>   
            <Link to = {hRef}>
                <button className='button-1'>
                    take me to the recipe!
                </button>
            </Link>   
        </div>
    )
};

export default RecipePreview;