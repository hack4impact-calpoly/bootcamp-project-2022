import React, { useState, useEffect } from "react";
import RecipePreview from './RecipePreview';
import recipes, { Recipe } from "../recipeData"; 


export default function Home() {
  
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);

    return (
      <div> 
          { recipes.map(recipe =>
              <RecipePreview 
                external = {false} 
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
            )}{
            externalRecipes.map(recipe =>
              <RecipePreview 
              external = {true} 
              name = {recipe.name} 
              imgAltName = {recipe.name + "image"}
              description = {recipe.description} 
              image = {recipe.image} 
              ingredients = {recipe.ingredients} 
              instructions = {recipe.instructions}
              orig_link = {"https://bootcamp-milestone-3.netlify.app/"}
              orig_link_name ={"Hu's Chews"}
              buttonHref = {"externalRecipe/" + recipe.name}/>
            )
            }
        </div>
    );
}