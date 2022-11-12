import React from 'react';
import recipes from '../recipeData';
import Navbar from "./Navbar";
import { Recipe } from '../recipeData';
import "./RecipePage.css";

export default function RecipePage(props: Recipe) {
    return (
        <header>
    <div className="recipe-box">  
        <img src={props.image} alt={props.name} className="pic-2"/>
        <div className="recipe-1">
            <h2 className="title-txt">{props.name}</h2>
            <p>{props.description}</p>
            <h1 className="big-txt">Ingredients</h1>
            <ul>
                {props.ingredients.map((ingredient) => 
                <li> {ingredient} </li>
                )
                }
            </ul>
            <h1 className="big-txt">Preparation</h1>
            <ol>
                {props.instructions.map((instruction) => 
                <li> {instruction} </li>
                )}
            </ol>
        </div>
    </div>
    </header>
    );
}