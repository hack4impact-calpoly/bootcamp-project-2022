import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipePage from "./components/recipePage";


interface Recipe {
  name: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}


function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/recipe")
    .then((response) => response.json())
    .then((recipeData) => setRecipes(recipeData)).catch(err => console.log(err))
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
