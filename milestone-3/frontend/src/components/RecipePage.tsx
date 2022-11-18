
import React, { useEffect, useState } from 'react';
import './RecipePage.css'
import { recipes } from '../recipeData'; 

import { useParams } from "react-router-dom";

export interface Recipe {
    id:string;
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

export default function RecipePage() {
   const [recipe, setRecipe]=useState({id:"", name:"", description:"", image:"", ingredients:[], instructions:[]})
   const { id } = useParams();
   useEffect(() => {
    const myRecipe:any = recipes.find((recipe:Recipe)=>recipe.id===id)
    setRecipe(myRecipe)
   }, [id])
   
  
  return (
    <div className='recipe_page' >
      <header>
        <h1>    {recipe.name}  </h1>
      </header>
      <div className="container">
       
        <section id='left_section'>
            <img src={recipe.image} alt="img" />
        </section>
        <section id='right_section'>
            <h3>Description</h3>
            <p>{recipe.description}</p>
            <h3>Ingredients</h3>
            <ul id="description">
            {recipe.ingredients.map((ingredient:string)=>
                <li>{ingredient}</li>
            )}
            </ul>
            <h3>Method</h3>
            <ol>
            {recipe.instructions.map((instruction:string)=>
                <li>{instruction}</li>
            )} 
            </ol>
        </section>
      </div>
	  </div>
  );
}
