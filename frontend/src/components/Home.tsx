import RecipePreview from './recipePreview';
import recipes, { Recipe } from '../recipeData';
import { useState, useEffect } from 'react';
import React from 'react';


export default function Home() {


  const[externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  //if i want to get rid of the error in the console, need to implement a try and catch
  useEffect(() => {
      //fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      fetch("http://localhost:3001/recipe")
      .then((recipes) => recipes.json())
      .then((data) => setExternalRecipes(data));
      
  
  }, []);


  
    return (
      <div> 
      {/*}
      
          {recipes.map((recipe) => (
      <RecipePreview
              name={recipe.name}
              description={recipe.description}
              image={recipe.image}
              ingredients={recipe.ingredients}
              instructions={recipe.instructions} external={false}                  />
    ))}
          {*/}


        {externalRecipes.map((recipe) => (
              <RecipePreview
            name={recipe.name}
            description={recipe.description}
            image={recipe.image}
            ingredients={recipe.ingredients}
            instructions={recipe.instructions} external={true}                        />
    ))}


    </div>

        



    );
    }