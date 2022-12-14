import React, { useState, useEffect } from "react";
import RecipePreview from './RecipePreview';
import recipes, { Recipe } from "../recipeData"; 


export default function Home() {
  return (
    <div> 
        { recipes.map(recipe =>
            <RecipePreview 
              // external = {false} 
              name = {recipe.name} 
              image = {recipe.image} 
              description = {recipe.description} 
              imgAltName = {recipe.imgAltName} 
              buttonHref = {recipe.buttonHref}
              ingredients = {recipe.ingredients}
              instructions = {recipe.instructions}
              orig_link_name = {recipe.orig_link_name}
              orig_link = {recipe.orig_link}
            />
          )}
      </div>
  );
}