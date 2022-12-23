import { homedir } from "os"
import { Link } from 'react-router-dom';
import RecipePreview from './recipePreview';
import {Recipe} from "../recipeData";
import React, { useEffect, useState } from "react";


export default function Home(){

    const [databaseRecipes, setDatabaseRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/recipe")
          .then((res) => res.json())
          .then((data) => setDatabaseRecipes(data));
      }, []);

        return(
    <main>
            
        <h1 className="bighead" >  TOP DISHES TO SATISFY YOUR PALATE</h1>

        {databaseRecipes.map((recipe) => (
        <RecipePreview {...recipe} />
        ))}
    </main>  
        )
}
