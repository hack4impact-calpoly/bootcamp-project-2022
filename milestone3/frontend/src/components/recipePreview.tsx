import React from 'react';
import './style.css';
import {Recipe} from './recipeData';
import {Link} from 'react-router-dom';

export default function RecipePreview(props: Recipe) {
    return (
        <div className="recipe">
            <h2>
                <Link to={"/recipe/" + props.name}>{props.name}</Link>
            </h2>
            <div className="recipe-body">
                <img className="img-small" src={props.image} alt="food"/>
                <p className="recipe-description">{props.description}</p>
            </div>
        </div>
    );
}