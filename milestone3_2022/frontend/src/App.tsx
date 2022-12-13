import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";

import { useState, useEffect } from "react";
import recipes, { Recipe } from "./recipeData";

export default function App(){
  const [fetRecipes, setFetRecipes] = useState<Recipe[]>([])
  useEffect(() => {
    fetch("https://bootcamp-milestone-4.onrender.com/recipe")
    .then((response) => response.json())
    .then((data) => setFetRecipes(data))
  }, [])

  let all = [...recipes, ...fetRecipes];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {all.map((recipe) => (
          <Route path="/recipes/:param" element={<RecipePage {...recipe} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
