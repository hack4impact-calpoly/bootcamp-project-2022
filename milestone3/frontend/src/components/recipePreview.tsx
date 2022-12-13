import React from 'react';
import {useState, useEffect} from 'react'
import { Recipe } from '../recipeData';
import './recipePreview.css'
import { Link } from 'react-router-dom';

interface RecipePreview{
    name: string,
    description: string,
    image: string
    external?: boolean;
}


export default function RecipePreview(props: RecipePreview) {
    
    return (
        <div className = "flex-container3 ">
    
            {/* <!--first food item intro--> */}
            <h1 className = "important padding">  <Link to =  {props.external ? "externalRecipe/" + props.name: "recipe/" + props.name}> {props.name} </Link></h1>

            <h3 className = "padding flex-container4"> {props.description} </h3>

            {/* <!--pictures--> */}
            <img className = "padding container" src= {props.image} width = '700' height = '300' /> 
            <br>
            </br>
            
        </div>)
}

