import "./App.css";
import RecipePreview from "./components/RecipePreview";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipePage from "./components/RecipePage";
import About from "./components/About";
import recipeData from "./recipeData.json";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:name" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
