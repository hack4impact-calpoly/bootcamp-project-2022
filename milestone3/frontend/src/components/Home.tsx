import { homedir } from "os"
import { Link } from 'react-router-dom';
import RecipePreview from './recipePreview';
import recipes, {Recipe} from "../recipeData";
import React, { useEffect, useState } from "react";


export default function Home(){

    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data));
      }, []);

        return(
    <main>
            
        <h1 className="bighead" >  TOP DISHES TO SATISFY YOUR PALATE</h1>
        {recipes.map((recipe) => (
        <RecipePreview {...recipe} />
        ))}
        {externalRecipes.map((recipe) => (
        <RecipePreview external {...recipe} />
        ))}
    </main>  
        )
}
