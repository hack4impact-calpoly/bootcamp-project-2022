import RecipePreview from "./RecipePreview";
import "../App.css"

// milestone 3.5
import { useState, useEffect } from "react";

export interface Recipe {
  name: string;
  description: string;
  image: string;
  image2: string
  info: string[];
  intro: string;
  ingredients: string[];
  instructions: string[];
}

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      let data = await fetch("http://localhost:3001/recipe");
      let recipes = await data.json();
      if (!ignore) {
        setRecipes(recipes);
      }
    }
    fetchData();
    return () => { ignore = true; }
  }, [])
  
  return (
    <main className="recipes">
      {recipes.map((recipe) => (
        <RecipePreview {...recipe}/>
      ))}
    </main>
  );
}