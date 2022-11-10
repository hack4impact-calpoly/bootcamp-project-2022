import React from 'react';
import { Link } from "react-router-dom";
import './RecipePage.css';

interface Recipe {
    name: string;
    link: string;
    desc: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  };

function RecipePage (props: Recipe) {
    return (
    <body>
    <main>
      <div className="flex-container">
        <div>
            <img className="flex-image" src={props.image} alt="img" />
        </div>

        <div className="flex-content">
          <h1>{props.name}</h1>
          <p>{props.desc}</p>
        
          <h2>Ingredients</h2>
          <ul>
          {props.ingredients.map(function(name, index){
            return <li key={index}>{name}</li>
          })}
          </ul>
        </div>
      </div>
      
      <h2>Preparation</h2>
      <ol>
        {props.instructions.map(function(name, index){
            return <li key={index}>{name}</li>
        })}
      </ol>
    </main>
  </body>
    );
}

export default RecipePage;