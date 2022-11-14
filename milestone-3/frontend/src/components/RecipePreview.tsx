import { Link } from "react-router-dom";
import './RecipePreview.css'
import { Recipe } from '../recipeData';
import React from 'react';
import { parentPort } from "worker_threads";

export default function RecipePreview(props: Recipe)
{
    return (
        <div className="recipe1-flex">
            <Link style={{textDecoration: 'none', color: '#faedcd'}} to="/" className ="links">
            <h2> {props.name} </h2>
            </Link>
            <p> {props.description}</p>
            <img className="imageIced" src={props.image1} alt={props.name}/>
            <img className="imageHot" src={props.image2}/>

        </div>
    );

}

