
import React from 'react';
import './recipePreview.css'
 
 

export default function RecipePreview(recipe:any) {
 
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
