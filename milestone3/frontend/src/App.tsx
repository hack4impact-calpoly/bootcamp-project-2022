import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipePage from "./components/RecipePage"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import recipeData, {Recipe} from "./recipeData";
// import {useState, useEffect} from "react";

function App() {

  // const[recipes, setRecipes] = useState<Recipe[]>([])
  //   useEffect(() => {
  //       fetch("https://bootcamp-milestone-4.onrender.com/recipe")
  //       .then((response) => response.json())
  //       .then((data) => setRecipes(data))
  //   }, [])

    // let allRecipes = [...recipeData, ...recipes];

  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="recipe/:id" element={<RecipePage />} />
      <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;
