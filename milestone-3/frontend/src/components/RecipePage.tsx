
import React, { useEffect, useState } from 'react';
import './RecipePage.css'
import { recipes } from '../recipeData'; 

import { useParams } from "react-router-dom";

// id:'1',
// name: 'Spicy Crab Roll',
// description: 'Spicy Crab Roll is a popular Japanese sushi roll – creamy, satisfying, and fiery spicy.',
// image: sushiImg,
// ingredients: ["The Rice", "1 Teaspoon of The Spice", "The Sushi Mat" ],
// instructions:

export default function RecipePage() {
   const [recipe, setRecipe]=useState({id:"", name:"", description:"", image:"", ingredients:[], instructions:[]})
   const { id } = useParams();
   useEffect(() => {
    const myRecipe:any = recipes.find((recipe)=>recipe.id===id)
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
            {recipe.ingredients.map((ingredient:any)=>
                <li>{ingredient}</li>
            )}
            </ul>
            <h3>Method</h3>
            <ol>
            {recipe.instructions.map((instruction:any)=>
                <li>{instruction}</li>
            )} 
            </ol>
        </section>
      </div>
	  </div>
  );
}
