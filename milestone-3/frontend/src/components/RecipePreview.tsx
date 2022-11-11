
import React from 'react';
import './recipePreview.css'

export default function RecipePreview(recipe:any) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div>
      <h3> {recipe.name}</h3>
      <div>
        {/* <img src="../image/sushi.jpg" /> */}
        <img src={recipe.image} alt="img" />
        <h3>Description</h3>
        <p>{recipe.description}</p>
        <h3>Ingredients</h3>
        <ul>
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
      </div>
	  </div>
  );
}
