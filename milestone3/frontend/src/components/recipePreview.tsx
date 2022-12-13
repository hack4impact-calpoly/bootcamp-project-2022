import React from 'react';
import './recipePreview.css'
import { Recipe } from '../recipeData';
import { Link } from 'react-router-dom';


export default function RecipePreview(props: Recipe) {
    let address = "recipe/" + props.name;
    
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