import React from 'react';
import { Link } from 'react-router-dom';

interface Recipe{
    name: string;
    image: string;
    desc: string;
    altName: string;
    buttonHref: string; 
};


function RecipePreview (props: Recipe){
    return(
        <div className = "recipe-container">
            <h2>{props.name}</h2>
            <img src = {props.image}
            alt = {props.altName}
            width="350"
            ></img>
            <p>{props.desc}</p>   
            <Link to = {props.buttonHref}>
                <button>
                    take me to the recipe!
                </button>
            </Link>    
        </div>
    )
};

export default RecipePreview;