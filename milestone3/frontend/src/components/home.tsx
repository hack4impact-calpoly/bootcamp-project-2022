import React, { useEffect } from "react";
import "./home.css";
import RecipePreview from './recipePreview';
import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3001/recipe")
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <body>
        <div className="cards" id="recipe-list">
            {recipes.map((recipe: any) => (
              <RecipePreview {...recipe} />
          ))}
        </div>
    </body>
  );
}
