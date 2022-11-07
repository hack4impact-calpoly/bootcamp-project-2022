import React from 'react'
import {Link} from "react-router-dom";
import './recipepreview.css';

interface recipePreviewProps {
    name: string,
    desc: string,
    image: string
}

export default function RecipePreview({name, desc, image}: recipePreviewProps){
  return (
    <div className="recipe-card">
    <div className="recipe-l">
      <img
        src={image}
        alt="quinoa fried rice"
      />
    </div>
    <div className="recipe-r">
      <Link to={`recipe/:${name}`}><h4 className="recipe-title">{name}</h4></Link>
      <p className="recipe-descrip">
        {desc}
      </p>
    </div>
    </div>
  );
}
