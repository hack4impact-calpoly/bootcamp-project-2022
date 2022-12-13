import React from 'react';
import './style.css';
import {Recipe} from './recipeData';
import {Link} from 'react-router-dom';

interface RecipePreviewProps extends Recipe {
    external: boolean;
}

export default function RecipePreview(props: RecipePreviewProps) {
    let address = "";
    address = "recipe/" + props.name;

    return (
        <div className="recipe">
            <h2>
                <Link to={address}>{props.name}</Link>
            </h2>
            <div className="recipe-body">
                <img className="img-small" src={props.image} alt="food"/>
                <p className="recipe-description">{props.description}</p>
            </div>
        </div>
    );
}

RecipePreview.defaultProps = {
    external: false
};