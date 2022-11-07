import React from 'react'
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
      <a href="quinoa.html"
        ><h4 className="recipe-title">{name}</h4></a
      >
      <p className="recipe-descrip">
        {desc}
      </p>
    </div>
    </div>
  );
}
