import React from 'react';
import './style.css';
import {Recipe} from './recipeData';

export default function RecipePreview(props: Recipe) {
    return (
        <div className="recipe">
            <h2>
                <a href="recipe1.html">{props.name}</a>
            </h2>
            <div className="recipe-body">
                <img className="img-small" src={props.image} alt="img"/>
                <p className="recipe-description">{props.description}</p>
            </div>
        </div>
    );
}