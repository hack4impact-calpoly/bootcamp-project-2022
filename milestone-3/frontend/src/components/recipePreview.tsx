import React from 'react';
import { isPropertySignature } from 'typescript';
import { Link } from 'react-router-dom';
import './recipePreview.css';

interface RecipePrev {
  name: string;
  description: string;
  image: string;
}

export default function RecipePreview(props: RecipePrev) {
  return (
    <div className="description-box">
      {/* lowercase name and replace space global search with "-" */}
        <Link className="food-name" to={`/recipes/${props.name.toLowerCase().replace(/\s/g, "-")}`}>
          {props.name}
        </Link>
        <br/>
        <span className="content">
            <img src={props.image} alt={props.image} className="pic"/>
            <p>{props.description}</p>
        </span>
      </div>
  );
}