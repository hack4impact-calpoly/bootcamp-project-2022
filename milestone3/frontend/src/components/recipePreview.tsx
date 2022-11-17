import React from 'react';
import './recipePreview.css'
import { Recipe } from '../recipeData';
import { Link } from 'react-router-dom';

interface RecipePreviewProps extends Recipe {
    external?: boolean;
}

export default function RecipePreview(props: RecipePreviewProps) {
    let address = "";
    if (props.external) {
        address = "externalRecipe/" + props.name;
    } else {
        address = "recipe/" + props.name; // whatever it was before
    }
    
    return (
        <div className="card">
            <Link to={address}>
                <h2 className="food-title">{props.name}</h2>
                <img className="card-prev"
                    src={props.image}
                    alt={props.name}/>
                <p className="food-description">{props.description}</p>
            </Link>
        </div>
    );
  }

RecipePreview.defaultProps = {
    external: false,
};