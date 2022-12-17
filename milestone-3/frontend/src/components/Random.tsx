import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  _id: string;
}

interface Recipe_ext extends Recipe {
  __v?: number;
}

export default function Random() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/recipe")
      .then((response) => response.json())
      .then((recipeData) => {
        setRecipes(recipeData);
        console.log(recipeData);
      })
      .catch((err) => console.log(err));
  }, []);

  const index = getRandomInt(recipes.length);
  const recipe = recipes[index];

  const handleClick = () => {
    navigate(`/recipe/${recipe.name}`);
  };

  return (
    <button onClick={handleClick}>Open Random Recipe</button>
  );
}
