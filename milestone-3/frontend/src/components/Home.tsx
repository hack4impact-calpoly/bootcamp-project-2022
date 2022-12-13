import Navbar from "./Navbar";
import RecipePreview from "./RecipePreview";
import recipeData from "../recipeData";
import React, { useState, useEffect } from 'react';
import { Recipe } from './RecipePreview';


{/* My recipe interface is different than the Hu's Chews API, so here I have the API's recipe object. I will 
then take this recipe object and convert to a list of Recipes according to my Recipe object */}
export interface RecipeExternal {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
}

function Home() {
    const [externalRecipes, setExternalRecipes] = useState<RecipeExternal[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
          .then((res) => res.json())
          .then((data) => setExternalRecipes(data))
      }, []);

    {/* map recipes of API type to my Recipe type*/}
    const extRecipeNew: Recipe[] = externalRecipes.map((recipe) => (
        {
            name: recipe.name,
            image: recipe.image,
            desc: recipe.description,
            alt: recipe.name,
            url: recipe.name, // External recipes fetched by name
            ingredients: recipe.ingredients,
            steps: recipe.instructions,
            source: `https://bootcamp-milestone-4.onrender.com/recipe/${recipe.name}`
        }))
    
    const [internalRecipes, setInternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("http://localhost:3001/recipe")
          .then((res) => res.json())
          .then((data) => setInternalRecipes(data))
      }, []);

    return(
    <body>
        <header>
            <h1>Today's Sweets</h1>
            <p><i>Find your favorite baking recipes</i></p>
        </header>
        <main>
            {/* Internal Recipes */}
            {internalRecipes.map((recipe) => (
                <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.desc} alt={recipe.alt} url={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} source={recipe.source} external={false}/>
            ))}
            {/* 
            <RecipePreview name={recipeData[0].name} image={recipeData[0].image} desc={recipeData[0].desc} alt={recipeData[0].alt} url={recipeData[0].url} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source} external={false} />
            <RecipePreview name={recipeData[1].name} image={recipeData[1].image} desc={recipeData[1].desc} alt={recipeData[1].alt} url={recipeData[1].url} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source} external={false} />
            <RecipePreview name={recipeData[2].name} image={recipeData[2].image} desc={recipeData[2].desc} alt={recipeData[2].alt} url={recipeData[2].url} ingredients={recipeData[0].ingredients} steps={recipeData[0].steps} source={recipeData[0].source} external={false} /
            */}
            {/* External Recipes */}
            {extRecipeNew.map((recipe) => (
                <RecipePreview name={recipe.name} image={recipe.image} desc={recipe.desc} alt={recipe.alt} url={recipe.url} ingredients={recipe.ingredients} steps={recipe.steps} source={recipe.source} external/>
            ))}
        </main>
    </body>
    )
}

export default Home;