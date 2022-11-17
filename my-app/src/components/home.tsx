import "./home.css";
import RecipePreview from "./RecipePreview";
import recipes from "../recipeData";
import { Recipe } from "../recipeData";
import { useEffect, useState } from "react";
export default function Home()
{
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
      .then((res) => res.json())
      .then((data) => setExternalRecipes(data));
  }, []);
    let all = recipes.concat(externalRecipes);
    return (
    <div className="home">
        <div className="intro">
        <h1> Milestone 3 </h1>
            <h2>Check them out</h2>
        </div>
            <div className="cards"> 
                {all.map(recipe =>
                    <RecipePreview name = {recipe.name} image={recipe.image} description={recipe.description} ingredients={recipe.ingredients} instructions={recipe.instructions}/>)};
            </div>
    </div>
    );
}