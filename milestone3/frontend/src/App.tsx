import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import RecipePreview from './components/recipePreview';
import recipes from "./recipeData";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipePage from "./components/recipePage";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="recipe/:id" element={<RecipePage />} />
      <Route path="recipe/:id" element={<RecipePage />} />
			<Route path="externalRecipe/:id" element={<RecipePage external />} />
    </Routes>    </BrowserRouter>
  );
}

export default App;
