import {RecipePreview} from './RecipePreview';
import recipe_list, { Recipe } from '../recipeData';
import '../App.css';
import React, { useState }  from 'react';
import { useEffect } from 'react';
function Home(){
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data))
      
  }, []);

    return(

       <main>
      <>
      <div className="main_header">
        <h1>Welcome to <span className="text--purple"> OnlyPotatoes!</span></h1>
      </div>
      {recipe_list.map((recipe) =>(
        <RecipePreview
        name={recipe.name}
        description={recipe.description}
        image={recipe.image}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        external = {false}
            />
          
      ))}
            {externalRecipes.map((recipe) =>(
        <RecipePreview
        name={recipe.name}
        description={recipe.description}
        image={recipe.image}
        ingredients={recipe.ingredients}
        instructions={recipe.instructions}
        external = {true}
            />
          
      ))}
      </>


    </main>
    )

}

export default Home