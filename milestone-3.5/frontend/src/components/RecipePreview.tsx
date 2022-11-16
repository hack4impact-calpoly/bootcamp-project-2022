import React from 'react';
import './RecipePreview.css';
import { Recipe } from '../recipeData';
import { Link } from 'react-router-dom';

export default function RecipePreview(props: Recipe) {
  return (
    <div className="box">
      <h2>
        <Link to={`/recipes/${props.name}`}>{props.name}</Link>
      </h2>
      <div className="box-body">
        <img className="img-left" src={props.image} alt={props.name} />
        <p className="box-content">{props.description}</p>
      </div>
    </div>
  );
}
