import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

interface Recipe {
    name: string;
    link: string;
    info: string;
    image: string;
    ingredients: string;
  };
  
  
  function RecipePreview({ name, link, info, image, ingredients }: any) {
      return (
          <div className="card">
            <h2>
              <Link to={ link }>{ name }</Link><br />
            </h2>
            <div className="card-body">
              <img className="img-small" src={ image } alt="img"/>
              <p className="card-text">{ info }</p>
            </div>
          </div>
      )
  };
  
  export default RecipePreview;