import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";

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

export default function App(){
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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {recipes.map((recipe) => (
          <Route path="/recipes/:param" element={<RecipePage {...recipe} />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
