import React from 'react';
import { Link } from "react-router-dom";
import './RecipePreview.css';

interface Recipe {
    name: string;
    link: string;
    desc: string;
    image: string;
    instructions: string[];
    ingredients: string[];
  };
  
  
  function RecipePreview(props: Recipe) {
      return (
          <div className="card">
            <h2>
              <Link to={ props.link }>{ props.name }</Link><br />
            </h2>
            <div className="card-body">
              <img className="img-small" src={ props.image } alt="img"/>
              <p className="card-text">{ props.desc }</p>
            </div>
          </div>
      )
  };
  
export default RecipePreview;