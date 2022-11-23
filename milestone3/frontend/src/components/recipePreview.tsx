import React from 'react';
import { Recipe } from '../recipeData';
import './recipePreview.css'
import { Link } from 'react-router-dom';

interface RecipePreview{
    name: string,
    description: string,
    image: string
}



export default function RecipePreview(props: Recipe) {
    return (
        <div className = "flex-container3 ">
    
            {/* <!--first food item intro--> */}
            <h1 className = "important padding">  <Link to =  {"recipe/" + props.name}> {props.name} </Link></h1>

            <h3 className = "padding flex-container4"> {props.description} </h3>

            {/* <!--pictures--> */}
            <img className = "padding container" src= {props.image} width = '700' height = '300' /> 
            <br>
            </br>
        </div>)
}

