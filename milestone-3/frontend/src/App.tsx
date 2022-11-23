import React from "react";
import "./App.css";
import Home from "./components/home";
import About from "./components/About";
import RecipePage from "./components/RecipePage";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import recipe_list from "./recipeData";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* home page */}
        <Route path="/" element={<Home />} />
        {/* about page */}
        <Route path="/about" element={<About />} />
        {/* recipe pages */}
        <Route path="recipe/:id" element={<RecipePage/>} />
        <Route path="externalRecipe/:id" element={<RecipePage external />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
