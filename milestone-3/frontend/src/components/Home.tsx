import recipes from "../recipeData";
import "./Home.css";
import { Recipe } from "../recipeData";
import { useState, useEffect } from "react";
import RecipePreview from "./recipePreview";

export default function Home() {
    const [externalRecipes, setExternalRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        fetch("https://bootcamp-milestone-4.onrender.com/recipe")
            .then((res) => res.json())
            .then((data) => setExternalRecipes(data));
    }, []);

    
    return (
        <main className="main-content body">
            <div>
                {recipes.map((recipe) => (
                    <RecipePreview {...recipe}/>
                ))}

                {externalRecipes.map((recipe) => (
                    <RecipePreview {...recipe} external/>
                ))}
            </div>
            
        </main>
        
    );
}