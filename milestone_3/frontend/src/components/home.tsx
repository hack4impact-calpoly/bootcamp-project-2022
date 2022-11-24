import React, { useEffect, useState } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import recipes, { Recipe } from "../recipeData";
import RecipePreview from "./recipePreview";

export default function Home() {
  const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  const [allRecipes, setAllRecipes] = useState<Recipe[]>(recipes);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => { setExternalRecipes(data);
          return data
      }) 
      .then((data) => {setAllRecipes([...allRecipes, ...data])
      });
  }, []);
  

  
  return (
    // replace everything in between the <header> & <header /> tags
    // with your navbar code from your earlier milestones
    <header>
      <div>
        <h1 className="important_titles">Welcome to Tung's Cookie Recipes!</h1>
      </div>
      {allRecipes.map((recipe) => (
        <RecipePreview
          name={recipe.name}
          image={recipe.image}
          description={recipe.description}
          ingredients = {recipe.ingredients}
          instructions = {recipe.instructions}
        />
      ))}
      {/* {recipes.map((recipe) => (
        <RecipePreview  {...recipe} />
      ))} */}

    </header>
  );
}
